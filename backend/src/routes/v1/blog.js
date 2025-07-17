import express from 'express';

import createBlog from '../../controller/v1/blog/createBlog.js';
import getBlogById from '../../controller/v1/blog/getBlogById.js';
import getBlogsByAuthor from '../../controller/v1/blog/getBlogByUser.js';
import getPrivateBlogs from '../../controller/v1/blog/getPrivateBlogs.js';
import getPublicBlogs from '../../controller/v1/blog/getPublicBlogs.js';
import updateBlog from '../../controller/v1/blog/updateBlog.js';
import deleteBlogById from '../../controller/v1/blog/deleteBlogById.js';

import auth from '../../middlewares/auth.middleware.js';
import upload from '../../middlewares/multer.milddleware.js';

const router = express.Router();

// router.route('/').get(getAllBlogs).post(protect, createBlog);
router.post('/create', auth, upload.single('coverImage'), createBlog);
router.get('/private', auth, getPrivateBlogs);
router.get('/public', getPublicBlogs);
router.get('/:blogId', getBlogById);
router.get('/userId/:userId', getBlogsByAuthor);
router.put('/edit/:blogId', auth, upload.single('coverImage'), updateBlog);
router.delete('/delete/:blogId', auth, deleteBlogById);
// router
//   .route('/:id')
//   .get(getBlogById)
//   .put(protect, updateBlog)
//   .delete(protect, deleteBlog);
// router.get('/author/:authorId', getBlogsByAuthor);

export default router;
