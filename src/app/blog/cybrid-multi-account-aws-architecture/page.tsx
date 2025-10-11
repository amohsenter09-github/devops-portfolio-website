"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock, Tag, ExternalLink, Code, Server, Shield, Zap } from "lucide-react";

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
            Building Scalable FinOps Infrastructure: Multi-Account AWS Architecture
          </h1>
          
          <div className="flex flex-wrap gap-2 mb-8">
            {["AWS", "EKS", "Terraform", "GitOps", "Fintech"].map((tag) => (
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
              <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Project Overview</h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                A leading FinOps platform providing financial technology services. As the lead DevOps engineer, 
                I designed and implemented a comprehensive multi-account AWS infrastructure that supports their microservices 
                architecture across multiple environments, focusing on cost optimization and operational excellence.
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
                  <div className="text-sm text-gray-600 dark:text-gray-400">Cost Optimization</div>
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

          {/* Key Achievements */}
          <div className="professional-card mb-8">
            <div className="p-8">
              <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Key Achievements</h2>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mr-3 mt-1">
                    <span className="text-green-600 dark:text-green-400 text-sm">✓</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">99.9% Uptime</h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">Achieved through multi-AZ deployments and automated failover</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mr-3 mt-1">
                    <span className="text-green-600 dark:text-green-400 text-sm">✓</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">65% Cost Optimization</h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">Implemented FinOps practices with automated cost monitoring and resource optimization</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mr-3 mt-1">
                    <span className="text-green-600 dark:text-green-400 text-sm">✓</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">Zero-Downtime Deployments</h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">Implemented rolling updates with health checks</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mr-3 mt-1">
                    <span className="text-green-600 dark:text-green-400 text-sm">✓</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">FinOps Compliance</h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">Infrastructure meets financial operations and compliance requirements</p>
                  </div>
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

          {/* Conclusion */}
          <div className="professional-card mb-8">
            <div className="p-8">
              <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Conclusion</h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                This multi-account AWS architecture successfully supports a leading FinOps platform with high availability, 
                security, and cost optimization. The implementation demonstrates how modern DevOps practices can be applied 
                to complex financial operations infrastructure.
              </p>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                The combination of Infrastructure as Code, GitOps, FinOps practices, and comprehensive monitoring creates a robust 
                foundation that can scale with business growth while maintaining security, compliance, and cost efficiency.
              </p>
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
                  Implementing GitOps with ArgoCD
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Learn how we automated deployments using ArgoCD for continuous delivery.
                </p>
              </div>
            </Link>
            
            <Link href="/blog/observability-stack-prometheus-grafana" className="professional-card hover:transform hover:-translate-y-1 transition-all duration-200">
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">
                  Observability Stack Implementation
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Building comprehensive monitoring with Prometheus, Grafana, and Jaeger.
                </p>
              </div>
            </Link>
          </div>
        </div>
      </motion.section>
    </div>
  );
}
