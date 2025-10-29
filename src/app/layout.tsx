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
    <html lang="en" className="scroll-smooth light" suppressHydrationWarning>
      <body className={`${inter.className} ${inter.variable} antialiased bg-white`}>
        <div className="min-h-screen flex flex-col bg-white w-full">
          <Nav />
          <main className="flex-1 w-full bg-white">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
