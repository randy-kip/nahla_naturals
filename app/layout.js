import { Footer, Navbar } from "@/components";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";

import { StateContext } from "@/context/StateContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Nahla Naturals",
  description: "This is for You, Baby",
  icons: {
    icon: "/icons/apple-touch-icon.png",
    icon2: "/icons/favicon-32x32.png",
    icon3: "/icons/favicon-16x16.png",
  },
  manifest: "/icons/site.webmanifest",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/icons/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/icons/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/icons/favicon-16x16.png"
        />
        <link rel="manifest" href="/icons/site.webmanifest"></link>
        <div className="layout">
          <header>
            <Navbar />
          </header>

          <main className="main-container">
            <StateContext>
              <Toaster />
              {children}
            </StateContext>
          </main>

          <footer>
            <Footer />
          </footer>
        </div>
      </body>
    </html>
  );
}
