import Link from "next/link";
export default function Routes() {
  const items = [
    { slug:"phuket-maldives", title:"Phuket → Maldives" },
    { slug:"abaco-grenada", title:"Abaco → Grenada" },
    { slug:"australia-fiji", title:"Australia → Fiji" }
  ];
  return (
    <div className="container-xl py-12">
      <h1 className="text-3xl font-semibold mb-6">ZeroLap Routes</h1>
      <div className="grid md:grid-cols-3 gap-6">
        {items.map(i=>(
          <Link key={i.slug} href={`/zerolap/routes/${i.slug}`} className="card p-4">
            <img src="/img/route-phuket-maldives.jpg" alt={i.title} className="rounded-xl mb-3" />
            <p className="font-semibold">{i.title}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}