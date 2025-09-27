"use client"

import { useState } from 'react';

export default function Navigation() {
  const [activeItem, setActiveItem] = useState('Labeeb Alam');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="w-full py-6 px-8 backdrop-blur-sm bg-black/ ">
      <div className="max-w-6xl mx-auto">
        <div className="hidden md:flex items-center justify-center space-x-12">
          <a href="#" className="text-white font-bold text-xl" onClick={() => setActiveItem('Labeeb Alam')}>
            &lt;/&gt; Labeeb Alam
          </a>
          <a href="#portfolio" className="text-gray-300 hover:text-white text-lg font-medium transition-all duration-300 relative" onClick={() => setActiveItem('Portfolio')}>
            Portfolio
            {activeItem === 'Portfolio' && (
              <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-white transform origin-left transition-transform duration-300"></span>
            )}
          </a>
          <a href="#resume" className="text-gray-300 hover:text-white text-lg font-medium transition-all duration-300 relative" onClick={() => setActiveItem('Resume')}>
            Resume
            {activeItem === 'Resume' && (
              <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-white transform origin-left transition-transform duration-300"></span>
            )}
          </a>
          <a href="#blog" className="text-gray-300 hover:text-white text-lg font-medium transition-all duration-300 relative" onClick={() => setActiveItem('Blog')}>
            Blog
            {activeItem === 'Blog' && (
              <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-white transform origin-left transition-transform duration-300"></span>
            )}
          </a>
          <a href="#contact" className="text-gray-300 hover:text-white text-lg font-medium transition-all duration-300 relative" onClick={() => setActiveItem('Contact')}>
            Contact
            {activeItem === 'Contact' && (
              <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-white transform origin-left transition-transform duration-300"></span>
            )}
          </a>
        </div>
        
        <div className="md:hidden flex items-center justify-between">
          <a href="#" className="text-white font-bold text-xl">
            Labeeb Alam
          </a>
          <button className="text-white text-2xl" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? '✕' : '☰'}
          </button>
        </div>
        
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-black/80 backdrop-blur-sm py-4 px-8 border-b border-white/10">
            <a href="#portfolio" className="block py-3 text-gray-300 hover:text-white text-lg font-medium" onClick={() => { setActiveItem('Portfolio'); setIsMobileMenuOpen(false); }}>
              Portfolio
            </a>
            <a href="#resume" className="block py-3 text-gray-300 hover:text-white text-lg font-medium" onClick={() => { setActiveItem('Resume'); setIsMobileMenuOpen(false); }}>
              Resume
            </a>
            <a href="#blog" className="block py-3 text-gray-300 hover:text-white text-lg font-medium" onClick={() => { setActiveItem('Blog'); setIsMobileMenuOpen(false); }}>
              Blog
            </a>
            <a href="#contact" className="block py-3 text-gray-300 hover:text-white text-lg font-medium" onClick={() => { setActiveItem('Contact'); setIsMobileMenuOpen(false); }}>
              Contact
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}