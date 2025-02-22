'use client'

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="">
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-lg bg-transparent py-4 px-8 flex justify-between items-center">
      {/* Logo */}
      <Link href="/" className="flex items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 100"
          className="w-12 h-12 text-white"
          fill="currentColor"
        >
          <text
            x="50%"
            y="50%"
            textAnchor="middle"
            dominantBaseline="middle"
            fontFamily="'Silk Serif', serif"
            fontSize="48"
          >
            RA
          </text>
        </svg>
      </Link>

      {/* Desktop Navigation */}
      <div className="space-x-6 hidden md:flex text-xl font-silk">
        <Link href="/" className="text-white text-lg hover:text-gray-300 transition-colors">Services</Link>
        <Link href="/" className="text-white text-lg hover:text-gray-300 transition-colors">Contact</Link>
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <button onClick={() => setIsOpen(!isOpen)} className="text-white">
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Navigation Drawer */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-black bg-opacity-90 text-white py-4 flex flex-col items-center space-y-4 md:hidden font-silk text-lg">
          <Link href="/" className="hover:text-gray-300" onClick={() => setIsOpen(false)}>Services</Link>
          <Link href="/" className="hover:text-gray-300" onClick={() => setIsOpen(false)}>Contact</Link>
        </div>
      )}
    </nav>

     <section className="relative h-screen w-full overflow-hidden">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="https://player.vimeo.com/progressive_redirect/playback/1025013801/rendition/1080p/file.mp4?loc=external&log_user=0&signature=abf7e09e70ec948296cea5898126d725ab674c1f6f9401dd76c703bc0c8c7eb1"
        autoPlay
        loop
        muted
        playsInline
      />
      <div className="relative z-10 flex items-center justify-center h-full bg-black/50">
      
            <h1 className="text-white text-4xl md:text-6xl font-thin font-silk">
               Raman and Associates
            </h1>

      </div>
    </section>
    </div>
  );
}
