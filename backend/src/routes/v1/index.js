import express from 'express';

const router = express.Router();

// AUTH ROUTES...
import authRoutes from './auth.js';
import userRoutes from './user.js';

router.get('/', (_, res) => {
  res.send('v1 routes is working');
});

router.use('/auth', authRoutes);
router.use('/users', userRoutes);

export default router;
