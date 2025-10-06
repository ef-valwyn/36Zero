export default function PressMediaKitPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Press & Media Kit
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Resources for media professionals covering 36Zero and the future of yachting.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold mb-4">Press Releases</h3>
            <p className="text-gray-600 mb-4">
              Latest news and announcements from 36Zero.
            </p>
            <a href="/contact" className="text-blue-600 hover:text-blue-800 font-medium">
              View Releases →
            </a>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold mb-4">High-Res Images</h3>
            <p className="text-gray-600 mb-4">
              Download high-resolution images and logos for media use.
            </p>
            <a href="/contact" className="text-blue-600 hover:text-blue-800 font-medium">
              Download Assets →
            </a>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold mb-4">Media Contact</h3>
            <p className="text-gray-600 mb-4">
              Contact our media team for interviews and press inquiries.
            </p>
            <a href="/contact" className="text-blue-600 hover:text-blue-800 font-medium">
              Contact Media Team →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
