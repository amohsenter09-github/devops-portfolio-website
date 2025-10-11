"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock, Tag } from "lucide-react";

export default function Blog() {
  const blogPosts = [
    {
      id: 1,
      title: "Deploy Your Apps on K8s the GitOps Way: Using ArgoCD and Image Updater",
      excerpt: "Complete guide to implementing GitOps with ArgoCD and Image Updater for automated Kubernetes deployments. Learn how to achieve zero-downtime deployments and automated image updates.",
      date: "2024-01-15",
      readTime: "12 min read",
      tags: ["Kubernetes", "ArgoCD", "GitOps", "Image Updater", "AWS EKS"],
      slug: "infracore-gitops-architecture",
      featured: true
    },
    {
      id: 2,
      title: "Zero-Downtime Deployments: My GitOps Implementation with ArgoCD",
      excerpt: "Technical walkthrough: How I implemented GitOps with ArgoCD to achieve zero-downtime deployments and 99.9% reliability across multiple Kubernetes clusters.",
      date: "2023-12-20",
      readTime: "8 min read",
      tags: ["ArgoCD", "GitOps", "Kubernetes", "CI/CD"],
      slug: "gitops-argocd-kubernetes",
      featured: false
    },
    {
      id: 3,
      title: "Building Production-Ready MLOps Pipelines with Kubernetes",
      excerpt: "Learn how to design and implement comprehensive MLOps pipelines using Kubernetes, MLflow, and AWS SageMaker for automated model training, deployment, and monitoring.",
      date: "2024-01-20",
      readTime: "8 min read",
      tags: ["MLOps", "Kubernetes", "MLflow", "SageMaker", "AWS"],
      slug: "mlops-kubernetes-pipeline",
      featured: true
    },
    {
      id: 4,
      title: "Building a Unified Observability Stack: Prometheus, Grafana & Jaeger",
      excerpt: "Complete guide to implementing comprehensive observability with Prometheus, Grafana, and Jaeger. Learn how to reduce MTTR by 80% and achieve 99.9% uptime.",
      date: "2024-01-25",
      readTime: "10 min read",
      tags: ["Observability", "Prometheus", "Grafana", "Jaeger", "Monitoring"],
      slug: "observability-stack-prometheus-grafana",
      featured: false
    },
    {
      id: 5,
      title: "Multi-Account AWS Architecture: Security & Compliance Best Practices",
      excerpt: "Learn how to design secure multi-account AWS architectures with proper isolation, compliance, and governance for enterprise environments.",
      date: "2024-01-05",
      readTime: "9 min read",
      tags: ["AWS", "Security", "Compliance", "Multi-Account", "Governance"],
      slug: "multi-account-aws-security",
      featured: false
    }
  ];

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
            href="/"
            className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline mb-8"
          >
            <ArrowLeft size={20} className="mr-2" />
            Back to Home
          </Link>
          
          <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
            DevOps Engineering Blog
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
            Real-world case studies, technical deep-dives, and proven DevOps strategies from 15+ years of infrastructure engineering
          </p>
        </div>
      </motion.section>

      {/* Featured Post */}
      <motion.section 
        className="py-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl font-semibold mb-8 text-gray-900 dark:text-white">Featured Article</h2>
          
          {blogPosts.filter(post => post.featured).map((post, index) => (
            <motion.article
              key={post.id}
              className="professional-card mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="p-8">
                <div className="flex items-center mb-4 text-sm text-gray-500 dark:text-gray-400">
                  <Calendar size={16} className="mr-2" />
                  {new Date(post.date).toLocaleDateString('en-US', { 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}
                  <Clock size={16} className="ml-4 mr-2" />
                  {post.readTime}
                </div>
                
                <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                  {post.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                  {post.excerpt}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {post.tags.map((tag) => (
                    <span 
                      key={tag}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm rounded-full"
                    >
                      <Tag size={12} className="inline mr-1" />
                      {tag}
                    </span>
                  ))}
                </div>
                
                <Link 
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-200"
                >
                  Read Full Article
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </motion.section>

      {/* All Posts */}
      <motion.section 
        className="py-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl font-semibold mb-8 text-gray-900 dark:text-white">All Articles</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {blogPosts.map((post, index) => (
              <motion.article
                key={post.id}
                className="professional-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <div className="p-6">
                  <div className="flex items-center mb-3 text-sm text-gray-500 dark:text-gray-400">
                    <Calendar size={14} className="mr-2" />
                    {new Date(post.date).toLocaleDateString('en-US', { 
                      year: 'numeric', 
                      month: 'short', 
                      day: 'numeric' 
                    })}
                    <Clock size={14} className="ml-3 mr-1" />
                    {post.readTime}
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm leading-relaxed">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex flex-wrap gap-1 mb-4">
                    {post.tags.slice(0, 3).map((tag) => (
                      <span 
                        key={tag}
                        className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded"
                      >
                        {tag}
                      </span>
                    ))}
                    {post.tags.length > 3 && (
                      <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded">
                        +{post.tags.length - 3} more
                      </span>
                    )}
                  </div>
                  
                  <Link 
                    href={`/blog/${post.slug}`}
                    className="text-blue-600 dark:text-blue-400 hover:underline font-medium text-sm"
                  >
                    Read More →
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </motion.section>
    </div>
  );
}