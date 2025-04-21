import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL;

const axiosInstance = axios.create({
  baseURL: API_URL,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  }
});

// Add retry logic
const MAX_RETRIES = 3;
const RETRY_DELAY = 1000; // 1 second

const retryRequest = async (config, retryCount = 0) => {
  try {
    return await axios(config);
  } catch (error) {
    if (retryCount < MAX_RETRIES && (error.code === 'ERR_NETWORK' || error.response?.status === 429)) {
      await new Promise(resolve => setTimeout(resolve, RETRY_DELAY * (retryCount + 1)));
      return retryRequest(config, retryCount + 1);
    }
    throw error;
  }
};

axiosInstance.interceptors.response.use(
  response => response,
  async error => {
    if (error.config && !error.config._retry) {
      error.config._retry = true;
      return retryRequest(error.config);
    }
    return Promise.reject(error);
  }
);

export const api = {
  // Login user
  async login(email, password) {
    try {
      const response = await axiosInstance.get(`/users?email=${email}`);
      const user = response.data[0];
      
      if (user && user.password === password) {
        const { password, ...userWithoutPassword } = user;
        localStorage.setItem('user', JSON.stringify(userWithoutPassword));
        return { success: true, user: userWithoutPassword };
      }
      
      return { success: false, message: 'Invalid credentials' };
    } catch (error) {
      console.error('Login error:', error);
      return { success: false, message: 'Login failed. Please check your connection.' };
    }
  },

  // Register user
  async register(userData) {
    try {
      // Check if user exists
      const checkResponse = await axiosInstance.get(`/users?email=${userData.email}`);
      
      if (checkResponse.data.length > 0) {
        return { success: false, message: 'Email already registered' };
      }

      const newUser = {
        ...userData,
        createdAt: new Date().toISOString()
      };

      const response = await axiosInstance.post('/users', newUser);
      
      const { password, ...userWithoutPassword } = response.data;
      localStorage.setItem('user', JSON.stringify(userWithoutPassword));
      
      return { success: true, user: userWithoutPassword };
    } catch (error) {
      console.error('Registration error:', error);
      return { 
        success: false, 
        message: error.response?.data?.message || 'Registration failed. Please try again.'
      };
    }
  },

  // Logout user
  logout() {
    localStorage.removeItem('user');
  },

  // Get user profile
  async getUserProfile() {
    try {
      const user = JSON.parse(localStorage.getItem('user'));
      if (!user) throw new Error('No user found');

      const response = await axiosInstance.get(`/users/${user.id}`);
      return { success: true, user: response.data };
    } catch (error) {
      return { success: false, message: 'Failed to fetch user profile' };
    }
  },

  // Update user profile
  async updateUserProfile(userData) {
    try {
      const user = JSON.parse(localStorage.getItem('user'));
      if (!user) throw new Error('No user found');

      const response = await axiosInstance.patch(`/users/${user.id}`, userData);
      
      // Update local storage
      const updatedUser = response.data;
      localStorage.setItem('user', JSON.stringify(updatedUser));
      
      return { success: true, user: updatedUser };
    } catch (error) {
      return { success: false, message: 'Failed to update profile' };
    }
  },

  // Upload profile photo
  async uploadProfilePhoto(formData) {
    try {
      const user = JSON.parse(localStorage.getItem('user'));
      if (!user) throw new Error('No user found');

      const response = await axiosInstance.post(
        `/users/${user.id}/avatar`,
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
      );
      
      return { 
        success: true, 
        avatarUrl: response.data.avatarUrl 
      };
    } catch (error) {
      console.error('Error uploading profile photo:', error);
      return { success: false };
    }
  },

  // Remove profile photo
  async removeProfilePhoto() {
    try {
      const user = JSON.parse(localStorage.getItem('user'));
      if (!user) throw new Error('No user found');

      await axiosInstance.delete(`/users/${user.id}/avatar`);
      return { success: true };
    } catch (error) {
      console.error('Error removing profile photo:', error);
      return { success: false };
    }
  }
};











