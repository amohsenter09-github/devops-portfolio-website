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
        className="space-y-8"
      >
        {/* Header Section */}
        <div className="text-center space-y-4">
          <motion.h1 
            className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            DevOps Designs & Architecture
          </motion.h1>
          <motion.p 
            className="text-lg text-muted-foreground max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Visual representations of my DevOps processes, infrastructure designs, and system architectures. 
            These interactive diagrams showcase my approach to cloud infrastructure, automation, and observability 
            using professional brand icons and scalable vector graphics.
          </motion.p>
        </div>

        {/* Architecture Diagrams */}
        <Card className="border-0 shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl text-center">Interactive Architecture Diagrams</CardTitle>
            <CardDescription className="text-center max-w-2xl mx-auto">
              Professional architecture diagrams showing system design, data flow, and component relationships. 
              These interactive diagrams showcase my approach to cloud infrastructure, automation, and observability 
              using scalable vector graphics and professional brand icons.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <DevOpsDiagrams />
          </CardContent>
        </Card>

        {/* Design Process */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl text-center">Design Process & Methodology</CardTitle>
            <CardDescription className="text-center">
              My systematic approach to creating robust, scalable infrastructure solutions
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center space-y-3">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mx-auto">
                  <span className="text-2xl font-bold text-blue-600">1</span>
                </div>
                <h3 className="font-semibold text-lg">Research & Analysis</h3>
                <p className="text-muted-foreground text-sm">
                  Understanding requirements, constraints, and existing systems before designing solutions.
                </p>
              </div>
              <div className="text-center space-y-3">
                <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center mx-auto">
                  <span className="text-2xl font-bold text-purple-600">2</span>
                </div>
                <h3 className="font-semibold text-lg">Architecture Design</h3>
                <p className="text-muted-foreground text-sm">
                  Creating scalable, secure, and maintainable infrastructure designs using industry best practices.
                </p>
              </div>
              <div className="text-center space-y-3">
                <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center mx-auto">
                  <span className="text-2xl font-bold text-green-600">3</span>
                </div>
                <h3 className="font-semibold text-lg">Implementation Planning</h3>
                <p className="text-muted-foreground text-sm">
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
