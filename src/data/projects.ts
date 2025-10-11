import type { Project } from "@/components/ProjectCard";

export const projects: Project[] = [
  {
    slug: "immowelt-aws-replatforming",
    title: "Immowelt / Immonet Replatforming to AWS",
    summary:
      "Led migration to AWS EKS with Terraform and GitOps; CI/CD via CircleCI/GitHub Actions; Datadog + Prometheus observability.",
    tags: ["AWS", "EKS", "Terraform", "GitOps", "Datadog"],
  },
  {
    slug: "eks-cost-optimization",
    title: "EKS Cost Optimization (45–50% mem util)",
    summary:
      "Right-sized memory requests/limits via Grafana metrics and workload profiling; achieved ~45–50% utilization without incidents.",
    tags: ["EKS", "Grafana", "Optimization"],
  },
  {
    slug: "multi-account-aws-revolutiones",
    title: "Multi-Account AWS Architecture (RevolutionES)",
    summary:
      "ARM64 EKS, ExternalDNS, CSI Secrets Store; RDS v16 with monitoring; GitHub Actions pipelines; DR with S3 backups.",
    tags: ["AWS", "EKS", "RDS", "GitHub Actions"],
  },
  {
    slug: "observability-cybrid",
    title: "Unified Observability (Cybrid)",
    summary:
      "Prometheus, Grafana, Loki, Tempo with Slack/PagerDuty alerts; OIDC, KMS, Secrets Manager; achieved 99.9% uptime.",
    tags: ["Observability", "Prometheus", "Loki", "Tempo", "OIDC"],
    link: "https://github.com/YOUR_USERNAME/your-observability-repo",
  },
];
