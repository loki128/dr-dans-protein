import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Dr. Dan's Protein | Clean Protein, Built on Principle",
  description:
    "100% clean whey protein created by a biologist, firefighter, and cancer survivor. No fillers. No BS. Just protein you can trust.",
  openGraph: {
    title: "Dr. Dan's Protein | Clean Protein, Built on Principle",
    description:
      "100% clean whey protein created by a biologist, firefighter, and cancer survivor. No fillers. No BS. Just protein you can trust.",
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
      <body className={`${inter.variable} ${playfair.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
