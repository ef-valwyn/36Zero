export default function ServiceMaintenancePartnersPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Service & Maintenance Partners
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Trusted partners for yacht service, maintenance, and support worldwide.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold mb-4">Regular Maintenance</h3>
            <p className="text-gray-600 mb-4">
              Scheduled maintenance programs to keep your yacht in optimal condition.
            </p>
            <a href="/contact" className="text-blue-600 hover:text-blue-800 font-medium">
              Schedule Service →
            </a>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold mb-4">Emergency Repairs</h3>
            <p className="text-gray-600 mb-4">
              24/7 emergency repair services available at major ports worldwide.
            </p>
            <a href="/contact" className="text-blue-600 hover:text-blue-800 font-medium">
              Emergency Contact →
            </a>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold mb-4">Upgrades & Refits</h3>
            <p className="text-gray-600 mb-4">
              Professional yacht upgrades and refitting services from certified partners.
            </p>
            <a href="/contact" className="text-blue-600 hover:text-blue-800 font-medium">
              Get Quote →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
