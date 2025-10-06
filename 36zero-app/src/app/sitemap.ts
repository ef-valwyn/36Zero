import { FLAGS } from "@/lib/config";

export default async function sitemap() {
  const base = "https://36zeroyachting.com";
  const urls = [
    "", "dealership", "dealership/adventure-yachts",
    // zen excluded when stealth
    "brokerage", "brokerage/buy", "brokerage/sell", "brokerage/training", "brokerage/service-model",
    "zerolap", "zerolap/routes", "zerolap/routes/phuket-maldives",
    "adventure-yachts", "inventory", "inventory/ay601",
    "service-partners", "insights", "about", "contact"
  ].filter(u => !(u.startsWith("dealership/zen") && !FLAGS.enableZen))
   .map(u => ({ url: `${base}/${u}`.replace(/\/$/, ""), lastModified: new Date() }));

  return urls;
}