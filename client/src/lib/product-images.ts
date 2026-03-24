import type { ProductType } from "@shared/schema";

// ─── Dusty Rose (original) ───
import imgLeggingsDustyRose from "@assets/memora-custom-leggings-dusty_rose.jpg";
import imgGymLeggingsDustyRose from "@assets/memora-gym-leggings-dusty_rose.jpg";
import imgHighWaistedDustyRose from "@assets/memora-high-waisted-dusty_rose.jpg";
import imgFlaredDustyRose from "@assets/memora-flared-leggings-dusty_rose.jpg";
import imgSportsBraDustyRose from "@assets/memora-sports-bra-dusty_rose.jpg";
import imgTankTopDustyRose from "@assets/memora-tank-top-dusty_rose.jpg";
import imgCropTopDustyRose from "@assets/memora-crop-top-dusty_rose.jpg";
import imgBandeauDustyRose from "@assets/memora-bandeau-dusty_rose.jpg";
import imgLooseTshirtDustyRose from "@assets/memora-loose-tshirt-dusty_rose.jpg";
import imgShortsDustyRose from "@assets/memora-athletic-shorts-dusty_rose.jpg";
import imgHotPantsDustyRose from "@assets/memora-hot-pants-dusty_rose.jpg";
import imgHoodieDustyRose from "@assets/memora-hoodie-dusty_rose.jpg";
import imgSweatshirtDustyRose from "@assets/memora-sweatshirt-dusty_rose.jpg";
import imgJoggersDustyRose from "@assets/memora-joggers-dusty_rose.jpg";

// ─── Cream ───
import imgLeggingsCream from "@assets/memora-custom-leggings-cream.jpg";
import imgGymLeggingsCream from "@assets/memora-gym-leggings-cream.jpg";
import imgHighWaistedCream from "@assets/memora-high-waisted-cream.jpg";
import imgFlaredCream from "@assets/memora-flared-leggings-cream.jpg";
import imgSportsBraCream from "@assets/memora-sports-bra-cream.jpg";
import imgTankTopCream from "@assets/memora-tank-top-cream.jpg";
import imgCropTopCream from "@assets/memora-crop-top-cream.jpg";
import imgBandeauCream from "@assets/memora-bandeau-cream.jpg";
import imgLooseTshirtCream from "@assets/memora-loose-tshirt-cream.jpg";
import imgShortsCream from "@assets/memora-athletic-shorts-cream.jpg";
import imgHotPantsCream from "@assets/memora-hot-pants-cream.jpg";
import imgHoodieCream from "@assets/memora-hoodie-cream.jpg";
import imgSweatshirtCream from "@assets/memora-sweatshirt-cream.jpg";
import imgJoggersCream from "@assets/memora-joggers-cream.jpg";

// ─── Taupe ───
import imgLeggingsTaupe from "@assets/memora-custom-leggings-taupe.jpg";
import imgGymLeggingsTaupe from "@assets/memora-gym-leggings-taupe.jpg";
import imgHighWaistedTaupe from "@assets/memora-high-waisted-taupe.jpg";
import imgFlaredTaupe from "@assets/memora-flared-leggings-taupe.jpg";
import imgSportsBraTaupe from "@assets/memora-sports-bra-taupe.jpg";
import imgTankTopTaupe from "@assets/memora-tank-top-taupe.jpg";
import imgCropTopTaupe from "@assets/memora-crop-top-taupe.jpg";
import imgBandeauTaupe from "@assets/memora-bandeau-taupe.jpg";
import imgLooseTshirtTaupe from "@assets/memora-loose-tshirt-taupe.jpg";
import imgShortsTaupe from "@assets/memora-athletic-shorts-taupe.jpg";
import imgHotPantsTaupe from "@assets/memora-hot-pants-taupe.jpg";
import imgHoodieTaupe from "@assets/memora-hoodie-taupe.jpg";
import imgSweatshirtTaupe from "@assets/memora-sweatshirt-taupe.jpg";
import imgJoggersTaupe from "@assets/memora-joggers-taupe.jpg";

