import React from 'react';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-blue-400">36Zero</h3>
            <p className="text-gray-300">
              Leading the maritime industry towards a sustainable future with 
              zero-emission electric vessels and eco-friendly routes.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-5 w-5 text-gray-400 hover:text-blue-400 cursor-pointer" />
              <Twitter className="h-5 w-5 text-gray-400 hover:text-blue-400 cursor-pointer" />
              <Instagram className="h-5 w-5 text-gray-400 hover:text-blue-400 cursor-pointer" />
              <Linkedin className="h-5 w-5 text-gray-400 hover:text-blue-400 cursor-pointer" />
            </div>
          </div>
          
          {/* Navigation */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Navigation</h4>
            <ul className="space-y-2">
              <li><a href="/adventure-yachts" className="text-gray-300 hover:text-blue-400">Adventure Yachts</a></li>
              <li><a href="/zen-yachts" className="text-gray-300 hover:text-blue-400">ZEN Yachts</a></li>
              <li><a href="/brokerage-listings" className="text-gray-300 hover:text-blue-400">Brokerage Listings</a></li>
              <li><a href="/zerolap" className="text-gray-300 hover:text-blue-400">ZeroLap</a></li>
              <li><a href="/ownership" className="text-gray-300 hover:text-blue-400">Ownership</a></li>
              <li><a href="/training-crew" className="text-gray-300 hover:text-blue-400">Training & Crew</a></li>
              <li><a href="/service-maintenance-partners" className="text-gray-300 hover:text-blue-400">Service & Maintenance Partners</a></li>
            </ul>
          </div>
          
          {/* Company */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Company</h4>
            <ul className="space-y-2">
              <li><a href="/about" className="text-gray-300 hover:text-blue-400">About</a></li>
              <li><a href="/press-media-kit" className="text-gray-300 hover:text-blue-400">Press & Media Kit</a></li>
              <li><a href="/events" className="text-gray-300 hover:text-blue-400">Events</a></li>
              <li><a href="/careers" className="text-gray-300 hover:text-blue-400">Careers</a></li>
              <li><a href="/newsletter" className="text-gray-300 hover:text-blue-400">Newsletter</a></li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-center">
                <MapPin className="h-5 w-5 text-blue-400 mr-3" />
                <span className="text-gray-300">123 Harbor Drive<br />Marina Bay, CA 90210</span>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 text-blue-400 mr-3" />
                <span className="text-gray-300">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 text-blue-400 mr-3" />
                <span className="text-gray-300">info@36zero.com</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 36Zero. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="/press-media-kit" className="text-gray-400 hover:text-blue-400 text-sm">Press & Media Kit</a>
              <a href="/events" className="text-gray-400 hover:text-blue-400 text-sm">Events</a>
              <a href="/terms" className="text-gray-400 hover:text-blue-400 text-sm">Terms</a>
              <a href="/privacy" className="text-gray-400 hover:text-blue-400 text-sm">Privacy</a>
              <a href="/careers" className="text-gray-400 hover:text-blue-400 text-sm">Careers</a>
              <a href="/newsletter" className="text-gray-400 hover:text-blue-400 text-sm">Newsletter</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
