import type { Metadata } from "next";
import { Josefin_Sans, Open_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const josefin = Josefin_Sans({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["300", "400", "600", "700"], // pick what you need
});

const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Travel Explorer | Discover Amazing Destinations",
  description: "Plan your next adventure with Travel Explorer. Discover beautiful destinations, tips, and travel guides worldwide.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`w-screen overflow-x-hidden ${josefin.variable} ${openSans.variable}`}>
        <Navbar />
        <main className="relative">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
