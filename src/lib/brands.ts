export type Brand = {
  name: string;
  icon?: string;     // Iconify Simple Icons id
  domain?: string;   // e.g. "epam.com" for Clearbit fallback
  logoUrl?: string;  // Custom logo URL if available
};

export const brands: Brand[] = [
  // Iconify (SVG) where available
  { name: "EPAM", icon: "simple-icons:epam", domain: "epam.com" },
  { name: "Bose", icon: "simple-icons:bose", domain: "bose.com" },
  { name: "Schneider Electric", icon: "simple-icons:schneiderelectric", domain: "se.com" },
  
  // Clearbit-only guesses (update the domains if different)
  { name: "AVIV Group", domain: "aviv-group.com" },
  { name: "Cybrid", domain: "cybrid.app" },
  { 
    name: "Revolution Entertainment Services", 
    domain: "revolutiones.com"
  },
  { name: "Aurea Software", domain: "aurea.com" },
  { name: "Knab Bank", domain: "knab.nl" },
  { name: "Direct Energy", domain: "directenergy.com" },
];

