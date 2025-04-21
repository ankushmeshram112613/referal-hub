import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL;
console.log('API URL:', API_URL);

const axiosInstance = axios.create({
  baseURL: API_URL,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json'
  }
});

// Request interceptor
axiosInstance.interceptors.request.use(
  config => {
    console.log('Request Config:', config);
    return config;
  },
  error => {
    console.error('Request Error:', error);
    return Promise.reject(error);
  }
);

// Response interceptor
axiosInstance.interceptors.response.use(
  response => {
    console.log('Response:', response);
    return response;
  },
  error => {
    console.error('Response Error:', error);
    if (error.response) {
      console.error('Error Data:', error.response.data);
      console.error('Error Status:', error.response.status);
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
      // Check if user already exists
      const existingUser = await axiosInstance.get(`/users?email=${userData.email}`);
      
      if (existingUser.data.length > 0) {
        return { success: false, message: 'Email already registered' };
      }

      // Add additional user data
      const newUser = {
        ...userData,
        createdAt: new Date().toISOString()
      };

      // Create new user
      const response = await axiosInstance.post('/users', newUser);
      
      const { password, ...userWithoutPassword } = response.data;
      localStorage.setItem('user', JSON.stringify(userWithoutPassword));
      
      return { success: true, user: userWithoutPassword };
    } catch (error) {
      console.error('Registration error:', error);
      return { success: false, message: 'Registration failed. Please check your connection.' };
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










