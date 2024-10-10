import "./globals.css";

export const metadata = {
  title: "MyPortfolio",
  description: "a webpage that showcase my acccomplishments",
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
