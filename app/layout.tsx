import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "KVN Group | People · Places · Possibilities",
  description: "KVN Group brings together businesses, destinations and experiences across entertainment and hospitality.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body>{children}</body></html>;
}
