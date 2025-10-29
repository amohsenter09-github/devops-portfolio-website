"use client";

import { motion } from "framer-motion";
import { TrendingUp, DollarSign, Clock, Shield, Users, Zap } from "lucide-react";

export default function BusinessImpact() {
  const metrics = [
    {
      icon: <DollarSign className="w-8 h-8" />,
      title: "Cost Reduction",
      value: "60%",
      description: "Average infrastructure cost savings through automation and optimization",
      color: "text-green-600"
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Deployment Time",
      value: "70%",
      description: "Faster time-to-market with automated CI/CD pipelines",
      color: "text-blue-600"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "System Uptime",
      value: "99.9%",
      description: "Enterprise-grade reliability with zero-downtime deployments",
      color: "text-purple-600"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Client Retention",
      value: "95%",
      description: "Long-term partnerships built on proven results",
      color: "text-orange-600"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "MTTR Reduction",
      value: "80%",
      description: "Faster incident response with comprehensive monitoring",
      color: "text-red-600"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Avg Project Value",
      value: "$150K+",
      description: "High-value engagements delivering significant ROI",
      color: "text-indigo-600"
    }
  ];

  const caseStudies = [
    {
      title: "Fortune 500 Financial Services",
      challenge: "Legacy infrastructure causing 15% downtime and $5M annual losses",
      solution: "Implemented cloud-native architecture with GitOps automation",
      results: [
        "99.9% uptime achieved",
        "$2M annual cost savings",
        "70% faster deployments",
        "Zero security incidents"
      ],
      projectValue: "$500K",
      roi: "400% ROI in first year"
    },
    {
      title: "High-Growth Tech Startup",
      challenge: "Manual deployments limiting growth and investor confidence",
      solution: "Built comprehensive DevOps platform with observability stack",
      results: [
        "80% faster development cycles",
        "90% reduction in MTTR",
        "99.99% uptime during peak traffic",
        "Successful Series B funding"
      ],
      projectValue: "$300K",
      roi: "Contributed to $50M Series B raise"
    },
    {
      title: "E-commerce Platform",
      challenge: "Black Friday traffic spikes causing system failures",
      solution: "Scalable multi-account AWS architecture with auto-scaling",
      results: [
        "99.99% uptime during Black Friday",
        "10x traffic handling capacity",
        "60% infrastructure cost reduction",
        "Zero downtime deployments"
      ],
      projectValue: "$400K",
      roi: "300% ROI through increased sales"
    }
  ];

  return (
    <div className="w-full min-h-screen bg-white">
      <section className="py-16 md:py-20 w-full flex items-center justify-center">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">
          Business Impact & ROI
        </h1>
        <p className="text-gray-600 max-w-3xl mx-auto mb-8 text-center">
          Proven results that matter to business leaders. My DevOps solutions don&apos;t just improve technical metrics—they drive measurable business outcomes that impact your bottom line.
        </p>

        {/* Key Metrics */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-10 text-center">
            Proven Performance Metrics
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-auto">
            {metrics.map((metric, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="bg-white border border-gray-200 rounded-xl p-6 text-center hover:bg-gray-50 transition"
              >
                <div className={`${metric.color} mb-4 flex justify-center`}>
                  {metric.icon}
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-2">
                  {metric.value}
                </h3>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                  {metric.title}
                </h4>
                <p className="text-gray-600 text-sm">
                  {metric.description}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Case Studies */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-10 text-center">
            Real-World Success Stories
          </h2>
          <div className="space-y-8">
            {caseStudies.map((study, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.5 }}
                className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-xl p-8"
              >
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">
                      {study.title}
                    </h3>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Challenge:</h4>
                        <p className="text-gray-600">{study.challenge}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Solution:</h4>
                        <p className="text-gray-600">{study.solution}</p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-900 mb-2">Results:</h4>
                      <ul className="space-y-2">
                        {study.results.map((result, idx) => (
                          <li key={idx} className="flex items-center text-gray-600">
                            <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                            {result}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-white/50 rounded-lg p-3 text-center">
                        <div className="text-sm text-gray-600">Project Value</div>
                        <div className="text-lg font-bold text-gray-900">{study.projectValue}</div>
                      </div>
                      <div className="bg-white/50 rounded-lg p-3 text-center">
                        <div className="text-sm text-gray-600">ROI</div>
                        <div className="text-lg font-bold text-green-600">{study.roi}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Value Proposition */}
        <section className="mb-12">
          <div className="bg-gradient-to-r from-gray-50 to-blue-50 border border-gray-200 rounded-xl p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              Why High-Value Clients Choose Me
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Proven ROI</h3>
                <p className="text-gray-600 text-sm">
                  Every project delivers measurable business value with clear ROI metrics
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Enterprise Security</h3>
                <p className="text-gray-600 text-sm">
                  Security-first approach with compliance frameworks and audit readiness
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Rapid Delivery</h3>
                <p className="text-gray-600 text-sm">
                  Fast-track implementation with minimal disruption to ongoing operations
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="text-center">
          <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-xl p-8 text-white">
            <h2 className="text-2xl font-bold mb-4">Ready to Transform Your Infrastructure?</h2>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Let&apos;s discuss how my proven DevOps strategies can deliver measurable business results for your organization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Schedule Consultation
              </a>
              <a
                href="/blog/enterprise-microservices-platform"
                className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors"
              >
                View Case Study
              </a>
            </div>
          </div>
        </section>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
