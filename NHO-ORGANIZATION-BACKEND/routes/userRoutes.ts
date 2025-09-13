import express from 'express';
import { signup, login, getUsers } from '../controllers/userController';
import { authenticate, isAdmin } from '../middleware/auth';

const router = express.Router();

router.post('/signup', signup); // Open for registration
router.post('/login', login); // Open for login
router.get('/users', authenticate, isAdmin, getUsers); // Protected for admin

export default router;