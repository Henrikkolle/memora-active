import { z } from "zod";

// ─── Product types (17 Contrado products) ───
export const productTypes = [
  "custom_leggings",
  "gym_leggings",
  "high_waisted_leggings",
  "flared_leggings",
  "sports_bra",
  "tank_top",
  "crop_top",
  "bandeau",
  "loose_tshirt",
  "athletic_shorts",
  "hot_pants",
  "hoodie",
  "sweatshirt",
  "joggers",
] as const;
export type ProductType = typeof productTypes[number];

// ─── Categories for browsing ───
export const productCategories = ["tops", "bottoms", "activewear", "loungewear"] as const;
export type ProductCategory = typeof productCategories[number];

export const categoryProducts: Record<typeof productCategories[number], ProductType[]> = {
  tops: ["tank_top", "crop_top", "bandeau", "loose_tshirt"],
  bottoms: ["custom_leggings", "gym_leggings", "high_waisted_leggings", "flared_leggings", "athletic_shorts", "hot_pants", "joggers"],
  activewear: ["sports_bra", "gym_leggings", "athletic_shorts"],
  loungewear: ["hoodie", "sweatshirt", "joggers", "loose_tshirt"],
};

// ─── Quote categories (for editorial sections) ───
export const quoteCategories = ["motiverende", "sjove", "filosofiske", "business", "livsstil", "mindfulness"] as const;
export type QuoteCategory = typeof quoteCategories[number];

export interface Quote {
  id: string;
  text: string;
  author?: string;
  category: QuoteCategory;
}

// ─── Product type info (Contrado) ───
export interface ProductTypeInfo {
  id: ProductType;
  name: string;
  category: typeof productCategories[number];
  priceEUR: number;
  priceGBP: number;
  material: string;
  sizes: string;
  contradoUrl: string;
  description: string;
}

