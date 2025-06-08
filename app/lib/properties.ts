export interface propertiesInterface {
  brochure: string;
  title: string;
  status: string;
  location: string;
  bedrooms: string;
  image: string;
  amenities: { text: string; image: string }[];
  bannerImage?: string;
  coordinates?: { lang: number; lat: number };
}

const defaultAminities = [
  {
    text: "24/7 Security",
    image: "/images/properties_aminities_1.svg",
  },
  {
    text: "Playing Area",
    image: "/images/properties_aminities_2.svg",
  },
  {
    text: "Garden",
    image: "/images/properties_aminities_3.svg",
  },
  {
    text: "Coffee shop",
    image: "/images/properties_aminities_4.svg",
  },
];

export const Properties: { [key: string]: propertiesInterface } = {
  "silver park 15": {
    brochure: "/images/brochures/49dc9b634d845c15e196aede5c629511fa2482c5.png",
    title: "Silver Park 15",
    status: "Remaining ",
    location: "South Nagpur",
    bedrooms: "1200 sq.ft",
    image: "/images/property_4.png",
    amenities: defaultAminities,
    // 21.04323551391982, 79.07361559621259
    coordinates: {
      lat: 21.04323551391982,
      lang: 79.07361559621259,
    },
  },
  "silver icon": {
    brochure: "/images/brochures/333d35b6f8537a73af72a395321e8d5a3eb4406f.png",
    title: "Silver Icon",
    status: "Sold Out",
    location: "The Acres",
    bedrooms: "1090 sq.ft",
    image: "/images/property_9.png",
    amenities: defaultAminities,
    // 21.06315114951971, 79.08690449928207
    coordinates: {
      lat: 21.06315114951971,
      lang: 79.08690449928207,
    },
  },
  "sliver wind": {
    brochure: "/images/brochures/9bcd24ab8cdaab82794f3ef78f2ceea49a044491.png",
    title: "Sliver Wind",
    status: "Sold Out",
    location: "The Acres",
    bedrooms: "1090 sq.ft",
    image: "/images/property_6.png",
    amenities: defaultAminities,
    // 21.108754888495717, 78.97638653807044
    coordinates: {
      lat: 21.108754888495717,
      lang: 78.97638653807044,
    },
  },
  "vrindavan park residentail and commercial plots": {
    brochure: "/images/brochures/32488a71b398aaaff42cc4b79f75c508bc9a22a1.png",
    title: "Vrindavan Park Residentail And Commercial Plots",
    status: "Remaining ",
    location: "South Nagpur",
    bedrooms: "1200 sq.ft",
    image: "/images/property_7.png",
    amenities: defaultAminities,
    // 21.091105326258553, 79.07815288525148
    coordinates: {
      lat: 21.091105326258553,
      lang: 79.07815288525148,
    },
  },
  "rajatbhoomi 12": {
    brochure: "/images/brochures/286984f2a8f2913bfff5fe8b8b025dfa247ad186.png",
    title: "Rajatbhoomi 12",
    status: "Remaining ",
    location: "South Nagpur",
    bedrooms: "1200 sq.ft",
    image: "/images/property_10.png",
    amenities: defaultAminities,
    // 21.12164099615062, 79.0726076743336
    coordinates: {
      lat: 21.12164099615062,
      lang: 79.0726076743336,
    },
  },
  "silver woods": {
    brochure: "/images/brochures/ab33329a6128bef0e1c7adac077dfe149786e96a.png",
    title: "Silver Woods",
    status: "Sold Out",
    location: "The Acres",
    bedrooms: "1030 sq.ft",
    image: "/images/property_5.png",
    amenities: defaultAminities,
  },

  "vrindavan park": {
    brochure: "/images/brochures/edb4748d84e56b60dc84fbc870fa281483acc9ee.png",
    title: "Vrindavan Park",
    status: "Remaining ",
    location: "South Nagpur",
    bedrooms: "1200 sq.ft",
    image: "/images/property_1.png",
    amenities: [
      {
        text: "24/7 Security",
        image: "/images/properties_aminities_1.svg",
      },
      {
        text: "Playing Area",
        image: "/images/properties_aminities_2.svg",
      },
      {
        text: "Garden",
        image: "/images/properties_aminities_3.svg",
      },
      {
        text: "Clubhouse",
        image: "/images/clubhouse_icon.png",
      },
    ],
    coordinates: {
      lat: 21.0567504412474,
      lang: 78.97869402418362,
    },
  },

  "silver star": {
    brochure: "/images/brochures/b220fac454177daa19da494a06a2aa59fb1f9676.png",
    title: "Silver Star",
    status: "Sold Out",
    location: "The Acres",
    bedrooms: "1030 sq.ft",
    image: "/images/property_2.png",
    amenities: [
      {
        text: "Clubhouse",
        image: "/images/clubhouse_icon.png",
      },
      {
        text: "Swimming Pool",
        image: "/images/swimming_pool_icon.png",
      },
      {
        text: "Garden",
        image: "/images/properties_aminities_3.svg",
      },
      {
        text: "Coffee Shop",
        image: "/images/properties_aminities_4.svg",
      },
    ],
    coordinates: {
      // 21.126805274585244, 78.95745677638595
      lat: 21.1268052745852447,
      lang: 78.95745677638595,
    },
  },

  "silver icon 4": {
    brochure: "/images/brochures/5836bdd0ce991ab98f9a391548307c31ba233ff8.png",
    title: "Silver Icon 4",
    status: "Sold Out",
    location: "The Acres",
    bedrooms: "1090 sq.ft",
    image: "/images/property_3.png",
    amenities: [
      {
        text: "24/7 Security",
        image: "/images/properties_aminities_1.svg",
      },
      {
        text: "Playing Area",
        image: "/images/properties_aminities_2.svg",
      },
      {
        text: "Garden",
        image: "/images/properties_aminities_3.svg",
      },
      {
        text: "Walking Area",
        image: "/images/walking_icon.png",
      },
    ],
    // 21.05525683783194, 79.08641833172516
    coordinates: {
      lat: 21.05525683783194,
      lang: 79.08641833172516,
    },
  },
};
