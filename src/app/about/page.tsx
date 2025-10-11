import Container from "@/components/Container";

export default function About() {
  return (
    <Container>
      <h1 className="text-3xl font-semibold">About</h1>
      <p className="mt-4 text-gray-700 leading-7 max-w-3xl">
        I&apos;m Amr Fathy, a Senior DevOps / Platform Engineer focused on building scalable AWS & Kubernetes
        platforms with Terraform, GitOps, and strong observability. I&apos;ve led replatforming and automation
        initiatives for AVIV Group (Immowelt/Immonet), Cybrid, EPAM (Schneider Electric, Bose, Knab), and more.
      </p>
      <ul className="mt-6 grid gap-2 text-sm text-gray-600 list-disc pl-5">
        <li>AWS: EKS, RDS, VPC, S3, IAM/OIDC, KMS, CloudFront</li>
        <li>Automation: Terraform, CDK, ArgoCD, GitHub Actions, CircleCI, Jenkins</li>
        <li>Observability: Datadog, Prometheus, Grafana, Loki, Tempo, CloudWatch</li>
        <li>Security: IAM hardening, Secrets Manager, container hardening</li>
      </ul>
    </Container>
  );
}
