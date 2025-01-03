import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const SignupForm = () => {
  const navigate = useNavigate();
  const { signup } = useAuth();
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    const formData = new FormData(e.target);
    
    // Basic validation
    if (!formData.get('password') || formData.get('password').length < 6) {
        setError('Password must be at least 6 characters long');
        return;
    }

    try {
        const response = await signup({
            name: formData.get('name'),
            email: formData.get('email'),
            password: formData.get('password'),
            // phone: formData.get('phone') // if you have this field
        });
        
        if (response.user) {
            navigate('/dashboard');
        }
    } catch (error) {
        console.error('Signup failed:', error);
        setError(error.message);
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
        <h2 className="text-3xl font-bold text-gray-900">Create Account</h2>
        <p className="mt-2 text-gray-600">Join our community today</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {error && (
          <div className="p-3 text-sm text-red-500 bg-red-50 rounded-md">
            {error}
          </div>
        )}
        
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Full Name
          </label>
          <Input
            type="text"
            name="name"
            required
            className="mt-1"
            placeholder="Enter your full name"
          />
        </div>

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
            placeholder="Create a password"
          />
        </div>

        <Button type="submit" className="w-full bg-pink-600 hover:bg-pink-700">
          Sign Up
        </Button>
      </form>

      <p className="text-center text-gray-600">
        Already have an account?{' '}
        <Link to="/login" className="text-pink-600 hover:text-pink-700">
          Sign in
        </Link>
      </p>
    </motion.div>
  </div>
);
};

export default SignupForm;
