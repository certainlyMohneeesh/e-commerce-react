import api from './config';

export const cartAPI = {
  getCart: async (userId) => {
      if (!userId) {
          throw new Error('userId is required');
      }
      
      try {
          console.log('Making get-cart request for userId:', userId);
          const { data } = await api.post('/cart/get-cart', { userId });
          return data;
      } catch (error) {
          console.error('Cart API error:', error.response || error);
          throw new Error(error.response?.data?.message || 'Failed to fetch cart');
      }
  },

  addToCart: async (userId, productId, quantity = 1) => {
    try {
      const { data } = await api.post('/cart/addtocart', { 
        userId, 
        productId, 
        quantity 
      });
      return data;
    } catch (error) {
      throw new Error(error.response?.data?.message || 'Failed to add item to cart');
    }
  },

  updateQuantity: async (userId, productId, productQty) => {
    try {
      const { data } = await api.put('/cart/update-quantity', { 
        userId, 
        productId, 
        productQty 
      });
      return data;
    } catch (error) {
      throw new Error(error.response?.data?.message || 'Failed to update quantity');
    }
  },

  removeFromCart: async (userId, productId) => {
    try {
      const { data } = await api.post('/cart/delete-items', { 
        userId, 
        productId 
      });
      return data;
    } catch (error) {
      throw new Error(error.response?.data?.message || 'Failed to remove item from cart');
    }
  }
};