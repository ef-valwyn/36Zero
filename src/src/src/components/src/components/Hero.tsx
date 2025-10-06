export default function Hero() {
    return (
      <section className="relative">
        <div className="container-xl py-14 md:py-24 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-semibold leading-tight">
              Quiet Power. Bluewater Range. Built by Sailors.
            </h1>
            <p className="mt-5 text-lg text-slate-600">
              36Zero Yachting unites world-class multihulls with programmatic routes
              and full-stack ownership support.
            </p>
            <div className="mt-8 flex gap-3">
              <a href="/contact" className="btn btn-primary">Book a Yard Tour</a>
              <a href="/contact" className="btn btn-ghost">Request Sea Trial</a>
              <a href="/inventory" className="btn btn-ghost">See Inventory</a>
            </div>
          </div>
          <div className="rounded-2xl overflow-hidden border">
            <img src="/img/hero.jpg" alt="AY & ZEN multihulls" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>
    );
  }