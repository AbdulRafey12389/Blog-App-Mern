import express from 'express';
import getAllUsers from '../../controller/v1/user/getAllUser.js';
import getUserById from '../../controller/v1/user/getUSerById.js';
import editUserProfile from '../../controller/v1/user/editUserProfile.js';

import auth from '../../middlewares/auth.middleware.js';
import authorizeRole from '../../middlewares/admin.middleware.js'; // optional role check

const router = express.Router();

// GET /api/users - Admin only
router.get('/', auth, authorizeRole('admin'), getAllUsers);

// GET /api/users/:id - Public
router.get('/:id', auth, authorizeRole('admin'), getUserById);

// PUT /api/users/:id - Only owner can update
router.put('/:id', auth, editUserProfile);

export default router;
