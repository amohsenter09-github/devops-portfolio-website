"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="w-full min-h-screen bg-white">
      {/* Hero Intro Section */}
      <section className="py-24 bg-gradient-to-b from-gray-50 via-white to-gray-100">
        <div className="max-w-4xl mx-auto text-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              About
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              I&apos;m <span className="font-semibold text-gray-900">Amr Fathy</span>, a Senior <span className="font-semibold text-gray-900">DevOps & Cloud Platform Engineer</span> with over 15 years of experience building secure, automated infrastructure across multi-account AWS environments.
            </p>
            <p className="mt-4 text-lg text-gray-700 leading-relaxed">
              I specialize in <span className="text-cyan-600 font-medium">cloud replatforming, GitOps automation, and observability-driven design</span> — helping organizations modernize and scale their platforms with confidence.
            </p>
            <p className="mt-4 text-lg text-gray-700 leading-relaxed">
              I&apos;ve led infrastructure modernization projects for <span className="font-medium">AVIV Group</span>, <span className="font-medium">EPAM Systems</span>, and <span className="font-medium">Cybrid.app</span>, achieving 99.9% uptime, automated deployments, and streamlined developer workflows across regulated environments.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Additional Sections */}
      <section className="py-16 md:py-20 w-full flex items-center justify-center bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="grid md:grid-cols-2 gap-8 mt-8">
              <div>
                <h2 className="text-xl font-semibold mb-4 text-gray-900">Core Expertise</h2>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• <strong>AWS:</strong> EKS, ECS, EC2, RDS, VPC, S3, IAM/OIDC, KMS, CloudFront</li>
                  <li>• <strong>DevOps:</strong> Terraform, AWS CDK, ArgoCD, GitHub Actions, CircleCI, Jenkins</li>
                  <li>• <strong>MLOps:</strong> MLflow, Kubeflow, SageMaker, ML pipelines, model deployment</li>
                  <li>• <strong>Observability:</strong> Datadog, Prometheus, Grafana, Loki, Tempo, CloudWatch</li>
                  <li>• <strong>Security:</strong> IAM hardening, Secrets Manager, container hardening</li>
                  <li>• <strong>Programming:</strong> Python, Bash, PowerShell, SQL</li>
                  <li>• <strong>Databases:</strong> PostgreSQL, MySQL, MongoDB, Elastic Stack</li>
                </ul>
              </div>
              
              <div>
                <h2 className="text-xl font-semibold mb-4 text-gray-900">Key Achievements</h2>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Led migration of $300M+ monthly transaction systems</li>
                  <li>• Achieved 99.9% uptime across production environments</li>
                  <li>• Reduced incidents by 30% through optimization</li>
                  <li>• Mentored DevOps engineer interns</li>
                  <li>• Processed $300M+ monthly royalty payments</li>
                  <li>• Designed multi-account AWS architectures</li>
                </ul>
              </div>
            </div>

            <div className="mt-8 p-6 bg-gray-50 rounded-lg">
              <h2 className="text-xl font-semibold mb-4 text-gray-900">Professional Philosophy</h2>
              <p className="text-gray-700 leading-7">
                I believe in delivering reliable, secure, and scalable systems that enable teams to deliver software faster and more efficiently. 
                My approach combines deep technical expertise with practical business understanding to deliver solutions that not only meet 
                current requirements but also scale for future growth, especially in the rapidly evolving MLOps space.
              </p>
            </div>

            <div className="mt-8">
              <h2 className="text-xl font-semibold mb-4 text-gray-900 text-center">Notable Clients & Partners</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-gray-600">
                <div>• Schneider Electric</div>
                <div>• Bose Corporation</div>
                <div>• Knab Bank</div>
                <div>• Dayton Power & Light</div>
                <div>• Hudson Energy</div>
                <div>• Green Mountain Energy</div>
                <div>• EOG Resources</div>
                <div>• Direct Energy</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
