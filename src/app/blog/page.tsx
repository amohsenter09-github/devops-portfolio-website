"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock, Tag } from "lucide-react";

export default function Blog() {
  const blogPosts = [
    {
      id: 1,
      title: "How I Built a 99.9% Uptime Multi-Account AWS Architecture for FinOps Platform",
      excerpt: "Case study: Led the complete infrastructure redesign for a financial operations platform, achieving 99.9% uptime and 65% cost reduction using AWS EKS, Terraform, and GitOps.",
      date: "2024-01-15",
      readTime: "12 min read",
      tags: ["AWS", "EKS", "Terraform", "GitOps", "FinOps"],
      slug: "cybrid-multi-account-aws-architecture",
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
      title: "Complete Observability Stack: Prometheus + Grafana + Jaeger Setup",
      excerpt: "Step-by-step guide: How I built a production-ready observability stack that reduced MTTR by 80% and provided full visibility into microservices architecture.",
      date: "2023-11-10",
      readTime: "10 min read",
      tags: ["Prometheus", "Grafana", "Jaeger", "Observability", "Monitoring"],
      slug: "observability-stack-prometheus-grafana",
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