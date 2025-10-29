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
    <div className="w-full min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-slate-100 overflow-x-hidden">
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
      <section className="relative z-10 py-24 md:py-32 w-full flex flex-col items-center justify-center">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="text-center flex flex-col items-center">
            <motion.h1 
              className="text-5xl md:text-6xl font-extrabold leading-tight text-slate-50 mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Amr Fathy
            </motion.h1>
            <motion.h2 
              className="text-2xl md:text-3xl font-semibold text-slate-300 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
            >
              Senior DevOps & Cloud Platform Engineer
            </motion.h2>
            
            <motion.p 
              className="mt-4 max-w-3xl mx-auto text-slate-400 text-lg leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              I design, build, and scale reliable infrastructure that powers products millions use daily — combining automation, observability, and precision engineering.
            </motion.p>
            
            {/* CTA Buttons */}
            <motion.div 
              className="mt-10 flex flex-wrap items-center justify-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <Link 
                href="/projects"
                className="rounded-full bg-cyan-600 px-8 py-3 text-sm font-medium text-white hover:bg-cyan-500 transition-all shadow-lg shadow-cyan-500/30 hover:shadow-xl hover:shadow-cyan-500/40"
              >
                View Projects
              </Link>
              <Link 
                href="/about"
                className="rounded-full border border-slate-600 bg-slate-800/50 backdrop-blur-sm px-8 py-3 text-sm font-medium text-slate-200 hover:bg-slate-700/50 hover:border-slate-500 transition-all"
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
              className="rounded-xl border border-slate-800 bg-slate-900/50 hover:bg-slate-800/50 transition min-h-[120px] p-6 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="text-5xl font-bold text-slate-50 mb-2">
                <AnimatedCounter end={15} duration={2} />
                <span className="text-4xl">+</span>
              </div>
              <div className="text-slate-300 font-medium">
                Years Experience
              </div>
            </motion.div>
            
                    <motion.div 
                      className="rounded-xl border border-slate-800 bg-slate-900/50 hover:bg-slate-800/50 transition min-h-[120px] p-6 text-center"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2, duration: 0.4 }}
                      viewport={{ once: true }}
                    >
                      <div className="text-5xl font-bold text-slate-50 mb-2">
                        <AnimatedCounter end={50} duration={2} />
                        <span className="text-4xl">+</span>
                      </div>
                      <div className="text-slate-300 font-medium">
                        Enterprise Cloud Delivery
                      </div>
                    </motion.div>
                    
                    <motion.div 
                      className="rounded-xl border border-slate-800 bg-slate-900/50 hover:bg-slate-800/50 transition min-h-[120px] p-6 text-center"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3, duration: 0.4 }}
                      viewport={{ once: true }}
                    >
                      <div className="text-5xl font-bold text-slate-50 mb-2">
                        <AnimatedCounter end={99} duration={2} />
                        <span className="text-4xl">.9%</span>
                      </div>
                      <div className="text-slate-300 font-medium">
                        Platform Reliability
                      </div>
                    </motion.div>
          </div>
        </div>
      </section>

      {/* Core Competencies */}
      <section className="relative z-10 py-16 md:py-20 w-full flex items-center justify-center border-t border-slate-800/50 pt-10 mt-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-50 text-center mb-10 md:mb-12">
            Core Competencies
          </h2>
          
          <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-6 mx-auto">
            {/* Cloud & Platforms */}
            <motion.div 
              className="rounded-xl border border-slate-800 bg-slate-900/50 hover:bg-slate-800/50 transition p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.4 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xs font-semibold tracking-wide text-slate-400 uppercase mb-4">
                Cloud & Platforms
              </h3>
              <div className="flex flex-wrap gap-2">
                {["AWS", "EKS", "Kubernetes", "Docker", "RDS"].map((tech) => (
                  <span 
                    key={tech}
                    className="px-3 py-1.5 bg-slate-800 text-slate-200 text-sm rounded-lg border border-slate-700"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Automation & IaC */}
            <motion.div 
              className="rounded-xl border border-slate-800 bg-slate-900/50 hover:bg-slate-800/50 transition p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.4 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xs font-semibold tracking-wide text-slate-400 uppercase mb-4">
                Automation & IaC
              </h3>
              <div className="flex flex-wrap gap-2">
                {["Terraform", "CDK", "ArgoCD", "GitHub Actions", "Jenkins"].map((tech) => (
                  <span 
                    key={tech}
                    className="px-3 py-1.5 bg-slate-800 text-slate-200 text-sm rounded-lg border border-slate-700"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Monitoring & Security */}
            <motion.div 
              className="rounded-xl border border-slate-800 bg-slate-900/50 hover:bg-slate-800/50 transition p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.4 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xs font-semibold tracking-wide text-slate-400 uppercase mb-4">
                Monitoring & Security
              </h3>
              <div className="flex flex-wrap gap-2">
                {["Prometheus", "Grafana", "Datadog", "IAM", "OIDC"].map((tech) => (
                  <span 
                    key={tech}
                    className="px-3 py-1.5 bg-slate-800 text-slate-200 text-sm rounded-lg border border-slate-700"
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
          <h2 className="text-2xl md:text-3xl font-bold text-slate-50 text-center mb-10 md:mb-12">
            Recent Work
          </h2>
          
          <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6 mx-auto">
            {/* AVIV Group */}
            <motion.div 
              className="rounded-xl border border-slate-800 bg-slate-900/50 p-6 hover:bg-slate-800/50 transition min-h-[280px] flex flex-col shadow-lg hover:shadow-xl"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1, duration: 0.4 }}
              viewport={{ once: true }}
            >
              <h3 className="font-semibold text-lg text-slate-50 mb-3">
                AVIV Group Replatforming
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed mb-4 flex-grow">
                Led complete migration from on-prem to AWS EKS with Terraform modules, achieving 99.9% uptime.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["AWS", "EKS", "Terraform"].map((tag) => (
                  <span 
                    key={tag} 
                    className="px-2 py-1 bg-slate-800 text-slate-200 text-xs rounded border border-slate-700"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <Link 
                href="/projects"
                className="text-cyan-400 hover:text-cyan-300 text-sm font-medium transition-colors inline-flex items-center gap-1"
              >
                View Full Case Study →
              </Link>
            </motion.div>

            {/* InfraCore */}
            <motion.div 
              className="rounded-xl border border-slate-800 bg-slate-900/50 p-6 hover:bg-slate-800/50 transition min-h-[280px] flex flex-col shadow-lg hover:shadow-xl"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.4 }}
              viewport={{ once: true }}
            >
              <h3 className="font-semibold text-lg text-slate-50 mb-3">
                InfraCore AWS Architecture
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed mb-4 flex-grow">
                Architected secure multi-account AWS infrastructure with EKS, GitOps, and comprehensive observability.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["AWS", "ArgoCD", "Bottlerocket"].map((tag) => (
                  <span 
                    key={tag} 
                    className="px-2 py-1 bg-slate-800 text-slate-200 text-xs rounded border border-slate-700"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <Link 
                href="/projects"
                className="text-cyan-400 hover:text-cyan-300 text-sm font-medium transition-colors inline-flex items-center gap-1"
              >
                View Full Case Study →
              </Link>
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
          <h2 className="text-2xl md:text-3xl font-bold text-slate-50 mb-6 md:mb-8">
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
              className="inline-flex items-center rounded-full bg-cyan-600 px-8 py-3 text-sm font-medium text-white hover:bg-cyan-500 transition-all shadow-lg shadow-cyan-500/30 hover:shadow-xl hover:shadow-cyan-500/40 mb-6"
            >
              View All Case Studies →
            </Link>
          </motion.div>
          
          {/* Subtle LinkedIn Link */}
          <p className="text-sm text-slate-400">
            <a
              href={site.contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyan-400 transition-colors underline underline-offset-4"
            >
              Read recommendations on LinkedIn →
            </a>
          </p>
        </div>
      </section>

      {/* About Me Section */}
      <section id="about" className="relative z-10 py-16 md:py-20 w-full flex items-center justify-center border-t border-slate-800/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-50 mb-6 text-center">About Me</h2>
            <div className="max-w-4xl mx-auto space-y-6 text-slate-200 leading-relaxed">
              <p className="text-lg">
                I&apos;m Amr Fathy — a Senior DevOps and Cloud Platform Engineer who designs, builds, and operates scalable infrastructure across AWS and Kubernetes environments.
              </p>
              <p>
                With over a decade of hands-on experience, I specialize in creating reliable, automated, and observable cloud platforms that empower engineering teams to deliver with speed and confidence.
              </p>
              <p>
                I&apos;ve led multi-account AWS replatforming initiatives for <strong className="text-slate-50">AVIV Group (Immowelt & Immonet)</strong>, implemented observability and GitOps standards for <strong className="text-slate-50">Cybrid</strong>, and delivered modernized CI/CD pipelines for <strong className="text-slate-50">Schneider Electric</strong>, <strong className="text-slate-50">Bose</strong>, and <strong className="text-slate-50">Knab</strong> through my time at <strong className="text-slate-50">EPAM Systems</strong>.
              </p>
              <p className="mt-6">
                My expertise spans <strong className="text-slate-50">AWS automation, Kubernetes platform engineering, observability, and security governance</strong> — focused on scalable, self-healing infrastructure for enterprise systems.
              </p>
              <p className="mt-4">
                My current domain{" "}
                <a 
                  href="https://infra-ai-art.delivery" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-cyan-400 hover:text-cyan-300 hover:underline"
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
