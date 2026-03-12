import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Konnon Technologies | AI Operating Systems and Intelligent Hardware",
  description: "Konnon Technologies is building next-generation AI operating systems, intelligent software platforms, and advanced hardware systems.",
  openGraph: {
    title: "Konnon Technologies | AI Operating Systems and Intelligent Hardware",
    description: "Konnon Technologies is building next-generation AI operating systems, intelligent software platforms, and advanced hardware systems.",
    url: "https://konnon.com",
    siteName: "Konnon Technologies",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
