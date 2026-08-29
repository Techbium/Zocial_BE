import express from 'express';
import { getInfo } from '../controllers/user.controller.js';

export const userRouter = express.Router();

userRouter.post('/me', getInfo);