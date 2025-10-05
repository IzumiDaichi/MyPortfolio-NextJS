import type { Metadata } from "next";
import { Poppins} from "next/font/google";
import "./globals.css";
import NavigationBar from "../components/layout/NavigationBar"
import Footer from '@/components/layout/Footer'

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400" , "700"],
  style: ["normal", "italic"],
});

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
      <body
        className={`${poppins.variable} antialiased`}
      >
        <NavigationBar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
