// src/components/layout/Footer.jsx
import React from 'react';
import { Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-zinc-950 border-t border-zinc-800 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-4 tracking-wider">DVSY</h3>
            <p className="text-gray-400 text-sm">
              Explore Independent Style by Embracing Your Agency with Our Exclusive Designer Apparel.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4 uppercase tracking-wider text-sm">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#designers" className="text-gray-400 hover:text-white text-sm transition-colors">Designers</a></li>
              <li><a href="#gallery" className="text-gray-400 hover:text-white text-sm transition-colors">Gallery</a></li>
              <li><a href="#events" className="text-gray-400 hover:text-white text-sm transition-colors">Events</a></li>
              <li><a href="#blog" className="text-gray-400 hover:text-white text-sm transition-colors">Blog</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-white font-semibold mb-4 uppercase tracking-wider text-sm">Support</h4>
            <ul className="space-y-2">
              <li><a href="#about" className="text-gray-400 hover:text-white text-sm transition-colors">About Us</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white text-sm transition-colors">Contact</a></li>
              <li><a href="#faq" className="text-gray-400 hover:text-white text-sm transition-colors">FAQ</a></li>
              <li><a href="#shipping" className="text-gray-400 hover:text-white text-sm transition-colors">Shipping</a></li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-white font-semibold mb-4 uppercase tracking-wider text-sm">Follow Us</h4>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-zinc-800 text-center">
          <p className="text-gray-500 text-sm">
            © 2024 DVSY. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;