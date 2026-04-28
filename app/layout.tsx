import type { Metadata } from "next";
import { Manrope, Work_Sans } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { MobileNav } from "@/components/layout/MobileNav";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  variable: "--font-manrope",
});

const workSans = Work_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-work-sans",
});

export const metadata: Metadata = {
  title: "GiraHomes | Luxury Real Estate in Kigali, Rwanda",
  description: "Buy, Rent, or Invest in Verified Properties with Rwanda's most trusted real estate platform. Find your dream home in Kigali.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${manrope.variable} ${workSans.variable}`}>
      <head>
        <link 
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" 
          rel="stylesheet" 
        />
      </head>
      <body className="font-body-md bg-background text-on-background min-h-screen flex flex-col antialiased">
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
        <MobileNav />
      </body>
    </html>
  );
}
