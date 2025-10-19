"use client";

import React from "react";
import { motion } from "framer-motion";
import { useState } from "react";
import Container from "@/components/Container";
import { projects } from "@/data/projects";
import { 
  Building2, 
  Cloud, 
  Database, 
  GitBranch, 
  Monitor, 
  Settings,
  CheckCircle,
  TrendingUp,
  Shield
} from "lucide-react";

interface ProjectDetails {
  client: string;
  industry: string;
  duration: string;
  teamSize: string;
  budget: string;
  challenges: string[];
  solutions: string[];
  results: string[];
  technologies: string[];
}

interface Project {
  slug: string;
  title: string;
  summary: string;
  tags: string[];
}

export default function Projects() {
  const [activeProject, setActiveProject] = useState(0);

  const projectIcons: Record<string, React.ReactElement> = {
    "aviv-group-replatforming": <Building2 className="w-6 h-6" />,
    "infracore-multi-account-aws": <Cloud className="w-6 h-6" />,
    "revolutiones-cpa-platform": <Database className="w-6 h-6" />,
    "epam-cicd-automation": <GitBranch className="w-6 h-6" />,
    "aurea-edi-automation": <Settings className="w-6 h-6" />,
    "observability-stack-implementation": <Monitor className="w-6 h-6" />
  };

  const getProjectDetails = (project: Project): ProjectDetails | Record<string, never> => {
    const details: Record<string, ProjectDetails> = {
      "aviv-group-replatforming": {
        client: "AVIV Group",
        industry: "Real Estate Technology",
        duration: "8 months",
        teamSize: "12 engineers",
        budget: "$2.5M",
        challenges: [
          "Legacy on-premises infrastructure causing 15% downtime",
          "Manual deployment processes limiting scalability",
          "Lack of comprehensive monitoring and observability",
          "Security compliance requirements for EU market"
        ],
        solutions: [
          "Complete AWS EKS migration with Terraform modules",
          "Automated CI/CD pipelines with CircleCI & GitHub Actions",
          "GitOps workflows with ArgoCD implementation",
          "Comprehensive observability stack with Datadog"
        ],
        results: [
          "99.9% uptime achieved (from 85%)",
          "70% faster deployment times",
          "60% reduction in infrastructure costs",
          "Zero security incidents post-migration"
        ],
        technologies: ["AWS EKS", "Terraform", "AWS CDK", "CircleCI", "GitHub Actions", "ArgoCD", "Datadog", "Prometheus", "Grafana"]
      },
      "infracore-multi-account-aws": {
        client: "InfraCore",
        industry: "Infrastructure Services",
        duration: "6 months",
        teamSize: "8 engineers",
        budget: "$1.8M",
        challenges: [
          "Multi-tenant architecture requirements",
          "Security isolation between environments",
          "Rapid provisioning needs for client onboarding",
          "Compliance with SOC 2 and ISO 27001"
        ],
        solutions: [
          "Secure multi-account AWS architecture",
          "EKS clusters with Bottlerocket OS",
          "GitOps implementation with ArgoCD",
          "OIDC integration and Secrets Manager"
        ],
        results: [
          "99.9% uptime across all environments",
          "90% faster client onboarding",
          "100% compliance audit success",
          "50% reduction in operational overhead"
        ],
        technologies: ["AWS", "EKS", "Bottlerocket", "ArgoCD", "OIDC", "Prometheus", "Grafana", "Terraform"]
      },
      "revolutiones-cpa-platform": {
        client: "RevolutionES",
        industry: "Financial Technology",
        duration: "10 months",
        teamSize: "15 engineers",
        budget: "$3.2M",
        challenges: [
          "CPA/PA application scalability requirements",
          "ARM64 architecture optimization needs",
          "Database performance and reliability",
          "GitHub Actions pipeline optimization"
        ],
        solutions: [
          "Multi-account AWS architecture design",
          "ARM64 EKS clusters deployment",
          "PostgreSQL RDS v16 with high availability",
          "ExternalDNS and VPA implementation"
        ],
        results: [
          "40% performance improvement with ARM64",
          "99.95% database uptime",
          "80% faster CI/CD pipeline execution",
          "30% cost reduction through optimization"
        ],
        technologies: ["AWS", "EKS", "ARM64", "RDS", "PostgreSQL", "GitHub Actions", "ExternalDNS", "VPA"]
      },
      "epam-cicd-automation": {
        client: "EPAM Systems",
        industry: "Technology Consulting",
        duration: "12 months",
        teamSize: "20 engineers",
        budget: "$4.5M",
        challenges: [
          "Multiple client environments (Schneider Electric, Bose, Knab)",
          "Legacy CI/CD processes",
          "Kubernetes containerization complexity",
          "Performance optimization requirements"
        ],
        solutions: [
          "Comprehensive CI/CD automation",
          "Kubernetes containerization strategy",
          "AWS infrastructure provisioning with Terraform",
          "Microservices architecture implementation"
        ],
        results: [
          "30% reduction in incidents",
          "50% faster deployment cycles",
          "99.8% system reliability",
          "25% improvement in developer productivity"
        ],
        technologies: ["Kubernetes", "Jenkins", "Terraform", "AWS", "CI/CD", "Microservices", "Docker"]
      },
      "aurea-edi-automation": {
        client: "Aurea Software",
        industry: "Enterprise Software",
        duration: "18 months",
        teamSize: "6 engineers",
        budget: "$2.8M",
        challenges: [
          "IBM Sterling B2B integrator complexity",
          "High-volume transaction processing ($300M+ monthly)",
          "PGP-secured EDI workflow automation",
          "Integration with existing CI/CD pipelines"
        ],
        solutions: [
          "IBM Sterling B2B integrator management",
          "Automated PGP-secured EDI workflows",
          "Jenkins integration for CI/CD",
          "Git-based version control implementation"
        ],
        results: [
          "99.99% transaction processing accuracy",
          "60% reduction in manual processing time",
          "Zero data breaches or security incidents",
          "40% improvement in processing efficiency"
        ],
        technologies: ["EDI", "IBM Sterling", "Jenkins", "PGP", "B2B Integration", "Automation", "Git"]
      },
      "observability-stack-implementation": {
        client: "Multiple Enterprise Clients",
        industry: "Cross-Industry",
        duration: "24 months",
        teamSize: "10 engineers",
        budget: "$5.2M",
        challenges: [
          "Fragmented monitoring across multiple environments",
          "Lack of unified observability",
          "Alert fatigue and false positives",
          "Performance bottleneck identification"
        ],
        solutions: [
          "Comprehensive monitoring with Prometheus",
          "Grafana dashboards and visualization",
          "Loki for log aggregation",
          "Tempo for distributed tracing",
          "Datadog integration"
        ],
        results: [
          "99.9% uptime across all environments",
          "80% reduction in MTTR",
          "90% reduction in false positive alerts",
          "50% improvement in performance optimization"
        ],
        technologies: ["Prometheus", "Grafana", "Loki", "Tempo", "Datadog", "Monitoring", "Alerting"]
      }
    };
    return details[project.slug] || {};
  };

  return (
    <Container>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-3xl font-semibold text-gray-900 dark:text-white mb-4">Enterprise Projects</h1>
        <p className="text-gray-600 dark:text-gray-300 max-w-3xl mb-8">
          High-value DevOps projects delivering measurable business results. Each project showcases 
          proven strategies for enterprise infrastructure transformation, cost optimization, and reliability improvement.
        </p>

        {/* Project Tabs */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-2 mb-6">
            {projects.map((project, index) => (
              <button
                key={project.slug}
                onClick={() => setActiveProject(index)}
                className={`flex items-center px-4 py-3 rounded-lg font-medium transition-all duration-200 ${
                  activeProject === index
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
              >
                {projectIcons[project.slug]}
                <span className="ml-2 text-sm">{project.title.split(' - ')[0]}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Active Project Details */}
        <motion.div
          key={activeProject}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-8"
        >
          {(() => {
            const project = projects[activeProject];
            const details = getProjectDetails(project);
            
            return (
              <>
                {/* Project Header */}
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-8">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                        {project.title}
                      </h2>
                      <p className="text-gray-600 dark:text-gray-300 mb-6">
                        {project.summary}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-white/50 dark:bg-gray-800/50 rounded-lg p-4 text-center">
                        <div className="text-sm text-gray-600 dark:text-gray-300">Client</div>
                        <div className="font-semibold text-gray-900 dark:text-white">{details.client}</div>
                      </div>
                      <div className="bg-white/50 dark:bg-gray-800/50 rounded-lg p-4 text-center">
                        <div className="text-sm text-gray-600 dark:text-gray-300">Duration</div>
                        <div className="font-semibold text-gray-900 dark:text-white">{details.duration}</div>
                      </div>
                      <div className="bg-white/50 dark:bg-gray-800/50 rounded-lg p-4 text-center">
                        <div className="text-sm text-gray-600 dark:text-gray-300">Team Size</div>
                        <div className="font-semibold text-gray-900 dark:text-white">{details.teamSize}</div>
                      </div>
                      <div className="bg-white/50 dark:bg-gray-800/50 rounded-lg p-4 text-center">
                        <div className="text-sm text-gray-600 dark:text-gray-300">Budget</div>
                        <div className="font-semibold text-gray-900 dark:text-white">{details.budget}</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Project Details Grid */}
                <div className="grid md:grid-cols-3 gap-6">
                  {/* Challenges */}
                  <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                      <Shield className="w-5 h-5 text-red-500 mr-2" />
                      Challenges
                    </h3>
                    <ul className="space-y-2">
                      {details.challenges?.map((challenge, idx) => (
                        <li key={idx} className="flex items-start text-sm text-gray-600 dark:text-gray-300">
                          <span className="w-2 h-2 bg-red-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                          {challenge}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Solutions */}
                  <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                      <Settings className="w-5 h-5 text-blue-500 mr-2" />
                      Solutions
                    </h3>
                    <ul className="space-y-2">
                      {details.solutions?.map((solution, idx) => (
                        <li key={idx} className="flex items-start text-sm text-gray-600 dark:text-gray-300">
                          <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                          {solution}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Results */}
                  <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                      <TrendingUp className="w-5 h-5 text-green-500 mr-2" />
                      Results
                    </h3>
                    <ul className="space-y-2">
                      {details.results?.map((result, idx) => (
                        <li key={idx} className="flex items-start text-sm text-gray-600 dark:text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Technologies Used */}
                <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                    Technologies & Tools
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {details.technologies?.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </>
            );
          })()}
        </motion.div>
      </motion.div>
    </Container>
  );
}
