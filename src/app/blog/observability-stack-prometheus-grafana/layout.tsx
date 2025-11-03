import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Building a Unified Observability Stack: Prometheus, Grafana & Jaeger | InfraCore Blog",
  description: "A deep dive into implementing a comprehensive observability solution with Prometheus for metrics, Grafana for visualization, and Jaeger for distributed tracing.",
  keywords: ["Observability", "Prometheus", "Grafana", "Jaeger", "Monitoring", "Distributed Tracing"],
  authors: [{ name: "Amr Fathy" }],
  openGraph: {
    title: "Building a Unified Observability Stack: Prometheus, Grafana & Jaeger",
    description: "A deep dive into implementing a comprehensive observability solution with Prometheus for metrics, Grafana for visualization, and Jaeger for distributed tracing.",
    type: "article",
    publishedTime: "2024-01-25",
    authors: ["Amr Fathy"],
    tags: ["Observability", "Prometheus", "Grafana", "Jaeger", "Monitoring"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Building a Unified Observability Stack",
    description: "A deep dive into implementing a comprehensive observability solution with Prometheus for metrics, Grafana for visualization, and Jaeger for distributed tracing.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}

