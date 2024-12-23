import api from './config';

export const cartAPI = {
  getCart: async () => {
    try {
      const { data } = await api.get('/cart');
      return data;
    } catch (error) {
      throw new Error(error.response?.data?.message || 'Failed to fetch cart');
    }
  },

  addToCart: async (productId, quantity = 1) => {
    try {
      const { data } = await api.post('/cart/add', { productId, quantity });
      return data;
    } catch (error) {
      throw new Error(error.response?.data?.message || 'Failed to add item to cart');
    }
  },

  updateQuantity: async (cartItemId, quantity) => {
    try {
      const { data } = await api.put(`/cart/item/${cartItemId}`, { quantity });
      return data;
    } catch (error) {
      throw new Error(error.response?.data?.message || 'Failed to update quantity');
    }
  },

  removeFromCart: async (cartItemId) => {
    try {
      const { data } = await api.delete(`/cart/item/${cartItemId}`);
      return data;
    } catch (error) {
      throw new Error(error.response?.data?.message || 'Failed to remove item from cart');
    }
  },

  clearCart: async () => {
    try {
      const { data } = await api.delete('/cart/clear');
      return data;
    } catch (error) {
      throw new Error(error.response?.data?.message || 'Failed to clear cart');
    }
  }
};
