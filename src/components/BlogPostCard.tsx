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
      className="mb-8 md:mb-12"
    >
      <Link href={`/blog/${post.slug}`}>
        <motion.div
          className="group relative bg-white rounded-lg border border-gray-200 p-8 md:p-10 overflow-hidden cursor-pointer"
          whileHover={{ 
            y: -2,
            boxShadow: "0 10px 30px rgba(0, 0, 0, 0.08), 0 4px 12px rgba(6, 182, 212, 0.1)",
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
            className="absolute inset-0 bg-gradient-to-r from-cyan-50/0 via-cyan-50/0 to-cyan-50/0 group-hover:from-cyan-50/20 group-hover:via-cyan-50/15 group-hover:to-cyan-50/10 transition-all duration-500 rounded-lg"
            initial={false}
          />
          
          {/* Decorative border on hover */}
          <motion.div
            className="absolute inset-0 rounded-lg border border-cyan-200/0 group-hover:border-cyan-200/40 transition-all duration-500"
            initial={false}
          />

          <div className="relative z-10">
            {/* Date Badge */}
            <motion.div
              className="flex items-center gap-2 text-xs md:text-sm text-gray-500 mb-5"
              whileHover={{ x: 2 }}
              transition={{ duration: 0.2 }}
            >
              <Calendar size={14} className="text-cyan-600" />
              <span className="font-medium">{post.date}</span>
            </motion.div>

            {/* Title */}
            <motion.h2
              className="text-xl md:text-2xl font-bold text-gray-900 mb-4 group-hover:text-cyan-700 transition-colors duration-300 leading-snug"
              whileHover={{ x: 3 }}
              transition={{ duration: 0.3 }}
            >
              {post.title}
            </motion.h2>

            {/* Description */}
            <motion.p
              className="text-gray-600 leading-relaxed mb-6 text-sm md:text-base group-hover:text-gray-700 transition-colors duration-300"
              whileHover={{ x: 2 }}
              transition={{ duration: 0.3 }}
            >
              {post.description}
            </motion.p>

            {/* Tags */}
            {post.tags && post.tags.length > 0 && (
              <motion.div
                className="flex flex-wrap gap-2 mb-6"
                initial={false}
              >
                {post.tags.map((tag, tagIndex) => (
                  <motion.span
                    key={tag}
                    className="bg-cyan-50 text-cyan-700 text-xs font-medium px-3 py-1.5 rounded-full border border-cyan-100 group-hover:bg-cyan-100 group-hover:border-cyan-200 transition-all duration-300"
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
              className="flex items-center gap-2 text-cyan-600 font-semibold text-sm group-hover:text-cyan-700 transition-colors duration-300"
              whileHover={{ x: 5, gap: 6 }}
              transition={{ duration: 0.3 }}
            >
              <span>Read Article</span>
              <ArrowRight 
                size={16} 
                className="group-hover:translate-x-1 transition-transform duration-300"
              />
            </motion.div>
          </div>

          {/* Shimmer effect on hover */}
          <motion.div
            className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out pointer-events-none rounded-lg"
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
