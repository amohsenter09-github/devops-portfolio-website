export const metadata = {
  title: "Amr Fathy — DevOps Portfolio",
  description: "AI-driven DevOps, AWS, Kubernetes, Terraform, GitOps, Observability",
};

import "./globals.css";
import { Inter } from "next/font/google";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-white dark:bg-slate-900 text-gray-800 dark:text-gray-100 antialiased`}>
        <Nav />
        <main className="min-h-screen w-full">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
