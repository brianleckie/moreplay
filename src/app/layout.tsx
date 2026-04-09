import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MOREPLAY™ — Streetwear Paraguay",
  description: "Streetwear. Paraguay.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
