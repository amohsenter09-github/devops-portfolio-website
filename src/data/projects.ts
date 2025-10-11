import type { Project } from "@/components/ProjectCard";

export const projects: Project[] = [
  {
    slug: "aviv-group-replatforming",
    title: "AVIV Group - Immowelt/Immonet AWS Replatforming",
    summary:
      "Led complete migration from on-prem to AWS EKS with Terraform modules and AWS CDK. Built automated CI/CD pipelines with CircleCI & GitHub Actions, implemented GitOps workflows, and deployed comprehensive observability stacks.",
    tags: ["AWS", "EKS", "Terraform", "CDK", "GitOps", "Datadog", "CircleCI"],
  },
  {
    slug: "infracore-multi-account-aws",
    title: "InfraCore - Multi-Account AWS Infrastructure",
    summary:
      "Architected secure multi-account AWS infrastructure with EKS (Bottlerocket), GitOps (ArgoCD), and full observability. Integrated OIDC, Secrets Manager, and achieved 99.9% uptime with rapid provisioning.",
    tags: ["AWS", "EKS", "Bottlerocket", "ArgoCD", "OIDC", "Prometheus", "Grafana"],
  },
  {
    slug: "revolutiones-cpa-platform",
    title: "RevolutionES - CPA/PA Cloud Platform",
    summary:
      "Designed multi-account AWS architecture for CPA/PA applications. Deployed ARM64 EKS clusters with ExternalDNS, VPA, CSI Secrets Store, PostgreSQL RDS v16, and GitHub Actions pipelines.",
    tags: ["AWS", "EKS", "ARM64", "RDS", "GitHub Actions", "PostgreSQL"],
  },
  {
    slug: "epam-cicd-automation",
    title: "EPAM Systems - CI/CD & Kubernetes Automation",
    summary:
      "Delivered CI/CD automation and Kubernetes containerization for Schneider Electric, Bose, and Knab. Provisioned AWS infrastructure with Terraform, optimized performance, and reduced incidents by 30%.",
    tags: ["Kubernetes", "Jenkins", "Terraform", "AWS", "CI/CD", "Microservices"],
  },
  {
    slug: "aurea-edi-automation",
    title: "Aurea Software - EDI & B2B Integration Automation",
    summary:
      "Managed IBM Sterling B2B integrator operations, processed $300M+ monthly transactions, and automated PGP-secured EDI workflows. Integrated EDI processes into CI/CD pipelines using Jenkins and Git.",
    tags: ["EDI", "IBM Sterling", "Jenkins", "PGP", "B2B Integration", "Automation"],
  },
  {
    slug: "observability-stack-implementation",
    title: "Unified Observability Stack Implementation",
    summary:
      "Implemented comprehensive monitoring solutions with Prometheus, Grafana, Loki, Tempo, and Datadog. Built custom dashboards, alerts, and achieved 99.9% uptime across multiple environments.",
    tags: ["Prometheus", "Grafana", "Loki", "Tempo", "Datadog", "Monitoring"],
  },
];
