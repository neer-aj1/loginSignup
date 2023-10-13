import express from 'express';
const router = express.Router();

import { login, logout, registerUser } from "../controllers/userController.js";

router.post('/register', registerUser);
router.post('/login', login);
router.post('/logout',logout)
export default router;