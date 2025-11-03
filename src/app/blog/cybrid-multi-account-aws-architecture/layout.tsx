import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Deploy Your Apps on K8s the GitOps Way: Using ArgoCD and Image Updater | InfraCore Blog",
  description: "A comprehensive guide to implementing GitOps workflows with ArgoCD and Image Updater for automated Kubernetes deployments.",
  keywords: ["Kubernetes", "ArgoCD", "GitOps", "Image Updater", "AWS EKS", "CI/CD"],
  authors: [{ name: "Amr Fathy" }],
  openGraph: {
    title: "Deploy Your Apps on K8s the GitOps Way: Using ArgoCD and Image Updater",
    description: "A comprehensive guide to implementing GitOps workflows with ArgoCD and Image Updater for automated Kubernetes deployments.",
    type: "article",
    publishedTime: "2024-01-15",
    authors: ["Amr Fathy"],
    tags: ["Kubernetes", "ArgoCD", "GitOps", "Image Updater", "AWS EKS"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Deploy Your Apps on K8s the GitOps Way",
    description: "A comprehensive guide to implementing GitOps workflows with ArgoCD and Image Updater for automated Kubernetes deployments.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}

