import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL;

// When running locally, API_URL will be "http://localhost:3001"
// When running on Netlify, API_URL will be "https://your-api-name.onrender.com"

export const api = {
  // Login user
  async login(email, password) {
    try {
      const response = await axios.get(`${API_URL}/users?email=${email}`);
      const user = response.data[0];
      
      if (user && user.password === password) {
        // Remove password before storing in localStorage
        const { password, ...userWithoutPassword } = user;
        localStorage.setItem('user', JSON.stringify(userWithoutPassword));
        return { success: true, user: userWithoutPassword };
      }
      
      return { success: false, message: 'Invalid credentials' };
    } catch (error) {
      return { success: false, message: 'Login failed' };
    }
  },

  // Register user
  async register(userData) {
    try {
      // Check if user already exists
      const existingUser = await axios.get(`${API_URL}/users?email=${userData.email}`);
      
      if (existingUser.data.length > 0) {
        return { success: false, message: 'Email already registered' };
      }

      // Add additional user data
      const newUser = {
        ...userData,
        createdAt: new Date().toISOString()
      };

      // Create new user
      const response = await axios.post(`${API_URL}/users`, newUser);
      
      // Remove password before storing in localStorage
      const { password, ...userWithoutPassword } = response.data;
      localStorage.setItem('user', JSON.stringify(userWithoutPassword));
      
      return { success: true, user: userWithoutPassword };
    } catch (error) {
      return { success: false, message: 'Registration failed' };
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

      const response = await axios.get(`${API_URL}/users/${user.id}`);
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

      const response = await axios.patch(`${API_URL}/users/${user.id}`, userData);
      
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

      const response = await axios.post(
        `${API_URL}/users/${user.id}/avatar`,
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

      await axios.delete(`${API_URL}/users/${user.id}/avatar`);
      return { success: true };
    } catch (error) {
      console.error('Error removing profile photo:', error);
      return { success: false };
    }
  }
};




