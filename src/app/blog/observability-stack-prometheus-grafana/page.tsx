"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Code, Server, Database, AlertCircle, BarChart3, Search } from "lucide-react";
import { ArticleLayout, Section } from "@/components/Layout";

export default function ObservabilityStackPost() {
  return (
    <ArticleLayout maxWidth="3xl" spacing="relaxed">
      
      {/* Header - Professional & Centered */}
      <header className="text-center mb-20 md:mb-24 w-full">
        <div className="flex justify-center mb-12">
          <Link 
            href="/blog"
            className="inline-flex items-center text-cyan-600 hover:text-cyan-700 transition-colors text-sm font-medium group"
          >
            <ArrowLeft size={14} className="mr-2 group-hover:-translate-x-1 transition-transform" />
            Back to Blog
          </Link>
        </div>
        
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight tracking-tight">
          Building a Unified Observability Stack: Prometheus, Grafana & Jaeger
        </h1>
        
        <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
          <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
          <span>January 25, 2024</span>
        </div>
      </header>

      {/* 1️⃣ The Challenge */}
      <Section spacing="xl" withDivider animate>
        <div className="w-full flex flex-col items-center">
          <div className="w-full max-w-3xl">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-10 text-center">
              The Challenge
            </h2>
            
            <div className="space-y-6 mb-14">
              <p className="text-base md:text-lg leading-relaxed text-gray-700 text-center">
                Our microservices system lacked centralized visibility — developers relied on fragmented CloudWatch dashboards, 
                manual log searches, and ad-hoc alerts. Metrics retention was inconsistent and tracing between APIs was impossible, 
                leading to delayed root cause analysis.
              </p>
              <p className="text-base md:text-lg leading-relaxed text-gray-700 text-center">
                Without a unified observability stack, incident response times averaged 45+ minutes, and we had no way to 
                correlate errors across distributed services. Each team maintained separate monitoring tools, making it difficult 
                to understand system-wide behavior.
              </p>
            </div>
          </div>
          
          {/* Key Metrics Grid - Professional Cards with Better Spacing */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 w-full max-w-5xl mt-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0 }}
              className="bg-gradient-to-br from-white to-gray-50 border-2 border-gray-200 rounded-xl p-6 md:p-8 text-center hover:shadow-xl hover:border-blue-300 hover:-translate-y-1 transition-all duration-300 group"
            >
              <div className="text-3xl md:text-4xl font-extrabold text-blue-600 mb-3 group-hover:scale-110 transition-transform duration-300">80%</div>
              <div className="text-xs md:text-sm font-semibold text-gray-600 uppercase tracking-wider">MTTR Reduction</div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-gradient-to-br from-white to-gray-50 border-2 border-gray-200 rounded-xl p-6 md:p-8 text-center hover:shadow-xl hover:border-green-300 hover:-translate-y-1 transition-all duration-300 group"
            >
              <div className="text-3xl md:text-4xl font-extrabold text-green-600 mb-3 group-hover:scale-110 transition-transform duration-300">99.9%</div>
              <div className="text-xs md:text-sm font-semibold text-gray-600 uppercase tracking-wider">Uptime Achieved</div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-gradient-to-br from-white to-gray-50 border-2 border-gray-200 rounded-xl p-6 md:p-8 text-center hover:shadow-xl hover:border-purple-300 hover:-translate-y-1 transition-all duration-300 group"
            >
              <div className="text-3xl md:text-4xl font-extrabold text-purple-600 mb-3 group-hover:scale-110 transition-transform duration-300">50+</div>
              <div className="text-xs md:text-sm font-semibold text-gray-600 uppercase tracking-wider">Dashboards</div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-gradient-to-br from-white to-gray-50 border-2 border-gray-200 rounded-xl p-6 md:p-8 text-center hover:shadow-xl hover:border-orange-300 hover:-translate-y-1 transition-all duration-300 group"
            >
              <div className="text-3xl md:text-4xl font-extrabold text-orange-600 mb-3 group-hover:scale-110 transition-transform duration-300">100+</div>
              <div className="text-xs md:text-sm font-semibold text-gray-600 uppercase tracking-wider">Alerts Configured</div>
            </motion.div>
          </div>
        </div>
      </Section>

      {/* 2️⃣ My Solution */}
      <Section spacing="xl" withDivider animate>
        <div className="w-full flex flex-col items-center">
          <div className="w-full max-w-3xl">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-10 text-center">
              My Solution
            </h2>
            
            <div className="space-y-6">
              <p className="text-base md:text-lg leading-relaxed text-gray-700 text-center">
                We standardized our observability stack around open-source Helm charts — deploying Prometheus for metrics, 
                Grafana for visualization, Loki for logs, and Jaeger for distributed tracing. Using ArgoCD, the stack was 
                deployed GitOps-style across EKS clusters. Centralized alert routing was configured via Alertmanager and 
                PagerDuty integrations.
              </p>
              <p className="text-base md:text-lg leading-relaxed text-gray-700 text-center">
                This unified approach eliminated tool fragmentation, provided consistent metric retention policies, and enabled 
                end-to-end request tracing. All infrastructure changes were version-controlled and deployed automatically, ensuring 
                consistent observability across development, staging, and production environments.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* 3️⃣ Observability Stack Architecture */}
      <Section spacing="xl" withDivider animate>
        <div className="w-full flex flex-col items-center">
          <div className="w-full max-w-4xl">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-10 text-center flex items-center justify-center gap-3">
              <Server className="text-cyan-600" size={28} />
              Observability Stack Architecture
            </h2>
            
            <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 md:p-10 border-2 border-gray-200 mb-8 shadow-sm hover:shadow-md transition-shadow duration-300">
              <h3 className="text-xl md:text-2xl font-bold mb-10 text-gray-900 text-center">Three Pillars of Observability</h3>
              
              <div className="space-y-8">
                {[
                  { 
                    label: "Metrics Collection", 
                    tech: "Prometheus Helm chart + Node Exporter + custom app metrics via /metrics endpoints",
                    colorClass: "bg-orange-500",
                    color: "orange"
                  },
                  { 
                    label: "Visualization & Dashboards", 
                    tech: "Grafana Helm chart, provisioned dashboards via ConfigMaps, SSO using OAuth",
                    colorClass: "bg-blue-500",
                    color: "blue"
                  },
                  { 
                    label: "Distributed Tracing", 
                    tech: "Jaeger Operator via Helm, integrated with OpenTelemetry SDK",
                    colorClass: "bg-purple-500",
                    color: "purple"
                  },
                  { 
                    label: "Log Aggregation", 
                    tech: "Loki + Promtail via Helm, pushing logs to S3 for long-term retention",
                    colorClass: "bg-green-500",
                    color: "green"
                  },
                  { 
                    label: "Alerting & Notification", 
                    tech: "Alertmanager routes integrated with PagerDuty + Slack webhooks",
                    colorClass: "bg-red-500",
                    color: "red"
                  },
                ].map((item, index) => (
                  <motion.div 
                    key={item.label}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-start gap-4 p-4 rounded-lg hover:bg-gray-100/50 transition-colors duration-200"
                  >
                    <div className={`w-4 h-4 ${item.colorClass} rounded-full mt-1 flex-shrink-0 shadow-sm`}></div>
                    <div className="flex-1">
                      <span className="font-bold text-base md:text-lg text-gray-900 block mb-2">{item.label}</span>
                      <span className="text-sm md:text-base text-gray-600 block leading-relaxed">{item.tech}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <p className="text-base md:text-lg leading-relaxed text-gray-700 text-center mt-8">
              The stack provides comprehensive visibility across all layers of the application stack, 
              from infrastructure metrics to application performance, enabling proactive issue detection 
              and rapid troubleshooting.
            </p>
          </div>
        </div>
      </Section>

      {/* 4️⃣ Implementation Details */}
      <Section spacing="xl" withDivider animate>
        <div className="w-full flex flex-col items-center">
          <div className="w-full max-w-3xl">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-10 text-center flex items-center justify-center gap-3">
              <Code className="text-cyan-600" size={28} />
              Implementation Details
            </h2>
            
            <div className="space-y-14">
              {/* Prometheus Configuration */}
              <div className="bg-white rounded-xl p-6 md:p-8 border border-gray-200 hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-xl font-bold mb-5 text-gray-900 flex items-center gap-3">
                  <BarChart3 className="text-cyan-600" size={22} />
                  Prometheus Configuration
                </h3>
                <p className="text-base md:text-lg leading-relaxed text-gray-700 mb-6">
                  Used the official <code className="px-2 py-1 bg-gray-100 text-cyan-700 rounded-md text-sm font-mono font-semibold">kube-prometheus-stack</code> Helm chart with custom retention, 
                  multi-cluster federation, and ServiceMonitor CRDs for application metrics.
                </p>
                <ul className="space-y-3 text-base leading-relaxed text-gray-600 ml-2">
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
                      className="flex items-start gap-3"
                    >
                      <span className="text-cyan-600 mt-1 font-bold">▸</span>
                      <span>{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* Grafana Dashboards */}
              <div className="bg-white rounded-xl p-6 md:p-8 border border-gray-200 hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-xl font-bold mb-5 text-gray-900 flex items-center gap-3">
                  <BarChart3 className="text-cyan-600" size={22} />
                  Grafana Dashboards
                </h3>
                <p className="text-base md:text-lg leading-relaxed text-gray-700 mb-6">
                  Deployed via ArgoCD Helm release, using pre-baked dashboards from JSON templates stored in Git. 
                  Integrated with SSO for RBAC access.
                </p>
                <ul className="space-y-3 text-base leading-relaxed text-gray-600 ml-2">
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
                      className="flex items-start gap-3"
                    >
                      <span className="text-cyan-600 mt-1 font-bold">▸</span>
                      <span>{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* Loki + Promtail */}
              <div className="bg-white rounded-xl p-6 md:p-8 border border-gray-200 hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-xl font-bold mb-5 text-gray-900 flex items-center gap-3">
                  <Database className="text-cyan-600" size={22} />
                  Loki + Promtail
                </h3>
                <p className="text-base md:text-lg leading-relaxed text-gray-700 mb-6">
                  Configured via Helm, ingesting EKS container logs and storing compressed logs on S3 for long-term retention 
                  and cost optimization.
                </p>
                <ul className="space-y-3 text-base leading-relaxed text-gray-600 ml-2">
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
                      className="flex items-start gap-3"
                    >
                      <span className="text-cyan-600 mt-1 font-bold">▸</span>
                      <span>{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* Jaeger */}
              <div className="bg-white rounded-xl p-6 md:p-8 border border-gray-200 hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-xl font-bold mb-5 text-gray-900 flex items-center gap-3">
                  <Search className="text-cyan-600" size={22} />
                  Jaeger Distributed Tracing
                </h3>
                <p className="text-base md:text-lg leading-relaxed text-gray-700 mb-6">
                  Deployed using the Jaeger Operator chart, integrated with application traces through OpenTelemetry SDK for 
                  end-to-end request visibility across microservices.
                </p>
                <ul className="space-y-3 text-base leading-relaxed text-gray-600 ml-2">
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
                      className="flex items-start gap-3"
                    >
                      <span className="text-cyan-600 mt-1 font-bold">▸</span>
                      <span>{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* AlertManager */}
              <div className="bg-white rounded-xl p-6 md:p-8 border border-gray-200 hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-xl font-bold mb-5 text-gray-900 flex items-center gap-3">
                  <AlertCircle className="text-cyan-600" size={22} />
                  AlertManager Configuration
                </h3>
                <p className="text-base md:text-lg leading-relaxed text-gray-700 mb-6">
                  Set up with routing rules for severity levels, notifying Slack channels and PagerDuty for critical incidents 
                  with proper escalation policies.
                </p>
                <ul className="space-y-3 text-base leading-relaxed text-gray-600 ml-2">
                  {[
                    "Severity-based alert routing (critical, warning, info)",
                    "PagerDuty integration for on-call escalation",
                    "Slack webhook notifications for team awareness",
                    "Alert grouping and deduplication to reduce noise",
                    "Silence rules for planned maintenance windows"
                  ].map((item, idx) => (
                    <motion.li
                      key={item}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.05, duration: 0.3 }}
                      className="flex items-start gap-3"
                    >
                      <span className="text-cyan-600 mt-1 font-bold">▸</span>
                      <span>{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* 5️⃣ Results & Metrics */}
      <Section spacing="xl" animate>
        <div className="w-full flex flex-col items-center">
          <div className="w-full max-w-4xl">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-10 text-center">
              Results Achieved
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-gradient-to-br from-green-50 to-white border-2 border-green-200 rounded-xl p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <h3 className="text-xl font-bold mb-6 text-green-800 text-center">Operational Improvements</h3>
                <ul className="space-y-4 text-base leading-relaxed text-green-700">
                  {[
                    "80% MTTR Reduction - Faster incident resolution",
                    "99.9% Uptime - Proactive monitoring",
                    "50+ Dashboards - Comprehensive visibility",
                    "100+ Alerts - Automated issue detection"
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="text-green-600 mt-1 font-bold">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-gradient-to-br from-cyan-50 to-white border-2 border-cyan-200 rounded-xl p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <h3 className="text-xl font-bold mb-6 text-cyan-800 text-center">Business Impact</h3>
                <ul className="space-y-4 text-base leading-relaxed text-cyan-700">
                  {[
                    "Reduced Downtime - Proactive issue detection",
                    "Improved Performance - Data-driven optimization",
                    "Better User Experience - SLA monitoring",
                    "Cost Optimization - Resource utilization insights"
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="text-cyan-600 mt-1 font-bold">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </div>
      </Section>

      {/* Footer - Professional */}
      <footer className="text-center text-gray-500 text-sm mt-24 md:mt-32 border-t border-gray-200 pt-10 w-full">
        © 2025 Amr Fathy — All rights reserved.
      </footer>

    </ArticleLayout>
  );
}