// Prices in EUR — based on Contrado retail + 20% margin analysis
// Free shipping on orders > €100
export const productTypeData: Record<ProductType, ProductTypeInfo> = {
  custom_leggings: {
    id: "custom_leggings",
    name: "Custom Leggings",
    category: "bottoms",
    priceEUR: 54,
    priceGBP: 29.45,
    material: "Slinky Matte or Soft Sheen Lycra",
    sizes: "XS–4XL",
    contradoUrl: "https://www.contrado.co.uk/custom-leggings",
    description: "Custom all-over print leggings — long, 3/4 and capri lengths",
  },
  gym_leggings: {
    id: "gym_leggings",
    name: "Gym Leggings",
    category: "activewear",
    priceEUR: 57,
    priceGBP: 39.95,
    material: "Flex Sport Lycra",
    sizes: "2XS–7XL",
    contradoUrl: "https://www.contrado.co.uk/custom-gym-leggings",
    description: "Performance gym leggings — Flex Sport Lycra, multiple waist heights",
  },
  high_waisted_leggings: {
    id: "high_waisted_leggings",
    name: "High Waisted Leggings",
    category: "bottoms",
    priceEUR: 55,
    priceGBP: 42.95,
    material: "Choice of 5 soft fabrics, taper or flare",
    sizes: "XXS–2XL",
    contradoUrl: "https://www.contrado.co.uk/high-waisted-printed-leggings",
    description: "High waisted printed leggings — 5 fabric choices, taper or flare leg",
  },
  flared_leggings: {
    id: "flared_leggings",
    name: "Flared Leggings",
    category: "bottoms",
    priceEUR: 52,
    priceGBP: 39.95,
    material: "Soft stretchy fabric",
    sizes: "XS–2XL",
    contradoUrl: "https://www.contrado.co.uk/custom-printed-flare-leggings",
    description: "High-waisted flare leggings — wide flare leg, retro-chic silhouette",
  },
  sports_bra: {
    id: "sports_bra",
    name: "Sports Bra",
    category: "activewear",
    priceEUR: 52,
    priceGBP: 40.95,
    material: "Flex Sport Lycra",
    sizes: "2XS–7XL",
    contradoUrl: "https://www.contrado.co.uk/custom-sports-bra",
    description: "Custom printed sports bra — supportive fit, all-over print",
  },
  tank_top: {
    id: "tank_top",
    name: "Tank Top",
    category: "tops",
    priceEUR: 38,
    priceGBP: 28.95,
    material: "Poly-elastane blend",
    sizes: "XS–4XL",
    contradoUrl: "https://www.contrado.co.uk/custom-tank-tops",
    description: "Classic scoop neck tank top — lightweight poly-elastane blend",
  },
  crop_top: {
    id: "crop_top",
    name: "Crop Top",
    category: "tops",
    priceEUR: 48,
    priceGBP: 37.45,
    material: "Cotton & recycled polyester jersey",
    sizes: "XS–2XL",
    contradoUrl: "https://www.contrado.co.uk/custom-crop-tops-for-women",
    description: "Sustainable crop top — cotton & recycled polyester jersey",
  },
  bandeau: {
    id: "bandeau",
    name: "Bandeau Top",
    category: "tops",
    priceEUR: 42,
    priceGBP: 31.95,
    material: "Slinky Matte or Soft Sheen Lycra, fully lined",
    sizes: "XS–4XL",
    contradoUrl: "https://www.contrado.co.uk/custom-bandeau",
    description: "Custom bandeau top — fully lined, all-over print",
  },
  loose_tshirt: {
    id: "loose_tshirt",
    name: "Loose Fit T-Shirt",
    category: "tops",
    priceEUR: 42,
    priceGBP: 31.95,
    material: "Soft jersey, cap sleeves",
    sizes: "XS–4XL",
    contradoUrl: "https://www.contrado.co.uk/custom-slouch-t-shirt",
    description: "Relaxed loose fit tee — cap sleeves, all-over infused print",
  },
  athletic_shorts: {
    id: "athletic_shorts",
    name: "Athletic Shorts",
    category: "activewear",
    priceEUR: 59,
    priceGBP: 47.95,
    material: "Rox Sports Jersey, satin lining",
    sizes: "2XS–7XL",
    contradoUrl: "https://www.contrado.co.uk/custom-womens-shorts",
    description: "Running shorts — elastic waistband, drawstring, satin lining",
  },
  hot_pants: {
    id: "hot_pants",
    name: "Hot Pants",
    category: "bottoms",
    priceEUR: 34,
    priceGBP: 24.95,
    material: "Slinky Matte or Soft Sheen Lycra, mesh lining",
    sizes: "XS–4XL",
    contradoUrl: "https://www.contrado.co.uk/custom-hot-pants",
    description: "Custom hot pants — soft Lycra with mesh fabric lining",
  },
  hoodie: {
    id: "hoodie",
    name: "Hoodie",
    category: "loungewear",
    priceEUR: 85,
    priceGBP: 69,
    material: "Soft fleece, eco-friendly inks",
    sizes: "XS–4XL",
    contradoUrl: "https://www.contrado.co.uk/custom-hoodie",
    description: "Custom hoodie — zipper or pull-over, eco-friendly full-colour print",
  },
  sweatshirt: {
    id: "sweatshirt",
    name: "Sweatshirt",
    category: "loungewear",
    priceEUR: 65,
    priceGBP: 49,
    material: "White Loopback or Softshell Jersey",
    sizes: "XS–4XL",
    contradoUrl: "https://www.contrado.co.uk/custom-sweatshirt",
    description: "Custom sweatshirt — premium jersey, all-over print",
  },
  joggers: {
    id: "joggers",
    name: "Joggers",
    category: "loungewear",
    priceEUR: 75,
    priceGBP: 59,
    material: "Two jersey fabrics, slim-fit, cuffed ankle",
    sizes: "XXS–2XL",
    contradoUrl: "https://www.contrado.co.uk/custom-tracksuit-bottoms",
    description: "Slim-fit joggers — elasticated waistband, drawstring, cuffed ankle",
  },
};

