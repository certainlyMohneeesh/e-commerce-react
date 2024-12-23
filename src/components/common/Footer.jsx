import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Facebook, Twitter, Instagram, Mail } from 'lucide-react';

const Footer = () => {
  const footerLinks = {
    Company: [
      { id: 'about-us', label: 'About Us' },
      { id: 'careers', label: 'Careers' },
      { id: 'press', label: 'Press' }
    ],
    Support: [
      { id: 'help-center', label: 'Help Center' },
      { id: 'safety-center', label: 'Safety Center' },
      { id: 'community', label: 'Community Guidelines' }
    ],
    Legal: [
      { id: 'cookies', label: 'Cookies Policy' },
      { id: 'privacy', label: 'Privacy Policy' },
      { id: 'terms', label: 'Terms of Service' }
    ],
    'Quick Links': [
      { id: 'products', label: 'Products' },
      { id: 'categories', label: 'Categories' },
      { id: 'offers', label: 'Special Offers' },
      { id: 'blog', label: 'Blog' }
    ]
  };

  const socialLinks = [
    { id: 'facebook', icon: Facebook, href: '#' },
    { id: 'twitter', icon: Twitter, href: '#' },
    { id: 'instagram', icon: Instagram, href: '#' },
    { id: 'mail', icon: Mail, href: '#' }
  ];

  return (
    <footer className="bg-white border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={`footer-${title}`}>
              <h3 className="text-lg font-semibold mb-4 text-gray-900">{title}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.id}>
                    <Link
                      to={`/${link.id}`}
                      className="text-gray-600 hover:text-pink-600 transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-2xl font-bold text-pink-600"
            >
              MytailorZone
            </motion.div>

            <div className="flex space-x-6">
              {socialLinks.map(({ id, icon: Icon, href }) => (
                <motion.a
                  key={id}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="text-gray-600 hover:text-pink-600 transition-colors"
                >
                  <Icon className="h-6 w-6" />
                </motion.a>
              ))}
            </div>
          </div>

          <div className="mt-8 text-center text-gray-500 text-sm">
            <p>© {new Date().getFullYear()} CythDeal. All rights reserved.</p>
            <p className="mt-2">
              Made with ❤️ for a better shopping experience
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
