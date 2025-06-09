export interface propertiesInterface {
  heroSection?: {
    title: string;
    description: string;
  };
  brochure: string;
  title: string;
  status: string;
  location: string;
  bedrooms: string;
  image: string;
  amenities: { text: string; image: string }[];
  bannerImage?: string;
  coordinates?: { lang: number; lat: number };
  gallery?: {
    text: string;
    content: { type: "image" | "video"; src: string }[];
  };
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
  "silver park": {
    heroSection: {
      title: "Well-Planned Plots in a Growing Area",
      description:
        "Silver Park is designed for comfort, with easy access and everything you need nearby — a great choice for families and investors.",
    },
    brochure: "/images/brochures/49dc9b634d845c15e196aede5c629511fa2482c5.png",
    title: "Silver Park",
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
  "sliver wind": {
    heroSection: {
      title: "Open Spaces, Peaceful Vibes",
      description:
        "Silver Wind gives you the freedom to build the way you want — in a calm, clean environment that’s ready for the future.",
    },
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

  "silver woods": {
    heroSection: {
      title: "Stay Close to Nature and the City",
      description:
        "Silver Wood offers green surroundings and easy access — perfect for those who want a balance between nature and city life.",
    },
    brochure: "/images/brochures/ab33329a6128bef0e1c7adac077dfe149786e96a.png",
    title: "Silver Woods",
    status: "Sold Out",
    location: "The Acres",
    bedrooms: "1030 sq.ft",
    image: "/images/property_5.png",
    amenities: defaultAminities,
  },
  "vrindavan park": {
    heroSection: {
      title: "Peaceful Living Starts Here",
      description:
        "Vrindavan Park in South Nagpur offers spacious plots surrounded by greenery, perfect for a calm and connected lifestyle",
    },
    brochure: "/images/brochures/Vrindavan Park  - Amenities.pdf",
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
    gallery: {
      text: `At the heart of Neel Infratech’s growth and values is our founder
      and visionary leader, Mr. Pitamber Ikar. With a deep-rooted
      passion for real estate and a sharp eye for market potential, he
      has transformed Neel Infratech into a name that stands for trust,
      transparency, and forward-thinking development in Nagpur. Mr. Ikar
      brings years of experience, a strong network, and a mission-driven
      approach to every project. His leadership is grounded in integrity
      and driven by a genuine commitment to helping people build secure
      and meaningful futures through smart property investment.`,
      content: [
        {
          type: "video",
          src: "/videos/properties_video_1.mp4",
        },
        {
          type: "video",
          src: "/videos/properties_video_2.mp4",
        },
      ],
    },
  },
  "silver star": {
    heroSection: {
      title: "Live Like Every Day is a Holiday",
      description:
        "Silver Star offers well-planned plots in Hingna with a peaceful and resort-like environment — perfect for living or investing.",
    },
    brochure: "/images/brochures/Silver Star Brosher.pdf",
    title: "Silver Star",
    status: "Sold Out",
    location: "The Acres",
    bedrooms: "1030 sq.ft",
    bannerImage: "/images/silver_star_header_image.jpg",
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
      lat: 21.1268052745852447,
      lang: 78.95745677638595,
    },
    gallery: {
      text: `Nestled in the growing locale of Hingna, Silver Star offers the perfect blend of serenity and urban convenience. This thoughtfully planned property by Neel Infratech provides a resort-like living experience with modern amenities, green landscapes, and peaceful surroundings. With close connectivity to educational hubs, tech parks, and key transport routes, Silver Star is ideal for both residential comfort and long-term investment. It reflects the group’s commitment to sustainable development and quality living spaces in Nagpur's expanding real estate landscape.      `,
      content: [
        {
          type: "image",
          src: "/images/silver_star_image.jpg",
        },
        {
          type: "video",
          src: "/videos/silver_star_video.mp4",
        },
      ],
    },
  },
  "silver icon": {
    heroSection: {
      title: "Build Your Future in a Prime Location",
      description:
        "Located in Hingna, Silver Icon gives you the right plot in the right place — great for building your dream or growing your investment.",
    },
    brochure: "/images/brochures/Silver Icon 3.pdf",
    title: "Silver Icon",
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
    gallery: {
      text: `Silver Icon 4 is a testament to our commitment to quality and
      innovation. This project features modern amenities, spacious
      layouts, and a prime location that ensures both comfort and
      convenience. Each unit is designed with meticulous attention to
      detail, providing residents with a luxurious living experience.
      Silver Icon 4 is not just a home; it's a lifestyle choice that
      reflects our dedication to excellence in real estate development.`,
      content: [
        {
          type: "image",
          src: "/images/silver_icon_image.png",
        },
        {
          type: "video",
          src: "/videos/sliver_icon_video.mp4",
        },
      ],
    },
  },
  rajatbhoomi: {
    heroSection: {
      title: "A Smart Investment for a Bright Future",
      description:
        "Rajat Bhomii brings you clear-title plots in a fast-developing area — ideal for both living and long-term growth.",
    },
    brochure: "/images/brochures/286984f2a8f2913bfff5fe8b8b025dfa247ad186.png",
    title: "Rajatbhoomi",
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
};
