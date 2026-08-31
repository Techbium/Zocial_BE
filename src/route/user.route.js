import express from 'express';
import { getInfo, postInfo } from '../controllers/user.controller.js';

export const userRouter = express.Router();

userRouter.post('/me', postInfo);
userRouter.get('/me', getInfo)