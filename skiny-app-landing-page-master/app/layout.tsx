import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Skinly - Yapay Zeka Destekli Cilt Bakım Asistanı",
  description: "Skinly, gelişmiş yapay zekâ teknolojisiyle cildinizi tanımanıza ve geliştirmenize yardımcı olur. Kişiye özel bakım rutinleri oluşturun, ilerlemenizi takip edin ve cildiniz için en uygun ürünleri keşfedin.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
