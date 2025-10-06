import { INVENTORY } from "@/data/inventory";

export default function AY601() {
  const item = INVENTORY.find(x => x.slug==="ay601");
  if (!item) return null;

  return (
    <div className="container-xl py-12 space-y-6">
      <div className="grid md:grid-cols-2 gap-8 items-start">
        <div>
          <img src={item.hero || "/img/placeholder-800x500.jpg"} alt="AY601" className="rounded-2xl border" />
        </div>
        <div>
          <h1 className="text-3xl font-semibold">AY601 — Sports</h1>
          <p className="text-slate-600 mt-2">
            ~10,000 W solar → silent nights (no genset). Blue-water sail-away base (E-glass + carbon composite).
            Range ~2,500 nm; Cruise 8–12 kn; Top ~21 kn. Fully equipped galley incl. dishwasher.
            Storage for 8 surfboards/dive bottles (compressor optional). Beachable with forward electric staircase.
            Davits ~250 kg (Highfield 4.2 m, 50 hp).
          </p>
          <div className="mt-6 flex gap-3">
            <a href="/contact" className="btn btn-primary">Request Pricing</a>
            <a href="/contact" className="btn btn-ghost">Book Sea Trial</a>
          </div>
        </div>
      </div>
      <div className="grid md:grid-cols-3 gap-6">
        <div className="card p-4"><p><strong>Range</strong><br/>~2,500 nm</p></div>
        <div className="card p-4"><p><strong>Cruise</strong><br/>8–12 kn</p></div>
        <div className="card p-4"><p><strong>Top</strong><br/>~21 kn</p></div>
      </div>
    </div>
  );
}