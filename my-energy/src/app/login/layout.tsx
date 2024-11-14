import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Login | MyEnergy",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <main>{children}</main>;
}
