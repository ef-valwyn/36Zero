"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { SITE } from "@/lib/config";
import { cn } from "@/lib/utils";

export default function SiteNav({ enableZen }: { enableZen: boolean }) {
  const pathname = usePathname();
  const item = (href: string, label: string) => (
    <Link href={href} className={cn("px-3 py-2 rounded-lg hover:bg-slate-100",
      pathname === href && "bg-slate-100 font-semibold")}>{label}</Link>
  );

  return (
    <header className="border-b">
      <div className="container-xl flex items-center justify-between py-3">
        <Link href="/" className="flex items-center gap-3">
          <img src={SITE.logo} alt="36Zero logo" className="h-8" />
          <span className="font-semibold hidden sm:inline">{SITE.name}</span>
        </Link>
        <nav className="hidden md:flex items-center gap-1">
          {item("/", "Home")}
          {item("/dealership", "Yacht Dealership")}
          {item("/brokerage", "Yacht Brokerage")}
          {item("/zerolap", "ZeroLap")}
          {item("/adventure-yachts", "Adventure Yachts")}
          {item("/service-partners", "Service & Maintenance")}
          {item("/insights", "Insights")}
          {item("/about", "About 36Zero")}
          {item("/contact", "Contact / Sea Trial")}
          {/* ZEN stealth: no nav item unless enabled */}
          {enableZen && item("/dealership/zen", "ZEN Yachts")}
        </nav>
        <div className="md:hidden">
          {/* keep simple: rely on desktop for now; mobile menu can be added later */}
        </div>
      </div>
    </header>
  );
}