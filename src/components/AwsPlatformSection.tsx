'use client';

import AnimatedAwsInfra from '@/components/AnimatedAwsInfra';

export default function AwsPlatformSection() {
  return (
    <section className="py-20 md:py-32 w-full flex items-center justify-center bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* ===== HEADER + DESCRIPTION ===== */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Automated AWS Cloud Platform
                </h2>
                <p className="text-gray-600 leading-relaxed text-sm md:text-base mb-5">
                    This architecture illustrates a fully automated AWS cloud platform
                    built with <strong>Terraform</strong> and managed through a
                    <strong> GitOps workflow</strong> using <strong>ArgoCD</strong>.
                </p>
                <p className="text-gray-600 leading-relaxed text-sm md:text-base mb-5">
                    The platform spans multiple AWS accounts —
                    <strong> Production</strong>, <strong>Staging</strong>,
                    <strong> Sandbox</strong>, and <strong>Operations</strong> —
                    each isolated by dedicated VPCs, IAM boundaries, and encrypted storage
                    for maximum security and compliance.
                </p>
                <p className="text-gray-600 leading-relaxed text-sm md:text-base mb-5">
                    Core components include <strong>Amazon EKS clusters</strong> running
                    Bottlerocket nodes, <strong>Aurora PostgreSQL</strong>,
                    <strong> ElastiCache Redis</strong>, and <strong>CloudFront</strong>{' '}
                    for global delivery. Security and governance are enforced through{' '}
                    <strong>AWS WAF</strong>, <strong>GuardDuty</strong>, and{' '}
                    <strong>Secrets Manager</strong>, while observability is powered by{' '}
                    <strong>Prometheus</strong>, <strong>Grafana</strong>,{' '}
                    <strong>Loki</strong>, and <strong>CloudWatch</strong>.
                </p>
                <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                    The entire platform is provisioned via modular{' '}
                    <strong>Terraform code</strong>, following AWS best practices for
                    automation, reusability, and least-privilege access — delivering a
                    scalable, resilient, and operations-ready foundation for modern
                    applications.
          </p>
        </div>

        {/* ===== DIAGRAM CARD ===== */}
        <div className="rounded-2xl shadow-sm border border-gray-100 p-4 bg-white">
          <AnimatedAwsInfra />
        </div>

        {/* ===== SECTION DIVIDER ===== */}
        <div className="max-w-5xl mx-auto my-20 border-t border-gray-200" />
      </div>
    </section>
  );
}

