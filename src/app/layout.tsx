import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google"; // Modern sans and elegant serif
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Jon Parras | El Tony Robbins Peruano",
  description: "Transforma tu vida y alcanza tu potencial con Jon Parras. Liderazgo, marketing multinivel y crecimiento personal.",
};

import Footer from "@/components/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${inter.variable} ${playfair.variable}`}>
        {children}
        <Footer />
      </body>
    </html>
  );
}
