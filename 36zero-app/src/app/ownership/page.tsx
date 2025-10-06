export default function OwnershipPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Ownership
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Everything you need to know about yacht ownership and management.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold mb-4">Ownership Benefits</h3>
            <p className="text-gray-600 mb-4">
              Discover the advantages of yacht ownership and what makes it worthwhile.
            </p>
            <a href="/contact" className="text-blue-600 hover:text-blue-800 font-medium">
              Learn More →
            </a>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold mb-4">Maintenance</h3>
            <p className="text-gray-600 mb-4">
              Professional maintenance services to keep your yacht in perfect condition.
            </p>
            <a href="/service-maintenance-partners" className="text-blue-600 hover:text-blue-800 font-medium">
              Service Partners →
            </a>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold mb-4">Insurance & Legal</h3>
            <p className="text-gray-600 mb-4">
              Comprehensive guidance on insurance, legal requirements, and documentation.
            </p>
            <a href="/contact" className="text-blue-600 hover:text-blue-800 font-medium">
              Get Advice →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
