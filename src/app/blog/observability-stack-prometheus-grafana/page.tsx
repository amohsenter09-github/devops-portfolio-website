"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock, Tag, Code, Server, Shield, Zap, TrendingUp } from "lucide-react";

export default function ObservabilityStackPost() {
  const tags = ["Observability", "Prometheus", "Grafana", "Jaeger", "Monitoring"];

  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-100">
      {/* Header Section - Centered */}
      <section className="py-16 md:py-24 w-full flex items-center justify-center">
        <div className="max-w-4xl mx-auto w-full px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <Link 
              href="/blog"
              className="inline-flex items-center text-cyan-600 hover:text-cyan-700 transition-colors mb-8 group"
            >
              <ArrowLeft size={18} className="mr-2 group-hover:-translate-x-1 transition-transform" />
              <span className="text-sm font-medium">Back to Blog</span>
            </Link>
            
            <div className="flex items-center gap-4 mb-6 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <Calendar size={16} className="text-cyan-600" />
                <span>January 25, 2024</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={16} className="text-cyan-600" />
                <span>10 min read</span>
              </div>
            </div>
            
            <h1 className="font-mono text-3xl md:text-4xl font-bold mb-6 text-gray-900 leading-tight">
              Building a Unified Observability Stack: Prometheus, Grafana & Jaeger
            </h1>
            
            {/* Tags with Clean Animations */}
            <div className="flex flex-wrap gap-3 mb-12">
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
                  className="inline-flex items-center gap-1.5 px-4 py-2 bg-cyan-50 text-cyan-700 text-sm font-medium rounded-full border border-cyan-200 hover:bg-cyan-100 hover:border-cyan-300 transition-all duration-300 cursor-default"
                >
                  <Tag size={14} />
                  {tag}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Article Content - Centered */}
      <article className="py-12 w-full flex items-center justify-center">
        <div className="max-w-4xl mx-auto w-full px-4 sm:px-6 lg:px-8">
          
          {/* Problem & Solution Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="bg-white rounded-xl border border-gray-200 p-8 md:p-10 mb-10 shadow-sm hover:shadow-md transition-shadow duration-300"
          >
            <h2 className="text-2xl font-bold mb-6 text-gray-900">The Challenge</h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                <strong className="text-gray-900">Problem:</strong> A microservices-based application was experiencing frequent outages 
                with no visibility into system performance, user experience, or root causes. The existing 
                monitoring solution was fragmented and couldn&apos;t provide actionable insights.
              </p>
              <p>
                <strong className="text-gray-900">My Solution:</strong> I designed and implemented a comprehensive observability stack 
                using Prometheus, Grafana, and Jaeger, providing unified monitoring, alerting, and 
                distributed tracing capabilities that reduced MTTR by 80%.
              </p>
            </div>
            
            {/* Metrics Grid */}
            <motion.div 
              className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mt-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {[
                { value: "80%", label: "MTTR Reduction", colorClass: "text-blue-600" },
                { value: "99.9%", label: "Uptime Achieved", colorClass: "text-green-600" },
                { value: "50+", label: "Dashboards", colorClass: "text-purple-600" },
                { value: "100+", label: "Alerts Configured", colorClass: "text-orange-600" },
              ].map((metric, index) => (
                <motion.div
                  key={metric.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.1, duration: 0.4 }}
                  whileHover={{ scale: 1.05, y: -3 }}
                  className="text-center p-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors duration-300"
                >
                  <div className={`text-3xl font-bold mb-2 ${metric.colorClass}`}>
                    {metric.value}
                  </div>
                  <div className="text-xs md:text-sm text-gray-600 font-medium">
                    {metric.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Observability Architecture Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            className="bg-white rounded-xl border border-gray-200 p-8 md:p-10 mb-10 shadow-sm hover:shadow-md transition-shadow duration-300"
          >
            <h2 className="text-2xl font-bold mb-6 text-gray-900 flex items-center">
              <Server className="mr-3 text-cyan-600" size={24} />
              Observability Stack Architecture
            </h2>
            
            <div className="bg-gray-900 rounded-lg p-6 md:p-8 mb-6">
              <h3 className="text-xl font-bold mb-6 text-white">Three Pillars of Observability</h3>
              <div className="space-y-4">
                {[
                  { label: "Metrics Collection", tech: "Prometheus + Node Exporter", colorClass: "bg-orange-500" },
                  { label: "Visualization & Dashboards", tech: "Grafana", colorClass: "bg-blue-500" },
                  { label: "Distributed Tracing", tech: "Jaeger", colorClass: "bg-purple-500" },
                  { label: "Log Aggregation", tech: "Loki + Promtail", colorClass: "bg-green-500" },
                  { label: "Alerting & Notification", tech: "AlertManager + PagerDuty", colorClass: "bg-red-500" },
                ].map((item, index) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + index * 0.1, duration: 0.4 }}
                    className="flex items-center justify-between py-2"
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-3 h-3 ${item.colorClass} rounded-full`}></div>
                      <span className="font-medium text-white">{item.label}</span>
                    </div>
                    <span className="text-sm text-gray-400">{item.tech}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            <p className="text-gray-600 leading-relaxed">
              The stack provides comprehensive visibility across all layers of the application stack, 
              from infrastructure metrics to application performance, enabling proactive issue detection 
              and rapid troubleshooting.
            </p>
          </motion.div>

          {/* Implementation Details Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            className="bg-white rounded-xl border border-gray-200 p-8 md:p-10 mb-10 shadow-sm hover:shadow-md transition-shadow duration-300"
          >
            <h2 className="text-2xl font-bold mb-6 text-gray-900 flex items-center">
              <Code className="mr-3 text-cyan-600" size={24} />
              Implementation Details
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-4 text-gray-900">Prometheus Configuration</h3>
                <ul className="space-y-2.5 text-gray-600">
                  {["Custom metrics collection", "Service discovery configuration", "Retention policies optimization", "High availability setup", "Federation for multi-cluster", "Recording rules for performance"].map((item, index) => (
                    <motion.li
                      key={item}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + index * 0.05, duration: 0.3 }}
                      className="flex items-start gap-2"
                    >
                      <span className="text-cyan-600 mt-1">•</span>
                      <span>{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-4 text-gray-900">Grafana Dashboards</h3>
                <ul className="space-y-2.5 text-gray-600">
                  {["Infrastructure monitoring", "Application performance metrics", "Business KPI tracking", "Custom alerting rules", "Multi-environment views", "Role-based access control"].map((item, index) => (
                    <motion.li
                      key={item}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.4 + index * 0.05, duration: 0.3 }}
                      className="flex items-start gap-2"
                    >
                      <span className="text-cyan-600 mt-1">•</span>
                      <span>{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Results Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
            className="bg-white rounded-xl border border-gray-200 p-8 md:p-10 mb-10 shadow-sm hover:shadow-md transition-shadow duration-300"
          >
            <h2 className="text-2xl font-bold mb-6 text-gray-900">Results Achieved</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                whileHover={{ scale: 1.02, y: -3 }}
                className="bg-green-50 border border-green-200 rounded-lg p-6 hover:shadow-md transition-all duration-300"
              >
                <h3 className="text-lg font-semibold mb-4 text-green-800">Operational Improvements</h3>
                <ul className="space-y-2.5 text-green-700">
                  {["80% MTTR Reduction - Faster incident resolution", "99.9% Uptime - Proactive monitoring", "50+ Dashboards - Comprehensive visibility", "100+ Alerts - Automated issue detection"].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="text-green-600 mt-1">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
                whileHover={{ scale: 1.02, y: -3 }}
                className="bg-cyan-50 border border-cyan-200 rounded-lg p-6 hover:shadow-md transition-all duration-300"
              >
                <h3 className="text-lg font-semibold mb-4 text-cyan-800">Business Impact</h3>
                <ul className="space-y-2.5 text-cyan-700">
                  {["Reduced Downtime - Proactive issue detection", "Improved Performance - Data-driven optimization", "Better User Experience - SLA monitoring", "Cost Optimization - Resource utilization insights"].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="text-cyan-600 mt-1">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </motion.div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
            className="bg-white rounded-xl border border-gray-200 p-8 md:p-10 text-center shadow-sm hover:shadow-md transition-shadow duration-300"
          >
            <h2 className="text-2xl font-bold mb-4 text-gray-900">Ready to Improve Your Observability?</h2>
            <p className="text-gray-600 mb-8 leading-relaxed max-w-2xl mx-auto">
              I help companies build comprehensive observability stacks that provide actionable insights 
              and reduce operational overhead. Let&apos;s discuss how I can help optimize your monitoring.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link 
                  href="/contact"
                  className="inline-flex items-center px-6 py-3 bg-cyan-600 hover:bg-cyan-700 text-white font-semibold rounded-lg shadow-sm hover:shadow-md transition-all duration-300"
                >
                  Get In Touch
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link 
                  href="/projects"
                  className="inline-flex items-center px-6 py-3 border-2 border-cyan-600 text-cyan-600 hover:bg-cyan-50 font-semibold rounded-lg transition-all duration-300"
                >
                  View More Projects
                </Link>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </article>
    </div>
  );
}
