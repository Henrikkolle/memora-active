import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import {
  productTypes,
  productCategories,
  categoryProducts,
  productTypeData,
  type ProductType,
  type ProductCategory,
  sampleQuotes,
} from "@shared/schema";
import { useI18n, getProductPrice } from "@/lib/i18n";
import { productTypeImages, categoryImages } from "@/lib/product-images";
import heroLeft from "@assets/hero-left.png";
import heroRight from "@assets/hero-right.png";

// ─── Editorial quote pairs for between sections ───
const editorialQuotes = [
  { id: "q15", fallback: "Simplicity is the ultimate sophistication" },
  { id: "q28", fallback: "Breathe in. Let go." },
  { id: "q21", fallback: "Less is more" },
  { id: "q26", fallback: "Be here now" },
  { id: "q30", fallback: "The mind is everything. What you think, you become." },
];

function EditorialQuote({ quoteIndex }: { quoteIndex: number }) {
  const { tq } = useI18n();
  const eq = editorialQuotes[quoteIndex % editorialQuotes.length];
  const text = tq(eq.id) || eq.fallback;

  return (
    <section className="py-16 md:py-24 px-4 sm:px-6">
      <div className="mx-auto max-w-3xl text-center">
        <p
          className="text-lg sm:text-xl md:text-2xl font-light tracking-wide leading-relaxed italic"
          style={{ color: "#E8A0BF", fontFamily: "Georgia, 'Times New Roman', serif" }}
        >
          &ldquo;{text}&rdquo;
        </p>
      </div>
    </section>
  );
}

function ProductCard({ productType }: { productType: ProductType }) {
  const { tproduct, formatProductPrice, t } = useI18n();
  const info = productTypeData[productType];
  const img = productTypeImages[productType];

  return (
    <Link href={`/configure/${productType}`}>
      <article
        className="group cursor-pointer"
        data-testid={`product-card-${productType}`}
      >
        <div className="relative overflow-hidden bg-neutral-100 dark:bg-neutral-800" style={{ aspectRatio: "3/4" }}>
          <img
            src={img}
            alt={tproduct(productType)}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
        </div>
        <div className="pt-3 pb-1">
          <h3 className="text-sm font-semibold tracking-wide text-neutral-900 dark:text-neutral-100 group-hover:text-neutral-600 dark:group-hover:text-neutral-300 transition-colors">
            {tproduct(productType)}
          </h3>
          <p className="text-sm text-neutral-500 dark:text-neutral-400 mt-0.5">
            {formatProductPrice(productType)}
          </p>
        </div>
      </article>
    </Link>
  );
}

