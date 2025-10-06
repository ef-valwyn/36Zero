import Link from "next/link";

export default function FeatureTiles({ showZen }: { showZen: boolean }) {
  return (
    <section className="container-xl py-12 grid md:grid-cols-3 gap-6">
      <Link href="/inventory/ay601" className="card p-5 hover:shadow-md">
        <img src="/img/ay601-hero.jpg" alt="AY601" className="rounded-xl mb-4" />
        <p className="font-semibold">AY601 — Quiet Range, Family Comfort</p>
      </Link>

      <div className="card p-5 opacity-100">
        <img src="/img/placeholder-800x500.jpg" alt="ZEN" className="rounded-xl mb-4" />
        <p className="font-semibold">
          ZEN — Solar-Electric, Zero-Emission {showZen ? "(Live)" : "(Staged)"}
        </p>
        <p className="text-sm text-slate-600 mt-2">
          The ZEN52/55 pioneer wingsail-ready, zero-emission cruising.
        </p>
      </div>

      <Link href="/zerolap" className="card p-5 hover:shadow-md">
        <img src="/img/route-phuket-maldives.jpg" alt="ZeroLap" className="rounded-xl mb-4" />
        <p className="font-semibold">ZeroLap — Routes, Training, Support</p>
      </Link>
    </section>
  );
}