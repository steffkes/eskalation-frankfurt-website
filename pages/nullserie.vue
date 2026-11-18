<script setup>
const nullserieTitel = "Eskalation Frankfurt · Nullserie";
const nullserieText =
  "Der Treppenlauf für Feuerwehrleute gegen die Rolltreppe – Februar 2027 im MyZeil Frankfurt. Die erste Ausgabe: echt, aber noch nicht fertig. Nur auf Einladung.";

useSeoMeta({
  title: "Nullserie",
  robots: "noindex, nofollow",
  description: nullserieText,
  ogTitle: nullserieTitel,
  ogDescription: nullserieText,
  twitterTitle: nullserieTitel,
  twitterDescription: nullserieText,
});

const wettkaempfe = [
  { name: "Schanzenlauf Oberstdorf", jahr: "2023" },
  { name: "Schachmatt Ulm", jahr: "2024" },
  { name: "Fire Trail Nesselwang", jahr: "2025" },
  { name: "Schachmatt Ulm", jahr: "2026" },
  { name: "Münsterturmlauf Ulm", jahr: "2026" },
  { name: "Munich Sunrise", jahr: "2026" },
  { name: "Fire Trail Nesselwang", jahr: "2026" },
];

// Kaltstart: wie oft gebucht, wann zuletzt – nur im Browser, damit die
// Seite nicht auf Stripe wartet; bei Fehler oder 0 wird nichts angezeigt
const { data: kaltstart } = useFetch("/api/kaltstart", {
  server: false,
  lazy: true,
});

const relativ = new Intl.RelativeTimeFormat("de", { numeric: "auto" });
const zuletzt = computed(() => {
  if (!kaltstart.value?.last) return null;
  const sekunden = (new Date(kaltstart.value.last) - Date.now()) / 1000;
  const stufen = [
    [60, "second"],
    [60, "minute"],
    [24, "hour"],
    [7, "day"],
    [4.35, "week"],
    [12, "month"],
    [Infinity, "year"],
  ];
  let wert = sekunden;
  for (const [teiler, einheit] of stufen) {
    if (Math.abs(wert) < teiler) {
      return relativ.format(Math.round(wert), einheit);
    }
    wert /= teiler;
  }
});

// status: "abgelaufen" (grau) · "aktiv" (gold) · ohne = kommt noch (normal)
const gebuehren = [
  { preis: "45 €", label: "Volllast", text: "ab 01.01.*" },
  { preis: "40 €", label: "Normalbetrieb", text: "bis 31.12.*" },
  { preis: "35 €", label: "Anlauf", text: "bis 13.12.*" },
];
</script>

