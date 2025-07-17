import express from 'express';

const router = express.Router();

// AUTH ROUTES...
import authRoutes from './auth.js';
import userRoutes from './user.js';
import blogRoutes from './blog.js';

router.get('/', (_, res) => {
  res.send('v1 routes is working');
});

router.use('/auth', authRoutes);
router.use('/users', userRoutes);
router.use('/blogs', blogRoutes);

export default router;
