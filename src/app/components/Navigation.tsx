"use client"
import { useState } from 'react';
import Link from 'next/link';

export default function Navigation() {
  const [activeItem, setActiveItem] = useState('Labeeb Alam');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="w-full py-6 px-8 relative">
      <div className="max-w-6xl mx-auto">
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center justify-center space-x-12">
          <Link 
            href="/" 
            className="text-white font-bold text-xl" 
            onClick={() => setActiveItem('Labeeb Alam')}
          >
            &lt;/&gt; Labeeb Alam
          </Link>
          <Link 
            href="/portfolio" 
            className="text-gray-300 hover:text-white text-lg font-medium transition-all duration-300 relative" 
            onClick={() => setActiveItem('Portfolio')}
          >
            Portfolio
            {activeItem === 'Portfolio' && (
              <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-white transform origin-left transition-transform duration-300"></span>
            )}
          </Link>
          <Link 
            href="/resume" 
            className="text-gray-300 hover:text-white text-lg font-medium transition-all duration-300 relative" 
            onClick={() => setActiveItem('Resume')}
          >
            Resume
            {activeItem === 'Resume' && (
              <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-white transform origin-left transition-transform duration-300"></span>
            )}
          </Link>
          <Link 
            href="/blog" 
            className="text-gray-300 hover:text-white text-lg font-medium transition-all duration-300 relative" 
            onClick={() => setActiveItem('Blog')}
          >
            Blog
            {activeItem === 'Blog' && (
              <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-white transform origin-left transition-transform duration-300"></span>
            )}
          </Link>
        </div>
        
        {/* Mobile Navigation Header */}
        <div className="md:hidden flex items-center justify-between">
          <Link 
            href="/" 
            className="text-white font-bold text-xl"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            &lt;/&gt; Labeeb Alam
          </Link>
          <button 
            className="text-white text-3xl p-2" 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? '✕' : '☰'}
          </button>
        </div>
        
        {/* Mobile Dropdown Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-[#297373] border-t border-white/10 shadow-lg z-50">
            <div className="py-4 px-8 space-y-1">
              <Link 
                href="/portfolio" 
                className="block py-3 text-gray-300 hover:text-white text-lg font-medium transition-colors" 
                onClick={() => { 
                  setActiveItem('Portfolio'); 
                  setIsMobileMenuOpen(false); 
                }}
              >
                Portfolio
              </Link>
              <Link 
                href="/resume" 
                className="block py-3 text-gray-300 hover:text-white text-lg font-medium transition-colors" 
                onClick={() => { 
                  setActiveItem('Resume'); 
                  setIsMobileMenuOpen(false); 
                }}
              >
                Resume
              </Link>
              <Link 
                href="/blog" 
                className="block py-3 text-gray-300 hover:text-white text-lg font-medium transition-colors" 
                onClick={() => { 
                  setActiveItem('Blog'); 
                  setIsMobileMenuOpen(false); 
                }}
              >
                Blog
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}