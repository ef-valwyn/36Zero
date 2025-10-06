export default function VideoStrip() {
    return (
      <section className="bg-black">
        <div className="container-xl py-8">
          <p className="text-white/80 mb-3 text-sm">Built by Sailors — Yard profile</p>
          <video controls className="w-full rounded-xl border border-white/10">
            <source src="/video/yard-hero.mp4" type="video/mp4" />
          </video>
        </div>
      </section>
    );
  }