export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            About 36Zero
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Leading the maritime industry towards a sustainable future with zero-emission electric vessels.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
            <p className="text-gray-700 mb-6">
              At 36Zero, we're revolutionizing the yachting industry by creating the world's first integrated 
              zero-emission yacht ownership platform. Our mission is to make sustainable yachting accessible 
              while preserving the world's oceans for future generations.
            </p>
            <p className="text-gray-700 mb-6">
              We combine cutting-edge electric propulsion technology with comprehensive ownership services, 
              creating a seamless experience that benefits both yacht owners and the environment.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-8">
            <h3 className="text-2xl font-semibold mb-4">Key Achievements</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                First zero-emission yacht platform
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                100% sustainable operations
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                Global service network
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                Award-winning innovation
              </li>
            </ul>
          </div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <h3 className="text-xl font-semibold mb-4">Innovation</h3>
            <p className="text-gray-600">
              Pioneering electric propulsion and sustainable yacht technology.
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <h3 className="text-xl font-semibold mb-4">Sustainability</h3>
            <p className="text-gray-600">
              Committed to zero-emission operations and ocean conservation.
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <h3 className="text-xl font-semibold mb-4">Excellence</h3>
            <p className="text-gray-600">
              Delivering exceptional service and ownership experiences.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
