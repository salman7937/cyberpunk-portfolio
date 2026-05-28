import type { Metadata } from "next";
import { Orbitron, Space_Mono, Inter } from "next/font/google";
import "./globals.css";

const orbitron = Orbitron({
  variable: "--font-orbitron",
  subsets: ["latin"],
  weight: ["400", "600", "700", "900"],
  display: "swap",
  preload: true,
});

const spaceMono = Space_Mono({
  variable: "--font-space-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
  preload: false,
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  preload: false,
});

export const metadata: Metadata = {
  title: "Salman | Full-Stack Developer",
  description: "Portfolio of Salman — Full-Stack Developer & Designer building digital experiences at the intersection of code and design.",
  keywords: ["developer", "portfolio", "full-stack", "Next.js", "React"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${orbitron.variable} ${spaceMono.variable} ${inter.variable}`}
    >
      <body className="min-h-full bg-cyber-black text-cyber-text antialiased">
        {children}
      </body>
    </html>
  );
}
