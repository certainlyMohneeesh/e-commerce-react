import api from './config';

export const couponsAPI = {
  getAllCoupons: async () => {
    try {
      const { data } = await api.get('/coupons');
      return data;
    } catch (error) {
      throw new Error(error.response?.data?.message || 'Failed to fetch coupons');
    }
  },

  getCouponById: async (id) => {
    try {
      const { data } = await api.get(`/coupons/${id}`);
      return data;
    } catch (error) {
      throw new Error(error.response?.data?.message || 'Failed to fetch coupon');
    }
  },

  validateCoupon: async (code) => {
    try {
      const { data } = await api.post('/coupons/validate', { code });
      return data;
    } catch (error) {
      throw new Error(error.response?.data?.message || 'Invalid coupon code');
    }
  },

  createCoupon: async (couponData) => {
    try {
      const { data } = await api.post('/coupons', couponData);
      return data;
    } catch (error) {
      throw new Error(error.response?.data?.message || 'Failed to create coupon');
    }
  },

  updateCoupon: async (id, couponData) => {
    try {
      const { data } = await api.put(`/coupons/${id}`, couponData);
      return data;
    } catch (error) {
      throw new Error(error.response?.data?.message || 'Failed to update coupon');
    }
  },

  deleteCoupon: async (id) => {
    try {
      const { data } = await api.delete(`/coupons/${id}`);
      return data;
    } catch (error) {
      throw new Error(error.response?.data?.message || 'Failed to delete coupon');
    }
  },

  applyCoupon: async (cartId, couponCode) => {
    try {
      const { data } = await api.post('/coupons/apply', { cartId, couponCode });
      return data;
    } catch (error) {
      throw new Error(error.response?.data?.message || 'Failed to apply coupon');
    }
  }
};
