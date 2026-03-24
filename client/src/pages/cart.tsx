import { Link } from "wouter";
import { ShoppingBag, Minus, Plus, X, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/lib/cart-context";
import { useI18n } from "@/lib/i18n";
import { productTypeImages } from "@/lib/product-images";
import { productColors } from "@shared/schema";

export default function Cart() {
  const { items, removeItem, updateQuantity, totalPrice, totalItems } = useCart();
  const { t, tproduct, locale } = useI18n();

  // Shipping: €14.95, free over €100
  const shippingCost = totalPrice >= 100 ? 0 : 14.95;
  const grandTotal = totalPrice + shippingCost;

  if (items.length === 0) {
    return (
      <div className="mx-auto max-w-4xl px-4 py-16 text-center">
        <ShoppingBag className="h-12 w-12 text-neutral-300 dark:text-neutral-600 mx-auto mb-4" />
        <h1 className="text-xl font-bold mb-2">{t("cart.empty")}</h1>
        <p className="text-sm text-muted-foreground mb-6">{t("cart.empty_desc")}</p>
        <Link href="/">
          <Button variant="outline">{t("cart.continue")}</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-4xl px-4 sm:px-6 py-8 sm:py-12">
      <Link href="/">
        <button className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors mb-6" data-testid="back-link">
          <ArrowLeft className="h-3.5 w-3.5" />
          {t("footer.back")}
        </button>
      </Link>

      <h1 className="text-xl font-bold mb-8" data-testid="cart-heading">
        {t("cart.heading")} ({totalItems} {totalItems === 1 ? t("nav.item") : t("nav.items")})
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Cart items */}
        <div className="lg:col-span-2 space-y-4">
          {items.map(item => (
            <div
              key={item.id}
              className="flex gap-4 p-4 bg-card rounded-lg border border-border/60"
              data-testid={`cart-item-${item.id}`}
            >
              <div className="w-20 h-20 rounded overflow-hidden bg-neutral-100 dark:bg-neutral-800 shrink-0">
                <img
                  src={productTypeImages[item.productType]}
                  alt={item.productTypeName}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-sm font-semibold truncate">{item.productTypeName}</h3>
                <p className="text-xs text-muted-foreground mt-0.5 flex items-center gap-2">
                  <span>{t("product.size")}: {item.sizeName}</span>
                  <span className="text-neutral-300 dark:text-neutral-600">|</span>
                  <span className="flex items-center gap-1">
                    <span
                      className="inline-block w-3 h-3 rounded-full ring-1 ring-border"
                      style={{ backgroundColor: productColors.find(c => c.id === item.colorId)?.hex || "#ccc" }}
                    />
                    {item.colorName}
                  </span>
                </p>
                <p className="text-sm font-bold mt-1">€{item.price * item.quantity}</p>
                <div className="flex items-center gap-2 mt-2">
                  <Button
                    variant="outline"
                    size="icon"
                    className="h-7 w-7"
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                  >
                    <Minus className="h-3 w-3" />
                  </Button>
                  <span className="text-xs font-semibold w-6 text-center">{item.quantity}</span>
                  <Button
                    variant="outline"
                    size="icon"
                    className="h-7 w-7"
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  >
                    <Plus className="h-3 w-3" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-7 w-7 ml-auto text-muted-foreground hover:text-destructive"
                    onClick={() => removeItem(item.id)}
                  >
                    <X className="h-3.5 w-3.5" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Order summary */}
        <div className="bg-card rounded-lg border border-border/60 p-6 h-fit" data-testid="order-summary">
          <h2 className="text-sm font-semibold mb-4">{t("cart.summary")}</h2>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-muted-foreground">{t("cart.subtotal")}</span>
              <span className="font-medium">€{totalPrice}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">{t("cart.shipping")}</span>
              <span className="font-medium">
                {shippingCost === 0 ? (
                  <span className="text-green-600 dark:text-green-400">Free</span>
                ) : (
                  `€${shippingCost.toFixed(2)}`
                )}
              </span>
            </div>
            <div className="border-t border-border/60 pt-2 mt-2">
              <div className="flex justify-between text-base font-bold">
                <span>{t("cart.total")}</span>
                <span>€{grandTotal.toFixed(2)}</span>
              </div>
            </div>
          </div>
          <Link href="/checkout">
            <Button className="w-full mt-4 font-semibold" data-testid="checkout-button">
              {t("cart.checkout")}
            </Button>
          </Link>
          <p className="text-[10px] text-muted-foreground/60 text-center mt-3">
            {t("cart.contrado_note")}
          </p>
        </div>
      </div>
    </div>
  );
}
