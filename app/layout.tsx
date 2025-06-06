import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ScrollProgress } from "@/components/ui/scroll-progress";
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
  title: "WebDevPro - Premium Web Development Services",
  description:
    "Expert web development services for modern businesses. From landing pages to full-scale applications, we deliver high-performance, secure, and SEO-optimized websites.",
  keywords: [
    "web development",
    "professional websites",
    "responsive design",
    "SaaS development",
    "landing page design",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gradient-to-b from-neutral-50 to-neutral-100 dark:from-neutral-950 dark:to-neutral-900 min-h-screen`}
      >
        <ScrollProgress />
        {children}
      </body>
    </html>
  );
}
