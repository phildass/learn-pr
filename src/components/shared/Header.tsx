'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-blue-900 text-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="text-2xl font-bold">
              <span className="text-amber-400">Learn</span>
              <span className="text-white">PR</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="/modules" className="hover:text-amber-400 transition-colors">
              Modules
            </Link>
            <Link href="/news" className="hover:text-amber-400 transition-colors">
              PR News
            </Link>
            <Link href="/jobs" className="hover:text-amber-400 transition-colors">
              Jobs
            </Link>
            <Link href="/support" className="hover:text-amber-400 transition-colors">
              Support
            </Link>
            <Link 
              href="/login" 
              className="px-4 py-2 bg-amber-500 text-white rounded-lg hover:bg-amber-600 transition-colors"
            >
              Login
            </Link>
            <Link 
              href="/register" 
              className="px-4 py-2 border border-amber-400 text-amber-400 rounded-lg hover:bg-amber-400 hover:text-blue-900 transition-colors"
            >
              Register
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 space-y-2">
            <Link 
              href="/modules" 
              className="block py-2 hover:text-amber-400 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Modules
            </Link>
            <Link 
              href="/news" 
              className="block py-2 hover:text-amber-400 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              PR News
            </Link>
            <Link 
              href="/jobs" 
              className="block py-2 hover:text-amber-400 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Jobs
            </Link>
            <Link 
              href="/support" 
              className="block py-2 hover:text-amber-400 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Support
            </Link>
            <Link 
              href="/login" 
              className="block py-2 hover:text-amber-400 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Login
            </Link>
            <Link 
              href="/register" 
              className="block py-2 text-amber-400 hover:text-amber-300 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Register
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}
