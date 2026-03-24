import { type ProductType, type ProductColor, productColors } from "@shared/schema";

interface ProductPreviewProps {
  productType: ProductType;
  colorId: string;
  quoteText: string;
  className?: string;
}

function getColor(productType: ProductType, colorId: string): ProductColor {
  const colors = productColors[productType];
  return colors.find(c => c.id === colorId) || colors[0];
}

function isLightColor(hex: string): boolean {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return (r * 299 + g * 587 + b * 114) / 1000 > 150;
}

function FittedTshirtSVG({ isLight }: { isLight: boolean }) {
  const stroke = isLight ? "rgba(0,0,0,0.08)" : "rgba(255,255,255,0.1)";
  return (
    <svg viewBox="0 0 300 400" className="absolute inset-0 w-full h-full" fill="none">
      {/* Feminine fitted t-shirt shape — narrower waist */}
      <path
        d="M95 55 L55 78 L35 138 L68 148 L82 98 L78 180 L72 240 L75 350 L225 350 L228 240 L222 180 L218 98 L232 148 L265 138 L245 78 L205 55"
        stroke={stroke} strokeWidth="2" fill="none"
      />
      {/* Curved neckline */}
      <path d="M95 55 C125 78 175 78 205 55" stroke={stroke} strokeWidth="2" fill="none" />
      {/* Waist cinch lines */}
      <path d="M78 200 Q150 185 222 200" stroke={stroke} strokeWidth="1" fill="none" opacity="0.5" />
    </svg>
  );
}

function TankTopSVG({ isLight }: { isLight: boolean }) {
  const stroke = isLight ? "rgba(0,0,0,0.08)" : "rgba(255,255,255,0.1)";
  return (
    <svg viewBox="0 0 300 400" className="absolute inset-0 w-full h-full" fill="none">
      {/* Racerback tank top shape */}
      <path
        d="M100 60 L80 70 L72 100 L68 180 L65 350 L235 350 L232 180 L228 100 L220 70 L200 60"
        stroke={stroke} strokeWidth="2" fill="none"
      />
      {/* Racerback straps */}
      <path d="M100 60 C120 45 140 42 150 40" stroke={stroke} strokeWidth="2" fill="none" />
      <path d="M200 60 C180 45 160 42 150 40" stroke={stroke} strokeWidth="2" fill="none" />
      {/* Scoop neckline */}
      <path d="M100 60 C120 90 180 90 200 60" stroke={stroke} strokeWidth="2" fill="none" />
      {/* Armhole curves */}
      <path d="M80 70 C75 80 72 90 72 100" stroke={stroke} strokeWidth="1.5" fill="none" />
      <path d="M220 70 C225 80 228 90 228 100" stroke={stroke} strokeWidth="1.5" fill="none" />
    </svg>
  );
}

function LeggingsSVG({ isLight }: { isLight: boolean }) {
  const stroke = isLight ? "rgba(0,0,0,0.08)" : "rgba(255,255,255,0.1)";
  return (
    <svg viewBox="0 0 300 400" className="absolute inset-0 w-full h-full" fill="none">
      {/* High-waisted leggings shape */}
      <path
        d="M90 40 L85 60 L80 120 L75 180 L90 240 L95 300 L100 380 L155 380 L155 240 L150 180 L150 180 L145 240 L145 380 L200 380 L205 300 L210 240 L225 180 L220 120 L215 60 L210 40 Z"
        stroke={stroke} strokeWidth="2" fill="none"
      />
      {/* Waistband top */}
      <path d="M90 40 L210 40" stroke={stroke} strokeWidth="2" fill="none" />
      {/* Waistband line */}
      <path d="M88 55 L212 55" stroke={stroke} strokeWidth="1" fill="none" opacity="0.5" />
      {/* Center seam */}
      <path d="M150 55 L150 240" stroke={stroke} strokeWidth="1" fill="none" opacity="0.3" />
    </svg>
  );
}

function SportsBraSVG({ isLight }: { isLight: boolean }) {
  const stroke = isLight ? "rgba(0,0,0,0.08)" : "rgba(255,255,255,0.1)";
  return (
    <svg viewBox="0 0 300 400" className="absolute inset-0 w-full h-full" fill="none">
      {/* Sports bra shape — centered in the frame */}
      <path
        d="M85 130 L80 150 L75 200 L78 240 L222 240 L225 200 L220 150 L215 130"
        stroke={stroke} strokeWidth="2" fill="none"
      />
      {/* Racerback straps */}
      <path d="M85 130 C100 110 130 105 150 100" stroke={stroke} strokeWidth="2" fill="none" />
      <path d="M215 130 C200 110 170 105 150 100" stroke={stroke} strokeWidth="2" fill="none" />
      {/* Scoop neckline */}
      <path d="M85 130 C110 165 190 165 215 130" stroke={stroke} strokeWidth="2" fill="none" />
      {/* Under-bust band */}
      <path d="M78 235 L222 235" stroke={stroke} strokeWidth="2" fill="none" />
      <path d="M78 240 L222 240" stroke={stroke} strokeWidth="1.5" fill="none" opacity="0.5" />
      {/* Center gore */}
      <path d="M150 145 L150 240" stroke={stroke} strokeWidth="1" fill="none" opacity="0.4" />
    </svg>
  );
}

