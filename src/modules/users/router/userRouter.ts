import express from 'express';
import { signUpController } from '../index';

export const userRouter = express.Router();

userRouter.post('/api/v1/signup',
  (req: any, res: any) => signUpController.createUser(req, res));
