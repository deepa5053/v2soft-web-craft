
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <div className="font-bold text-2xl gradient-text">V2Soft</div>
        </Link>
        
        {/* Mobile menu button */}
        <div className="md:hidden">
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={toggleMenu} 
            className="p-2"
          >
            <span className={`block h-0.5 w-6 bg-gray-800 transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
            <span className={`block h-0.5 w-6 bg-gray-800 mt-1 ${isOpen ? 'opacity-0' : ''}`}></span>
            <span className={`block h-0.5 w-6 bg-gray-800 mt-1 transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
          </Button>
        </div>
        
        {/* Desktop navigation */}
        <div className="hidden md:flex space-x-8">
          <Link to="/" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
            Home
          </Link>
          <Link to="/about" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
            About Us
          </Link>
          <Link to="/services" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
            Services
          </Link>
          <Link to="/contact" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
            Contact
          </Link>
        </div>
        
        <div className="hidden md:block">
          <Button asChild>
            <Link to="/contact">Get in Touch</Link>
          </Button>
        </div>
      </div>
      
      {/* Mobile navigation */}
      {isOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="container py-4 flex flex-col space-y-4">
            <Link 
              to="/" 
              className="text-gray-700 hover:text-blue-600 font-medium py-2 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className="text-gray-700 hover:text-blue-600 font-medium py-2 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              About Us
            </Link>
            <Link 
              to="/services" 
              className="text-gray-700 hover:text-blue-600 font-medium py-2 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Services
            </Link>
            <Link 
              to="/contact" 
              className="text-gray-700 hover:text-blue-600 font-medium py-2 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
            <Button className="w-full mt-2" asChild>
              <Link to="/contact" onClick={() => setIsOpen(false)}>Get in Touch</Link>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
