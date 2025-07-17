// utils/auth.js
import { jwtDecode } from 'jwt-decode';

export const isTokenValid = () => {
  const token = localStorage.getItem('token');
  if (!token) return false;

  try {
    const { exp } = jwtDecode(token);
    // Check if token is expired
    if (Date.now() >= exp * 1000) {
      return false;
    }

    return true;
  } catch (error) {
    console.error(error);

    return false; // Invalid token
  }
};
