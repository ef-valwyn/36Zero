export const SITE = {
    name: "36Zero Yachting",
    url: "https://36zeroyachting.com",
    logo: "/img/logo.svg",
    tagline: "Quiet Power. Bluewater Range. Built by Sailors."
  };
  
  export const FLAGS = {
    enableZen: process.env.NEXT_PUBLIC_ENABLE_ZEN === "true"
  };
  
  export const GA = {
    id: process.env.NEXT_PUBLIC_GA_ID || ""
  };
  
  export const EMAIL = {
    to: process.env.EMAIL_TO || "",
    from: process.env.EMAIL_FROM || "noreply@example.com"
  };