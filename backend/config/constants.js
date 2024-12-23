const ROLES = {
    USER: 'user',
    ADMIN: 'admin',
    SELLER: 'seller'
  };
  
  const ORDER_STATUS = {
    PENDING: 'pending',
    PROCESSING: 'processing',
    SHIPPED: 'shipped',
    DELIVERED: 'delivered',
    CANCELLED: 'cancelled'
  };
  
  const PAYMENT_STATUS = {
    PENDING: 'pending',
    COMPLETED: 'completed',
    FAILED: 'failed',
    REFUNDED: 'refunded'
  };
  
  const PRODUCT_CATEGORIES = {
    ELECTRONICS: 'Electronics',
    FASHION: 'Fashion',
    HOME: 'Home & Living',
    BOOKS: 'Books',
    STATIONERY: 'Stationery',
    GIFT_BOXES: 'Gift Boxes'
  };
  
  const API_ENDPOINTS = {
    AUTH: '/api/auth',
    ADMIN: '/api/admin',
    CART: '/api/cart',
    PRODUCTS: '/api/products',
    ORDERS: '/api/orders',
    COMPLAINTS: '/api/complaints'
  };
  
  const ERROR_MESSAGES = {
    UNAUTHORIZED: 'Unauthorized access',
    NOT_FOUND: 'Resource not found',
    VALIDATION_ERROR: 'Validation error',
    SERVER_ERROR: 'Internal server error'
  };
  
  module.exports = {
    ROLES,
    ORDER_STATUS,
    PAYMENT_STATUS,
    PRODUCT_CATEGORIES,
    API_ENDPOINTS,
    ERROR_MESSAGES
  };
  