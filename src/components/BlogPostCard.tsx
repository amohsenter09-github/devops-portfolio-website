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
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        delay: index * 0.12,
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="w-full"
    >
      <Link href={`/blog/${post.slug}`} className="block w-full group">
        <motion.div
          className="relative bg-white dark:bg-gray-50 rounded-xl border border-gray-200 dark:border-gray-300 overflow-hidden cursor-pointer shadow-sm"
          whileHover={{ 
            y: -6,
            scale: 1.02,
            transition: { 
              duration: 0.4,
              ease: [0.22, 1, 0.36, 1]
            }
          }}
          style={{
            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.05), 0 2px 4px rgba(0, 0, 0, 0.06)",
          }}
        >
          {/* Animated border glow on hover */}
          <motion.div
            className="absolute inset-0 rounded-xl border-2 border-blue-500/0 opacity-0 group-hover:opacity-100 pointer-events-none"
            initial={false}
            transition={{ duration: 0.4 }}
            style={{
              background: "linear-gradient(90deg, rgba(59, 130, 246, 0.1), rgba(147, 51, 234, 0.1), rgba(59, 130, 246, 0.1))",
              backgroundSize: "200% 100%",
            }}
          />

          {/* Gradient accent bar at top */}
          <motion.div
            className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 opacity-0 group-hover:opacity-100"
            initial={false}
            transition={{ duration: 0.4 }}
          />

          {/* Enhanced shadow on hover */}
          <motion.div
            className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 pointer-events-none"
            initial={false}
            style={{
              boxShadow: "0 20px 50px rgba(59, 130, 246, 0.15), 0 10px 30px rgba(147, 51, 234, 0.1)",
            }}
            transition={{ duration: 0.4 }}
          />

          {/* Card Content with improved spacing */}
          <div className="relative z-10 px-8 md:px-10 pt-8 md:pt-10 pb-8 md:pb-10">
            {/* Date - Better positioning */}
            <motion.div 
              className="flex items-center gap-2 mb-5"
              whileHover={{ x: 3 }}
              transition={{ duration: 0.2 }}
            >
              <Calendar size={15} className="text-gray-400 group-hover:text-blue-500 transition-colors duration-200" />
              <span className="text-xs text-gray-500 font-medium group-hover:text-blue-600 transition-colors duration-200">
                {post.date}
              </span>
            </motion.div>

            {/* Title - Enhanced with animation */}
            <motion.h2 
              className="text-lg md:text-xl font-semibold text-gray-900 mb-4 leading-tight group-hover:text-blue-600 transition-colors duration-300"
              whileHover={{ x: 4 }}
              transition={{ duration: 0.3 }}
            >
              {post.title}
            </motion.h2>

            {/* Description - Better line height and spacing */}
            <motion.p 
              className="text-sm md:text-base text-gray-600 leading-relaxed mb-7 group-hover:text-gray-700 transition-colors duration-300"
              whileHover={{ x: 2 }}
              transition={{ duration: 0.3 }}
            >
              {post.description}
            </motion.p>

            {/* Tags Section - Better styling */}
            {post.tags && post.tags.length > 0 && (
              <motion.div 
                className="flex flex-wrap gap-2.5 mb-7"
                initial={false}
              >
                {post.tags.slice(0, 5).map((tag, tagIndex) => (
                  <motion.span
                    key={tag}
                    className="px-3 py-1.5 text-xs font-medium rounded-lg bg-gray-100 text-gray-700 border border-gray-200"
                    whileHover={{
                      scale: 1.08,
                      backgroundColor: "rgb(219, 234, 254)",
                      borderColor: "rgb(59, 130, 246)",
                      color: "rgb(37, 99, 235)",
                      transition: { duration: 0.2 }
                    }}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      delay: (index * 0.12) + (tagIndex * 0.05),
                      duration: 0.3,
                    }}
                  >
                    {tag}
                  </motion.span>
                ))}
              </motion.div>
            )}

            {/* Read Article Link - More prominent and attractive */}
            <motion.div 
              className="flex items-center gap-2 text-blue-600 font-semibold text-sm md:text-base group-hover:text-blue-700 transition-colors duration-300"
              whileHover={{ x: 6, gap: 8 }}
              transition={{ 
                duration: 0.3,
                ease: "easeOut"
              }}
            >
              <span className="relative">
                Read Article
                <motion.span
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600 origin-left"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </span>
              <motion.div
                whileHover={{ x: 3 }}
                transition={{ duration: 0.3 }}
              >
                <ArrowRight 
                  size={18} 
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </Link>
    </motion.article>
  );
}