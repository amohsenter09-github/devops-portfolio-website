'use client';

import { motion } from 'framer-motion';
import AnimatedAwsInfra from '@/components/AnimatedAwsInfra';

export default function AwsPlatformSection() {
  return (
    <section className="py-20 md:py-32 w-full flex items-center justify-center bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* ===== DIAGRAM CARD ===== */}
        <div className="rounded-2xl shadow-sm border border-gray-100 p-4 bg-white mb-12">
          <AnimatedAwsInfra />
        </div>

        {/* ===== DESCRIPTION - Below Diagram with Animation ===== */}
        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, margin: "-50px" }}
        >
          <p className="text-gray-600 leading-relaxed text-sm mb-4">
            This architecture illustrates a fully automated AWS cloud platform built with{' '}
            <strong className="text-gray-900">Terraform</strong> and managed through a{' '}
            <strong className="text-gray-900">GitOps workflow</strong> using{' '}
            <strong className="text-gray-900">ArgoCD</strong>.
          </p>
          <p className="text-gray-600 leading-relaxed text-sm mb-4">
            The design spans multiple AWS accounts —{' '}
            <strong className="text-gray-900">Production</strong>,{' '}
            <strong className="text-gray-900">Staging</strong>,{' '}
            <strong className="text-gray-900">Sandbox</strong>, and{' '}
            <strong className="text-gray-900">Operations</strong> — each isolated by dedicated VPCs, IAM boundaries, and encrypted storage for maximum security and compliance.
          </p>
          <p className="text-gray-600 leading-relaxed text-sm mb-4">
            Core components include{' '}
            <strong className="text-gray-900">Amazon EKS clusters</strong> running Bottlerocket nodes,{' '}
            <strong className="text-gray-900">Aurora PostgreSQL</strong>,{' '}
            <strong className="text-gray-900">ElastiCache Redis</strong>, and{' '}
            <strong className="text-gray-900">CloudFront</strong> for global delivery.
          </p>
          <p className="text-gray-600 leading-relaxed text-sm mb-4">
            Security and governance are enforced through{' '}
            <strong className="text-gray-900">AWS WAF</strong>,{' '}
            <strong className="text-gray-900">GuardDuty</strong>, and{' '}
            <strong className="text-gray-900">Secrets Manager</strong>, while observability is powered by{' '}
            <strong className="text-gray-900">Prometheus</strong>,{' '}
            <strong className="text-gray-900">Grafana</strong>,{' '}
            <strong className="text-gray-900">Loki</strong>, and{' '}
            <strong className="text-gray-900">CloudWatch</strong>.
          </p>
          <p className="text-gray-600 leading-relaxed text-sm">
            The entire platform is provisioned via modular{' '}
            <strong className="text-gray-900">Terraform code</strong>, following AWS best practices for automation, reusability, and least-privilege access — delivering a scalable, resilient, and operations-ready foundation for modern applications.
          </p>
        </motion.div>

        {/* ===== SECTION DIVIDER ===== */}
        <div className="max-w-5xl mx-auto my-20 border-t border-gray-200" />
      </div>
    </section>
  );
}

