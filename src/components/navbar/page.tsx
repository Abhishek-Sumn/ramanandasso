'use client'; // Required for client-side interactivity (e.g., useState)

import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Navigation links
  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Projecten', href: '/projecten' },
    { name: 'Keukens', href: '/keukens' },
    { name: 'Deuren', href: '/deuren' },
    { name: 'Trappen', href: '/trappen' },
  ];

  // Mobile menu toggle handler
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-brown/80 backdrop-blur-md">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="z-50">
          <svg
            width="33"
            height="53"
            viewBox="0 0 33 53"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-[#FBF6E5]"
          >
            <path
              d="M32.2069 34.7327C33.2025 38.6343 31.8766 43.7436 30.213 46.1167C26.5663 51.319 20.461 51.7611 16.8021 51.9887C10.778 52.3634 6.95401 51.2427 6.95401 51.2427C3.34176 50.345 1.59182 49.3967 1.59182 49.3967C-0.523417 48.6558 0.0794762 46.4431 0.0794762 46.4431C0.311941 45.242 0.613388 40.8622 0.613388 40.8622C0.682369 38.738 0.776891 37.3548 0.776891 37.3548C0.776891 36.5401 1.23272 36.4748 1.52286 36.4748C2.24319 36.4748 2.31989 37.284 2.31989 37.284C2.50127 39.0642 3.06072 40.6093 3.06072 40.6093C4.78767 45.242 8.34882 47.4344 8.34882 47.4344C12.8731 51.1921 19.1294 49.5889 19.1294 49.5889C24.1313 48.5117 26.0575 44.3923 26.0575 44.3923C28.98 39.0971 25.5466 35.3495 25.5466 35.3495C22.8412 32.2138 20.5855 31.1062 20.5855 31.1062C16.9273 29.0074 13.1975 27.1108 13.1975 27.1108C9.71552 25.2648 7.8532 23.9701 7.8532 23.9701C3.13223 20.4627 2.13848 17.6381 2.13848 17.6381C-1.09311 9.94814 4.06215 4.9058 4.06215 4.9058C6.74961 1.5906 10.8958 0.39702 14.1862 0L14.1844 1.40282C12.6609 1.6142 11.0849 2.3852 11.0849 2.3852C7.82259 3.79877 6.33069 6.65823 6.33069 6.65823C4.06472 10.9318 6.79818 14.0372 6.79818 14.0372C8.53534 16.1613 12.6994 18.3107 12.6994 18.3107C19.4743 22.0634 24.3817 24.7844 24.3817 24.7844C31.6982 28.9821 32.2069 34.7327 32.2069 34.7327ZM29.7194 8.57182V0H19.5683V1.38753C24.8789 1.55318 28.4574 4.28592 28.3113 8.57184L29.7194 8.57182Z"
              fill="currentColor"
            />
          </svg>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <ul className="flex gap-6">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="text-sm font-medium hover:text-gray-600 transition-colors"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* Contact Button */}
          <Link
            href="/contact"
            className="px-6 py-2 border border-black text-sm font-medium hover:bg-black hover:text-white transition-colors"
          >
            Contact
          </Link>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          onClick={toggleMenu}
          className="md:hidden z-50 flex flex-col gap-1.5"
        >
          <span className="w-6 h-px bg-black"></span>
          <span className="w-6 h-px bg-black"></span>
          <span className="w-6 h-px bg-black"></span>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-white z-40 p-6">
          <div className="flex flex-col h-full">
            {/* Close Button */}
            <button
              onClick={toggleMenu}
              className="self-end mb-6 text-sm font-medium"
            >
              Sluit
            </button>

            {/* Mobile Navigation Links */}
            <nav className="flex-1">
              <ul className="space-y-6 text-xl font-bold">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="hover:text-gray-600"
                      onClick={toggleMenu}
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Contact Info */}
            <div className="border-t pt-6">
              <div className="mb-6">
                <h3 className="text-sm font-semibold mb-2">BEZOEKADRES</h3>
                <p className="text-gray-600">
                  Van Leeuwenhoekstraat 27<br />
                  5807 GD, Oostrum<br />
                  <Link href="tel:+31478690333" className="hover:text-black">
                    +31 (0)478 690 333
                  </Link>
                  <br />
                  <Link href="mailto:info@strakk.nl" className="hover:text-black">
                    info@strakk.nl
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}