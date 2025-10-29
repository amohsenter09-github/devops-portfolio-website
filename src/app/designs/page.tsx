"use client";

import { motion } from "framer-motion";
import DevOpsDiagrams from "@/components/DevOpsDiagrams";
import AnimatedAwsInfra from "@/components/AnimatedAwsInfra";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function Designs() {
  return (
    <div className="w-full min-h-screen bg-white">
      {/* Header Section */}
      <section className="py-16 md:py-20 w-full flex items-center justify-center">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center space-y-6 flex flex-col items-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 text-center">
              DevOps Designs & Architecture
            </h1>

            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed text-center">
              Visual representations of my DevOps processes, infrastructure designs, and system architectures. 
              These interactive diagrams showcase my approach to cloud infrastructure, automation, and observability 
              using professional brand icons and scalable vector graphics.
            </p>

            <div className="border-t border-gray-200 my-6 mx-auto w-1/3"></div>

            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center">
              Interactive Architecture Diagrams
            </h2>

            <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed text-center">
              Professional architecture diagrams showing system design, data flow, and component relationships. 
              These interactive diagrams highlight my approach to building scalable, observable, and automated systems.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Animated AWS Infrastructure Diagram */}
      <section className="py-12 md:py-16 w-full flex items-center justify-center bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-8 text-center"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
              AWS Multi-Account Infrastructure
            </h2>
            <p className="text-gray-600 text-sm md:text-base max-w-2xl mx-auto">
              Animated architecture diagram showing production, staging, and sandbox environments with GitOps workflows
            </p>
          </motion.div>
          <AnimatedAwsInfra />
        </div>
      </section>

      {/* Architecture Diagrams */}
      <section className="py-12 md:py-16 w-full flex items-center justify-center">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <DevOpsDiagrams />
        </div>
      </section>

      {/* Design Process - Centered */}
      <section className="py-16 md:py-20 w-full flex items-center justify-center">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <Card className="rounded-2xl border border-gray-200 bg-white hover:border-gray-300 hover:shadow-xl transition-all duration-300">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                Design Process & Methodology
              </CardTitle>
              <CardDescription className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
                My systematic approach to creating robust, scalable infrastructure solutions
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mt-10">
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mx-auto">
                    <span className="text-3xl font-bold text-blue-600">1</span>
                  </div>
                  <h3 className="font-bold text-xl text-gray-900">Research & Analysis</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Understanding requirements, constraints, and existing systems before designing solutions.
                  </p>
                </div>
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 bg-purple-100 rounded-xl flex items-center justify-center mx-auto">
                    <span className="text-3xl font-bold text-purple-600">2</span>
                  </div>
                  <h3 className="font-bold text-xl text-gray-900">Architecture Design</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Creating scalable, secure, and maintainable infrastructure designs using industry best practices.
                  </p>
                </div>
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center mx-auto">
                    <span className="text-3xl font-bold text-green-600">3</span>
                  </div>
                  <h3 className="font-bold text-xl text-gray-900">Implementation Planning</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Detailed implementation roadmaps with clear milestones and success metrics.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
