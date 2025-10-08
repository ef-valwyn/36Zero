export default function TrainingCrewPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Training & Crew
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Professional training programs and crew services for yacht operations.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold mb-4">Captain Training</h3>
            <p className="text-gray-600 mb-4">
              Comprehensive captain certification and advanced training programs.
            </p>
            <a href="/contact" className="text-blue-600 hover:text-blue-800 font-medium">
              Enroll Now →
            </a>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold mb-4">Crew Services</h3>
            <p className="text-gray-600 mb-4">
              Professional crew placement and management services for your yacht.
            </p>
            <a href="/contact" className="text-blue-600 hover:text-blue-800 font-medium">
              Find Crew →
            </a>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold mb-4">Safety Training</h3>
            <p className="text-gray-600 mb-4">
              Essential safety and emergency response training for all crew members.
            </p>
            <a href="/contact" className="text-blue-600 hover:text-blue-800 font-medium">
              Book Training →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

