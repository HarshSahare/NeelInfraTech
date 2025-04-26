import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/layout/navbar";
import localFont from "next/font/local";

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
    <html lang="en" className={`${Classica.variable}`}>
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
