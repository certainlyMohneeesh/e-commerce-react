import api from './config';

export const authAPI = {
  login: async (credentials) => {
    try {
      const { data } = await api.post('/auth/login', credentials);
      localStorage.setItem('token', data.token);
      return data;
    } catch (error) {
      throw new Error(error.response?.data?.message || 'Login failed');
    }
  },

  signup: async (userData) => {
    try {
      const { data } = await api.post('/auth/signup', userData);
      localStorage.setItem('token', data.token);
      return data;
    } catch (error) {
      throw new Error(error.response?.data?.message || 'Signup failed');
    }
  },

  logout: async () => {
    try {
      const { data } = await api.post('/auth/logout');
      localStorage.removeItem('token');
      return data;
    } catch (error) {
      throw new Error(error.response?.data?.message || 'Logout failed');
    }
  },

  verifyToken: async () => {
    try {
      const { data } = await api.get('/auth/verify');
      return data;
    } catch (error) {
      localStorage.removeItem('token');
      throw new Error('Token verification failed');
    }
  }
};
