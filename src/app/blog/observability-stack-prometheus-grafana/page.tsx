"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock, Tag, Code, Server, Database, AlertCircle, BarChart3, Search } from "lucide-react";

export default function ObservabilityStackPost() {
  const tags = ["Observability", "Prometheus", "Grafana", "Jaeger", "Monitoring"];

  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-100">
      {/* Header Section - Centered Column with Left-Aligned Text */}
      <section className="py-section-xl md:py-section-3xl w-full flex items-center justify-center">
        <div className="max-w-3xl mx-auto w-full px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <Link 
              href="/blog"
              className="inline-flex items-center text-cyan-600 hover:text-cyan-700 transition-colors mb-content-xl group"
            >
              <ArrowLeft size={16} className="mr-2 group-hover:-translate-x-1 transition-transform" />
              <span className="text-xs font-medium">Back to Blog</span>
            </Link>
            
            <div className="flex items-center gap-4 mb-content-lg text-xs text-gray-500">
              <div className="flex items-center gap-2">
                <Calendar size={14} className="text-cyan-600" />
                <span>January 25, 2024</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={14} className="text-cyan-600" />
                <span>10 min read</span>
              </div>
            </div>
            
            <h1 className="font-mono text-xl md:text-2xl font-semibold mb-content-lg text-gray-900 leading-tight">
              Building a Unified Observability Stack: Prometheus, Grafana & Jaeger
            </h1>
            
            {/* Tags with Clean Animations */}
            <div className="flex flex-wrap gap-2 mb-section-3xl">
              {tags.map((tag, index) => (
                <motion.span
                  key={tag}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1, duration: 0.3 }}
                  whileHover={{ 
                    scale: 1.05, 
                    y: -2,
                    boxShadow: "0 4px 12px rgba(6, 182, 212, 0.2)"
                  }}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-cyan-50 text-cyan-700 text-xs font-medium rounded-full border border-cyan-200 hover:bg-cyan-100 hover:border-cyan-300 transition-all duration-300 cursor-default"
                >
                  <Tag size={12} />
                  {tag}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Article Content - Centered Column with Left-Aligned Text */}
      <article className="pb-section-3xl md:pb-section-3xl w-full flex items-center justify-center">
        <div className="max-w-3xl mx-auto w-full px-4 sm:px-6 lg:px-8">
          
          {/* 1️⃣ The Challenge */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="bg-white rounded-xl border border-gray-200 p-content-xl md:p-section-md mb-section-3xl shadow-sm hover:shadow-md transition-shadow duration-300"
          >
            <h2 className="text-lg md:text-xl font-bold mb-content-xl text-gray-900">The Challenge</h2>
            <div className="space-y-content-lg text-sm md:text-base text-gray-700 leading-relaxed">
              <p>
                Our microservices system lacked centralized visibility — developers relied on fragmented CloudWatch dashboards, 
                manual log searches, and ad-hoc alerts. Metrics retention was inconsistent and tracing between APIs was impossible, 
                leading to delayed root cause analysis.
              </p>
              <p className="text-gray-600">
                Without a unified observability stack, incident response times averaged 45+ minutes, and we had no way to 
                correlate errors across distributed services. Each team maintained separate monitoring tools, making it difficult 
                to understand system-wide behavior.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Key Metrics - Professional Layout with Clean Spacing */}
        <section className="py-16 md:py-24 w-full bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {[
                { value: "80%", label: "MTTR Reduction", colorClass: "text-blue-600", bgClass: "bg-blue-50", hoverBorder: "hover:border-blue-300" },
                { value: "99.9%", label: "Uptime Achieved", colorClass: "text-green-600", bgClass: "bg-green-50", hoverBorder: "hover:border-green-300" },
                { value: "50+", label: "Dashboards", colorClass: "text-purple-600", bgClass: "bg-purple-50", hoverBorder: "hover:border-purple-300" },
                { value: "100+", label: "Alerts Configured", colorClass: "text-orange-600", bgClass: "bg-orange-50", hoverBorder: "hover:border-orange-300" },
              ].map((metric, index) => (
                <motion.div
                  key={metric.label}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.1, duration: 0.4 }}
                  whileHover={{ scale: 1.03, y: -6 }}
                  className={`text-center p-8 md:p-10 lg:p-12 rounded-2xl ${metric.bgClass} border border-gray-200/80 hover:border-gray-300 ${metric.hoverBorder} transition-all duration-300 shadow-md hover:shadow-xl`}
                  style={{
                    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -2px rgba(0, 0, 0, 0.05)'
                  }}
                >
                  <div className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-4 ${metric.colorClass}`}>
                    {metric.value}
                  </div>
                  <div className="text-base md:text-lg lg:text-xl text-gray-700 font-semibold leading-tight">
                    {metric.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Continue Article Content */}
        <div className="max-w-3xl mx-auto w-full px-4 sm:px-6 lg:px-8">
          {/* 2️⃣ My Solution */}
          <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
              className="bg-white rounded-xl border border-gray-200 p-content-xl md:p-section-md mb-section-3xl shadow-sm hover:shadow-md transition-shadow duration-300"
            >
            <h2 className="text-lg md:text-xl font-bold mb-content-xl text-gray-900">My Solution</h2>
            <div className="space-y-content-lg text-sm md:text-base text-gray-700 leading-relaxed">
              <p>
                We standardized our observability stack around open-source Helm charts — deploying Prometheus for metrics, 
                Grafana for visualization, Loki for logs, and Jaeger for distributed tracing. Using ArgoCD, the stack was 
                deployed GitOps-style across EKS clusters. Centralized alert routing was configured via Alertmanager and 
                PagerDuty integrations.
              </p>
              <p className="text-gray-600">
                This unified approach eliminated tool fragmentation, provided consistent metric retention policies, and enabled 
                end-to-end request tracing. All infrastructure changes were version-controlled and deployed automatically, ensuring 
                consistent observability across development, staging, and production environments.
              </p>
            </div>
          </motion.div>

          {/* 3️⃣ Observability Stack Architecture */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            className="bg-white rounded-xl border border-gray-200 p-content-xl md:p-section-md mb-section-3xl shadow-sm hover:shadow-md transition-shadow duration-300"
          >
            <h2 className="text-lg md:text-xl font-bold mb-content-xl text-gray-900 flex items-center">
              <Server className="mr-2 text-cyan-600" size={20} />
              Observability Stack Architecture
            </h2>
            
            <div className="bg-gray-50 rounded-lg p-content-xl md:p-content-lg mb-content-xl border border-gray-200">
              <h3 className="text-base md:text-lg font-bold mb-content-xl text-gray-900">Three Pillars of Observability</h3>
              <div className="space-y-content-xl">
                {[
                  { 
                    label: "Metrics Collection", 
                    tech: "Prometheus Helm chart + Node Exporter + custom app metrics via /metrics endpoints",
                    colorClass: "bg-orange-500",
                    icon: BarChart3
                  },
                  { 
                    label: "Visualization & Dashboards", 
                    tech: "Grafana Helm chart, provisioned dashboards via ConfigMaps, SSO using OAuth",
                    colorClass: "bg-blue-500",
                    icon: BarChart3
                  },
                  { 
                    label: "Distributed Tracing", 
                    tech: "Jaeger Operator via Helm, integrated with OpenTelemetry SDK",
                    colorClass: "bg-purple-500",
                    icon: Search
                  },
                  { 
                    label: "Log Aggregation", 
                    tech: "Loki + Promtail via Helm, pushing logs to S3 for long-term retention",
                    colorClass: "bg-green-500",
                    icon: Database
                  },
                  { 
                    label: "Alerting & Notification", 
                    tech: "Alertmanager routes integrated with PagerDuty + Slack webhooks",
                    colorClass: "bg-red-500",
                    icon: AlertCircle
                  },
                ].map((item, index) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + index * 0.1, duration: 0.4 }}
                    className="flex items-start justify-between py-2 gap-4"
                  >
                    <div className="flex items-start gap-2.5 flex-1">
                      <div className={`w-2.5 h-2.5 ${item.colorClass} rounded-full mt-1.5 flex-shrink-0`}></div>
                      <div className="flex-1">
                        <span className="font-medium text-sm md:text-base text-gray-900 block mb-1">{item.label}</span>
                        <span className="text-xs md:text-sm text-gray-600 block leading-relaxed">{item.tech}</span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <p className="text-sm md:text-base text-gray-600 leading-relaxed mt-content-xl">
              The stack provides comprehensive visibility across all layers of the application stack, 
              from infrastructure metrics to application performance, enabling proactive issue detection 
              and rapid troubleshooting.
            </p>
          </motion.div>

          {/* 4️⃣ Implementation Details */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
            className="bg-white rounded-xl border border-gray-200 p-content-xl md:p-section-md mb-section-3xl shadow-sm hover:shadow-md transition-shadow duration-300"
          >
            <h2 className="text-lg md:text-xl font-bold mb-content-xl text-gray-900 flex items-center">
              <Code className="mr-2 text-cyan-600" size={20} />
              Implementation Details
            </h2>
            
            <div className="space-y-section-2xl">
              {/* Prometheus Configuration */}
              <div>
                <h3 className="text-base md:text-lg font-semibold mb-5 text-gray-900 flex items-center">
                  <BarChart3 className="mr-2 text-cyan-600" size={18} />
                  Prometheus Configuration
                </h3>
                <p className="text-sm md:text-base text-gray-700 mb-5 leading-relaxed">
                  Used the official <code className="px-1.5 py-0.5 bg-gray-100 text-cyan-700 rounded text-xs font-mono">kube-prometheus-stack</code> Helm chart with custom retention, 
                  multi-cluster federation, and ServiceMonitor CRDs for application metrics.
                </p>
                <ul className="space-y-2 text-sm md:text-base text-gray-600 ml-4">
                  {[
                    "Custom retention policies (30 days for high-priority, 7 days for standard)",
                    "Multi-cluster federation for centralized metric aggregation",
                    "ServiceMonitor CRDs for Kubernetes-native service discovery",
                    "Recording rules for pre-computed aggregations and performance",
                    "High availability setup with Thanos for long-term storage"
                  ].map((item, index) => (
                    <motion.li
                      key={item}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.4 + index * 0.05, duration: 0.3 }}
                      className="flex items-start gap-2"
                    >
                      <span className="text-cyan-600 mt-0.5">•</span>
                      <span>{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* Grafana Dashboards */}
              <div>
                <h3 className="text-base md:text-lg font-semibold mb-5 text-gray-900 flex items-center">
                  <BarChart3 className="mr-2 text-cyan-600" size={18} />
                  Grafana Dashboards
                </h3>
                <p className="text-sm md:text-base text-gray-700 mb-5 leading-relaxed">
                  Deployed via ArgoCD Helm release, using pre-baked dashboards from JSON templates stored in Git. 
                  Integrated with SSO for RBAC access.
                </p>
                <ul className="space-y-2 text-sm md:text-base text-gray-600 ml-4">
                  {[
                    "Infrastructure monitoring dashboards for CPU, memory, and network metrics",
                    "Application performance metrics with custom business KPIs",
                    "Custom alerting rules with severity-based routing",
                    "Multi-environment views (dev, staging, production)",
                    "Role-based access control (RBAC) with OAuth integration",
                    "Dashboard versioning via GitOps workflows"
                  ].map((item, index) => (
                    <motion.li
                      key={item}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5 + index * 0.05, duration: 0.3 }}
                      className="flex items-start gap-2"
                    >
                      <span className="text-cyan-600 mt-0.5">•</span>
                      <span>{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* Loki + Promtail */}
              <div>
                <h3 className="text-base md:text-lg font-semibold mb-5 text-gray-900 flex items-center">
                  <Database className="mr-2 text-cyan-600" size={18} />
                  Loki + Promtail
                </h3>
                <p className="text-sm md:text-base text-gray-700 mb-5 leading-relaxed">
                  Configured via Helm, ingesting EKS container logs and storing compressed logs on S3 for long-term retention 
                  and cost optimization.
                </p>
                <ul className="space-y-2 text-sm md:text-base text-gray-600 ml-4">
                  {[
                    "Container log ingestion from EKS pods via Promtail DaemonSet",
                    "Log compression and indexing for efficient querying",
                    "S3 backend for long-term log retention (90 days)",
                    "Label-based log filtering and routing",
                    "Integration with Grafana for unified log visualization"
                  ].map((item, index) => (
                    <motion.li
                      key={item}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.6 + index * 0.05, duration: 0.3 }}
                      className="flex items-start gap-2"
                    >
                      <span className="text-cyan-600 mt-0.5">•</span>
                      <span>{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* Jaeger */}
              <div>
                <h3 className="text-base md:text-lg font-semibold mb-5 text-gray-900 flex items-center">
                  <Search className="mr-2 text-cyan-600" size={18} />
                  Jaeger Distributed Tracing
                </h3>
                <p className="text-sm md:text-base text-gray-700 mb-5 leading-relaxed">
                  Deployed using the Jaeger Operator chart, integrated with application traces through OpenTelemetry SDK for 
                  end-to-end request visibility across microservices.
                </p>
                <ul className="space-y-2 text-sm md:text-base text-gray-600 ml-4">
                  {[
                    "Jaeger Operator deployed via Helm chart",
                    "OpenTelemetry SDK integration in application code",
                    "Trace sampling configuration (10% for production, 100% for staging)",
                    "Service dependency mapping and performance analysis",
                    "Integration with Grafana for trace visualization"
                  ].map((item, index) => (
                    <motion.li
                      key={item}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.7 + index * 0.05, duration: 0.3 }}
                      className="flex items-start gap-2"
                    >
                      <span className="text-cyan-600 mt-0.5">•</span>
                      <span>{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* AlertManager */}
              <div>
                <h3 className="text-base md:text-lg font-semibold mb-5 text-gray-900 flex items-center">
                  <AlertCircle className="mr-2 text-cyan-600" size={18} />
                  AlertManager Configuration
                </h3>
                <p className="text-sm md:text-base text-gray-700 mb-5 leading-relaxed">
                  Set up with routing rules for severity levels, notifying Slack channels and PagerDuty for critical incidents 
                  with proper escalation policies.
                </p>
                <ul className="space-y-2 text-sm md:text-base text-gray-600 ml-4">
                  {[
                    "Severity-based alert routing (critical, warning, info)",
                    "PagerDuty integration for on-call escalation",
                    "Slack webhook notifications for team awareness",
                    "Alert grouping and deduplication to reduce noise",
                    "Silence rules for planned maintenance windows"
                  ].map((item, index) => (
                    <motion.li
                      key={item}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.8 + index * 0.05, duration: 0.3 }}
                      className="flex items-start gap-2"
                    >
                      <span className="text-cyan-600 mt-0.5">•</span>
                      <span>{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>

          {/* 5️⃣ Results & Metrics */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
            className="bg-white rounded-xl border border-gray-200 p-content-xl md:p-section-md shadow-sm hover:shadow-md transition-shadow duration-300"
          >
            <h2 className="text-lg md:text-xl font-bold mb-content-xl text-gray-900">Results Achieved</h2>
            
            <div className="grid md:grid-cols-2 gap-content-xl md:gap-section-xl">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
                whileHover={{ scale: 1.02, y: -3 }}
                className="bg-green-50 border border-green-200 rounded-lg p-5 hover:shadow-md transition-all duration-300"
              >
                <h3 className="text-base md:text-lg font-semibold mb-3 text-green-800">Operational Improvements</h3>
                <ul className="space-y-2 text-sm md:text-base text-green-700">
                  {[
                    "80% MTTR Reduction - Faster incident resolution",
                    "99.9% Uptime - Proactive monitoring",
                    "50+ Dashboards - Comprehensive visibility",
                    "100+ Alerts - Automated issue detection"
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="text-green-600 mt-0.5">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.6 }}
                whileHover={{ scale: 1.02, y: -3 }}
                className="bg-cyan-50 border border-cyan-200 rounded-lg p-5 hover:shadow-md transition-all duration-300"
              >
                <h3 className="text-base md:text-lg font-semibold mb-3 text-cyan-800">Business Impact</h3>
                <ul className="space-y-2 text-sm md:text-base text-cyan-700">
                  {[
                    "Reduced Downtime - Proactive issue detection",
                    "Improved Performance - Data-driven optimization",
                    "Better User Experience - SLA monitoring",
                    "Cost Optimization - Resource utilization insights"
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="text-cyan-600 mt-0.5">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </article>
    </div>
  );
}
