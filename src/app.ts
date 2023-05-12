import express from 'express';
import { userRouter } from './modules/users/router/userRouter';

export const app = express();

app.use(express.json());

app.use(userRouter);

