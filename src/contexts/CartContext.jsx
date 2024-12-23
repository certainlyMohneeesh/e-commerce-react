import React, { createContext, useState, useContext, useEffect } from 'react';
import { cartAPI } from '../api/cart';

const CartContext = createContext(null);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(null);
  const [loading, setLoading] = useState(true);
  const [itemCount, setItemCount] = useState(0);

  useEffect(() => {
    fetchCart();
  }, []);

  const fetchCart = async () => {
    try {
      const cartData = await cartAPI.getCart();
      setCart(cartData);
      updateItemCount(cartData);
    } catch (error) {
      console.error('Cart fetch failed:', error);
    } finally {
      setLoading(false);
    }
  };

  const updateItemCount = (cartData) => {
    const count = cartData?.items?.reduce((total, item) => total + item.quantity, 0) || 0;
    setItemCount(count);
  };

  const addToCart = async (productId, quantity) => {
    try {
      const updatedCart = await cartAPI.addToCart(productId, quantity);
      setCart(updatedCart);
      updateItemCount(updatedCart);
      return updatedCart;
    } catch (error) {
      throw error;
    }
  };

  const updateQuantity = async (cartItemId, quantity) => {
    try {
      const updatedCart = await cartAPI.updateQuantity(cartItemId, quantity);
      setCart(updatedCart);
      updateItemCount(updatedCart);
      return updatedCart;
    } catch (error) {
      throw error;
    }
  };

  const removeFromCart = async (cartItemId) => {
    try {
      const updatedCart = await cartAPI.removeFromCart(cartItemId);
      setCart(updatedCart);
      updateItemCount(updatedCart);
      return updatedCart;
    } catch (error) {
      throw error;
    }
  };

  const clearCart = async () => {
    try {
      await cartAPI.clearCart();
      setCart(null);
      setItemCount(0);
    } catch (error) {
      throw error;
    }
  };

  const value = {
    cart,
    loading,
    itemCount,
    addToCart,
    updateQuantity,
    removeFromCart,
    clearCart,
    refreshCart: fetchCart
  };

  return (
    <CartContext.Provider value={value}>
      {!loading && children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
