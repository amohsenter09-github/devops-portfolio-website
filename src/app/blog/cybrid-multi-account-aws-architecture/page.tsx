"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock, Tag, Code, Server, Shield, Zap } from "lucide-react";

export default function CybridArchitecturePost() {
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
            How I Built a 99.9% Uptime Multi-Account AWS Architecture for FinOps Platform
          </h1>
          
          <div className="flex flex-wrap gap-2 mb-8">
            {["AWS", "EKS", "Terraform", "GitOps", "FinOps"].map((tag) => (
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
                <strong>Problem:</strong> A leading FinOps platform needed to scale their infrastructure to support rapid growth while maintaining 
                99.9% uptime and reducing operational costs. Their existing setup couldn&apos;t handle the load and lacked proper monitoring.
              </p>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                <strong>My Solution:</strong> As the lead DevOps engineer, I architected and implemented a complete multi-account AWS infrastructure 
                redesign using modern DevOps practices. This case study shows exactly how I achieved these results.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">3</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">AWS Accounts</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600 dark:text-green-400">15+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Microservices</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">99.9%</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Uptime</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-orange-600 dark:text-orange-400">65%</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Cost Reduction</div>
                </div>
              </div>
            </div>
          </div>

          {/* My Approach */}
          <div className="professional-card mb-8">
            <div className="p-8">
              <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">My DevOps Approach</h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">Infrastructure as Code</h3>
                  <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                    <li>• Terraform modules for consistent deployments</li>
                    <li>• Version-controlled infrastructure</li>
                    <li>• Automated provisioning and updates</li>
                    <li>• Environment parity across accounts</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">GitOps & Automation</h3>
                  <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                    <li>• ArgoCD for continuous deployment</li>
                    <li>• Kustomize for environment management</li>
                    <li>• Automated rollbacks on failure</li>
                    <li>• Zero-downtime deployments</li>
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
                Multi-Account Architecture
              </h2>
              
              <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 mb-6">
                <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Account Structure</h3>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                    <span className="font-medium">Production Account</span>
                    <span className="ml-auto text-sm text-gray-600 dark:text-gray-400">Live customer traffic</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-yellow-500 rounded-full mr-3"></div>
                    <span className="font-medium">Staging Account</span>
                    <span className="ml-auto text-sm text-gray-600 dark:text-gray-400">Pre-production testing</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-blue-500 rounded-full mr-3"></div>
                    <span className="font-medium">Sandbox Account</span>
                    <span className="ml-auto text-sm text-gray-600 dark:text-gray-400">Development & experimentation</span>
                  </div>
                </div>
              </div>

              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Each account is isolated with its own VPC, security groups, and IAM roles, ensuring complete separation 
                of environments while maintaining consistent infrastructure patterns through Terraform modules.
              </p>
            </div>
          </div>

          {/* Infrastructure Components */}
          <div className="professional-card mb-8">
            <div className="p-8">
              <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white flex items-center">
                <Code className="mr-3 text-green-600" />
                Infrastructure Components
              </h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">Compute & Orchestration</h3>
                  <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                    <li>• AWS EKS clusters with managed node groups</li>
                    <li>• Bottlerocket OS for enhanced security</li>
                    <li>• AWS Load Balancer Controller</li>
                    <li>• External DNS for automatic DNS management</li>
                    <li>• External Secrets Operator</li>
                    <li>• FinOps cost monitoring microservices</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">Data & Storage</h3>
                  <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                    <li>• Amazon RDS PostgreSQL clusters</li>
                    <li>• ElastiCache Redis for caching</li>
                    <li>• S3 buckets for static assets</li>
                    <li>• EBS volumes with encryption</li>
                    <li>• AWS Secrets Manager integration</li>
                    <li>• Cost analytics data warehouse</li>
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
                Security & Compliance
              </h2>
              
              <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-6 mb-6">
                <h3 className="text-lg font-semibold mb-3 text-red-800 dark:text-red-200">FinOps Security & Compliance</h3>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <h4 className="font-medium text-red-700 dark:text-red-300 mb-2">Network Security</h4>
                    <ul className="space-y-1 text-red-600 dark:text-red-400">
                      <li>• VPC with private subnets only</li>
                      <li>• Security groups with least privilege</li>
                      <li>• AWS WAF for application protection</li>
                      <li>• GuardDuty for threat detection</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-red-700 dark:text-red-300 mb-2">Data Protection</h4>
                    <ul className="space-y-1 text-red-600 dark:text-red-400">
                      <li>• Encryption at rest and in transit</li>
                      <li>• KMS key management</li>
                      <li>• Secrets rotation policies</li>
                      <li>• Audit logging with CloudTrail</li>
                      <li>• Cost data anonymization</li>
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
                GitOps & Automation
              </h2>
              
              <div className="bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800 rounded-lg p-6 mb-6">
                <h3 className="text-lg font-semibold mb-3 text-purple-800 dark:text-purple-200">Deployment Pipeline</h3>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-purple-100 dark:bg-purple-800 rounded-full flex items-center justify-center mr-3">
                      <span className="text-purple-600 dark:text-purple-300 font-bold text-sm">1</span>
                    </div>
                    <span className="text-purple-700 dark:text-purple-300">Code pushed to GitHub repository</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-purple-100 dark:bg-purple-800 rounded-full flex items-center justify-center mr-3">
                      <span className="text-purple-600 dark:text-purple-300 font-bold text-sm">2</span>
                    </div>
                    <span className="text-purple-700 dark:text-purple-300">GitHub Actions builds and pushes Docker images</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-purple-100 dark:bg-purple-800 rounded-full flex items-center justify-center mr-3">
                      <span className="text-purple-600 dark:text-purple-300 font-bold text-sm">3</span>
                    </div>
                    <span className="text-purple-700 dark:text-purple-300">ArgoCD detects changes and syncs to cluster</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-purple-100 dark:bg-purple-800 rounded-full flex items-center justify-center mr-3">
                      <span className="text-purple-600 dark:text-purple-300 font-bold text-sm">4</span>
                    </div>
                    <span className="text-purple-700 dark:text-purple-300">Health checks and rollback on failure</span>
                  </div>
                </div>
              </div>

              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Using Kustomize for environment-specific configurations and ArgoCD for continuous deployment, 
                we achieved zero-downtime deployments with automatic rollback capabilities.
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
                  <h3 className="text-lg font-semibold mb-3 text-green-800 dark:text-green-200">Performance Improvements</h3>
                  <ul className="space-y-2 text-green-700 dark:text-green-300">
                    <li>• <strong>99.9% Uptime</strong> - Multi-AZ deployments with automated failover</li>
                    <li>• <strong>Zero-Downtime Deployments</strong> - Rolling updates with health checks</li>
                    <li>• <strong>80% Faster Deployments</strong> - GitOps automation</li>
                    <li>• <strong>50% Reduced MTTR</strong> - Comprehensive monitoring</li>
                  </ul>
                </div>
                
                <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6">
                  <h3 className="text-lg font-semibold mb-3 text-blue-800 dark:text-blue-200">Cost & Efficiency</h3>
                  <ul className="space-y-2 text-blue-700 dark:text-blue-300">
                    <li>• <strong>65% Cost Reduction</strong> - FinOps practices and optimization</li>
                    <li>• <strong>90% Automation</strong> - Infrastructure as Code</li>
                    <li>• <strong>100% Compliance</strong> - Security and audit requirements</li>
                    <li>• <strong>3x Faster Scaling</strong> - Auto-scaling groups</li>
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
                  <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">Infrastructure</h3>
                  <div className="flex flex-wrap gap-2">
                    {["Terraform", "AWS EKS", "Bottlerocket", "ArgoCD", "Kustomize", "Helm"].map((tech) => (
                      <span key={tech} className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm rounded">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">Monitoring</h3>
                  <div className="flex flex-wrap gap-2">
                    {["Prometheus", "Grafana", "Jaeger", "Datadog", "PagerDuty"].map((tech) => (
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
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">FinOps Integration is Critical</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    Implementing cost monitoring from day one prevents budget overruns. I learned that FinOps practices 
                    should be built into the infrastructure design, not added as an afterthought.
                  </p>
                </div>
                
                <div className="border-l-4 border-green-500 pl-4">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Multi-Account Strategy Scales</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    Separating environments into dedicated AWS accounts provides better security isolation and 
                    makes compliance auditing much easier. This approach scales better than single-account designs.
                  </p>
                </div>
                
                <div className="border-l-4 border-purple-500 pl-4">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">GitOps Reduces Operational Overhead</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    ArgoCD with Kustomize eliminated manual deployment processes and reduced human error. 
                    The declarative approach made rollbacks and environment management much more reliable.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="professional-card mb-8">
            <div className="p-8 text-center">
              <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Ready to Transform Your Infrastructure?</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                I help companies build scalable, reliable, and cost-effective infrastructure using modern DevOps practices. 
                Let&apos;s discuss how I can help optimize your AWS environment.
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
                  Zero-Downtime Deployments: My GitOps Implementation
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Learn how I implemented GitOps with ArgoCD to achieve zero-downtime deployments and 99.9% reliability.
                </p>
              </div>
            </Link>
            
            <Link href="/blog/observability-stack-prometheus-grafana" className="professional-card hover:transform hover:-translate-y-1 transition-all duration-200">
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">
                  Complete Observability Stack Implementation
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Step-by-step guide: How I built a production-ready observability stack that reduced MTTR by 80%.
                </p>
              </div>
            </Link>
          </div>
        </div>
      </motion.section>
    </div>
  );
}