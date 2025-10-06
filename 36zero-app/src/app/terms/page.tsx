export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-lg shadow-md p-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">
            Terms of Service
          </h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-6">
              Last updated: {new Date().toLocaleDateString()}
            </p>
            
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Acceptance of Terms</h2>
            <p className="text-gray-700 mb-6">
              By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement.
            </p>
            
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Use License</h2>
            <p className="text-gray-700 mb-6">
              Permission is granted to temporarily download one copy of the materials on 36Zero's website for personal, non-commercial transitory viewing only.
            </p>
            
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Disclaimer</h2>
            <p className="text-gray-700 mb-6">
              The materials on 36Zero's website are provided on an 'as is' basis. 36Zero makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties.
            </p>
            
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Limitations</h2>
            <p className="text-gray-700 mb-6">
              In no event shall 36Zero or its suppliers be liable for any damages arising out of the use or inability to use the materials on this website.
            </p>
            
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Contact Information</h2>
            <p className="text-gray-700">
              If you have any questions about these Terms of Service, please contact us at{" "}
              <a href="/contact" className="text-blue-600 hover:text-blue-800">our contact page</a>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
