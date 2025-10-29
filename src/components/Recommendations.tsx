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
}

interface RecommendationCardProps {
  recommendation: Recommendation;
  index: number;
}

function RecommendationCard({ recommendation, index }: RecommendationCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ 
        delay: index * 0.05, 
        duration: 0.3,
        ease: "easeOut"
      }}
      viewport={{ once: true, amount: 0.25 }}
    >
      <div className="h-full rounded-2xl bg-white shadow-sm border border-gray-100 p-6">
        {/* Rating Stars */}
        <div className="flex gap-1 mb-4">
          {[...Array(recommendation.rating)].map((_, i) => (
            <Star 
              key={i} 
              size={16} 
              className="text-amber-400 fill-current" 
            />
          ))}
        </div>
        
        {/* Recommendation Text */}
        <p className="text-base text-gray-600 leading-relaxed mb-6">
          &ldquo;{recommendation.recommendation}&rdquo;
        </p>
        
        {/* Author Info */}
        <div className="flex items-center pt-4">
          <div className="w-10 h-10 bg-cyan-100 rounded-full flex items-center justify-center text-cyan-700 font-semibold text-sm mr-3 flex-shrink-0">
            {recommendation.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
          </div>
          <div className="flex-1 min-w-0">
            <h4 className="text-base font-semibold text-gray-900 mb-1 truncate">{recommendation.name}</h4>
            <p className="text-sm text-gray-500 truncate">
              {recommendation.position} <span className="text-gray-400">· {recommendation.company}</span>
            </p>
          </div>
        </div>
      </div>
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
