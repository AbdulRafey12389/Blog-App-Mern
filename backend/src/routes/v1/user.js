import express from 'express';
import getAllUsers from '../../controller/v1/user/getAllUser.js';
import getUserById from '../../controller/v1/user/getUSerById.js';
import editUserProfile from '../../controller/v1/user/editUserProfile.js';
import bookmarkBlog from '../../controller/v1/user/bookMarkBlog.js';

import auth from '../../middlewares/auth.middleware.js';
import authorizeRole from '../../middlewares/admin.middleware.js'; // optional role check

import upload from '../../middlewares/multer.milddleware.js';
import getBookmarks from '../../controller/v1/user/getBookMarks.js';
import getUserStats from '../../controller/v1/user/getUserStats.js';

const router = express.Router();

// GET /api/users - Admin only
router.get('/', auth, authorizeRole('admin'), getAllUsers);

router.get('/bookmarks', auth, getBookmarks);

router.get('/stats', auth, getUserStats);

// GET /api/users/:id - Public
router.get('/:id', auth, getUserById);

// PUT /api/users/:id - Only owner can update
router.put('/edit/:id', auth, upload.single('profilePic'), editUserProfile);

router.put('/bookmarks/:blogId', auth, bookmarkBlog);

export default router;
