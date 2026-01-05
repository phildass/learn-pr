import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Learn PR - Public Relations Learning Platform | iiskills.cloud",
  description: "Master Public Relations with comprehensive courses tailored for the Indian market. Learn media relations, crisis management, digital PR, and more.",
  keywords: "Public Relations, PR courses, India PR, Media Relations, Communication Skills, iiskills.cloud",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased min-h-screen flex flex-col`}>
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
