import axios from 'axios';

const api = {
  // Auth endpoints
  async login(credentials) {
    try {
      const response = await axios.get(`/api/users?email=${credentials.email}`);
      const users = response.data;
      
      if (users.length === 0) {
        return { success: false, message: 'User not found' };
      }
      
      const user = users[0];
      if (user.password === credentials.password) {
        return { success: true, user };
      } else {
        return { success: false, message: 'Invalid password' };
      }
    } catch (error) {
      console.error('Login error:', error);
      return { success: false, message: 'Login failed' };
    }
  },

  async register(userData) {
    try {
      const response = await axios.post('/api/users', userData);
      return { success: true, user: response.data };
    } catch (error) {
      console.error('Registration error:', error);
      return { success: false, message: 'Registration failed' };
    }
  }
};

export default api;


