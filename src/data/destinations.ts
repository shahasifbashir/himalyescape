/**
 * DESTINATIONS
 * ------------
 * Content for the Kashmir & Ladakh destination pages. Fully editable.
 */

export interface Attraction {
  name: string;
  blurb: string;
  image: string;
  imageAlt: string;
}

export interface Destination {
  slug: "kashmir" | "ladakh";
  name: string;
  headline: string;
  intro: string;
  heroImage: string;
  heroImageAlt: string;
  bestTime: string;
  attractions: Attraction[];
}

export const destinations: Record<Destination["slug"], Destination> = {
  kashmir: {
    slug: "kashmir",
    name: "Kashmir",
    headline: "The Paradise on Earth",
    intro:
      "From the tranquil waters of Dal Lake to the alpine meadows of Gulmarg, Kashmir is a land of houseboats, saffron fields and snow-dusted peaks. Whether you seek romance, adventure or serenity, the valley delivers postcard-perfect moments at every turn.",
    heroImage:
      "https://images.unsplash.com/photo-1595815771614-ade9d652a65d?auto=format&fit=crop&w=1600&q=70",
    heroImageAlt: "Green valley and lake surrounded by mountains in Kashmir",
    bestTime: "March – October (April–May for tulips, Dec–Feb for snow)",
    attractions: [
      {
        name: "Dal Lake, Srinagar",
        blurb:
          "Glide across mirror-still waters on a shikara and stay overnight in an ornate houseboat.",
        image:
          "https://images.unsplash.com/photo-1566837945700-30057527ade0?auto=format&fit=crop&w=800&q=70",
        imageAlt: "Shikara boats moored on Dal Lake",
      },
      {
        name: "Gulmarg",
        blurb:
          "Ride the Gulmarg Gondola, one of the world's highest cable cars, over pristine ski slopes.",
        image:
          "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=800&q=70",
        imageAlt: "Snowy meadows and pine forests in Gulmarg",
      },
      {
        name: "Pahalgam",
        blurb:
          "Trek the Betaab and Aru valleys or simply relax beside the rushing Lidder river.",
        image:
          "https://images.unsplash.com/photo-1712388430474-ace0c16051e2?auto=format&fit=crop&w=800&q=70",
        imageAlt: "River flowing through a green valley in Pahalgam",
      },
    ],
  },
  ladakh: {
    slug: "ladakh",
    name: "Ladakh",
    headline: "Land of High Passes",
    intro:
      "A cold desert cradled by the Himalayas and Karakoram, Ladakh is raw, dramatic and deeply spiritual. Turquoise lakes, ancient monasteries and roads that climb above the clouds make it a bucket-list destination for every adventurer.",
    heroImage:
      "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=1600&q=70",
    heroImageAlt: "Pangong Lake with barren mountains in Ladakh",
    bestTime: "May – September (roads and passes fully open)",
    attractions: [
      {
        name: "Pangong Tso",
        blurb:
          "A surreal high-altitude lake that shifts through shades of blue as the day passes.",
        image:
          "https://images.unsplash.com/photo-1581791534721-e599df4417f7?auto=format&fit=crop&w=800&q=70",
        imageAlt: "Blue Pangong lake against arid mountains",
      },
      {
        name: "Nubra Valley",
        blurb:
          "Sand dunes, double-humped Bactrian camels and the confluence of the Shyok & Nubra rivers.",
        image:
          "https://images.unsplash.com/photo-1609151354448-c40c8e2f5c4a?auto=format&fit=crop&w=800&q=70",
        imageAlt: "Sand dunes and mountains in Nubra Valley",
      },
      {
        name: "Leh Monasteries",
        blurb:
          "Explore centuries-old gompas like Thiksey and Hemis perched dramatically on the hills.",
        image:
          "https://images.unsplash.com/photo-1589553416260-f586c8f1514f?auto=format&fit=crop&w=800&q=70",
        imageAlt: "Buddhist monastery on a hillside in Leh",
      },
    ],
  },
};
