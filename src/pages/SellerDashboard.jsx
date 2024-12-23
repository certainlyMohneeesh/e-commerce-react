import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Package, 
  DollarSign, 
  TrendingUp, 
  Users,
  Plus,
  Edit,
  Trash2 
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const SellerDashboard = () => {
  const [products, setProducts] = useState([
    { id: 1, name: 'Product 1', price: 99.99, stock: 50, sales: 25 },
    { id: 2, name: 'Product 2', price: 149.99, stock: 30, sales: 15 }
  ]);

  const stats = [
    { title: 'Total Sales', value: '$2,459', icon: DollarSign, color: 'bg-green-100 text-green-600' },
    { title: 'Products', value: '45', icon: Package, color: 'bg-blue-100 text-blue-600' },
    { title: 'Growth', value: '+12.5%', icon: TrendingUp, color: 'bg-purple-100 text-purple-600' },
    { title: 'Customers', value: '126', icon: Users, color: 'bg-orange-100 text-orange-600' }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Seller Dashboard</h1>
        <Button className="bg-pink-600 hover:bg-pink-700">
          <Plus className="h-4 w-4 mr-2" />
          Add Product
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        {stats.map((stat) => (
          <motion.div
            key={stat.title}
            whileHover={{ y: -5 }}
            className="bg-white rounded-lg shadow p-6"
          >
            <div className="flex items-center">
              <div className={`p-3 rounded-lg ${stat.color}`}>
                <stat.icon className="h-6 w-6" />
              </div>
              <div className="ml-4">
                <p className="text-gray-600 text-sm">{stat.title}</p>
                <p className="text-2xl font-bold">{stat.value}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="bg-white rounded-lg shadow">
        <div className="p-6">
          <h2 className="text-xl font-semibold mb-4">Your Products</h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-4">Product</th>
                  <th className="text-left py-4">Price</th>
                  <th className="text-left py-4">Stock</th>
                  <th className="text-left py-4">Sales</th>
                  <th className="text-left py-4">Actions</th>
                </tr>
              </thead>
              <tbody>
                {products.map((product) => (
                  <tr key={product.id} className="border-b">
                    <td className="py-4">{product.name}</td>
                    <td className="py-4">${product.price}</td>
                    <td className="py-4">{product.stock}</td>
                    <td className="py-4">{product.sales}</td>
                    <td className="py-4">
                      <div className="flex space-x-2">
                        <Button variant="ghost" size="icon">
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="icon" className="text-red-500">
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SellerDashboard;
