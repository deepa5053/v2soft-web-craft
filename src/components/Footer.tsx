
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-50 border-t">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <div className="font-bold text-2xl gradient-text mb-4">V2Soft</div>
            <p className="text-gray-600 mb-4">
              Transforming ideas into innovative software solutions.
            </p>
          </div>
          
          <div className="col-span-1">
            <h3 className="font-semibold text-lg mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-600 hover:text-blue-600 transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-gray-600 hover:text-blue-600 transition-colors">About Us</Link></li>
              <li><Link to="/services" className="text-gray-600 hover:text-blue-600 transition-colors">Services</Link></li>
              <li><Link to="/contact" className="text-gray-600 hover:text-blue-600 transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          <div className="col-span-1">
            <h3 className="font-semibold text-lg mb-4">Services</h3>
            <ul className="space-y-2">
              <li><Link to="/services" className="text-gray-600 hover:text-blue-600 transition-colors">Custom Software</Link></li>
              <li><Link to="/services" className="text-gray-600 hover:text-blue-600 transition-colors">Web Development</Link></li>
              <li><Link to="/services" className="text-gray-600 hover:text-blue-600 transition-colors">Mobile Apps</Link></li>
              <li><Link to="/services" className="text-gray-600 hover:text-blue-600 transition-colors">Cloud Solutions</Link></li>
            </ul>
          </div>
          
          <div className="col-span-1">
            <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
            <p className="text-gray-600 mb-2">123 Tech Street</p>
            <p className="text-gray-600 mb-2">San Francisco, CA 94107</p>
            <p className="text-gray-600 mb-2">contact@v2soft.com</p>
            <p className="text-gray-600">+1 (555) 123-4567</p>
          </div>
        </div>
        
        <div className="border-t mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600 mb-4 md:mb-0">
            &copy; {currentYear} V2Soft. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
