import React, { createContext, useState, useContext, useEffect } from 'react';
import { cartAPI } from '../api/cart';

const CartContext = createContext(null);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(null);
  const [loading, setLoading] = useState(true);
  const [itemCount, setItemCount] = useState(0);

  // Replace this with your actual auth logic
  const userId = localStorage.getItem('userId'); // or get from your auth context

  useEffect(() => {
      if (userId) {
          fetchCart();
      } else {
          setLoading(false);
      }
  }, [userId]);

  const fetchCart = async () => {
      try {
          console.log('Fetching cart for user:', userId);
          const response = await cartAPI.getCart(userId);
          console.log('Cart response:', response);
          
          if (response.success) {
              setCart(response.cart);
              updateItemCount(response.cart);
          } else {
              // Handle empty cart case
              setCart({ userId, productsInCart: [] });
              setItemCount(0);
          }
      } catch (error) {
          console.error('Cart fetch failed:', error);
          // Handle error case by setting empty cart
          setCart({ userId, productsInCart: [] });
          setItemCount(0);
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
      const userId = localStorage.getItem('userId');
      const response = await cartAPI.addToCart(userId, productId, quantity);
      setCart(response.cart);
      updateItemCount(response.cart);
      return response.cart;
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
