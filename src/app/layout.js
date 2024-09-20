import "./globals.css";
import Navbar from "./Navbar";

export const metadata = {
  title: "MyPortfolio",
  description: "A Portfolio Showcasing my works",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        <Navbar/>
      </body>
    </html>
  );
}
