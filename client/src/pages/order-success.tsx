import { useEffect, useState } from "react";
import { Link } from "wouter";
import { Check, Package, Truck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/lib/cart-context";
import { useI18n } from "@/lib/i18n";

interface OrderDetails {
  id: string;
  payment_status: string;
  amount_total: number;
  currency: string;
  customer_email: string;
  customer_name: string;
  line_items: any[];
}

export default function OrderSuccess() {
  const { clearCart } = useCart();
  const { t } = useI18n();
  const [order, setOrder] = useState<OrderDetails | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Clear the cart on successful payment
    clearCart();

    // Get session_id from URL
    const params = new URLSearchParams(window.location.search);
    const sessionId = params.get("session_id");

    if (sessionId) {
      fetch(`/api/order/${sessionId}`)
        .then(res => res.json())
        .then(data => {
          setOrder(data);
          setLoading(false);
        })
        .catch(() => setLoading(false));
    } else {
      setLoading(false);
    }
  }, []);

  return (
    <div className="mx-auto max-w-xl px-4 py-16 text-center">
      <div className="w-20 h-20 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mx-auto mb-6">
        <Check className="h-10 w-10 text-green-600 dark:text-green-400" />
      </div>

      <h1 className="text-2xl font-bold mb-2">{t("order.success")}</h1>
      <p className="text-sm text-muted-foreground mb-8">{t("order.success_desc")}</p>

      {order && (
        <div className="bg-card rounded-lg border border-border/60 p-6 text-left mb-8">
          <h2 className="text-sm font-semibold mb-4 flex items-center gap-2">
            <Package className="h-4 w-4" />
            {t("order.details")}
          </h2>

          {order.customer_name && (
            <p className="text-sm text-muted-foreground mb-1">
              {order.customer_name}
            </p>
          )}
          {order.customer_email && (
            <p className="text-sm text-muted-foreground mb-3">
              {order.customer_email}
            </p>
          )}

          {order.line_items && order.line_items.length > 0 && (
            <div className="space-y-2 border-t border-border/60 pt-3">
              {order.line_items.map((item: any, idx: number) => (
                <div key={idx} className="flex justify-between text-sm">
                  <span className="text-muted-foreground">
                    {item.description} x{item.quantity}
                  </span>
                  <span className="font-medium">
                    €{((item.amount_total || 0) / 100).toFixed(2)}
                  </span>
                </div>
              ))}
            </div>
          )}

          {order.amount_total && (
            <div className="border-t border-border/60 mt-3 pt-3">
              <div className="flex justify-between font-bold">
                <span>{t("cart.total")}</span>
                <span>€{(order.amount_total / 100).toFixed(2)}</span>
              </div>
            </div>
          )}

          <div className="flex items-center gap-2 text-xs text-muted-foreground mt-4 pt-3 border-t border-border/60">
            <Truck className="h-3.5 w-3.5" />
            <span>{t("product.shipping")}</span>
          </div>
        </div>
      )}

      {loading && (
        <div className="flex justify-center py-4">
          <span className="h-6 w-6 border-2 border-muted-foreground/30 border-t-muted-foreground rounded-full animate-spin" />
        </div>
      )}

      <Link href="/">
        <Button size="lg" className="font-semibold">
          {t("order.back")}
        </Button>
      </Link>
    </div>
  );
}
