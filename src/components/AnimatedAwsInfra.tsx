"use client";

import { motion } from "framer-motion";
import React from "react";
import {
  SiAmazon,
  SiAmazoncloudwatch,
  SiKubernetes,
  SiPrometheus,
  SiArgo,
  SiRedis,
  SiPostgresql,
  SiDatadog,
  SiSlack,
  SiPagerduty
} from "react-icons/si";
import {
  Cloud,
  Shield,
  Network,
  Server,
  Globe,
  Key,
  Loader,
  MessageSquare,
  Zap,
  Lock,
  Database
} from "lucide-react";

type Node = {
  id: string;
  label: string;
  x: number;
  y: number;
  w: number;
  h: number;
  type: "group" | "service";
  icon?: React.ReactNode;
  pill?: string;
  highlight?: boolean;
  delay?: number;
  region?: string;
  serviceType?: "s3" | "lambda" | "rds" | "dynamodb" | "eks" | "alb" | "cloudwatch" | "default";
};

type Edge = {
  id: string;
  from: [number, number];
  to: [number, number];
  color?: string;
  dash?: string;
  label?: string;
  number?: number; // For numbered flow indicators
};

// Light theme colors matching AWS diagram style
const colors = {
  bg: "#ffffff",
  panel: "rgba(0, 0, 0, 0.02)",
  stroke: "rgba(0, 0, 0, 0.15)",
  label: "#232f3e",
  s3: "#3f48cc", // AWS S3 blue
  lambda: "#fa8900", // AWS Lambda orange
  rds: "#3f48cc", // AWS RDS blue
  dynamodb: "#4053d6", // AWS DynamoDB purple-blue
  eks: "#ff9900", // Kubernetes orange
  alb: "#232f3e", // Dark gray for ALB
  cloudwatch: "#ff4d00", // CloudWatch orange-red
  arrow: "#232f3e",
  arrowDashed: "#fa8900",
};

// Clean arrow component - AWS style
function CleanArrow({ edge }: { edge: Edge }) {
  const { from, to, color = colors.arrow, dash, label, number } = edge;
  const markerId = `arrowhead-${edge.id}`;
  
  const midX = (from[0] + to[0]) / 2;
  const midY = (from[1] + to[1]) / 2;
  
  const dx = to[0] - from[0];
  const dy = to[1] - from[1];
  const angle = Math.atan2(dy, dx) * (180 / Math.PI);
  
  return (
    <g key={`arrow-${edge.id}`}>
      <defs>
        <marker
          id={markerId}
          markerWidth="10"
          markerHeight="10"
          refX="9"
          refY="5"
          orient="auto"
          markerUnits="strokeWidth"
        >
          <path d="M0,0 L0,10 L10,5 Z" fill={color} />
        </marker>
      </defs>
      
      <line
        x1={from[0]}
        y1={from[1]}
        x2={to[0]}
        y2={to[1]}
        stroke={color}
        strokeWidth={2}
        strokeDasharray={dash || "none"}
        markerEnd={`url(#${markerId})`}
        opacity={dash ? 0.6 : 0.8}
      />
      
      {/* Numbered flow indicator */}
      {number && (
        <g transform={`translate(${midX}, ${midY})`}>
          <circle r="12" fill={colors.bg} stroke={color} strokeWidth="2" />
          <text
            x={0}
            y={4}
            fill={color}
            fontSize="11"
            fontWeight={700}
            textAnchor="middle"
          >
            {number}
          </text>
        </g>
      )}
      
      {/* Label */}
      {label && (
        <g transform={`translate(${midX}, ${midY - 15}) rotate(${angle})`}>
          <rect
            x={-label.length * 3.5}
            y={-8}
            width={label.length * 7}
            height={14}
            fill={colors.bg}
            stroke={color}
            strokeWidth="1"
            rx={3}
            opacity={0.9}
          />
          <text
            x={0}
            y={2}
            fill={colors.label}
            fontSize="9"
            fontWeight={500}
            textAnchor="middle"
          >
            {label}
          </text>
        </g>
      )}
    </g>
  );
}

