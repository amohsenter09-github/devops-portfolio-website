"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock, Tag, Code, Server, Shield, Zap } from "lucide-react";

export default function MLOpsImplementationPost() {
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
            January 20, 2024
            <Clock size={16} className="ml-4 mr-2" />
            8 min read
          </div>
          
          <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
            Building Production-Ready MLOps Pipelines with Kubernetes
          </h1>
          
          <div className="flex flex-wrap gap-2 mb-8">
            {["MLOps", "Kubernetes", "MLflow", "SageMaker", "AWS"].map((tag) => (
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
                <strong>Problem:</strong> A financial services company needed to deploy machine learning models at scale 
                while maintaining model versioning, monitoring, and automated retraining capabilities. Their existing 
                manual deployment process couldn&apos;t handle the complexity of ML workflows.
              </p>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                <strong>My Solution:</strong> I designed and implemented a complete MLOps pipeline using Kubernetes, 
                MLflow, and AWS SageMaker, enabling automated model training, deployment, and monitoring with 
                enterprise-grade reliability.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">95%</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Automation</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600 dark:text-green-400">50+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Models Deployed</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">99.9%</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Uptime</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-orange-600 dark:text-orange-400">80%</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Faster Deployment</div>
                </div>
              </div>
            </div>
          </div>

          {/* MLOps Architecture */}
          <div className="professional-card mb-8">
            <div className="p-8">
              <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white flex items-center">
                <Server className="mr-3 text-blue-600" />
                MLOps Pipeline Architecture
              </h2>
              
              <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 mb-6">
                <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Pipeline Components</h3>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-blue-500 rounded-full mr-3"></div>
                    <span className="font-medium">Data Ingestion & Preprocessing</span>
                    <span className="ml-auto text-sm text-gray-600 dark:text-gray-400">Apache Airflow</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                    <span className="font-medium">Model Training & Experimentation</span>
                    <span className="ml-auto text-sm text-gray-600 dark:text-gray-400">MLflow + SageMaker</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-purple-500 rounded-full mr-3"></div>
                    <span className="font-medium">Model Registry & Versioning</span>
                    <span className="ml-auto text-sm text-gray-600 dark:text-gray-400">MLflow Model Registry</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-orange-500 rounded-full mr-3"></div>
                    <span className="font-medium">Model Deployment & Serving</span>
                    <span className="ml-auto text-sm text-gray-600 dark:text-gray-400">Kubernetes + Seldon</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-red-500 rounded-full mr-3"></div>
                    <span className="font-medium">Monitoring & Drift Detection</span>
                    <span className="ml-auto text-sm text-gray-600 dark:text-gray-400">Prometheus + Grafana</span>
                  </div>
                </div>
              </div>

              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                The pipeline integrates seamlessly with existing Kubernetes infrastructure, providing 
                scalable model serving with automatic scaling based on traffic patterns and 
                comprehensive monitoring for model performance and data drift detection.
              </p>
            </div>
          </div>

          {/* Technical Implementation */}
          <div className="professional-card mb-8">
            <div className="p-8">
              <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white flex items-center">
                <Code className="mr-3 text-green-600" />
                Technical Implementation
              </h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">MLflow Integration</h3>
                  <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                    <li>• Centralized experiment tracking</li>
                    <li>• Model versioning and registry</li>
                    <li>• Automated model validation</li>
                    <li>• A/B testing framework</li>
                    <li>• Model performance monitoring</li>
                    <li>• Automated retraining triggers</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">Kubernetes Deployment</h3>
                  <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                    <li>• Horizontal Pod Autoscaling</li>
                    <li>• Resource quotas and limits</li>
                    <li>• Rolling updates and rollbacks</li>
                    <li>• Service mesh integration</li>
                    <li>• GPU resource management</li>
                    <li>• Multi-tenant isolation</li>
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
                  <h3 className="text-lg font-semibold mb-3 text-green-800 dark:text-green-200">Operational Excellence</h3>
                  <ul className="space-y-2 text-green-700 dark:text-green-300">
                    <li>• <strong>95% Automation</strong> - End-to-end ML pipeline</li>
                    <li>• <strong>80% Faster Deployment</strong> - Automated model serving</li>
                    <li>• <strong>99.9% Uptime</strong> - Kubernetes reliability</li>
                    <li>• <strong>Zero Manual Intervention</strong> - Fully automated workflows</li>
                  </ul>
                </div>
                
                <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6">
                  <h3 className="text-lg font-semibold mb-3 text-blue-800 dark:text-blue-200">ML Operations</h3>
                  <ul className="space-y-2 text-blue-700 dark:text-blue-300">
                    <li>• <strong>50+ Models</strong> - Successfully deployed</li>
                    <li>• <strong>Real-time Monitoring</strong> - Model performance tracking</li>
                    <li>• <strong>Automated Retraining</strong> - Data drift detection</li>
                    <li>• <strong>A/B Testing</strong> - Model comparison framework</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="professional-card mb-8">
            <div className="p-8 text-center">
              <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Ready to Implement MLOps?</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                I help companies build production-ready MLOps pipelines that scale with their business. 
                Let&apos;s discuss how I can help optimize your machine learning operations.
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
