import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Movie DB",
  description: "Movie DB",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
       <nav className="px-10 pt-5">
        <Link prefetch href="/" className="text-2xl font-semibold">
        Movie <span  className="text-teal-500"> DB</span>
        </Link>
       </nav>
        {children}
        </body>
    </html>
  );
}
