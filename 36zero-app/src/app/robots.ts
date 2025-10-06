import { FLAGS } from "@/lib/config";

export default function robots() {
  const disallowZen = FLAGS.enableZen ? "" : "\nDisallow: /dealership/zen";
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: FLAGS.enableZen ? [] : ["/dealership/zen"]
    },
    sitemap: "https://36zeroyachting.com/sitemap.xml"
  };
}