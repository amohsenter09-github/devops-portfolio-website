"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import AnimatedCounter from "@/components/AnimatedCounter";
import Recommendations from "@/components/Recommendations";
import Marquee from "@/components/Marquee";
import FloatingAboutTab from "@/components/FloatingAboutTab";
import { site } from "@/lib/siteConfig";

export default function Home() {
  return (
    <div className="w-full min-h-screen bg-white overflow-x-hidden">
      {/* Subtle Grid Pattern - Very Light */}
      <div className="absolute inset-0 opacity-[0.015] pointer-events-none z-0">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(0,0,0,0.06) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(0,0,0,0.06) 1px, transparent 1px)
            `,
            backgroundSize: '48px 48px',
          }}
        />
      </div>

      {/* Hero Section */}
      <section className="relative z-10 py-20 md:py-24 w-full flex flex-col items-center justify-center">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="text-center flex flex-col items-center">
            <motion.h1 
              className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-gray-900 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Amr Fathy
              <span className="block mt-2 text-gray-700">Senior DevOps & Cloud Platform Engineer</span>
            </motion.h1>
            
            <motion.p 
              className="mt-6 text-lg md:text-xl text-gray-600 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
            >
              Designing and automating resilient AWS and Kubernetes platforms using Terraform, GitOps, and Observability best practices.
            </motion.p>
            
            {/* CTA Buttons */}
            <motion.div 
              className="mt-8 flex flex-wrap items-center justify-center gap-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <Link 
                href="/projects"
                className="rounded-full bg-gray-900 px-6 py-2.5 text-sm font-medium text-white hover:bg-gray-800 transition-colors"
              >
                View Projects
              </Link>
              <Link 
                href="/about"
                className="rounded-full border border-gray-300 bg-white px-6 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-50 transition-colors"
              >
                About
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trusted by Section */}
      <section className="relative z-10 py-12 md:py-16 w-full flex items-center justify-center overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <Marquee />
        </div>
      </section>

      {/* Metrics Section */}
      <section className="relative z-10 py-16 md:py-20 w-full flex items-center justify-center">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mx-auto">
            <motion.div 
              className="rounded-xl border border-gray-200 bg-white hover:bg-gray-50 transition p-8 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="text-5xl font-bold text-gray-900 mb-2">
                <AnimatedCounter end={15} duration={2} />
                <span className="text-4xl">+</span>
              </div>
              <div className="text-gray-600 font-medium">
                Years Experience
              </div>
            </motion.div>
            
            <motion.div 
              className="rounded-xl border border-gray-200 bg-white hover:bg-gray-50 transition p-8 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="text-5xl font-bold text-gray-900 mb-2">
                <AnimatedCounter end={50} duration={2} />
                <span className="text-4xl">+</span>
              </div>
              <div className="text-gray-600 font-medium">
                Projects Delivered
              </div>
            </motion.div>
            
            <motion.div 
              className="rounded-xl border border-gray-200 bg-white hover:bg-gray-50 transition p-8 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="text-5xl font-bold text-gray-900 mb-2">
                <AnimatedCounter end={99} duration={2} />
                <span className="text-4xl">%</span>
              </div>
              <div className="text-gray-600 font-medium">
                Uptime Achieved
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Technologies */}
      <section className="relative z-10 py-16 md:py-20 w-full flex items-center justify-center">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-10 md:mb-12">
            Core Technologies
          </h2>
          
          <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-6 mx-auto">
            {/* Cloud & Platforms */}
            <motion.div 
              className="rounded-xl border border-gray-200 bg-white hover:bg-gray-50 transition p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.4 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xs font-semibold tracking-wide text-gray-500 uppercase mb-4">
                Cloud & Platforms
              </h3>
              <div className="flex flex-wrap gap-2">
                {["AWS", "EKS", "Kubernetes", "Docker", "RDS"].map((tech) => (
                  <span 
                    key={tech}
                    className="px-3 py-1.5 bg-gray-100 text-gray-700 text-sm rounded-lg"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Automation & IaC */}
            <motion.div 
              className="rounded-xl border border-gray-200 bg-white hover:bg-gray-50 transition p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.4 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xs font-semibold tracking-wide text-gray-500 uppercase mb-4">
                Automation & IaC
              </h3>
              <div className="flex flex-wrap gap-2">
                {["Terraform", "CDK", "ArgoCD", "GitHub Actions", "Jenkins"].map((tech) => (
                  <span 
                    key={tech}
                    className="px-3 py-1.5 bg-gray-100 text-gray-700 text-sm rounded-lg"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Monitoring & Security */}
            <motion.div 
              className="rounded-xl border border-gray-200 bg-white hover:bg-gray-50 transition p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.4 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xs font-semibold tracking-wide text-gray-500 uppercase mb-4">
                Monitoring & Security
              </h3>
              <div className="flex flex-wrap gap-2">
                {["Prometheus", "Grafana", "Datadog", "IAM", "OIDC"].map((tech) => (
                  <span 
                    key={tech}
                    className="px-3 py-1.5 bg-gray-100 text-gray-700 text-sm rounded-lg"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Recent Work */}
      <section className="relative z-10 py-16 md:py-20 w-full flex items-center justify-center">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-10 md:mb-12">
            Recent Work
          </h2>
          
          <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6 mx-auto">
            {/* AVIV Group */}
            <motion.div 
              className="rounded-xl border border-gray-200 bg-white p-6 hover:bg-gray-50 transition"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1, duration: 0.4 }}
              viewport={{ once: true }}
            >
              <h3 className="font-semibold text-lg text-gray-900 mb-3">
                AVIV Group Replatforming
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                Led complete migration from on-prem to AWS EKS with Terraform modules, achieving 99.9% uptime.
              </p>
              <div className="flex flex-wrap gap-2">
                {["AWS", "EKS", "Terraform"].map((tag) => (
                  <span 
                    key={tag} 
                    className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* InfraCore */}
            <motion.div 
              className="rounded-xl border border-gray-200 bg-white p-6 hover:bg-gray-50 transition"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.4 }}
              viewport={{ once: true }}
            >
              <h3 className="font-semibold text-lg text-gray-900 mb-3">
                InfraCore AWS Architecture
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                Architected secure multi-account AWS infrastructure with EKS, GitOps, and comprehensive observability.
              </p>
              <div className="flex flex-wrap gap-2">
                {["AWS", "ArgoCD", "Bottlerocket"].map((tag) => (
                  <span 
                    key={tag} 
                    className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Client Recommendations */}
      <section className="relative z-10 py-16 md:py-20 w-full flex items-center justify-center">
        <Recommendations />
      </section>

      {/* Highlighted Case Studies */}
      <section className="relative z-10 py-16 md:py-20 w-full flex items-center justify-center">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center w-full">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 md:mb-8">
            Highlighted Case Studies
          </h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
          >
            <Link 
              href="/projects" 
              className="inline-flex items-center rounded-full bg-gray-900 px-6 py-2.5 text-sm font-medium text-white hover:bg-gray-800 transition-colors mb-6"
            >
              View All Case Studies →
            </Link>
          </motion.div>
          
          {/* Subtle LinkedIn Link */}
          <p className="text-sm text-gray-500">
            <a
              href={site.contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-700 transition-colors underline underline-offset-4"
            >
              Read recommendations on LinkedIn →
            </a>
          </p>
        </div>
      </section>

      {/* About Me Section */}
      <section id="about" className="relative z-10 py-16 md:py-20 w-full flex items-center justify-center border-t border-gray-200 bg-gray-50/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">About Me</h2>
            <div className="max-w-4xl mx-auto space-y-6 text-gray-700 leading-relaxed">
              <p className="text-lg">
                I&apos;m Amr Fathy — a Senior DevOps and Cloud Platform Engineer who designs, builds, and operates scalable infrastructure across AWS and Kubernetes environments.
              </p>
              <p>
                With over a decade of hands-on experience, I specialize in creating reliable, automated, and observable cloud platforms that empower engineering teams to deliver with speed and confidence.
              </p>
              <p>
                I&apos;ve led multi-account AWS replatforming initiatives for <strong className="text-gray-900">AVIV Group (Immowelt & Immonet)</strong>, implemented observability and GitOps standards for <strong className="text-gray-900">Cybrid</strong>, and delivered modernized CI/CD pipelines for <strong className="text-gray-900">Schneider Electric</strong>, <strong className="text-gray-900">Bose</strong>, and <strong className="text-gray-900">Knab</strong> through my time at <strong className="text-gray-900">EPAM Systems</strong>.
              </p>
              <p className="mt-6">
                My expertise spans <strong className="text-gray-900">AWS automation, Kubernetes platform engineering, observability, and security governance</strong> — focused on scalable, self-healing infrastructure for enterprise systems.
              </p>
              <p className="mt-4">
                My current domain{" "}
                <a 
                  href="https://infra-ai-art.delivery" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-blue-600 hover:text-blue-700 hover:underline"
                >
                  infra-ai-art.delivery
                </a>{" "}
                embodies this philosophy: <em>delivering the art of intelligent infrastructure</em>.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Floating About Me Button */}
      <FloatingAboutTab />
    </div>
  );
}
