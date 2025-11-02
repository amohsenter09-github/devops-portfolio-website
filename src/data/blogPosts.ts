export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  date: string;
  tags?: string[];
};

// Blog posts array - ORDER MATTERS: Display order is top to bottom
export const blogPosts: BlogPost[] = [
  // 1. Enterprise Microservices Platform
  {
    slug: "enterprise-microservices-platform",
    title: "Enterprise Microservices Platform: Terraform-Managed Multi-Environment Architecture",
    description: "A comprehensive case study of building a production-ready microservices platform with 12+ services, complete GitOps automation, and enterprise-grade security across multiple AWS environments.",
    date: "2024-01-15",
    tags: ["Terraform", "Kubernetes", "ArgoCD", "Microservices", "AWS", "GitOps", "Security", "Monitoring"]
  },
  // 2. Deploy Your Apps on K8s
  {
    slug: "cybrid-multi-account-aws-architecture",
    title: "Deploy Your Apps on K8s the GitOps Way: Using ArgoCD and Image Updater",
    description: "A comprehensive guide to implementing GitOps workflows with ArgoCD and Image Updater for automated Kubernetes deployments.",
    date: "2024-01-15",
    tags: ["Kubernetes", "ArgoCD", "GitOps", "Image Updater", "AWS EKS"]
  },
  // 3. Building a Unified Observability Stack
  {
    slug: "observability-stack-prometheus-grafana",
    title: "Building a Unified Observability Stack: Prometheus, Grafana & Jaeger",
    description: "A deep dive into implementing a comprehensive observability solution with Prometheus for metrics, Grafana for visualization, and Jaeger for distributed tracing.",
    date: "2024-01-25",
    tags: ["Observability", "Prometheus", "Grafana", "Jaeger", "Monitoring"]
  },
  // 4. Building Production-Ready MLOps Pipelines
  {
    slug: "mlops-kubernetes-pipeline",
    title: "Building Production-Ready MLOps Pipelines with Kubernetes",
    description: "How I designed and implemented a complete MLOps pipeline using Kubernetes, MLflow, and AWS SageMaker, enabling automated model training, deployment, and monitoring with enterprise-grade reliability.",
    date: "2024-01-20",
    tags: ["MLOps", "Kubernetes", "MLflow", "SageMaker", "AWS"]
  }
];

