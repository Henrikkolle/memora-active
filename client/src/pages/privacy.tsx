import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";
import { useI18n } from "@/lib/i18n";

export default function Privacy() {
  const { t } = useI18n();

  return (
    <div className="mx-auto max-w-4xl px-4 py-8">
      <Link href="/">
        <button className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors mb-6">
          <ArrowLeft className="h-3.5 w-3.5" />
          {t("footer.back")}
        </button>
      </Link>

      <h1 className="text-2xl font-bold mb-8">Privatlivspolitik</h1>

      <div className="space-y-8 text-sm leading-relaxed text-muted-foreground">
        {/* 1. Dataansvarlig */}
        <section>
          <h2 className="text-base font-semibold text-foreground mb-2">1. Dataansvarlig</h2>
          <p>
            Den dataansvarlige for behandling af personoplysninger er:<br />
            MEM♡RA<br />
            Christiansholms Tværvej 10, 2930 Klampenborg<br />
            CVR-nr.: 38723960<br />
            E-mail: info@memora-active.com
          </p>
        </section>

        {/* 2. Hvilke oplysninger indsamler vi */}
        <section>
          <h2 className="text-base font-semibold text-foreground mb-2">2. Hvilke oplysninger indsamler vi</h2>
          <p>Når du handler hos os, indsamler vi følgende personoplysninger:</p>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>Navn</li>
            <li>E-mailadresse</li>
            <li>Telefonnummer</li>
            <li>Leveringsadresse</li>
            <li>Betalingsoplysninger (behandles af Stripe – vi opbevarer ikke kortdata)</li>
            <li>Ordrehistorik</li>
          </ul>
          <p className="mt-2">
            Derudover anvender vi nødvendige cookies for at sikre hjemmesidens funktionalitet
            (se afsnit 9 om cookies).
          </p>
        </section>

        {/* 3. Formål med behandlingen */}
        <section>
          <h2 className="text-base font-semibold text-foreground mb-2">3. Formål med behandlingen</h2>
          <p>Vi behandler dine personoplysninger til følgende formål:</p>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>Behandling og levering af din ordre</li>
            <li>Kommunikation om din ordre (ordrebekræftelse, forsendelsesoplysninger)</li>
            <li>Kundeservice og håndtering af returneringer/reklamationer</li>
            <li>Overholdelse af bogføringslovgivningen</li>
            <li>Markedsføring (kun med dit udtrykkelige samtykke)</li>
          </ul>
        </section>

        {/* 4. Retsgrundlag */}
        <section>
          <h2 className="text-base font-semibold text-foreground mb-2">4. Retsgrundlag</h2>
          <p>Vores behandling af dine personoplysninger sker på følgende grundlag:</p>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>
              <span className="font-medium text-foreground">Kontraktopfyldelse</span> (GDPR art. 6, stk. 1, litra b) –
              nødvendig for at opfylde din ordre
            </li>
            <li>
              <span className="font-medium text-foreground">Retlig forpligtelse</span> (GDPR art. 6, stk. 1, litra c) –
              bogføringsloven kræver opbevaring af transaktionsdata
            </li>
            <li>
              <span className="font-medium text-foreground">Legitim interesse</span> (GDPR art. 6, stk. 1, litra f) –
              kundeservice, svindelforebyggelse og forbedring af vores tjenester
            </li>
            <li>
              <span className="font-medium text-foreground">Samtykke</span> (GDPR art. 6, stk. 1, litra a) –
              markedsføring og nyhedsbreve (du kan altid trække dit samtykke tilbage)
            </li>
          </ul>
        </section>

        {/* 5. Databehandlere og tredjeparter */}
        <section>
          <h2 className="text-base font-semibold text-foreground mb-2">5. Databehandlere og tredjeparter</h2>
          <p>Vi deler dine personoplysninger med følgende tredjeparter i det omfang, det er nødvendigt:</p>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>
              <span className="font-medium text-foreground">Stripe</span> – betalingsbehandling.
              Stripe behandler dine betalingsoplysninger sikkert i overensstemmelse med PCI DSS-standarder.
              Læs mere på{" "}
              <a
                href="https://stripe.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-foreground"
              >
                stripe.com/privacy
              </a>
            </li>
            <li>
              <span className="font-medium text-foreground">Contrado</span> (London, UK) – vores
              produktions- og fulfillment-partner. Contrado modtager de nødvendige leveringsoplysninger
              for at producere og sende din ordre.
            </li>
            <li>
              <span className="font-medium text-foreground">FedEx / DHL</span> – forsendelse af ordrer.
              Transportøren modtager navn og leveringsadresse.
            </li>
          </ul>
        </section>

        {/* 6. Overførsel til tredjelande */}
        <section>
          <h2 className="text-base font-semibold text-foreground mb-2">6. Overførsel til tredjelande</h2>
          <p>
            Dine data kan overføres til lande uden for EU/EØS i forbindelse med vores
            databehandlere (f.eks. Stripe i USA). Sådanne overførsler sker på grundlag af
            EU-Kommissionens standardkontraktbestemmelser (SCC) eller tilsvarende
            beskyttelsesforanstaltninger i henhold til GDPR kapitel V.
          </p>
        </section>

        {/* 7. Opbevaringsperiode */}
        <section>
          <h2 className="text-base font-semibold text-foreground mb-2">7. Opbevaringsperiode</h2>
          <p>
            Ordredata og transaktionsoplysninger opbevares i 5 år i henhold til den danske bogføringslov
            (bogføringsloven §10). Herefter slettes data.
          </p>
          <p className="mt-2">
            Kundekontooplysninger opbevares, så længe din konto er aktiv. Samtykke til markedsføring
            opbevares, indtil du trækker det tilbage.
          </p>
        </section>

        {/* 8. Dine rettigheder */}
        <section>
          <h2 className="text-base font-semibold text-foreground mb-2">8. Dine rettigheder</h2>
          <p>I henhold til GDPR har du følgende rettigheder:</p>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li><span className="font-medium text-foreground">Ret til indsigt</span> – du kan bede om en kopi af de oplysninger, vi har om dig</li>
            <li><span className="font-medium text-foreground">Ret til berigtigelse</span> – du kan bede os rette urigtige oplysninger</li>
            <li><span className="font-medium text-foreground">Ret til sletning</span> – du kan bede os slette dine oplysninger (med forbehold for lovmæssige opbevaringskrav)</li>
            <li><span className="font-medium text-foreground">Ret til dataportabilitet</span> – du kan bede om at modtage dine data i et struktureret, maskinlæsbart format</li>
            <li><span className="font-medium text-foreground">Ret til indsigelse</span> – du kan gøre indsigelse mod behandling baseret på legitim interesse</li>
            <li><span className="font-medium text-foreground">Ret til begrænsning</span> – du kan bede om, at vi begrænser behandlingen af dine data</li>
          </ul>
          <p className="mt-2">
            For at udøve dine rettigheder, kontakt os på info@memora-active.com.
            Vi besvarer henvendelser inden for 30 dage.
          </p>
        </section>

        {/* 9. Cookies */}
        <section>
          <h2 className="text-base font-semibold text-foreground mb-2">9. Cookies</h2>
          <p>
            memora-active.com anvender udelukkende nødvendige cookies, der er påkrævet for
            hjemmesidens tekniske funktionalitet:
          </p>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>Sessionscookies for indkøbskurv og checkout</li>
            <li>Stripe-cookies til sikker betalingsbehandling</li>
          </ul>
          <p className="mt-2">
            Vi anvender ikke tracking-cookies, reklamecookies eller tredjeparts analytics-cookies.
            Da vi kun anvender teknisk nødvendige cookies, kræves der ikke samtykke i henhold til
            cookiebekendtgørelsen.
          </p>
        </section>

        {/* 10. Klageadgang */}
        <section>
          <h2 className="text-base font-semibold text-foreground mb-2">10. Klageadgang</h2>
          <p>
            Hvis du er utilfreds med vores behandling af dine personoplysninger, har du ret til at
            indgive en klage til:
          </p>
          <p className="mt-2">
            Datatilsynet<br />
            Carl Jacobsens Vej 35<br />
            2500 Valby<br />
            Telefon: 33 19 32 00<br />
            E-mail: dt@datatilsynet.dk<br />
            Hjemmeside:{" "}
            <a
              href="https://www.datatilsynet.dk"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-foreground"
            >
              datatilsynet.dk
            </a>
          </p>
        </section>

        {/* 11. Kontakt */}
        <section>
          <h2 className="text-base font-semibold text-foreground mb-2">11. Kontakt</h2>
          <p>
            Har du spørgsmål til vores privatlivspolitik, er du velkommen til at kontakte os på:{" "}
            <a
              href="mailto:info@memora-active.com"
              className="underline hover:text-foreground"
            >
              info@memora-active.com
            </a>
          </p>
        </section>

        <p className="text-xs text-muted-foreground/60 pt-4">
          Sidst opdateret: marts 2026
        </p>
      </div>
    </div>
  );
}