function BikerShortsSVG({ isLight }: { isLight: boolean }) {
  const stroke = isLight ? "rgba(0,0,0,0.08)" : "rgba(255,255,255,0.1)";
  return (
    <svg viewBox="0 0 300 400" className="absolute inset-0 w-full h-full" fill="none">
      {/* High-waisted biker shorts — mid-thigh length */}
      <path
        d="M90 80 L85 100 L80 140 L78 180 L90 220 L100 270 L155 270 L155 200 L150 180 L145 200 L145 270 L200 270 L210 220 L222 180 L220 140 L215 100 L210 80 Z"
        stroke={stroke} strokeWidth="2" fill="none"
      />
      {/* Waistband */}
      <path d="M90 80 L210 80" stroke={stroke} strokeWidth="2" fill="none" />
      <path d="M89 95 L211 95" stroke={stroke} strokeWidth="1" fill="none" opacity="0.5" />
      {/* Center seam */}
      <path d="M150 95 L150 200" stroke={stroke} strokeWidth="1" fill="none" opacity="0.3" />
    </svg>
  );
}

function CropTopSVG({ isLight }: { isLight: boolean }) {
  const stroke = isLight ? "rgba(0,0,0,0.08)" : "rgba(255,255,255,0.1)";
  return (
    <svg viewBox="0 0 300 400" className="absolute inset-0 w-full h-full" fill="none">
      {/* Fitted crop top — ends at waist */}
      <path
        d="M100 90 L70 108 L55 160 L80 168 L88 130 L82 200 L78 260 L222 260 L218 200 L212 130 L220 168 L245 160 L230 108 L200 90"
        stroke={stroke} strokeWidth="2" fill="none"
      />
      {/* Scoop neckline */}
      <path d="M100 90 C125 115 175 115 200 90" stroke={stroke} strokeWidth="2" fill="none" />
      {/* Cropped hem line */}
      <path d="M78 260 L222 260" stroke={stroke} strokeWidth="2" fill="none" />
      {/* Waist cinch */}
      <path d="M82 220 Q150 208 218 220" stroke={stroke} strokeWidth="1" fill="none" opacity="0.5" />
    </svg>
  );
}

function FlaredLeggingsSVG({ isLight }: { isLight: boolean }) {
  const stroke = isLight ? "rgba(0,0,0,0.08)" : "rgba(255,255,255,0.1)";
  return (
    <svg viewBox="0 0 300 400" className="absolute inset-0 w-full h-full" fill="none">
      {/* High-waisted flared/bootcut leggings */}
      <path
        d="M90 40 L85 60 L80 120 L75 180 L85 240 L80 300 L70 380 L160 380 L155 300 L155 240 L150 180 L145 240 L145 300 L140 380 L230 380 L220 300 L215 240 L225 180 L220 120 L215 60 L210 40 Z"
        stroke={stroke} strokeWidth="2" fill="none"
      />
      {/* Waistband */}
      <path d="M90 40 L210 40" stroke={stroke} strokeWidth="2" fill="none" />
      <path d="M88 55 L212 55" stroke={stroke} strokeWidth="1" fill="none" opacity="0.5" />
      {/* Center seam */}
      <path d="M150 55 L150 240" stroke={stroke} strokeWidth="1" fill="none" opacity="0.3" />
    </svg>
  );
}

function CroppedHoodieSVG({ isLight }: { isLight: boolean }) {
  const stroke = isLight ? "rgba(0,0,0,0.08)" : "rgba(255,255,255,0.1)";
  return (
    <svg viewBox="0 0 300 400" className="absolute inset-0 w-full h-full" fill="none">
      {/* Cropped hoodie — wider, cozy shape, ends at waist */}
      <path
        d="M90 80 L50 100 L32 165 L65 172 L72 130 L65 210 L60 300 L240 300 L235 210 L228 130 L235 172 L268 165 L250 100 L210 80"
        stroke={stroke} strokeWidth="2" fill="none"
      />
      {/* Hood */}
      <path d="M90 80 C95 55 120 35 150 30 C180 35 205 55 210 80" stroke={stroke} strokeWidth="2" fill="none" />
      {/* Neckline / hood opening */}
      <path d="M115 80 C130 95 170 95 185 80" stroke={stroke} strokeWidth="1.5" fill="none" />
      {/* Kangaroo pocket */}
      <path d="M105 210 C115 225 185 225 195 210" stroke={stroke} strokeWidth="1" fill="none" opacity="0.5" />
      {/* Hem ribbing */}
      <path d="M60 295 L240 295" stroke={stroke} strokeWidth="1" fill="none" opacity="0.4" />
    </svg>
  );
}

