export default function ZenYachtsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            ZEN Yachts
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Experience the future of luxury yachting with our innovative ZEN yacht collection.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Placeholder content - to be replaced with actual ZEN yacht listings */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold mb-4">ZEN Series</h3>
            <p className="text-gray-600 mb-4">
              Revolutionary design meets sustainable technology in our ZEN yacht series.
            </p>
            <a href="/contact" className="text-blue-600 hover:text-blue-800 font-medium">
              Learn More →
            </a>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold mb-4">Innovation</h3>
            <p className="text-gray-600 mb-4">
              Cutting-edge features and sustainable materials define the ZEN experience.
            </p>
            <a href="/about" className="text-blue-600 hover:text-blue-800 font-medium">
              About ZEN →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

