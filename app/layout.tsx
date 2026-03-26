import "./globals.css";
import Navbar from "./components/layout/navbar";
import localFont from "next/font/local";
import { Poppins } from "next/font/google";
import Footer from "./components/layout/footer";
import { Properties } from "./lib/properties";

const Classica = localFont({
  src: [
    { path: "../public/fonts/Classica.ttf", weight: "300", style: "normal" },
    {
      path: "../public/fonts/Classica-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-classica",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-poppins",
});

export const metadata = {
  title: "Neel Infra Tech | Premium Plots in Nagpur",
  description:
    "Neel Infratech is a real estate consulting and land development company that helps investors build secure wealth through strategic land investments in Nagpur.",

  keywords: [
    "plots in Nagpur",
    "residential plots in Nagpur",
    "investment plots in Nagpur",
    "land for sale in Nagpur",
    "Nagpur real estate investment",
    "premium plots in Nagpur",
  ],

  authors: [{ name: "Neel Infra Tech" }],

  openGraph: {
    title: "Neel Infra Tech",
    description:
      "Neel Infratech is a real estate consulting and land development company that helps investors build secure wealth through strategic land investments in Nagpur.",
    url: "https://www.neelinfratech.com",
    siteName: "Neel Infra Tech",
    images: [
      {
        url: Properties["vrindavan park"].bannerImage,
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${Classica.variable} ${poppins.variable}`}>
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
