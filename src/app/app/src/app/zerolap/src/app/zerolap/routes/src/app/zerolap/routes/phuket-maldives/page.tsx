import { ROUTES } from "@/data/routes";

export default function PhuketMaldives() {
  const r = ROUTES.find(x => x.slug === "phuket-maldives");
  if (!r) return null;
  return (
    <div className="container-xl py-12 space-y-6">
      <h1 className="text-3xl font-semibold">{r.title}</h1>
      <img src={r.hero} alt={r.title} className="rounded-xl border" />
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <p><strong>Season:</strong> {r.season}</p>
          <p><strong>Windows:</strong> {r.windows}</p>
          <h3 className="text-xl font-semibold mt-4">Suggested Legs</h3>
          <ul className="list-disc pl-6">{r.legs.map(([a,b],i)=><li key={i}>{a} → {b}</li>)}</ul>
        </div>
        <div>
          <h3 className="text-xl font-semibold">Comfort Tips</h3>
          <ul className="list-disc pl-6">{r.comfort.map((x,i)=><li key={i}>{x}</li>)}</ul>
          <h3 className="text-xl font-semibold mt-4">Dive/Surf Notes</h3>
          <ul className="list-disc pl-6">{r.dive_surf.map((x,i)=><li key={i}>{x}</li>)}</ul>
        </div>
      </div>
      <div className="card p-6">
        <h3 className="text-xl font-semibold mb-2">Plan my route</h3>
        <p className="text-slate-600 mb-4">Tell us your boat, dates, crew, and interests.</p>
        {/* Reuse lead form; same endpoint */}
        {/* You can add custom hidden field for "route" */}
        <form className="space-y-3" action="/api/lead" method="post">
          <input type="hidden" name="type" value="route-phuket-maldives" />
          <input name="name" required placeholder="Name" className="w-full border rounded-xl px-4 py-3" />
          <input name="email" required type="email" placeholder="Email" className="w-full border rounded-xl px-4 py-3" />
          <textarea name="notes" placeholder="Boat, dates, crew, interests" className="w-full border rounded-xl px-4 py-3 h-28" />
          <button className="btn btn-primary">Send</button>
        </form>
      </div>
    </div>
  );
}