
import { Inter } from "next/font/google";
import "./globals.css";


import Navigation from "../ui/Navigation";
import Footer from "../ui/Footer"

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Gazing Calvary",
  description: "Christ Centered",
};

export default function RootLayout({ children }) {

 
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navigation/>
        {children}</body>
        <Footer/>
    </html>
  );
}
