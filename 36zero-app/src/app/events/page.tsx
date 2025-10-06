export default function EventsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Events
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Join us at yacht shows, exhibitions, and exclusive 36Zero events.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold mb-4">Yacht Shows</h3>
            <p className="text-gray-600 mb-4">
              Find us at major international yacht shows and exhibitions.
            </p>
            <a href="/contact" className="text-blue-600 hover:text-blue-800 font-medium">
              View Schedule →
            </a>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold mb-4">Sea Trials</h3>
            <p className="text-gray-600 mb-4">
              Book your personal sea trial experience with our yachts.
            </p>
            <a href="/contact" className="text-blue-600 hover:text-blue-800 font-medium">
              Book Sea Trial →
            </a>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold mb-4">Private Events</h3>
            <p className="text-gray-600 mb-4">
              Exclusive events and demonstrations for qualified buyers.
            </p>
            <a href="/contact" className="text-blue-600 hover:text-blue-800 font-medium">
              Request Invitation →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
