import type { ProductType } from "@shared/schema";

import imgLeggings from "@assets/memora-custom-leggings.png";
import imgGymLeggings from "@assets/memora-gym-leggings.png";
import imgHighWaisted from "@assets/memora-high-waisted.png";
import imgFlared from "@assets/memora-flared-leggings.png";
import imgSportsBra from "@assets/memora-sports-bra.png";
import imgTankTop from "@assets/memora-tank-top.png";
import imgCropTop from "@assets/memora-crop-top.png";
import imgBandeau from "@assets/memora-bandeau.png";
import imgLooseTshirt from "@assets/memora-loose-tshirt.png";
import imgShorts from "@assets/memora-athletic-shorts.png";
import imgHotPants from "@assets/memora-hot-pants.png";
import imgHoodie from "@assets/memora-hoodie.png";
import imgSweatshirt from "@assets/memora-sweatshirt.png";
import imgJoggers from "@assets/memora-joggers.png";

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
import catTops from "@assets/category-tops.png";
import catBottoms from "@assets/category-bottoms.png";
import catYoga from "@assets/category-yoga.png";
import catLounge from "@assets/category-lounge.png";

export const categoryImages: Record<string, string> = {
  tops: catTops,
  bottoms: catBottoms,
  activewear: catYoga,
  loungewear: catLounge,
};
