import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Renowacje",
  description: "Strona internetowa wykonana przez outofplace.space",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={inter.className + "w-screen overflow-x-hidden scroll-smooth"}
      >
        {children}
      </body>
    </html>
  );
}
