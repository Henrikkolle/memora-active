import { createContext, useContext, useState, useCallback, type ReactNode } from "react";
import { type ProductType, productTypeData, type ProductColor } from "@shared/schema";

export type Locale = "da" | "sv" | "no" | "en" | "de" | "nl" | "fr" | "es";

export interface LocaleInfo {
  code: Locale;
  name: string;
  flag: string;
  currency: string;
  currencySymbol: string;
}

export const locales: LocaleInfo[] = [
  { code: "da", name: "Dansk", flag: "🇩🇰", currency: "EUR", currencySymbol: "€" },
  { code: "sv", name: "Svenska", flag: "🇸🇪", currency: "EUR", currencySymbol: "€" },
  { code: "no", name: "Norsk", flag: "🇳🇴", currency: "EUR", currencySymbol: "€" },
  { code: "en", name: "English", flag: "🇬🇧", currency: "EUR", currencySymbol: "€" },
  { code: "de", name: "Deutsch", flag: "🇩🇪", currency: "EUR", currencySymbol: "€" },
  { code: "nl", name: "Nederlands", flag: "🇳🇱", currency: "EUR", currencySymbol: "€" },
  { code: "fr", name: "Français", flag: "🇫🇷", currency: "EUR", currencySymbol: "€" },
  { code: "es", name: "Español", flag: "🇪🇸", currency: "EUR", currencySymbol: "€" },
];

// All prices are EUR — single currency across all markets
export function getProductPrice(productType: ProductType): { price: number; formatted: string } {
  const p = productTypeData[productType].priceEUR;
  return { price: p, formatted: `€${p}` };
}

// ─── UI Translations ───
type Translations = Record<string, Record<Locale, string>>;

