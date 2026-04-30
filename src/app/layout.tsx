import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Grainient from "./components/Grainient";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Labeeb Alam",
  description: "Portfolio website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="theme-color" content="#658C6E" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Mobile: solid background */}
        <div className="fixed inset-0 z-0 lg:hidden" style={{ background: '#658C6E' }} />
        {/* Desktop: animated gradient */}
        <div className="fixed inset-0 z-0 hidden lg:block overflow-hidden">
          <Grainient
            color1="#456990"
            color2="#114B5F"
            color3="#BED7DA"
          />
        </div>
        {children}
      </body>
    </html>
  );
}

