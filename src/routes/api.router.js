import express from 'express';

import authRouter from './api/auth.router.js';

const router = express();

router.use('/auth', authRouter);

export default router;