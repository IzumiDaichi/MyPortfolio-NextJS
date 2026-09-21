import type { Metadata } from "next";
import "./globals.css";
import NavigationBar from "../components/layout/NavigationBar/NavigationBar"
import Footer from '@/components/layout/Footer/Footer'

export const metadata: Metadata = {
  title: "MyPortfolio",
  description: "Jake Rupisan's Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <NavigationBar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
