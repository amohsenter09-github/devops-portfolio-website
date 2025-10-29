export const metadata = {
  title: "InfraCore — Enterprise Infrastructure Solutions",
  description: "Professional DevOps and infrastructure automation services. AWS, Kubernetes, Terraform, GitOps, and Infrastructure as Code solutions.",
};

import "./globals.css";
import { Inter } from "next/font/google";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const inter = Inter({ 
  subsets: ["latin"],
  display: 'swap',
  variable: '--font-inter'
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} ${inter.variable} antialiased`}>
        <div className="min-h-screen flex flex-col bg-white w-full">
          <Nav />
          <main className="flex-1 w-full">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
