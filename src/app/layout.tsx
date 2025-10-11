export const metadata = {
  title: "Amr Fathy — DevOps Portfolio",
  description: "AI-driven DevOps, AWS, Kubernetes, Terraform, GitOps, Observability",
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
            <body className={`${inter.className} ${inter.variable} bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 antialiased`}>
        <div className="min-h-screen flex flex-col">
          <Nav />
          <main className="flex-1 flex items-center justify-center w-full">
            <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              {children}
            </div>
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
