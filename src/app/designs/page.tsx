"use client";

import { motion } from "framer-motion";
import DevOpsDiagrams from "@/components/DevOpsDiagrams";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function Designs() {
  return (
    <div className="w-full">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="space-y-12"
      >
        {/* Header Section - Centered */}
        <motion.section 
          className="py-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <div className="max-w-4xl mx-auto px-4 text-center space-y-6">
            <h1 className="text-3xl font-semibold text-white">
              DevOps Designs & Architecture
            </h1>

            <p className="text-white/80 text-lg leading-relaxed">
              Visual representations of my DevOps processes, infrastructure designs, and system architectures. 
              These interactive diagrams showcase my approach to cloud infrastructure, automation, and observability 
              using professional brand icons and scalable vector graphics.
            </p>

            <div className="border-t border-white/10 my-6 mx-auto w-1/3"></div>

            <h2 className="text-2xl font-semibold text-white">
              Interactive Architecture Diagrams
            </h2>

            <p className="text-white/70 text-base leading-relaxed">
              Professional architecture diagrams showing system design, data flow, and component relationships. 
              These interactive diagrams highlight my approach to building scalable, observable, and automated systems.
            </p>
          </div>
        </motion.section>

        {/* Architecture Diagrams */}
        <div className="px-4">
          <DevOpsDiagrams />
        </div>

        {/* Design Process - Centered */}
        <section className="py-12">
          <div className="max-w-6xl mx-auto px-4">
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
          </div>
        </section>
      </motion.div>
    </div>
  );
}
