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
      <div className="h-full rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition p-6">
        {/* Rating Stars */}
        <div className="flex mb-4">
          {[...Array(recommendation.rating)].map((_, i) => (
            <Star 
              key={i} 
              size={16} 
              className="text-amber-400 fill-current" 
            />
          ))}
        </div>
        
        {/* Recommendation Text */}
        <p className="text-base text-slate-300 leading-relaxed mb-6">
          &ldquo;{recommendation.recommendation}&rdquo;
        </p>
        
        {/* Author Info */}
        <div className="flex items-center pt-4 border-t border-white/10">
          <div className="w-10 h-10 bg-cyan-500/20 backdrop-blur-sm rounded-full flex items-center justify-center text-cyan-400 font-semibold text-sm mr-3 border border-cyan-500/30">
            {recommendation.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
          </div>
          <div className="flex-1">
            <h4 className="text-base font-semibold text-slate-100 mb-1">{recommendation.name}</h4>
            <p className="text-sm text-slate-400">
              {recommendation.position} <span className="text-slate-500">· {recommendation.company}</span>
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Recommendations() {
  return (
    <section className="py-16 md:py-20">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-8 md:mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl md:text-3xl font-bold text-slate-100 mb-4">
            Client Recommendations
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
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
    </section>
  );
}