const ui: Translations = {
  "hero.sub": {
    da: "PREMIUM ACTIVEWEAR",
    sv: "PREMIUM ACTIVEWEAR",
    no: "PREMIUM ACTIVEWEAR",
    en: "PREMIUM ACTIVEWEAR",
    de: "PREMIUM ACTIVEWEAR",
    nl: "PREMIUM ACTIVEWEAR",
    fr: "ACTIVEWEAR PREMIUM",
    es: "ACTIVEWEAR PREMIUM",
  },
  "hero.main": {
    da: "MEMORA",
    sv: "MEMORA",
    no: "MEMORA",
    en: "MEMORA",
    de: "MEMORA",
    nl: "MEMORA",
    fr: "MEMORA",
    es: "MEMORA",
  },
  "hero.cta": {
    da: "SHOP KOLLEKTIONEN",
    sv: "SHOPPA KOLLEKTIONEN",
    no: "SHOP KOLLEKSJONEN",
    en: "SHOP THE COLLECTION",
    de: "KOLLEKTION ENTDECKEN",
    nl: "ONTDEK DE COLLECTIE",
    fr: "DÉCOUVRIR LA COLLECTION",
    es: "VER COLECCIÓN",
  },
  "hero.tagline": {
    da: "Produceret i London · Bæredygtig kvalitet · Fri fragt over €100",
    sv: "Producerat i London · Hållbar kvalitet · Fri frakt över €100",
    no: "Produsert i London · Bærekraftig kvalitet · Fri frakt over €100",
    en: "Produced in London · Sustainable quality · Free shipping over €100",
    de: "Hergestellt in London · Nachhaltige Qualität · Kostenloser Versand ab €100",
    nl: "Geproduceerd in Londen · Duurzame kwaliteit · Gratis verzending boven €100",
    fr: "Fabriqué à Londres · Qualité durable · Livraison gratuite dès €100",
    es: "Producido en Londres · Calidad sostenible · Envío gratis en pedidos de más de €100",
  },
  "section.tops": {
    da: "TOPPE & BRAS", sv: "TOPPAR & BRAS", no: "TOPPER & BRAS", en: "TOPS & BRAS",
    de: "TOPS & BRAS", nl: "TOPS & BRA'S", fr: "HAUTS & BRASSIÈRES", es: "TOPS & SUJETADORES",
  },
  "section.bottoms": {
    da: "LEGGINGS & SHORTS", sv: "LEGGINGS & SHORTS", no: "LEGGINGS & SHORTS", en: "LEGGINGS & SHORTS",
    de: "LEGGINGS & SHORTS", nl: "LEGGINGS & SHORTS", fr: "LEGGINGS & SHORTS", es: "LEGGINGS & SHORTS",
  },
  "section.activewear": {
    da: "ACTIVEWEAR", sv: "ACTIVEWEAR", no: "ACTIVEWEAR", en: "ACTIVEWEAR",
    de: "ACTIVEWEAR", nl: "ACTIVEWEAR", fr: "ACTIVEWEAR", es: "ACTIVEWEAR",
  },
  "section.loungewear": {
    da: "LOUNGEWEAR", sv: "LOUNGEWEAR", no: "LOUNGEWEAR", en: "LOUNGEWEAR",
    de: "LOUNGEWEAR", nl: "LOUNGEWEAR", fr: "DÉTENTE", es: "LOUNGEWEAR",
  },
  "product.size": {
    da: "Størrelse", sv: "Storlek", no: "Størrelse", en: "Size",
    de: "Größe", nl: "Maat", fr: "Taille", es: "Talla",
  },
  "product.color": {
    da: "Farve", sv: "Färg", no: "Farge", en: "Color",
    de: "Farbe", nl: "Kleur", fr: "Couleur", es: "Color",
  },
  "product.quantity": {
    da: "Antal", sv: "Antal", no: "Antall", en: "Quantity",
    de: "Anzahl", nl: "Aantal", fr: "Quantité", es: "Cantidad",
  },
  "product.add_to_cart": {
    da: "Læg i kurv", sv: "Lägg i varukorg", no: "Legg i handlekurv", en: "Add to cart",
    de: "In den Warenkorb", nl: "In winkelwagen", fr: "Ajouter au panier", es: "Añadir al carrito",
  },
  "product.go_to_cart": {
    da: "Gå til kurv", sv: "Gå till varukorg", no: "Gå til handlekurv", en: "Go to cart",
    de: "Zum Warenkorb", nl: "Naar winkelwagen", fr: "Aller au panier", es: "Ir al carrito",
  },
  "product.added": {
    da: "Tilføjet", sv: "Tillagd", no: "Lagt til", en: "Added",
    de: "Hinzugefügt", nl: "Toegevoegd", fr: "Ajouté", es: "Añadido",
  },
  "product.details": {
    da: "Produktdetaljer", sv: "Produktdetaljer", no: "Produktdetaljer", en: "Product details",
    de: "Produktdetails", nl: "Productdetails", fr: "Détails du produit", es: "Detalles del producto",
  },
  "product.material": {
    da: "Materiale", sv: "Material", no: "Materiale", en: "Material",
    de: "Material", nl: "Materiaal", fr: "Matière", es: "Material",
  },
  "product.made_in": {
    da: "Produceret i London, UK", sv: "Producerat i London, UK", no: "Produsert i London, UK", en: "Produced in London, UK",
    de: "Hergestellt in London, UK", nl: "Geproduceerd in Londen, UK", fr: "Fabriqué à Londres, UK", es: "Producido en Londres, UK",
  },
  "product.shipping": {
    da: "Levering 3-5 hverdage via FedEx/DHL", sv: "Leverans 3-5 vardagar via FedEx/DHL", no: "Levering 3-5 virkedager via FedEx/DHL", en: "Delivery 3-5 business days via FedEx/DHL",
    de: "Lieferung 3-5 Werktage via FedEx/DHL", nl: "Levering 3-5 werkdagen via FedEx/DHL", fr: "Livraison 3-5 jours ouvrés via FedEx/DHL", es: "Entrega 3-5 días laborables vía FedEx/DHL",
  },
  "product.free_shipping": {
    da: "Gratis fragt på ordrer over €100", sv: "Fri frakt på ordrar över €100", no: "Fri frakt på bestillinger over €100", en: "Free shipping on orders over €100",
    de: "Kostenloser Versand ab €100", nl: "Gratis verzending boven €100", fr: "Livraison gratuite dès €100", es: "Envío gratis en pedidos de más de €100",
  },
  "product.eco": {
    da: "Bæredygtig produktion med øko-venlige blækfarver", sv: "Hållbar produktion med miljövänliga bläck", no: "Bærekraftig produksjon med miljøvennlige blekk", en: "Sustainable production with eco-friendly inks",
    de: "Nachhaltige Produktion mit umweltfreundlichen Tinten", nl: "Duurzame productie met milieuvriendelijke inkt", fr: "Production durable avec encres écologiques", es: "Producción sostenible con tintas ecológicas",
  },
  "cart.heading": {
    da: "Kurv", sv: "Varukorg", no: "Handlekurv", en: "Cart",
    de: "Warenkorb", nl: "Winkelwagen", fr: "Panier", es: "Carrito",
  },
  "cart.empty": {
    da: "Din kurv er tom", sv: "Din varukorg är tom", no: "Handlekurven din er tom", en: "Your cart is empty",
    de: "Dein Warenkorb ist leer", nl: "Je winkelwagen is leeg", fr: "Ton panier est vide", es: "Tu carrito está vacío",
  },
  "cart.empty_desc": {
    da: "Udforsk vores kollektion af premium activewear.", sv: "Utforska vår kollektion av premium activewear.", no: "Utforsk vår kolleksjon av premium activewear.", en: "Explore our collection of premium activewear.",
    de: "Entdecke unsere Kollektion premium Activewear.", nl: "Ontdek onze collectie premium activewear.", fr: "Découvre notre collection d'activewear premium.", es: "Explora nuestra colección de activewear premium.",
  },
  "cart.continue": {
    da: "Fortsæt shopping", sv: "Fortsätt handla", no: "Fortsett å handle", en: "Continue shopping",
    de: "Weiter einkaufen", nl: "Verder winkelen", fr: "Continuer les achats", es: "Seguir comprando",
  },
  "cart.summary": {
    da: "Ordreopsummering", sv: "Ordersammanfattning", no: "Ordresammendrag", en: "Order summary",
    de: "Bestellübersicht", nl: "Besteloverzicht", fr: "Résumé de la commande", es: "Resumen del pedido",
  },
  "cart.subtotal": {
    da: "Subtotal", sv: "Delsumma", no: "Delsum", en: "Subtotal",
    de: "Zwischensumme", nl: "Subtotaal", fr: "Sous-total", es: "Subtotal",
  },
  "cart.shipping": {
    da: "Levering", sv: "Leverans", no: "Levering", en: "Shipping",
    de: "Versand", nl: "Verzending", fr: "Livraison", es: "Envío",
  },
  "cart.shipping_note": {
    da: "€14,95 · Gratis over €100", sv: "€14,95 · Gratis över €100", no: "€14,95 · Gratis over €100", en: "€14.95 · Free over €100",
    de: "€14,95 · Kostenlos ab €100", nl: "€14,95 · Gratis boven €100", fr: "€14,95 · Gratuit dès €100", es: "€14,95 · Gratis a partir de €100",
  },
  "cart.total": {
    da: "Total", sv: "Totalt", no: "Totalt", en: "Total",
    de: "Gesamt", nl: "Totaal", fr: "Total", es: "Total",
  },
  "cart.checkout": {
    da: "Gå til betaling", sv: "Gå till betalning", no: "Gå til betaling", en: "Go to checkout",
    de: "Zur Kasse", nl: "Naar kassa", fr: "Passer au paiement", es: "Ir al pago",
  },
  "cart.contrado_note": {
    da: "Produceret via Contrado, London", sv: "Producerat via Contrado, London", no: "Produsert via Contrado, London", en: "Produced via Contrado, London",
    de: "Hergestellt über Contrado, London", nl: "Geproduceerd via Contrado, Londen", fr: "Produit via Contrado, Londres", es: "Producido vía Contrado, Londres",
  },
  "checkout.heading": {
    da: "Betaling", sv: "Betalning", no: "Betaling", en: "Checkout",
    de: "Bezahlung", nl: "Afrekenen", fr: "Paiement", es: "Pago",
  },
  "checkout.address": {
    da: "Leveringsadresse", sv: "Leveransadress", no: "Leveringsadresse", en: "Shipping address",
    de: "Lieferadresse", nl: "Bezorgadres", fr: "Adresse de livraison", es: "Dirección de envío",
  },
  "checkout.firstname": {
    da: "Fornavn", sv: "Förnamn", no: "Fornavn", en: "First name",
    de: "Vorname", nl: "Voornaam", fr: "Prénom", es: "Nombre",
  },
  "checkout.lastname": {
    da: "Efternavn", sv: "Efternamn", no: "Etternavn", en: "Last name",
    de: "Nachname", nl: "Achternaam", fr: "Nom", es: "Apellido",
  },
  "checkout.email": {
    da: "Email", sv: "E-post", no: "E-post", en: "Email",
    de: "E-Mail", nl: "E-mail", fr: "Email", es: "Email",
  },
  "checkout.phone": {
    da: "Telefon", sv: "Telefon", no: "Telefon", en: "Phone",
    de: "Telefon", nl: "Telefoon", fr: "Téléphone", es: "Teléfono",
  },
  "checkout.address1": {
    da: "Adresse", sv: "Adress", no: "Adresse", en: "Address",
    de: "Adresse", nl: "Adres", fr: "Adresse", es: "Dirección",
  },
  "checkout.address2": {
    da: "Adresse 2 (valgfrit)", sv: "Adress 2 (valfritt)", no: "Adresse 2 (valgfritt)", en: "Address 2 (optional)",
    de: "Adresse 2 (optional)", nl: "Adres 2 (optioneel)", fr: "Adresse 2 (facultatif)", es: "Dirección 2 (opcional)",
  },
  "checkout.postcode": {
    da: "Postnummer", sv: "Postnummer", no: "Postnummer", en: "Postcode",
    de: "Postleitzahl", nl: "Postcode", fr: "Code postal", es: "Código postal",
  },
  "checkout.city": {
    da: "By", sv: "Stad", no: "By", en: "City",
    de: "Stadt", nl: "Stad", fr: "Ville", es: "Ciudad",
  },
  "checkout.submit": {
    da: "Bestil", sv: "Beställ", no: "Bestill", en: "Place order",
    de: "Bestellen", nl: "Bestellen", fr: "Commander", es: "Pedir",
  },
  "checkout.secure": {
    da: "Sikker krypteret betaling", sv: "Säker krypterad betalning", no: "Sikker kryptert betaling", en: "Secure encrypted payment",
    de: "Sichere verschlüsselte Zahlung", nl: "Veilige versleutelde betaling", fr: "Paiement sécurisé et crypté", es: "Pago seguro y cifrado",
  },
  "checkout.stripe_powered": {
    da: "Betaling via Stripe", sv: "Betalning via Stripe", no: "Betaling via Stripe", en: "Powered by Stripe",
    de: "Betrieben von Stripe", nl: "Aangedreven door Stripe", fr: "Propulsé par Stripe", es: "Procesado por Stripe",
  },
  "checkout.pay_now": {
    da: "Betal nu", sv: "Betala nu", no: "Betal nå", en: "Pay now",
    de: "Jetzt bezahlen", nl: "Nu betalen", fr: "Payer maintenant", es: "Pagar ahora",
  },
  "checkout.processing": {
    da: "Opretter betaling...", sv: "Skapar betalning...", no: "Oppretter betaling...", en: "Creating payment...",
    de: "Zahlung wird erstellt...", nl: "Betaling wordt aangemaakt...", fr: "Création du paiement...", es: "Creando pago...",
  },
  "checkout.your_order": {
    da: "Din ordre", sv: "Din order", no: "Din ordre", en: "Your order",
    de: "Deine Bestellung", nl: "Je bestelling", fr: "Ta commande", es: "Tu pedido",
  },
  "order.success": {
    da: "Ordre modtaget", sv: "Order mottagen", no: "Ordre mottatt", en: "Order received",
    de: "Bestellung eingegangen", nl: "Bestelling ontvangen", fr: "Commande reçue", es: "Pedido recibido",
  },
  "order.success_desc": {
    da: "Din ordre er oprettet og klar til produktion via Contrado.", sv: "Din order har skapats och är redo för produktion via Contrado.", no: "Din ordre er opprettet og klar til produksjon via Contrado.", en: "Your order has been placed and is ready for production via Contrado.",
    de: "Deine Bestellung wurde erstellt und ist bereit für die Produktion über Contrado.", nl: "Je bestelling is geplaatst en staat klaar voor productie via Contrado.", fr: "Ta commande a été créée et est prête pour la production via Contrado.", es: "Tu pedido ha sido creado y está listo para producción vía Contrado.",
  },
  "order.details": {
    da: "Ordredetaljer", sv: "Orderdetaljer", no: "Ordredetaljer", en: "Order details",
    de: "Bestelldetails", nl: "Besteldetails", fr: "Détails de la commande", es: "Detalles del pedido",
  },
  "order.back": {
    da: "Tilbage til shop", sv: "Tillbaka till butiken", no: "Tilbake til butikken", en: "Back to shop",
    de: "Zurück zum Shop", nl: "Terug naar winkel", fr: "Retour à la boutique", es: "Volver a la tienda",
  },
  "info.produced": {
    da: "Produceret i London", sv: "Producerat i London", no: "Produsert i London", en: "Produced in London",
    de: "Hergestellt in London", nl: "Geproduceerd in Londen", fr: "Fabriqué à Londres", es: "Producido en Londres",
  },
  "info.produced_desc": {
    da: "Alt tøj produceres af Contrado i deres London-atelier med 1-2 dages produktionstid.", sv: "Alla kläder tillverkas av Contrado i deras London-ateljé med 1-2 dagars produktionstid.", no: "Alle klær produseres av Contrado i deres London-atelier med 1-2 dagers produksjonstid.", en: "All garments are produced by Contrado in their London atelier with 1-2 day production time.",
    de: "Alle Kleidungsstücke werden von Contrado in ihrem Londoner Atelier mit 1-2 Tagen Produktionszeit hergestellt.", nl: "Alle kleding wordt geproduceerd door Contrado in hun Londense atelier met 1-2 dagen productietijd.", fr: "Tous les vêtements sont fabriqués par Contrado dans leur atelier londonien avec un délai de 1 à 2 jours.", es: "Toda la ropa es producida por Contrado en su atelier de Londres con 1-2 días de producción.",
  },
  "info.quality": {
    da: "Premium kvalitet", sv: "Premiumkvalitet", no: "Premium kvalitet", en: "Premium quality",
    de: "Premiumqualität", nl: "Premiumkwaliteit", fr: "Qualité premium", es: "Calidad premium",
  },
  "info.quality_desc": {
    da: "Håndudvalgte stoffer med 4-vejs stretch, fugt-absorberende teknologi og holdbare øko-venlige farver.", sv: "Handplockade tyger med 4-vägs stretch, fuktabsorberande teknologi och hållbara miljövänliga färger.", no: "Håndplukkede stoffer med 4-veis stretch, fuktabsorberende teknologi og holdbare miljøvennlige farger.", en: "Hand-selected fabrics with 4-way stretch, moisture-wicking technology and durable eco-friendly dyes.",
    de: "Handverlesene Stoffe mit 4-Wege-Stretch, feuchtigkeitsableitender Technologie und langlebigen umweltfreundlichen Farben.", nl: "Handgeselecteerde stoffen met 4-weg stretch, vochtafvoerende technologie en duurzame milieuvriendelijke kleurstoffen.", fr: "Tissus sélectionnés avec stretch 4 directions, technologie anti-transpiration et teintures écologiques durables.", es: "Telas seleccionadas con stretch 4 direcciones, tecnología anti-transpiración y tintes ecológicos duraderos.",
  },
  "info.sustainable": {
    da: "Bæredygtig produktion", sv: "Hållbar produktion", no: "Bærekraftig produksjon", en: "Sustainable production",
    de: "Nachhaltige Produktion", nl: "Duurzame productie", fr: "Production durable", es: "Producción sostenible",
  },
  "info.sustainable_desc": {
    da: "Print-on-demand eliminerer overskudsproduktion. Øko-venlige blækfarver og genanvendte materialer.", sv: "Print-on-demand eliminerar överproduktion. Miljövänliga bläck och återvunna material.", no: "Print-on-demand eliminerer overproduksjon. Miljøvennlige blekk og gjenvunne materialer.", en: "Print-on-demand eliminates overproduction. Eco-friendly inks and recycled materials.",
    de: "Print-on-Demand eliminiert Überproduktion. Umweltfreundliche Tinten und recycelte Materialien.", nl: "Print-on-demand elimineert overproductie. Milieuvriendelijke inkt en gerecyclede materialen.", fr: "L'impression à la demande élimine la surproduction. Encres écologiques et matériaux recyclés.", es: "La impresión bajo demanda elimina la sobreproducción. Tintas ecológicas y materiales reciclados.",
  },
  "footer.back": {
    da: "Alle produkter", sv: "Alla produkter", no: "Alle produkter", en: "All products",
    de: "Alle Produkte", nl: "Alle producten", fr: "Tous les produits", es: "Todos los productos",
  },
  "nav.items": {
    da: "varer", sv: "varor", no: "varer", en: "items",
    de: "Artikel", nl: "artikelen", fr: "articles", es: "artículos",
  },
  "nav.item": {
    da: "vare", sv: "vara", no: "vare", en: "item",
    de: "Artikel", nl: "artikel", fr: "article", es: "artículo",
  },
  "quotes.no_results": {
    da: "Ingen resultater", sv: "Inga resultat", no: "Ingen resultater", en: "No results",
    de: "Keine Ergebnisse", nl: "Geen resultaten", fr: "Aucun résultat", es: "Sin resultados",
  },
  "shop.all": {
    da: "Alle produkter", sv: "Alla produkter", no: "Alle produkter", en: "All products",
    de: "Alle Produkte", nl: "Alle producten", fr: "Tous les produits", es: "Todos los productos",
  },
  "shop.from": {
    da: "Fra", sv: "Från", no: "Fra", en: "From",
    de: "Ab", nl: "Vanaf", fr: "À partir de", es: "Desde",
  },
  "shop.view": {
    da: "Se produkt", sv: "Se produkt", no: "Se produkt", en: "View product",
    de: "Produkt ansehen", nl: "Bekijk product", fr: "Voir le produit", es: "Ver producto",
  },
};

