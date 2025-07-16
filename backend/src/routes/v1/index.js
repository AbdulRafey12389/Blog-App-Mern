import express from 'express';

const router = express.Router();

// AUTH ROUTES...
import authRoutes from './auth.js'

router.get("/", (_, res) => {
    res.send('v1 routes is working');
});

router.use('/auth', authRoutes)

export default router;

