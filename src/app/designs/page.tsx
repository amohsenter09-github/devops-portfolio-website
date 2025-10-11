"use client";

import { motion } from "framer-motion";
import Container from "@/components/Container";
import FigmaEmbed from "@/components/FigmaEmbed";
import FigmaImage from "@/components/FigmaImage";

export default function Designs() {
  return (
    <Container>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-3xl font-semibold text-gray-900 dark:text-white mb-4">
          DevOps Designs & Architecture
        </h1>
        <p className="text-gray-600 dark:text-gray-300 max-w-3xl mb-8">
          Visual representations of my DevOps processes, infrastructure designs, and system architectures. 
          These designs showcase my approach to cloud infrastructure, automation, and observability.
        </p>

        {/* AWS Infrastructure Design */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
            AWS Infrastructure Architecture
          </h2>
          <FigmaEmbed
            url="https://www.figma.com/file/YOUR_FILE_ID/AWS-Infrastructure-Design"
            title="Multi-Account AWS Architecture"
            description="Comprehensive AWS infrastructure design showing multi-account setup, VPC configurations, security groups, and service integrations."
            height={500}
          />
        </section>

        {/* Kubernetes Microservices with ArgoCD */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
            Kubernetes Microservices with ArgoCD
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Comprehensive microservices architecture showing GitOps deployment with ArgoCD, 
            service mesh integration, and observability stack.
          </p>
          
          <div className="grid lg:grid-cols-2 gap-6 mb-8">
            <FigmaImage
              src="/images/k8s-microservices-overview.png"
              alt="Kubernetes Microservices Overview"
              caption="Complete microservices ecosystem with ArgoCD GitOps workflow"
              width={600}
              height={400}
              priority={true}
            />
            <FigmaImage
              src="/images/argocd-gitops-flow.png"
              alt="ArgoCD GitOps Flow"
              caption="GitOps deployment flow showing automated CI/CD with ArgoCD"
              width={600}
              height={400}
            />
          </div>

          <FigmaEmbed
            url="https://www.figma.com/file/YOUR_K8S_FILE_ID/Kubernetes-Microservices-Architecture"
            title="Interactive Kubernetes Architecture"
            description="Click to explore the interactive microservices architecture with ArgoCD deployment flows"
            height={600}
          />
        </section>

        {/* CI/CD Pipeline Flow */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
            CI/CD Pipeline Design
          </h2>
          <FigmaEmbed
            url="https://www.figma.com/file/YOUR_FILE_ID/CI-CD-Pipeline"
            title="Automated CI/CD Pipeline"
            description="End-to-end CI/CD pipeline design showing GitHub Actions, Docker builds, security scanning, and deployment processes."
            height={400}
          />
        </section>

        {/* Monitoring Dashboard Mockup */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
            Observability Dashboard
          </h2>
          <FigmaImage
            src="/images/monitoring-dashboard.png"
            alt="Monitoring Dashboard Design"
            caption="Custom Grafana dashboard design for comprehensive system monitoring and alerting"
            width={1000}
            height={600}
          />
        </section>

        {/* Process Flow Diagrams */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
            Process Flow Diagrams
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <FigmaImage
              src="/images/gitops-workflow.png"
              alt="GitOps Workflow"
              caption="GitOps workflow showing automated deployment processes"
              width={400}
              height={300}
            />
            <FigmaImage
              src="/images/disaster-recovery.png"
              alt="Disaster Recovery Process"
              caption="Disaster recovery and backup automation process"
              width={400}
              height={300}
            />
          </div>
        </section>

        {/* Design Process */}
        <section className="mb-12 p-6 bg-gray-50 dark:bg-gray-800 rounded-lg">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
            Design Process & Methodology
          </h2>
          <div className="grid md:grid-cols-3 gap-6 text-sm">
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">1. Research & Analysis</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Understanding requirements, constraints, and existing systems before designing solutions.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">2. Architecture Design</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Creating scalable, secure, and maintainable infrastructure designs using industry best practices.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">3. Implementation Planning</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Detailed implementation roadmaps with clear milestones and success metrics.
              </p>
            </div>
          </div>
        </section>
      </motion.div>
    </Container>
  );
}
