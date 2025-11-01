export const metadata = {
  title: "InfraCore — Enterprise Infrastructure Solutions",
  description: "Professional DevOps and infrastructure automation services. AWS, Kubernetes, Terraform, GitOps, and Infrastructure as Code solutions.",
};

import "./globals.css";
import { Inter, JetBrains_Mono } from "next/font/google";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const inter = Inter({ 
  subsets: ["latin"],
  display: 'swap',
  variable: '--font-inter'
});

const jetbrainsMono = JetBrains_Mono({ 
  subsets: ["latin"],
  display: 'swap',
  variable: '--font-mono',
  weight: ['400', '500', '600', '700']
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth light" suppressHydrationWarning>
      <body className={`${inter.className} ${inter.variable} ${jetbrainsMono.variable} antialiased bg-white`}>
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
