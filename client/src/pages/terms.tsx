import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";
import { useI18n } from "@/lib/i18n";

export default function Terms() {
  const { t } = useI18n();

  return (
    <div className="mx-auto max-w-4xl px-4 py-8">
      <Link href="/">
        <button className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors mb-6">
          <ArrowLeft className="h-3.5 w-3.5" />
          {t("footer.back")}
        </button>
      </Link>

      <h1 className="text-2xl font-bold mb-8">Handelsbetingelser</h1>

      <div className="space-y-8 text-sm leading-relaxed text-muted-foreground">
        {/* 1. Virksomhedsoplysninger */}
        <section>
          <h2 className="text-base font-semibold text-foreground mb-2">1. Virksomhedsoplysninger</h2>
          <p>
            MEM♡RA (herefter &quot;Memora&quot;) drives af:<br />
            [FIRMAADRESSE]<br />
            CVR-nr.: [CVR-NUMMER]<br />
            E-mail: info@memora-active.com<br />
            Hjemmeside: memora-active.com
          </p>
        </section>

        {/* 2. Priser og betaling */}
        <section>
          <h2 className="text-base font-semibold text-foreground mb-2">2. Priser og betaling</h2>
          <p>
            Alle priser på memora-active.com er angivet i EUR (euro) og er inklusive moms for EU-kunder.
            Eventuelle told- og importafgifter for kunder uden for EU er kundens eget ansvar.
          </p>
          <p className="mt-2">
            Betaling håndteres sikkert via Stripe. Vi accepterer de betalingsmetoder, der er tilgængelige
            gennem Stripe ved checkout, herunder kredit- og debetkort (Visa, Mastercard m.fl.).
          </p>
          <p className="mt-2">
            Beløbet trækkes, når ordren bekræftes. Memora forbeholder sig retten til at annullere ordrer
            ved mistanke om misbrug eller fejl i prisangivelse.
          </p>
        </section>

        {/* 3. Levering */}
        <section>
          <h2 className="text-base font-semibold text-foreground mb-2">3. Levering</h2>
          <p>
            Vores produkter produceres on-demand af vores produktionspartner Contrado i London, Storbritannien.
            Da hvert produkt fremstilles efter bestilling, er den forventede leveringstid 3–5 hverdage fra
            ordrebekræftelse. Levering sker via FedEx eller DHL.
          </p>
          <p className="mt-2">
            Leveringstiden kan variere afhængigt af destination og uforudsete forsinkelser.
            Du modtager en bekræftelse med tracking-oplysninger, når din ordre er afsendt.
          </p>
        </section>

        {/* 4. Forsendelsesomkostninger */}
        <section>
          <h2 className="text-base font-semibold text-foreground mb-2">4. Forsendelsesomkostninger</h2>
          <p>
            Standardfragt: €14,95 per ordre.<br />
            Fri fragt ved ordrer over €100.
          </p>
        </section>

        {/* 5. Fortrydelsesret */}
        <section>
          <h2 className="text-base font-semibold text-foreground mb-2">5. Fortrydelsesret</h2>
          <p>
            I henhold til forbrugeraftaleloven §18–22 har du som forbruger 14 dages fortrydelsesret.
            Fortrydelsesfristen løber fra den dag, du eller en af dig udpeget tredjemand (som ikke er
            transportøren) har fået varen i fysisk besiddelse.
          </p>
          <p className="mt-2">
            For at gøre brug af fortrydelsesretten skal du inden udløbet af fortrydelsesfristen give os
            utvetydig meddelelse herom (f.eks. via e-mail til info@memora-active.com).
          </p>
          <p className="mt-2">
            Varen skal returneres i væsentligt samme stand og mængde, som du modtog den. Varen må
            ikke være brugt, vasket eller på anden måde forringet ud over, hvad der er nødvendigt for
            at fastslå varens art, egenskaber og funktion. Tags skal stadig være påsat.
          </p>
          <p className="mt-2">
            Du bærer selv omkostningerne for returnering af varen.
          </p>
        </section>

        {/* 6. Refundering */}
        <section>
          <h2 className="text-base font-semibold text-foreground mb-2">6. Refundering</h2>
          <p>
            Når vi har modtaget den returnerede vare og godkendt returneringen, refunderer vi
            beløbet inden for 14 dage. Refunderingen sker til den oprindelige betalingsmetode via Stripe.
          </p>
          <p className="mt-2">
            Vi kan tilbageholde refunderingen, indtil vi har modtaget varen retur, eller indtil du har
            dokumenteret, at varen er returneret – alt efter hvad der kommer først.
          </p>
        </section>

        {/* 7. Reklamationsret */}
        <section>
          <h2 className="text-base font-semibold text-foreground mb-2">7. Reklamationsret</h2>
          <p>
            I henhold til dansk købelov har du 2 års reklamationsret fra leveringsdatoen.
            Det betyder, at du kan få varen repareret, ombyttet, pengene tilbage eller et afslag i prisen,
            hvis varen har en mangel. Manglen skal gøres gældende inden for rimelig tid efter, at du
            har opdaget den.
          </p>
          <p className="mt-2">
            Reklamation sker ved henvendelse til info@memora-active.com.
            Ved berettiget reklamation afholder Memora returneringsomkostningerne.
          </p>
        </section>

        {/* 8. Klager */}
        <section>
          <h2 className="text-base font-semibold text-foreground mb-2">8. Klager</h2>
          <p>
            Hvis du ønsker at klage over dit køb, bedes du kontakte os via info@memora-active.com.
            Kan vi ikke finde en løsning, kan du indgive en klage til:
          </p>
          <p className="mt-2">
            Center for Klageløsning<br />
            Nævnenes Hus<br />
            Toldboden 2<br />
            8800 Viborg<br />
            naevneneshus.dk
          </p>
          <p className="mt-2">
            EU-Kommissionens online klageportal kan også anvendes:{" "}
            <a
              href="https://ec.europa.eu/consumers/odr"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-foreground"
            >
              ec.europa.eu/consumers/odr
            </a>
          </p>
        </section>

        {/* 9. Lovvalg */}
        <section>
          <h2 className="text-base font-semibold text-foreground mb-2">9. Lovvalg</h2>
          <p>
            Disse handelsbetingelser er underlagt dansk ret. Eventuelle tvister, som ikke kan løses i
            mindelighed, afgøres ved de danske domstole.
          </p>
        </section>

        {/* 10. Ændringer */}
        <section>
          <h2 className="text-base font-semibold text-foreground mb-2">10. Ændringer</h2>
          <p>
            Memora forbeholder sig retten til at ændre disse handelsbetingelser. Ændringer træder i
            kraft ved offentliggørelse på memora-active.com. Den gældende version af
            handelsbetingelserne fremgår altid af denne side.
          </p>
        </section>

        <p className="text-xs text-muted-foreground/60 pt-4">
          Sidst opdateret: marts 2026
        </p>
      </div>
    </div>
  );
}
