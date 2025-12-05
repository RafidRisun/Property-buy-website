import type { Metadata } from "next";
import { Alexandria } from "next/font/google";
import "./globals.css";
import localFont from "next/font/local";

const generalSans = localFont({
  src: [
    {
      path: "./fonts/GeneralSans-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/GeneralSans-Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/GeneralSans-Semibold.otf",
      weight: "600",
      style: "normal",
    },
    {
      path: "./fonts/GeneralSans-Bold.otf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-general-sans",
  display: "swap",
});

const alexandria = Alexandria({
  variable: "--font-alexandria",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "WiztecBD-task",
  description: "Please hire me please please",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${generalSans.variable} ${alexandria.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
