import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";

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
      <body className="antialiased min-h-screen flex flex-col font-sans">
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
