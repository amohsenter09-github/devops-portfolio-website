import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Building Production-Ready MLOps Pipelines with Kubernetes | InfraCore Blog",
  description: "How I designed and implemented a complete MLOps pipeline using Kubernetes, MLflow, and AWS SageMaker, enabling automated model training, deployment, and monitoring with enterprise-grade reliability.",
  keywords: ["MLOps", "Kubernetes", "MLflow", "SageMaker", "AWS", "Machine Learning", "DevOps"],
  authors: [{ name: "Amr Fathy" }],
  openGraph: {
    title: "Building Production-Ready MLOps Pipelines with Kubernetes",
    description: "How I designed and implemented a complete MLOps pipeline using Kubernetes, MLflow, and AWS SageMaker, enabling automated model training, deployment, and monitoring with enterprise-grade reliability.",
    type: "article",
    publishedTime: "2024-01-20",
    authors: ["Amr Fathy"],
    tags: ["MLOps", "Kubernetes", "MLflow", "SageMaker", "AWS"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Building Production-Ready MLOps Pipelines with Kubernetes",
    description: "How I designed and implemented a complete MLOps pipeline using Kubernetes, MLflow, and AWS SageMaker, enabling automated model training, deployment, and monitoring.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}

