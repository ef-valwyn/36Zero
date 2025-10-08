export default function BrokerageListingsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Brokerage Listings
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Buy, sell, or trade your yacht with our expert brokerage services.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold mb-4">Buy a Yacht</h3>
            <p className="text-gray-600 mb-4">
              Browse our extensive selection of pre-owned yachts from trusted sellers.
            </p>
            <a href="/brokerage-listings/buy" className="text-blue-600 hover:text-blue-800 font-medium">
              View Listings →
            </a>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold mb-4">Sell Your Yacht</h3>
            <p className="text-gray-600 mb-4">
              Get expert assistance selling your yacht with our professional brokerage services.
            </p>
            <a href="/brokerage-listings/sell" className="text-blue-600 hover:text-blue-800 font-medium">
              Start Selling →
            </a>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold mb-4">Training & Service</h3>
            <p className="text-gray-600 mb-4">
              Professional training and maintenance services for yacht owners.
            </p>
            <a href="/brokerage-listings/training" className="text-blue-600 hover:text-blue-800 font-medium">
              Learn More →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

