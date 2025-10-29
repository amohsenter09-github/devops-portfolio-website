"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
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
      initial={{ opacity: 0, y: 30, scale: 0.96 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      whileHover={{ 
        y: -10, 
        scale: 1.03,
        transition: { 
          type: "spring", 
          stiffness: 300, 
          damping: 20,
          duration: 0.4
        }
      }}
      transition={{ 
        delay: index * 0.08, 
        type: "spring",
        stiffness: 120,
        damping: 18,
        duration: 0.6
      }}
      viewport={{ once: true, amount: 0.2 }}
      className="cursor-pointer"
    >
      <motion.div 
        className="h-full rounded-2xl bg-white border border-gray-200 p-7 flex flex-col relative overflow-hidden group"
        style={{
          boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)"
        }}
        whileHover={{
          boxShadow: "0 20px 40px -5px rgba(0, 0, 0, 0.15), 0 10px 20px -5px rgba(6, 182, 212, 0.1), 0 0 0 1px rgba(6, 182, 212, 0.15)",
          borderColor: "rgba(6, 182, 212, 0.3)",
          transition: { duration: 0.3, ease: "easeOut" }
        }}
      >
        {/* Decorative Quote Icon */}
        <motion.div
          className="absolute top-4 right-4 opacity-5 group-hover:opacity-10 transition-opacity"
          initial={{ rotate: -10, scale: 0.8 }}
          whileHover={{ rotate: 0, scale: 1.1 }}
          transition={{ duration: 0.3 }}
        >
          <Quote className="w-16 h-16 text-cyan-600" />
        </motion.div>

        {/* Rating Stars */}
        <motion.div 
          className="flex gap-1.5 mb-5 relative z-10"
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.08 + 0.15, duration: 0.4 }}
          viewport={{ once: true }}
        >
          {[...Array(recommendation.rating)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ scale: 0, opacity: 0, rotate: -180 }}
              whileInView={{ scale: 1, opacity: 1, rotate: 0 }}
              whileHover={{ scale: 1.2, rotate: 15 }}
              transition={{ 
                delay: index * 0.08 + 0.2 + i * 0.06,
                type: "spring",
                stiffness: 300,
                damping: 15
              }}
              viewport={{ once: true }}
            >
              <Star 
                size={18} 
                className="text-amber-400 fill-amber-400 drop-shadow-sm" 
              />
            </motion.div>
          ))}
        </motion.div>
        
        {/* Recommendation Text */}
        <motion.p 
          className="text-base text-gray-700 leading-relaxed mb-5 flex-grow relative z-10 font-medium"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: index * 0.08 + 0.4, duration: 0.5 }}
          viewport={{ once: true }}
        >
          <span className="text-cyan-600 text-2xl font-serif leading-none mr-1">&ldquo;</span>
          {recommendation.recommendation}
          <span className="text-cyan-600 text-2xl font-serif leading-none ml-1">&rdquo;</span>
        </motion.p>

        {/* Business Impact Badge */}
        {recommendation.businessImpact && (
          <motion.div 
            className="mb-4 relative z-10"
            initial={{ opacity: 0, scale: 0.8, y: 5 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            whileHover={{ scale: 1.05, y: -2 }}
            transition={{ 
              delay: index * 0.08 + 0.5,
              type: "spring",
              stiffness: 250,
              damping: 18
            }}
            viewport={{ once: true }}
          >
            <div className="px-4 py-2 bg-gradient-to-r from-cyan-50 to-blue-50 border border-cyan-200 rounded-lg inline-flex items-center gap-2 shadow-sm">
              <span className="text-xs font-semibold text-cyan-700">
                💼 {recommendation.businessImpact}
              </span>
            </div>
          </motion.div>
        )}

        {/* Project Value Badge */}
        {recommendation.projectValue && (
          <motion.div 
            className="mb-4 relative z-10"
            initial={{ opacity: 0, scale: 0.8, y: 5 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            whileHover={{ scale: 1.05, y: -2 }}
            transition={{ 
              delay: index * 0.08 + 0.55,
              type: "spring",
              stiffness: 250,
              damping: 18
            }}
            viewport={{ once: true }}
          >
            <div className="px-4 py-2 bg-gradient-to-r from-emerald-50 to-cyan-50 border border-emerald-200 rounded-lg inline-flex items-center gap-2 shadow-sm">
              <span className="text-xs font-semibold text-emerald-700">
                💰 Project Value: {recommendation.projectValue}
              </span>
            </div>
          </motion.div>
        )}
        
        {/* Author Info */}
        <motion.div 
          className="flex items-center pt-5 mt-auto border-t border-gray-200 relative z-10"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ 
            delay: index * 0.08 + 0.6,
            duration: 0.4,
            ease: "easeOut"
          }}
          viewport={{ once: true }}
        >
          <motion.div 
            className="w-12 h-12 bg-gradient-to-br from-cyan-100 to-blue-100 rounded-full flex items-center justify-center text-cyan-700 font-bold text-sm mr-4 flex-shrink-0 shadow-sm border border-cyan-200"
            whileHover={{ 
              scale: 1.15,
              rotate: [0, -10, 10, -10, 0],
              transition: { duration: 0.5, type: "spring" }
            }}
          >
            {recommendation.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
          </motion.div>
          <div className="flex-1 min-w-0">
            <motion.h4 
              className="text-base font-bold text-gray-900 mb-1 truncate group-hover:text-cyan-600 transition-colors"
              whileHover={{ x: 2 }}
            >
              {recommendation.name}
            </motion.h4>
            <p className="text-sm text-gray-600 truncate">
              <span className="font-medium">{recommendation.position}</span>
              <span className="text-gray-400 mx-1.5">·</span>
              <span className="text-gray-500">{recommendation.company}</span>
            </p>
          </div>
        </motion.div>

        {/* Hover gradient overlay */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-cyan-50/0 to-blue-50/0 rounded-2xl pointer-events-none"
          whileHover={{
            background: "linear-gradient(to bottom right, rgba(6, 182, 212, 0.03), rgba(59, 130, 246, 0.03))"
          }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>
    </motion.div>
  );
}

export default function Recommendations() {
  const [activeTab, setActiveTab] = useState<string | null>(null);
  const [hoveredTab, setHoveredTab] = useState<string | null>(null);

  // Organize recommendations by year (newest to oldest)
  const organizedRecommendations = {
    "2025": site.recommendations.filter(r => r.date.startsWith("2025")),
    "2023-2024": site.recommendations.filter(r => r.date.startsWith("2023") || r.date.startsWith("2024")),
    "2020-2022": site.recommendations.filter(r => {
      const year = parseInt(r.date.substring(0, 4));
      return year >= 2020 && year <= 2022;
    }),
    "2016-2019": site.recommendations.filter(r => {
      const year = parseInt(r.date.substring(0, 4));
      return year >= 2016 && year <= 2019;
    }),
  };

  const tabLabels = [
    { key: "2025", label: "2025", count: organizedRecommendations["2025"].length },
    { key: "2023-2024", label: "2023-2024", count: organizedRecommendations["2023-2024"].length },
    { key: "2020-2022", label: "2020-2022", count: organizedRecommendations["2020-2022"].length },
    { key: "2016-2019", label: "2016-2019", count: organizedRecommendations["2016-2019"].length },
  ];

  // Determine which tab content to show (hovered takes priority, then active, then first)
  const displayTab = hoveredTab || activeTab || tabLabels[0].key;
  const currentRecommendations = organizedRecommendations[displayTab as keyof typeof organizedRecommendations];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
      {/* Section Header */}
      <motion.div 
        className="text-center mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.25 }}
      >
        <motion.h2 
          className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
        >
          Client Recommendations
        </motion.h2>
        <motion.p 
          className="text-gray-600 text-sm sm:text-base max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.4 }}
          viewport={{ once: true }}
        >
          Trusted by enterprise clients worldwide • See all recommendations on{" "}
          <a 
            href={site.contact.linkedin + "/details/recommendations/"} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-cyan-600 hover:text-cyan-700 font-medium underline underline-offset-4 transition-colors"
          >
            LinkedIn
          </a>
        </motion.p>
      </motion.div>

      {/* Vertical Tab Layout: Left Panel + Right Content */}
      <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 min-h-[600px]">
        {/* Left Sidebar - Vertical Tabs */}
        <div className="flex-shrink-0 w-full lg:w-64">
          <div className="flex lg:flex-col gap-2 lg:gap-3 overflow-x-auto lg:overflow-x-visible pb-2 lg:pb-0 lg:sticky lg:top-24">
            {tabLabels.map((tab, index) => {
              const isActive = displayTab === tab.key;
              return (
                <motion.button
                  key={tab.key}
                  onMouseEnter={() => setHoveredTab(tab.key)}
                  onMouseLeave={() => setHoveredTab(null)}
                  onClick={() => setActiveTab(tab.key)}
                  className={`
                    relative flex items-center justify-between lg:justify-start w-full lg:w-auto
                    px-4 lg:px-5 py-3 lg:py-4 rounded-lg lg:rounded-r-lg lg:rounded-l-none
                    text-sm font-semibold transition-all duration-300 whitespace-nowrap
                    ${isActive 
                      ? "bg-cyan-600 text-white shadow-lg shadow-cyan-600/30 lg:translate-x-2" 
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200 lg:hover:translate-x-1"
                    }
                  `}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  whileHover={{ 
                    scale: 1.02,
                    x: isActive ? 8 : 4
                  }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ delay: index * 0.08, duration: 0.3 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-center gap-3">
                    <span className="relative z-10 font-medium">
                      {tab.label}
                    </span>
                    <span className={`text-xs px-2 py-0.5 rounded-full ${
                      isActive 
                        ? "bg-white/20 text-white/90" 
                        : "bg-gray-200 text-gray-600"
                    }`}>
                      {tab.count}
                    </span>
                  </div>
                  
                  {/* Active indicator line on left */}
                  {isActive && (
                    <motion.div
                      layoutId="activeTabIndicator"
                      className="absolute left-0 top-0 bottom-0 w-1 bg-cyan-400 rounded-r-full lg:block"
                      initial={false}
                      transition={{ type: "spring", stiffness: 500, damping: 30 }}
                    />
                  )}
                </motion.button>
              );
            })}
          </div>
        </div>

        {/* Right Content Area - Recommendations Grid */}
        <div className="flex-1 min-w-0">
          <motion.div
            key={displayTab}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-6 lg:gap-8"
          >
            {currentRecommendations.map((recommendation, index) => (
              <RecommendationCard
                key={recommendation.id}
                recommendation={recommendation}
                index={index}
              />
            ))}
          </motion.div>
        </div>
      </div>

      {/* View More Link */}
      {site.recommendations.length > 0 && (
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.4 }}
          viewport={{ once: true }}
        >
          <a
            href={site.contact.linkedin + "/details/recommendations/"}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-cyan-600 hover:text-cyan-700 font-semibold text-sm transition-colors group"
          >
            <span>View All Recommendations on LinkedIn</span>
            <motion.svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              className="group-hover:translate-x-1 transition-transform"
              whileHover={{ x: 4 }}
            >
              <path
                d="M6 12L10 8L6 4"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </motion.svg>
          </a>
        </motion.div>
      )}
    </div>
  );
}
