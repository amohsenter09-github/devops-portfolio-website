"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock, CheckCircle, Zap, Shield, Database, Cloud, GitBranch, Monitor } from "lucide-react";
import { ArticleLayout, Section } from "@/components/Layout";

export default function EnterpriseMicroservicesPlatform() {
  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-gray-50 via-white to-gray-100">
      <div className="container mx-auto max-w-4xl px-6 sm:px-8">
        {/* Header */}
        <motion.section 
          className="py-16 sm:py-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="w-full">
            <div className="w-full flex justify-center mb-8">
              <Link 
                href="/blog"
                className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline"
              >
                <ArrowLeft size={20} className="mr-2" />
                Back to Blog
              </Link>
            </div>
            
            <div className="flex items-center justify-center mb-6 text-sm text-gray-800 dark:text-gray-200 font-medium">
              <Calendar size={16} className="mr-2" />
              January 15, 2024
              <Clock size={16} className="ml-4 mr-2" />
              15 min read
            </div>
            
            <h1 className="text-xl sm:text-2xl font-bold mb-4 text-gray-900 dark:text-white text-center">
              Enterprise Microservices Platform: Terraform-Managed Multi-Environment Architecture
            </h1>
            <p className="text-sm sm:text-base text-gray-900 dark:text-gray-100 leading-relaxed mb-6 font-medium text-center">
              A comprehensive case study of building a production-ready microservices platform with 12+ services, 
              complete GitOps automation, and enterprise-grade security across multiple AWS environments.
            </p>
          </div>
        </motion.section>

        {/* Content using ArticleLayout for proper centering */}
        <ArticleLayout maxWidth="4xl" spacing="relaxed">
          
          {/* Executive Summary */}
          <Section spacing="xl" animate>
            <div className="w-full py-8 text-center">
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6 md:p-8">
                <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white flex items-center justify-center">
                  <Zap className="w-6 h-6 text-blue-600 mr-3" />
                  Executive Summary
                </h2>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                  This enterprise microservices platform project delivered <strong>$2M in annual cost savings</strong> and 
                  <strong> 99.9% uptime</strong> for a Fortune 500 financial services client. The solution transformed their 
                  legacy infrastructure into a modern, scalable platform serving <strong>50,000+ concurrent users</strong> 
                  with zero-downtime deployments.
                </p>
                <div className="flex flex-wrap justify-center gap-6 mt-8">
                  <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-4 md:p-5 text-center shadow-sm min-w-[200px]">
                    <div className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-gray-100">$2M</div>
                    <div className="text-sm text-gray-700 dark:text-gray-300 mt-1 font-medium">Annual Cost Savings</div>
                  </div>
                  <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-4 md:p-5 text-center shadow-sm min-w-[200px]">
                    <div className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-gray-100">99.9%</div>
                    <div className="text-sm text-gray-700 dark:text-gray-300 mt-1 font-medium">System Uptime</div>
                  </div>
                  <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-4 md:p-5 text-center shadow-sm min-w-[200px]">
                    <div className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-gray-100">70%</div>
                    <div className="text-sm text-gray-700 dark:text-gray-300 mt-1 font-medium">Faster Deployments</div>
                  </div>
                </div>
              </div>
            </div>
          </Section>

          {/* Architecture Overview */}
          <Section spacing="xl" animate>
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
              <h2 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white text-center">Architecture Overview</h2>
              
              <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Infrastructure Foundation</h3>
                <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                    Multi-environment AWS setup (Production, Staging, Sandbox)
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                    EKS clusters with self-managed node groups
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                    Aurora PostgreSQL with Multi-AZ deployment
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                    ElastiCache Redis clusters for high availability
                  </li>
                </ul>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Security & Compliance</h3>
                <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                  <li className="flex items-center">
                    <Shield className="w-5 h-5 text-blue-500 mr-2" />
                    AWS GuardDuty threat detection
                  </li>
                  <li className="flex items-center">
                    <Shield className="w-5 h-5 text-blue-500 mr-2" />
                    WAF protection and security groups
                  </li>
                  <li className="flex items-center">
                    <Shield className="w-5 h-5 text-blue-500 mr-2" />
                    External Secrets Operator integration
                  </li>
                  <li className="flex items-center">
                    <Shield className="w-5 h-5 text-blue-500 mr-2" />
                    Comprehensive IAM policies
                  </li>
                </ul>
              </div>
              </div>
            </div>
          </Section>

          {/* Microservices Architecture */}
          <Section spacing="xl" animate>
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
              <h2 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white text-center">Microservices Architecture</h2>
            
            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 md:p-8 mb-6">
              <h3 className="text-xl font-semibold mb-6 text-gray-900 dark:text-white text-center">Service Categories</h3>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">API Services</h4>
                  <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                    <li>• Identity & Authentication Service</li>
                    <li>• Banking & Financial Operations</li>
                    <li>• Organization Management</li>
                    <li>• Web Event Processing</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Internal Services</h4>
                  <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                    <li>• Account Management</li>
                    <li>• Key Management Service</li>
                    <li>• File Storage & Processing</li>
                    <li>• Identity Provider</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Integration Services</h4>
                  <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                    <li>• Exchange Rate Service</li>
                    <li>• Transfer Processing</li>
                    <li>• Workflow Orchestration</li>
                    <li>• Notification Service</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Portal Services</h4>
                  <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                    <li>• Organization Portal</li>
                    <li>• Payments Portal</li>
                    <li>• Ingress Controller</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6 md:p-8">
              <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-4 text-center">Key Technical Achievements</h4>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-blue-800 dark:text-blue-200 mb-2"><strong>Zero-Downtime Deployments:</strong></p>
                  <p className="text-blue-700 dark:text-blue-300">Rolling update strategy with maxUnavailable: 0 ensures continuous service availability</p>
                </div>
                <div>
                  <p className="text-blue-800 dark:text-blue-200 mb-2"><strong>Horizontal Scaling:</strong></p>
                  <p className="text-blue-700 dark:text-blue-300">HPA configuration with CPU and memory-based scaling policies</p>
                </div>
                <div>
                  <p className="text-blue-800 dark:text-blue-200 mb-2"><strong>Service Mesh:</strong></p>
                  <p className="text-blue-700 dark:text-blue-300">ClusterIP services with proper networking and service discovery</p>
                </div>
                <div>
                  <p className="text-blue-800 dark:text-blue-200 mb-2"><strong>Configuration Management:</strong></p>
                  <p className="text-blue-700 dark:text-blue-300">Kustomize base/overlay pattern for environment-specific configurations</p>
                </div>
              </div>
              </div>
            </div>
          </Section>

          {/* GitOps Implementation */}
          <Section spacing="xl" animate>
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
              <h2 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white text-center">GitOps Implementation</h2>
              
              <div className="space-y-6">
              <div className="bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white flex items-center">
                  <GitBranch className="w-6 h-6 text-green-600 mr-3" />
                  ArgoCD Deployment & Management
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  ArgoCD was deployed and managed entirely through Terraform, ensuring infrastructure consistency 
                  and enabling automated GitOps workflows across all environments.
                </p>
                <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                    ACM certificates for secure HTTPS communication
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                    Automated namespace creation and RBAC configuration
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                    Image Updater for automated container image updates
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                    External DNS integration for seamless service discovery
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white flex items-center">
                  <Database className="w-6 h-6 text-purple-600 mr-3" />
                  External Secrets Integration
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Secure credential management through AWS Secrets Manager integration with External Secrets Operator, 
                  eliminating hardcoded secrets and ensuring compliance.
                </p>
                <div className="bg-gray-50 dark:bg-gray-700 rounded p-4">
                  <code className="text-sm text-gray-800 dark:text-gray-200">
                    AWS Secrets Manager → External Secrets Operator → Kubernetes Secrets → Pod Environment Variables
                  </code>
                </div>
              </div>
              </div>
            </div>
          </Section>

          {/* Monitoring & Observability */}
          <Section spacing="xl" animate>
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
              <h2 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white text-center">Monitoring & Observability</h2>
              
              <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white flex items-center">
                  <Monitor className="w-6 h-6 text-orange-600 mr-3" />
                  Prometheus & Grafana Stack
                </h3>
                <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                    Custom dashboards for microservices monitoring
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                    OAuth integration with AWS Cognito
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                    PagerDuty integration for critical alerts
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                    Slack notifications for engineering teams
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white flex items-center">
                  <Cloud className="w-6 h-6 text-blue-600 mr-3" />
                  AWS CloudWatch Integration
                </h3>
                <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                    Centralized logging and metrics collection
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                    Custom CloudWatch dashboards
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                    Automated alerting and incident response
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                    Datadog integration for enhanced observability
                  </li>
                </ul>
              </div>
              </div>
            </div>
          </Section>

          {/* Results & Impact */}
          <Section spacing="xl" animate>
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
              <h2 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white text-center">Results & Impact</h2>
              
              <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6 text-center shadow-sm">
                <div className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-2">99.9%</div>
                <div className="text-gray-700 dark:text-gray-300 font-semibold">Uptime Achieved</div>
                <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">Across all environments</div>
              </div>
              
              <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6 text-center shadow-sm">
                <div className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-2">0</div>
                <div className="text-gray-700 dark:text-gray-300 font-semibold">Downtime Deployments</div>
                <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">Zero-downtime strategy</div>
              </div>
              
              <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6 text-center shadow-sm">
                <div className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-2">80%</div>
                <div className="text-gray-700 dark:text-gray-300 font-semibold">MTTR Reduction</div>
                <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">Mean Time To Recovery</div>
              </div>
            </div>

            <div className="mt-8 bg-gray-50 dark:bg-gray-800 rounded-lg p-6 md:p-8">
              <h3 className="text-xl font-semibold mb-6 text-gray-900 dark:text-white text-center">Key Business Benefits</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Operational Excellence</h4>
                  <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                    <li>• Automated deployments reduced manual errors by 95%</li>
                    <li>• Infrastructure as Code enabled rapid environment provisioning</li>
                    <li>• Comprehensive monitoring provided proactive issue detection</li>
                    <li>• Security compliance achieved through automated policies</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Developer Experience</h4>
                  <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                    <li>• GitOps workflow simplified deployment processes</li>
                    <li>• Environment parity reduced development friction</li>
                    <li>• Self-service infrastructure provisioning</li>
                    <li>• Comprehensive documentation and runbooks</li>
                  </ul>
                </div>
              </div>
              </div>
            </div>
          </Section>

          {/* Conclusion */}
          <Section spacing="xl" animate>
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
              <div className="bg-gradient-to-r from-gray-50 to-blue-50 dark:from-gray-800 dark:to-blue-900/20 border border-gray-200 dark:border-gray-700 rounded-lg p-8 md:p-10">
                <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white text-center">Conclusion</h2>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4 text-center">
                  This enterprise microservices platform represents a comprehensive solution for modern cloud-native applications. 
                  By leveraging Infrastructure as Code principles, advanced GitOps workflows, and enterprise-grade security practices, 
                  we achieved a robust, scalable, and maintainable platform that serves thousands of users with exceptional reliability.
                </p>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-center">
                  The combination of Terraform for infrastructure management, ArgoCD for GitOps automation, and comprehensive 
                  monitoring stack provides a solid foundation for future growth and innovation. This architecture demonstrates 
                  how modern DevOps practices can deliver both technical excellence and business value.
                </p>
              </div>
            </div>
          </Section>

        </ArticleLayout>
      </div>
    </div>
  );
}
