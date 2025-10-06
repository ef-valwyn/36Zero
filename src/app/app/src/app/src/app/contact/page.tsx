import LeadForm from "@/components/LeadForm";

export default function Contact() {
  return (
    <div className="container-xl py-12 grid md:grid-cols-2 gap-8">
      <div>
        <h1 className="text-3xl font-semibold">Contact / Book a Sea Trial</h1>
        <p className="text-slate-600 mt-2">Short form. We’ll reply by email.</p>
        <div className="card p-6 mt-6">
          <LeadForm type="trial" />
        </div>
        <div className="card p-6 mt-6">
          <h2 className="text-xl font-semibold mb-2">Request Valuation (Sellers)</h2>
          <LeadForm type="valuation" />
        </div>
      </div>
      <div className="space-y-6">
        <div className="card p-6">
          <h3 className="font-semibold mb-2">Book a Yard Tour (AY Bangkok / Rayong)</h3>
          <LeadForm type="yard" />
        </div>
        <div className="card p-6">
          <p className="text-sm text-slate-600">Or email us: <a className="underline" href="mailto:hello@36zeroyachting.com">hello@36zeroyachting.com</a></p>
        </div>
      </div>
    </div>
  );
}