function LonglineBraSVG({ isLight }: { isLight: boolean }) {
  const stroke = isLight ? "rgba(0,0,0,0.08)" : "rgba(255,255,255,0.1)";
  return (
    <svg viewBox="0 0 300 400" className="absolute inset-0 w-full h-full" fill="none">
      {/* Longline sports bra — extends below bust to ribs */}
      <path
        d="M85 115 L78 140 L72 190 L70 250 L75 290 L225 290 L228 250 L230 190 L222 140 L215 115"
        stroke={stroke} strokeWidth="2" fill="none"
      />
      {/* Racerback straps */}
      <path d="M85 115 C100 95 130 88 150 85" stroke={stroke} strokeWidth="2" fill="none" />
      <path d="M215 115 C200 95 170 88 150 85" stroke={stroke} strokeWidth="2" fill="none" />
      {/* Scoop neckline */}
      <path d="M85 115 C110 150 190 150 215 115" stroke={stroke} strokeWidth="2" fill="none" />
      {/* Under-bust band */}
      <path d="M72 220 L228 220" stroke={stroke} strokeWidth="1.5" fill="none" opacity="0.5" />
      {/* Bottom hem */}
      <path d="M75 285 L225 285" stroke={stroke} strokeWidth="2" fill="none" />
      <path d="M75 290 L225 290" stroke={stroke} strokeWidth="1.5" fill="none" opacity="0.5" />
      {/* Center gore */}
      <path d="M150 130 L150 290" stroke={stroke} strokeWidth="1" fill="none" opacity="0.3" />
    </svg>
  );
}

const ShapeComponents: Record<ProductType, React.ComponentType<{ isLight: boolean }>> = {
  fitted_tshirt: FittedTshirtSVG,
  tank_top: TankTopSVG,
  yoga_leggings: LeggingsSVG,
  sports_bra: SportsBraSVG,
  biker_shorts: BikerShortsSVG,
  crop_top: CropTopSVG,
  flared_leggings: FlaredLeggingsSVG,
  cropped_hoodie: CroppedHoodieSVG,
  longline_bra: LonglineBraSVG,
};

// AOP product types that get a subtle gradient background
const aopTypes: ProductType[] = ["yoga_leggings", "sports_bra", "biker_shorts", "crop_top", "flared_leggings", "longline_bra"];

function AllOverPrintBg({ productType }: { productType: ProductType }) {
  if (!aopTypes.includes(productType)) return null;
  return (
    <div className="absolute inset-0 opacity-[0.07]" style={{
      backgroundImage: `radial-gradient(circle at 30% 40%, rgba(217,119,6,0.4) 0%, transparent 50%), radial-gradient(circle at 70% 60%, rgba(139,92,246,0.3) 0%, transparent 50%)`,
    }} />
  );
}

export function ProductPreview({ productType, colorId, quoteText, className = "" }: ProductPreviewProps) {
  const color = getColor(productType, colorId);
  const isAllOverPrint = aopTypes.includes(productType);
  const bgHex = isAllOverPrint ? "#F5F0EB" : color.hex;
  const isLight = isLightColor(bgHex);
  const textColor = "#E8A0BF";
  const borderColor = isLight ? "border-border" : "border-transparent";

  const ShapeComponent = ShapeComponents[productType];

  // Adjust text position based on product type
  const textMarginTop =
    productType === "sports_bra" ? "20%" :
    productType === "longline_bra" ? "15%" :
    productType === "yoga_leggings" ? "-8%" :
    productType === "flared_leggings" ? "-8%" :
    productType === "biker_shorts" ? "5%" :
    productType === "crop_top" ? "8%" :
    productType === "cropped_hoodie" ? "5%" :
    "10%";
  const textMaxWidth =
    productType === "yoga_leggings" ? "55%" :
    productType === "flared_leggings" ? "55%" :
    productType === "biker_shorts" ? "65%" :
    "80%";

  return (
    <div
      className={`relative flex items-center justify-center rounded-xl overflow-hidden ${borderColor} border ${className}`}
      style={{ backgroundColor: bgHex, aspectRatio: (productType === "yoga_leggings" || productType === "flared_leggings") ? "3/5" : "3/4" }}
      data-testid={`product-preview-${productType}-${colorId}`}
    >
      <AllOverPrintBg productType={productType} />
      <ShapeComponent isLight={isLight} />

      {/* Quote text on the product */}
      <div
        className="relative z-10 px-8 sm:px-10 text-center"
        style={{ marginTop: textMarginTop, maxWidth: textMaxWidth }}
      >
        <p
          className="font-extralight leading-tight"
          style={{
            color: textColor,
            fontSize:
              (productType === "yoga_leggings" || productType === "flared_leggings") ? "clamp(0.6rem, 1.5vw, 0.85rem)" :
              (productType === "sports_bra" || productType === "longline_bra" || productType === "biker_shorts") ? "clamp(0.6rem, 1.5vw, 0.9rem)" :
              (productType === "crop_top") ? "clamp(0.65rem, 1.6vw, 0.95rem)" :
              "clamp(0.75rem, 2vw, 1.1rem)",
            letterSpacing: "-0.01em",
            textShadow: isLight ? "0 0 8px rgba(0,0,0,0.06)" : "0 1px 3px rgba(0,0,0,0.3)",
          }}
        >
          &ldquo;{quoteText}&rdquo;
        </p>
      </div>
    </div>
  );
}
