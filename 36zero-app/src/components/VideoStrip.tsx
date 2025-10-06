export default function VideoStrip() {
    return (
      <section className="bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <p className="text-white/80 mb-3 text-sm">Built by Sailors — Yard profile</p>
          <div className="relative rounded-xl overflow-hidden border border-white/10">
            <video controls className="w-full aspect-video object-cover">
              <source src="/media/videos/no-excuse/hero-1080p.mp4" type="video/mp4" />
              Sorry, your browser doesn't support embedded videos.
            </video>
          </div>
        </div>
      </section>
    );
  }