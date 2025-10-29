"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { site } from "@/lib/siteConfig";

interface Recommendation {
  id: number;
  name: string;
  position: string;
  company: string;
  avatar: string;
  recommendation: string;
  rating: number;
  date: string;
  projectValue?: string;
  businessImpact?: string;
}

interface RecommendationCardProps {
  recommendation: Recommendation;
  index: number;
}

function RecommendationCard({ recommendation, index }: RecommendationCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      whileHover={{ 
        y: -6, 
        scale: 1.02,
        transition: { 
          type: "spring", 
          stiffness: 300, 
          damping: 20,
          duration: 0.3
        }
      }}
      transition={{ 
        delay: index * 0.1, 
        type: "spring",
        stiffness: 100,
        damping: 15,
        duration: 0.5
      }}
      viewport={{ once: true, amount: 0.25 }}
      className="cursor-pointer"
    >
      <motion.div 
        className="h-full rounded-2xl bg-white shadow-sm border border-gray-100 p-6 flex flex-col"
        whileHover={{
          boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1), 0 0 0 1px rgba(6, 182, 212, 0.1)",
          borderColor: "rgba(6, 182, 212, 0.2)",
          transition: { duration: 0.2 }
        }}
      >
        {/* Rating Stars */}
        <motion.div 
          className="flex gap-1 mb-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: index * 0.1 + 0.2, duration: 0.3 }}
          viewport={{ once: true }}
        >
          {[...Array(recommendation.rating)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ 
                delay: index * 0.1 + 0.3 + i * 0.05,
                type: "spring",
                stiffness: 200,
                damping: 12
              }}
              viewport={{ once: true }}
            >
              <Star 
                size={16} 
                className="text-amber-400 fill-current" 
              />
            </motion.div>
          ))}
        </motion.div>
        
        {/* Recommendation Text */}
        <p className="text-base text-gray-600 leading-relaxed mb-4 flex-grow">
          &ldquo;{recommendation.recommendation}&rdquo;
        </p>

        {/* Project Value Badge */}
        {recommendation.projectValue && (
          <motion.div 
            className="mb-4 px-3 py-1.5 bg-cyan-50 border border-cyan-200 rounded-lg inline-flex items-center gap-2 self-start"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.05 }}
            transition={{ 
              delay: index * 0.1 + 0.4,
              type: "spring",
              stiffness: 200,
              damping: 15
            }}
            viewport={{ once: true }}
          >
            <span className="text-xs font-medium text-cyan-700">
              Project Value: {recommendation.projectValue}
            </span>
          </motion.div>
        )}
        
        {/* Author Info */}
        <motion.div 
          className="flex items-center pt-4 mt-auto border-t border-gray-100"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ 
            delay: index * 0.1 + 0.5,
            duration: 0.3,
            ease: "easeOut"
          }}
          viewport={{ once: true }}
        >
          <motion.div 
            className="w-10 h-10 bg-cyan-100 rounded-full flex items-center justify-center text-cyan-700 font-semibold text-sm mr-3 flex-shrink-0"
            whileHover={{ 
              scale: 1.1,
              rotate: 360,
              transition: { duration: 0.5, type: "spring" }
            }}
          >
            {recommendation.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
          </motion.div>
          <div className="flex-1 min-w-0">
            <h4 className="text-base font-semibold text-gray-900 mb-1 truncate">{recommendation.name}</h4>
            <p className="text-sm text-gray-500 truncate">
              {recommendation.position} <span className="text-gray-400">· {recommendation.company}</span>
            </p>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default function Recommendations() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 w-full">
      {/* Section Header */}
      <motion.div 
        className="text-center mb-8"
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.25 }}
      >
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">
          Client Recommendations
        </h2>
      </motion.div>

      {/* Recommendations Grid - Show only 3 visible at once */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-auto">
        {site.recommendations.map((recommendation, index) => (
          <RecommendationCard
            key={recommendation.id}
            recommendation={recommendation}
            index={index}
          />
        ))}
      </div>
    </div>
  );
}
