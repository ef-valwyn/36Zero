import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Clarity from "@/components/Clarity";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "36Zero - Sustainable Marine Transportation",
  description: "Experience zero-emission marine transportation with our eco-friendly routes and cutting-edge electric vessels.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased`}>
        <Clarity projectId={process.env.NEXT_PUBLIC_CLARITY_PROJECT_ID || ''} />
        {children}
      </body>
    </html>
  );
}