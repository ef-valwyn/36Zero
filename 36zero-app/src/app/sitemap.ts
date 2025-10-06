import { FLAGS } from "@/lib/config";

export default async function sitemap() {
  const base = "https://36zeroyachting.com";
  const urls = [
    // Main navigation pages
    "", 
    "adventure-yachts", 
    "zen-yachts",
    "brokerage-listings", 
    "zerolap", 
    "ownership", 
    "training-crew", 
    "service-maintenance-partners", 
    "about", 
    "contact",
    
    // Sub-pages
    "adventure-yachts/inventory", 
    "adventure-yachts/ay601",
    "brokerage-listings/buy", 
    "brokerage-listings/sell", 
    "brokerage-listings/training", 
    "brokerage-listings/service-model",
    "zerolap/routes", 
    "zerolap/routes/phuket-maldives",
    
    // Footer pages
    "press-media-kit", 
    "events", 
    "terms", 
    "privacy", 
    "careers", 
    "newsletter"
  ].filter(u => !(u.startsWith("zen-yachts") && !FLAGS.enableZen))
   .map(u => ({ url: `${base}/${u}`.replace(/\/$/, ""), lastModified: new Date() }));

  return urls;
}