import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import Navbar from "@/components/Navbar";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "FGCU AI Innovation Center",
  description:
    "A next-generation AI venture hub at Florida Gulf Coast University — Marieb College of Health & Human Services. Where healthcare, AI, robotics, and longevity converge in Southwest Florida.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={plusJakartaSans.variable}>
      <body className="min-h-screen w-full flex flex-col antialiased">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
