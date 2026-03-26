import ClientPage from "./ClientPage";

export const metadata = {
  title:
    "Residential & Investment Plots in Nagpur | All Projects | Neel Infra Tech",

  description:
    "Browse all residential and investment plots in Nagpur by Neel Infra Tech. Explore ongoing and completed projects with high growth potential.",

  keywords: [
    "plots in Nagpur",
    "residential plots in Nagpur",
    "investment plots in Nagpur",
    "land for sale in Nagpur",
    "Nagpur real estate projects",
    "ongoing projects in Nagpur",
  ],

  openGraph: {
    title: "Plots in Nagpur | Neel Infra Tech",
    description:
      "Explore all ongoing and completed plot projects in Nagpur with excellent connectivity.",
    url: "https://www.neelinfratech.com/properties",
    siteName: "Neel Infra Tech",
    images: [
      {
        url: "/images/propertiesDetailedBanner.png",
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
  },
};

export default function Page() {
  return <ClientPage />;
}
