import Link from "next/link";
import type { InventoryItem } from "@/data/inventory";

export default function InventoryCard({ item }: { item: InventoryItem }) {
  return (
    <div className="card overflow-hidden">
      <img src={item.hero || "/img/placeholder-800x500.jpg"} alt={item.model} className="w-full h-48 object-cover" />
      <div className="p-4 space-y-2">
        <p className="text-sm text-slate-500">{item.make}</p>
        <h3 className="text-lg font-semibold">{item.model}{item.variant ? ` ${item.variant}` : ""}</h3>
        <p className="text-sm">Length: {item.length_ft}’ · {item.propulsion}</p>
        <div className="flex gap-2 mt-3">
          <Link href={`/inventory/${item.slug}`} className="btn btn-ghost">View</Link>
          <a href={item.spec_pdf || "#"} className="btn btn-ghost">Download Spec</a>
        </div>
      </div>
    </div>
  );
}