"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { SITE } from "@/lib/config";
import { cn } from "@/lib/utils";

export default function SiteNav({ enableZen }: { enableZen: boolean }) {
  const pathname = usePathname();
  const item = (href: string, label: string) => (
    <Link
      href={href}
      className={cn(
        "px-2.5 py-1.5 text-sm whitespace-nowrap rounded-lg hover:bg-slate-100",
        pathname === href && "bg-slate-100 font-semibold"
      )}
    >
      {label}
    </Link>
  );

  return (
    <header className="border-b">
      <div className="mx-auto flex w-full max-w-screen-2xl flex-wrap items-center gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3 flex-shrink-0">
          <img src={SITE.logo} alt="36Zero logo" className="h-8" />
          <span className="hidden sm:inline font-semibold">{SITE.name}</span>
        </Link>
        <nav className="hidden min-w-0 md:flex md:flex-1 md:flex-wrap md:justify-end md:gap-1 md:text-sm lg:gap-2">
          {item("/", "Home")}
          {item("/adventure-yachts", "Adventure Yachts")}
          {item("/zen-yachts", "ZEN Yachts")}
          {item("/brokerage-listings", "Brokerage Listings")}
          {item("/zerolap", "ZeroLap")}
          {item("/ownership", "Ownership")}
          {item("/training-crew", "Training & Crew")}
          {item("/service-maintenance-partners", "Service & Maintenance Partners")}
          {item("/about", "About")}
          {item("/contact", "Contact / Book a Sea Trial")}
        </nav>
        <div className="ml-auto md:hidden">
          {/* keep simple: rely on desktop for now; mobile menu can be added later */}
        </div>
      </div>
    </header>
  );
}
