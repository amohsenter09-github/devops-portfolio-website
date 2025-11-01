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
        delay: index * 0.08,
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="w-full"
    >
      <Link href={`/blog/${post.slug}`} className="block w-full">
        <motion.div
          className="group relative bg-white rounded-xl border border-gray-200 overflow-hidden cursor-pointer w-full"
          whileHover={{ 
            y: -3,
            boxShadow: "0 12px 40px rgba(0, 0, 0, 0.08), 0 6px 16px rgba(6, 182, 212, 0.12)",
            transition: { 
              type: "spring", 
              stiffness: 300, 
              damping: 25,
              duration: 0.4 
            }
          }}
          style={{
            boxShadow: "0 2px 8px rgba(0, 0, 0, 0.04), 0 1px 3px rgba(0, 0, 0, 0.06)",
          }}
        >
          {/* Hover gradient overlay */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-cyan-50/0 via-cyan-50/0 to-cyan-50/0 group-hover:from-cyan-50/20 group-hover:via-cyan-50/15 group-hover:to-cyan-50/10 transition-all duration-500 rounded-xl"
            initial={false}
          />
          
          {/* Decorative border on hover */}
          <motion.div
            className="absolute inset-0 rounded-xl border-2 border-cyan-200/0 group-hover:border-cyan-200/50 transition-all duration-500"
            initial={false}
          />

          {/* Card Content with proper padding */}
          <div className="relative z-10 px-8 md:px-10 lg:px-12 pt-8 md:pt-10 pb-8 md:pb-10">
            {/* Header Section - Improved */}
            <div className="mb-6 pb-6 border-b border-gray-100">
              {/* Date Badge */}
              <motion.div
                className="flex items-center gap-2 mb-4"
                whileHover={{ x: 2 }}
                transition={{ duration: 0.2 }}
              >
                <div className="flex items-center gap-2 px-3 py-1.5 bg-cyan-50 rounded-full border border-cyan-100">
                  <Calendar size={14} className="text-cyan-600" />
                  <span className="text-xs md:text-sm text-cyan-700 font-semibold">{post.date}</span>
                </div>
              </motion.div>

              {/* Title - Improved Header */}
              <motion.h2
                className="text-2xl md:text-3xl font-bold text-gray-900 group-hover:text-cyan-700 transition-colors duration-300 leading-tight pr-4"
                whileHover={{ x: 3 }}
                transition={{ duration: 0.3 }}
              >
                {post.title}
              </motion.h2>
            </div>

            {/* Description */}
            <motion.p
              className="text-gray-600 leading-relaxed mb-8 text-base md:text-lg group-hover:text-gray-700 transition-colors duration-300"
              whileHover={{ x: 2 }}
              transition={{ duration: 0.3 }}
            >
              {post.description}
            </motion.p>

            {/* Tags Section */}
            {post.tags && post.tags.length > 0 && (
              <motion.div
                className="flex flex-wrap gap-2.5 mb-8"
                initial={false}
              >
                {post.tags.map((tag, tagIndex) => (
                  <motion.span
                    key={tag}
                    className="bg-cyan-50 text-cyan-700 text-xs font-medium px-3.5 py-2 rounded-full border border-cyan-100 group-hover:bg-cyan-100 group-hover:border-cyan-200 transition-all duration-300"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      delay: (index * 0.08) + (tagIndex * 0.04),
                      duration: 0.3,
                    }}
                    whileHover={{
                      scale: 1.05,
                      backgroundColor: "rgb(207, 250, 254)",
                      borderColor: "rgb(165, 243, 252)",
                    }}
                  >
                    {tag}
                  </motion.span>
                ))}
              </motion.div>
            )}

            {/* Read More Link */}
            <motion.div
              className="flex items-center gap-2 text-cyan-600 font-semibold text-sm md:text-base group-hover:text-cyan-700 transition-colors duration-300 pt-2"
              whileHover={{ x: 5, gap: 6 }}
              transition={{ duration: 0.3 }}
            >
              <span>Read Article</span>
              <ArrowRight 
                size={18} 
                className="group-hover:translate-x-1 transition-transform duration-300"
              />
            </motion.div>
          </div>

          {/* Shimmer effect on hover */}
          <motion.div
            className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out pointer-events-none rounded-xl"
            style={{
              background: "linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.5), transparent)",
            }}
            initial={false}
          />
        </motion.div>
      </Link>
    </motion.article>
  );
}
