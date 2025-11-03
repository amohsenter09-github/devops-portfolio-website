"use client";

import { motion } from "framer-motion";
import { Calendar, ArrowRight } from "lucide-react";
import Link from "next/link";

type BlogPost = {
  slug: string;
  title: string;
  description: string;
  date: string;
  tags?: string[];
};

export default function BlogPostCard({ post, index }: { post: BlogPost; index: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        delay: index * 0.1,
        duration: 0.6,
        ease: "easeOut",
      }}
      className="w-full"
    >
      <Link href={`/blog/${post.slug}`} className="block w-full group">
        <motion.div
          className="relative bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
          whileHover={{ 
            y: -2,
            transition: { 
              duration: 0.3,
              ease: "easeOut"
            }
          }}
        >
          {/* Card Content */}
          <div className="px-6 md:px-8 pt-6 md:pt-8 pb-6 md:pb-8">
            {/* Date - Subtle */}
            <div className="flex items-center gap-2 mb-4">
              <Calendar size={14} className="text-gray-400 dark:text-gray-500" />
              <span className="text-xs text-gray-500 dark:text-gray-400 font-medium">{post.date}</span>
            </div>

            {/* Title - Medium Size */}
            <h2 className="text-lg md:text-xl font-semibold text-gray-900 dark:text-white mb-3 leading-snug group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">
              {post.title}
            </h2>

            {/* Description - Medium Size */}
            <p className="text-sm md:text-base text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
              {post.description}
            </p>

            {/* Tags Section - Toned Down */}
            {post.tags && post.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-6">
                {post.tags.slice(0, 5).map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 text-xs font-medium rounded-md bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-600 transition-colors duration-200 group-hover:bg-gray-200 dark:group-hover:bg-gray-600"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}

            {/* Read Article Link - Clean */}
            <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400 font-medium text-sm group-hover:gap-3 transition-all duration-200">
              <span>Read Article</span>
              <ArrowRight 
                size={16} 
                className="transition-transform duration-200 group-hover:translate-x-1"
              />
            </div>
          </div>
        </motion.div>
      </Link>
    </motion.article>
  );
}