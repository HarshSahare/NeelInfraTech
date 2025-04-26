import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/layout/navbar";

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
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
