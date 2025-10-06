import React from 'react';

export default function FeatureTiles() {
  const features = [
    {
      title: 'Zero Emissions',
      description: '100% electric vessels with zero environmental impact',
      icon: '⚡',
    },
    {
      title: 'Advanced Technology',
      description: 'Cutting-edge electric propulsion systems',
      icon: '🚤',
    },
    {
      title: 'Sustainable Routes',
      description: 'Eco-friendly maritime transportation networks',
      icon: '🌊',
    },
    {
      title: 'Premium Experience',
      description: 'Luxury travel with environmental consciousness',
      icon: '⭐',
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Why Choose 36Zero?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience the future of marine transportation with our innovative 
            electric vessels and sustainable approach to maritime travel.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
