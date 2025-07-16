import express from 'express';

// CONTROLLERS...
import register from '../../controller/v1/auth/register.js';
import verifyOtp from '../../controller/v1/auth/verifyOtp.js';
import login  from '../../controller/v1/auth/login.js';

const router = express.Router();

router.post('/signup', register);
router.post('/verify-email', verifyOtp);
router.post('/signin', login);

export default router;
