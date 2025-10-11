"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock, Tag, Code, Server, Shield, Zap } from "lucide-react";

export default function ObservabilityStackPost() {
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
            January 25, 2024
            <Clock size={16} className="ml-4 mr-2" />
            10 min read
          </div>
          
          <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
            Building a Unified Observability Stack: Prometheus, Grafana & Jaeger
          </h1>
          
          <div className="flex flex-wrap gap-2 mb-8">
            {["Observability", "Prometheus", "Grafana", "Jaeger", "Monitoring"].map((tag) => (
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
                <strong>Problem:</strong> A microservices-based application was experiencing frequent outages 
                with no visibility into system performance, user experience, or root causes. The existing 
                monitoring solution was fragmented and couldn&apos;t provide actionable insights.
              </p>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                <strong>My Solution:</strong> I designed and implemented a comprehensive observability stack 
                using Prometheus, Grafana, and Jaeger, providing unified monitoring, alerting, and 
                distributed tracing capabilities that reduced MTTR by 80%.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">80%</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">MTTR Reduction</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600 dark:text-green-400">99.9%</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Uptime Achieved</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">50+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Dashboards</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-orange-600 dark:text-orange-400">100+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Alerts Configured</div>
                </div>
              </div>
            </div>
          </div>

          {/* Observability Architecture */}
          <div className="professional-card mb-8">
            <div className="p-8">
              <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white flex items-center">
                <Server className="mr-3 text-blue-600" />
                Observability Stack Architecture
              </h2>
              
              <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 mb-6">
                <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Three Pillars of Observability</h3>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-orange-500 rounded-full mr-3"></div>
                    <span className="font-medium">Metrics Collection</span>
                    <span className="ml-auto text-sm text-gray-600 dark:text-gray-400">Prometheus + Node Exporter</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-blue-500 rounded-full mr-3"></div>
                    <span className="font-medium">Visualization & Dashboards</span>
                    <span className="ml-auto text-sm text-gray-600 dark:text-gray-400">Grafana</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-purple-500 rounded-full mr-3"></div>
                    <span className="font-medium">Distributed Tracing</span>
                    <span className="ml-auto text-sm text-gray-600 dark:text-gray-400">Jaeger</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                    <span className="font-medium">Log Aggregation</span>
                    <span className="ml-auto text-sm text-gray-600 dark:text-gray-400">Loki + Promtail</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-red-500 rounded-full mr-3"></div>
                    <span className="font-medium">Alerting & Notification</span>
                    <span className="ml-auto text-sm text-gray-600 dark:text-gray-400">AlertManager + PagerDuty</span>
                  </div>
                </div>
              </div>

              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                The stack provides comprehensive visibility across all layers of the application stack, 
                from infrastructure metrics to application performance, enabling proactive issue detection 
                and rapid troubleshooting.
              </p>
            </div>
          </div>

          {/* Implementation Details */}
          <div className="professional-card mb-8">
            <div className="p-8">
              <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white flex items-center">
                <Code className="mr-3 text-green-600" />
                Implementation Details
              </h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">Prometheus Configuration</h3>
                  <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                    <li>• Custom metrics collection</li>
                    <li>• Service discovery configuration</li>
                    <li>• Retention policies optimization</li>
                    <li>• High availability setup</li>
                    <li>• Federation for multi-cluster</li>
                    <li>• Recording rules for performance</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">Grafana Dashboards</h3>
                  <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                    <li>• Infrastructure monitoring</li>
                    <li>• Application performance metrics</li>
                    <li>• Business KPI tracking</li>
                    <li>• Custom alerting rules</li>
                    <li>• Multi-environment views</li>
                    <li>• Role-based access control</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Key Results */}
          <div className="professional-card mb-8">
            <div className="p-8">
              <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Results Achieved</h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-6">
                  <h3 className="text-lg font-semibold mb-3 text-green-800 dark:text-green-200">Operational Improvements</h3>
                  <ul className="space-y-2 text-green-700 dark:text-green-300">
                    <li>• <strong>80% MTTR Reduction</strong> - Faster incident resolution</li>
                    <li>• <strong>99.9% Uptime</strong> - Proactive monitoring</li>
                    <li>• <strong>50+ Dashboards</strong> - Comprehensive visibility</li>
                    <li>• <strong>100+ Alerts</strong> - Automated issue detection</li>
                  </ul>
                </div>
                
                <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6">
                  <h3 className="text-lg font-semibold mb-3 text-blue-800 dark:text-blue-200">Business Impact</h3>
                  <ul className="space-y-2 text-blue-700 dark:text-blue-300">
                    <li>• <strong>Reduced Downtime</strong> - Proactive issue detection</li>
                    <li>• <strong>Improved Performance</strong> - Data-driven optimization</li>
                    <li>• <strong>Better User Experience</strong> - SLA monitoring</li>
                    <li>• <strong>Cost Optimization</strong> - Resource utilization insights</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="professional-card mb-8">
            <div className="p-8 text-center">
              <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Ready to Improve Your Observability?</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                I help companies build comprehensive observability stacks that provide actionable insights 
                and reduce operational overhead. Let&apos;s discuss how I can help optimize your monitoring.
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
    </div>
  );
}
