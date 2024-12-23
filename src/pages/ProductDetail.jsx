import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { productAPI } from '@/api/products';
import { useCart } from '@/contexts/CartContext';
import { Button } from '@/components/ui/button';

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const { addToCart } = useCart();

  useEffect(() => {
    const fetchProduct = async () => {
      const data = await productAPI.getProductById(id);
      setProduct(data);
      setLoading(false);
    };
    fetchProduct();
  }, [id]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-pink-600"></div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid md:grid-cols-2 gap-8">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <img 
            src={product.image} 
            alt={product.name}
            className="w-full rounded-lg shadow-lg"
          />
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="space-y-4"
        >
          <h1 className="text-3xl font-bold">{product.name}</h1>
          <p className="text-2xl text-pink-600">${product.price}</p>
          <p className="text-gray-600">{product.description}</p>
          
          <Button 
            onClick={() => addToCart(product.id, 1)}
            className="w-full bg-pink-600 hover:bg-pink-700"
          >
            Add to Cart
          </Button>
        </motion.div>
      </div>
    </div>
  );
};

export default ProductDetail;
