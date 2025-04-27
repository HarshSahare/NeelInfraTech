import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/layout/navbar";
import localFont from "next/font/local";
import { Poppins } from "next/font/google";

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

export const metadata: Metadata = {
  title: "Neel InfraTech",
  description: "It is a real estate company",
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
      </body>
    </html>
  );
}
