"use client";

import { motion } from "framer-motion";
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
  const initials = recommendation.name.split(' ').map(n => n[0]).join('').slice(0, 2);
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ 
        delay: index * 0.1, 
        duration: 0.3,
        ease: "easeOut"
      }}
      viewport={{ once: true, amount: 0.25 }}
      className="flex-shrink-0"
    >
      <div className="h-full rounded-2xl bg-white shadow-sm border border-gray-100 p-6">
        {/* Rating Stars */}
        <div className="flex items-center mb-3">
          <span className="text-amber-400 text-xl">★★★★★</span>
        </div>
        
        {/* Recommendation Text */}
        <p className="text-gray-600 leading-relaxed mb-4">
          &ldquo;{recommendation.recommendation}&rdquo;
        </p>
        
        {/* Author Info */}
        <div className="mt-4 flex items-center">
          <div className="h-10 w-10 flex items-center justify-center rounded-full bg-cyan-100 text-cyan-700 font-semibold text-sm mr-3 flex-shrink-0">
            {initials}
          </div>
          <div className="flex-1 min-w-0">
            <p className="font-semibold text-gray-900">{recommendation.name}</p>
            <p className="text-sm text-gray-500">
              {recommendation.position} · {recommendation.company}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Recommendations() {
  return (
    <div className="max-w-6xl mx-auto px-6">
      {/* Section Header */}
      <motion.div 
        className="text-center mb-10"
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.25 }}
      >
        <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-2">
          Client Recommendations
        </h2>
        <p className="text-xs uppercase tracking-widest text-gray-500">
          What Clients Say
        </p>
      </motion.div>

      {/* Recommendations Grid - Desktop, Horizontal Scroll on Mobile */}
      <div className="grid gap-6 md:grid-cols-3 max-w-6xl mx-auto">
        {/* Desktop Grid */}
        <div className="hidden md:grid md:grid-cols-3 gap-6">
          {site.recommendations.map((recommendation, index) => (
            <RecommendationCard
              key={recommendation.id}
              recommendation={recommendation}
              index={index}
            />
          ))}
        </div>

        {/* Mobile Horizontal Scroll */}
        <div className="overflow-x-auto snap-x snap-mandatory scroll-smooth md:hidden -mx-6 px-6">
          <div className="flex gap-6" style={{ width: 'max-content' }}>
            {site.recommendations.map((recommendation, index) => (
              <div key={recommendation.id} className="snap-start" style={{ width: 'calc(100vw - 3rem)' }}>
                <RecommendationCard
                  recommendation={recommendation}
                  index={index}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
