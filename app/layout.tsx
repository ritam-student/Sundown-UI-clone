import type { Metadata } from "next";
import "./globals.css";
import LenisScroller from "./lenis-scroll";



export const metadata: Metadata = {
  title: "Sundown Studio",
  description: "Sundown studio clone",
  icons: {
    icon: '/favicon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <LenisScroller />
        {children}
      </body>
    </html>
  );
}
