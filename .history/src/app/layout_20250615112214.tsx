import type { Metadata } from "next";
import { Inter } from "next/font/google"; // Import Inter font
import "./globals.css";
import NavigationMenu from "@/app/component/Menu"
import Footer from "@/app/component/Footer"

const interFont = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Add any meta tags, title, or links here */}
      </head>
      <body className={`${interFont.variable} antialiased`}>
        <header className="sticky top-0 z-50 bg-white shadow-md">
          {/* Add header content here */}
          <NavigationMenu />
        </header>
        {children}
        <footer>
          {/* Add footer content here */}
          <Footer />
        </footer>
      </body>
    </html>
  );
}