import nodemailer from 'nodemailer';
import generateOtpTemplate from '../utils/generateOtpTemplate.js';

export const sendOtpEmail = async (toEmail, otpCode, userName) => {
  const transporter = nodemailer.createTransport({
    service: 'gmail', // or use your SMTP settings
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: `"Your Blog App" <${process.env.EMAIL_USER}>`,
    to: toEmail,
    subject: 'Verify Your Email - OTP Code',
    html: generateOtpTemplate(otpCode, userName),
  };

  await transporter.sendMail(mailOptions);
};
