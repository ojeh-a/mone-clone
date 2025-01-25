import React from 'react'
import { Outfit, Open_Sans } from "next/font/google";
import "./globals.css";
import Image from "next/image";

const outfit = Outfit({
  weight: ["900", "800", "700", "600"],
  variable: "--font-outfit",
  subsets: ["latin"],
});

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
});

export const metadata = {
  title: "mone_flatheme",
  description: "Portfolio project clone",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${outfit.variable} ${openSans.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
