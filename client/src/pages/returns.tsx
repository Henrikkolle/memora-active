import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";
import { useI18n } from "@/lib/i18n";

export default function Returns() {
  const { t } = useI18n();

  return (
    <div className="mx-auto max-w-4xl px-4 py-8">
      <Link href="/">
        <button className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors mb-6">
          <ArrowLeft className="h-3.5 w-3.5" />
          {t("footer.back")}
        </button>
      </Link>

      <h1 className="text-2xl font-bold mb-8">Returpolitik</h1>

      <div className="space-y-8 text-sm leading-relaxed text-muted-foreground">
        {/* 1. Fortrydelsesret */}
        <section>
          <h2 className="text-base font-semibold text-foreground mb-2">1. 14 dages fortrydelsesret</h2>
          <p>
            Som forbruger har du i henhold til forbrugeraftaleloven ret til at fortryde dit køb inden
            for 14 dage. Fristen regnes fra den dag, du modtager din vare.
          </p>
          <p className="mt-2">
            Fortrydelsesretten gælder, uanset om varen er produceret on-demand,
            så længe den ikke er taget i brug.
          </p>
        </section>

        {/* 2. Sådan returnerer du */}
        <section>
          <h2 className="text-base font-semibold text-foreground mb-2">2. Sådan returnerer du</h2>
          <p>
            For at starte en returnering skal du kontakte os inden for fortrydelsesfristen på:
          </p>
          <p className="mt-2 font-medium text-foreground">
            info@memora-active.com
          </p>
          <p className="mt-2">
            Angiv dit ordrenummer og årsagen til returneringen. Vi sender dig herefter en returvejledning
            med returadresse.
          </p>
        </section>

        {/* 3. Betingelser for returnering */}
        <section>
          <h2 className="text-base font-semibold text-foreground mb-2">3. Betingelser for returnering</h2>
          <p>For at vi kan godkende din returnering, skal følgende være opfyldt:</p>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>Varen må ikke være brugt, vasket eller på anden måde beskadiget</li>
            <li>Alle originale tags og mærkater skal stadig være påsat</li>
            <li>Varen skal returneres i originalemballagen, hvis muligt</li>
          </ul>
          <p className="mt-2">
            Du må gerne prøve varen, som du ville i en fysisk butik, men den må ikke bære
            tegn på brug ud over dette.
          </p>
        </section>

        {/* 4. Fragtomkostninger ved returnering */}
        <section>
          <h2 className="text-base font-semibold text-foreground mb-2">4. Fragtomkostninger ved returnering</h2>
          <p>
            Du bærer selv omkostningerne for returneringen. Vi anbefaler, at du sender pakken med
            tracking, så du har dokumentation for afsendelsen.
          </p>
        </section>

        {/* 5. Refundering */}
        <section>
          <h2 className="text-base font-semibold text-foreground mb-2">5. Refundering</h2>
          <p>
            Når vi har modtaget og godkendt din returnering, refunderer vi beløbet inden for 14 dage.
            Refunderingen sker til den oprindelige betalingsmetode via Stripe.
          </p>
          <p className="mt-2">
            Refunderingen inkluderer produktprisen. Eventuelle fragtomkostninger fra den oprindelige
            ordre refunderes kun, hvis hele ordren returneres, og kun svarende til den billigste
            standardlevering.
          </p>
        </section>

        {/* 6. Beskadigede eller defekte varer */}
        <section>
          <h2 className="text-base font-semibold text-foreground mb-2">6. Beskadigede eller defekte varer</h2>
          <p>
            Hvis du modtager en beskadiget eller defekt vare, skal du kontakte os hurtigst muligt på
            info@memora-active.com med billeder af skaden/defekten og dit ordrenummer.
          </p>
          <p className="mt-2">
            Ved berettigede reklamationer afholder Memora alle returneringsomkostninger.
            Du vil modtage enten en ny vare eller fuld refundering – efter dit ønske.
          </p>
        </section>

        {/* 7. Reklamationsret */}
        <section>
          <h2 className="text-base font-semibold text-foreground mb-2">7. 2 års reklamationsret</h2>
          <p>
            I henhold til dansk købelov har du 2 års reklamationsret fra leveringsdatoen.
            Reklamationsretten dækker mangler, der var til stede på leveringstidspunktet.
          </p>
          <p className="mt-2">
            Reklamation sker ved henvendelse til info@memora-active.com. Vi vurderer reklamationen
            og tilbyder reparation, ombytning, afslag i prisen eller fuld refundering i overensstemmelse
            med købeloven.
          </p>
        </section>

        {/* 8. Kontakt */}
        <section>
          <h2 className="text-base font-semibold text-foreground mb-2">8. Kontakt</h2>
          <p>
            Har du spørgsmål til vores returpolitik? Kontakt os gerne på:{" "}
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
