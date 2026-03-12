import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Konnon Technologies | Precision Hardware & AI Systems",
  description: "Konnon Technologies engineers next-generation AI operating systems, intelligent software platforms, and advanced hardware architectures.",
  openGraph: {
    title: "Konnon Technologies | Precision Hardware & AI Systems",
    description: "Konnon Technologies engineers next-generation AI operating systems, intelligent software platforms, and advanced hardware architectures.",
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
      <body className={`${inter.variable} font-sans antialiased bg-[#030407] text-slate-200 selection:bg-slate-700 selection:text-white`}>
        <div className="noise-overlay" />
        {children}
      </body>
    </html>
  );
}
