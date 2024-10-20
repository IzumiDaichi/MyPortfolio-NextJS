import "./globals.css";
import { DarkModeProvider } from "@/lib/DarkModeContext";
export const metadata = {
  title: "MyPortfolio",
  description: "a webpage that showcase my acccomplishments",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <DarkModeProvider>
        {children}
        </DarkModeProvider>
      </body>
    </html>
  );
}
