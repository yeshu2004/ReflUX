import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next"
import "./globals.css";

export const metadata: Metadata = {
  title: "ReflUX | UX Club - VIT Bhopal",
  description:
    "Join ReflUX, a 5-day online UX sprint by the UX Club of VIT Bhopal University. Learn UX fundamentals, use tools like Figma and no-code builders, and build real-world web prototypes. Culminates in a 1-day hackathon and industry-led evaluation.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>{children}<Analytics /></body>
    </html>
  );
}
