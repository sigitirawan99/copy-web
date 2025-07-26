import type { Metadata } from "next";
import { Mulish } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";

const mulish = Mulish({
  variable: "--font-mulish-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Layanan Web Hosting",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${mulish.variable} antialiased`}>
        <Navbar />
        <main className="bg-gray-50"> {children}</main>
      </body>
    </html>
  );
}
