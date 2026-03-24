import { tshirtColors } from "@shared/schema";

interface TshirtPreviewProps {
  colorId: string;
  quoteText: string;
  className?: string;
}

export function TshirtPreview({ colorId, quoteText, className = "" }: TshirtPreviewProps) {
  const color = tshirtColors.find(c => c.id === colorId) || tshirtColors[0];
  const isLight = colorId === "white" || colorId === "heather_gray";
  const textColor = isLight ? "#1a1a1a" : "#FFFFFF";
  const borderColor = isLight ? "border-border" : "border-transparent";

  return (
    <div className={`relative flex items-center justify-center rounded-xl overflow-hidden ${borderColor} border ${className}`}
      style={{ backgroundColor: color.hex, aspectRatio: "3/4" }}
      data-testid={`tshirt-preview-${colorId}`}
    >
      {/* T-shirt shape overlay */}
      <svg
        viewBox="0 0 300 400"
        className="absolute inset-0 w-full h-full"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Shoulders and sleeves */}
        <path
          d="M90 55 L50 80 L30 140 L65 150 L80 100 L80 350 L220 350 L220 100 L235 150 L270 140 L250 80 L210 55"
          stroke={isLight ? "rgba(0,0,0,0.08)" : "rgba(255,255,255,0.1)"}
          strokeWidth="2"
          fill="none"
        />
        {/* Neckline */}
        <path
          d="M90 55 C120 75 180 75 210 55"
          stroke={isLight ? "rgba(0,0,0,0.08)" : "rgba(255,255,255,0.1)"}
          strokeWidth="2"
          fill="none"
        />
      </svg>

      {/* Quote text on the shirt */}
      <div className="relative z-10 px-8 sm:px-10 text-center max-w-[80%]" style={{ marginTop: "10%" }}>
        <p
          className="font-bold leading-tight"
          style={{
            color: textColor,
            fontSize: "clamp(0.75rem, 2vw, 1.1rem)",
            letterSpacing: "-0.01em",
            textShadow: isLight ? "none" : "0 1px 2px rgba(0,0,0,0.2)",
          }}
        >
          &ldquo;{quoteText}&rdquo;
        </p>
      </div>
    </div>
  );
}
