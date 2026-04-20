import type { Metadata } from "next";
import { Syne, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import LayoutPreloader from "@/components/ui/layout-preloader";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["700", "800"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500"],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Vexor Solutions | Engineering Growth. Designing Futures.",
  description: "Vexor Solutions helps businesses scale with cutting-edge technology, strategy, and design.",
  other: {
    "color-scheme": "dark",
    "darkreader-lock": "true",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body
        suppressHydrationWarning
        className={`${syne.variable} ${inter.variable} ${jetbrainsMono.variable} antialiased`}
      >
        <LayoutPreloader />
        <div className="noise" />
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
