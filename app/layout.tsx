import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import localfont from "next/font/local";
import "./globals.css";

const inter = Roboto({ subsets: ["latin"], weight: ["100", "300", "400", "500", "700", "900"] });

const satoshi = localfont ({
  src:[
    {
      path:"../public/fonts/SATOSHI-REGULAR.ttf"
    },
  ],
  variable:"--font-satoshi",
})

export const metadata: Metadata = {
  title: "DZAEN",
  description: "Design and development Studio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${satoshi.variable} ${inter.className}`}>{children}</body>
    </html>
  );
}