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
      className="recommendation-card-clean"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      viewport={{ once: true }}
      whileHover={{ 
        y: -2,
        transition: { duration: 0.2 }
      }}
    >
      <div className="p-8 h-full flex flex-col">
        {/* Rating Stars */}
        <div className="flex mb-6">
          {[...Array(recommendation.rating)].map((_, i) => (
            <Star 
              key={i} 
              size={18} 
              className="text-amber-400 fill-current" 
            />
          ))}
        </div>
        
        {/* Recommendation Text */}
        <blockquote className="text-gray-700 dark:text-gray-200 mb-8 flex-grow leading-relaxed text-lg">
          &ldquo;{recommendation.recommendation}&rdquo;
        </blockquote>
        
        {/* Author Info */}
        <div className="flex items-center">
          <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
            {recommendation.name.split(' ').map(n => n[0]).join('')}
          </div>
          <div>
            <div className="font-semibold text-gray-900 dark:text-white text-lg">
              {recommendation.name}
            </div>
            <div className="text-gray-600 dark:text-gray-400">
              {recommendation.position}
            </div>
            <div className="text-blue-600 dark:text-blue-400 font-medium">
              {recommendation.company}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Recommendations() {
  return (
    <motion.section 
      className="py-16 sm:py-20"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            Client Recommendations
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            What industry leaders say about working with me
          </p>
        </motion.div>

        {/* Recommendations Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {site.recommendations.map((recommendation, index) => (
            <RecommendationCard
              key={recommendation.id}
              recommendation={recommendation}
              index={index}
            />
          ))}
        </div>

        {/* LinkedIn CTA */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          viewport={{ once: true }}
        >
          <a
            href={site.contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-200"
          >
            View More on LinkedIn
            <svg className="ml-2 w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </a>
        </motion.div>
      </div>
    </motion.section>
  );
}
