import { useState } from "react";
import { useRoute, useLocation, Link } from "wouter";
import { ArrowLeft, ShoppingBag, Check, Minus, Plus, Truck, Leaf, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/lib/cart-context";
import { useToast } from "@/hooks/use-toast";
import {
  type ProductType,
  productTypes,
  productTypeData,
  productSizes,
  productColors,
} from "@shared/schema";
import { useI18n, getProductPrice } from "@/lib/i18n";
import { productTypeImages } from "@/lib/product-images";

export default function Configure() {
  const [, params] = useRoute("/configure/:productType");
  const [, navigate] = useLocation();
  const initialProductType = (params?.productType as ProductType) || "custom_leggings";

  const info = productTypeData[initialProductType];
  if (!info) {
    return (
      <div className="mx-auto max-w-6xl px-4 py-16 text-center">
        <p className="text-muted-foreground mb-4">Product not found</p>
        <Link href="/">
          <Button variant="ghost"><ArrowLeft className="h-4 w-4 mr-1.5" /> Back</Button>
        </Link>
      </div>
    );
  }

  const [selectedSize, setSelectedSize] = useState(
    productSizes[initialProductType].find(s => s.id === "m")?.id || productSizes[initialProductType][0].id
  );
  const [selectedColor, setSelectedColor] = useState(productColors[0].id);
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  const { addItem } = useCart();
  const { toast } = useToast();
  const { t, tproduct, tcolor, formatProductPrice, locale } = useI18n();

  const sizes = productSizes[initialProductType];
  const size = sizes.find(s => s.id === selectedSize) || sizes[0];
  const color = productColors.find(c => c.id === selectedColor) || productColors[0];
  const { price, formatted: formattedPrice } = getProductPrice(initialProductType);
  const img = productTypeImages[initialProductType];

  const handleAddToCart = () => {
    addItem({
      productType: initialProductType,
      productTypeName: tproduct(initialProductType),
      sizeId: selectedSize,
      sizeName: size.name,
      colorId: selectedColor,
      colorName: tcolor(selectedColor),
      quantity,
      price,
    });
    setAdded(true);
    toast({
      title: t("product.added"),
      description: `${tproduct(initialProductType)} — ${size.name} — ${tcolor(selectedColor)}`,
    });
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6 py-8 sm:py-12">
      {/* Back link */}
      <Link href="/">
        <button className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors mb-6" data-testid="back-link">
          <ArrowLeft className="h-3.5 w-3.5" />
          {t("footer.back")}
        </button>
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
        {/* Product image */}
        <div className="w-full">
          <div className="relative overflow-hidden bg-neutral-100 dark:bg-neutral-800 rounded-lg" style={{ aspectRatio: "3/4" }}>
            <img
              src={img}
              alt={tproduct(initialProductType)}
              className="w-full h-full object-cover"
              data-testid="configure-product-img"
            />
          </div>
        </div>

        {/* Configuration panel */}
        <div className="flex flex-col gap-6">
          <div>
            <p className="text-[10px] font-semibold tracking-[0.2em] uppercase text-neutral-400 dark:text-neutral-500 mb-2">
              {t(`section.${info.category}`)}
            </p>
            <h1 className="text-xl font-bold tracking-tight mb-1" data-testid="product-heading">
              {tproduct(initialProductType)}
            </h1>
            <p className="text-lg font-bold" data-testid="price-display">{formattedPrice}</p>
            <p className="text-sm text-muted-foreground mt-2">{info.description}</p>
          </div>

          {/* Color selector */}
          <div>
            <p className="text-sm font-semibold mb-3">{t("product.color")} — {tcolor(selectedColor)}</p>
            <div className="flex flex-wrap gap-2.5">
              {productColors.map(c => (
                <button
                  key={c.id}
                  onClick={() => setSelectedColor(c.id)}
                  className={`relative w-10 h-10 rounded-full transition-all ${
                    selectedColor === c.id
                      ? "ring-2 ring-foreground ring-offset-2 ring-offset-background"
                      : "ring-1 ring-border hover:ring-foreground/40"
                  }`}
                  style={{ backgroundColor: c.hex }}
                  title={tcolor(c.id)}
                  data-testid={`color-${c.id}`}
                >
                  {selectedColor === c.id && (
                    <Check className="h-4 w-4 absolute inset-0 m-auto text-foreground mix-blend-difference" />
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Size selector */}
          <div>
            <p className="text-sm font-semibold mb-3">{t("product.size")} — {size.name}</p>
            <div className="flex flex-wrap gap-2">
              {sizes.map(s => (
                <button
                  key={s.id}
                  onClick={() => setSelectedSize(s.id)}
                  className={`px-4 py-2 text-sm font-medium rounded-lg transition-all min-w-[48px] ${
                    selectedSize === s.id
                      ? "bg-foreground text-background"
                      : "bg-secondary text-secondary-foreground hover:bg-accent"
                  }`}
                  data-testid={`size-${s.id}`}
                >
                  {s.name}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity */}
          <div>
            <p className="text-sm font-semibold mb-3">{t("product.quantity")}</p>
            <div className="flex items-center gap-3">
              <Button
                variant="outline"
                size="icon"
                className="h-9 w-9"
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                disabled={quantity <= 1}
                data-testid="qty-minus"
              >
                <Minus className="h-3.5 w-3.5" />
              </Button>
              <span className="w-8 text-center text-sm font-semibold" data-testid="qty-display">{quantity}</span>
              <Button
                variant="outline"
                size="icon"
                className="h-9 w-9"
                onClick={() => setQuantity(quantity + 1)}
                data-testid="qty-plus"
              >
                <Plus className="h-3.5 w-3.5" />
              </Button>
            </div>
          </div>

          {/* Add to cart */}
          <div className="flex flex-col gap-3 pt-2">
            <Button
              size="lg"
              className="font-semibold w-full sm:w-auto"
              onClick={handleAddToCart}
              data-testid="add-to-cart"
            >
              {added ? (
                <>
                  <Check className="h-4 w-4 mr-1.5" />
                  {t("product.added")}
                </>
              ) : (
                <>
                  <ShoppingBag className="h-4 w-4 mr-1.5" />
                  {t("product.add_to_cart")} — €{price * quantity}
                </>
              )}
            </Button>
            <Link href="/cart">
              <Button variant="ghost" className="w-full sm:w-auto text-sm">
                {t("product.go_to_cart")}
              </Button>
            </Link>
          </div>

          {/* Product details */}
          <div className="border-t border-border/60 pt-6 mt-2 space-y-4">
            <h3 className="text-sm font-semibold">{t("product.details")}</h3>
            <div className="space-y-3 text-sm text-muted-foreground">
              <div className="flex items-start gap-3">
                <span className="text-foreground mt-0.5">●</span>
                <span>{t("product.material")}: {info.material}</span>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="h-4 w-4 mt-0.5 shrink-0 text-foreground" />
                <span>{t("product.made_in")}</span>
              </div>
              <div className="flex items-start gap-3">
                <Truck className="h-4 w-4 mt-0.5 shrink-0 text-foreground" />
                <span>{t("product.shipping")}</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-foreground mt-0.5">📦</span>
                <span>{t("product.free_shipping")}</span>
              </div>
              <div className="flex items-start gap-3">
                <Leaf className="h-4 w-4 mt-0.5 shrink-0 text-foreground" />
                <span>{t("product.eco")}</span>
              </div>
            </div>
            <p className="text-xs text-muted-foreground/60 mt-4">
              {t("product.size")}: {info.sizes}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
