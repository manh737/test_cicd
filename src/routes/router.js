import express from 'express';

import apiRouter from './api.router.js';

const router = express();

router.use('/api', apiRouter);

export default router;