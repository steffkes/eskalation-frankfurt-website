// schema.org data, also rendered as JSON-LD on every page
export const event = {
  "@context": "https://schema.org",
  "@type": "SportsEvent",
  url: "https://eskalation-frankfurt.de",
  name: "Eskalation Frankfurt",
  description:
    "Der Treppenlauf für Feuerwehrleute gegen die Rolltreppe: rauf, während sie runterfährt. Voraussichtlich an einem Samstag im Februar 2027 im MyZeil in Frankfurt am Main.",
  location: {
    "@type": "Place",
    name: "MyZeil",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Zeil 106",
      postalCode: "60313",
      addressLocality: "Frankfurt am Main",
      addressCountry: "DE",
    },
  },
  organizer: {
    "@type": "Person",
    name: "Stefan Matheis",
    email: "mailto:stefan.matheis@eskalation-frankfurt.de",
    telephone: "+49 160 970 48 114",
  },
};

// shown below the event name, not part of the schema.org data
export const subline = "Rise Against the Machine";
