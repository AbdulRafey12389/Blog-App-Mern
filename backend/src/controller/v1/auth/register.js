// NODE MODULES...
import jwt from 'jsonwebtoken';

// CUSTOM MODULES
import { generateUsername } from '../../../utils/username.js';
import { sendOtpEmail } from '../../../config/nodeMailer.js';

// MODELS...
import User from '../../../models/user.model.js';
import Otp from '../../../models/otp.model.js';

const register = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    // Check if user already exists
    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({ message: 'User already exists' });
    }

    const username = generateUsername();

    // Create and save new user (hashing happens in schema)
    await User.create({ name, username, email, password });

    // Generate 6-digit OTP
    const otpCode = Math.floor(100000 + Math.random() * 900000).toString();

    // Save OTP in DB
    await Otp.create({
      email,
      otp: otpCode,
      expiresAt: new Date(Date.now() + 10 * 60 * 1000), // 10 mins
    });

    // Send OTP email
    await sendOtpEmail(email, otpCode, name);

    return res.status(201).json({
      message: 'User registered successfully but not verify. Please verify your email with OTP.',
    });
  } catch (error) {
    res.status(500).json({ message: 'Server Error', error: error.message });
  }
};

export default register;
