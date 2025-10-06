import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t mt-16">
      <div className="container-xl py-10 grid md:grid-cols-4 gap-8 text-sm">
        <div>
          <p className="font-semibold mb-2">36Zero Yachting</p>
          <p>Headquartered in Singapore.</p>
        </div>
        <div>
          <p className="font-semibold mb-2">Explore</p>
          <ul className="space-y-2">
            <li><Link href="/press">Press & Media Kit</Link></li>
            <li><Link href="/events">Events</Link></li>
            <li><Link href="/terms">Terms</Link></li>
            <li><Link href="/privacy">Privacy</Link></li>
            <li><Link href="/careers">Careers</Link></li>
            <li><Link href="/newsletter">Newsletter</Link></li>
          </ul>
        </div>
        <div>
          <p className="font-semibold mb-2">Brokerage</p>
          <ul className="space-y-2">
            <li><Link href="/brokerage/buy">Buy</Link></li>
            <li><Link href="/brokerage/sell">Sell</Link></li>
            <li><Link href="/brokerage/training">On-vessel Training</Link></li>
            <li><Link href="/brokerage/service-model">Service model</Link></li>
          </ul>
        </div>
        <div>
          <p className="font-semibold mb-2">Book</p>
          <ul className="space-y-2">
            <li><Link href="/contact">Book a Sea Trial</Link></li>
            <li><Link href="/contact">Book a Yard Tour</Link></li>
          </ul>
        </div>
      </div>
      <div className="text-xs text-center py-4 border-t">
        © {new Date().getFullYear()} 36Zero Yachting. All rights reserved.
      </div>
    </footer>
  );
}