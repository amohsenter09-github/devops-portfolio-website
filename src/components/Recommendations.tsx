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
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ 
        delay: index * 0.08, 
        duration: 0.4
      }}
      viewport={{ once: true, margin: "-50px" }}
      whileHover={{ 
        y: -4,
        transition: { duration: 0.2 }
      }}
    >
      <div className="h-full rounded-xl border border-gray-200 bg-white hover:bg-gray-50 hover:border-gray-300 transition-all duration-300 p-6">
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
        <p className="text-base text-gray-700 leading-relaxed mb-6">
          &ldquo;{recommendation.recommendation}&rdquo;
        </p>
        
        {/* Author Info */}
        <div className="flex items-center pt-4 border-t border-gray-100">
          <div className="w-10 h-10 bg-gray-900 rounded-full flex items-center justify-center text-white font-semibold text-sm mr-3 flex-shrink-0">
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
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
      {/* Section Header */}
      <motion.div 
        className="text-center mb-10 md:mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        viewport={{ once: true }}
      >
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
          Client Recommendations
        </h2>
        <p className="text-base text-gray-600 max-w-2xl mx-auto">
          Feedback from industry leaders on infrastructure solutions delivered
        </p>
      </motion.div>

      {/* Recommendations Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
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
