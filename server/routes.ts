import type { Express } from "express";
import type { Server } from "http";
import { sampleQuotes, productTypeData, productTypes } from "../shared/schema";
import Stripe from "stripe";
import https from "https";

// Force IPv4 to avoid Railway IPv6 connectivity issues with Stripe
const httpAgent = new https.Agent({
  family: 4,
  keepAlive: true,
});

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || "", {
  httpAgent,
  timeout: 30000,
  maxNetworkRetries: 2,
});

export async function registerRoutes(server: Server, app: Express) {
  // Get all editorial quotes
  app.get("/api/quotes", (_req, res) => {
    res.json(sampleQuotes);
  });

  // Get all products
  app.get("/api/products", (_req, res) => {
    const products = productTypes.map(pt => productTypeData[pt]);
    res.json(products);
  });

  // Get single product
  app.get("/api/products/:id", (req, res) => {
    const product = productTypeData[req.params.id as keyof typeof productTypeData];
    if (!product) {
      return res.status(404).json({ error: "Product not found" });
    }
    res.json(product);
  });

  // Create Stripe Checkout Session
  app.post("/api/create-checkout-session", async (req, res) => {
    try {
      const { items, locale } = req.body;

      if (!items || !Array.isArray(items) || items.length === 0) {
        return res.status(400).json({ error: "No items provided" });
      }

      // Build line items for Stripe
      const lineItems: Stripe.Checkout.SessionCreateParams.LineItem[] = items.map((item: any) => ({
        price_data: {
          currency: "eur",
          product_data: {
            name: item.productTypeName,
            description: `${item.sizeName} · ${item.colorName}`,
          },
          unit_amount: Math.round(item.price * 100), // Stripe uses cents
        },
        quantity: item.quantity,
      }));

      // Calculate if free shipping applies (over €100)
      const subtotal = items.reduce((sum: number, item: any) => sum + item.price * item.quantity, 0);
      const shippingCost = subtotal >= 100 ? 0 : 1495; // €14.95 in cents

      // Determine origin URL for redirects
      const origin = req.headers.origin || req.headers.referer?.replace(/\/$/, "") || "https://memora-active.com";

      const sessionParams: Stripe.Checkout.SessionCreateParams = {
        payment_method_types: ["card"],
        mode: "payment",
        line_items: lineItems,
        shipping_address_collection: {
          // European-only shipping. We do not ship outside Europe.
          allowed_countries: [
            // Nordic
            "DK", "SE", "NO", "FI", "IS",
            // Western Europe
            "GB", "IE", "DE", "NL", "BE", "LU", "FR", "AT", "CH",
            // Southern Europe
            "ES", "PT", "IT", "GR", "MT", "CY",
            // Central / Eastern Europe (EU)
            "PL", "CZ", "SK", "HU", "SI", "HR", "RO", "BG",
            "EE", "LV", "LT",
          ],
        },
        shipping_options: [
          ...(shippingCost > 0
            ? [{
                shipping_rate_data: {
                  type: "fixed_amount" as const,
                  fixed_amount: { amount: shippingCost, currency: "eur" },
                  display_name: "Standard Shipping (FedEx/DHL)",
                  delivery_estimate: {
                    minimum: { unit: "business_day" as const, value: 3 },
                    maximum: { unit: "business_day" as const, value: 5 },
                  },
                },
              }]
            : [{
                shipping_rate_data: {
                  type: "fixed_amount" as const,
                  fixed_amount: { amount: 0, currency: "eur" },
                  display_name: "Free Shipping (FedEx/DHL)",
                  delivery_estimate: {
                    minimum: { unit: "business_day" as const, value: 3 },
                    maximum: { unit: "business_day" as const, value: 5 },
                  },
                },
              }]),
        ],
        success_url: `${origin}/order-success?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${origin}/cart`,
        locale: (locale === "da" ? "da" : locale === "sv" ? "sv" : locale === "no" ? "nb" : locale === "de" ? "de" : locale === "nl" ? "nl" : locale === "fr" ? "fr" : locale === "es" ? "es" : "en") as Stripe.Checkout.SessionCreateParams.Locale,
        metadata: {
          source: "memora-webshop",
        },
      };

      const session = await stripe.checkout.sessions.create(sessionParams);
      res.json({ url: session.url });
    } catch (error: any) {
      console.error("Stripe error creating session:", error.message, error.type, error.code);
      res.status(500).json({ error: error.message || "Could not create checkout session" });
    }
  });

  // Retrieve order details after successful payment
  app.get("/api/order/:sessionId", async (req, res) => {
    try {
      const session = await stripe.checkout.sessions.retrieve(req.params.sessionId, {
        expand: ["line_items", "shipping_details"],
      });
      res.json({
        id: session.id,
        payment_status: session.payment_status,
        amount_total: session.amount_total,
        currency: session.currency,
        customer_email: session.customer_details?.email,
        customer_name: session.customer_details?.name,
        shipping: session.shipping_details,
        line_items: session.line_items?.data,
      });
    } catch (error: any) {
      console.error("Stripe error:", error.message);
      res.status(500).json({ error: "Could not retrieve order" });
    }
  });
}