// ─── Product type translations ───
export const productTypeTranslations: Record<ProductType, Record<Locale, string>> = {
  custom_leggings: { da: "Custom Leggings", sv: "Custom Leggings", no: "Custom Leggings", en: "Custom Leggings", de: "Custom Leggings", nl: "Custom Leggings", fr: "Leggings sur mesure", es: "Leggings personalizados" },
  gym_leggings: { da: "Gym Leggings", sv: "Gym Leggings", no: "Gym Leggings", en: "Gym Leggings", de: "Gym Leggings", nl: "Gym Leggings", fr: "Leggings de gym", es: "Leggings de gym" },
  high_waisted_leggings: { da: "High Waisted Leggings", sv: "High Waisted Leggings", no: "High Waisted Leggings", en: "High Waisted Leggings", de: "High Waisted Leggings", nl: "High Waisted Leggings", fr: "Leggings taille haute", es: "Leggings de tiro alto" },
  flared_leggings: { da: "Flared Leggings", sv: "Flared Leggings", no: "Flared Leggings", en: "Flared Leggings", de: "Flared Leggings", nl: "Flared Leggings", fr: "Leggings évasés", es: "Leggings acampanados" },
  sports_bra: { da: "Sports Bra", sv: "Sport-BH", no: "Sports-BH", en: "Sports Bra", de: "Sport-BH", nl: "Sport-BH", fr: "Brassière de sport", es: "Sujetador deportivo" },
  tank_top: { da: "Tank Top", sv: "Tank Top", no: "Tank Top", en: "Tank Top", de: "Tank Top", nl: "Tank Top", fr: "Débardeur", es: "Camiseta de tirantes" },
  crop_top: { da: "Crop Top", sv: "Crop Top", no: "Crop Top", en: "Crop Top", de: "Crop Top", nl: "Crop Top", fr: "Crop Top", es: "Crop Top" },
  bandeau: { da: "Bandeau Top", sv: "Bandeau Top", no: "Bandeau Top", en: "Bandeau Top", de: "Bandeau Top", nl: "Bandeau Top", fr: "Bandeau", es: "Bandeau" },
  loose_tshirt: { da: "Loose Fit T-Shirt", sv: "Loose Fit T-shirt", no: "Loose Fit T-skjorte", en: "Loose Fit T-Shirt", de: "Loose Fit T-Shirt", nl: "Loose Fit T-shirt", fr: "T-shirt ample", es: "Camiseta holgada" },
  athletic_shorts: { da: "Athletic Shorts", sv: "Athletic Shorts", no: "Athletic Shorts", en: "Athletic Shorts", de: "Athletic Shorts", nl: "Athletic Shorts", fr: "Short sportif", es: "Shorts deportivos" },
  hot_pants: { da: "Hot Pants", sv: "Hot Pants", no: "Hot Pants", en: "Hot Pants", de: "Hot Pants", nl: "Hot Pants", fr: "Hot Pants", es: "Hot Pants" },
  hoodie: { da: "Hoodie", sv: "Hoodie", no: "Hoodie", en: "Hoodie", de: "Hoodie", nl: "Hoodie", fr: "Hoodie", es: "Sudadera con capucha" },
  sweatshirt: { da: "Sweatshirt", sv: "Sweatshirt", no: "Sweatshirt", en: "Sweatshirt", de: "Sweatshirt", nl: "Sweatshirt", fr: "Sweatshirt", es: "Sudadera" },
  joggers: { da: "Joggers", sv: "Joggers", no: "Joggers", en: "Joggers", de: "Joggers", nl: "Joggers", fr: "Jogging", es: "Pantalones deportivos" },
};

