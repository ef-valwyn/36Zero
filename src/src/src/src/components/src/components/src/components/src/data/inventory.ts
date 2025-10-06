export type InventoryItem = {
    slug: string;
    make: "Adventure Yachts" | "ZEN Yachts" | "Other";
    model: string;
    variant?: string;
    length_ft: number;
    propulsion: "power" | "solar-electric" | "sail";
    location: string;
    status: "New" | "In-Build" | "Available" | "Sold";
    range_nm?: number;
    cruise_kn?: number;
    top_kn?: number;
    solar_kw?: number;
    hero?: string;
    spec_pdf?: string;
  };
  
  export const INVENTORY: InventoryItem[] = [
    {
      slug: "ay601",
      make: "Adventure Yachts",
      model: "AY601",
      variant: "Sports",
      length_ft: 60,
      propulsion: "power",
      location: "Thailand — Rayong",
      status: "In-Build",
      range_nm: 2500, cruise_kn: 10, top_kn: 21, solar_kw: 10,
      hero: "/img/ay601-hero.jpg",
      spec_pdf: "/docs/AY601-spec.pdf"
    }
  ];