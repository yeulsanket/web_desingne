// src/components/home/HeroSection.jsx
import React from 'react';
import { ChevronDown } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black z-10"></div>
        <img
          src="https://images.unsplash.com/photo-1529139574466-a303027c1d8b?q=80&w=2187"
          alt="Hero Background"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="relative z-20 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-light text-white mb-6 tracking-wider">
          DESIGN<br />
          <span className="text-red-600">&</span> FREEDOM
        </h1>
        
        <p className="text-gray-300 text-lg md:text-xl mb-12 max-w-2xl mx-auto">
          Explore Independent Style by Embracing Your Agency<br />
          with Our Exclusive Designer Apparel
        </p>

        {/* Learn More Button */}
        <button className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-all duration-300 group">
          <ChevronDown className="w-6 h-6 animate-bounce" />
          <span className="uppercase text-sm tracking-wider font-medium">Learn More</span>
        </button>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-2 bg-white/50 rounded-full animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;