'use client';

import { motion } from 'framer-motion';
import AnimatedAwsInfra from '@/components/AnimatedAwsInfra';

export default function AwsPlatformSection() {
  return (
    <section className="pt-32 md:pt-40 pb-20 md:pb-32 w-full flex items-center justify-center bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
          {/* ===== DESCRIPTION - Left Side with Vertical Animation ===== */}
          <motion.div
            className="lg:w-1/3 flex-shrink-0 mt-8 lg:mt-12"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true, margin: "-50px" }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <p className="text-gray-600 leading-relaxed text-sm mb-4">
                This architecture illustrates a fully automated AWS cloud platform built with{' '}
                <strong className="text-gray-900">Terraform</strong> and managed through a{' '}
                <strong className="text-gray-900">GitOps workflow</strong> using{' '}
                <strong className="text-gray-900">ArgoCD</strong>.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <p className="text-gray-600 leading-relaxed text-sm mb-4">
                The design spans multiple AWS accounts —{' '}
                <strong className="text-gray-900">Production</strong>,{' '}
                <strong className="text-gray-900">Staging</strong>,{' '}
                <strong className="text-gray-900">Sandbox</strong>, and{' '}
                <strong className="text-gray-900">Operations</strong> — each isolated by dedicated VPCs, IAM boundaries, and encrypted storage for maximum security and compliance.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <p className="text-gray-600 leading-relaxed text-sm mb-4">
                Core components include{' '}
                <strong className="text-gray-900">Amazon EKS clusters</strong> running Bottlerocket nodes,{' '}
                <strong className="text-gray-900">Aurora PostgreSQL</strong>,{' '}
                <strong className="text-gray-900">ElastiCache Redis</strong>, and{' '}
                <strong className="text-gray-900">CloudFront</strong> for global delivery.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
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
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <p className="text-gray-600 leading-relaxed text-sm">
                The entire platform is provisioned via modular{' '}
                <strong className="text-gray-900">Terraform code</strong>, following AWS best practices for automation, reusability, and least-privilege access — delivering a scalable, resilient, and operations-ready foundation for modern applications.
              </p>
            </motion.div>
          </motion.div>

          {/* ===== DIAGRAM CARD ===== */}
          <div className="flex-1 rounded-2xl shadow-sm border border-gray-100 p-4 bg-white mt-8 lg:mt-12">
            <AnimatedAwsInfra />
          </div>
        </div>

        {/* ===== SECTION DIVIDER ===== */}
        <div className="max-w-5xl mx-auto my-20 border-t border-gray-200" />
      </div>
    </section>
  );
}

