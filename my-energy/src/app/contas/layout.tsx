import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contas | MyEnergy",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <main>{children}</main>;
}
