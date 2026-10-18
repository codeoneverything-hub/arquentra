
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Arquentra | Strategy. Technology. Growth.",
  description:
    "Arquentra builds premium digital experiences, websites, e-commerce solutions, content strategies and AI automation for ambitious businesses.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}