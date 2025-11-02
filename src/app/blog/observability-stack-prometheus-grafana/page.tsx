"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Code, Server, Database, AlertCircle, BarChart3, Search } from "lucide-react";
import { ArticleLayout, Section } from "@/components/Layout";

export default function ObservabilityStackPost() {
  return (
    <ArticleLayout maxWidth="4xl" spacing="relaxed">
      
      {/* Header - Centered like Home Page */}
      <header className="text-center mb-16 md:mb-20 w-full">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="flex justify-center mb-10">
            <Link 
              href="/blog"
              className="inline-flex items-center text-cyan-600 hover:text-cyan-700 transition-colors text-sm font-medium group"
            >
              <ArrowLeft size={14} className="mr-2 group-hover:-translate-x-1 transition-transform" />
              Back to Blog
            </Link>
          </div>
          
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-800 mb-6 leading-tight text-center">
            Building a Unified Observability Stack: Prometheus, Grafana & Jaeger
          </h1>
          
          <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
            <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
            <span>January 25, 2024</span>
          </div>
        </div>
      </header>

      {/* 1️⃣ The Challenge */}
      <Section spacing="xl" withDivider animate>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-800 mb-8">
            The Challenge
          </h2>
          
          <div className="space-y-4 mb-10 max-w-3xl mx-auto">
            <p className="text-sm md:text-base leading-relaxed text-gray-700">
              Our microservices architecture lacked centralized observability. Teams relied on fragmented CloudWatch dashboards, 
              manual log searches, and inconsistent alerting—making incident response slow and error correlation impossible.
            </p>
            <p className="text-sm md:text-base leading-relaxed text-gray-700">
              Without unified metrics, logs, and traces, average incident resolution exceeded 45 minutes. Separate monitoring 
              tools per team prevented understanding system-wide behavior and delayed root cause analysis.
            </p>
          </div>
          
          {/* Key Metrics Grid - Centered */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-6 max-w-4xl mx-auto mt-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0 }}
              className="group text-center p-5 md:p-6 rounded-2xl bg-gradient-to-br from-gray-50 to-white border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300"
            >
              <div className="text-2xl md:text-3xl font-bold text-blue-600 mb-2 group-hover:scale-110 transition-transform duration-300">80%</div>
              <div className="text-xs md:text-sm text-gray-600 font-medium uppercase tracking-wider">MTTR Reduction</div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="group text-center p-5 md:p-6 rounded-2xl bg-gradient-to-br from-gray-50 to-white border border-gray-200 hover:border-green-300 hover:shadow-lg transition-all duration-300"
            >
              <div className="text-2xl md:text-3xl font-bold text-green-600 mb-2 group-hover:scale-110 transition-transform duration-300">99.9%</div>
              <div className="text-xs md:text-sm text-gray-600 font-medium uppercase tracking-wider">Uptime Achieved</div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="group text-center p-5 md:p-6 rounded-2xl bg-gradient-to-br from-gray-50 to-white border border-gray-200 hover:border-purple-300 hover:shadow-lg transition-all duration-300"
            >
              <div className="text-2xl md:text-3xl font-bold text-purple-600 mb-2 group-hover:scale-110 transition-transform duration-300">50+</div>
              <div className="text-xs md:text-sm text-gray-600 font-medium uppercase tracking-wider">Dashboards</div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="group text-center p-5 md:p-6 rounded-2xl bg-gradient-to-br from-gray-50 to-white border border-gray-200 hover:border-orange-300 hover:shadow-lg transition-all duration-300"
            >
              <div className="text-2xl md:text-3xl font-bold text-orange-600 mb-2 group-hover:scale-110 transition-transform duration-300">100+</div>
              <div className="text-xs md:text-sm text-gray-600 font-medium uppercase tracking-wider">Alerts Configured</div>
            </motion.div>
          </div>
        </div>
      </Section>

      {/* 2️⃣ My Solution */}
      <Section spacing="xl" withDivider animate>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-800 mb-8">
            My Solution
          </h2>
          
          <div className="space-y-4 max-w-3xl mx-auto">
            <p className="text-sm md:text-base leading-relaxed text-gray-700">
              I standardized the observability stack around open-source Helm charts: Prometheus for metrics, Grafana for 
              visualization, Loki for logs, and Jaeger for distributed tracing. Deployed GitOps-style via ArgoCD across 
              EKS clusters with centralized alert routing through Alertmanager and PagerDuty.
            </p>
            <p className="text-sm md:text-base leading-relaxed text-gray-700">
              This unified approach eliminated tool fragmentation, enforced consistent retention policies, and enabled 
              end-to-end request tracing. All infrastructure changes are version-controlled and deployed automatically, 
              ensuring consistent observability across dev, staging, and production.
            </p>
          </div>
        </div>
      </Section>

      {/* 3️⃣ Observability Stack Architecture */}
      <Section spacing="xl" withDivider animate>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-800 mb-8 flex items-center justify-center gap-2">
            <Server className="text-cyan-600" size={22} />
            Observability Stack Architecture
          </h2>
          
          <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 md:p-8 border border-gray-200 mb-6 max-w-4xl mx-auto shadow-sm hover:shadow-md transition-shadow duration-300">
            <h3 className="text-lg md:text-xl font-semibold mb-6 text-gray-800">Three Pillars of Observability</h3>
            
            <div className="space-y-5 text-left max-w-3xl mx-auto">
              {[
                { 
                  label: "Metrics Collection", 
                  tech: "Prometheus Helm chart + Node Exporter + custom app metrics via /metrics endpoints",
                  colorClass: "bg-orange-500"
                },
                { 
                  label: "Visualization & Dashboards", 
                  tech: "Grafana Helm chart, provisioned dashboards via ConfigMaps, SSO using OAuth",
                  colorClass: "bg-blue-500"
                },
                { 
                  label: "Distributed Tracing", 
                  tech: "Jaeger Operator via Helm, integrated with OpenTelemetry SDK",
                  colorClass: "bg-purple-500"
                },
                { 
                  label: "Log Aggregation", 
                  tech: "Loki + Promtail via Helm, pushing logs to S3 for long-term retention",
                  colorClass: "bg-green-500"
                },
                { 
                  label: "Alerting & Notification", 
                  tech: "Alertmanager routes integrated with PagerDuty + Slack webhooks",
                  colorClass: "bg-red-500"
                },
              ].map((item, index) => (
                <motion.div 
                  key={item.label}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-100/50 transition-colors duration-200"
                >
                  <div className={`w-3 h-3 ${item.colorClass} rounded-full mt-1 flex-shrink-0 shadow-sm`}></div>
                  <div className="flex-1">
                    <span className="font-semibold text-sm md:text-base text-gray-800 block mb-1">{item.label}</span>
                    <span className="text-xs md:text-sm text-gray-600 block leading-relaxed">{item.tech}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <p className="text-sm md:text-base leading-relaxed text-gray-700 max-w-3xl mx-auto mt-6">
            The stack provides comprehensive visibility across infrastructure and application layers, enabling proactive 
            issue detection and rapid troubleshooting.
          </p>
        </div>
      </Section>

      {/* 4️⃣ Implementation Details */}
      <Section spacing="xl" withDivider animate>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-800 mb-8 flex items-center justify-center gap-2">
            <Code className="text-cyan-600" size={22} />
            Implementation Details
          </h2>
          
          <div className="space-y-8 max-w-3xl mx-auto">
            {/* Prometheus Configuration */}
            <div className="bg-white rounded-xl p-5 md:p-6 border border-gray-200 hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-base md:text-lg font-semibold mb-4 text-gray-800 flex items-center justify-center gap-2">
                <BarChart3 className="text-cyan-600" size={18} />
                Prometheus Configuration
              </h3>
              <p className="text-sm md:text-base leading-relaxed text-gray-700 mb-4">
                Used the official <code className="px-2 py-1 bg-gray-100 text-cyan-700 rounded-md text-xs font-mono font-semibold">kube-prometheus-stack</code> Helm chart with custom retention, 
                multi-cluster federation, and ServiceMonitor CRDs for application metrics.
              </p>
              <ul className="space-y-2 text-sm leading-relaxed text-gray-600 text-left max-w-2xl mx-auto">
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
                    <span className="text-cyan-600 mt-1 font-bold text-xs">▸</span>
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Grafana Dashboards */}
            <div className="bg-white rounded-xl p-5 md:p-6 border border-gray-200 hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-base md:text-lg font-semibold mb-4 text-gray-800 flex items-center justify-center gap-2">
                <BarChart3 className="text-cyan-600" size={18} />
                Grafana Dashboards
              </h3>
              <p className="text-sm md:text-base leading-relaxed text-gray-700 mb-4">
                Deployed via ArgoCD Helm release, using pre-baked dashboards from JSON templates stored in Git. 
                Integrated with SSO for RBAC access.
              </p>
              <ul className="space-y-2 text-sm leading-relaxed text-gray-600 text-left max-w-2xl mx-auto">
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
                    <span className="text-cyan-600 mt-1 font-bold text-xs">▸</span>
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Loki + Promtail */}
            <div className="bg-white rounded-xl p-5 md:p-6 border border-gray-200 hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-base md:text-lg font-semibold mb-4 text-gray-800 flex items-center justify-center gap-2">
                <Database className="text-cyan-600" size={18} />
                Loki + Promtail
              </h3>
              <p className="text-sm md:text-base leading-relaxed text-gray-700 mb-4">
                Configured via Helm, ingesting EKS container logs and storing compressed logs on S3 for long-term retention 
                and cost optimization.
              </p>
              <ul className="space-y-2 text-sm leading-relaxed text-gray-600 text-left max-w-2xl mx-auto">
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
                    <span className="text-cyan-600 mt-1 font-bold text-xs">▸</span>
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Jaeger */}
            <div className="bg-white rounded-xl p-5 md:p-6 border border-gray-200 hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-base md:text-lg font-semibold mb-4 text-gray-800 flex items-center justify-center gap-2">
                <Search className="text-cyan-600" size={18} />
                Jaeger Distributed Tracing
              </h3>
              <p className="text-sm md:text-base leading-relaxed text-gray-700 mb-4">
                Deployed using the Jaeger Operator chart, integrated with application traces through OpenTelemetry SDK for 
                end-to-end request visibility across microservices.
              </p>
              <ul className="space-y-2 text-sm leading-relaxed text-gray-600 text-left max-w-2xl mx-auto">
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
                    <span className="text-cyan-600 mt-1 font-bold text-xs">▸</span>
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* AlertManager */}
            <div className="bg-white rounded-xl p-5 md:p-6 border border-gray-200 hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-base md:text-lg font-semibold mb-4 text-gray-800 flex items-center justify-center gap-2">
                <AlertCircle className="text-cyan-600" size={18} />
                AlertManager Configuration
              </h3>
              <p className="text-sm md:text-base leading-relaxed text-gray-700 mb-4">
                Set up with routing rules for severity levels, notifying Slack channels and PagerDuty for critical incidents 
                with proper escalation policies.
              </p>
              <ul className="space-y-2 text-sm leading-relaxed text-gray-600 text-left max-w-2xl mx-auto">
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
                    className="flex items-start gap-2"
                  >
                    <span className="text-cyan-600 mt-1 font-bold text-xs">▸</span>
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Section>

      {/* 5️⃣ Results & Metrics */}
      <Section spacing="xl" animate>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-800 mb-8">
            Results Achieved
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="group text-center p-6 rounded-2xl bg-gradient-to-br from-gray-50 to-white border border-gray-200 hover:border-green-300 hover:shadow-lg transition-all duration-300"
            >
              <h3 className="text-base md:text-lg font-semibold mb-5 text-green-800">Operational Improvements</h3>
              <ul className="space-y-3 text-sm leading-relaxed text-green-700 text-left">
                {[
                  "80% MTTR Reduction - Faster incident resolution",
                  "99.9% Uptime - Proactive monitoring",
                  "50+ Dashboards - Comprehensive visibility",
                  "100+ Alerts - Automated issue detection"
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
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
              className="group text-center p-6 rounded-2xl bg-gradient-to-br from-gray-50 to-white border border-gray-200 hover:border-cyan-300 hover:shadow-lg transition-all duration-300"
            >
              <h3 className="text-base md:text-lg font-semibold mb-5 text-cyan-800">Business Impact</h3>
              <ul className="space-y-3 text-sm leading-relaxed text-cyan-700 text-left">
                {[
                  "Reduced Downtime - Proactive issue detection",
                  "Improved Performance - Data-driven optimization",
                  "Better User Experience - SLA monitoring",
                  "Cost Optimization - Resource utilization insights"
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="text-cyan-600 mt-1 font-bold">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </Section>

      {/* Footer - Professional */}
      <footer className="text-center text-gray-500 text-sm mt-20 md:mt-24 border-t border-gray-200 pt-8 w-full">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          © 2025 Amr Fathy — All rights reserved.
        </div>
      </footer>

    </ArticleLayout>
  );
}
