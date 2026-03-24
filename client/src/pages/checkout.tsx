import { useState } from "react";
import { Link } from "wouter";
import { ArrowLeft, CreditCard, Lock, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/lib/cart-context";
import { useI18n } from "@/lib/i18n";
import { productTypeImages } from "@/lib/product-images";
import { productColors } from "@shared/schema";

export default function Checkout() {
  const { items, totalPrice } = useCart();
  const { t, locale } = useI18n();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const shippingCost = totalPrice >= 100 ? 0 : 14.95;
  const grandTotal = totalPrice + shippingCost;

  if (items.length === 0) {
    return (
      <div className="mx-auto max-w-4xl px-4 py-16 text-center">
        <p className="text-muted-foreground mb-4">{t("cart.empty")}</p>
        <Link href="/">
          <Button variant="outline">{t("cart.continue")}</Button>
        </Link>
      </div>
    );
  }

  const handleStripeCheckout = async () => {
    setLoading(true);
    setError("");

    try {
      const response = await fetch("/api/create-checkout-session", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          items: items.map(item => ({
            productType: item.productType,
            productTypeName: item.productTypeName,
            sizeId: item.sizeId,
            sizeName: item.sizeName,
            colorId: item.colorId,
            colorName: item.colorName,
            quantity: item.quantity,
            price: item.price,
          })),
          locale,
        }),
      });

      const data = await response.json();

      if (data.url) {
        // Redirect to Stripe Checkout
        window.location.href = data.url;
      } else {
        setError(data.error || "Something went wrong");
        setLoading(false);
      }
    } catch (err) {
      setError("Could not connect to payment service");
      setLoading(false);
    }
  };

  return (
    <div className="mx-auto max-w-4xl px-4 sm:px-6 py-8 sm:py-12">
      <Link href="/cart">
        <button className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors mb-6">
          <ArrowLeft className="h-3.5 w-3.5" />
          {t("cart.heading")}
        </button>
      </Link>

      <h1 className="text-xl font-bold mb-8">{t("checkout.heading")}</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main checkout area */}
        <div className="lg:col-span-2 space-y-6">
          {/* Order items */}
          <div className="space-y-3">
            {items.map(item => (
              <div
                key={item.id}
                className="flex gap-3 p-3 bg-card rounded-lg border border-border/60"
              >
                <div className="w-14 h-14 rounded overflow-hidden bg-neutral-100 dark:bg-neutral-800 shrink-0">
                  <img
                    src={productTypeImages[item.productType]}
                    alt={item.productTypeName}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-sm font-semibold truncate">{item.productTypeName}</h3>
                  <p className="text-xs text-muted-foreground flex items-center gap-1.5">
                    {item.sizeName}
                    <span className="text-neutral-300 dark:text-neutral-600">·</span>
                    <span
                      className="inline-block w-2.5 h-2.5 rounded-full ring-1 ring-border"
                      style={{ backgroundColor: productColors.find(c => c.id === item.colorId)?.hex || "#ccc" }}
                    />
                    {item.colorName}
                    <span className="text-neutral-300 dark:text-neutral-600">·</span>
                    x{item.quantity}
                  </p>
                </div>
                <p className="text-sm font-semibold whitespace-nowrap">€{item.price * item.quantity}</p>
              </div>
            ))}
          </div>

          {/* Security badges */}
          <div className="flex flex-wrap gap-4 text-xs text-muted-foreground pt-2">
            <span className="flex items-center gap-1.5">
              <Lock className="h-3.5 w-3.5" />
              {t("checkout.secure")}
            </span>
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="h-3.5 w-3.5" />
              {t("checkout.stripe_powered")}
            </span>
          </div>

          {error && (
            <div className="p-3 rounded-lg bg-red-50 dark:bg-red-900/20 text-sm text-red-700 dark:text-red-300">
              {error}
            </div>
          )}

          {/* Pay button */}
          <Button
            size="lg"
            className="w-full font-semibold text-base"
            onClick={handleStripeCheckout}
            disabled={loading}
            data-testid="stripe-checkout-btn"
          >
            {loading ? (
              <span className="flex items-center gap-2">
                <span className="h-4 w-4 border-2 border-background/30 border-t-background rounded-full animate-spin" />
                {t("checkout.processing")}
              </span>
            ) : (
              <span className="flex items-center gap-2">
                <CreditCard className="h-4 w-4" />
                {t("checkout.pay_now")} — €{grandTotal.toFixed(2)}
              </span>
            )}
          </Button>
        </div>

        {/* Order summary sidebar */}
        <div className="bg-card rounded-lg border border-border/60 p-6 h-fit">
          <h2 className="text-sm font-semibold mb-4">{t("checkout.your_order")}</h2>
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
          <p className="text-[10px] text-muted-foreground/60 text-center mt-4">
            {t("cart.contrado_note")}
          </p>
        </div>
      </div>
    </div>
  );
}