// ─── Sizes per product type ───
export interface ProductSize {
  id: string;
  name: string;
}

export const productSizes: Record<ProductType, ProductSize[]> = {
  custom_leggings: [
    { id: "xs", name: "XS" }, { id: "s", name: "S" }, { id: "m", name: "M" },
    { id: "l", name: "L" }, { id: "xl", name: "XL" }, { id: "2xl", name: "2XL" },
    { id: "3xl", name: "3XL" }, { id: "4xl", name: "4XL" },
  ],
  gym_leggings: [
    { id: "2xs", name: "2XS" }, { id: "xs", name: "XS" }, { id: "s", name: "S" },
    { id: "m", name: "M" }, { id: "l", name: "L" }, { id: "xl", name: "XL" },
    { id: "2xl", name: "2XL" }, { id: "3xl", name: "3XL" },
  ],
  high_waisted_leggings: [
    { id: "xxs", name: "XXS" }, { id: "xs", name: "XS" }, { id: "s", name: "S" },
    { id: "m", name: "M" }, { id: "l", name: "L" }, { id: "xl", name: "XL" }, { id: "2xl", name: "2XL" },
  ],
  flared_leggings: [
    { id: "xs", name: "XS" }, { id: "s", name: "S" }, { id: "m", name: "M" },
    { id: "l", name: "L" }, { id: "xl", name: "XL" }, { id: "2xl", name: "2XL" },
  ],
  sports_bra: [
    { id: "2xs", name: "2XS" }, { id: "xs", name: "XS" }, { id: "s", name: "S" },
    { id: "m", name: "M" }, { id: "l", name: "L" }, { id: "xl", name: "XL" },
    { id: "2xl", name: "2XL" }, { id: "3xl", name: "3XL" },
  ],
  tank_top: [
    { id: "xs", name: "XS" }, { id: "s", name: "S" }, { id: "m", name: "M" },
    { id: "l", name: "L" }, { id: "xl", name: "XL" }, { id: "2xl", name: "2XL" },
  ],
  crop_top: [
    { id: "xs", name: "XS" }, { id: "s", name: "S" }, { id: "m", name: "M" },
    { id: "l", name: "L" }, { id: "xl", name: "XL" }, { id: "2xl", name: "2XL" },
  ],
  bandeau: [
    { id: "xs", name: "XS" }, { id: "s", name: "S" }, { id: "m", name: "M" },
    { id: "l", name: "L" }, { id: "xl", name: "XL" }, { id: "2xl", name: "2XL" },
  ],
  loose_tshirt: [
    { id: "xs", name: "XS" }, { id: "s", name: "S" }, { id: "m", name: "M" },
    { id: "l", name: "L" }, { id: "xl", name: "XL" }, { id: "2xl", name: "2XL" },
  ],
  athletic_shorts: [
    { id: "2xs", name: "2XS" }, { id: "xs", name: "XS" }, { id: "s", name: "S" },
    { id: "m", name: "M" }, { id: "l", name: "L" }, { id: "xl", name: "XL" },
    { id: "2xl", name: "2XL" }, { id: "3xl", name: "3XL" },
  ],
  hot_pants: [
    { id: "xs", name: "XS" }, { id: "s", name: "S" }, { id: "m", name: "M" },
    { id: "l", name: "L" }, { id: "xl", name: "XL" }, { id: "2xl", name: "2XL" },
  ],
  hoodie: [
    { id: "xs", name: "XS" }, { id: "s", name: "S" }, { id: "m", name: "M" },
    { id: "l", name: "L" }, { id: "xl", name: "XL" }, { id: "2xl", name: "2XL" },
  ],
  sweatshirt: [
    { id: "xs", name: "XS" }, { id: "s", name: "S" }, { id: "m", name: "M" },
    { id: "l", name: "L" }, { id: "xl", name: "XL" }, { id: "2xl", name: "2XL" },
  ],
  joggers: [
    { id: "xxs", name: "XXS" }, { id: "xs", name: "XS" }, { id: "s", name: "S" },
    { id: "m", name: "M" }, { id: "l", name: "L" }, { id: "xl", name: "XL" }, { id: "2xl", name: "2XL" },
  ],
};

