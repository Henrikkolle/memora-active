import { Link } from "wouter";

export function PerplexityAttribution() {
  return (
    <footer className="w-full py-4 text-center text-xs text-muted-foreground space-y-2">
      <nav className="flex items-center justify-center gap-4">
        <Link href="/terms" className="hover:text-foreground transition-colors">
          Handelsbetingelser
        </Link>
        <span className="text-muted-foreground/40">·</span>
        <Link href="/returns" className="hover:text-foreground transition-colors">
          Returpolitik
        </Link>
        <span className="text-muted-foreground/40">·</span>
        <Link href="/privacy" className="hover:text-foreground transition-colors">
          Privatlivspolitik
        </Link>
      </nav>
      <a
        href="https://www.perplexity.ai/computer"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-foreground transition-colors"
      >
        Created with Perplexity Computer
      </a>
    </footer>
  );
}
