import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import { getLocale } from "@/lib/i18n";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  
  if (locale === 'tr') {
    return {
      title: "Skinly - Yapay Zeka Destekli Cilt Bakım Asistanı",
      description: "Skinly, gelişmiş yapay zekâ teknolojisiyle cildinizi tanımanıza ve geliştirmenize yardımcı olur. Kişiye özel bakım rutinleri oluşturun, ilerlemenizi takip edin ve cildiniz için en uygun ürünleri keşfedin.",
    };
  }
  
  return {
    title: "Skinly - AI-Powered Skincare Assistant",
    description: "Skinly helps you understand and improve your skin with advanced AI technology. Create personalized care routines, track your progress, and discover the best products for your skin.",
  };
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();
  
  return (
    <html lang={locale}>
      <body className={`${inter.variable} antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
