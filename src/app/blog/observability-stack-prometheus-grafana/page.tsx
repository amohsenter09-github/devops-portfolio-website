"use client";

import { motion } from "framer-motion";
import { Code, Database, AlertCircle, BarChart3, Search } from "lucide-react";
import { ArticleLayout, Section } from "@/components/Layout";

export default function ObservabilityStackPost() {
  return (
    <ArticleLayout maxWidth="4xl" spacing="relaxed">
      
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
