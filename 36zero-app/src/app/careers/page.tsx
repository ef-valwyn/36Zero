export default function CareersPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Careers
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Join the 36Zero team and help shape the future of sustainable yachting.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold mb-4">Engineering</h3>
            <p className="text-gray-600 mb-4">
              Join our engineering team to develop innovative yacht technologies.
            </p>
            <a href="/contact" className="text-blue-600 hover:text-blue-800 font-medium">
              View Openings →
            </a>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold mb-4">Sales & Marketing</h3>
            <p className="text-gray-600 mb-4">
              Help us connect with customers and promote sustainable yachting solutions.
            </p>
            <a href="/contact" className="text-blue-600 hover:text-blue-800 font-medium">
              Apply Now →
            </a>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold mb-4">Operations</h3>
            <p className="text-gray-600 mb-4">
              Support our day-to-day operations and customer service excellence.
            </p>
            <a href="/contact" className="text-blue-600 hover:text-blue-800 font-medium">
              Join Our Team →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
