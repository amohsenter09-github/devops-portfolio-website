"use client";

import { motion } from "framer-motion";
import { useState } from "react";

interface DiagramProps {
  title: string;
  children: React.ReactNode;
}

function Diagram({ title, children }: DiagramProps) {
  return (
    <div className="professional-card mb-8">
      <div className="p-8">
        <h3 className="text-xl font-semibold mb-6 text-gray-900 dark:text-white text-center">
          {title}
        </h3>
        <div className="flex justify-center">
          {children}
        </div>
      </div>
    </div>
  );
}

export default function DevOpsDiagrams() {
  const [activeDiagram, setActiveDiagram] = useState("architecture");

  const diagrams = {
    architecture: (
      <Diagram title="Multi-Account AWS Architecture">
        <div className="w-full max-w-4xl">
          {/* AWS Accounts */}
          <div className="grid grid-cols-3 gap-4 mb-8">
            {/* Production */}
            <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-4">
              <div className="text-center">
                <div className="w-8 h-8 bg-green-500 rounded-full mx-auto mb-2"></div>
                <h4 className="font-semibold text-green-800 dark:text-green-200">Production</h4>
                <p className="text-sm text-green-600 dark:text-green-400">Live Customer Traffic</p>
              </div>
            </div>
            
            {/* Staging */}
            <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4">
              <div className="text-center">
                <div className="w-8 h-8 bg-yellow-500 rounded-full mx-auto mb-2"></div>
                <h4 className="font-semibold text-yellow-800 dark:text-yellow-200">Staging</h4>
                <p className="text-sm text-yellow-600 dark:text-yellow-400">Pre-Production Testing</p>
              </div>
            </div>
            
            {/* Sandbox */}
            <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
              <div className="text-center">
                <div className="w-8 h-8 bg-blue-500 rounded-full mx-auto mb-2"></div>
                <h4 className="font-semibold text-blue-800 dark:text-blue-200">Sandbox</h4>
                <p className="text-sm text-blue-600 dark:text-blue-400">Development & Testing</p>
              </div>
            </div>
          </div>

          {/* Infrastructure Components */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center">
              <div className="w-16 h-16 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center mx-auto mb-2">
                <span className="text-gray-600 dark:text-gray-300 font-bold">EKS</span>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400">Kubernetes</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center mx-auto mb-2">
                <span className="text-gray-600 dark:text-gray-300 font-bold">RDS</span>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400">Database</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center mx-auto mb-2">
                <span className="text-gray-600 dark:text-gray-300 font-bold">S3</span>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400">Storage</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center mx-auto mb-2">
                <span className="text-gray-600 dark:text-gray-300 font-bold">ALB</span>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400">Load Balancer</p>
            </div>
          </div>
        </div>
      </Diagram>
    ),

    gitops: (
      <Diagram title="GitOps Deployment Flow">
        <div className="w-full max-w-3xl">
          <div className="space-y-6">
            {/* Step 1 */}
            <div className="flex items-center">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mr-4">
                <span className="text-blue-600 dark:text-blue-400 font-bold">1</span>
              </div>
              <div className="flex-1 bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 dark:text-white">Code Push</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">Developer pushes code to GitHub</p>
              </div>
            </div>
            
            {/* Arrow */}
            <div className="flex justify-center">
              <div className="w-0.5 h-8 bg-gray-300 dark:bg-gray-600"></div>
            </div>
            
            {/* Step 2 */}
            <div className="flex items-center">
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mr-4">
                <span className="text-green-600 dark:text-green-400 font-bold">2</span>
              </div>
              <div className="flex-1 bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 dark:text-white">Build & Test</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">GitHub Actions builds Docker image</p>
              </div>
            </div>
            
            {/* Arrow */}
            <div className="flex justify-center">
              <div className="w-0.5 h-8 bg-gray-300 dark:bg-gray-600"></div>
            </div>
            
            {/* Step 3 */}
            <div className="flex items-center">
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mr-4">
                <span className="text-purple-600 dark:text-purple-400 font-bold">3</span>
              </div>
              <div className="flex-1 bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 dark:text-white">Deploy</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">ArgoCD syncs changes to cluster</p>
              </div>
            </div>
          </div>
        </div>
      </Diagram>
    ),

    monitoring: (
      <Diagram title="Observability Stack">
        <div className="w-full max-w-4xl">
          <div className="grid grid-cols-3 gap-6">
            {/* Prometheus */}
            <div className="text-center">
              <div className="w-20 h-20 bg-orange-100 dark:bg-orange-900 rounded-lg flex items-center justify-center mx-auto mb-3">
                <span className="text-orange-600 dark:text-orange-400 font-bold text-2xl">P</span>
              </div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Prometheus</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">Metrics Collection</p>
              <div className="mt-3 space-y-1">
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <div className="bg-orange-500 h-2 rounded-full" style={{width: '85%'}}></div>
                </div>
                <p className="text-xs text-gray-500 dark:text-gray-400">CPU, Memory, Network</p>
              </div>
            </div>
            
            {/* Grafana */}
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mx-auto mb-3">
                <span className="text-blue-600 dark:text-blue-400 font-bold text-2xl">G</span>
              </div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Grafana</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">Dashboards</p>
              <div className="mt-3 space-y-1">
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <div className="bg-blue-500 h-2 rounded-full" style={{width: '92%'}}></div>
                </div>
                <p className="text-xs text-gray-500 dark:text-gray-400">Visualization</p>
              </div>
            </div>
            
            {/* Jaeger */}
            <div className="text-center">
              <div className="w-20 h-20 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center mx-auto mb-3">
                <span className="text-purple-600 dark:text-purple-400 font-bold text-2xl">J</span>
              </div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Jaeger</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">Distributed Tracing</p>
              <div className="mt-3 space-y-1">
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <div className="bg-purple-500 h-2 rounded-full" style={{width: '78%'}}></div>
                </div>
                <p className="text-xs text-gray-500 dark:text-gray-400">Request Flow</p>
              </div>
            </div>
          </div>
        </div>
      </Diagram>
    )
  };

  return (
    <div className="w-full">
      {/* Diagram Selector */}
      <div className="flex justify-center mb-8">
        <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-1">
          {Object.keys(diagrams).map((key) => (
            <button
              key={key}
              onClick={() => setActiveDiagram(key)}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                activeDiagram === key
                  ? 'bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow-sm'
                  : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
              }`}
            >
              {key.charAt(0).toUpperCase() + key.slice(1)}
            </button>
          ))}
        </div>
      </div>

      {/* Active Diagram */}
      <motion.div
        key={activeDiagram}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {diagrams[activeDiagram as keyof typeof diagrams]}
      </motion.div>
    </div>
  );
}