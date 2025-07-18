
"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { Button } from "@/components/ui/button";
import { List, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="bg-white/90 backdrop-blur-sm fixed top-0 w-full z-50 shadow-sm">
      <div className="container mx-auto px-4 md:px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo and brand name */}
          <div className="flex items-center space-x-3">
            <Image
              src="/careairo-logo.png"
              alt="Cairo Logo"
              width={40}
              height={40}
              className="h-10 w-auto"
              priority
            />
            <span className="text-xl font-bold gradient-text">Cairo</span>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-700 hover:text-airo-600 transition-colors">Features</a>
            <a href="#benefits" className="text-gray-700 hover:text-airo-600 transition-colors">Benefits</a>
            <a href="#testimonials" className="text-gray-700 hover:text-airo-600 transition-colors">Testimonials</a>
            <Button variant="default" className="bg-airo-500 hover:bg-airo-600">
              Login
            </Button>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={toggleMenu}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <List className="h-6 w-6" />}
            </Button>
          </div>
        </div>
        
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden pt-4 pb-3 border-t border-gray-200 mt-4 animate-fade-in">
            <a href="#features" className="block py-2 text-gray-700 hover:text-airo-600 transition-colors">
              Features
            </a>
            <a href="#benefits" className="block py-2 text-gray-700 hover:text-airo-600 transition-colors">
              Benefits
            </a>
            <a href="#testimonials" className="block py-2 text-gray-700 hover:text-airo-600 transition-colors">
              Testimonials
            </a>
            <Button variant="default" className="w-full mt-2 bg-airo-500 hover:bg-airo-600">
              Request Demo
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