<template>
  <section class="section">
    <div class="container is-max-desktop">
      <div class="content">
        <p class="is-size-4 has-text-weight-bold mb-3">
          Die Nullserie.
        </p>

        <p class="is-size-5">
          In der Industrie heißen so die ersten Stücke vom Band, bevor in Serie
          gefertigt wird. Echt, aber noch nicht fertig.
        </p>

        <p>
          Die Nullserie ist ein echter Wettkampf – mit Zeitnahme, Wertung und
          Siegerehrung, in Größe und Ablauf so, wie er später sein soll. Aber
          sie ist die erste ihrer Art.
          <strong>Rechne mit Ruckeln:</strong> Startzeiten verschieben sich,
          Regeln werden vor Ort nachjustiert, nicht jeder Ablauf sitzt beim
          ersten Mal.
        </p>

        <p>
          Genau dafür ist sie da: Die Kinderkrankheiten sollen jetzt auffallen
          – nicht erst, wenn die Serie läuft.
        </p>
      </div>

      <div class="columns is-mobile is-gapless fakten mb-6">
        <div class="column has-text-centered">
          <p class="fakt-zahl">Feb '27</p>
          <p class="fakt-text">ein Samstag</p>
        </div>
        <div class="column has-text-centered">
          <p class="fakt-zahl">10–14</p>
          <p class="fakt-text">Uhr · geplant</p>
        </div>
        <div class="column has-text-centered">
          <p class="fakt-zahl">MyZeil</p>
          <p class="fakt-text">Frankfurt</p>
        </div>
      </div>

      <h2 class="title is-4">Nur auf Einladung</h2>

      <div class="content">
        <p>
          Mitlaufen kann, wer schon bei einem dieser Wettkämpfe am Start war:
        </p>

        <ul class="wettkaempfe">
          <li v-for="w in wettkaempfe" :key="w.name + w.jahr">
            <strong>{{ w.name }} {{ w.jahr }}</strong>
          </li>
        </ul>

        <p>
          <strong>Warum nur ihr?</strong> Jeder dieser Wettkämpfe war neu, als
          ihr ihn gelaufen seid. Ihr wisst, dass beim ersten Mal nicht alles
          glatt läuft – und seid trotzdem gestartet. Genau diese Einstellung
          braucht die Nullserie.
        </p>

        <p>
          Und es ist unser Dankeschön: Wer schon mal bei uns am Start war, darf
          als Erstes ran. <strong>Bevor die Treppe allen anderen
          entgegenfährt, fährt sie euch entgegen.</strong>
        </p>
      </div>

      <h2 class="title is-4 mt-6">G 26.3 – für alle</h2>

      <div class="content">
        <p>
          Gelaufen wird ohne Atemschutz. Die G 26.3 brauchst du trotzdem:
          <strong>Jede:r Teilnehmer:in muss eine gültige G 26.3
          vorweisen.</strong>
        </p>
        <p>
          Normalerweise verlangen wir sie nur in der Kategorie mit PA. Aber eine
          Treppe, die dir entgegenkommt, geht ans Limit – deshalb diesmal für
          alle.
        </p>
      </div>

      <h2 class="title is-4 mt-6">Der Takt</h2>

      <div class="content">
        <p>
          Die Treppe gehört uns nicht allein. Wir laufen im Wechsel mit dem
          laufenden Betrieb: <strong>15 Minuten wir, 15 Minuten Besucher.</strong>
          Dazwischen wird die Treppe geleert und umgestellt.
        </p>
      </div>

      <h2 class="title is-4 mt-6">Zwei Runden gegen die Treppe</h2>

      <div class="content">
        <h3 class="is-size-5">1. Qualifying – die Treppe steht</h3>
        <p>
          Du läufst sie hoch wie eine normale Treppe. Wahrscheinlich sind dabei
          zwei Läufer:innen gleichzeitig unterwegs: Der nächste Start erfolgt
          nach einer festen Zeit – oder, wenn du eine Markierung auf halber
          oder Dreiviertel-Höhe passierst.
          <span class="tag is-warning is-light">wird festgelegt</span>
        </p>

        <h3 class="is-size-5">2. Finale – die Treppe fährt abwärts</h3>
        <p>
          Jetzt fährt sie dir entgegen. Immer nur eine Person auf der Treppe.
          Die Startreihenfolge ergibt sich aus dem Qualifying:
          <strong>die schnellste Zeit startet zuerst</strong>, danach
          absteigend.
        </p>
        <p>
          Wie viele ins Finale kommen, wissen wir ehrlich gesagt noch nicht. Es
          hängt davon ab, wie lange die Läufer:innen vor dir brauchen – und das
          finden wir bei der Nullserie heraus.
          <span class="tag is-warning is-light">stellt sich heraus</span>
        </p>
      </div>

      <QuoteElement name="Marcus" department="FF Taufkirchen/Vils">
        Ja bist du deppert 🙈
      </QuoteElement>

      <div class="content">
        <p class="mb-2">
          <strong>Wann die Treppe gewinnt</strong>
          <span class="tag is-warning is-light">in Überlegung</span>
        </p>
        <ul>
          <li>
            Wer nach <strong>einer Minute</strong> die Hälfte noch nicht
            erreicht hat.
          </li>
          <li>
            Wer stehen bleibt, wird angezählt: Nach
            <strong>fünf Sekunden ohne Fortschritt</strong> ist der Lauf
            vorbei.
          </li>
        </ul>

        <p>
          <strong>Die Treppe läuft immer weiter.</strong> Wer raus ist oder
          abbricht: stehen bleiben, am Handlauf festhalten, mitfahren lassen.
          Die Treppe bringt dich zurück zum Start und macht den Weg frei für die
          Nächsten.
        </p>
      </div>

      <h2 class="title is-4 mt-6">Wertung</h2>

      <div class="content">
        <p>
          Ein Wettbewerb: <strong>ohne PA</strong>. Gewertet wird getrennt nach
          <strong>Frauen und Männern</strong>, jeweils Platz 1 bis 3.
        </p>
        <p>
          Gut möglich, dass wir die Männer noch weiter unterteilen.
          <span class="tag is-warning is-light">in Überlegung</span>
        </p>
      </div>

      <h2 class="title is-4 mt-6">Startgebühr</h2>

      <div class="columns is-mobile is-gapless fakten mb-3">
        <div
          v-for="g in gebuehren"
          :key="g.preis"
          class="column has-text-centered gebuehr"
          :class="g.status"
        >
          <p class="fakt-label">{{ g.label || " " }}</p>
          <p class="fakt-zahl">{{ g.preis }}</p>
          <p class="fakt-text">{{ g.text }}</p>
        </div>
      </div>

      <p class="is-size-7 has-text-grey">
        Je früher du dich anmeldest, desto günstiger. Wer zu spät kommt, zahlt
        drauf.<br />
        * Vorläufig. Sobald der Wettkampftag feststeht, passen wir die Fristen
        an.
      </p>

      <div class="kaltstart mt-5">
        <p class="kaltstart-kopf">
          <span class="fakt-label">Nur jetzt</span>
          <span class="kaltstart-titel">Kaltstart</span>
          <span class="kaltstart-preis">30 €</span>
        </p>

        <div class="content">
          <p>
            Noch früher geht's nicht: Die Registrierung steht noch nicht – wer
            uns jetzt schon vertraut, zahlt am wenigsten.
          </p>
          <ul>
            <li>
              Gilt als <strong>volle Startgebühr</strong> – für die Nullserie
              2027 oder den Wettkampf 2028.
            </li>
            <li>
              Du bekommst einen Gutscheincode und zahlst damit bei der
              Registrierung.
            </li>
            <li>
              Gibt es nur, bis die Registrierung steht. Danach gelten die Preise
              oben.
            </li>
            <li>
              Kann die Veranstaltung nicht stattfinden, bekommst du die 30&nbsp;€
              komplett zurück. Persönliche Gründe sind nicht abgedeckt – dafür
              kannst du ihn auch 2028 einlösen.
            </li>
          </ul>
        </div>

        <p v-if="kaltstart?.count" class="kaltstart-stand mt-4">
          <strong>{{ kaltstart.count }}×</strong> gebucht · zuletzt
          {{ zuletzt }}
        </p>

        <a
          href="https://buy.stripe.com/3cIeVc8pgeGR7la9M78ww00"
          class="button is-medium is-fullwidth cta mt-4"
        >
          Kaltstart sichern · 30&nbsp;€
        </a>
        <p class="is-size-7 has-text-grey has-text-centered mt-2">
          Bezahlt wird sicher über Stripe.
        </p>
      </div>

      <h2 class="title is-4 mt-6">Was noch offen ist</h2>

      <div class="content">
        <ul>
          <li>Der genaue Samstag im Februar 2027</li>
          <li>Das genaue Zeitfenster</li>
          <li>Wie viele Anmeldungen möglich sind</li>
          <li>Ab wann der Volllast-Preis gilt</li>
          <li>Startabstand im Qualifying</li>
          <li>Anzahl der Finalplätze und die Cut-offs im Finale</li>
          <li>Ob die Männer in weitere Kategorien unterteilt werden</li>
        </ul>

        <p>
          Das ist der Deal der Nullserie: Du bringst Flexibilität mit, wir
          bringen eine Treppe, die es so noch nie gab.
        </p>

        <p class="is-size-5 has-text-weight-bold mt-5">
          Ist sie zu stark, bist du zu schwach. Finden wir's raus 🦾
        </p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.fakten {
  border-top: 3px solid #dab15e;
  border-bottom: 3px solid #dab15e;
  padding: 0.75rem 0;
}

