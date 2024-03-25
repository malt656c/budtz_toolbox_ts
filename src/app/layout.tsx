import type { Metadata } from "next";
import { Inter, Roboto } from "next/font/google";
import { cn } from "@/lib/utils";

import "./globals.css";
import Header from "@/components/globals/header";

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-roboto",
  display: "swap",
});
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});
export const metadata: Metadata = {
  title: {
    template: "BudtziTools - %s",
    default: "BudtziTools",
  },
  icons: {
    icon: "public/manifest-icon-192.maskable.png",
    shortcut: "public/manifest-icon-192.maskable.png",
    apple: "public/apple-icon-180.png",
  },
  appleWebApp: {
    title: "BudtziTools",
    statusBarStyle: "black-translucent",
    startupImage: ["public/manifest-icon-512.maskable.png"],
  },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn(roboto.variable, inter.variable, "dark")}>
      <body className="min-h-screen bg-background font-sans antialiased">
        <Header/>
        {children}</body>
    </html>
  );
}