function CategorySection({
  category,
  products,
}: {
  category: ProductCategory;
  products: ProductType[];
}) {
  const { t } = useI18n();
  const sectionKey = `section.${category}` as const;

  return (
    <section className="py-10 md:py-14" data-testid={`section-${category}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <h2 className="text-sm md:text-base font-semibold tracking-[0.25em] uppercase text-neutral-900 dark:text-neutral-100 mb-8 md:mb-10">
          {t(sectionKey)}
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {products.map(pt => (
            <ProductCard key={pt} productType={pt} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  const { t, tq, locale } = useI18n();

  // Category order with editorial quotes between
  const sections: ProductCategory[] = ["tops", "bottoms", "activewear", "loungewear"];

  return (
    <div className="min-h-screen bg-white dark:bg-background">
      {/* Announcement bar */}
      <div className="bg-neutral-100 dark:bg-neutral-900 border-b border-neutral-200 dark:border-neutral-800">
        <div className="flex items-center justify-center h-9 overflow-hidden">
          <p className="text-[11px] font-medium tracking-[0.2em] uppercase text-neutral-600 dark:text-neutral-400 text-center">
            {t("hero.tagline")}
          </p>
        </div>
      </div>

      {/* Hero — split diptych */}
      <section className="relative w-full overflow-hidden" data-testid="hero-section">
        <div className="grid grid-cols-1 md:grid-cols-2 w-full" style={{ minHeight: "85vh" }}>
          <div className="relative overflow-hidden">
            <img
              src={heroLeft}
              alt="Memora activewear — studio"
              className="w-full h-full object-cover object-center"
              style={{ minHeight: "50vh" }}
              data-testid="hero-img-left"
            />
          </div>
          <div className="relative overflow-hidden">
            <img
              src={heroRight}
              alt="Memora activewear — lifestyle"
              className="w-full h-full object-cover object-center"
              style={{ minHeight: "50vh" }}
              data-testid="hero-img-right"
            />
          </div>
        </div>
        {/* Overlay text */}
        <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
          <p
            className="text-white text-sm md:text-base font-light tracking-[0.3em] uppercase mb-3 drop-shadow-lg"
            style={{ textShadow: "0 2px 12px rgba(0,0,0,0.4)" }}
          >
            {t("hero.sub")}
          </p>
          {/* MEM♡RA large hero text */}
          <h1
            className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-[0.12em] uppercase mb-2 text-center drop-shadow-lg flex items-center gap-1"
            style={{
              textShadow: "0 2px 20px rgba(0,0,0,0.5)",
              fontFamily: "var(--font-display, 'General Sans', sans-serif)",
            }}
            data-testid="hero-heading"
          >
            <span>MEM</span>
            <svg viewBox="0 0 40 36" fill="none" className="h-[0.7em] w-auto inline-block -mt-1" aria-hidden="true">
              <path
                d="M20 6c-3.5-4.2-9-4.8-12.5-2C3.6 7 3.3 12 6.4 16L20 33l13.6-17C36.7 12 36.4 7 32.5 4c-3.5-2.8-9-2.2-12.5 2z"
                fill="#E8A0BF"
              />
            </svg>
            <span>RA</span>
          </h1>
          <p
            className="text-white/80 text-xs md:text-sm font-light tracking-[0.15em] mb-8 text-center max-w-md px-4"
            style={{ textShadow: "0 1px 8px rgba(0,0,0,0.3)" }}
          >
            {t("hero.tagline")}
          </p>
          <button
            className="pointer-events-auto border-2 border-white text-white px-10 py-3.5 text-xs font-semibold tracking-[0.25em] uppercase hover:bg-white hover:text-neutral-900 transition-all duration-300"
            onClick={() => document.getElementById("catalog")?.scrollIntoView({ behavior: "smooth" })}
            data-testid="hero-cta"
          >
            {t("hero.cta")}
          </button>
        </div>
      </section>

      {/* Shop by Category — visual grid */}
      <section className="py-14 md:py-20" data-testid="category-section">
        <div className="grid grid-cols-2 gap-[2px]">
          {sections.map(cat => (
            <button
              key={cat}
              onClick={() => document.getElementById(`section-${cat}`)?.scrollIntoView({ behavior: "smooth" })}
              className="group relative overflow-hidden cursor-pointer"
              style={{ aspectRatio: "4/5" }}
              data-testid={`category-${cat}`}
            >
              <img
                src={categoryImages[cat]}
                alt={t(`section.${cat}`)}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors duration-500" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span
                  className="text-white text-sm md:text-lg lg:text-xl font-semibold tracking-[0.25em] uppercase"
                  style={{ textShadow: "0 1px 10px rgba(0,0,0,0.5)" }}
                >
                  {t(`section.${cat}`)}
                </span>
              </div>
            </button>
          ))}
        </div>
      </section>

      {/* Product catalog with editorial quotes between sections */}
      <div id="catalog">
        {sections.map((cat, index) => (
          <div key={cat} id={`section-${cat}`}>
            {index > 0 && <EditorialQuote quoteIndex={index - 1} />}
            <CategorySection
              category={cat}
              products={categoryProducts[cat]}
            />
          </div>
        ))}
      </div>

      {/* Final editorial quote */}
      <EditorialQuote quoteIndex={3} />

      {/* Info section — brand pillars */}
      <section className="border-t border-neutral-200 dark:border-neutral-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-14 md:py-20">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 sm:gap-8">
            <div className="text-center">
              <h3 className="text-[11px] font-semibold tracking-[0.25em] uppercase text-neutral-900 dark:text-neutral-100 mb-3">
                {t("info.produced")}
              </h3>
              <p className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed max-w-xs mx-auto">
                {t("info.produced_desc")}
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-[11px] font-semibold tracking-[0.25em] uppercase text-neutral-900 dark:text-neutral-100 mb-3">
                {t("info.quality")}
              </h3>
              <p className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed max-w-xs mx-auto">
                {t("info.quality_desc")}
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-[11px] font-semibold tracking-[0.25em] uppercase text-neutral-900 dark:text-neutral-100 mb-3">
                {t("info.sustainable")}
              </h3>
              <p className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed max-w-xs mx-auto">
                {t("info.sustainable_desc")}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