// ─── Color translations ───
const colorTranslations: Record<string, Record<Locale, string>> = {
  dusty_rose: { da: "Dusty Rose", sv: "Dusty Rose", no: "Dusty Rose", en: "Dusty Rose", de: "Altrosa", nl: "Oud Roze", fr: "Rose Poudré", es: "Rosa Polvo" },
  sage: { da: "Sage", sv: "Salviagrön", no: "Salvie", en: "Sage", de: "Salbei", nl: "Salie", fr: "Sauge", es: "Salvia" },
  cream: { da: "Cream", sv: "Creme", no: "Kremhvit", en: "Cream", de: "Creme", nl: "Crème", fr: "Crème", es: "Crema" },
  taupe: { da: "Taupe", sv: "Taupe", no: "Taupe", en: "Taupe", de: "Taupe", nl: "Taupe", fr: "Taupe", es: "Topo" },
  sand: { da: "Sand", sv: "Sand", no: "Sand", en: "Sand", de: "Sand", nl: "Zand", fr: "Sable", es: "Arena" },
  mauve: { da: "Mauve", sv: "Mauve", no: "Mauve", en: "Mauve", de: "Mauve", nl: "Mauve", fr: "Mauve", es: "Malva" },
};

// ─── Editorial quotes (30 quotes, some English that stay English across all langs) ───
// English quotes: q15, q16, q18, q19, q20, q21, q24, q26, q28, q30
const quoteTranslations: Record<string, Record<Locale, string>> = {
  q1: { da: "Gør det umulige muligt", sv: "Gör det omöjliga möjligt", no: "Gjør det umulige mulig", en: "Make the impossible possible", de: "Mach das Unmögliche möglich", nl: "Maak het onmogelijke mogelijk", fr: "Rends l'impossible possible", es: "Haz lo imposible posible" },
  q2: { da: "Fejl er bare uopdagede muligheder", sv: "Misstag är bara oupptäckta möjligheter", no: "Feil er bare uoppdagede muligheter", en: "Mistakes are just undiscovered opportunities", de: "Fehler sind nur unentdeckte Möglichkeiten", nl: "Fouten zijn slechts onontdekte kansen", fr: "Les erreurs ne sont que des opportunités cachées", es: "Los errores son oportunidades por descubrir" },
  q3: { da: "Drøm stort. Start småt. Begynd nu.", sv: "Dröm stort. Börja smått. Börja nu.", no: "Drøm stort. Start smått. Begynn nå.", en: "Dream big. Start small. Begin now.", de: "Träume groß. Starte klein. Beginne jetzt.", nl: "Droom groot. Begin klein. Begin nu.", fr: "Rêve grand. Commence petit. Commence maintenant.", es: "Sueña en grande. Empieza pequeño. Empieza ahora." },
  q4: { da: "Din eneste grænse er dig selv", sv: "Din enda gräns är dig själv", no: "Din eneste grense er deg selv", en: "Your only limit is yourself", de: "Deine einzige Grenze bist du selbst", nl: "Je enige grens ben je zelf", fr: "Ta seule limite, c'est toi", es: "Tu único límite eres tú" },
  q5: { da: "Succes er ikke endelig, fiasko er ikke fatal", sv: "Framgång är inte slutgiltig, misslyckande inte dödligt", no: "Suksess er ikke endelig, fiasko er ikke fatal", en: "Success is not final, failure is not fatal", de: "Erfolg ist nicht endgültig, Misserfolg nicht tödlich", nl: "Succes is niet definitief, falen niet fataal", fr: "Le succès n'est pas final, l'échec n'est pas fatal", es: "El éxito no es definitivo, el fracaso no es fatal" },
  q6: { da: "Jeg løber ikke – jeg ankommer dramatisk sent", sv: "Jag springer inte – jag anländer dramatiskt sent", no: "Jeg løper ikke – jeg ankommer dramatisk sent", en: "I don't run — I arrive dramatically late", de: "Ich laufe nicht — ich komme dramatisch spät an", nl: "Ik ren niet — ik kom dramatisch laat aan", fr: "Je ne cours pas — j'arrive dramatiquement en retard", es: "No corro — llego dramáticamente tarde" },
  q7: { da: "Kaffe først. Spørgsmål bagefter.", sv: "Kaffe först. Frågor sen.", no: "Kaffe først. Spørsmål etterpå.", en: "Coffee first. Questions later.", de: "Erst Kaffee. Fragen später.", nl: "Eerst koffie. Vragen later.", fr: "Café d'abord. Questions après.", es: "Café primero. Preguntas después." },
  q8: { da: "Professionel overtænker", sv: "Professionell övertänkare", no: "Profesjonell overtenker", en: "Professional overthinker", de: "Professioneller Überdenker", nl: "Professionele overdenker", fr: "Penseur professionnel", es: "Pensador profesional" },
  q9: { da: "Min holdning er som WiFi – svært at ændre", sv: "Min attityd är som WiFi – svår att ändra", no: "Min holdning er som WiFi – vanskelig å endre", en: "My attitude is like WiFi – hard to change", de: "Meine Haltung ist wie WiFi – schwer zu ändern", nl: "Mijn houding is als WiFi – moeilijk te veranderen", fr: "Mon attitude est comme le WiFi – difficile à changer", es: "Mi actitud es como el WiFi – difícil de cambiar" },
  q10: { da: "Jeg er ikke doven, jeg er på energisparetilstand", sv: "Jag är inte lat, jag är i energisparläge", no: "Jeg er ikke lat, jeg er i energisparemodus", en: "I'm not lazy, I'm on energy saving mode", de: "Ich bin nicht faul, ich bin im Energiesparmodus", nl: "Ik ben niet lui, ik sta op energiespaarstand", fr: "Je ne suis pas paresseux, je suis en mode économie d'énergie", es: "No soy vago, estoy en modo ahorro de energía" },
  q11: { da: "At leve er at vælge", sv: "Att leva är att välja", no: "Å leve er å velge", en: "To live is to choose", de: "Leben heißt wählen", nl: "Leven is kiezen", fr: "Vivre, c'est choisir", es: "Vivir es elegir" },
  q12: { da: "Forandring begynder indefra", sv: "Förändring börjar inifrån", no: "Forandring begynner innenfra", en: "Change begins from within", de: "Veränderung beginnt von innen", nl: "Verandering begint van binnen", fr: "Le changement commence de l'intérieur", es: "El cambio empieza desde dentro" },
  q13: { da: "Vejen er målet", sv: "Vägen är målet", no: "Veien er målet", en: "The journey is the destination", de: "Der Weg ist das Ziel", nl: "De weg is het doel", fr: "Le chemin est la destination", es: "El camino es el destino" },
  q14: { da: "Vær den forandring du ønsker at se", sv: "Var den förändring du vill se", no: "Vær den forandringen du ønsker å se", en: "Be the change you wish to see", de: "Sei die Veränderung, die du sehen willst", nl: "Wees de verandering die je wilt zien", fr: "Sois le changement que tu veux voir", es: "Sé el cambio que quieres ver" },
  // English quotes — same in all languages
  q15: { da: "Simplicity is the ultimate sophistication", sv: "Simplicity is the ultimate sophistication", no: "Simplicity is the ultimate sophistication", en: "Simplicity is the ultimate sophistication", de: "Simplicity is the ultimate sophistication", nl: "Simplicity is the ultimate sophistication", fr: "Simplicity is the ultimate sophistication", es: "Simplicity is the ultimate sophistication" },
  q16: { da: "Hustle in silence. Let success make the noise.", sv: "Hustle in silence. Let success make the noise.", no: "Hustle in silence. Let success make the noise.", en: "Hustle in silence. Let success make the noise.", de: "Hustle in silence. Let success make the noise.", nl: "Hustle in silence. Let success make the noise.", fr: "Hustle in silence. Let success make the noise.", es: "Hustle in silence. Let success make the noise." },
  q17: { da: "Byg dit imperium", sv: "Bygg ditt imperium", no: "Bygg ditt imperium", en: "Build your empire", de: "Baue dein Imperium", nl: "Bouw je imperium", fr: "Construis ton empire", es: "Construye tu imperio" },
  q18: { da: "Profit follows passion", sv: "Profit follows passion", no: "Profit follows passion", en: "Profit follows passion", de: "Profit follows passion", nl: "Profit follows passion", fr: "Profit follows passion", es: "Profit follows passion" },
  q19: { da: "Execution over ideas", sv: "Execution over ideas", no: "Execution over ideas", en: "Execution over ideas", de: "Execution over ideas", nl: "Execution over ideas", fr: "Execution over ideas", es: "Execution over ideas" },
  q20: { da: "Own your story", sv: "Own your story", no: "Own your story", en: "Own your story", de: "Own your story", nl: "Own your story", fr: "Own your story", es: "Own your story" },
  q21: { da: "Less is more", sv: "Less is more", no: "Less is more", en: "Less is more", de: "Less is more", nl: "Less is more", fr: "Less is more", es: "Less is more" },
  q22: { da: "Nyd øjeblikket", sv: "Njut av ögonblicket", no: "Nyt øyeblikket", en: "Enjoy the moment", de: "Genieße den Moment", nl: "Geniet van het moment", fr: "Profite de l'instant", es: "Disfruta el momento" },
  q23: { da: "Frihed er en tilstand", sv: "Frihet är ett tillstånd", no: "Frihet er en tilstand", en: "Freedom is a state of mind", de: "Freiheit ist ein Zustand", nl: "Vrijheid is een staat van zijn", fr: "La liberté est un état d'esprit", es: "La libertad es un estado mental" },
  q24: { da: "Good vibes only", sv: "Good vibes only", no: "Good vibes only", en: "Good vibes only", de: "Good vibes only", nl: "Good vibes only", fr: "Good vibes only", es: "Good vibes only" },
  q25: { da: "Livet er for kort til dårlig kaffe", sv: "Livet är för kort för dåligt kaffe", no: "Livet er for kort til dårlig kaffe", en: "Life is too short for bad coffee", de: "Das Leben ist zu kurz für schlechten Kaffee", nl: "Het leven is te kort voor slechte koffie", fr: "La vie est trop courte pour un mauvais café", es: "La vida es demasiado corta para mal café" },
  q26: { da: "Be here now", sv: "Be here now", no: "Be here now", en: "Be here now", de: "Be here now", nl: "Be here now", fr: "Be here now", es: "Be here now" },
  q27: { da: "Stilheden taler højest", sv: "Tystnaden talar högst", no: "Stillheten taler høyest", en: "Silence speaks the loudest", de: "Die Stille spricht am lautesten", nl: "Stilte spreekt het hardst", fr: "Le silence parle le plus fort", es: "El silencio habla más alto" },
  q28: { da: "Breathe in. Let go.", sv: "Breathe in. Let go.", no: "Breathe in. Let go.", en: "Breathe in. Let go.", de: "Breathe in. Let go.", nl: "Breathe in. Let go.", fr: "Breathe in. Let go.", es: "Breathe in. Let go." },
  q29: { da: "Ingen vind, ingen bølger — bare ro", sv: "Ingen vind, inga vågor — bara lugn", no: "Ingen vind, ingen bølger — bare ro", en: "No wind, no waves — just peace", de: "Kein Wind, keine Wellen — nur Ruhe", nl: "Geen wind, geen golven — alleen rust", fr: "Pas de vent, pas de vagues — juste la paix", es: "Sin viento, sin olas — solo paz" },
  q30: { da: "The mind is everything. What you think, you become.", sv: "The mind is everything. What you think, you become.", no: "The mind is everything. What you think, you become.", en: "The mind is everything. What you think, you become.", de: "The mind is everything. What you think, you become.", nl: "The mind is everything. What you think, you become.", fr: "The mind is everything. What you think, you become.", es: "The mind is everything. What you think, you become." },
};

