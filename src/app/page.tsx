"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import AnimatedCounter from "@/components/AnimatedCounter";
import Recommendations from "@/components/Recommendations";
import BrandLogo from "@/components/BrandLogo";
import { projects } from "@/data/projects";
import { brands } from "@/lib/brands";

export default function Home() {
  const handleScrollToProjects = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.getElementById("featured-projects");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  // Take first 3 projects for featured section
  const featuredProjects = projects.slice(0, 3);

  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-100 overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative py-32 text-center w-full">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <motion.h1 
            className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-gray-900 mb-4"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            Amr Fathy
          </motion.h1>
          <motion.h2 
            className="text-xl sm:text-2xl font-bold text-gray-800 mb-6"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6, ease: "easeOut" }}
          >
            Senior DevOps & Cloud Platform Engineer
          </motion.h2>
          
          <motion.p 
            className="mx-auto max-w-3xl text-lg text-gray-700 leading-relaxed mb-8"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
          >
            Building intelligent, automated infrastructure that scales with precision.
          </motion.p>
          
          {/* Single CTA */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6, ease: "easeOut" }}
          >
            <a 
              href="#featured-projects"
              onClick={handleScrollToProjects}
              className="inline-flex items-center rounded-full bg-cyan-600 px-6 py-3 text-sm font-medium text-white hover:bg-cyan-500 transition-colors"
            >
              Explore My Work
            </a>
          </motion.div>
        </div>
      </section>

      {/* Metrics Section */}
      <section className="py-20 w-full">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 w-full">
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 mb-16">
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.3, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <div className="text-4xl md:text-5xl font-bold text-gray-900">
                <AnimatedCounter end={15} duration={2} />+
              </div>
              <div className="mt-2 text-sm text-gray-600">Years Experience</div>
            </motion.div>
            
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.3, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <div className="text-4xl md:text-5xl font-bold text-gray-900">Enterprise</div>
              <div className="mt-2 text-sm text-gray-600">Cloud Delivery</div>
            </motion.div>
            
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.3, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <div className="text-4xl md:text-5xl font-bold text-gray-900">99.9%</div>
              <div className="mt-2 text-sm text-gray-600">Platform Reliability</div>
            </motion.div>
          </div>

          {/* Trusted by Logos - Static */}
          <div className="w-full">
            <p className="text-center text-xs uppercase tracking-widest text-gray-500 mb-8">
              Trusted by
            </p>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-60 grayscale w-full">
              {brands.map((brand, index) => (
                <div key={`${brand.name}-${index}`} className="flex items-center justify-center h-12">
                  <BrandLogo brand={brand} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Core Competencies */}
      <section className="py-20 w-full">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 w-full">
          <motion.h2 
            className="text-2xl sm:text-3xl font-bold text-gray-900 text-center mb-8"
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
          >
            Core Competencies
          </motion.h2>
          
          <motion.div 
            className="flex flex-wrap justify-center gap-3 mt-6"
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.3, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
          >
            {["AWS", "EKS", "Kubernetes", "Docker", "RDS", "Terraform", "CDK", "ArgoCD", "GitHub Actions", "Jenkins", "Prometheus", "Grafana", "Datadog", "IAM", "OIDC"].map((tech) => (
              <span 
                key={tech}
                className="px-3 py-1 rounded-full bg-gray-100 text-gray-700 text-sm border border-gray-200"
              >
                {tech}
              </span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Featured Projects */}
      <section id="featured-projects" className="py-20 w-full">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 w-full">
          <h2 className="text-center text-2xl font-semibold text-gray-800 mb-10">
            Featured Projects
          </h2>
          
          <div className="grid gap-6 md:grid-cols-3 w-full">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.slug}
                className="rounded-2xl bg-white shadow-sm border border-gray-100 p-6 hover:shadow-md transition w-full flex flex-col h-full"
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.3, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.25 }}
              >
                <h3 className="font-semibold text-gray-900 mb-2">{project.title}</h3>
                <p className="text-gray-600 text-sm mb-3 leading-relaxed flex-grow">{project.summary}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.slice(0, 4).map((tag) => (
                    <span 
                      key={tag} 
                      className="px-2 py-1 bg-gray-50 text-gray-600 text-xs rounded border border-gray-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <Link 
                  href={`/projects#${project.slug}`}
                  className="mt-auto inline-block text-sm text-cyan-600 hover:text-cyan-500 font-medium transition-colors"
                >
                  View Case Study →
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link 
              href="/projects" 
              className="inline-flex items-center rounded-full bg-cyan-600 px-6 py-3 text-sm font-medium text-white hover:bg-cyan-500 transition-colors"
            >
              View All Projects →
            </Link>
          </div>
        </div>
      </section>

      {/* Client Recommendations */}
      <section className="py-20 w-full">
        <div className="w-full">
          <Recommendations />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 w-full">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center w-full">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Ready to Transform Your Infrastructure?
          </h2>
          <p className="text-gray-600 mb-8">
            Let&apos;s discuss how we can scale your platform with precision engineering.
          </p>
          <Link 
            href="/contact" 
            className="inline-flex items-center rounded-full bg-cyan-600 px-6 py-3 text-sm font-medium text-white hover:bg-cyan-500 transition-colors"
          >
            Get in Touch →
          </Link>
        </div>
      </section>
    </div>
  );
}
