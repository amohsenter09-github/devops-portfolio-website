"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, Award, Zap, Shield, TrendingUp, Code, Database } from "lucide-react";

export default function About() {
  const expertiseCategories = [
    {
      icon: <Zap className="w-5 h-5" />,
      title: "AWS",
      items: ["EKS", "ECS", "EC2", "RDS", "VPC", "S3", "IAM/OIDC", "KMS", "CloudFront"]
    },
    {
      icon: <Code className="w-5 h-5" />,
      title: "DevOps",
      items: ["Terraform", "AWS CDK", "ArgoCD", "GitHub Actions", "CircleCI", "Jenkins"]
    },
    {
      icon: <TrendingUp className="w-5 h-5" />,
      title: "MLOps",
      items: ["MLflow", "Kubeflow", "SageMaker", "ML pipelines", "model deployment"]
    },
    {
      icon: <Shield className="w-5 h-5" />,
      title: "Observability",
      items: ["Datadog", "Prometheus", "Grafana", "Loki", "Tempo", "CloudWatch"]
    },
    {
      icon: <Shield className="w-5 h-5" />,
      title: "Security",
      items: ["IAM hardening", "Secrets Manager", "container hardening"]
    },
    {
      icon: <Code className="w-5 h-5" />,
      title: "Programming",
      items: ["Python", "Bash", "PowerShell", "SQL"]
    },
    {
      icon: <Database className="w-5 h-5" />,
      title: "Databases",
      items: ["PostgreSQL", "MySQL", "MongoDB", "Elastic Stack"]
    }
  ];

  const achievements = [
    "Led migration of $300M+ monthly transaction systems",
    "Achieved 99.9% uptime across production environments",
    "Reduced incidents by 30% through optimization",
    "Mentored DevOps engineer interns",
    "Processed $300M+ monthly royalty payments",
    "Designed multi-account AWS architectures"
  ];

  const clients = [
    "Schneider Electric",
    "Bose Corporation",
    "Knab Bank",
    "Dayton Power & Light",
    "Hudson Energy",
    "Green Mountain Energy",
    "EOG Resources",
    "Direct Energy"
  ];

  return (
    <div className="w-full min-h-screen bg-white">
      {/* Hero Intro Section */}
      <section className="py-24 md:py-32 bg-gradient-to-b from-gray-50 via-white to-gray-100">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
              About
            </h1>
            <div className="space-y-6">
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                I&apos;m <span className="font-semibold text-gray-900">Amr Fathy</span>, a Senior <span className="font-semibold text-gray-900">DevOps & Cloud Platform Engineer</span> with over 15 years of experience building secure, automated infrastructure across multi-account AWS environments.
              </p>
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                I specialize in <span className="text-cyan-600 font-medium">cloud replatforming, GitOps automation, and observability-driven design</span> — helping organizations modernize and scale their platforms with confidence.
              </p>
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                I&apos;ve led infrastructure modernization projects for <span className="font-medium">AVIV Group</span>, <span className="font-medium">EPAM Systems</span>, and <span className="font-medium">Cybrid.app</span>, achieving 99.9% uptime, automated deployments, and streamlined developer workflows across regulated environments.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Core Expertise & Key Achievements */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {/* Core Expertise Card */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Card className="h-full border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="p-8">
                  <div className="flex items-center justify-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-lg bg-cyan-100 flex items-center justify-center">
                      <Zap className="w-5 h-5 text-cyan-600" />
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900">Core Expertise</h2>
                  </div>
                  <div className="space-y-4">
                    {expertiseCategories.map((category, idx) => (
                      <div key={idx} className="text-center">
                        <div className="flex items-center justify-center gap-2 mb-2">
                          <span className="text-gray-500">{category.icon}</span>
                          <span className="font-semibold text-gray-900">{category.title}:</span>
                        </div>
                        <p className="text-sm text-gray-600">{category.items.join(", ")}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Key Achievements Card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Card className="h-full border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="p-8">
                  <div className="flex items-center justify-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-lg bg-green-100 flex items-center justify-center">
                      <Award className="w-5 h-5 text-green-600" />
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900">Key Achievements</h2>
                  </div>
                  <ul className="space-y-3">
                    {achievements.map((achievement, idx) => (
                      <li key={idx} className="flex items-center justify-center gap-3">
                        <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0" />
                        <span className="text-gray-700 leading-relaxed text-center">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Professional Philosophy */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card className="border border-gray-200 shadow-sm">
              <CardContent className="p-8 md:p-12">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center">
                  Professional Philosophy
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed text-center max-w-3xl mx-auto">
                  I believe in delivering reliable, secure, and scalable systems that enable teams to deliver software faster and more efficiently. 
                  My approach combines deep technical expertise with practical business understanding to deliver solutions that not only meet 
                  current requirements but also scale for future growth, especially in the rapidly evolving MLOps space.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Notable Clients & Partners */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-12">
              Notable Clients & Partners
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
              {clients.map((client, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: idx * 0.1, duration: 0.3 }}
                  viewport={{ once: true }}
                  className="text-gray-700 font-medium text-sm md:text-base hover:text-gray-900 transition-colors"
                >
                  {client}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
