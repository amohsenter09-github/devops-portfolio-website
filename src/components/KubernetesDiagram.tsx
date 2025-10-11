"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ExternalLink, Maximize2, GitBranch, Container, Database } from "lucide-react";
import { getFigmaFile, getFigmaImages, generateFigmaEmbedUrl, type FigmaFile } from "@/lib/figma";

interface KubernetesDiagramProps {
  fileId: string;
  title: string;
  description: string;
  nodeIds?: string[];
}

export default function KubernetesDiagram({ 
  fileId, 
  title, 
  description, 
  nodeIds = [] 
}: KubernetesDiagramProps) {
  const [figmaFile, setFigmaFile] = useState<FigmaFile | null>(null);
  const [images, setImages] = useState<Record<string, string>>({});
  const [isExpanded, setIsExpanded] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchFigmaData = async () => {
      try {
        setIsLoading(true);
        const [fileData, imageData] = await Promise.all([
          getFigmaFile(fileId),
          nodeIds.length > 0 ? getFigmaImages(fileId, nodeIds) : Promise.resolve({})
        ]);
        
        setFigmaFile(fileData);
        setImages(imageData);
      } catch (error) {
        console.error('Error fetching Figma data:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchFigmaData();
  }, [fileId, nodeIds]);

  if (isLoading) {
    return (
      <div className="my-8 p-8 bg-gray-50 dark:bg-gray-800 rounded-lg">
        <div className="animate-pulse">
          <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-1/4 mb-4"></div>
          <div className="h-32 bg-gray-300 dark:bg-gray-600 rounded"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="my-8">
      <div className="flex items-center gap-3 mb-4">
        <div className="flex items-center gap-2">
          <Container className="text-blue-600" size={20} />
          <GitBranch className="text-green-600" size={20} />
          <Database className="text-purple-600" size={20} />
        </div>
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
          {title}
        </h3>
      </div>
      
      <p className="text-gray-600 dark:text-gray-300 mb-6">
        {description}
      </p>

      {/* Figma Images Grid */}
      {Object.keys(images).length > 0 && (
        <div className="grid md:grid-cols-2 gap-4 mb-6">
          {Object.entries(images).map(([nodeId, imageUrl]) => (
            <motion.div
              key={nodeId}
              className="relative group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="rounded-lg overflow-hidden shadow-lg border border-gray-200 dark:border-gray-700">
                <Image
                  src={imageUrl}
                  alt={`Kubernetes diagram ${nodeId}`}
                  width={600}
                  height={400}
                  className="w-full h-auto group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300 flex items-center justify-center">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setIsExpanded(!isExpanded)}
                    className="opacity-0 group-hover:opacity-100 bg-white dark:bg-gray-800 rounded-full p-2 shadow-lg transition-opacity duration-300"
                  >
                    <Maximize2 size={16} />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      )}

      {/* Interactive Figma Embed */}
      <motion.div 
        className="relative rounded-lg overflow-hidden shadow-lg border border-gray-200 dark:border-gray-700"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <iframe
          src={`https://www.figma.com/embed?embed_host=share&url=${encodeURIComponent(generateFigmaEmbedUrl(fileId))}`}
          allowFullScreen
          className="w-full border-0"
          style={{ height: isExpanded ? '800px' : '600px' }}
          title={title}
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
            href={generateFigmaEmbedUrl(fileId)}
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

      {/* Architecture Details */}
      <div className="mt-6 grid md:grid-cols-3 gap-4">
        <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
          <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">Microservices</h4>
          <ul className="text-sm text-blue-800 dark:text-blue-200 space-y-1">
            <li>• API Gateway</li>
            <li>• User Service</li>
            <li>• Order Service</li>
            <li>• Payment Service</li>
          </ul>
        </div>
        
        <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
          <h4 className="font-semibold text-green-900 dark:text-green-100 mb-2">ArgoCD GitOps</h4>
          <ul className="text-sm text-green-800 dark:text-green-200 space-y-1">
            <li>• Automated Deployments</li>
            <li>• Git-based Configuration</li>
            <li>• Rollback Capabilities</li>
            <li>• Multi-environment Sync</li>
          </ul>
        </div>
        
        <div className="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
          <h4 className="font-semibold text-purple-900 dark:text-purple-100 mb-2">Observability</h4>
          <ul className="text-sm text-purple-800 dark:text-purple-200 space-y-1">
            <li>• Prometheus Metrics</li>
            <li>• Grafana Dashboards</li>
            <li>• Jaeger Tracing</li>
            <li>• ELK Logging</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
