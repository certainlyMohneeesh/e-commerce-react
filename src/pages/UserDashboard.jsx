import React from 'react';
import { motion } from 'framer-motion';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Package, ShoppingBag, Heart, Settings } from 'lucide-react';

const UserDashboard = () => {
  const { user } = useAuth();

  const dashboardSections = [
    {
      title: 'Recent Orders',
      icon: Package,
      content: [
        { id: 1, name: 'Order #1234', status: 'Delivered', date: '2024-01-15' },
        { id: 2, name: 'Order #1235', status: 'Processing', date: '2024-01-18' }
      ]
    },
    {
      title: 'Wishlist',
      icon: Heart,
      content: [
        { id: 1, name: 'Product 1', price: '$99.99' },
        { id: 2, name: 'Product 2', price: '$149.99' }
      ]
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-white rounded-lg shadow p-6 mb-8">
        <div className="flex items-center space-x-4">
          <div className="h-16 w-16 rounded-full bg-pink-100 flex items-center justify-center">
            <span className="text-2xl font-bold text-pink-600">
              {user.name.charAt(0)}
            </span>
          </div>
          <div>
            <h1 className="text-2xl font-bold">{user.name}</h1>
            <p className="text-gray-600">{user.email}</p>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {dashboardSections.map((section) => (
          <motion.div
            key={section.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-lg shadow p-6"
          >
            <div className="flex items-center mb-4">
              <section.icon className="h-6 w-6 text-pink-600 mr-2" />
              <h2 className="text-xl font-semibold">{section.title}</h2>
            </div>
            <div className="space-y-4">
              {section.content.map((item) => (
                <div
                  key={item.id}
                  className="flex justify-between items-center p-3 bg-gray-50 rounded-lg"
                >
                  <div>
                    <p className="font-medium">{item.name}</p>
                    <p className="text-sm text-gray-600">
                      {item.status || item.price}
                    </p>
                  </div>
                  <Button variant="ghost" className="text-pink-600">
                    View
                  </Button>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default UserDashboard;