// ─── Quote category translations ───
const categories: Record<string, Record<Locale, string>> = {
  all: { da: "Alle", sv: "Alla", no: "Alle", en: "All", de: "Alle", nl: "Alle", fr: "Toutes", es: "Todas" },
  motiverende: { da: "Motiverende", sv: "Motiverande", no: "Motiverende", en: "Motivational", de: "Motivierend", nl: "Motiverend", fr: "Motivantes", es: "Motivadoras" },
  sjove: { da: "Sjove", sv: "Roliga", no: "Morsomme", en: "Fun", de: "Lustige", nl: "Grappig", fr: "Drôles", es: "Divertidas" },
  filosofiske: { da: "Filosofiske", sv: "Filosofiska", no: "Filosofiske", en: "Philosophical", de: "Philosophische", nl: "Filosofisch", fr: "Philosophiques", es: "Filosóficas" },
  business: { da: "Business", sv: "Business", no: "Business", en: "Business", de: "Business", nl: "Business", fr: "Business", es: "Business" },
  livsstil: { da: "Livsstil", sv: "Livsstil", no: "Livsstil", en: "Lifestyle", de: "Lifestyle", nl: "Lifestyle", fr: "Style de vie", es: "Estilo de vida" },
  mindfulness: { da: "Mindfulness", sv: "Mindfulness", no: "Mindfulness", en: "Mindfulness", de: "Achtsamkeit", nl: "Mindfulness", fr: "Pleine conscience", es: "Mindfulness" },
};

