<script setup>
const { event } = await useEvent();

// TODO: verify length on site (sources say 42 m, TK Elevator says 47 m)
const fakten = [
  { zahl: "42 m", text: "Länge" },
  { zahl: "Feb '27", text: "voraussichtlich" },
  { zahl: "Sa", text: "Renntag" },
];
</script>

<template>
  <section class="section">
    <div class="container is-max-desktop">
      <div class="content">
        <p class="is-size-4 has-text-weight-bold mb-3">
          Rauf, während sie runterfährt.
        </p>

        <p class="is-size-5">
          Der Treppenlauf für Feuerwehrleute gegen die Rolltreppe – im Februar
          2027 auf der langen Rolltreppe im MyZeil in Frankfurt, unter der
          gläsernen Kuppel.
        </p>

        <p>
          Hochhäuser, Skiflugschanzen, Aussichtstürme – alles schon gelaufen.
          Aber eine Treppe, die dir entgegenkommt? Das gab's in Deutschland noch
          nie.
        </p>
      </div>

      <div class="columns is-mobile is-gapless fakten mb-5">
        <div v-for="f in fakten" :key="f.zahl" class="column has-text-centered">
          <p class="fakt-zahl">{{ f.zahl }}</p>
          <p class="fakt-text">{{ f.text }}</p>
        </div>
      </div>

      <p class="mb-6">
        <a href="#mitmachen" class="button is-medium is-fullwidth cta">
          Ich will mitlaufen!
        </a>
      </p>

      <h2 class="title is-4">Das ist die Strecke</h2>

      <div class="columns is-mobile bilder mb-5">
        <figure class="column">
          <img
            src="/images/myzeil/ganze-strecke.jpg"
            alt="Blick vom Ziel die ganze Rolltreppe hinunter"
            loading="lazy"
          />
          <figcaption class="has-text-grey-dark is-size-7">
            Die ganze Strecke, vom Ziel aus. Kein Absatz. Keine Pause.
          </figcaption>
        </figure>
        <figure class="column">
          <img
            src="/images/myzeil/blick-vom-ziel.jpg"
            alt="Blick vom Ziel auf die Rolltreppe mit Menschen darauf"
            loading="lazy"
          />
          <figcaption class="has-text-grey-dark is-size-7">
            Die Treppe hört nicht auf. Du schon?
          </figcaption>
        </figure>
      </div>

      <QuoteElement name="Marcus" department="FF Taufkirchen/Vils">
        Ja bist du deppert 🙈
      </QuoteElement>

      <h2 class="title is-4 mt-6">Zwei Runden gegen die Maschine</h2>

      <div class="content">
        <ol>
          <li>
            <strong>Qualifying:</strong> Die Rolltreppe steht still – du läufst
            sie hoch wie eine normale Treppe. Bleib unter der Cut-off-Zeit und
            du bist im Finale.
          </li>
          <li>
            <strong>Finale:</strong> Jetzt fährt sie nach unten – und du läufst
            trotzdem rauf. Auch hier zählt die Cut-off-Zeit: Wer sie reißt, ist
            raus.
          </li>
        </ol>

        <p>Cut-off-Zeiten und Wertung geben wir rechtzeitig bekannt.</p>
      </div>

      <div class="galerie mb-5">
        <img
          src="/images/myzeil/letzte-stufen.jpg"
          alt="Die letzten Stufen vor dem Ziel, unter dem Glasdach"
          class="breit"
          loading="lazy"
        />
      </div>

      <QuoteElement name="Martin" department="BF Krefeld">
        Die Lichter anmachen, bevor die Lampen ausgehen 🤣
      </QuoteElement>
    </div>
  </section>

  <ImageSection
    url="/images/myzeil/trichter.jpg"
    :position="{ y: 50 }"
    :ratio="3 / 4"
  >
    <h2 class="title is-4">Wo &amp; wann</h2>

    <div class="content">
      <p>
        <strong>MyZeil, Zeil 106, Frankfurt am Main.</strong> Die lange
        Rolltreppe unter dem gläsernen Trichter, mitten auf Frankfurts
        Einkaufsmeile – Publikum auf allen Etagen inklusive.
      </p>

      <p>
        <strong>Februar 2027.</strong> Voraussichtlich an einem Samstag – der
        genaue Termin folgt. Wer sich einträgt, erfährt ihn zuerst.
      </p>
    </div>

    <div class="galerie quadrat mb-5">
      <img
        src="/images/myzeil/rolltreppe-lang.jpg"
        alt="Die Rolltreppe zieht sich quer durch das Atrium"
        loading="lazy"
      />
      <img
        src="/images/myzeil/skyline.jpg"
        alt="Blick über Frankfurt auf die Skyline"
        loading="lazy"
      />
    </div>

    <QuoteElement name="Manuel" department="BwF Laupheim">
      Das ist mal ne wilde Sache 🦾
    </QuoteElement>

    <h2 id="mitmachen" class="title is-4 mt-6">Sei dabei</h2>

    <div class="content">
      <p>
        Trag dich ein und sichere dir die Infos als Erste:r – wir melden uns per
        WhatsApp, sobald Termin und Anmeldung stehen. Deine Daten nutzen wir nur
        dafür ツ
      </p>

      <InterestForm />

      <p class="has-text-grey is-size-7 mt-5">
        <strong class="has-text-grey">Inspiration:</strong> In Budapest wird
        schon gegen die Rolltreppe gelaufen, siehe
        <a href="https://www.instagram.com/p/DY1t5xMC8JE/" target="_blank"
          >Instagram-Beitrag von Jánosa Bence</a
        >. Danke an Fabian für den Tipp!
      </p>
    </div>
  </ImageSection>
</template>

<style scoped>
.fakten {
  border-top: 3px solid #dab15e;
  border-bottom: 3px solid #dab15e;
  padding: 0.75rem 0;
}

.fakt-zahl {
  font-size: 2rem;
  font-weight: 800;
  line-height: 1.1;
  color: #8c6a22;
}

.fakt-text {
  font-size: 0.8rem;
  color: #7a7a7a;
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

.bilder {
  max-width: 480px;
  margin-left: auto;
  margin-right: auto;
}

.bilder img {
  display: block;
  width: 100%;
  aspect-ratio: 3 / 4;
  object-fit: cover;
  border-radius: 6px;
}

.bilder figcaption {
  margin-top: 0.25rem;
}

.galerie {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.5rem;
}

.galerie img {
  display: block;
  width: 100%;
  height: 100%;
  aspect-ratio: 3 / 4;
  object-fit: cover;
  border-radius: 6px;
}

.galerie img.breit {
  grid-column: 1 / -1;
  aspect-ratio: 4 / 3;
}

.galerie.quadrat img {
  aspect-ratio: 1 / 1;
}

#mitmachen {
  scroll-margin-top: 1rem;
}
</style>
