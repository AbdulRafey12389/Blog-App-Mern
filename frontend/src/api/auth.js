// src/api/auth.js
import axios from './axios';

export async function registerUser(formData) {
  console.log(formData);

  try {
    const response = await axios.post('auth/signup', formData);
    return response.data;
  } catch (error) {
    return {
      success: false,
      message: error.response?.data?.message || 'Registration failed',
    };
  }
}

export async function loginUser(formData) {
  try {
    const response = await axios.post('auth/signin', formData);
    return response.data;
  } catch (error) {
    return {
      success: false,
      message: error.response?.data?.message || 'Login failed',
    };
  }
}

export async function verifyEmailRequest(data) {
  try {
    const response = await axios.post('auth/verify-email', data);
    return response.data;
  } catch (error) {
    return {
      success: false,
      error: error.response?.data?.message || 'Verification failed',
    };
  }
}