export default function AnimatedAwsInfra() {
  const nodes: Node[] = [
    // Top: External AWS Services
    { id: "ext", label: "EXTERNAL AWS SERVICES", x: 60, y: 40, w: 480, h: 220, type: "group" },
    { id: "route53", label: "Route53", x: 80, y: 80, w: 130, h: 45, type: "service", icon: <Globe className="w-5 h-5" />, serviceType: "default" },
    { id: "cloudfront", label: "CloudFront", x: 220, y: 80, w: 140, h: 45, type: "service", icon: <Cloud className="w-5 h-5" />, serviceType: "default" },
    { id: "s3-static", label: "Amazon S3", x: 370, y: 80, w: 150, h: 45, type: "service", icon: <Database className="w-5 h-5" />, serviceType: "s3" },
    { id: "api-gateway", label: "API Gateway", x: 80, y: 140, w: 140, h: 45, type: "service", icon: <Network className="w-5 h-5" />, serviceType: "default" },
    { id: "s3-portal", label: "Amazon S3", x: 230, y: 140, w: 290, h: 45, type: "service", icon: <Database className="w-5 h-5" />, serviceType: "s3" },

    // Security Services
    { id: "sec", label: "SECURITY SERVICES", x: 560, y: 40, w: 280, h: 220, type: "group" },
    { id: "waf", label: "WAF", x: 580, y: 80, w: 240, h: 45, type: "service", icon: <Shield className="w-5 h-5" />, serviceType: "default" },
    { id: "guardduty", label: "GuardDuty", x: 580, y: 140, w: 240, h: 45, type: "service", icon: <Shield className="w-5 h-5" />, serviceType: "default" },
    { id: "iam", label: "IAM", x: 580, y: 200, w: 240, h: 45, type: "service", icon: <Lock className="w-5 h-5" />, serviceType: "default" },

    // Left: Operations (US-WEST-2)
    { id: "ops-account", label: "OPERATIONS (US-WEST-2)", x: 60, y: 280, w: 400, h: 300, type: "group", region: "us-west-2" },
    { id: "argocd", label: "ArgoCD (HA)", x: 80, y: 330, w: 180, h: 50, type: "service", highlight: true, icon: <SiArgo className="w-5 h-5" />, serviceType: "default" },
    { id: "bastion-ops", label: "Bastion Hosts (m5.medium)", x: 270, y: 330, w: 180, h: 50, type: "service", icon: <Server className="w-5 h-5" />, serviceType: "default" },
    { id: "mon-stack", label: "Monitoring (Prometheus/Grafana)", x: 80, y: 395, w: 370, h: 50, type: "service", icon: <SiPrometheus className="w-5 h-5" />, serviceType: "default" },
    { id: "vpn-ops", label: "Aviatrix VPN", x: 80, y: 460, w: 370, h: 50, type: "service", icon: <Network className="w-5 h-5" />, serviceType: "default" },
    { id: "lambda-ops", label: "Lambda", x: 80, y: 525, w: 370, h: 45, type: "service", icon: <Zap className="w-5 h-5" />, serviceType: "lambda" },

    // Top-Right: Production (CA-CENTRAL-1)
    { id: "prod-account", label: "PRODUCTION (CA-CENTRAL-1)", x: 860, y: 40, w: 920, h: 360, type: "group", region: "ca-central-1" },
    { id: "prod-alb", label: "ALB", x: 880, y: 90, w: 110, h: 50, type: "service", icon: <Network className="w-5 h-5" />, pill: "prod", serviceType: "alb" },
    { id: "prod-eks", label: "EKS", x: 1000, y: 90, w: 200, h: 50, type: "service", icon: <SiKubernetes className="w-5 h-5" />, pill: "prod", serviceType: "eks" },
    { id: "prod-rds", label: "Aurora PostgreSQL", x: 1210, y: 90, w: 280, h: 50, type: "service", icon: <SiPostgresql className="w-5 h-5" />, serviceType: "rds" },
    { id: "prod-redis", label: "ElastiCache Redis", x: 1500, y: 90, w: 260, h: 50, type: "service", icon: <SiRedis className="w-5 h-5" />, serviceType: "default" },
    { id: "prod-cw", label: "CloudWatch", x: 880, y: 155, w: 140, h: 44, type: "service", icon: <SiAmazoncloudwatch className="w-5 h-5" />, serviceType: "cloudwatch" },
    { id: "prod-kms", label: "KMS", x: 1030, y: 155, w: 100, h: 44, type: "service", icon: <Key className="w-5 h-5" />, serviceType: "default" },
    { id: "prod-s3", label: "Amazon S3", x: 880, y: 215, w: 360, h: 44, type: "service", icon: <Database className="w-5 h-5" />, serviceType: "s3" },
    { id: "prod-sns", label: "SNS", x: 1250, y: 215, w: 100, h: 44, type: "service", icon: <MessageSquare className="w-5 h-5" />, serviceType: "default" },
    { id: "prod-sqs", label: "SQS", x: 1360, y: 215, w: 100, h: 44, type: "service", icon: <Loader className="w-5 h-5" />, serviceType: "default" },
    { id: "prod-lambda", label: "Lambda Functions", x: 880, y: 275, w: 280, h: 44, type: "service", icon: <Zap className="w-5 h-5" />, serviceType: "lambda" },
    { id: "prod-vpc", label: "VPC (Multi-AZ)", x: 1170, y: 275, w: 290, h: 44, type: "service", icon: <Network className="w-5 h-5" />, serviceType: "default" },

    // Mid-Right: Staging (CA-CENTRAL-1)
    { id: "stg-account", label: "STAGING (CA-CENTRAL-1)", x: 860, y: 420, w: 920, h: 280, type: "group", region: "ca-central-1" },
    { id: "stg-alb", label: "ALB", x: 880, y: 460, w: 110, h: 44, type: "service", icon: <Network className="w-5 h-5" />, pill: "staging", serviceType: "alb" },
    { id: "stg-eks", label: "EKS", x: 1000, y: 460, w: 200, h: 44, type: "service", icon: <SiKubernetes className="w-5 h-5" />, pill: "staging", serviceType: "eks" },
    { id: "stg-rds", label: "Aurora PostgreSQL", x: 1210, y: 460, w: 280, h: 44, type: "service", icon: <SiPostgresql className="w-5 h-5" />, serviceType: "rds" },
    { id: "stg-redis", label: "ElastiCache Redis", x: 1500, y: 460, w: 260, h: 44, type: "service", icon: <SiRedis className="w-5 h-5" />, serviceType: "default" },
    { id: "stg-cw", label: "CloudWatch", x: 880, y: 520, w: 140, h: 40, type: "service", icon: <SiAmazoncloudwatch className="w-5 h-5" />, serviceType: "cloudwatch" },
    { id: "stg-kms", label: "KMS", x: 1030, y: 520, w: 100, h: 40, type: "service", icon: <Key className="w-5 h-5" />, serviceType: "default" },
    { id: "stg-s3", label: "Amazon S3", x: 880, y: 575, w: 360, h: 40, type: "service", icon: <Database className="w-5 h-5" />, serviceType: "s3" },
    { id: "stg-vpc", label: "VPC (Multi-AZ)", x: 1250, y: 575, w: 290, h: 40, type: "service", icon: <Network className="w-5 h-5" />, serviceType: "default" },

    // Bottom-Right: Sandbox (CA-CENTRAL-1)
    { id: "sbx-account", label: "SANDBOX (CA-CENTRAL-1)", x: 860, y: 720, w: 920, h: 220, type: "group", region: "ca-central-1" },
    { id: "sbx-eks", label: "EKS", x: 880, y: 760, w: 190, h: 44, type: "service", icon: <SiKubernetes className="w-5 h-5" />, pill: "sandbox", serviceType: "eks" },
    { id: "sbx-rds", label: "Aurora PostgreSQL", x: 1080, y: 760, w: 280, h: 44, type: "service", icon: <SiPostgresql className="w-5 h-5" />, serviceType: "rds" },
    { id: "sbx-redis", label: "ElastiCache Redis", x: 1370, y: 760, w: 260, h: 44, type: "service", icon: <SiRedis className="w-5 h-5" />, serviceType: "default" },
    { id: "sbx-cw", label: "CloudWatch", x: 880, y: 820, w: 140, h: 40, type: "service", icon: <SiAmazoncloudwatch className="w-5 h-5" />, serviceType: "cloudwatch" },
    { id: "sbx-kms", label: "KMS", x: 1030, y: 820, w: 100, h: 40, type: "service", icon: <Key className="w-5 h-5" />, serviceType: "default" },

    // Bottom: Monitoring & Alerting
    { id: "mon-alert", label: "MONITORING & ALERTING", x: 60, y: 600, w: 740, h: 340, type: "group" },
    { id: "central-cw", label: "CloudWatch", x: 80, y: 640, w: 180, h: 50, type: "service", icon: <SiAmazoncloudwatch className="w-5 h-5" />, serviceType: "cloudwatch" },
    { id: "pagerduty", label: "PagerDuty", x: 280, y: 640, w: 150, h: 50, type: "service", icon: <SiPagerduty className="w-5 h-5" />, serviceType: "default" },
    { id: "slack", label: "Slack", x: 450, y: 640, w: 130, h: 50, type: "service", icon: <SiSlack className="w-5 h-5" />, serviceType: "default" },
    { id: "datadog", label: "Datadog", x: 600, y: 640, w: 180, h: 50, type: "service", icon: <SiDatadog className="w-5 h-5" />, serviceType: "default" },
  ];

  const edges: Edge[] = [
    // External flow
    { id: "r53-cf", from: [215, 102], to: [290, 102], color: colors.arrow, label: "user access" },
    { id: "cf-s3", from: [360, 102], to: [445, 102], color: colors.arrow, label: "static assets" },
    { id: "cf-waf", from: [445, 102], to: [600, 102], color: colors.arrow, label: "CDN traffic" },
    
    // WAF to environments
    { id: "waf-prod", from: [820, 102], to: [935, 115], color: colors.arrow, label: "live traffic" },
    { id: "waf-stg", from: [820, 102], to: [935, 482], color: colors.arrow, label: "live traffic" },
    
    // ALB to EKS
    { id: "alb-prod-eks", from: [935, 115], to: [1060, 115], color: colors.arrow, number: 1 },
    { id: "alb-stg-eks", from: [935, 482], to: [1060, 482], color: colors.arrow, number: 1 },
    
    // EKS to Databases
    { id: "eks-prod-rds", from: [1060, 115], to: [1270, 115], color: colors.arrow, number: 2 },
    { id: "eks-prod-redis", from: [1060, 115], to: [1630, 115], color: colors.arrow, number: 3 },
    { id: "eks-stg-rds", from: [1060, 482], to: [1270, 482], color: colors.arrow },
    { id: "eks-stg-redis", from: [1060, 482], to: [1630, 482], color: colors.arrow },
    { id: "eks-sbx-rds", from: [975, 782], to: [1220, 782], color: colors.arrow },
    { id: "eks-sbx-redis", from: [975, 782], to: [1500, 782], color: colors.arrow },
    
    // ArgoCD deployments (GitOps) - dashed
    { id: "argo-prod", from: [170, 355], to: [1060, 115], color: colors.arrowDashed, dash: "8 4", label: "deploy workloads" },
    { id: "argo-stg", from: [170, 355], to: [1060, 482], color: colors.arrowDashed, dash: "8 4", label: "deploy workloads" },
    { id: "argo-sbx", from: [170, 355], to: [975, 782], color: colors.arrowDashed, dash: "8 4" },
    
    // VPN connections - dashed
    { id: "vpn-prod", from: [445, 485], to: [1060, 115], color: colors.arrowDashed, dash: "8 4", label: "VPC peering" },
    { id: "vpn-stg", from: [445, 485], to: [1060, 482], color: colors.arrowDashed, dash: "8 4", label: "VPC peering" },
    { id: "vpn-sbx", from: [445, 485], to: [975, 782], color: colors.arrowDashed, dash: "8 4" },
    
    // Metrics to Monitoring Stack
    { id: "prod-mon-stack", from: [1060, 115], to: [265, 420], color: colors.arrowDashed, dash: "8 4", label: "metrics" },
    { id: "stg-mon-stack", from: [1060, 482], to: [265, 420], color: colors.arrowDashed, dash: "8 4", label: "metrics" },
    { id: "sbx-mon-stack", from: [975, 782], to: [265, 420], color: colors.arrowDashed, dash: "8 4" },
    
    // CloudWatch to Alerting - dashed
    { id: "prod-cw-alert", from: [950, 177], to: [170, 665], color: colors.arrowDashed, dash: "8 4", label: "metrics" },
    { id: "stg-cw-alert", from: [950, 540], to: [170, 665], color: colors.arrowDashed, dash: "8 4" },
    { id: "sbx-cw-alert", from: [950, 840], to: [170, 665], color: colors.arrowDashed, dash: "8 4" },
    
    // CloudWatch to PagerDuty/Slack
    { id: "cw-pagerduty", from: [170, 665], to: [355, 665], color: colors.arrow, label: "alerting" },
    { id: "cw-slack", from: [170, 665], to: [515, 665], color: colors.arrow, label: "notifications" },
    
    // Monitoring Stack to Datadog
    { id: "mon-datadog", from: [265, 420], to: [690, 665], color: colors.arrowDashed, dash: "8 4", label: "metrics" },
    
    // GuardDuty to Monitoring
    { id: "gd-mon", from: [760, 162], to: [265, 420], color: colors.arrowDashed, dash: "8 4", label: "threat detection" },
    
    // KMS encryption connections - dashed
    { id: "kms-prod-rds", from: [1080, 177], to: [1270, 115], color: colors.arrowDashed, dash: "8 4" },
    { id: "kms-prod-redis", from: [1080, 177], to: [1630, 115], color: colors.arrowDashed, dash: "8 4" },
    { id: "kms-prod-s3", from: [1080, 177], to: [1060, 237], color: colors.arrowDashed, dash: "8 4" },
  ];

  const getServiceColor = (serviceType?: string) => {
    switch (serviceType) {
      case "s3": return colors.s3;
      case "lambda": return colors.lambda;
      case "rds": return colors.rds;
      case "eks": return colors.eks;
      case "alb": return colors.alb;
      case "cloudwatch": return colors.cloudwatch;
      default: return colors.label;
    }
  };

  const renderNode = (node: Node, index: number) => {
    const isGroup = node.type === "group";
    const delay = node.delay ?? index * 0.02;
    
    if (isGroup) {
      return (
        <motion.g 
          key={node.id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay }}
        >
          <rect
            x={node.x}
            y={node.y}
            width={node.w}
            height={node.h}
            fill={colors.panel}
            stroke={colors.stroke}
            strokeWidth={1.5}
            rx={4}
          />
          <text
            x={node.x + 12}
            y={node.y + 22}
            fill={colors.label}
            fontSize={12}
            fontWeight={700}
            letterSpacing={0.5}
          >
            {node.label}
          </text>
          {node.region && (
            <text
              x={node.x + 12}
              y={node.y + 42}
              fill="#6b7280"
              fontSize={10}
              fontWeight={500}
            >
              {node.region}
            </text>
          )}
        </motion.g>
      );
    }

    const hasHighlight = node.highlight;
    const serviceColor = getServiceColor(node.serviceType);
    
    return (
      <g key={node.id}>
        {hasHighlight && (
          <motion.rect
            x={node.x - 4}
            y={node.y - 4}
            width={node.w + 8}
            height={node.h + 8}
            fill="none"
            stroke="#ec4899"
            strokeWidth={2.5}
            rx={6}
            opacity={0.6}
            animate={{
              opacity: [0.6, 0.9, 0.6],
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        )}
        
        <motion.rect
          x={node.x}
          y={node.y}
          width={node.w}
          height={node.h}
          fill={colors.bg}
          stroke={serviceColor}
          strokeWidth={hasHighlight ? 2.5 : 1.5}
          rx={6}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ 
            duration: 0.4, 
            delay,
            type: "spring",
            stiffness: 250,
            damping: 25
          }}
          style={{ cursor: "pointer", filter: hasHighlight ? "drop-shadow(0 2px 8px rgba(236,72,153,0.3))" : "none" }}
        />
        
        {node.pill && (
          <>
            <rect
              x={node.x + node.w - 50}
              y={node.y + 5}
              width={45}
              height={node.h < 42 ? 18 : 20}
              fill={
                node.pill === "prod" ? "#dc2626" :
                node.pill === "staging" ? "#f59e0b" :
                "#10b981"
              }
              rx={8}
            />
            <text
              x={node.x + node.w - 27.5}
              y={node.y + (node.h < 42 ? 17 : 19)}
              fill="white"
              fontSize={node.h < 42 ? 8 : 9}
              fontWeight={700}
              textAnchor="middle"
            >
              {node.pill.toUpperCase()}
            </text>
          </>
        )}
        
        {/* Service Icon */}
        <foreignObject x={node.x + 10} y={node.y + (node.h - 22) / 2} width={22} height={22}>
          <div className="flex items-center justify-center h-full" style={{ color: serviceColor }}>
            {node.icon}
          </div>
        </foreignObject>
        
        <text
          x={node.x + (node.icon ? 36 : 12)}
          y={node.y + node.h / 2 + 5}
          fill={colors.label}
          fontSize={node.h < 42 ? 9.5 : 10.5}
          fontWeight={hasHighlight ? 600 : 500}
        >
          {node.label}
        </text>
      </g>
    );
  };

  return (
    <div className="w-full max-w-[1800px] mx-auto rounded-xl bg-white p-8 md:p-10 overflow-hidden shadow-lg border border-gray-200">
      <svg 
        viewBox="0 0 1800 1000" 
        className="w-full h-auto"
        style={{ minHeight: '700px' }}
      >
        <rect width="100%" height="100%" fill={colors.bg} />

        {nodes.map((node, index) => renderNode(node, index))}
        {edges.map((edge) => (
          <CleanArrow key={edge.id} edge={edge} />
        ))}
      </svg>
    </div>
  );
}
