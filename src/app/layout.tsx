import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { WixclientContextProvider } from "@/context/WixContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Miranor Store",
  description: "An e-commerce application with Next.js and Wix",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <WixclientContextProvider>
          <Navbar />
          {children}
          <Footer />
        </WixclientContextProvider>
      </body>
    </html>
  );
}
