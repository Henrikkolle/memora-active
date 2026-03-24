import { Link } from "wouter";
import { ShoppingBag, Sun, Moon, ChevronDown } from "lucide-react";
import { useCart } from "@/lib/cart-context";
import { useTheme } from "@/lib/theme-context";
import { useI18n, locales, type Locale } from "@/lib/i18n";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

// MEM♡RA inline SVG logo — heart replaces the O
function MemoraLogo({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Memora"
      role="img"
    >
      {/* M */}
      <text x="0" y="25" fill="currentColor" fontFamily="'General Sans', sans-serif" fontWeight="700" fontSize="26" letterSpacing="3">M</text>
      {/* E */}
      <text x="28" y="25" fill="currentColor" fontFamily="'General Sans', sans-serif" fontWeight="700" fontSize="26" letterSpacing="3">E</text>
      {/* M */}
      <text x="52" y="25" fill="currentColor" fontFamily="'General Sans', sans-serif" fontWeight="700" fontSize="26" letterSpacing="3">M</text>
      {/* Heart (replacing O) */}
      <path
        d="M93 8c-2.5-3-6.5-3.5-9-1.5-2.8 2.2-3 5.8-0.8 8.8L93 27l9.8-11.7c2.2-3 2-6.6-0.8-8.8-2.5-2-6.5-1.5-9 1.5z"
        fill="#E8A0BF"
        stroke="#E8A0BF"
        strokeWidth="0.5"
      />
      {/* R */}
      <text x="112" y="25" fill="currentColor" fontFamily="'General Sans', sans-serif" fontWeight="700" fontSize="26" letterSpacing="3">R</text>
      {/* A */}
      <text x="136" y="25" fill="currentColor" fontFamily="'General Sans', sans-serif" fontWeight="700" fontSize="26" letterSpacing="3">A</text>
    </svg>
  );
}

export function Header() {
  const { totalItems } = useCart();
  const { theme, toggleTheme } = useTheme();
  const { locale, setLocale } = useI18n();

  const current = locales.find(l => l.code === locale)!;

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link href="/" className="flex items-center gap-2 no-underline">
          <MemoraLogo className="h-7 w-auto text-foreground" />
        </Link>

        <nav className="flex items-center gap-1">
          {/* Language selector */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                size="sm"
                className="h-9 gap-1.5 px-2.5 text-sm font-medium"
                data-testid="language-selector"
              >
                <span className="text-base leading-none">{current.flag}</span>
                <span className="hidden sm:inline text-xs">{current.code.toUpperCase()}</span>
                <ChevronDown className="h-3 w-3 opacity-60" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="min-w-[160px]">
              {locales.map(l => (
                <DropdownMenuItem
                  key={l.code}
                  onClick={() => setLocale(l.code)}
                  className={`gap-2.5 cursor-pointer ${locale === l.code ? "font-semibold bg-accent" : ""}`}
                  data-testid={`lang-${l.code}`}
                >
                  <span className="text-base leading-none">{l.flag}</span>
                  <span className="text-sm">{l.name}</span>
                  <span className="ml-auto text-xs text-muted-foreground">EUR</span>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            aria-label="Toggle theme"
            data-testid="theme-toggle"
            className="h-9 w-9"
          >
            {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </Button>

          <Link href="/cart">
            <Button variant="ghost" size="icon" className="relative h-9 w-9" data-testid="cart-button">
              <ShoppingBag className="h-4 w-4" />
              {totalItems > 0 && (
                <span className="absolute -right-0.5 -top-0.5 flex items-center justify-center rounded-full bg-primary text-[10px] font-semibold text-primary-foreground min-w-[18px] h-[18px]">
                  {totalItems}
                </span>
              )}
            </Button>
          </Link>
        </nav>
      </div>
    </header>
  );
}
