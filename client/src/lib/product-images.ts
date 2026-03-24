import type { ProductType } from "@shared/schema";

import imgLeggings from "@assets/memora-custom-leggings.jpg";
import imgGymLeggings from "@assets/memora-gym-leggings.jpg";
import imgHighWaisted from "@assets/memora-high-waisted.jpg";
import imgFlared from "@assets/memora-flared-leggings.jpg";
import imgSportsBra from "@assets/memora-sports-bra.jpg";
import imgTankTop from "@assets/memora-tank-top.jpg";
import imgCropTop from "@assets/memora-crop-top.jpg";
import imgBandeau from "@assets/memora-bandeau.jpg";
import imgLooseTshirt from "@assets/memora-loose-tshirt.jpg";
import imgShorts from "@assets/memora-athletic-shorts.jpg";
import imgHotPants from "@assets/memora-hot-pants.jpg";
import imgHoodie from "@assets/memora-hoodie.jpg";
import imgSweatshirt from "@assets/memora-sweatshirt.jpg";
import imgJoggers from "@assets/memora-joggers.jpg";

export const productTypeImages: Record<ProductType, string> = {
  custom_leggings: imgLeggings,
  gym_leggings: imgGymLeggings,
  high_waisted_leggings: imgHighWaisted,
  flared_leggings: imgFlared,
  sports_bra: imgSportsBra,
  tank_top: imgTankTop,
  crop_top: imgCropTop,
  bandeau: imgBandeau,
  loose_tshirt: imgLooseTshirt,
  athletic_shorts: imgShorts,
  hot_pants: imgHotPants,
  hoodie: imgHoodie,
  sweatshirt: imgSweatshirt,
  joggers: imgJoggers,
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
