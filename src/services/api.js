
import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL;

const axiosInstance = axios.create({
  baseURL: API_URL,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json'
  }
});

export const api = {
  async login(email, password) {
    try {
      const response = await axiosInstance.get(`/users`, {
        params: { email }
      });
      
      const users = response.data;
      if (!users || users.length === 0) {
        return { success: false, message: 'User not found' };
      }
      
      const user = users[0];
      if (user.password === password) {
        const { password: _, ...userWithoutPassword } = user;
        return { success: true, user: userWithoutPassword };
      } else {
        return { success: false, message: 'Invalid password' };
      }
    } catch (error) {
      console.error('Login error:', error);
      return { success: false, message: 'Login failed. Please try again.' };
    }
  },

  async register(userData) {
    try {
      const response = await axiosInstance.post('/users', userData);
      const { password: _, ...userWithoutPassword } = response.data;
      return { success: true, user: userWithoutPassword };
    } catch (error) {
      return { 
        success: false, 
        message: error.response?.data?.message || 'Registration failed. Please try again.' 
      };
    }
  }
};



