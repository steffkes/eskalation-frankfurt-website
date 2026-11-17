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

// status: "abgelaufen" (grau) · "aktiv" (gold) · ohne = kommt noch (normal)
const gebuehren = [
  { preis: "45 €", label: "Volllast", text: "ab [Datum folgt]" },
  { preis: "40 €", label: "Normalbetrieb", text: "regulär" },
  { preis: "35 €", label: "Anlauf", text: "die ersten X", status: "aktiv" },
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
          Genau das ist der Februar 2027: Wir laufen, wir werten – und wir
          lernen, was funktioniert. Mit so vielen Läufer:innen wie bei einem
          echten Wettkampf, damit die Kinderkrankheiten jetzt auffallen und
          nicht erst später.
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
          Ihr deckt die ganze Bandbreite ab – vom kurzen Sprint bis zum langen
          Ausdauerlauf. Und ihr wisst, dass bei einer Premiere nicht alles nach
          Plan läuft. Genau deshalb seid ihr dabei.
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

      <h2 class="title is-4 mt-6">Was noch offen ist</h2>

      <div class="content">
        <ul>
          <li>Der genaue Samstag im Februar 2027</li>
          <li>Das genaue Zeitfenster</li>
          <li>Wie viele Anmeldungen möglich sind</li>
          <li>Ab wann der Late-Comer-Preis gilt</li>
          <li>Startabstand im Qualifying</li>
          <li>Anzahl der Finalplätze und die Cut-offs im Finale</li>
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

.wettkaempfe {
  list-style: none;
  margin-left: 0;
  border-left: 3px solid #dab15e;
  padding-left: 1rem;
}
</style>
