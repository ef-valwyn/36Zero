import React from 'react';
import { Menu, Phone, Mail } from 'lucide-react';

export default function Header() {
  return (
    <header className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-blue-600">36Zero</h1>
          </div>
          
          {/* Navigation */}
          <nav className="hidden md:flex space-x-6">
            <a href="/" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium">
              Home
            </a>
            <a href="/adventure-yachts" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium">
              Adventure Yachts
            </a>
            <a href="/zen-yachts" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium">
              ZEN Yachts
            </a>
            <a href="/brokerage-listings" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium">
              Brokerage Listings
            </a>
            <a href="/zerolap" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium">
              ZeroLap
            </a>
            <a href="/ownership" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium">
              Ownership
            </a>
            <a href="/training-crew" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium">
              Training & Crew
            </a>
            <a href="/service-maintenance-partners" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium">
              Service & Maintenance Partners
            </a>
            <a href="/about" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium">
              About
            </a>
            <a href="/contact" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium">
              Contact / Book a Sea Trial
            </a>
          </nav>
          
          {/* Contact Info */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className="flex items-center text-sm text-gray-600">
              <Phone className="h-4 w-4 mr-2" />
              <span>+1 (555) 123-4567</span>
            </div>
            <div className="flex items-center text-sm text-gray-600">
              <Mail className="h-4 w-4 mr-2" />
              <span>info@36zero.com</span>
            </div>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button className="text-gray-700 hover:text-blue-600">
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
