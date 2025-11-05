"use client";

import React from "react";
import { motion } from "framer-motion";
import { useState } from "react";
import { projects } from "@/data/projects";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Building2, 
  Cloud, 
  Database, 
  GitBranch, 
  Monitor, 
  Settings,
  CheckCircle,
  Shield,
  Calendar,
  Users,
  DollarSign,
  Target,
  Lightbulb,
  Award
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
    "aviv-group-replatforming": <Building2 className="w-5 h-5" />,
    "infracore-multi-account-aws": <Cloud className="w-5 h-5" />,
    "revolutiones-cpa-platform": <Database className="w-5 h-5" />,
    "epam-cicd-automation": <GitBranch className="w-5 h-5" />,
    "aurea-edi-automation": <Settings className="w-5 h-5" />,
    "observability-stack-implementation": <Monitor className="w-5 h-5" />
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
    <div className="w-full min-h-screen bg-white">
      <section className="py-12 sm:py-16 md:py-20 w-full flex items-center justify-center">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8 sm:space-y-12"
          >
        {/* Header Section - Centered */}
        <div className="text-center space-y-4 sm:space-y-6">
          <motion.h1 
            className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent px-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            Project Portfolio
          </motion.h1>
          <motion.p 
            className="text-base sm:text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed px-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Comprehensive case studies showcasing enterprise-scale DevOps transformations, 
            infrastructure automation, and measurable business impact across diverse industries.
          </motion.p>
        </div>

        {/* Project Tabs - Centered */}
        <Tabs value={activeProject.toString()} onValueChange={(value) => setActiveProject(parseInt(value))} className="w-full">
          <div className="flex justify-center mb-6 sm:mb-8 overflow-x-auto pb-2">
            <TabsList className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 w-full sm:w-fit gap-2 sm:gap-4">
              {projects.map((project, index) => (
                <TabsTrigger 
                  key={project.slug} 
                  value={index.toString()}
                  className="flex flex-col items-center gap-1 sm:gap-2 p-2 sm:p-4 h-auto min-w-[100px] sm:min-w-[120px] text-xs sm:text-sm"
                >
                  <div className="flex items-center justify-center w-6 h-6 sm:w-8 sm:h-8 rounded-lg bg-primary/10 text-primary">
                    {projectIcons[project.slug]}
                  </div>
                  <span className="font-medium text-center leading-tight">
                    {project.title.split(' ').slice(0, 2).join(' ')}
                  </span>
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          {projects.map((project, index) => {
            const details = getProjectDetails(project);
            return (
              <TabsContent key={project.slug} value={index.toString()} className="space-y-6 sm:space-y-8">
                {/* Project Header - Centered */}
                <Card className="border border-gray-200 bg-white shadow-lg">
                  <CardHeader className="text-center px-4 sm:px-6">
                    <div className="flex items-center justify-center mb-4 sm:mb-6">
                      <div className="flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-xl bg-primary/10 text-primary">
                        {projectIcons[project.slug]}
                      </div>
                    </div>
                    <CardTitle className="text-2xl sm:text-3xl md:text-4xl mb-3 sm:mb-4 px-2">{project.title}</CardTitle>
                    <CardDescription className="text-base sm:text-lg max-w-4xl mx-auto leading-relaxed px-2">{project.summary}</CardDescription>
                  </CardHeader>
                  <CardContent className="px-4 sm:px-6">
                    <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
                      {project.tags.map((tag) => (
                        <Badge key={tag} variant="secondary" className="text-xs sm:text-sm px-3 sm:px-4 py-1.5 sm:py-2">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Project Details Grid - Centered */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-6xl mx-auto">
                  {/* Project Info */}
                  <Card>
                    <CardHeader className="pb-3 sm:pb-4 text-center px-4 sm:px-6 pt-4 sm:pt-6">
                      <CardTitle className="text-base sm:text-lg flex items-center justify-center gap-2">
                        <Target className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600" />
                        Project Info
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3 sm:space-y-4 px-4 sm:px-6 pb-4 sm:pb-6">
                      <div className="flex items-center gap-2 sm:gap-3">
                        <Building2 className="w-4 h-4 sm:w-5 sm:h-5 text-muted-foreground flex-shrink-0" />
                        <div>
                          <p className="text-xs sm:text-sm font-medium">{details.client}</p>
                          <p className="text-xs text-muted-foreground">{details.industry}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 sm:gap-3">
                        <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-muted-foreground flex-shrink-0" />
                        <div>
                          <p className="text-xs sm:text-sm font-medium">{details.duration}</p>
                          <p className="text-xs text-muted-foreground">Duration</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 sm:gap-3">
                        <Users className="w-4 h-4 sm:w-5 sm:h-5 text-muted-foreground flex-shrink-0" />
                        <div>
                          <p className="text-xs sm:text-sm font-medium">{details.teamSize}</p>
                          <p className="text-xs text-muted-foreground">Team Size</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 sm:gap-3">
                        <DollarSign className="w-4 h-4 sm:w-5 sm:h-5 text-muted-foreground flex-shrink-0" />
                        <div>
                          <p className="text-xs sm:text-sm font-medium">{details.budget}</p>
                          <p className="text-xs text-muted-foreground">Budget</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Challenges */}
                  <Card>
                    <CardHeader className="pb-3 sm:pb-4 text-center px-4 sm:px-6 pt-4 sm:pt-6">
                      <CardTitle className="text-base sm:text-lg flex items-center justify-center gap-2">
                        <Shield className="w-4 h-4 sm:w-5 sm:h-5 text-red-600" />
                        Challenges
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="px-4 sm:px-6 pb-4 sm:pb-6">
                      <ul className="space-y-2 sm:space-y-3">
                        {details.challenges?.map((challenge, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm leading-relaxed">
                            <div className="w-1.5 h-1.5 rounded-full bg-red-500 mt-1.5 sm:mt-2 flex-shrink-0" />
                            <span>{challenge}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>

                  {/* Solutions */}
                  <Card>
                    <CardHeader className="pb-3 sm:pb-4 text-center px-4 sm:px-6 pt-4 sm:pt-6">
                      <CardTitle className="text-base sm:text-lg flex items-center justify-center gap-2">
                        <Lightbulb className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600" />
                        Solutions
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="px-4 sm:px-6 pb-4 sm:pb-6">
                      <ul className="space-y-2 sm:space-y-3">
                        {details.solutions?.map((solution, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm leading-relaxed">
                            <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5 sm:mt-2 flex-shrink-0" />
                            <span>{solution}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>

                  {/* Results */}
                  <Card>
                    <CardHeader className="pb-3 sm:pb-4 text-center px-4 sm:px-6 pt-4 sm:pt-6">
                      <CardTitle className="text-base sm:text-lg flex items-center justify-center gap-2">
                        <Award className="w-4 h-4 sm:w-5 sm:h-5 text-green-600" />
                        Results
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="px-4 sm:px-6 pb-4 sm:pb-6">
                      <ul className="space-y-2 sm:space-y-3">
                        {details.results?.map((result, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm leading-relaxed">
                            <CheckCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-green-500 mt-0.5 flex-shrink-0" />
                            <span>{result}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>

                {/* Technologies - Centered */}
                <Card className="max-w-4xl mx-auto">
                  <CardHeader className="text-center px-4 sm:px-6 pt-4 sm:pt-6">
                    <CardTitle className="text-lg sm:text-xl flex items-center justify-center gap-2">
                      <Settings className="w-5 h-5 sm:w-6 sm:h-6 text-purple-600" />
                      Technologies Used
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="px-4 sm:px-6 pb-4 sm:pb-6">
                    <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
                      {details.technologies?.map((tech) => (
                        <Badge key={tech} variant="outline" className="text-xs sm:text-sm px-3 sm:px-4 py-1.5 sm:py-2">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            );
          })}
        </Tabs>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
