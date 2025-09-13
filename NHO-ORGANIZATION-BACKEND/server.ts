import express from 'express';
import dotenv from 'dotenv';
import pool from './config/database';
import cloudinary from './config/cloudinary';
import multer from 'multer';
import userRoutes from './routes/userRoutes';

dotenv.config();
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const upload = multer({ storage: multer.memoryStorage() });
app.use('/api/users', userRoutes);

const PORT = process.env.PORT || 5000;

app.get('/', async (req, res) => {
  try {
    const result = await pool.query('SELECT NOW()');
    res.send(`Backend is running! Database time: ${result.rows[0].now}`);
  } catch (err) {
    const errorMessage = err instanceof Error ? err.message : String(err);
    console.error('Database error:', errorMessage);
    res.status(500).send(`Database error: ${errorMessage}`);
  }
});

app.post('/api/upload', upload.single('file'), async (req, res) => {
  try {
    if (!req.file) return res.status(400).send('No file uploaded');
    const b64 = Buffer.from(req.file.buffer).toString('base64');
    const dataURI = `data:${req.file.mimetype};base64,${b64}`;
    const uploadResponse = await cloudinary.uploader.upload(dataURI, {
      upload_preset: process.env.CLOUDINARY_UPLOAD_PRESET || 'nho_upload',
    });
    res.json({ url: uploadResponse.secure_url });
  } catch (err) {
    const errorMessage = err instanceof Error ? err.message : String(err);
    console.error('Upload error:', errorMessage);
    res.status(500).send(`Upload error: ${errorMessage}`);
  }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`)).on('error', (err) => {
  console.error('Server startup error:', err);
  process.exit(1);
});