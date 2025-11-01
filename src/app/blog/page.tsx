"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock, Tag } from "lucide-react";

export default function Blog() {
  const blogPosts = [
    {
      id: 1,
      title: "Enterprise Microservices Platform: Terraform-Managed Multi-Environment Architecture",
      excerpt: "A comprehensive case study of building a production-ready microservices platform with 12+ services, complete GitOps automation, and enterprise-grade security across multiple AWS environments.",
      date: "2024-01-15",
      readTime: "15 min read",
      tags: ["Terraform", "Kubernetes", "ArgoCD", "Microservices", "AWS", "GitOps", "Security", "Monitoring"],
      slug: "enterprise-microservices-platform",
      featured: true
    },
    {
      id: 2,
      title: "Deploy Your Apps on K8s the GitOps Way: Using ArgoCD and Image Updater",
      excerpt: "Complete guide to implementing GitOps with ArgoCD and Image Updater for automated Kubernetes deployments. Learn how to achieve zero-downtime deployments and automated image updates.",
      date: "2024-01-10",
      readTime: "12 min read",
      tags: ["Kubernetes", "ArgoCD", "GitOps", "Image Updater", "AWS EKS"],
      slug: "infracore-gitops-architecture",
      featured: false
    },
    {
      id: 3,
      title: "Zero-Downtime Deployments: My GitOps Implementation with ArgoCD",
      excerpt: "Technical walkthrough: How I implemented GitOps with ArgoCD to achieve zero-downtime deployments and 99.9% reliability across multiple Kubernetes clusters.",
      date: "2023-12-20",
      readTime: "8 min read",
      tags: ["ArgoCD", "GitOps", "Kubernetes", "CI/CD"],
      slug: "gitops-argocd-kubernetes",
      featured: false
    },
    {
      id: 4,
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
    <div className="w-full min-h-screen bg-white">
      {/* Header */}
      <section className="py-16 md:py-20 w-full flex items-center justify-center">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link 
              href="/"
              className="inline-flex items-center text-blue-600 hover:underline mb-8"
            >
              <ArrowLeft size={20} className="mr-2" />
              Back to Home
            </Link>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 text-center">
              DevOps Engineering Blog
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed text-center">
              Real-world case studies, technical deep-dives, and proven DevOps strategies from 15+ years of infrastructure engineering
            </p>
          </motion.div>
        </div>
      </section>


    </div>
  );
}