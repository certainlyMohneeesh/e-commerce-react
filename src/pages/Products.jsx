import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { productAPI } from '@/api/products';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      const data = await productAPI.getProducts();
      setProducts(data);
      setLoading(false);
    };
    fetchProducts();
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Our Products</h1>
      
      {loading ? (
        <div className="flex justify-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-pink-600"></div>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <motion.div
              key={product.id}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.2 }}
            >
              <Link to={`/products/${product.id}`}>
                <Card className="overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="font-semibold text-lg mb-2">{product.name}</h3>
                    <p className="text-gray-600 mb-2">${product.price}</p>
                    <Button className="w-full bg-pink-600 hover:bg-pink-700">
                      View Details
                    </Button>
                  </div>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Products;
