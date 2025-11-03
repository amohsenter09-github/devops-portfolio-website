import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Enterprise Microservices Platform: Terraform-Managed Multi-Environment Architecture | InfraCore Blog",
  description: "A comprehensive case study of building a production-ready microservices platform with 12+ services, complete GitOps automation, and enterprise-grade security across multiple AWS environments.",
  keywords: ["Terraform", "Kubernetes", "ArgoCD", "Microservices", "AWS", "GitOps", "Enterprise Architecture"],
  authors: [{ name: "Amr Fathy" }],
  openGraph: {
    title: "Enterprise Microservices Platform: Terraform-Managed Multi-Environment Architecture",
    description: "A comprehensive case study of building a production-ready microservices platform with 12+ services, complete GitOps automation, and enterprise-grade security across multiple AWS environments.",
    type: "article",
    publishedTime: "2024-01-15",
    authors: ["Amr Fathy"],
    tags: ["Terraform", "Kubernetes", "ArgoCD", "Microservices", "AWS", "GitOps"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Enterprise Microservices Platform",
    description: "A comprehensive case study of building a production-ready microservices platform with 12+ services, complete GitOps automation, and enterprise-grade security.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}

