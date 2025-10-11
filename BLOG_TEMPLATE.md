<!-- Blog Post Template for InfraCore Website -->

<!-- Copy this template to create new blog posts -->

"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock, Tag, Code, Server, Shield, Zap } from "lucide-react";

export default function YourBlogPostName() {
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
            [DATE] <!-- e.g., January 30, 2024 -->
            <Clock size={16} className="ml-4 mr-2" />
            [READ TIME] <!-- e.g., 7 min read -->
          </div>
          
          <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
            [YOUR BLOG POST TITLE]
          </h1>
          
          <div className="flex flex-wrap gap-2 mb-8">
            {["[TAG1]", "[TAG2]", "[TAG3]", "[TAG4]", "[TAG5]"].map((tag) => (
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
                <strong>Problem:</strong> [DESCRIBE THE PROBLEM YOUR CLIENT FACED]
              </p>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                <strong>My Solution:</strong> [DESCRIBE YOUR SOLUTION AND APPROACH]
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">[METRIC]</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">[DESCRIPTION]</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600 dark:text-green-400">[METRIC]</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">[DESCRIPTION]</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">[METRIC]</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">[DESCRIPTION]</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-orange-600 dark:text-orange-400">[METRIC]</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">[DESCRIPTION]</div>
                </div>
              </div>
            </div>
          </div>

          {/* Technical Section */}
          <div className="professional-card mb-8">
            <div className="p-8">
              <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white flex items-center">
                <Server className="mr-3 text-blue-600" />
                [SECTION TITLE]
              </h2>
              
              <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 mb-6">
                <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">[SUBSECTION TITLE]</h3>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-blue-500 rounded-full mr-3"></div>
                    <span className="font-medium">[ITEM 1]</span>
                    <span className="ml-auto text-sm text-gray-600 dark:text-gray-400">[TECHNOLOGY]</span>
                  </div>
                  <!-- Add more items as needed -->
                </div>
              </div>

              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                [EXPLANATION OF THE TECHNICAL APPROACH]
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
                  <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">[TECHNOLOGY 1]</h3>
                  <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                    <li>• [FEATURE 1]</li>
                    <li>• [FEATURE 2]</li>
                    <li>• [FEATURE 3]</li>
                    <!-- Add more features -->
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">[TECHNOLOGY 2]</h3>
                  <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                    <li>• [FEATURE 1]</li>
                    <li>• [FEATURE 2]</li>
                    <li>• [FEATURE 3]</li>
                    <!-- Add more features -->
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
                  <h3 className="text-lg font-semibold mb-3 text-green-800 dark:text-green-200">[CATEGORY 1]</h3>
                  <ul className="space-y-2 text-green-700 dark:text-green-300">
                    <li>• <strong>[METRIC]</strong> - [DESCRIPTION]</li>
                    <li>• <strong>[METRIC]</strong> - [DESCRIPTION]</li>
                    <!-- Add more results -->
                  </ul>
                </div>
                
                <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6">
                  <h3 className="text-lg font-semibold mb-3 text-blue-800 dark:text-blue-200">[CATEGORY 2]</h3>
                  <ul className="space-y-2 text-blue-700 dark:text-blue-300">
                    <li>• <strong>[METRIC]</strong> - [DESCRIPTION]</li>
                    <li>• <strong>[METRIC]</strong> - [DESCRIPTION]</li>
                    <!-- Add more results -->
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="professional-card mb-8">
            <div className="p-8 text-center">
              <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Ready to [ACTION]?</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                I help companies [SOLUTION DESCRIPTION]. Let&apos;s discuss how I can help optimize your [SPECIFIC AREA].
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

<!-- 
INSTRUCTIONS FOR USING THIS TEMPLATE:

1. Copy this file to: src/app/blog/[your-slug]/page.tsx
2. Replace all [PLACEHOLDER] text with your actual content
3. Update the function name to match your slug
4. Add your new blog post to the blogPosts array in src/app/blog/page.tsx
5. Test locally before deploying

EXAMPLE SLUGS:
- terraform-best-practices
- kubernetes-security-guide
- aws-cost-optimization
- cicd-pipeline-design
-->