.fakt-zahl {
  font-size: clamp(1.3rem, 6.5vw, 2rem);
  white-space: nowrap;
  font-weight: 800;
  line-height: 1.1;
  color: #8c6a22;
}

.fakt-text {
  font-size: 0.8rem;
  color: #7a7a7a;
}

.gebuehr.abgelaufen {
  opacity: 0.4;
}

.gebuehr .fakt-label {
  display: inline-block;
  font-size: 0.7rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  padding: 0.1em 0.5em;
  margin-bottom: 0.2rem;
  border-radius: 3px;
  background: #f4f4f5;
  color: #4a4a4a;
}

.gebuehr.aktiv .fakt-label {
  background: #dab15e;
  color: #09090b;
}

.gebuehr.aktiv .fakt-zahl {
  font-size: clamp(1.7rem, 8.5vw, 2.6rem);
}

.gebuehr.aktiv .fakt-text {
  color: #09090b;
  font-weight: 600;
}

.cta {
  background: #dab15e;
  border-color: #dab15e;
  color: #09090b;
  font-weight: 700;
}

.cta:hover {
  background: #c99c3f;
  color: #09090b;
}

.kaltstart-stand {
  text-align: center;
  font-size: 0.9rem;
  color: #4a4a4a;
}

.kaltstart-stand strong {
  color: #8c6a22;
}

.kaltstart {
  border: 3px solid #dab15e;
  border-radius: 6px;
  padding: 1rem 1.25rem;
}

.kaltstart-kopf {
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  gap: 0.25rem 0.75rem;
  margin-bottom: 0.75rem;
}

.kaltstart .fakt-label {
  font-size: 0.7rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  padding: 0.1em 0.5em;
  border-radius: 3px;
  background: #dab15e;
  color: #09090b;
}

.kaltstart-titel {
  font-size: 1.25rem;
  font-weight: 800;
}

.kaltstart-preis {
  margin-left: auto;
  font-size: clamp(1.7rem, 8.5vw, 2.6rem);
  font-weight: 800;
  line-height: 1;
  color: #8c6a22;
}

.wettkaempfe {
  list-style: none;
  margin-left: 0;
  border-left: 3px solid #dab15e;
  padding-left: 1rem;
}
</style>