// ─── Color-keyed product images ───
export const productColorImages: Record<ProductType, Record<string, string>> = {
  custom_leggings: {
    dusty_rose: imgLeggingsDustyRose,
    cream: imgLeggingsCream,
    taupe: imgLeggingsTaupe,
  },
  gym_leggings: {
    dusty_rose: imgGymLeggingsDustyRose,
    cream: imgGymLeggingsCream,
    taupe: imgGymLeggingsTaupe,
  },
  high_waisted_leggings: {
    dusty_rose: imgHighWaistedDustyRose,
    cream: imgHighWaistedCream,
    taupe: imgHighWaistedTaupe,
  },
  flared_leggings: {
    dusty_rose: imgFlaredDustyRose,
    cream: imgFlaredCream,
    taupe: imgFlaredTaupe,
  },
  sports_bra: {
    dusty_rose: imgSportsBraDustyRose,
    cream: imgSportsBraCream,
    taupe: imgSportsBraTaupe,
  },
  tank_top: {
    dusty_rose: imgTankTopDustyRose,
    cream: imgTankTopCream,
    taupe: imgTankTopTaupe,
  },
  crop_top: {
    dusty_rose: imgCropTopDustyRose,
    cream: imgCropTopCream,
    taupe: imgCropTopTaupe,
  },
  bandeau: {
    dusty_rose: imgBandeauDustyRose,
    cream: imgBandeauCream,
    taupe: imgBandeauTaupe,
  },
  loose_tshirt: {
    dusty_rose: imgLooseTshirtDustyRose,
    cream: imgLooseTshirtCream,
    taupe: imgLooseTshirtTaupe,
  },
  athletic_shorts: {
    dusty_rose: imgShortsDustyRose,
    cream: imgShortsCream,
    taupe: imgShortsTaupe,
  },
  hot_pants: {
    dusty_rose: imgHotPantsDustyRose,
    cream: imgHotPantsCream,
    taupe: imgHotPantsTaupe,
  },
  hoodie: {
    dusty_rose: imgHoodieDustyRose,
    cream: imgHoodieCream,
    taupe: imgHoodieTaupe,
  },
  sweatshirt: {
    dusty_rose: imgSweatshirtDustyRose,
    cream: imgSweatshirtCream,
    taupe: imgSweatshirtTaupe,
  },
  joggers: {
    dusty_rose: imgJoggersDustyRose,
    cream: imgJoggersCream,
    taupe: imgJoggersTaupe,
  },
};

// ─── Default (dusty_rose) for backward compatibility ───
export const productTypeImages: Record<ProductType, string> = {
  custom_leggings: imgLeggingsDustyRose,
  gym_leggings: imgGymLeggingsDustyRose,
  high_waisted_leggings: imgHighWaistedDustyRose,
  flared_leggings: imgFlaredDustyRose,
  sports_bra: imgSportsBraDustyRose,
  tank_top: imgTankTopDustyRose,
  crop_top: imgCropTopDustyRose,
  bandeau: imgBandeauDustyRose,
  loose_tshirt: imgLooseTshirtDustyRose,
  athletic_shorts: imgShortsDustyRose,
  hot_pants: imgHotPantsDustyRose,
  hoodie: imgHoodieDustyRose,
  sweatshirt: imgSweatshirtDustyRose,
  joggers: imgJoggersDustyRose,
};

// Category hero images
import catTops from "@assets/category-tops.jpg";
import catBottoms from "@assets/category-bottoms.jpg";
import catYoga from "@assets/category-yoga.jpg";
import catLounge from "@assets/category-lounge.jpg";

export const categoryImages: Record<string, string> = {
  tops: catTops,
  bottoms: catBottoms,
  activewear: catYoga,
  loungewear: catLounge,
};
