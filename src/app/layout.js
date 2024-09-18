import "./globals.css";

export const metadata = {
  title: "MyPortfolio",
  description: "A Portfolio Showcasing my works",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
