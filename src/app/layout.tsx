export const metadata = {
  title: "InfraCore — Enterprise Infrastructure Solutions",
  description: "Professional DevOps and infrastructure automation services. AWS, Kubernetes, Terraform, GitOps, and Infrastructure as Code solutions.",
  keywords: ["DevOps", "Cloud Infrastructure", "AWS", "Kubernetes", "Terraform", "GitOps", "Infrastructure as Code", "CI/CD", "MLOps"],
  authors: [{ name: "Amr Fathy" }],
  creator: "Amr Fathy",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://infra-ai-art.delivery",
    title: "InfraCore — Enterprise Infrastructure Solutions",
    description: "Professional DevOps and infrastructure automation services. AWS, Kubernetes, Terraform, GitOps, and Infrastructure as Code solutions.",
    siteName: "InfraCore",
    images: [
      {
        url: "https://infra-ai-art.delivery/og-image.png",
        width: 1200,
        height: 630,
        alt: "InfraCore — Enterprise Infrastructure Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "InfraCore — Enterprise Infrastructure Solutions",
    description: "Professional DevOps and infrastructure automation services. AWS, Kubernetes, Terraform, GitOps, and Infrastructure as Code solutions.",
    images: [
      {
        url: "https://infra-ai-art.delivery/og-image.png",
        width: 1200,
        height: 630,
        alt: "InfraCore — Enterprise Infrastructure Solutions",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
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
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Amr Fathy",
              jobTitle: "Senior DevOps & Cloud Platform Engineer",
              url: "https://infra-ai-art.delivery",
              sameAs: [
                "https://linkedin.com/in/amr-fathy-4a826a77"
              ],
              knowsAbout: [
                "DevOps",
                "Cloud Infrastructure",
                "AWS",
                "Kubernetes",
                "Terraform",
                "GitOps",
                "Infrastructure as Code"
              ]
            })
          }}
        />
      </head>
      <body className={`${inter.className} ${inter.variable} ${jetbrainsMono.variable} antialiased bg-white`}>
        {/* Skip to content link for accessibility */}
        <a 
          href="#main-content" 
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-cyan-600 focus:text-white focus:rounded-md focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 transition-all"
        >
          Skip to main content
        </a>
        <div className="min-h-screen flex flex-col bg-white w-full">
          <Nav />
          <main id="main-content" className="flex-1 w-full bg-white">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
