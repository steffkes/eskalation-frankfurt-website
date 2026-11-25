<script setup>
const titel = "Eskalation · Regeln & Wertung";
const text =
  "So wird bei Eskalation gelaufen und gewertet: Kalibrierung auf der stehenden Treppe, Abnahme gegen die laufende Treppe, Feierabend zur festen Uhrzeit.";

useSeoMeta({
  title: "Regeln & Wertung",
  robots: "noindex, nofollow",
  description: text,
  ogTitle: titel,
  ogDescription: text,
  twitterTitle: titel,
  twitterDescription: text,
});
</script>

<template>
  <section class="section">
    <div class="container is-max-desktop">
      <div class="content">
        <p class="is-size-4 has-text-weight-bold mb-3">Regeln &amp; Wertung</p>

        <p class="is-size-5">
          Zwei Läufe, zwei Wertungen, ein Feierabend. Das gilt für jede Ausgabe
          von Eskalation – von der Nullserie bis zum Regelbetrieb.
        </p>
      </div>

      <div class="columns is-mobile is-gapless ablauf mb-6">
        <div class="column has-text-centered">
          <p class="ablauf-nr">1</p>
          <p class="ablauf-name">Kalibrierung</p>
          <p class="ablauf-text">die Treppe steht</p>
        </div>
        <div class="column has-text-centered">
          <p class="ablauf-nr">2</p>
          <p class="ablauf-name">Abnahme</p>
          <p class="ablauf-text">die Treppe fährt abwärts</p>
        </div>
        <div class="column has-text-centered">
          <p class="ablauf-nr">⏻</p>
          <p class="ablauf-name">Feierabend</p>
          <p class="ablauf-text">danach startet niemand mehr</p>
        </div>
      </div>

      <h2 class="title is-4">Ausrüstung: ohne Atemschutz</h2>

      <div class="content">
        <p>
          Eskalation gibt es nur in einer Form:
          <strong>ohne Atemschutz.</strong> Du läufst in kompletter
          persönlicher Schutzausrüstung, das Atemschutzgerät geschultert auf dem
          Rücken – aber die Maske nicht aufgesetzt und deshalb auch kein
          Lungenautomat.
        </p>
        <ul>
          <li>Einsatzstiefel nach DIN EN 345-2 / S3 oder gleichwertig</li>
          <li>
            Einsatzjacke und Einsatzhose nach DIN EN 469, geeignet für den
            Innenangriff
          </li>
          <li>Feuerwehrschutzhandschuhe nach DIN EN 659 – keine THL-Handschuhe</li>
          <li>Feuerwehrhelm</li>
          <li>
            Atemschutzgerät (Pressluftatmer) auf dem Rücken – bring dein eigenes
            mit
          </li>
        </ul>
        <p>
          THW: kompletter Multifunktionaler Einsatzschutzanzug (MEA), Variante
          Atemschutzgeräteträger, mit Innenhose.
        </p>

        <p class="mb-2"><strong>G 26.3 – für alle</strong></p>
        <p>
          <strong>Gültige G 26.3 – oder kein Start.</strong> Auch ohne
          Atemschutz. Bei anderen Wettkämpfen brauchst du sie nur mit Maske.
          Bei Eskalation immer: Eine Treppe, die dir entgegenkommt, geht ans
          Limit.
        </p>

        <p class="mb-2"><strong>Was nicht mitläuft</strong></p>
        <ul>
          <li>Haltegurt (Koppel) und Helmlampe</li>
          <li>
            Zubehör wie Keile, Karabiner, Leuchten oder Atemschutz-Tally
          </li>
          <li>
            Kameras nur in der passenden Halterung, fest und gegen Abfallen
            gesichert – keine Eigenbauten
          </li>
        </ul>
        <p>
          Vor dem Start schauen wir uns deine Ausrüstung an. Was beim
          Wackeltest nicht hält, kommt ab. Wer unterwegs Teile seiner
          Ausrüstung ablegt oder daran herummanipuliert, wird nicht gewertet.
        </p>
      </div>

      <h2 class="title is-4 mt-6">1. Kalibrierung</h2>

      <div class="content">
        <p>
          Alle laufen. Einzeln, gegen die Uhr, die stehende Treppe hoch.
          <strong>Deine Zeit legt deinen Startplatz in der Abnahme fest.</strong>
        </p>
        <ul>
          <li>
            <strong>Cut-off:</strong> Wer nicht rechtzeitig oben ist, hat keine
            gültige Zeit.
            <span class="tag is-warning is-light">wird festgelegt</span>
          </li>
          <li>
            Ohne gültige Kalibrierungszeit gibt es keinen Start in der Abnahme.
          </li>
        </ul>
      </div>

      <h2 class="title is-4 mt-6">2. Abnahme</h2>

      <div class="content">
        <p>
          Jetzt fährt sie dir entgegen. Immer nur eine Person auf der Treppe.
        </p>
        <p>
          Frauen und Männer haben je eine Startliste, sortiert nach
          Kalibrierungszeit. <strong>Gestartet wird abwechselnd aus beiden,
          jeweils die Schnellsten zuerst:</strong> schnellste Frau, schnellster
          Mann, zweitschnellste Frau, zweitschnellster Mann – und so weiter. Ist
          eine Liste durch, geht es mit der anderen allein weiter.
        </p>
        <p>
          Gleiche Kalibrierungszeit? Dann startet die niedrigere Startnummer
          zuerst.
        </p>

        <p class="mb-2"><strong>Wann die Treppe gewinnt</strong></p>
        <ul>
          <li>
            Wer nach <strong>60 Sekunden</strong> die Hälfte noch nicht
            erreicht hat.
          </li>
          <li>
            Wer stehen bleibt, wird angezählt: Nach
            <strong>fünf Sekunden ohne sichtbaren Fortschritt</strong> ist der
            Lauf vorbei.
          </li>
        </ul>
        <p>
          <strong>Die Treppe läuft immer weiter.</strong> Wer raus ist oder
          abbricht: stehen bleiben, am Handlauf festhalten, mitfahren lassen.
        </p>
      </div>

      <h2 class="title is-4 mt-6">Feierabend</h2>

      <div class="content">
        <p>
          Zu einer festen Uhrzeit ist Schluss. Ab dann startet niemand mehr zur
          Abnahme.
          <span class="tag is-warning is-light">Uhrzeit je Wettkampf</span>
        </p>
        <ul>
          <li>
            <strong>Ein Anrecht auf einen Start in der Abnahme gibt es
            nicht.</strong> Je schneller deine Kalibrierung, desto sicherer dein
            Start.
          </li>
          <li>Wer bis Feierabend nicht gestartet ist, steht in der Abnahme mit DNS.</li>
          <li>Ein Lauf, der vor Feierabend gestartet ist, wird zu Ende gelaufen und gewertet.</li>
        </ul>
      </div>

      <h2 class="title is-4 mt-6">Ergebnislisten</h2>

      <div class="content">
        <p>
          Kalibrierung und Abnahme werden <strong>getrennt gewertet</strong>,
          jeweils für Frauen und Männer. Eine Gesamtwertung gibt es nicht.
        </p>
        <p>
          Jede Liste ist gleich aufgebaut: erst alle mit gültiger Zeit, dann
          DNF, dann DNS. Einen Platz bekommt nur, wer eine gültige Zeit hat.
        </p>
      </div>

      <div class="table-container">
        <table class="table is-fullwidth is-narrow ergebnis">
          <thead>
            <tr>
              <th></th>
              <th>Kalibrierung</th>
              <th>Abnahme</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>Gültige Zeit</th>
              <td>Platz nach Zeit</td>
              <td>Platz nach Zeit</td>
            </tr>
            <tr>
              <th>DNF</th>
              <td>ohne Platz, nach Startnummer</td>
              <td>ohne Platz, nach Kalibrierungszeit</td>
            </tr>
            <tr>
              <th>DNS</th>
              <td>ohne Platz, nach Startnummer</td>
              <td>ohne Platz, nach Kalibrierungszeit</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="content">
        <ul class="begriffe">
          <li>
            <strong>DNF</strong> (did not finish): Cut-off gerissen oder Lauf
            abgebrochen.
          </li>
          <li>
            <strong>DNS</strong> (did not start): nicht angetreten, auf die
            Abnahme verzichtet oder bis Feierabend nicht gestartet.
          </li>
        </ul>
        <p>
          In der Abnahme stehen DNF und DNS nach Kalibrierungszeit. So zeigt die
          Liste auch, in welcher Reihenfolge gestartet wurde.
        </p>
      </div>

      <h2 class="title is-4 mt-6">Zeitnahme</h2>

      <div class="content">
        <ul>
          <li>
            Gemessen wird vom Start am Fuß der Treppe bis zum Ziel oben.
            <span class="tag is-warning is-light">Zehntel oder Hundertstel</span>
          </li>
          <li>
            Gleiche Zeit, gleicher Platz. Der folgende Platz bleibt frei.
          </li>
        </ul>
      </div>

      <h2 class="title is-4 mt-6">Siegerehrung</h2>

      <div class="content">
        <p>
          Geehrt werden <strong>Platz 1 bis 3 der Abnahme</strong>, getrennt
          nach Frauen und Männern.
        </p>
        <p>
          Im ersten Jahr gibt es keine weitere Unterteilung. Später können wir
          die Männer weiter unterteilen, etwa nach Alter.
        </p>

        <p class="is-size-5 has-text-weight-bold mt-5">
          Ist sie zu stark, bist du zu schwach. 🦾
        </p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.ablauf {
  border-top: 3px solid #dab15e;
  border-bottom: 3px solid #dab15e;
  padding: 0.75rem 0;
}

.ablauf-nr {
  font-size: clamp(1.3rem, 6.5vw, 2rem);
  font-weight: 800;
  line-height: 1.1;
  color: #8c6a22;
}

.ablauf-name {
  font-weight: 700;
}

.ablauf-text {
  font-size: 0.8rem;
  color: #7a7a7a;
  padding: 0 0.25rem;
}

.ergebnis th,
.ergebnis td {
  font-size: 0.9rem;
}

.begriffe {
  list-style: none;
  margin-left: 0;
  border-left: 3px solid #dab15e;
  padding-left: 1rem;
}
</style>
