import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Aliende - AI Voice Assistant for Logistics",
  description: "Turn missed logistics calls into qualified opportunities. 24/7 AI voice assistant for freight teams, dispatch operations, and transport businesses.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} scroll-smooth h-full`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
