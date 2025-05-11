import type { Metadata } from "next";
import "./globals.css";



export const metadata: Metadata = {
  title: "Sundown",
  description: "Sundown studio clone",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
