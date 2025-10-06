"use client";
import { useMemo, useState } from "react";
import { INVENTORY, type InventoryItem } from "@/data/inventory";
import InventoryFilters, { type FilterState } from "@/components/InventoryFilters";
import InventoryCard from "@/components/InventoryCard";

export default function InventoryIndex() {
  const [f, setF] = useState<FilterState>({ make:"", propulsion:"", status:"" });
  const filtered = useMemo(()=> INVENTORY.filter(i =>
    (!f.make || i.make===f.make) &&
    (!f.propulsion || i.propulsion===f.propulsion) &&
    (!f.status || i.status===f.status)
  ), [f]);

  return (
    <div className="container-xl py-12 space-y-6">
      <h1 className="text-3xl font-semibold">Inventory</h1>
      <InventoryFilters onChange={setF} />
      <div className="grid md:grid-cols-3 gap-6">
        {filtered.map(i => <InventoryCard key={i.slug} item={i} />)}
      </div>
    </div>
  );
}