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
    content?: { type: "image" | "video"; src: string }[];
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
      text: `Discover Vrindavan Park, located near Samruddhi Circle, offering both residential and commercial plots in a prime, well-connected area. Enjoy smooth connectivity with our high-quality cement roads and easy access to the Samruddhi Circle Highway.<br>Relax at our exclusive clubhouse, surrounded by lush gardens, or stay active with our scenic walking track. The community features a safe and vibrant kids' play area, ensuring fun for the whole family. With an elegantly designed layout, Vrindavan Park combines convenience, nature, and luxury in one perfect location.`,
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
      text: `Silver Icon offers ready-to-construct plots with Registry and RL mutation, ensuring a hassle-free process with no hidden costs. Enjoy comprehensive after-sale support for getting building plans sanctioned by NMRDA, plus assistance with contractors and architects.<br>Located 1.5 km from Besa Square and just 2 km from the International Airport, Silver Icon offers easy access to the North and South Metro stations and city buses that run every 30 minutes. The project also features 24 x 7 water supply from Maharashtra Jeevan Pradhikaran.<br>The site is designed with wide cement roads, underground electrification, and stormwater drainage systems, all as per NMRDA standards. Avenue plantation and a walking track add to the serene environment`,
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
    gallery: {
      text: `Rajatbhomi is perfectly positioned, offering great connectivity to the central city while being surrounded by a host of conveniences. With Metro Stations and Samruddhi Mahamarg nearby, commuting is hassle-free. Prestigious educational institutions and renowned engineering colleges are just a short distance away.<br>The National Cancer Institute, along with lifestyle and spiritual destinations like the Iscon Temple, are in close proximity. As the area continues to grow in popularity, the benefits in terms of accessibility, convenience, and overall value will only increase.`,
    },
  },
};
