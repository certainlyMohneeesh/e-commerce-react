import api from './config';

export const authAPI = {
    login: async (credentials) => {
        try {
            const { data } = await api.post('/auth/login', credentials);
            if (data.token) {
                localStorage.setItem('token', data.token);
                api.defaults.headers.common['Authorization'] = `Bearer ${data.token}`;
            }
            return data;
        } catch (error) {
            throw new Error(error.response?.data?.message || 'Login failed');
        }
    },

    signup: async (userData) => {
        try {
            const { data } = await api.post('/auth/signup', userData);
            if (data.token) {
                localStorage.setItem('token', data.token);
                api.defaults.headers.common['Authorization'] = `Bearer ${data.token}`;
            }
            return data;
        } catch (error) {
            throw new Error(error.response?.data?.message || 'Signup failed');
        }
    },

    logout: async () => {
        try {
            localStorage.removeItem('token');
            delete api.defaults.headers.common['Authorization'];
            return { message: 'Logged out successfully' };
        } catch (error) {
            throw new Error(error.response?.data?.message || 'Logout failed');
        }
    },

    verifyToken: async () => {
        const token = localStorage.getItem('token');
        if (!token) {
            throw new Error('No token found');
        }
        try {
            api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
            const { data } = await api.get('/auth/verify');
            return data;
        } catch (error) {
            localStorage.removeItem('token');
            delete api.defaults.headers.common['Authorization'];
            throw new Error('Token verification failed');
        }
    }
};