import React from 'react';
import { ArrowRight, Play } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-blue-600 to-blue-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                Your Journey to
                <span className="block text-blue-200">Zero Emissions</span>
              </h1>
              <p className="text-xl text-blue-100 max-w-2xl">
                Experience sustainable marine transportation with our eco-friendly routes 
                and cutting-edge electric vessels. Join the future of maritime travel.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors flex items-center justify-center">
                Explore Routes
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors flex items-center justify-center">
                <Play className="mr-2 h-5 w-5" />
                Watch Video
              </button>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold">50+</div>
                <div className="text-blue-200 text-sm">Routes</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">100%</div>
                <div className="text-blue-200 text-sm">Electric</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">0</div>
                <div className="text-blue-200 text-sm">Emissions</div>
              </div>
            </div>
          </div>
          
          {/* Image/Video Placeholder */}
          <div className="relative">
            <div className="bg-blue-500 rounded-2xl aspect-video flex items-center justify-center">
              <div className="text-center">
                <div className="w-20 h-20 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Play className="h-8 w-8 text-white ml-1" />
                </div>
                <p className="text-blue-100">Watch our story</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
