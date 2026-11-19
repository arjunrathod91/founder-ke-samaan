
import type { Metadata } from "next";
import {
  Bricolage_Grotesque,
  Hind,
} from "next/font/google";
import "./globals.css";

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["800"],
  variable: "--font-bricolage",
});

const hind = Hind({
  subsets: ["latin", "devanagari"],
  weight: ["400", "500", "700"],
  variable: "--font-hind",
});

export const metadata: Metadata = {
  title: "Founder Ke Samaan",
  description: "Wear what you're building.",
};

export default function RootLayout({
  children,
}: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${bricolage.variable} ${hind.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
      </body>
    </html>
  );
}
