import api from './config';

export const productAPI = {
  getProducts: async (params = {}) => {
    try {
      const { data } = await api.get('/products', { params });
      return data;
    } catch (error) {
      throw new Error(error.response?.data?.message || 'Failed to fetch products');
    }
  },

  getProductById: async (id) => {
    try {
      const { data } = await api.get(`/products/${id}`);
      return data;
    } catch (error) {
      throw new Error(error.response?.data?.message || 'Failed to fetch product');
    }
  },

  createProduct: async (productData) => {
    try {
      const { data } = await api.post('/products', productData);
      return data;
    } catch (error) {
      throw new Error(error.response?.data?.message || 'Failed to create product');
    }
  },

  updateProduct: async (id, productData) => {
    try {
      const { data } = await api.put(`/products/${id}`, productData);
      return data;
    } catch (error) {
      throw new Error(error.response?.data?.message || 'Failed to update product');
    }
  },

  deleteProduct: async (id) => {
    try {
      const { data } = await api.delete(`/products/${id}`);
      return data;
    } catch (error) {
      throw new Error(error.response?.data?.message || 'Failed to delete product');
    }
  }
};
