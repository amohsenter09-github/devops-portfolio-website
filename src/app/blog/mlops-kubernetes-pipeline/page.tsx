"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Code, Server, BarChart3, Brain } from "lucide-react";
import { ArticleLayout, Section } from "@/components/Layout";

export default function MLOpsImplementationPost() {
  return (
    <ArticleLayout maxWidth="4xl" spacing="relaxed">
      {/* Breadcrumbs */}
      <nav aria-label="Breadcrumbs" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <ol className="flex items-center gap-2 text-sm text-gray-600">
          <li>
            <Link href="/" className="hover:text-gray-900 transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 rounded">
              Home
            </Link>
          </li>
          <li aria-hidden="true">/</li>
          <li>
            <Link href="/blog" className="hover:text-gray-900 transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 rounded">
              Blog
            </Link>
          </li>
          <li aria-hidden="true">/</li>
          <li className="text-gray-900 font-medium" aria-current="page">
            Building Production-Ready MLOps Pipelines
          </li>
        </ol>
      </nav>

      {/* Back to Blog Link */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <Link 
          href="/blog"
          className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900 transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 rounded"
          aria-label="Back to blog"
        >
          <ArrowLeft size={16} />
          Back to Blog
        </Link>
      </div>
      
      {/* Implementation Details */}
      <Section spacing="xl" withDivider animate>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center">
          <motion.h2 
            className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-800 mb-8 flex items-center justify-center gap-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              <Brain className="text-cyan-600" size={22} />
            </motion.div>
            <span className="font-mono lowercase">
              <motion.span
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                mlops
              </motion.span>
              <motion.span
                className="text-cyan-600"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.5 }}
              >
                _
              </motion.span>
              <motion.span
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                implementation
              </motion.span>
              <motion.span
                className="text-cyan-600 ml-0.5"
                animate={{ opacity: [1, 0.3, 1] }}
                transition={{ duration: 1, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
              >
                |
              </motion.span>
            </span>
          </motion.h2>
          
          <div className="space-y-8 max-w-3xl mx-auto">
            {/* MLOps Pipeline Architecture */}
            <div className="bg-white rounded-xl p-5 md:p-6 border border-gray-200 hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-base md:text-lg font-semibold mb-4 text-gray-800 flex items-center justify-center gap-2">
                <Server className="text-cyan-600" size={18} />
                MLOps Pipeline Architecture
              </h3>
              <p className="text-sm md:text-base leading-relaxed text-gray-700 mb-4">
                Complete end-to-end MLOps pipeline integrating data ingestion, model training, deployment, and monitoring 
                with Kubernetes, MLflow, and AWS SageMaker for enterprise-grade reliability and scalability.
              </p>
              <ul className="space-y-2 text-sm leading-relaxed text-gray-600 text-left max-w-2xl mx-auto">
                {[
                  "Data Ingestion & Preprocessing via Apache Airflow",
                  "Model Training & Experimentation with MLflow + SageMaker",
                  "Model Registry & Versioning using MLflow Model Registry",
                  "Model Deployment & Serving on Kubernetes + Seldon",
                  "Monitoring & Drift Detection with Prometheus + Grafana",
                  "Automated retraining triggers based on performance metrics"
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

            {/* MLflow Integration */}
            <div className="bg-white rounded-xl p-5 md:p-6 border border-gray-200 hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-base md:text-lg font-semibold mb-4 text-gray-800 flex items-center justify-center gap-2">
                <Code className="text-cyan-600" size={18} />
                MLflow Integration
              </h3>
              <p className="text-sm md:text-base leading-relaxed text-gray-700 mb-4">
                Centralized experiment tracking and model management with automated validation, A/B testing framework, 
                and performance monitoring for comprehensive ML operations.
              </p>
              <ul className="space-y-2 text-sm leading-relaxed text-gray-600 text-left max-w-2xl mx-auto">
                {[
                  "Centralized experiment tracking and model registry",
                  "Model versioning and automated validation",
                  "A/B testing framework for model comparison",
                  "Model performance monitoring and alerting",
                  "Automated retraining triggers based on data drift",
                  "Integration with Kubernetes for scalable deployment"
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

            {/* Kubernetes Deployment */}
            <div className="bg-white rounded-xl p-5 md:p-6 border border-gray-200 hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-base md:text-lg font-semibold mb-4 text-gray-800 flex items-center justify-center gap-2">
                <Server className="text-cyan-600" size={18} />
                Kubernetes Deployment
              </h3>
              <p className="text-sm md:text-base leading-relaxed text-gray-700 mb-4">
                Production-ready Kubernetes deployment with horizontal pod autoscaling, rolling updates, service mesh integration, 
                and GPU resource management for optimal ML model serving.
              </p>
              <ul className="space-y-2 text-sm leading-relaxed text-gray-600 text-left max-w-2xl mx-auto">
                {[
                  "Horizontal Pod Autoscaling based on traffic patterns",
                  "Resource quotas and limits for cost optimization",
                  "Rolling updates and rollbacks for zero-downtime deployments",
                  "Service mesh integration for advanced networking",
                  "GPU resource management for training workloads",
                  "Multi-tenant isolation for security and performance"
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

            {/* Monitoring & Observability */}
            <div className="bg-white rounded-xl p-5 md:p-6 border border-gray-200 hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-base md:text-lg font-semibold mb-4 text-gray-800 flex items-center justify-center gap-2">
                <BarChart3 className="text-cyan-600" size={18} />
                Monitoring & Observability
              </h3>
              <p className="text-sm md:text-base leading-relaxed text-gray-700 mb-4">
                Comprehensive monitoring solution with Prometheus and Grafana for model performance tracking, data drift detection, 
                and automated alerting for proactive ML operations management.
              </p>
              <ul className="space-y-2 text-sm leading-relaxed text-gray-600 text-left max-w-2xl mx-auto">
                {[
                  "Model performance metrics and KPIs tracking",
                  "Data drift detection with automated alerts",
                  "Prometheus metrics collection and aggregation",
                  "Grafana dashboards for visualization and analysis",
                  "Real-time monitoring of inference latency and throughput",
                  "Automated alerts for model degradation and anomalies"
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

      {/* Results & Metrics */}
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
              <h3 className="text-base md:text-lg font-semibold mb-5 text-green-800">Operational Excellence</h3>
              <ul className="space-y-3 text-sm leading-relaxed text-green-700 text-left">
                {[
                  "95% Automation - End-to-end ML pipeline",
                  "80% Faster Deployment - Automated model serving",
                  "99.9% Uptime - Kubernetes reliability",
                  "Zero Manual Intervention - Fully automated workflows"
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
              <h3 className="text-base md:text-lg font-semibold mb-5 text-cyan-800">ML Operations</h3>
              <ul className="space-y-3 text-sm leading-relaxed text-cyan-700 text-left">
                {[
                  "50+ Models - Successfully deployed",
                  "Real-time Monitoring - Model performance tracking",
                  "Automated Retraining - Data drift detection",
                  "A/B Testing - Model comparison framework"
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
