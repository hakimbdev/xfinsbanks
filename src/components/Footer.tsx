import React from 'react';
import { TrendingUp, Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <TrendingUp className="h-8 w-8 text-blue-400" />
              <span className="text-xl font-bold">xFins Banks Forex Academy</span>
            </div>
            <p className="text-gray-300 mb-4">
              Master the art of forex trading with expert guidance and proven strategies. 
              Join thousands of successful traders who have transformed their financial future.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Mail className="h-5 w-5 text-blue-400" />
                <span className="text-gray-300">info@xfinsbanks.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-5 w-5 text-blue-400" />
                <span className="text-gray-300">+234 8062558567</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-5 w-5 text-blue-400" />
                <span className="text-gray-300">Suite 302A Bahamas Plaza, Gudu Market, Abuja</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <div className="space-y-2">
              <Link to="/privacy-policy" className="block text-gray-300 hover:text-blue-400 transition-colors">Privacy Policy</Link>
              <Link to="/terms-of-service" className="block text-gray-300 hover:text-blue-400 transition-colors">Terms of Service</Link>
              <Link to="/faq" className="block text-gray-300 hover:text-blue-400 transition-colors">FAQ</Link>
              <Link to="/support" className="block text-gray-300 hover:text-blue-400 transition-colors">Support</Link>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 xFins Banks Forex Academy. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
