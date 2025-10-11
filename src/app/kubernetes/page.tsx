"use client";

import { motion } from "framer-motion";
import Container from "@/components/Container";
import FigmaImage from "@/components/FigmaImage";
import FigmaEmbed from "@/components/FigmaEmbed";

export default function KubernetesMicroservices() {
  return (
    <Container>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="mb-8">
          <h1 className="text-3xl font-semibold text-gray-900 dark:text-white mb-4">
            Kubernetes Microservices with ArgoCD
          </h1>
          <p className="text-gray-600 dark:text-gray-300 max-w-3xl">
            Comprehensive microservices architecture showcasing GitOps deployment patterns, 
            service mesh integration, and modern observability practices using ArgoCD, 
            Kubernetes, and cloud-native technologies.
          </p>
        </div>

        {/* Architecture Overview */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
            Architecture Overview
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-6 mb-8">
            <FigmaImage
              src="/images/k8s-microservices-overview.png"
              alt="Kubernetes Microservices Architecture"
              caption="Complete microservices ecosystem with ArgoCD GitOps workflow and service mesh"
              width={600}
              height={400}
              priority={true}
            />
            <FigmaImage
              src="/images/argocd-gitops-flow.png"
              alt="ArgoCD GitOps Deployment Flow"
              caption="Automated GitOps deployment flow showing CI/CD integration with ArgoCD"
              width={600}
              height={400}
            />
          </div>

          <FigmaEmbed
            url="https://www.figma.com/file/placeholder/Kubernetes-Microservices-Architecture"
            title="Interactive Microservices Architecture"
            description="Explore the interactive microservices architecture with ArgoCD deployment flows and service interactions"
            height={600}
          />
        </section>

        {/* Service Mesh Architecture */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
            Service Mesh & Communication
          </h2>
          
          <div className="p-8 bg-gray-50 dark:bg-gray-800 rounded-lg border-2 border-dashed border-gray-300 dark:border-gray-600">
            <div className="text-center">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Istio Service Mesh Architecture
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Service mesh implementation with Istio showing traffic management, security, and observability
              </p>
              <div className="text-sm text-gray-500 dark:text-gray-400">
                📝 <strong>To add your Figma design:</strong><br/>
                1. Create your Istio service mesh diagram in Figma<br/>
                2. Copy the Figma file URL<br/>
                3. Replace &quot;YOUR_SERVICE_MESH_FILE_ID&quot; in the code
              </div>
            </div>
          </div>
        </section>

        {/* ArgoCD GitOps Flow */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
            ArgoCD GitOps Implementation
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <FigmaImage
              src="/images/argocd-applications.png"
              alt="ArgoCD Applications"
              caption="ArgoCD application definitions and sync status across environments"
              width={500}
              height={350}
            />
            <FigmaImage
              src="/images/gitops-workflow.png"
              alt="GitOps Workflow"
              caption="Complete GitOps workflow from code commit to production deployment"
              width={500}
              height={350}
            />
          </div>

          <div className="p-8 bg-gray-50 dark:bg-gray-800 rounded-lg border-2 border-dashed border-gray-300 dark:border-gray-600">
            <div className="text-center">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Interactive GitOps Workflow
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Step-by-step GitOps workflow showing automated deployment processes
              </p>
              <div className="text-sm text-gray-500 dark:text-gray-400">
                📝 <strong>To add your Figma design:</strong><br/>
                1. Create your ArgoCD GitOps workflow in Figma<br/>
                2. Copy the Figma file URL<br/>
                3. Replace &quot;YOUR_GITOPS_FILE_ID&quot; in the code
              </div>
            </div>
          </div>
        </section>

        {/* Observability Stack */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
            Observability & Monitoring
          </h2>
          
          <div className="p-8 bg-gray-50 dark:bg-gray-800 rounded-lg border-2 border-dashed border-gray-300 dark:border-gray-600">
            <div className="text-center">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Comprehensive Observability Stack
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Full observability implementation with Prometheus, Grafana, Jaeger, and ELK stack
              </p>
              <div className="text-sm text-gray-500 dark:text-gray-400">
                📝 <strong>To add your Figma design:</strong><br/>
                1. Create your observability stack diagram in Figma<br/>
                2. Copy the Figma file URL<br/>
                3. Replace &quot;YOUR_OBSERVABILITY_FILE_ID&quot; in the code
              </div>
            </div>
          </div>
        </section>

        {/* Security & RBAC */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
            Security & RBAC
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <FigmaImage
              src="/images/k8s-rbac.png"
              alt="Kubernetes RBAC"
              caption="Role-based access control implementation for microservices"
              width={500}
              height={350}
            />
            <FigmaImage
              src="/images/network-policies.png"
              alt="Network Policies"
              caption="Network security policies and service-to-service communication rules"
              width={500}
              height={350}
            />
          </div>
        </section>

        {/* Technical Specifications */}
        <section className="mb-12 p-6 bg-gray-50 dark:bg-gray-800 rounded-lg">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
            Technical Specifications
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-3">Kubernetes</h3>
              <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                <li>• EKS 1.28+</li>
                <li>• Bottlerocket Nodes</li>
                <li>• Cluster Autoscaler</li>
                <li>• Horizontal Pod Autoscaler</li>
                <li>• Vertical Pod Autoscaler</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-3">ArgoCD</h3>
              <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                <li>• v2.8+</li>
                <li>• Application Sets</li>
                <li>• Multi-cluster Support</li>
                <li>• SSO Integration</li>
                <li>• RBAC Policies</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-3">Service Mesh</h3>
              <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                <li>• Istio 1.19+</li>
                <li>• Traffic Management</li>
                <li>• Security Policies</li>
                <li>• Observability</li>
                <li>• mTLS Encryption</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-3">Observability</h3>
              <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                <li>• Prometheus + Grafana</li>
                <li>• Jaeger Tracing</li>
                <li>• ELK Stack</li>
                <li>• Custom Dashboards</li>
                <li>• Alerting Rules</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Implementation Benefits */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
            Implementation Benefits
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
              <h3 className="font-semibold text-blue-900 dark:text-blue-100 mb-3">GitOps Benefits</h3>
              <ul className="text-sm text-blue-800 dark:text-blue-200 space-y-2">
                <li>• Declarative Configuration</li>
                <li>• Automated Deployments</li>
                <li>• Rollback Capabilities</li>
                <li>• Audit Trail</li>
                <li>• Multi-environment Sync</li>
              </ul>
            </div>
            
            <div className="p-6 bg-green-50 dark:bg-green-900/20 rounded-lg">
              <h3 className="font-semibold text-green-900 dark:text-green-100 mb-3">Microservices Benefits</h3>
              <ul className="text-sm text-green-800 dark:text-green-200 space-y-2">
                <li>• Independent Scaling</li>
                <li>• Technology Diversity</li>
                <li>• Fault Isolation</li>
                <li>• Team Autonomy</li>
                <li>• Continuous Deployment</li>
              </ul>
            </div>
            
            <div className="p-6 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
              <h3 className="font-semibold text-purple-900 dark:text-purple-100 mb-3">Observability Benefits</h3>
              <ul className="text-sm text-purple-800 dark:text-purple-200 space-y-2">
                <li>• Real-time Monitoring</li>
                <li>• Distributed Tracing</li>
                <li>• Centralized Logging</li>
                <li>• Proactive Alerting</li>
                <li>• Performance Optimization</li>
              </ul>
            </div>
          </div>
        </section>
      </motion.div>
    </Container>
  );
}
