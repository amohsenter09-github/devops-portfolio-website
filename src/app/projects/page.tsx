"use client";

import { motion } from "framer-motion";
import Container from "@/components/Container";
import ProjectFilter from "@/components/ProjectFilter";
import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <Container>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-3xl font-semibold text-gray-900 dark:text-white">Projects</h1>
        <motion.p 
          className="mt-3 text-gray-600 dark:text-gray-300 max-w-3xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          Selected work across AWS, Kubernetes, GitOps, CI/CD, and Observability. Public links below; private work
          is summarized as case studies.
        </motion.p>
        
        <motion.div 
          className="mt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <ProjectFilter projects={projects} />
        </motion.div>
      </motion.div>
    </Container>
  );
}
