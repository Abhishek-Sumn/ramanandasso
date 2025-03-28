"use client";

import Link from "next/link";
import { useState, useRef } from "react";
import { Menu, X } from "lucide-react";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const contactRef = useRef(null);

  const handleScrollToContact = () => {
    contactRef.current?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false); // Close mobile menu if open
  };

  return (
    <div>
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
          <button
            onClick={handleScrollToContact}
            className="text-white text-lg hover:text-gray-300 transition-colors"
          >
            Contact
          </button>
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
            <button className="hover:text-gray-300" onClick={handleScrollToContact}>
              Contact
            </button>
          </div>
        )}
      </nav>

      <section className="relative h-screen w-full overflow-hidden">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          src="https://cdn.pixabay.com/video/2020/08/13/47053-450995419_large.mp4"
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

      {/* Contact Section */}
      <section ref={contactRef} className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center">
            <div className="lg:mb-0 mb-10">
              <div className="group w-full h-full relative">
                <img
                  src="https://pagedone.io/asset/uploads/1696488602.png"
                  alt="Contact Us"
                  className="w-full h-full lg:rounded-l-2xl rounded-2xl bg-blend-multiply bg-indigo-700 object-cover"
                />
                <h1 className="font-manrope text-white text-4xl font-bold absolute top-11 left-11">
                  Contact us
                </h1>
                <div className="absolute bottom-0 w-full lg:p-11 p-5">
                  <div className="bg-white rounded-lg p-6">
                    {[
                      { icon: "📞", text: "+91 9431649501" },
                      { icon: "📧", text: "arch.raman6719@gmail.com" },
                      { icon: "📍", text: "Phulwari sarif, Patna" },
                    ].map((item, index) => (
                      <div key={index} className="flex items-center mb-6">
                        <span className="text-2xl text-indigo-600">{item.icon}</span>
                        <h5 className="text-black text-base font-normal leading-6 ml-5">
                          {item.text}
                        </h5>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
