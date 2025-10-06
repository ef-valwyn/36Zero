"use client";
import { useState } from "react";
import { track } from "@/lib/tracking";

export default function LeadForm({ type }: { type: "yard" | "trial" | "valuation" | "owners-guide" }) {
  const [status, setStatus] = useState<"idle"|"ok"|"err"|"sending">("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const data = Object.fromEntries(new FormData(e.currentTarget).entries());
    try {
      const res = await fetch("/api/lead", { method: "POST", body: JSON.stringify({ type, data }) });
      if (!res.ok) throw new Error("bad");
      setStatus("ok");
      track("lead_form_submit", { type });
      (e.target as HTMLFormElement).reset();
    } catch {
      setStatus("err");
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-3">
      <input required name="name" placeholder="Name" className="w-full border rounded-xl px-4 py-3" />
      <input required name="email" type="email" placeholder="Email" className="w-full border rounded-xl px-4 py-3" />
      <input name="phone" placeholder="Phone / WhatsApp" className="w-full border rounded-xl px-4 py-3" />
      <select name="interest" className="w-full border rounded-xl px-4 py-3">
        <option value="">Interest</option>
        <option>AY601</option><option>AY60 Explorer</option><option>ZEN52</option><option>ZEN55</option><option>Brokerage</option><option>ZeroLap</option>
      </select>
      <input name="timing" placeholder="Timing (e.g., next 30 days)" className="w-full border rounded-xl px-4 py-3" />
      <textarea name="notes" placeholder="Notes" className="w-full border rounded-xl px-4 py-3 h-28" />
      <button className="btn btn-primary" disabled={status==="sending"}>
        {status==="sending" ? "Sending…" : "Send"}
      </button>
      {status==="ok" && <p className="text-green-700">Thanks — we’ll email you shortly.</p>}
      {status==="err" && <p className="text-red-700">Sorry, couldn’t send. Try again.</p>}
    </form>
  );
}