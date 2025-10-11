"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Maximize2 } from "lucide-react";

interface FigmaEmbedProps {
  url: string;
  title?: string;
  description?: string;
  height?: number;
}

export default function FigmaEmbed({ 
  url, 
  title, 
  description, 
  height = 400 
}: FigmaEmbedProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="my-8">
      {title && (
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
          {title}
        </h3>
      )}
      {description && (
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          {description}
        </p>
      )}
      
      <motion.div 
        className="relative rounded-lg overflow-hidden shadow-lg border border-gray-200 dark:border-gray-700"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <iframe
          src={`https://www.figma.com/embed?embed_host=share&url=${encodeURIComponent(url)}`}
          allowFullScreen
          className="w-full border-0"
          style={{ height: isExpanded ? '600px' : `${height}px` }}
          title={title || "Figma Design"}
        />
        
        <div className="absolute top-2 right-2 flex gap-2">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsExpanded(!isExpanded)}
            className="p-2 bg-white dark:bg-gray-800 rounded-full shadow-md hover:shadow-lg transition-shadow"
            title={isExpanded ? "Collapse" : "Expand"}
          >
            <Maximize2 size={16} />
          </motion.button>
          
          <motion.a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="p-2 bg-white dark:bg-gray-800 rounded-full shadow-md hover:shadow-lg transition-shadow"
            title="Open in Figma"
          >
            <ExternalLink size={16} />
          </motion.a>
        </div>
      </motion.div>
    </div>
  );
}
