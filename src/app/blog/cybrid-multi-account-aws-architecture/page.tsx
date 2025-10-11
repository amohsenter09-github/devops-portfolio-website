"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock, Tag, Code, Server, Shield, Zap } from "lucide-react";

export default function GitOpsArchitecturePost() {
  return (
    <div className="w-full">
      {/* Header */}
      <motion.section 
        className="py-16 sm:py-20"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-4xl mx-auto px-4">
          <Link 
            href="/blog"
            className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline mb-8"
          >
            <ArrowLeft size={20} className="mr-2" />
            Back to Blog
          </Link>
          
          <div className="flex items-center mb-6 text-sm text-gray-500 dark:text-gray-400">
            <Calendar size={16} className="mr-2" />
            January 15, 2024
            <Clock size={16} className="ml-4 mr-2" />
            12 min read
          </div>
          
          <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
            Deploy Your Apps on K8s the GitOps Way: Using ArgoCD and Image Updater
          </h1>
          
          <div className="flex flex-wrap gap-2 mb-8">
            {["Kubernetes", "ArgoCD", "GitOps", "Image Updater", "AWS EKS"].map((tag) => (
              <span 
                key={tag}
                className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm rounded-full"
              >
                <Tag size={12} className="inline mr-1" />
                {tag}
              </span>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Article Content */}
      <motion.article 
        className="py-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="max-w-4xl mx-auto px-4 prose prose-lg dark:prose-invert">
          
          {/* Introduction */}
          <div className="professional-card mb-8">
            <div className="p-8">
              <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">The Challenge</h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                <strong>Problem:</strong> Managing deployments across multiple Kubernetes environments was becoming increasingly complex. 
                Manual deployments, inconsistent configurations, and lack of automated image updates were causing deployment delays and operational overhead.
              </p>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                <strong>My Solution:</strong> I implemented a complete GitOps workflow using ArgoCD and Image Updater to automate deployments 
                and image updates across multiple Kubernetes clusters. This approach eliminated manual processes and ensured consistency.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">3</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">K8s Clusters</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600 dark:text-green-400">15+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Microservices</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">100%</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Automated</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-orange-600 dark:text-orange-400">Zero</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Downtime</div>
                </div>
              </div>
            </div>
          </div>

          {/* My Approach */}
          <div className="professional-card mb-8">
            <div className="p-8">
              <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">GitOps Implementation Strategy</h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">ArgoCD Configuration</h3>
                  <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                    <li>• Application of Applications pattern</li>
                    <li>• Multi-cluster management</li>
                    <li>• Automated sync policies</li>
                    <li>• RBAC and security controls</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">Image Updater Integration</h3>
                  <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                    <li>• Automated image tag updates</li>
                    <li>• Registry polling configuration</li>
                    <li>• Update strategies and policies</li>
                    <li>• Rollback capabilities</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Architecture Overview */}
          <div className="professional-card mb-8">
            <div className="p-8">
              <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white flex items-center">
                <Server className="mr-3 text-blue-600" />
                GitOps Architecture Overview
              </h2>
              
              <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 mb-6">
                <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Multi-Cluster Setup</h3>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                    <span className="font-medium">Production Cluster</span>
                    <span className="ml-auto text-sm text-gray-600 dark:text-gray-400">Live customer traffic</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-yellow-500 rounded-full mr-3"></div>
                    <span className="font-medium">Staging Cluster</span>
                    <span className="ml-auto text-sm text-gray-600 dark:text-gray-400">Pre-production testing</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-blue-500 rounded-full mr-3"></div>
                    <span className="font-medium">Development Cluster</span>
                    <span className="ml-auto text-sm text-gray-600 dark:text-gray-400">Development & experimentation</span>
                  </div>
                </div>
              </div>

              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Each cluster is managed by ArgoCD with Kustomize overlays for environment-specific configurations. 
                The Image Updater automatically polls container registries and updates image tags when new versions are available.
              </p>
            </div>
          </div>

          {/* Infrastructure Components */}
          <div className="professional-card mb-8">
            <div className="p-8">
              <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white flex items-center">
                <Code className="mr-3 text-green-600" />
                GitOps Components
              </h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">ArgoCD Setup</h3>
                  <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                    <li>• Application of Applications pattern</li>
                    <li>• Multi-cluster management</li>
                    <li>• Automated sync policies</li>
                    <li>• RBAC and security controls</li>
                    <li>• Webhook integration</li>
                    <li>• Health checks and monitoring</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">Image Updater Configuration</h3>
                  <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                    <li>• Registry polling configuration</li>
                    <li>• Update strategies (semver, latest)</li>
                    <li>• Automated PR creation</li>
                    <li>• Rollback capabilities</li>
                    <li>• Multi-registry support</li>
                    <li>• Update policies and filters</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Security Implementation */}
          <div className="professional-card mb-8">
            <div className="p-8">
              <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white flex items-center">
                <Shield className="mr-3 text-red-600" />
                Security & Best Practices
              </h2>
              
              <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-6 mb-6">
                <h3 className="text-lg font-semibold mb-3 text-red-800 dark:text-red-200">GitOps Security Implementation</h3>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <h4 className="font-medium text-red-700 dark:text-red-300 mb-2">Access Control</h4>
                    <ul className="space-y-1 text-red-600 dark:text-red-400">
                      <li>• RBAC policies for ArgoCD</li>
                      <li>• Service account permissions</li>
                      <li>• Cluster role bindings</li>
                      <li>• Namespace isolation</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-red-700 dark:text-red-300 mb-2">Image Security</h4>
                    <ul className="space-y-1 text-red-600 dark:text-red-400">
                      <li>• Container image scanning</li>
                      <li>• Vulnerability assessments</li>
                      <li>• Signed image verification</li>
                      <li>• Registry access controls</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* GitOps Implementation */}
          <div className="professional-card mb-8">
            <div className="p-8">
              <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white flex items-center">
                <Zap className="mr-3 text-purple-600" />
                Complete GitOps Workflow
              </h2>
              
              <div className="bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800 rounded-lg p-6 mb-6">
                <h3 className="text-lg font-semibold mb-3 text-purple-800 dark:text-purple-200">Automated Deployment Pipeline</h3>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-purple-100 dark:bg-purple-800 rounded-full flex items-center justify-center mr-3">
                      <span className="text-purple-600 dark:text-purple-300 font-bold text-sm">1</span>
                    </div>
                    <span className="text-purple-700 dark:text-purple-300">Code pushed to Git repository</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-purple-100 dark:bg-purple-800 rounded-full flex items-center justify-center mr-3">
                      <span className="text-purple-600 dark:text-purple-300 font-bold text-sm">2</span>
                    </div>
                    <span className="text-purple-700 dark:text-purple-300">CI/CD pipeline builds and pushes Docker images</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-purple-100 dark:bg-purple-800 rounded-full flex items-center justify-center mr-3">
                      <span className="text-purple-600 dark:text-purple-300 font-bold text-sm">3</span>
                    </div>
                    <span className="text-purple-700 dark:text-purple-300">Image Updater detects new images and creates PR</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-purple-100 dark:bg-purple-800 rounded-full flex items-center justify-center mr-3">
                      <span className="text-purple-600 dark:text-purple-300 font-bold text-sm">4</span>
                    </div>
                    <span className="text-purple-700 dark:text-purple-300">ArgoCD syncs changes to target clusters</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-purple-100 dark:bg-purple-800 rounded-full flex items-center justify-center mr-3">
                      <span className="text-purple-600 dark:text-purple-300 font-bold text-sm">5</span>
                    </div>
                    <span className="text-purple-700 dark:text-purple-300">Health checks and automatic rollback on failure</span>
                  </div>
                </div>
              </div>

              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Using Kustomize for environment-specific configurations and ArgoCD Image Updater for automated image updates, 
                we achieved a fully automated deployment pipeline with zero manual intervention required.
              </p>
            </div>
          </div>

          {/* Monitoring & Observability */}
          <div className="professional-card mb-8">
            <div className="p-8">
              <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Monitoring & Observability</h2>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-orange-100 dark:bg-orange-900 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-orange-600 dark:text-orange-400 font-bold text-xl">P</span>
                  </div>
                  <h3 className="font-semibold mb-2 text-gray-900 dark:text-white">Prometheus</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Metrics collection and alerting</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-blue-600 dark:text-blue-400 font-bold text-xl">G</span>
                  </div>
                  <h3 className="font-semibold mb-2 text-gray-900 dark:text-white">Grafana</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Dashboards and visualization</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-purple-600 dark:text-purple-400 font-bold text-xl">J</span>
                  </div>
                  <h3 className="font-semibold mb-2 text-gray-900 dark:text-white">Jaeger</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Distributed tracing</p>
                </div>
              </div>
            </div>
          </div>

          {/* Key Results */}
          <div className="professional-card mb-8">
            <div className="p-8">
              <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Results I Delivered</h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-6">
                  <h3 className="text-lg font-semibold mb-3 text-green-800 dark:text-green-200">Deployment Improvements</h3>
                  <ul className="space-y-2 text-green-700 dark:text-green-300">
                    <li>• <strong>100% Automated Deployments</strong> - Zero manual intervention</li>
                    <li>• <strong>Zero-Downtime Updates</strong> - Rolling updates with health checks</li>
                    <li>• <strong>90% Faster Deployments</strong> - GitOps automation</li>
                    <li>• <strong>Automatic Image Updates</strong> - Image Updater integration</li>
                  </ul>
                </div>
                
                <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6">
                  <h3 className="text-lg font-semibold mb-3 text-blue-800 dark:text-blue-200">Operational Excellence</h3>
                  <ul className="space-y-2 text-blue-700 dark:text-blue-300">
                    <li>• <strong>Consistent Environments</strong> - Kustomize overlays</li>
                    <li>• <strong>Multi-Cluster Management</strong> - Single ArgoCD instance</li>
                    <li>• <strong>Audit Trail</strong> - Git-based deployment history</li>
                    <li>• <strong>Easy Rollbacks</strong> - Git revert capabilities</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Technical Stack */}
          <div className="professional-card mb-8">
            <div className="p-8">
              <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Technical Stack</h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">GitOps Tools</h3>
                  <div className="flex flex-wrap gap-2">
                    {["ArgoCD", "Image Updater", "Kustomize", "Helm", "Git", "Docker"].map((tech) => (
                      <span key={tech} className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm rounded">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">Infrastructure</h3>
                  <div className="flex flex-wrap gap-2">
                    {["Kubernetes", "AWS EKS", "ECR", "Terraform", "Prometheus", "Grafana"].map((tech) => (
                      <span key={tech} className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm rounded">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Lessons Learned */}
          <div className="professional-card mb-8">
            <div className="p-8">
              <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Key Lessons & Insights</h2>
              
              <div className="space-y-6">
                <div className="border-l-4 border-blue-500 pl-4">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Image Updater is Game-Changing</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    The ArgoCD Image Updater eliminates the need for manual image tag updates. It automatically detects new images 
                    and creates pull requests, making the entire deployment process truly automated.
                  </p>
                </div>
                
                <div className="border-l-4 border-green-500 pl-4">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Kustomize Simplifies Multi-Environment Management</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    Using Kustomize overlays for different environments (dev, staging, prod) provides consistency while allowing 
                    environment-specific customizations. This approach scales much better than maintaining separate manifests.
                  </p>
                </div>
                
                <div className="border-l-4 border-purple-500 pl-4">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">GitOps Reduces Operational Complexity</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    ArgoCD with GitOps principles eliminated manual deployment processes and reduced human error. 
                    The declarative approach made rollbacks and environment management much more reliable and auditable.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="professional-card mb-8">
            <div className="p-8 text-center">
              <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Ready to Implement GitOps?</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                I help companies implement modern GitOps workflows using ArgoCD and Image Updater to achieve 
                fully automated deployments. Let&apos;s discuss how I can help optimize your Kubernetes deployment process.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/contact"
                  className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-200"
                >
                  Get In Touch
                </Link>
                <Link 
                  href="/projects"
                  className="inline-flex items-center px-6 py-3 border border-blue-600 text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/20 font-medium rounded-lg transition-colors duration-200"
                >
                  View More Projects
                </Link>
              </div>
            </div>
          </div>

        </div>
      </motion.article>

      {/* Related Articles */}
      <motion.section 
        className="py-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-semibold mb-8 text-gray-900 dark:text-white">Related Articles</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <Link href="/blog/gitops-argocd-kubernetes" className="professional-card hover:transform hover:-translate-y-1 transition-all duration-200">
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">
                  Advanced ArgoCD Configuration Patterns
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Learn advanced ArgoCD patterns including Application of Applications and multi-cluster management strategies.
                </p>
              </div>
            </Link>
            
            <Link href="/blog/kubernetes-image-updater-setup" className="professional-card hover:transform hover:-translate-y-1 transition-all duration-200">
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">
                  Complete Image Updater Setup Guide
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Step-by-step guide: How to configure ArgoCD Image Updater for automated container image updates.
                </p>
              </div>
            </Link>
          </div>
        </div>
      </motion.section>
    </div>
  );
}