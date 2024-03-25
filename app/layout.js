import { Inter } from "next/font/google";
import "./globals.css";
import { Footer, Navbar } from "@/components";
import classNames from "classnames";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Nahla Naturals",
  description: "This is for You, baby",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="layout">
          <header>
            <Navbar />
          </header>
          <main className="main-container">{children}</main>
          <footer>
            <Footer />
          </footer>
        </div>
      </body>
    </html>
  );
  // <div className="layout">
  //   <header>
  //     <Navbar />
  //   </header>
  //   <main className="main-container">{children}</main>
  //   <footer>
  //     <Footer />
  //   </footer>
  // </div>;
}