// ─── Context & Provider ───
interface I18nContextType {
  locale: Locale;
  setLocale: (l: Locale) => void;
  t: (key: string) => string;
  tc: (cat: string) => string;
  tq: (quoteId: string) => string;
  tproduct: (pt: ProductType) => string;
  tcolor: (colorId: string) => string;
  formatProductPrice: (pt: ProductType) => string;
}

const I18nContext = createContext<I18nContextType | null>(null);

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>("da");

  const t = useCallback((key: string) => ui[key]?.[locale] ?? ui[key]?.["en"] ?? key, [locale]);
  const tc = useCallback((cat: string) => categories[cat]?.[locale] ?? cat, [locale]);
  const tq = useCallback((quoteId: string) => quoteTranslations[quoteId]?.[locale] ?? "", [locale]);
  const tproduct = useCallback((pt: ProductType) => productTypeTranslations[pt]?.[locale] ?? pt, [locale]);
  const tcolor = useCallback((colorId: string) => colorTranslations[colorId]?.[locale] ?? colorId, [locale]);
  const formatProductPrice = useCallback((pt: ProductType) => {
    const { formatted } = getProductPrice(pt);
    return formatted;
  }, []);

  return (
    <I18nContext.Provider value={{ locale, setLocale, t, tc, tq, tproduct, tcolor, formatProductPrice }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used within I18nProvider");
  return ctx;
}
