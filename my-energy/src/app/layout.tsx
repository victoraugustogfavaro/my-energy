import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Home | MyEnergy",
  description: "Sustentabilidade para um futuro melhor",
};

export const viewport = {
  initialScale: 1.0,
  width: "device-width",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className="flex flex-col min-h-screen">
        <main>{children}</main>
      </body>
    </html>
  );
}
