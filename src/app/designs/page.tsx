"use client";

import { motion } from "framer-motion";
import Container from "@/components/Container";
import DevOpsDiagrams from "@/components/DevOpsDiagrams";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function Designs() {
  return (
    <Container maxWidth="7xl" padding="lg">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="space-y-12"
      >
        {/* Header Section - Centered */}
        <div className="text-center space-y-6">
          <motion.h1 
            className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            DevOps Designs & Architecture
          </motion.h1>
          <motion.div 
            className="text-center px-6 py-8 bg-gradient-to-b from-transparent to-white/5 rounded-2xl max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <p className="text-white/80 text-lg leading-relaxed">
              Visual representations of my DevOps processes, infrastructure designs, and system architectures. 
              These interactive diagrams showcase my approach to cloud infrastructure, automation, and observability 
              using professional brand icons and scalable vector graphics.
            </p>
          </motion.div>
        </div>

        {/* Architecture Diagrams - Centered */}
        <div className="border-0 shadow-lg">
          <div className="text-center px-6 py-8 bg-gradient-to-b from-transparent to-white/5 rounded-2xl mb-8">
            <div className="max-w-3xl mx-auto space-y-4">
              <h2 className="text-2xl md:text-3xl font-semibold text-white mb-3">
                Interactive Architecture Diagrams
              </h2>
              <p className="text-white/70 text-base leading-relaxed">
                Professional architecture diagrams showing system design, data flow, and component relationships. 
                These interactive diagrams showcase my approach to cloud infrastructure, automation, and observability 
                using scalable vector graphics and professional brand icons.
              </p>
            </div>
          </div>
          <div className="px-0">
            <DevOpsDiagrams />
          </div>
        </div>

        {/* Design Process - Centered */}
        <Card>
          <CardHeader className="text-center">
            <CardTitle className="text-2xl md:text-3xl mb-4">Design Process & Methodology</CardTitle>
            <CardDescription className="text-base max-w-3xl mx-auto">
              My systematic approach to creating robust, scalable infrastructure solutions
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center mx-auto">
                  <span className="text-3xl font-bold text-blue-600">1</span>
                </div>
                <h3 className="font-semibold text-xl">Research & Analysis</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Understanding requirements, constraints, and existing systems before designing solutions.
                </p>
              </div>
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900/30 rounded-xl flex items-center justify-center mx-auto">
                  <span className="text-3xl font-bold text-purple-600">2</span>
                </div>
                <h3 className="font-semibold text-xl">Architecture Design</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Creating scalable, secure, and maintainable infrastructure designs using industry best practices.
                </p>
              </div>
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-xl flex items-center justify-center mx-auto">
                  <span className="text-3xl font-bold text-green-600">3</span>
                </div>
                <h3 className="font-semibold text-xl">Implementation Planning</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Detailed implementation roadmaps with clear milestones and success metrics.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </Container>
  );
}
