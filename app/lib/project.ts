import { ProjectData } from "../types/projectPage";

export const projects: Record<string, ProjectData> = {
  "vrindavan-park-12": {
    slug: "vrindavan-park-12",

    seo: {
      title: "Vrindavan Park 12 Nagpur",
      description: "NMRDA approved plots in Hingna.",
    },

    hero: {
      eyebrow: "NMRDA Approved · Hingna Corridor",
      title: "Vrindavan Park 12 — Where Three Highways Meet One Address",
      subtitle:
        "Fully developed NMRDA-approved residential plots at Sukali (Hingna), Nagpur — moments from National Highway 353-I, the Outer Ring Road and the Samruddhi Expressway.",
      image: "/images/projects/vp12/hero.jpg",

      stats: [
        {
          number: "50 m",
          label: "National Highway 353-I",
        },
        {
          number: "800 m",
          label: "Outer Ring Road",
        },
        {
          number: "1.5 km",
          label: "Samruddhi Expressway",
        },
      ],
    },

    trustItems: [
      {
        text: "NMRDA Approved",
        icon: `<svg fill="currentColor" viewBox="0 0 20 20"><path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM6.7 9.29L9 11.6l4.3-4.3 1.4 1.42L9 14.4l-3.7-3.7 1.4-1.42z"/></svg>`,
      },

      {
        text: "Mega Plot Project",
        icon: `<svg fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.539 1.118L10 13.347l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L3.567 7.819c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>`,
      },

      {
        text: "CREDAI Member",
        icon: `<svg fill="currentColor" viewBox="0 0 20 20"><path d="M10 12a2 2 0 100-4 2 2 0 000 4z"/><path fill-rule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clip-rule="evenodd"/></svg>`,
      },

      {
        text: "80% Bank Finance",
        icon: `<svg fill="currentColor" viewBox="0 0 20 20"><path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z"/><path fill-rule="evenodd" d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z" clip-rule="evenodd"/></svg>`,
      },

      {
        text: "NUC Corridor",
        icon: `<svg fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M3 6a3 3 0 013-3h10a1 1 0 01.8 1.6L14.25 8l2.55 3.4A1 1 0 0116 13H6a1 1 0 00-1 1v3a1 1 0 11-2 0V6z" clip-rule="evenodd"/></svg>`,
      },
    ],

    about: {
      eyebrow: "About Vrindavan Park 12",
      title: "The Smartest Plot Buy in Hingna",
      image: "/images/projects/vp12/about.jpg",
      description: `<p>Hingna is one of the fastest-growing micro-markets in Nagpur because of three converging infrastructure stories — the <strong>Outer Ring Road</strong>, the <strong>Samruddhi Mahamarg</strong> (Mumbai–Nagpur Expressway) and the upcoming <strong>NUC New Nagpur</strong> plan around MIHAN.</p>
          <p>Vrindavan Park 12 sits at the centre of this triangle. Buyers are getting fully developed, NMRDA-sanctioned plots in a corridor where land prices have historically appreciated faster than the broader Nagpur average.</p>
          <p>It's not just a plot — it's a position in Nagpur's most-watched real estate growth story.</p>`,
    },

    features: {
      title: "Built to NMRDA Standards. Designed for Real Living.",
      description:
        "Every metre of Vrindavan Park 12 is engineered to NMRDA specification — including a sewage network and STP that most plotted layouts in Nagpur don't offer.",
      items: [
        {
          title: "9 & 12 Metre Cement Roads",
          icon: `<svg fill="currentColor" viewBox="0 0 24 24"><path d="M3 19h18v2H3v-2zm0-4h18v2H3v-2zm0-4h18v2H3v-2zm0-8h18v2H3V3zm0 4h18v2H3V7z"/></svg>`,
          description:
            "Wider-than-standard internal cement road network designed for two-way traffic and long-term durability.",
        },

        {
          title: "HDPE Water Pipeline",
          icon: `<svg fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C8 6 4 9.5 4 14a8 8 0 0016 0c0-4.5-4-8-8-12z"/></svg>`,
          description:
            "Underground HDPE water pipeline laid across the entire layout for reliable, safe distribution to every plot.",
        },

        {
          title: "Sewage Network & STP",
          icon: `<svg fill="currentColor" viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6zM6 20V4h7v5h5v11H6z"/></svg>`,
          description:
            "Full sewage network with sewage treatment plant per NMRDA specification — rare for a plotted development.",
        },

        {
          title: "Storm-Water Drainage",
          icon: `<svg fill="currentColor" viewBox="0 0 24 24"><path d="M12 2L4 5v6c0 5.5 3.5 10.7 8 12 4.5-1.3 8-6.5 8-12V5l-8-3z"/></svg>`,
          description:
            "Storm-water drainage system per NMRDA spec — engineered to handle Nagpur monsoons without waterlogging.",
        },

        {
          title: "Underground Electrification",
          icon: `<svg fill="currentColor" viewBox="0 0 24 24"><path d="M7 22h10v-3H7v3zm5-20a5 5 0 00-5 5c0 2 1 3.5 2.5 4.5V14h5v-2.5C16 10.5 17 9 17 7a5 5 0 00-5-5z"/></svg>`,
          description:
            "Underground electrification with street lights along every internal road inside the layout.",
        },

        {
          title: "Avenue Plantation + Walking Track",
          icon: `<svg fill="currentColor" viewBox="0 0 24 24"><path d="M17 8C8 10 5.9 16.17 3.82 21.34l1.89.66.95-2.3c.48.17.98.3 1.34.3C19 20 22 3 22 3c-1 2-8 2.25-13 3.25S2 11.5 2 13.5s1.75 3.75 1.75 3.75C7 8 17 8 17 8z"/></svg>`,
          description:
            "Avenue plantation, peripheral compound wall along open space and a walking track per NMRDA specification.",
        },
      ],
    },

    snapshot: [
      {
        label: "Project",
        value: "Vrindavan Park 12",
      },

      {
        label: "Developer",
        value: "Neel Infratech",
      },

      {
        label: "Location",
        value: "Mouza Sukali (Gupchup), Kh. No. 40/2, Tah. Hingna",
      },

      {
        label: "Project Type",
        value: "NMRDA Residential Plots",
      },

      {
        label: "Plot Size Range",
        value: "~1,054 to ~1,985 sqft",
      },

      {
        label: "Approvals",
        value: "NMRDA",
      },

      {
        label: "Finance",
        value: "Up to 80% ICICI Finance",
      },

      {
        label: "MahaRERA No.",
        value: "[ADD RERA NUMBER]",
      },
    ],

    location: {
      title: "Three Highways. One Address.",

      mapImage: "/images/projects/vp12_map.jpg",

      items: [
        {
          icon: `<svg fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd"/></svg>`,

          place: "MIHAN Cargo Hub & SEZ",

          distance: "4 km",
        },

        {
          icon: `<svg fill="currentColor" viewBox="0 0 20 20"><path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"/></svg>`,

          place: "NUC New Nagpur",

          distance: "Within catchment",
        },

        {
          icon: `<svg fill="currentColor" viewBox="0 0 20 20"><path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"/></svg>`,

          place: "Outer Ring Road",

          distance: "Direct access",
        },

        {
          icon: `<svg fill="currentColor" viewBox="0 0 20 20"><path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4z"/></svg>`,

          place: "Samruddhi Mahamarg",

          distance: "Short drive",
        },

        {
          icon: `<svg fill="currentColor" viewBox="0 0 20 20"><path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"/></svg>`,

          place: "Nagpur Airport",

          distance: "10–15 min",
        },

        {
          icon: `<svg fill="currentColor" viewBox="0 0 20 20"><path d="M10 12a2 2 0 100-4 2 2 0 000 4z"/></svg>`,

          place: "Future Metro Phase-II (Hingna)",

          distance: "Planned corridor",
        },
      ],
    },

    gallery: {
      title: "See Vrindavan Park 15 for Yourself",

      description:
        "A glimpse into the layout, infrastructure and the surrounding MIHAN corridor.",

      images: [
        {
          title: "Aerial layout view",
          image: "/images/projects/vp15/gallery-1.jpg",
        },

        {
          title: "Entrance arch / gate",
          image: "/images/projects/vp15/gallery-2.jpg",
        },

        {
          title: "Wide cement road",
          image: "/images/projects/vp15/gallery-3.jpg",
        },

        {
          title: "MIHAN backdrop view",
          image: "/images/projects/vp15/gallery-4.jpg",
        },

        {
          title: "Demarcated plot",
          image: "/images/projects/vp15/gallery-5.jpg",
        },

        {
          title: "Walking track / open space",
          image: "/images/projects/vp15/gallery-6.jpg",
        },
      ],
    },

    faq: [
      {
        question: "Where exactly is Vrindavan Park 12 located?",

        answer:
          "At Mouza Sukali (Gupchup), Kh. No. 40/2, Tah. Hingna, Dist. Nagpur — 50 metres from NH-353-I, 800 metres from the Outer Ring Road and 1.5 km from the Samruddhi Expressway.",
      },

      {
        question: "What plot sizes are available?",

        answer:
          "Plots range from approximately 1,054 sqft to 1,985 sqft, with multiple configurations including amenity-facing plots. Full plot schedule available on request.",
      },

      {
        question: "Is Vrindavan Park 12 NMRDA approved?",

        answer:
          "Yes — fully NMRDA-approved. The entire layout, including sewage network and STP, is sanctioned and developed strictly per NMRDA specification.",
      },

      {
        question: "Is bank finance available?",

        answer: "Yes — up to 80% finance via ICICI Bank and partner lenders.",
      },

      {
        question: "How far is Vrindavan Park 12 from the Nagpur airport?",

        answer: "10–15 minutes by car, depending on traffic and access route.",
      },

      {
        question: "Is Vrindavan Park 12 part of a series?",

        answer:
          "Yes — it's part of Neel Infratech's flagship Vrindavan Park series, alongside Vrindavan Park 14 and Vrindavan Park 15, all in the Sukali (Hingna) corridor.",
      },
    ],

    whatsappText: "Hi, I am interested in Vrindavan Park 12 by Neel Infratech",
  },
  "vrindavan-park-14-nagpur": {
    slug: "vrindavan-park-14-nagpur",

    seo: {
      title:
        "Vrindavan Park 14 Nagpur — NMRDA Plots Near NUC New Nagpur | Neel Infratech",

      description:
        "Vrindavan Park 14 by Neel Infratech: NMRDA plots at Mouza Sukali (Gupchup), Tah. Hingna, Dist. Nagpur — gateway to NUC New Nagpur, MIHAN & Samruddhi Mahamarg.",
    },

    hero: {
      eyebrow: "★ Adjacent to NUC New Nagpur",

      title: "Vrindavan Park 14 — Plots in the Rising New Nagpur Corridor",

      subtitle:
        "A premium NMRDA-approved plot project at the doorstep of NUC New Nagpur — the upcoming 1,780-acre planned city anchored around MIHAN.",

      image: "/images/projects/vp14/hero.jpg",

      stats: [
        {
          number: "1,780",
          label: "Acres of NUC Development",
        },

        {
          number: "₹26,900 Cr",
          label: "NUC Investment Plan",
        },

        {
          number: "Adjacent",
          label: "To MIHAN Catchment",
        },
      ],
    },

    trustItems: [
      {
        text: "NMRDA Approved",

        icon: `<svg fill="currentColor" viewBox="0 0 20 20"><path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM6.7 9.29L9 11.6l4.3-4.3 1.4 1.42L9 14.4l-3.7-3.7 1.4-1.42z"/></svg>`,
      },

      {
        text: "NUC Catchment",

        icon: `<svg fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.539 1.118L10 13.347l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L3.567 7.819c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>`,
      },

      {
        text: "CREDAI Member",

        icon: `<svg fill="currentColor" viewBox="0 0 20 20"><path d="M10 12a2 2 0 100-4 2 2 0 000 4z"/><path fill-rule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clip-rule="evenodd"/></svg>`,
      },

      {
        text: "80% Bank Finance",

        icon: `<svg fill="currentColor" viewBox="0 0 20 20"><path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z"/><path fill-rule="evenodd" d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9z" clip-rule="evenodd"/></svg>`,
      },

      {
        text: "Mega Plot Project",

        icon: `<svg fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M3 6a3 3 0 013-3h10a1 1 0 01.8 1.6L14.25 8l2.55 3.4A1 1 0 0116 13H6a1 1 0 00-1 1v3a1 1 0 11-2 0V6z" clip-rule="evenodd"/></svg>`,
      },
    ],

    about: {
      eyebrow: "About Vrindavan Park 14",

      title: "The Rising New Nagpur — On the Right Side of Growth",

      description:
        "Vrindavan Park 14 is located in one of Nagpur’s fastest-growing corridors benefiting from Samruddhi Mahamarg, Outer Ring Road, Metro expansion and NUC New Nagpur development.",

      image: "/images/projects/vp14/about.jpg",
    },

    features: {
      title: "A City Within a City",

      description:
        "NUC is a 1,780-acre planned mixed-use development modelled on Mumbai's BKC.",

      items: [
        {
          title: "Commercial & Corporate",

          description:
            "IT parks, Grade-A offices, malls and retail boulevards within the NUC ecosystem.",

          icon: `<svg fill="currentColor" viewBox="0 0 24 24"><path d="M12 7V3H2v18h20V7H12z"/></svg>`,
        },

        {
          title: "Industrial & MSME",

          description:
            "MSME clusters and high-tech industries with strong infrastructure support.",

          icon: `<svg fill="currentColor" viewBox="0 0 24 24"><path d="M22 21H2V3h2v16h2V5h4v14h2V8h4v11h2v-7h4v9z"/></svg>`,
        },

        {
          title: "Direct MIHAN Linkage",

          description: "Direct connectivity to MIHAN cargo hub and SEZ.",

          icon: `<svg fill="currentColor" viewBox="0 0 24 24"><path d="M19 3H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V5a2 2 0 00-2-2z"/></svg>`,
        },

        {
          title: "9 & 12 Mtr Cement Roads",

          description:
            "Wider-than-standard cement road network within the layout.",

          icon: `<svg fill="currentColor" viewBox="0 0 24 24"><path d="M3 19h18v2H3v-2z"/></svg>`,
        },

        {
          title: "HDPE + STP per NMRDA",

          description:
            "HDPE water pipeline and sewage treatment infrastructure.",

          icon: `<svg fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C8 6 4 9.5 4 14a8 8 0 0016 0c0-4.5-4-8-8-12z"/></svg>`,
        },

        {
          title: "Future Metro Phase-II",

          description: "Planned metro connectivity through Hingna corridor.",

          icon: `<svg fill="currentColor" viewBox="0 0 24 24"><path d="M17 8C8 10 5.9 16.17 3.82 21.34z"/></svg>`,
        },
      ],
    },

    snapshot: [
      {
        label: "Project",
        value: "Vrindavan Park 14",
      },

      {
        label: "Developer",
        value: "Neel Infratech",
      },

      {
        label: "Location",
        value: "Kh. No. 51, Ph. No. 45, Mouza Sukali (Gupchup), Tah. Hingna",
      },

      {
        label: "Project Type",
        value: "NMRDA Residential Plots",
      },

      {
        label: "Approvals",
        value: "NMRDA",
      },

      {
        label: "Finance",
        value: "Up to 80% Bank Finance",
      },

      {
        label: "MahaRERA No.",
        value: "[ADD RERA NUMBER]",
      },

      {
        label: "Membership",
        value: "CREDAI Member",
      },
    ],

    location: {
      title: "At the Doorstep of Nagpur's Next Big Story",

      mapImage: "/images/projects/vp14/location-map.jpg",

      items: [
        {
          place: "NUC New Nagpur (planned)",
          distance: "Adjacent",
        },

        {
          place: "MIHAN",
          distance: "Short drive",
        },

        {
          place: "Samruddhi Mahamarg Expressway",
          distance: "~1.5 km",
        },

        {
          place: "Outer Ring Road",
          distance: "Direct access",
        },

        {
          place: "Nagpur Airport",
          distance: "10–15 min",
        },

        {
          place: "Future Metro Phase-II (Hingna)",
          distance: "Planned corridor",
        },
      ],
    },

    gallery: {
      title: "See Vrindavan Park 14 for Yourself",

      description:
        "A glimpse into the layout, infrastructure and the rising New Nagpur corridor.",

      images: [
        {
          title: "Aerial layout view",
          image: "/images/projects/vp14/gallery-1.jpg",
        },

        {
          title: "Entrance arch / gate",
          image: "/images/projects/vp14/gallery-2.jpg",
        },

        {
          title: "12-mtr cement road",
          image: "/images/projects/vp14/gallery-3.jpg",
        },

        {
          title: "NUC catchment view",
          image: "/images/projects/vp14/gallery-4.jpg",
        },

        {
          title: "Demarcated plot",
          image: "/images/projects/vp14/gallery-5.jpg",
        },

        {
          title: "Walking track / open space",
          image: "/images/projects/vp14/gallery-6.jpg",
        },
      ],
    },

    faq: [
      {
        question: "Where exactly is Vrindavan Park 14 located?",

        answer:
          "Kh. No. 51, Ph. No. 45, Mouza Sukali (Gupchup), Tah. Hingna, Dist. Nagpur — adjacent to the NUC New Nagpur catchment.",
      },

      {
        question:
          "What is NUC and why does it matter to Vrindavan Park 14 buyers?",

        answer:
          "NUC (New Nagpur City) is a 1,780-acre planned greenfield development by NMRDA with approximately ₹26,900 crore committed investment.",
      },

      {
        question: "Is Vrindavan Park 14 NMRDA approved?",

        answer:
          "Yes — fully approved with all infrastructure developed per NMRDA specification.",
      },

      {
        question: "Is bank finance available?",

        answer:
          "Yes, up to 80% finance is available through partner banks including ICICI.",
      },

      {
        question:
          "How does Vrindavan Park 14 compare to Vrindavan Park 12 and 15?",

        answer:
          "All three are part of Neel Infratech's Vrindavan Park series built to the same NMRDA standards.",
      },
    ],

    whatsappText: "Hi, I'm interested in Vrindavan Park 14 by Neel Infratech",
  },
  "vrindavan-park-15-nagpur": {
    slug: "vrindavan-park-15-nagpur",

    seo: {
      title:
        "Vrindavan Park 15 Nagpur — NMRDA Plots Just 4 km From MIHAN | Neel Infratech",

      description:
        "Vrindavan Park 15 by Neel Infratech: NMRDA-approved residential plots only 4 km from MIHAN, with direct connectivity to NUC New Nagpur, Outer Ring Road and Samruddhi Mahamarg.",
    },

    hero: {
      eyebrow: "★ Just 4 km from MIHAN",

      title: "Vrindavan Park 15 — A Mega Plot Project at MIHAN's Doorstep",

      subtitle:
        "A premium NMRDA-approved residential plot project just 4 km from MIHAN, in the heart of the upcoming NUC New Nagpur — a 1,710-acre BKC-style mixed-use hub.",

      image: "/images/projects/vp15/hero.jpg",

      stats: [
        {
          number: "4 km",
          label: "From MIHAN",
        },

        {
          number: "1,710",
          label: "Acre NUC Plan",
        },

        {
          number: "12 mtr",
          label: "Wide Cement Road",
        },
      ],
    },

    trustItems: [
      {
        text: "NMRDA Approved",

        icon: `<svg fill="currentColor" viewBox="0 0 20 20"><path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM6.7 9.29L9 11.6l4.3-4.3 1.4 1.42L9 14.4l-3.7-3.7 1.4-1.42z"/></svg>`,
      },

      {
        text: "Mega Plot Project",

        icon: `<svg fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.539 1.118L10 13.347l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L3.567 7.819c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>`,
      },

      {
        text: "CREDAI Member",

        icon: `<svg fill="currentColor" viewBox="0 0 20 20"><path d="M10 12a2 2 0 100-4 2 2 0 000 4z"/></svg>`,
      },

      {
        text: "80% Bank Finance",

        icon: `<svg fill="currentColor" viewBox="0 0 20 20"><path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z"/></svg>`,
      },

      {
        text: "NUC Corridor",

        icon: `<svg fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M3 6a3 3 0 013-3h10a1 1 0 01.8 1.6L14.25 8l2.55 3.4A1 1 0 0116 13H6a1 1 0 00-1 1v3a1 1 0 11-2 0V6z" clip-rule="evenodd"/></svg>`,
      },
    ],

    about: {
      eyebrow: "About Vrindavan Park 15",

      title: "Plots Inside Nagpur's Most Strategic Corridor",

      description:
        "Vrindavan Park 15 is one of the few NMRDA-approved opportunities within 4 km of MIHAN, located inside the NUC New Nagpur growth corridor.",

      image: "/images/projects/vp15/about.jpg",
    },

    features: {
      title: "A 1,710-Acre Mixed-Use Hub. One Smart Address.",

      description:
        "NUC is being designed as a self-contained ecosystem combining commercial, corporate, industrial, hospitality and lifestyle uses.",

      items: [
        {
          title: "Commercial & Corporate",

          description:
            "IT parks, Grade-A offices and malls planned within the NUC ecosystem.",

          icon: `<svg fill="currentColor" viewBox="0 0 24 24"><path d="M12 7V3H2v18h20V7H12z"/></svg>`,
        },

        {
          title: "Industrial",

          description:
            "MSME clusters and high-tech industries with attractive incentive frameworks.",

          icon: `<svg fill="currentColor" viewBox="0 0 24 24"><path d="M22 21H2V3h2v16h2V5h4v14h2V8h4v11h2v-7h4v9z"/></svg>`,
        },

        {
          title: "Hospitality & Retail",

          description:
            "Premium hotels and high-street retail boulevards form the lifestyle layer of the hub.",

          icon: `<svg fill="currentColor" viewBox="0 0 24 24"><path d="M19 3H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V5a2 2 0 00-2-2z"/></svg>`,
        },

        {
          title: "9 & 12 Mtr Cement Roads",

          description:
            "Wide cement roads inside the layout per NMRDA specification.",

          icon: `<svg fill="currentColor" viewBox="0 0 24 24"><path d="M3 19h18v2H3v-2z"/></svg>`,
        },

        {
          title: "HDPE Water + STP",

          description:
            "HDPE water pipeline network with sewage treatment plant per NMRDA standards.",

          icon: `<svg fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C8 6 4 9.5 4 14a8 8 0 0016 0c0-4.5-4-8-8-12z"/></svg>`,
        },

        {
          title: "Future Metro Phase-II",

          description:
            "Future Metro Phase-II expansion is planned along the Hingna corridor.",

          icon: `<svg fill="currentColor" viewBox="0 0 24 24"><path d="M17 8C8 10 5.9 16.17 3.82 21.34z"/></svg>`,
        },
      ],
    },

    snapshot: [
      {
        label: "Project",
        value: "Vrindavan Park 15",
      },

      {
        label: "Developer",
        value: "Neel Infratech",
      },

      {
        label: "Location",
        value: "Sukali (Gupchup), Tah. Hingna, Dist. Nagpur",
      },

      {
        label: "Project Type",
        value: "NMRDA Mega Residential Plot Project",
      },

      {
        label: "Distance from MIHAN",
        value: "~4 km",
      },

      {
        label: "Approvals",
        value: "NMRDA",
      },

      {
        label: "Finance",
        value: "Up to 80% Bank Finance",
      },

      {
        label: "MahaRERA No.",
        value: "[ADD RERA NUMBER]",
      },
    ],

    location: {
      title: "4 km from MIHAN. Inside NUC. One Smart Buy.",

      mapImage: "/images/projects/vp15/location-map.jpg",

      items: [
        {
          place: "MIHAN Cargo Hub & SEZ",
          distance: "4 km",
        },

        {
          place: "NUC New Nagpur",
          distance: "Within catchment",
        },

        {
          place: "Outer Ring Road",
          distance: "Direct access",
        },

        {
          place: "Samruddhi Mahamarg",
          distance: "Short drive",
        },

        {
          place: "Nagpur Airport",
          distance: "10–15 min",
        },

        {
          place: "Future Metro Phase-II (Hingna)",
          distance: "Planned corridor",
        },
      ],
    },

    gallery: {
      title: "See Vrindavan Park 15 for Yourself",

      description:
        "A glimpse into the layout, infrastructure and the surrounding MIHAN corridor.",

      images: [
        {
          title: "Aerial layout view",
          image: "/images/projects/vp15/gallery-1.jpg",
        },

        {
          title: "Entrance arch / gate",
          image: "/images/projects/vp15/gallery-2.jpg",
        },

        {
          title: "Wide cement road",
          image: "/images/projects/vp15/gallery-3.jpg",
        },

        {
          title: "MIHAN backdrop view",
          image: "/images/projects/vp15/gallery-4.jpg",
        },

        {
          title: "Demarcated plot",
          image: "/images/projects/vp15/gallery-5.jpg",
        },

        {
          title: "Walking track / open space",
          image: "/images/projects/vp15/gallery-6.jpg",
        },
      ],
    },

    faq: [
      {
        question: "How far is Vrindavan Park 15 from MIHAN?",

        answer:
          "Just 4 km. This makes it one of the closest NMRDA-approved plotted projects to MIHAN.",
      },

      {
        question: "Is Vrindavan Park 15 NMRDA approved?",

        answer:
          "Yes — fully NMRDA-approved with sewage network, STP, HDPE water pipeline and underground electrification.",
      },

      {
        question:
          "What is NUC New Nagpur and how does Vrindavan Park 15 benefit?",

        answer:
          "NUC is a 1,710-acre planned mixed-use city by NMRDA, modelled on Mumbai's BKC. Vrindavan Park 15 lies in the residential catchment serving this hub.",
      },

      {
        question: "Is finance available?",

        answer:
          "Yes, up to 80% finance is available via partner banks including ICICI.",
      },

      {
        question:
          "How is Vrindavan Park 15 different from Vrindavan Park 12 and 14?",

        answer:
          "VP-12 is closest to NH-353-I, VP-14 is closest to the NUC catchment, while VP-15 is just 4 km from MIHAN.",
      },
    ],

    whatsappText: "Hi, I'm interested in Vrindavan Park 15 by Neel Infratech",
  },
  "silver-estate-nagpur": {
    slug: "silver-estate-nagpur",

    seo: {
      title:
        "Silver Estate Nagpur — 17.10 Acre NMRDA Plotted Development | Neel Infratech",

      description:
        "Silver Estate by Neel Infratech: 17.10-acre NMRDA-approved plotted development at Mouza Takli, Deoli, Tah. Nagpur.",
    },

    hero: {
      eyebrow: "★ 17.10 Acre NMRDA Development",

      title: "Silver Estate — A Flagship 17.10 Acre Address in Nagpur",

      subtitle:
        "A premium NMRDA-approved plotted development at Mouza Takli, Deoli — anchored by Samruddhi Circle, the Gumgaon growth catchment, Jamtha and the Nagpur airport.",

      image: "/images/projects/silver-estate/hero.jpg",

      stats: [
        {
          number: "17.10",
          label: "Acres of Development",
        },

        {
          number: "NH-47",
          label: "Highway Connectivity",
        },

        {
          number: "80%",
          label: "ICICI Bank Finance",
        },
      ],
    },

    trustItems: [
      {
        text: "NMRDA Approved",

        icon: `<svg fill="currentColor" viewBox="0 0 20 20"><path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM6.7 9.29L9 11.6l4.3-4.3 1.4 1.42L9 14.4l-3.7-3.7 1.4-1.42z"/></svg>`,
      },

      {
        text: "Mega 17.10 Acres",

        icon: `<svg fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.539 1.118L10 13.347l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L3.567 7.819c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>`,
      },

      {
        text: "CREDAI Member",

        icon: `<svg fill="currentColor" viewBox="0 0 20 20"><path d="M10 12a2 2 0 100-4 2 2 0 000 4z"/></svg>`,
      },

      {
        text: "80% ICICI Finance",

        icon: `<svg fill="currentColor" viewBox="0 0 20 20"><path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z"/></svg>`,
      },

      {
        text: "Jamtha-Airport Axis",

        icon: `<svg fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M3 6a3 3 0 013-3h10a1 1 0 01.8 1.6L14.25 8l2.55 3.4A1 1 0 0116 13H6a1 1 0 00-1 1v3a1 1 0 11-2 0V6z" clip-rule="evenodd"/></svg>`,
      },
    ],

    about: {
      eyebrow: "About Silver Estate",

      title:
        "Nagpur's Most Strategic Plot Buy on the Rising Jamtha-Airport Axis",

      description:
        "Silver Estate is a 17.10-acre NMRDA-approved plotted development at Mouza Takli, Deoli, strategically located near Samruddhi Circle, Gumgaon, Jamtha and the airport.",

      image: "/images/projects/silver-estate/about.jpg",
    },

    features: {
      title: "Mega Scale. NMRDA Standards.",

      description:
        "Every metre of Silver Estate's 17.10-acre footprint is engineered to NMRDA specification.",

      items: [
        {
          title: "Wide Cement Road Network",

          description:
            "Extensive cement road network designed to NMRDA specification across all 17.10 acres.",

          icon: `<svg fill="currentColor" viewBox="0 0 24 24"><path d="M3 19h18v2H3v-2zm0-4h18v2H3v-2zm0-4h18v2H3v-2zm0-8h18v2H3V3zm0 4h18v2H3V7z"/></svg>`,
        },

        {
          title: "HDPE Water Pipeline",

          description:
            "Underground HDPE water pipeline laid throughout the layout for reliable distribution.",

          icon: `<svg fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C8 6 4 9.5 4 14a8 8 0 0016 0c0-4.5-4-8-8-12z"/></svg>`,
        },

        {
          title: "Sewage Network & STP",

          description:
            "Full sewage network with sewage treatment plant per NMRDA specification.",

          icon: `<svg fill="currentColor" viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6z"/></svg>`,
        },

        {
          title: "Storm-Water Drainage",

          description:
            "Storm-water drainage system per NMRDA spec — engineered for monsoon resilience.",

          icon: `<svg fill="currentColor" viewBox="0 0 24 24"><path d="M12 2L4 5v6c0 5.5 3.5 10.7 8 12 4.5-1.3 8-6.5 8-12V5l-8-3z"/></svg>`,
        },

        {
          title: "Underground Electrification",

          description:
            "Underground electrification with street lights along all internal roads.",

          icon: `<svg fill="currentColor" viewBox="0 0 24 24"><path d="M7 22h10v-3H7v3zm5-20a5 5 0 00-5 5c0 2 1 3.5 2.5 4.5V14h5v-2.5C16 10.5 17 9 17 7a5 5 0 00-5-5z"/></svg>`,
        },

        {
          title: "Avenue Plantation + Walking Track",

          description:
            "Avenue plantation, peripheral compound wall along open space and a walking track.",

          icon: `<svg fill="currentColor" viewBox="0 0 24 24"><path d="M17 8C8 10 5.9 16.17 3.82 21.34l1.89.66.95-2.3c.48.17.98.3 1.34.3C19 20 22 3 22 3z"/></svg>`,
        },
      ],
    },

    snapshot: [
      {
        label: "Project",
        value: "Silver Estate",
      },

      {
        label: "Developer",
        value: "Neel Infratech",
      },

      {
        label: "Total Area",
        value: "17.10 Acres",
      },

      {
        label: "Location",
        value: "Mouza Takli, Deoli (Part), Ph. No. 45, Tah. Nagpur",
      },

      {
        label: "Project Type",
        value: "NMRDA Residential Plotted Development",
      },

      {
        label: "Approvals",
        value: "NMRDA",
      },

      {
        label: "Finance",
        value: "Up to 80% ICICI Bank Finance",
      },

      {
        label: "MahaRERA No.",
        value: "[ADD RERA NUMBER]",
      },
    ],

    location: {
      title: "On the Right Side of Three Growth Stories",

      mapImage: "/images/projects/silver-estate/location-map.jpg",

      items: [
        {
          place: "Samruddhi Circle",
          distance: "Direct",
        },

        {
          place: "Gumgaon Growth Cluster",
          distance: "Adjacent",
        },

        {
          place: "Jamtha (Sports / VCA / MIHAN)",
          distance: "Nearby",
        },

        {
          place: "Nagpur Airport",
          distance: "Short drive",
        },

        {
          place: "National Highway 47 (NH-47)",
          distance: "Accessible",
        },

        {
          place: "Restaurants & Daily-Needs Market",
          distance: "Nearby",
        },
      ],
    },

    gallery: {
      title: "See Silver Estate for Yourself",

      description:
        "A glimpse into the 17.10-acre layout, infrastructure and the surrounding Jamtha corridor.",

      images: [
        {
          title: "Aerial layout (17.10 acres)",
          image: "/images/projects/silver-estate/gallery-1.jpg",
        },

        {
          title: "Entrance arch / gate",
          image: "/images/projects/silver-estate/gallery-2.jpg",
        },

        {
          title: "Internal cement road",
          image: "/images/projects/silver-estate/gallery-3.jpg",
        },

        {
          title: "Demarcated plot",
          image: "/images/projects/silver-estate/gallery-4.jpg",
        },

        {
          title: "Samruddhi Circle context",
          image: "/images/projects/silver-estate/gallery-5.jpg",
        },

        {
          title: "Walking track / open lawn",
          image: "/images/projects/silver-estate/gallery-6.jpg",
        },
      ],
    },

    faq: [
      {
        question: "How big is the Silver Estate development?",

        answer:
          "17.10 acres — making it one of the larger NMRDA-approved plotted layouts in the Takli-Deoli stretch.",
      },

      {
        question: "What is Silver Estate's location?",

        answer:
          "Mouza Takli, Deoli (Part), Ph. No. 45, Tah. Nagpur — close to Samruddhi Circle, Gumgaon, Jamtha and the airport.",
      },

      {
        question: "Is Silver Estate NMRDA approved?",

        answer:
          "Yes, fully NMRDA-approved with all infrastructure per NMRDA specification.",
      },

      {
        question: "Is bank finance available?",

        answer: "Yes — up to 80% via ICICI Bank.",
      },

      {
        question: "Is Silver Estate close to the airport?",

        answer:
          "Yes — the project sits on the rising Jamtha-Airport axis with NH-47 connectivity, putting the airport within a short drive.",
      },
    ],

    whatsappText: "Hi, I'm interested in Silver Estate by Neel Infratech",
  },
  "silver-icon-3-nagpur": {
    slug: "silver-icon-3-nagpur",

    seo: {
      title:
        "Silver Icon 3 Nagpur — NMRDA Villa Plots Within City Limits | Neel Infratech",

      description:
        "Silver Icon 3 by Neel Infratech: NMRDA-approved villa plots within 1 km of Nagpur Municipal Corporation Limits.",
    },

    hero: {
      eyebrow: "★ Within 1 km of NMC Limits",

      title: "Silver Icon 3 — A Big Canvas for Bigger Dreams",

      subtitle:
        "Premium NMRDA-approved villa plots within 1 km of Nagpur Municipal Corporation limits — close to the city, but not in the chaos of it. Ready to construct, with building permission in 3 months.",

      image: "/images/projects/silver-icon-3/hero.jpg",

      stats: [
        {
          number: "1 km",
          label: "From NMC Limits",
        },

        {
          number: "10+",
          label: "Hospitals within 3 km",
        },

        {
          number: "3 mo",
          label: "Building Permission",
        },
      ],
    },

    trustItems: [
      {
        text: "NMRDA Approved",

        icon: `<svg fill="currentColor" viewBox="0 0 20 20"><path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM6.7 9.29L9 11.6l4.3-4.3 1.4 1.42L9 14.4l-3.7-3.7 1.4-1.42z"/></svg>`,
      },

      {
        text: "Premium Villa Plots",

        icon: `<svg fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.539 1.118L10 13.347l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L3.567 7.819c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>`,
      },

      {
        text: "CREDAI Member",

        icon: `<svg fill="currentColor" viewBox="0 0 20 20"><path d="M10 12a2 2 0 100-4 2 2 0 000 4z"/></svg>`,
      },

      {
        text: "Maharashtra Jeevan Pradhikaran Water",

        icon: `<svg fill="currentColor" viewBox="0 0 20 20"><path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z"/></svg>`,
      },

      {
        text: "Ready to Construct",

        icon: `<svg fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M3 6a3 3 0 013-3h10a1 1 0 01.8 1.6L14.25 8l2.55 3.4A1 1 0 0116 13H6a1 1 0 00-1 1v3a1 1 0 11-2 0V6z" clip-rule="evenodd"/></svg>`,
      },
    ],

    about: {
      eyebrow: "About Silver Icon 3",

      title: "Live Grand. Experience the Next Level Grandeur.",

      description:
        "Premium NMRDA-approved villa plots close to Nagpur city limits with strong infrastructure, healthcare access and rapid building permission support.",

      image: "/images/projects/silver-icon-3/about.jpg",
    },

    features: {
      title: "Built for Construction. Backed by After-Sale Support.",

      description:
        "Silver Icon 3 isn't just a plot — it's a full ecosystem from sanction to construction.",

      items: [
        {
          title: "Prime Location",

          description:
            "Ready to construct, with all sanctions in place. No waiting for development — just buy and build.",

          icon: `<svg fill="currentColor" viewBox="0 0 24 24"><path d="M19 5h-2V3H7v2H5c-1.1 0-2 .9-2 2v1c0 2.55 1.92 4.63 4.39 4.94.63 1.5 1.98 2.63 3.61 2.96V19H7v2h10v-2h-4v-3.1c1.63-.33 2.98-1.46 3.61-2.96C19.08 12.63 21 10.55 21 8V7c0-1.1-.9-2-2-2zM5 8V7h2v3.82C5.84 10.4 5 9.3 5 8zm14 0c0 1.3-.84 2.4-2 2.82V7h2v1z"/></svg>`,
        },

        {
          title: "Building Permission in 3 Months",

          description:
            "Neel Infratech assists buyers with building plan sanction & permission within ~3 months of plot purchase.",

          icon: `<svg fill="currentColor" viewBox="0 0 24 24"><path d="M12 8a4 4 0 100 8 4 4 0 000-8zm0-6L8.5 5.5 5 5l-.5 3.5L1 12l3.5 3.5.5 3.5 3.5.5L12 22l3.5-3.5 3.5-.5.5-3.5L23 12l-3.5-3.5-.5-3.5-3.5-.5L12 2z"/></svg>`,
        },

        {
          title: "After-Sale Support",

          description:
            "Full support for getting building permissions, all logistical help at site, active assistance arranging contractors.",

          icon: `<svg fill="currentColor" viewBox="0 0 24 24"><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z"/></svg>`,
        },

        {
          title: "9 Mtr Cement Roads",

          description:
            "Wide internal cement roads built per NMRDA specification.",

          icon: `<svg fill="currentColor" viewBox="0 0 24 24"><path d="M3 19h18v2H3v-2zm0-4h18v2H3v-2zm0-4h18v2H3v-2zm0-8h18v2H3V3zm0 4h18v2H3V7z"/></svg>`,
        },

        {
          title: "HDPE Water Pipeline",

          description:
            "Underground HDPE water network with Maharashtra Jeevan Pradhikaran connectivity.",

          icon: `<svg fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C8 6 4 9.5 4 14a8 8 0 0016 0c0-4.5-4-8-8-12z"/></svg>`,
        },

        {
          title: "Avenue Plantation + Walking Track",

          description:
            "Avenue plantation, peripheral compound wall and walking track per NMRDA specification.",

          icon: `<svg fill="currentColor" viewBox="0 0 24 24"><path d="M17 8C8 10 5.9 16.17 3.82 21.34l1.89.66.95-2.3c.48.17.98.3 1.34.3C19 20 22 3 22 3z"/></svg>`,
        },
      ],
    },

    snapshot: [
      {
        label: "Project",
        value: "Silver Icon 3",
      },

      {
        label: "Developer",
        value: "Neel Infratech",
      },

      {
        label: "Project Type",
        value: "NMRDA Villa Plots",
      },

      {
        label: "Location",
        value: "Within 1 km of Nagpur Municipal Corporation Limits",
      },

      {
        label: "Approvals",
        value: "NMRDA · Maharashtra Jeevan Pradhikaran",
      },

      {
        label: "Permission Turnaround",
        value: "~3 months",
      },

      {
        label: "MahaRERA No.",
        value: "[ADD RERA NUMBER]",
      },

      {
        label: "Membership",
        value: "CREDAI Member",
      },
    ],

    location: {
      title: "A Lifestyle Built Around Convenience",

      mapImage: "/images/projects/silver-icon-3/location-map.jpg",

      items: [
        {
          place: "Nagpur Municipal Corporation Limits",

          distance: "~1 km",
        },

        {
          place: "Hospitals within 3 km",
          distance: "10+",
        },

        {
          place: "City Bus Frequency",
          distance: "Every 30 min",
        },

        {
          place: "Water Supply",
          distance: "MJP Network",
        },

        {
          place: "Highway Access",
          distance: "Close",
        },

        {
          place: "Nagpur University",
          distance: "Catchment",
        },
      ],
    },

    gallery: {
      title: "See Silver Icon 3 for Yourself",

      description:
        "A glimpse into the layout, infrastructure and the surrounding city catchment.",

      images: [
        {
          title: "Aerial layout view",
          image: "/images/projects/silver-icon-3/gallery-1.jpg",
        },

        {
          title: "Entrance arch / gate",
          image: "/images/projects/silver-icon-3/gallery-2.jpg",
        },

        {
          title: "9-mtr cement road",
          image: "/images/projects/silver-icon-3/gallery-3.jpg",
        },

        {
          title: "Demarcated villa plot",
          image: "/images/projects/silver-icon-3/gallery-4.jpg",
        },

        {
          title: "Avenue plantation",
          image: "/images/projects/silver-icon-3/gallery-5.jpg",
        },

        {
          title: "Walking track / open lawn",
          image: "/images/projects/silver-icon-3/gallery-6.jpg",
        },
      ],
    },

    faq: [
      {
        question: "What kind of plots does Silver Icon 3 offer?",

        answer:
          "Silver Icon 3 offers NMRDA-approved villa plots ideal for independent home construction, with all infrastructure already laid out per NMRDA specification.",
      },

      {
        question: "How long until I can begin construction?",

        answer:
          "Most buyers receive building permissions within three months of plot registration, with full developer support throughout the approval process.",
      },

      {
        question: "Is Silver Icon 3 within Nagpur city limits?",

        answer:
          "The project is within 1 km of Nagpur Municipal Corporation limits and connects directly to the city via frequent bus services and arterial roads.",
      },

      {
        question: "Are hospitals and schools nearby?",

        answer:
          "Yes — more than 10 hospitals are within a 3 km radius, and the project is close to the Nagpur University educational catchment.",
      },

      {
        question: "Is bank finance available on Silver Icon 3?",

        answer:
          "Yes — partner-bank finance assistance is available for villa plot purchases.",
      },
    ],

    whatsappText: "Hi, I'm interested in Silver Icon 3 by Neel Infratech",
  },
  "rajatbhoomi-12-nagpur": {
    slug: "rajatbhoomi-12-nagpur",

    seo: {
      title:
        "Rajatbhoomi 12 Nagpur — NMRDA Plots Near Wainganga | Neel Infratech",

      description:
        "Rajatbhoomi 12 by Neel Infratech offers NMRDA-approved residential plots in Nagpur Gramin.",
    },

    hero: {
      eyebrow: "★ NMRDA & MahaRERA Approved",

      title: "Rajatbhoomi 12 — Plots Where Convenience Compounds in Value",

      subtitle:
        "A premium NMRDA-approved residential plot project by Neel Infratech in Nagpur Gramin — moments from Wainganga Engineering College, Sandesh City township and the new Nagpur airport.",

      image: "/images/projects/rajatbhoomi-12/hero.jpg",

      stats: [
        {
          number: "1 km",
          label: "Wainganga Engineering College",
        },

        {
          number: "200 m",
          label: "Sandesh City Township",
        },

        {
          number: "15 min",
          label: "New Nagpur Airport",
        },
      ],
    },

    trustItems: [
      {
        text: "NMRDA Approved",

        icon: `<svg fill="currentColor" viewBox="0 0 20 20"><path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM6.7 9.29L9 11.6l4.3-4.3 1.4 1.42L9 14.4l-3.7-3.7 1.4-1.42z"/></svg>`,
      },

      {
        text: "MahaRERA Registered",

        icon: `<svg fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.539 1.118L10 13.347l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L3.567 7.819c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>`,
      },

      {
        text: "CREDAI Member",

        icon: `<svg fill="currentColor" viewBox="0 0 20 20"><path d="M10 12a2 2 0 100-4 2 2 0 000 4z"/><path fill-rule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clip-rule="evenodd"/></svg>`,
      },

      {
        text: "80% Bank Finance",

        icon: `<svg fill="currentColor" viewBox="0 0 20 20"><path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z"/><path fill-rule="evenodd" d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z" clip-rule="evenodd"/></svg>`,
      },

      {
        text: "12+ Years of Trust",

        icon: `<svg fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M3 6a3 3 0 013-3h10a1 1 0 01.8 1.6L14.25 8l2.55 3.4A1 1 0 0116 13H6a1 1 0 00-1 1v3a1 1 0 11-2 0V6z" clip-rule="evenodd"/></svg>`,
      },
    ],

    about: {
      eyebrow: "About Rajatbhoomi 12",

      title: "Invest in Convenience. Live with Confidence.",

      description:
        "Rajatbhoomi 12 is strategically located in a fast-growing Nagpur Gramin corridor with excellent access to education, healthcare and infrastructure growth zones.",

      image: "/images/projects/rajatbhoomi-12/about.jpg",
    },

    features: {
      title: "Built to NMRDA Standards. Designed for Generations.",

      description:
        "Every metre of Rajatbhoomi 12 is engineered to NMRDA specification — from the cement roads to the underground utilities.",

      items: [
        {
          title: "9-Metre Cement Roads",

          description:
            "Wide internal cement roads built per NMRDA specification, designed for two-way traffic and long-life durability.",

          icon: `<svg fill="currentColor" viewBox="0 0 24 24"><path d="M3 19h18v2H3v-2zm0-4h18v2H3v-2zm0-4h18v2H3v-2zm0-8h18v2H3V3zm0 4h18v2H3V7z"/></svg>`,
        },

        {
          title: "HDPE Water Pipeline",

          description:
            "Underground HDPE water pipeline network laid across the entire layout for reliable, safe water distribution.",

          icon: `<svg fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C8 6 4 9.5 4 14a8 8 0 0016 0c0-4.5-4-8-8-12z"/></svg>`,
        },

        {
          title: "Storm-Water Drainage",

          description:
            "Complete storm-water drainage system built strictly to NMRDA specification — no waterlogging during monsoon.",

          icon: `<svg fill="currentColor" viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6zM6 20V4h7v5h5v11H6z"/></svg>`,
        },

        {
          title: "Fenced Compound + Walking Track",

          description:
            "Peripheral compound wall along open space with a walking track laid out per NMRDA specification.",

          icon: `<svg fill="currentColor" viewBox="0 0 24 24"><path d="M12 2L4 5v6c0 5.5 3.5 10.7 8 12 4.5-1.3 8-6.5 8-12V5l-8-3z"/></svg>`,
        },

        {
          title: "Electrification + Street Lights",

          description:
            "Underground electrification with street lights along every road inside the layout.",

          icon: `<svg fill="currentColor" viewBox="0 0 24 24"><path d="M7 22h10v-3H7v3zm5-20a5 5 0 00-5 5c0 2 1 3.5 2.5 4.5V14h5v-2.5C16 10.5 17 9 17 7a5 5 0 00-5-5z"/></svg>`,
        },

        {
          title: "Avenue Plantation + Open Lawn",

          description:
            "Avenue plantation, ecological plantation, gazebos and seating areas across communal open spaces.",

          icon: `<svg fill="currentColor" viewBox="0 0 24 24"><path d="M17 8C8 10 5.9 16.17 3.82 21.34l1.89.66.95-2.3c.48.17.98.3 1.34.3C19 20 22 3 22 3c-1 2-8 2.25-13 3.25S2 11.5 2 13.5s1.75 3.75 1.75 3.75C7 8 17 8 17 8z"/></svg>`,
        },
      ],
    },

    snapshot: [
      {
        label: "Project",
        value: "Rajatbhoomi 12",
      },

      {
        label: "Developer",
        value: "Neel Infratech",
      },

      {
        label: "Location",
        value: "Kh. No. 77/2, Ph. No. 73, Tah. Nagpur (Gramin)",
      },

      {
        label: "Project Type",
        value: "NMRDA Residential Plots",
      },

      {
        label: "Approvals",
        value: "NMRDA · MahaRERA",
      },

      {
        label: "Finance",
        value: "Up to 80% Bank Finance",
      },

      {
        label: "MahaRERA No.",
        value: "[ADD RERA NUMBER]",
      },

      {
        label: "Membership",
        value: "CREDAI Member",
      },
    ],

    location: {
      title: "Everything That Matters — Just Around the Corner",

      mapImage: "/images/projects/rajatbhoomi-12/location-map.jpg",

      items: [
        {
          place: "Wainganga Engineering College",

          distance: "1 km",
        },

        {
          place: "Sandesh City Township",
          distance: "200 m",
        },

        {
          place: "New Nagpur Airport",
          distance: "15 min",
        },

        {
          place: "Samruddhi Mahamarg Expressway",

          distance: "Easy access",
        },

        {
          place: "National Cancer Institute",

          distance: "Nearby",
        },

        {
          place: "Oxygen Bird Park",
          distance: "Nearby",
        },

        {
          place: "ISKCON Temple",
          distance: "Nearby",
        },

        {
          place: "CBSE Schools & Engineering Colleges",

          distance: "Multiple",
        },
      ],
    },

    gallery: {
      title: "See Rajatbhoomi 12 for Yourself",

      description:
        "A glimpse into the layout, infrastructure and surrounding location.",

      images: [
        {
          title: "Aerial layout view",
          image: "/images/projects/rajatbhoomi-12/gallery-1.jpg",
        },

        {
          title: "Entrance arch / gate",
          image: "/images/projects/rajatbhoomi-12/gallery-2.jpg",
        },

        {
          title: "Cement road inside layout",
          image: "/images/projects/rajatbhoomi-12/gallery-3.jpg",
        },

        {
          title: "Demarcated plot",
          image: "/images/projects/rajatbhoomi-12/gallery-4.jpg",
        },

        {
          title: "Avenue plantation / landscaping",

          image: "/images/projects/rajatbhoomi-12/gallery-5.jpg",
        },

        {
          title: "Walking track / open space",

          image: "/images/projects/rajatbhoomi-12/gallery-6.jpg",
        },
      ],
    },

    faq: [
      {
        question: "Where is Rajatbhoomi 12 located?",

        answer:
          "Rajatbhoomi 12 is at Kh. No. 77/2, Ph. No. 73, Tah. Nagpur (Gramin), Dist. Nagpur — 1 km from Wainganga Engineering College, 200 metres from Sandesh City and 15 minutes from the new Nagpur airport.",
      },

      {
        question: "Is Rajatbhoomi 12 NMRDA and MahaRERA approved?",

        answer:
          "Yes. Rajatbhoomi 12 is fully NMRDA-approved with all sanctions per NMRDA specification, and is registered under MahaRERA.",
      },

      {
        question: "Is bank finance available?",

        answer:
          "Yes — up to 80% bank finance is available on Rajatbhoomi 12 plots through partner banks and HFCs.",
      },

      {
        question: "What features & amenities does Rajatbhoomi 12 offer?",

        answer:
          "9-metre cement roads, HDPE water pipeline, underground electrification with street lights, storm-water drainage per NMRDA spec, ecological plantation, walking track, fenced compound and gazebos.",
      },

      {
        question:
          "How is Rajatbhoomi 12 different from other Rajatbhoomi projects in Nagpur?",

        answer:
          "Rajatbhoomi 12 is developed by Neel Infratech — a Nagpur-based, CREDAI-member developer with consistent NMRDA infrastructure standards.",
      },

      {
        question: "Is Rajatbhoomi 12 a good investment?",

        answer:
          "Yes — the project sits in a high-growth corridor with the Samruddhi Mahamarg, new airport, NUC New Nagpur, MIHAN and the National Cancer Institute all driving long-term price appreciation.",
      },
    ],

    whatsappText: "Hi, I'm interested in Rajatbhoomi 12 by Neel Infratech",
  },
};
