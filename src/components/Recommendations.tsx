"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import Image from "next/image";
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
      className="recommendation-card"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      viewport={{ once: true }}
      whileHover={{ 
        y: -8,
        transition: { duration: 0.3 }
      }}
    >
      <div className="relative p-6 h-full flex flex-col">
        {/* Quote Icon */}
        <div className="absolute top-4 right-4 opacity-10">
          <Quote size={32} className="text-blue-600 dark:text-blue-400" />
        </div>
        
        {/* Rating Stars */}
        <div className="flex mb-4">
          {[...Array(recommendation.rating)].map((_, i) => (
            <Star 
              key={i} 
              size={16} 
              className="text-yellow-400 fill-current" 
            />
          ))}
        </div>
        
        {/* Recommendation Text */}
        <blockquote className="text-gray-700 dark:text-gray-300 mb-6 flex-grow leading-relaxed">
          &ldquo;{recommendation.recommendation}&rdquo;
        </blockquote>
        
        {/* Author Info */}
        <div className="flex items-center mt-auto">
          <Image
            src={recommendation.avatar}
            alt={recommendation.name}
            width={48}
            height={48}
            className="w-12 h-12 rounded-full object-cover mr-4 border-2 border-blue-200 dark:border-blue-700"
          />
          <div>
            <div className="font-semibold text-gray-900 dark:text-white">
              {recommendation.name}
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">
              {recommendation.position}
            </div>
            <div className="text-sm font-medium text-blue-600 dark:text-blue-400">
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
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 heading-secondary">
            Client Recommendations
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
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
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          viewport={{ once: true }}
        >
          <a
            href={site.contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
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
