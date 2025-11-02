"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock, Tag, CheckCircle, Zap, Shield, Database, Cloud, GitBranch, Monitor, Code, BarChart3, Search } from "lucide-react";
import { ArticleLayout, Section } from "@/components/Layout";

export default function EnterpriseMicroservicesPlatform() {
  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-100">
      {/* Header */}
      <motion.section 
        className="py-16 sm:py-20"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center">
          <div className="w-full flex justify-start mb-8">
            <Link 
              href="/blog"
              className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline"
            >
              <ArrowLeft size={20} className="mr-2" />
              Back to Blog
            </Link>
          </div>
          
          <div className="flex items-center justify-center mb-6 text-sm text-gray-500 dark:text-gray-400">
            <Calendar size={16} className="mr-2" />
            January 15, 2024
            <Clock size={16} className="ml-4 mr-2" />
            15 min read
          </div>
          
          <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-gray-900 dark:text-white text-center">
            Enterprise Microservices Platform: Terraform-Managed Multi-Environment Architecture
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed text-center max-w-3xl mx-auto">
            A comprehensive case study of building a production-ready microservices platform with 12+ services, 
            complete GitOps automation, and enterprise-grade security across multiple AWS environments.
          </p>
          
          <div className="flex flex-wrap justify-center gap-2 mt-6">
            {["Terraform", "Kubernetes", "ArgoCD", "Microservices", "AWS", "GitOps", "Security", "Monitoring"].map((tag) => (
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

      {/* Content using ArticleLayout for proper centering */}
      <div className="bg-white">
        <ArticleLayout maxWidth="4xl" spacing="relaxed">
          
          {/* Executive Summary */}
          <Section spacing="xl" animate>
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6 md:p-8">
                <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white text-center flex items-center justify-center">
                  <Zap className="w-6 h-6 text-blue-600 mr-3" />
                  Executive Summary
                </h2>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6 text-center max-w-3xl mx-auto">
                  This enterprise microservices platform project delivered <strong>$2M in annual cost savings</strong> and 
                  <strong> 99.9% uptime</strong> for a Fortune 500 financial services client. The solution transformed their 
                  legacy infrastructure into a modern, scalable platform serving <strong>50,000+ concurrent users</strong> 
                  with zero-downtime deployments.
                </p>
                <div className="grid md:grid-cols-3 gap-4 mt-6 max-w-3xl mx-auto">
                  <div className="bg-white/50 dark:bg-gray-800/50 rounded-lg p-4 md:p-5 text-center">
                    <div className="text-2xl md:text-3xl font-bold text-green-600 dark:text-green-400">$2M</div>
                    <div className="text-sm text-gray-600 dark:text-gray-300 mt-1">Annual Cost Savings</div>
                  </div>
                  <div className="bg-white/50 dark:bg-gray-800/50 rounded-lg p-4 md:p-5 text-center">
                    <div className="text-2xl md:text-3xl font-bold text-blue-600 dark:text-blue-400">99.9%</div>
                    <div className="text-sm text-gray-600 dark:text-gray-300 mt-1">System Uptime</div>
                  </div>
                  <div className="bg-white/50 dark:bg-gray-800/50 rounded-lg p-4 md:p-5 text-center">
                    <div className="text-2xl md:text-3xl font-bold text-purple-600 dark:text-purple-400">70%</div>
                    <div className="text-sm text-gray-600 dark:text-gray-300 mt-1">Faster Deployments</div>
                  </div>
                </div>
              </div>
            </div>
          </Section>

          {/* Architecture Overview */}
          <Section spacing="xl" animate>
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
              <h2 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white text-center">Architecture Overview</h2>
              
              <div className="grid md:grid-cols-2 gap-8 mb-8 max-w-3xl mx-auto">
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
          </Section>

          {/* Microservices Architecture */}
          <Section spacing="xl" animate>
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
              <h2 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white text-center">Microservices Architecture</h2>
            
            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 md:p-8 mb-6 max-w-3xl mx-auto">
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

            <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6 md:p-8 max-w-3xl mx-auto">
              <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-4 text-center">Key Technical Achievements</h4>
              <div className="grid md:grid-cols-2 gap-4 text-sm max-w-2xl mx-auto">
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
          </Section>

          {/* GitOps Implementation */}
          <Section spacing="xl" animate>
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
              <h2 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white text-center">GitOps Implementation</h2>
              
              <div className="space-y-6 max-w-3xl mx-auto">
              <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
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

              <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
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
          </Section>

          {/* Monitoring & Observability */}
          <Section spacing="xl" animate>
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
              <h2 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white text-center">Monitoring & Observability</h2>
              
              <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
              <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
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

              <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
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
          </Section>

          {/* Implementation Details */}
          <Section spacing="xl" animate>
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
              <h2 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white text-center flex items-center justify-center">
                <Code className="w-7 h-7 text-cyan-600 mr-3" />
                Implementation Details
              </h2>
              
              <div className="space-y-8 max-w-3xl mx-auto">
                {/* Prometheus Configuration */}
                <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-5 md:p-6 hover:shadow-lg transition-shadow duration-300">
                  <h3 className="text-base md:text-lg font-semibold mb-4 text-gray-900 dark:text-white flex items-center justify-center gap-2">
                    <BarChart3 className="text-cyan-600" size={18} />
                    Prometheus Configuration
                  </h3>
                  <p className="text-sm md:text-base leading-relaxed text-gray-700 dark:text-gray-300 mb-4 text-center">
                    Used the official <code className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-cyan-700 dark:text-cyan-400 rounded-md text-xs font-mono font-semibold">kube-prometheus-stack</code> Helm chart with custom retention, 
                    multi-cluster federation, and ServiceMonitor CRDs for application metrics.
                  </p>
                  <ul className="space-y-2 text-sm leading-relaxed text-gray-600 dark:text-gray-300 text-left max-w-2xl mx-auto">
                    {[
                      "Custom retention policies (30 days for high-priority, 7 days for standard)",
                      "Multi-cluster federation for centralized metric aggregation",
                      "ServiceMonitor CRDs for Kubernetes-native service discovery",
                      "Recording rules for pre-computed aggregations and performance",
                      "High availability setup with Thanos for long-term storage"
                    ].map((item, idx) => (
                      <motion.li
                        key={item}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.05, duration: 0.3 }}
                        className="flex items-start gap-2"
                      >
                        <span className="text-cyan-600 dark:text-cyan-400 mt-1 font-bold text-xs">▸</span>
                        <span>{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {/* Grafana Dashboards */}
                <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-5 md:p-6 hover:shadow-lg transition-shadow duration-300">
                  <h3 className="text-base md:text-lg font-semibold mb-4 text-gray-900 dark:text-white flex items-center justify-center gap-2">
                    <BarChart3 className="text-cyan-600" size={18} />
                    Grafana Dashboards
                  </h3>
                  <p className="text-sm md:text-base leading-relaxed text-gray-700 dark:text-gray-300 mb-4 text-center">
                    Deployed via ArgoCD Helm release, using pre-baked dashboards from JSON templates stored in Git. 
                    Integrated with SSO for RBAC access.
                  </p>
                  <ul className="space-y-2 text-sm leading-relaxed text-gray-600 dark:text-gray-300 text-left max-w-2xl mx-auto">
                    {[
                      "Infrastructure monitoring dashboards for CPU, memory, and network metrics",
                      "Application performance metrics with custom business KPIs",
                      "Custom alerting rules with severity-based routing",
                      "Multi-environment views (dev, staging, production)",
                      "Role-based access control (RBAC) with OAuth integration",
                      "Dashboard versioning via GitOps workflows"
                    ].map((item, idx) => (
                      <motion.li
                        key={item}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.05, duration: 0.3 }}
                        className="flex items-start gap-2"
                      >
                        <span className="text-cyan-600 dark:text-cyan-400 mt-1 font-bold text-xs">▸</span>
                        <span>{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {/* Loki + Promtail */}
                <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-5 md:p-6 hover:shadow-lg transition-shadow duration-300">
                  <h3 className="text-base md:text-lg font-semibold mb-4 text-gray-900 dark:text-white flex items-center justify-center gap-2">
                    <Database className="text-cyan-600" size={18} />
                    Loki + Promtail
                  </h3>
                  <p className="text-sm md:text-base leading-relaxed text-gray-700 dark:text-gray-300 mb-4 text-center">
                    Configured via Helm, ingesting EKS container logs and storing compressed logs on S3 for long-term retention 
                    and cost optimization.
                  </p>
                  <ul className="space-y-2 text-sm leading-relaxed text-gray-600 dark:text-gray-300 text-left max-w-2xl mx-auto">
                    {[
                      "Container log ingestion from EKS pods via Promtail DaemonSet",
                      "Log compression and indexing for efficient querying",
                      "S3 backend for long-term log retention (90 days)",
                      "Label-based log filtering and routing",
                      "Integration with Grafana for unified log visualization"
                    ].map((item, idx) => (
                      <motion.li
                        key={item}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.05, duration: 0.3 }}
                        className="flex items-start gap-2"
                      >
                        <span className="text-cyan-600 dark:text-cyan-400 mt-1 font-bold text-xs">▸</span>
                        <span>{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {/* Jaeger Distributed Tracing */}
                <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-5 md:p-6 hover:shadow-lg transition-shadow duration-300">
                  <h3 className="text-base md:text-lg font-semibold mb-4 text-gray-900 dark:text-white flex items-center justify-center gap-2">
                    <Search className="text-cyan-600" size={18} />
                    Jaeger Distributed Tracing
                  </h3>
                  <p className="text-sm md:text-base leading-relaxed text-gray-700 dark:text-gray-300 mb-4 text-center">
                    Deployed using the Jaeger Operator chart, integrated with application traces through OpenTelemetry SDK for 
                    end-to-end request visibility across microservices.
                  </p>
                  <ul className="space-y-2 text-sm leading-relaxed text-gray-600 dark:text-gray-300 text-left max-w-2xl mx-auto">
                    {[
                      "Jaeger Operator deployed via Helm chart",
                      "OpenTelemetry SDK integration in application code",
                      "Trace sampling configuration (10% for production, 100% for staging)",
                      "Service dependency mapping and performance analysis",
                      "Integration with Grafana for trace visualization"
                    ].map((item, idx) => (
                      <motion.li
                        key={item}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.05, duration: 0.3 }}
                        className="flex items-start gap-2"
                      >
                        <span className="text-cyan-600 dark:text-cyan-400 mt-1 font-bold text-xs">▸</span>
                        <span>{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </Section>

          {/* Results & Impact */}
          <Section spacing="xl" animate>
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
              <h2 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white text-center">Results & Impact</h2>
              
              <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 border border-green-200 dark:border-green-800 rounded-lg p-6 text-center">
                <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">99.9%</div>
                <div className="text-gray-700 dark:text-gray-300 font-semibold">Uptime Achieved</div>
                <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">Across all environments</div>
              </div>
              
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6 text-center">
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">0</div>
                <div className="text-gray-700 dark:text-gray-300 font-semibold">Downtime Deployments</div>
                <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">Zero-downtime strategy</div>
              </div>
              
              <div className="bg-gradient-to-br from-purple-50 to-violet-50 dark:from-purple-900/20 dark:to-violet-900/20 border border-purple-200 dark:border-purple-800 rounded-lg p-6 text-center">
                <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">80%</div>
                <div className="text-gray-700 dark:text-gray-300 font-semibold">MTTR Reduction</div>
                <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">Mean Time To Recovery</div>
              </div>
            </div>

            <div className="mt-8 bg-gray-50 dark:bg-gray-800 rounded-lg p-6 md:p-8 max-w-3xl mx-auto">
              <h3 className="text-xl font-semibold mb-6 text-gray-900 dark:text-white text-center">Key Business Benefits</h3>
              <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
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
          </Section>

          {/* Technical Stack */}
          <Section spacing="xl" animate>
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
              <h2 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white text-center">Technical Stack</h2>
              
              <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Infrastructure</h3>
                <div className="flex flex-wrap gap-2">
                  {["Terraform", "AWS EKS", "Aurora PostgreSQL", "ElastiCache Redis", "ALB", "Route53", "ACM", "S3"].map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Platform & Tools</h3>
                <div className="flex flex-wrap gap-2">
                  {["Kubernetes", "ArgoCD", "Kustomize", "External Secrets", "External DNS", "Temporal", "Prometheus", "Grafana"].map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 text-sm rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Section>

          {/* Conclusion */}
          <Section spacing="xl" animate>
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
              <div className="bg-gradient-to-r from-gray-50 to-blue-50 dark:from-gray-800 dark:to-blue-900/20 border border-gray-200 dark:border-gray-700 rounded-lg p-8 md:p-10 max-w-3xl mx-auto">
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
