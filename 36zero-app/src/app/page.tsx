import Header from '@/components/Header';
import VideoStrip from '@/components/VideoStrip';
import LeadForm from '@/components/LeadForm';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <VideoStrip
        mode="hero"
        lowSrc="https://yyofqqbn0jyxo9dg.public.blob.vercel-storage.com/videos/no-excuse/No Excuse Hero Short.mp4"
        highSrc="https://yyofqqbn0jyxo9dg.public.blob.vercel-storage.com/videos/no-excuse/No Excuse Hero Short.mp4"
        ultraLowSrc="https://yyofqqbn0jyxo9dg.public.blob.vercel-storage.com/videos/no-excuse/hero-loop-540p.mp4"
        poster="/img/hero/home-hero.jpg"
        heading="The World's First Integrated Zero-Emission Yacht Ownership Platform"
        subheading="The World's First Integrated Zero-Emission Yacht Ownership Platform."
        quality="auto"
      />
      
      {/* Contact Form Section */}
      <section id="contact" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <LeadForm />
        </div>
      </section>
      
      {/* Placeholder sections for future components */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
            Coming Soon: More Components
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Credibility Bar</h3>
              <p className="text-gray-600">Trust indicators and certifications</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Feature Tiles</h3>
              <p className="text-gray-600">Key service highlights</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Route Teasers</h3>
              <p className="text-gray-600">Popular route previews</p>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}