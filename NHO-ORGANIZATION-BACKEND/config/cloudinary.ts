import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME || 'dn4qzttzn',
  api_key: process.env.CLOUDINARY_API_KEY || '411393464548883',
  api_secret: process.env.CLOUDINARY_API_SECRET || 'mw5Wggz7dDdmz8u8rWQFg3BjYIQ',
});

export default cloudinary;