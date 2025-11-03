"use client";

import { motion } from "framer-motion";
import BlogPostCard from "@/components/BlogPostCard";
import { blogPosts } from "@/data/blogPosts";

export default function BlogPage() {
  // IMPORTANT: Display posts in the EXACT order they are defined in blogPosts array
  // NO sorting - order is manually controlled in blogPosts.ts
  // Order: 1. Enterprise Microservices, 2. Deploy K8s GitOps, 3. Observability Stack, 4. MLOps Pipelines
  const posts = [
    blogPosts[0], // Enterprise Microservices Platform
    blogPosts[1], // Deploy Your Apps on K8s
    blogPosts[2], // Building a Unified Observability Stack
    blogPosts[3], // Building Production-Ready MLOps Pipelines
  ];

  if (posts.length === 0) {
    return (
      <main className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-100 py-32 px-6 w-full flex items-center justify-center">
        <div className="max-w-4xl mx-auto w-full px-4 sm:px-6 lg:px-8">
          <p className="text-center text-gray-600">No blog posts found.</p>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-100 py-16 md:py-24 w-full">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center md:justify-center lg:justify-center">
          <div className="w-full max-w-4xl md:translate-x-8 lg:translate-x-16">
            <div className="space-y-10 md:space-y-16">
              {posts.map((post, index) => (
                <BlogPostCard key={post.slug} post={post} index={index} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
