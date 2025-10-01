"use client"
import { useState } from 'react';
import Link from 'next/link';

export default function Navigation() {
  const [activeItem, setActiveItem] = useState('Labeeb Alam');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="w-full py-6 px-8">
      <div className="max-w-6xl mx-auto">
        <div className="hidden md:flex items-center justify-center space-x-12">
          <Link href="/" className="text-white font-bold text-xl" onClick={() => setActiveItem('Labeeb Alam')}>
            &lt;/&gt; Labeeb Alam
          </Link>
          <Link href="/portfolio" className="text-gray-300 hover:text-white text-lg font-medium transition-all duration-300 relative" onClick={() => setActiveItem('Portfolio')}>
            Portfolio
            {activeItem === 'Portfolio' && (
              <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-white transform origin-left transition-transform duration-300"></span>
            )}
          </Link>
          <Link href="/resume" className="text-gray-300 hover:text-white text-lg font-medium transition-all duration-300 relative" onClick={() => setActiveItem('Resume')}>
            Resume
            {activeItem === 'Resume' && (
              <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-white transform origin-left transition-transform duration-300"></span>
            )}
          </Link>
          <Link href="/blog" className="text-gray-300 hover:text-white text-lg font-medium transition-all duration-300 relative" onClick={() => setActiveItem('Blog')}>
            Blog
            {activeItem === 'Blog' && (
              <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-white transform origin-left transition-transform duration-300"></span>
            )}
          </Link>
          <Link href="/contact" className="text-gray-300 hover:text-white text-lg font-medium transition-all duration-300 relative" onClick={() => setActiveItem('Contact')}>
            Contact
            {activeItem === 'Contact' && (
              <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-white transform origin-left transition-transform duration-300"></span>
            )}
          </Link>
        </div>
        
        <div className="md:hidden flex items-center justify-between">
          <Link href="/" className="text-white font-bold text-xl">
            &lt;/&gt; Labeeb Alam
          </Link>
          <button className="text-white text-2xl" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? '✕' : '☰'}
          </button>
        </div>
        
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-black/80 backdrop-blur-sm py-4 px-8 border-b border-white/10">
            <Link href="/portfolio" className="block py-3 text-gray-300 hover:text-white text-lg font-medium" onClick={() => { setActiveItem('Portfolio'); setIsMobileMenuOpen(false); }}>
              Portfolio
            </Link>
            <Link href="/resume" className="block py-3 text-gray-300 hover:text-white text-lg font-medium" onClick={() => { setActiveItem('Resume'); setIsMobileMenuOpen(false); }}>
              Resume
            </Link>
            <Link href="/blog" className="block py-3 text-gray-300 hover:text-white text-lg font-medium" onClick={() => { setActiveItem('Blog'); setIsMobileMenuOpen(false); }}>
              Blog
            </Link>
            <Link href="/contact" className="block py-3 text-gray-300 hover:text-white text-lg font-medium" onClick={() => { setActiveItem('Contact'); setIsMobileMenuOpen(false); }}>
              Contact
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}