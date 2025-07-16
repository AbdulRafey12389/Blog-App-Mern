const generateOtpTemplate = (otp, name) => {
  return `
    <div style="max-width: 600px; margin: auto; font-family: 'Segoe UI', sans-serif; background-color: hsl(0, 0%, 100%); color: hsl(20, 14.3%, 4.1%); border-radius: 12px; box-shadow: 0 5px 15px rgba(0,0,0,0.1); padding: 32px;">
      <h2 style="color: hsl(24.6, 95%, 53.1%); margin-bottom: 16px;">Hello ${name},</h2>
      <p style="font-size: 16px;">Thank you for signing up to <strong>My Blog App</strong>.</p>
      <p style="margin: 16px 0;">To verify your email, please enter the following One-Time Password (OTP):</p>
      <div style="background: hsl(60, 4.8%, 95.9%); color: hsl(24, 9.8%, 10%); padding: 16px; font-size: 24px; text-align: center; letter-spacing: 6px; font-weight: bold; border-radius: 8px;">
        ${otp}
      </div>
      <p style="margin-top: 24px;">This OTP will expire in 10 minutes.</p>
      <p>If you did not request this, please ignore this email.</p>
      <hr style="margin: 24px 0;">
      <p style="font-size: 14px; color: hsl(25, 5.3%, 44.7%); text-align: center;">&copy; ${new Date().getFullYear()} My Blog App. All rights reserved.</p>
    </div>
  `;
};


export default generateOtpTemplate;