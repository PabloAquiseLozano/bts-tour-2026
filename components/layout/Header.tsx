'use client';

import React, { useState, useEffect } from 'react';
import Button from '../ui/Button';
import Image from "next/image";

const navLinks = [
  { href: '#inicio', label: 'Inicio' },
  { href: '#entradas', label: 'Entradas' },
  { href: '#merch', label: 'Merch' },
  { href: '#historia', label: 'Historia' },
  { href: '#musica', label: 'Música' },
];

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`
        fixed top-0 left-0 right-0 z-50 transition-all duration-500
        ${isScrolled 
          ? 'bg-black/90 backdrop-blur-md py-3 shadow-lg shadow-black/20' 
          : 'bg-transparent py-5'}
      `}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between">
        {/* Logo */}
        <a href="#inicio" className="flex items-center gap-2">
          <div className="rounded-lg flex items-center justify-center">
            <Image
              src="/btsLogo.png"
              alt="Logo BTS"
              width={100}
              height={100}
              className="brightness-0 invert"
            />
          </div>

        </a>

        {/* Desktop Navigation - Solo visible al hacer scroll */}
        <nav className={`hidden md:flex items-center gap-8 transition-all duration-500 ${isScrolled ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'}`}>
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-gray-300 hover:text-primary transition-colors duration-300 font-medium"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden md:block">
          <Button variant="primary" size="sm">
            🎫 Comprar Tickets
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isMobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden glass-effect mt-2 mx-4 rounded-xl p-4">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-gray-300 hover:text-primary transition-colors duration-300 font-medium py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <Button variant="primary" size="sm" fullWidth>
              🎫 Comprar Tickets
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
