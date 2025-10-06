export default function Insights() {
    const posts = [
      { title: "From Sail to Quiet Power", excerpt: "Why blue-water families move to mast-less comfort.", href: "#" },
      { title: "Zero-Emission Nights at Anchor", excerpt: "How ~10kW solar changes routines.", href: "#" },
      { title: "Inside Adventure Yachts (Thailand)", excerpt: "Paint hours & man-hours explained.", href: "#" }
    ];
    return (
      <div className="container-xl py-12">
        <h1 className="text-3xl font-semibold mb-6">Insights</h1>
        <div className="grid md:grid-cols-3 gap-6">
          {posts.map((p,i)=>(
            <a key={i} href={p.href} className="card p-4">
              <h3 className="font-semibold">{p.title}</h3>
              <p className="text-slate-600 text-sm mt-2">{p.excerpt}</p>
            </a>
          ))}
        </div>
      </div>
    );
  }