export default function ZeroLapPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            ZeroLap
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Discover zero-emission routes around the world with our innovative ZeroLap platform.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold mb-4">Featured Routes</h3>
            <p className="text-gray-600 mb-4">
              Explore our curated selection of sustainable yacht routes worldwide.
            </p>
            <a href="/zerolap/routes" className="text-blue-600 hover:text-blue-800 font-medium">
              View All Routes →
            </a>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold mb-4">Phuket to Maldives</h3>
            <p className="text-gray-600 mb-4">
              Experience our signature route from Thailand to the Maldives.
            </p>
            <a href="/zerolap/routes/phuket-maldives" className="text-blue-600 hover:text-blue-800 font-medium">
              Explore Route →
            </a>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold mb-4">Custom Routes</h3>
            <p className="text-gray-600 mb-4">
              Plan your own zero-emission journey with our route planning tools.
            </p>
            <a href="/contact" className="text-blue-600 hover:text-blue-800 font-medium">
              Plan Your Route →
            </a>
          </div>
        </div>
        
        <div className="mt-16 bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">How ZeroLap Works</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">1</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Choose Your Route</h3>
              <p className="text-gray-600">Select from our verified zero-emission routes or create your own.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">2</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Plan Your Journey</h3>
              <p className="text-gray-600">Use our tools to plan stops, charging points, and activities.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">3</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Set Sail</h3>
              <p className="text-gray-600">Enjoy your sustainable journey with full support along the way.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