// ─── Colors (Memora muted palette) ───
export interface ProductColor {
  id: string;
  name: string;
  hex: string;
}

export const productColors: ProductColor[] = [
  { id: "dusty_rose", name: "Dusty Rose", hex: "#C9929D" },
  { id: "cream", name: "Cream", hex: "#F0EAE0" },
  { id: "taupe", name: "Taupe", hex: "#B4A69A" },
];

// ─── Cart ───
export interface CartItem {
  id: string;
  productType: ProductType;
  productTypeName: string;
  sizeId: string;
  sizeName: string;
  colorId: string;
  colorName: string;
  quantity: number;
  price: number;
}

export const orderFormSchema = z.object({
  firstName: z.string().min(1),
  lastName: z.string().min(1),
  email: z.string().email(),
  phone: z.string().min(5),
  addressLine1: z.string().min(1),
  addressLine2: z.string().optional(),
  city: z.string().min(1),
  postCode: z.string().min(1),
  country: z.string().default("DK"),
});

export type OrderFormData = z.infer<typeof orderFormSchema>;

// ─── Editorial Quotes (used between catalog sections) ───
export const sampleQuotes: Quote[] = [
  { id: "q1", text: "Gør det umulige muligt", category: "motiverende" },
  { id: "q2", text: "Fejl er bare uopdagede muligheder", category: "motiverende" },
  { id: "q3", text: "Drøm stort. Start småt. Begynd nu.", category: "motiverende" },
  { id: "q4", text: "Din eneste grænse er dig selv", category: "motiverende" },
  { id: "q5", text: "Succes er ikke endelig, fiasko er ikke fatal", category: "motiverende" },
  { id: "q6", text: "Jeg løber ikke – jeg ankommer dramatisk sent", category: "sjove" },
  { id: "q7", text: "Kaffe først. Spørgsmål bagefter.", category: "sjove" },
  { id: "q8", text: "Professionel overtænker", category: "sjove" },
  { id: "q9", text: "Min holdning er som WiFi – svært at ændre", category: "sjove" },
  { id: "q10", text: "Jeg er ikke doven, jeg er på energisparetilstand", category: "sjove" },
  { id: "q11", text: "At leve er at vælge", category: "filosofiske" },
  { id: "q12", text: "Forandring begynder indefra", category: "filosofiske" },
  { id: "q13", text: "Vejen er målet", category: "filosofiske" },
  { id: "q14", text: "Vær den forandring du ønsker at se", category: "filosofiske" },
  { id: "q15", text: "Simplicity is the ultimate sophistication", category: "filosofiske" },
  { id: "q16", text: "Hustle in silence. Let success make the noise.", category: "business" },
  { id: "q17", text: "Byg dit imperium", category: "business" },
  { id: "q18", text: "Profit follows passion", category: "business" },
  { id: "q19", text: "Execution over ideas", category: "business" },
  { id: "q20", text: "Own your story", category: "business" },
  { id: "q21", text: "Less is more", category: "livsstil" },
  { id: "q22", text: "Nyd øjeblikket", category: "livsstil" },
  { id: "q23", text: "Frihed er en tilstand", category: "livsstil" },
  { id: "q24", text: "Good vibes only", category: "livsstil" },
  { id: "q25", text: "Livet er for kort til dårlig kaffe", category: "livsstil" },
  { id: "q26", text: "Be here now", category: "mindfulness" },
  { id: "q27", text: "Stilheden taler højest", category: "mindfulness" },
  { id: "q28", text: "Breathe in. Let go.", category: "mindfulness" },
  { id: "q29", text: "Ingen vind, ingen bølger — bare ro", category: "mindfulness" },
  { id: "q30", text: "The mind is everything. What you think, you become.", category: "mindfulness" },
];
