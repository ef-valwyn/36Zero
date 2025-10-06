"use client";
import { useState } from "react";
export type FilterState = { make: string; propulsion: string; status: string; };

export default function InventoryFilters({ onChange }:{ onChange:(f:FilterState)=>void }) {
  const [f, setF] = useState<FilterState>({ make:"", propulsion:"", status:"" });
  function set<K extends keyof FilterState>(k:K, v:string){ const s={...f,[k]:v}; setF(s); onChange(s); }
  return (
    <div className="card p-4 grid md:grid-cols-3 gap-3">
      <select value={f.make} onChange={e=>set("make",e.target.value)} className="border rounded-xl px-4 py-3">
        <option value="">Make</option><option>Adventure Yachts</option><option>ZEN Yachts</option><option>Other</option>
      </select>
      <select value={f.propulsion} onChange={e=>set("propulsion",e.target.value)} className="border rounded-xl px-4 py-3">
        <option value="">Propulsion</option><option>power</option><option>solar-electric</option><option>sail</option>
      </select>
      <select value={f.status} onChange={e=>set("status",e.target.value)} className="border rounded-xl px-4 py-3">
        <option value="">Status</option><option>New</option><option>In-Build</option><option>Available</option><option>Sold</option>
      </select>
    </div>
  );
}