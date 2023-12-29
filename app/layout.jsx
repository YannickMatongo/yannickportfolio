import { Outfit } from "next/font/google";
import "./globals.css";
//Components
import Header from "@/components/Header";
import Footer from "@/components/Footer";
// Theme Provider
import { ThemeProvider } from "@/components/ThemeProvider";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata = {
  title: "Yannick Matongo - Portfolio",
  description: "Bienvenue sur mon portfolio, où je présente mes compétences et mon parcours professionnel.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body className={outfit.className}>
      <link rel="icon" href="/public/logo.svg" />
        <ThemeProvider attribute='class' defaultTheme='light'>
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
