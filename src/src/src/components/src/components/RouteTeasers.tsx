import Link from "next/link";

export default function RouteTeasers() {
  const routes = [
    { slug: "phuket-maldives", title: "Phuket → Maldives" },
    { slug: "abaco-grenada", title: "Abaco → Grenada" },
    { slug: "australia-fiji", title: "Australia → Fiji" }
  ];
  return (
    <section className="container-xl py-12">
      <h2 className="text-2xl font-semibold mb-6">Route Teasers</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {routes.map(r => (
          <Link key={r.slug} href={`/zerolap/routes/${r.slug}`} className="card p-4 hover:shadow-md">
            <img src="/img/route-phuket-maldives.jpg" alt={r.title} className="rounded-xl mb-3" />
            <p className="font-semibold">{r.title}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}