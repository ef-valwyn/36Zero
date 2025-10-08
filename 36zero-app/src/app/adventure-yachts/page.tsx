export default function AdventureYachtsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Adventure Yachts
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Discover our collection of adventure yachts designed for exploration and discovery.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Placeholder content - to be replaced with actual yacht listings */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold mb-4">Adventure Yacht 601</h3>
            <p className="text-gray-600 mb-4">
              Premium adventure yacht perfect for long-distance cruising and exploration.
            </p>
            <a href="/adventure-yachts/ay601" className="text-blue-600 hover:text-blue-800 font-medium">
              View Details →
            </a>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold mb-4">More Models</h3>
            <p className="text-gray-600 mb-4">
              Additional adventure yacht models coming soon.
            </p>
            <a href="/inventory" className="text-blue-600 hover:text-blue-800 font-medium">
              View Inventory →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

