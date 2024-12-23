import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const LoginForm = () => {
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    try {
      await login({
        email: formData.get('email'),
        password: formData.get('password')
      });
      navigate('/dashboard');
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-md w-full space-y-8 bg-white p-8 rounded-xl shadow-lg"
      >
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">Welcome Back</h2>
          <p className="mt-2 text-gray-600">Please sign in to your account</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <Input
              type="email"
              name="email"
              required
              className="mt-1"
              placeholder="Enter your email"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <Input
              type="password"
              name="password"
              required
              className="mt-1"
              placeholder="Enter your password"
            />
          </div>

          <Button type="submit" className="w-full bg-pink-600 hover:bg-pink-700">
            Sign In
          </Button>
        </form>

        <p className="text-center text-gray-600">
          Don't have an account?{' '}
          <Link to="/signup" className="text-pink-600 hover:text-pink-700">
            Sign up
          </Link>
        </p>
      </motion.div>
    </div>
  );
};

export default LoginForm;
