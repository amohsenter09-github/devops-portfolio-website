"use client";

import { motion } from "framer-motion";
import React from "react";
import {
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
  numberLabel?: string; // For numbered labels like "PROD 1", "PROD 2", "STAGING 1", "STAGING 2", "3", "SANDBOX"
  highlight?: boolean;
  delay?: number;
  region?: string;
};

type Edge = {
  id: string;
  from: [number, number];
  to: [number, number];
  color?: string;
  dash?: string;
  label?: string;
  type?: "solid" | "dashed"; // solid black for primary, dashed orange for secondary
};

const colors = {
  bg: "#ffffff",
  panel: "rgba(0, 0, 0, 0.03)",
  stroke: "rgba(0, 0, 0, 0.2)",
  label: "#232f3e",
  arrowSolid: "#232f3e", // Solid black arrows
  arrowDashed: "#fa8900", // Dashed orange arrows
  prodBox: "#dc2626", // Red for PROD labels
  stagingBox: "#f59e0b", // Orange for STAGING labels
  sandboxBox: "#10b981", // Green for SANDBOX labels
};

// Clean arrow component
function CleanArrow({ edge }: { edge: Edge }) {
  const { from, to, color = colors.arrowSolid, dash, label, type = "solid" } = edge;
  const markerId = `arrowhead-${edge.id}`;
  const arrowColor = type === "dashed" ? colors.arrowDashed : colors.arrowSolid;
  const strokeWidth = type === "dashed" ? 2 : 2.5;
  
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
          <path d="M0,0 L0,10 L10,5 Z" fill={arrowColor} />
        </marker>
      </defs>
      
      <line
        x1={from[0]}
        y1={from[1]}
        x2={to[0]}
        y2={to[1]}
        stroke={arrowColor}
        strokeWidth={strokeWidth}
        strokeDasharray={type === "dashed" ? (dash || "6 4") : "none"}
        markerEnd={`url(#${markerId})`}
        opacity={type === "dashed" ? 0.7 : 0.9}
      />
      
      {/* Label */}
      {label && (
        <g transform={`translate(${midX}, ${midY - 12})`}>
          <rect
            x={-label.length * 3.5}
            y={-7}
            width={label.length * 7}
            height={12}
            fill={colors.bg}
            stroke={arrowColor}
            strokeWidth="1"
            rx={2}
            opacity={0.95}
          />
          <text
            x={0}
            y={1}
            fill={colors.label}
            fontSize="8"
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
  // Much larger canvas and spacing
  const nodes: Node[] = [
    // Top: External AWS Services - Larger
    { id: "ext", label: "EXTERNAL AWS SERVICES", x: 80, y: 50, w: 600, h: 280, type: "group" },
    { id: "route53", label: "Route53", x: 100, y: 100, w: 160, h: 60, type: "service", icon: <Globe className="w-6 h-6" /> },
    { id: "api-gateway", label: "API Gateway", x: 280, y: 100, w: 180, h: 60, type: "service", icon: <Network className="w-6 h-6" /> },
    { id: "cloudfront", label: "CloudFront", x: 480, y: 100, w: 180, h: 60, type: "service", icon: <Cloud className="w-6 h-6" /> },
    { id: "s3-static", label: "Amazon S3", x: 100, y: 180, w: 180, h: 60, type: "service", icon: <Database className="w-6 h-6" /> },
    { id: "s3-portal", label: "Amazon S3", x: 300, y: 180, w: 360, h: 60, type: "service", icon: <Database className="w-6 h-6" /> },

    // Security Services - Larger
    { id: "sec", label: "SECURITY SERVICES", x: 720, y: 50, w: 360, h: 280, type: "group" },
    { id: "waf", label: "WAF", x: 740, y: 100, w: 320, h: 60, type: "service", icon: <Shield className="w-6 h-6" /> },
    { id: "guardduty", label: "GuardDuty", x: 740, y: 180, w: 320, h: 60, type: "service", icon: <Shield className="w-6 h-6" /> },

    // Left: Operations (US-WEST-2) - Much Larger
    { id: "ops-account", label: "OPERATIONS (US-WEST-2)", x: 80, y: 360, w: 500, h: 400, type: "group", region: "us-west-2" },
    { id: "argocd", label: "ArgoCD (HA)", x: 100, y: 420, w: 220, h: 65, type: "service", highlight: true, icon: <SiArgo className="w-6 h-6" /> },
    { id: "bastion-ops", label: "Bastion Hosts (m5.medium)", x: 340, y: 420, w: 220, h: 65, type: "service", icon: <Server className="w-6 h-6" /> },
    { id: "mon-stack", label: "Monitoring (Prometheus/Grafana)", x: 100, y: 510, w: 460, h: 65, type: "service", icon: <SiPrometheus className="w-6 h-6" /> },
    { id: "vpn-ops", label: "Aviatrix VPN", x: 100, y: 600, w: 460, h: 65, type: "service", icon: <Network className="w-6 h-6" /> },
    { id: "lambda-ops", label: "Lambda", x: 100, y: 690, w: 460, h: 60, type: "service", icon: <Zap className="w-6 h-6" /> },

    // Top-Right: Production (CA-CENTRAL-1) - Much Larger
    { id: "prod-account", label: "PRODUCTION (CA-CENTRAL-1)", x: 1120, y: 50, w: 1100, h: 440, type: "group", region: "ca-central-1" },
    { id: "prod-alb", label: "ALB", x: 1140, y: 120, w: 160, h: 70, type: "service", numberLabel: "PROD 1", icon: <Network className="w-6 h-6" /> },
    { id: "prod-eks", label: "EKS", x: 1320, y: 120, w: 220, h: 70, type: "service", numberLabel: "PROD 2", icon: <SiKubernetes className="w-6 h-6" /> },
    { id: "prod-rds", label: "Aurora PostgreSQL", x: 1560, y: 120, w: 320, h: 70, type: "service", numberLabel: "3", icon: <SiPostgresql className="w-6 h-6" /> },
    { id: "prod-redis", label: "ElastiCache Redis", x: 1900, y: 120, w: 280, h: 70, type: "service", icon: <SiRedis className="w-6 h-6" /> },
    { id: "prod-cw", label: "CloudWatch", x: 1140, y: 210, w: 180, h: 60, type: "service", icon: <SiAmazoncloudwatch className="w-6 h-6" /> },
    { id: "prod-kms", label: "KMS", x: 1340, y: 210, w: 140, h: 60, type: "service", icon: <Key className="w-6 h-6" /> },
    { id: "prod-s3", label: "Amazon S3", x: 1500, y: 210, w: 440, h: 60, type: "service", icon: <Database className="w-6 h-6" /> },
    { id: "prod-sns", label: "SNS", x: 1960, y: 210, w: 140, h: 60, type: "service", icon: <MessageSquare className="w-6 h-6" /> },
    { id: "prod-sqs", label: "SQS", x: 1120, y: 290, w: 140, h: 60, type: "service", icon: <Loader className="w-6 h-6" /> },
    { id: "prod-lambda", label: "Lambda Functions", x: 1280, y: 290, w: 320, h: 60, type: "service", icon: <Zap className="w-6 h-6" /> },
    { id: "prod-vpc", label: "VPC (Multi-AZ)", x: 1620, y: 290, w: 480, h: 60, type: "service", icon: <Network className="w-6 h-6" /> },

    // Mid-Right: Staging (CA-CENTRAL-1) - Larger
    { id: "stg-account", label: "STAGING (CA-CENTRAL-1)", x: 1120, y: 520, w: 1100, h: 340, type: "group", region: "ca-central-1" },
    { id: "stg-alb", label: "ALB", x: 1140, y: 580, w: 160, h: 65, type: "service", numberLabel: "STAGING 1", icon: <Network className="w-6 h-6" /> },
    { id: "stg-eks", label: "EKS", x: 1320, y: 580, w: 220, h: 65, type: "service", numberLabel: "STAGING 2", icon: <SiKubernetes className="w-6 h-6" /> },
    { id: "stg-rds", label: "Aurora PostgreSQL", x: 1560, y: 580, w: 320, h: 65, type: "service", icon: <SiPostgresql className="w-6 h-6" /> },
    { id: "stg-redis", label: "ElastiCache Redis", x: 1900, y: 580, w: 280, h: 65, type: "service", icon: <SiRedis className="w-6 h-6" /> },
    { id: "stg-cw", label: "CloudWatch", x: 1140, y: 665, w: 180, h: 55, type: "service", icon: <SiAmazoncloudwatch className="w-6 h-6" /> },
    { id: "stg-kms", label: "KMS", x: 1340, y: 665, w: 140, h: 55, type: "service", icon: <Key className="w-6 h-6" /> },
    { id: "stg-s3", label: "Amazon S3", x: 1500, y: 665, w: 440, h: 55, type: "service", icon: <Database className="w-6 h-6" /> },
    { id: "stg-vpc", label: "VPC (Multi-AZ)", x: 1960, y: 665, w: 220, h: 55, type: "service", icon: <Network className="w-6 h-6" /> },

    // Bottom-Right: Sandbox (CA-CENTRAL-1)
    { id: "sbx-account", label: "SANDBOX (CA-CENTRAL-1)", x: 1120, y: 890, w: 1100, h: 240, type: "group", region: "ca-central-1" },
    { id: "sbx-eks", label: "EKS", x: 1140, y: 940, w: 240, h: 65, type: "service", numberLabel: "SANDBOX", icon: <SiKubernetes className="w-6 h-6" /> },
    { id: "sbx-rds", label: "Aurora PostgreSQL", x: 1400, y: 940, w: 320, h: 65, type: "service", icon: <SiPostgresql className="w-6 h-6" /> },
    { id: "sbx-redis", label: "ElastiCache Redis", x: 1740, y: 940, w: 280, h: 65, type: "service", icon: <SiRedis className="w-6 h-6" /> },
    { id: "sbx-cw", label: "CloudWatch", x: 1140, y: 1025, w: 180, h: 55, type: "service", icon: <SiAmazoncloudwatch className="w-6 h-6" /> },
    { id: "sbx-kms", label: "KMS", x: 1340, y: 1025, w: 140, h: 55, type: "service", icon: <Key className="w-6 h-6" /> },

    // Bottom: Monitoring & Alerting - Larger
    { id: "mon-alert", label: "MONITORING & ALERTING", x: 80, y: 800, w: 900, h: 330, type: "group" },
    { id: "central-cw", label: "CloudWatch", x: 100, y: 860, w: 220, h: 70, type: "service", icon: <SiAmazoncloudwatch className="w-6 h-6" /> },
    { id: "pagerduty", label: "PagerDuty", x: 340, y: 860, w: 200, h: 70, type: "service", icon: <SiPagerduty className="w-6 h-6" /> },
    { id: "slack", label: "Slack", x: 560, y: 860, w: 180, h: 70, type: "service", icon: <SiSlack className="w-6 h-6" /> },
    { id: "datadog", label: "Datadog", x: 760, y: 860, w: 200, h: 70, type: "service", icon: <SiDatadog className="w-6 h-6" /> },
  ];

  const edges: Edge[] = [
    // External flow - Solid black
    { id: "r53-cf", from: [260, 130], to: [560, 130], color: colors.arrowSolid, label: "user access", type: "solid" },
    { id: "cf-s3", from: [660, 130], to: [280, 210], color: colors.arrowSolid, label: "static assets", type: "solid" },
    { id: "cf-waf", from: [660, 130], to: [900, 130], color: colors.arrowSolid, label: "CDN traffic", type: "solid" },
    
    // WAF to environments - Solid black
    { id: "waf-prod", from: [1060, 130], to: [1220, 155], color: colors.arrowSolid, label: "live traffic", type: "solid" },
    { id: "waf-stg", from: [1060, 130], to: [1220, 612], color: colors.arrowSolid, label: "live traffic", type: "solid" },
    
    // ALB to EKS - Solid black
    { id: "alb-prod-eks", from: [1300, 155], to: [1430, 155], color: colors.arrowSolid, type: "solid" },
    { id: "alb-stg-eks", from: [1300, 612], to: [1430, 612], color: colors.arrowSolid, type: "solid" },
    
    // EKS to Databases - Solid black
    { id: "eks-prod-rds", from: [1540, 155], to: [1680, 155], color: colors.arrowSolid, type: "solid" },
    { id: "rds-prod-redis", from: [1880, 155], to: [2040, 155], color: colors.arrowSolid, type: "solid" },
    { id: "eks-stg-rds", from: [1540, 612], to: [1680, 612], color: colors.arrowSolid, type: "solid" },
    { id: "rds-stg-redis", from: [1880, 612], to: [2040, 612], color: colors.arrowSolid, type: "solid" },
    { id: "eks-sbx-rds", from: [1380, 972], to: [1520, 972], color: colors.arrowSolid, type: "solid" },
    { id: "rds-sbx-redis", from: [1720, 972], to: [1880, 972], color: colors.arrowSolid, type: "solid" },
    
    // ArgoCD deployments (GitOps) - Dashed orange
    { id: "argo-prod", from: [210, 452], to: [1430, 155], color: colors.arrowDashed, label: "deploy workloads", type: "dashed" },
    { id: "argo-stg", from: [210, 452], to: [1430, 612], color: colors.arrowDashed, label: "deploy workloads", type: "dashed" },
    { id: "argo-sbx", from: [210, 452], to: [1380, 972], color: colors.arrowDashed, label: "deploy workloads", type: "dashed" },
    
    // Bastion Hosts to EKS - Dashed orange
    { id: "bastion-prod", from: [450, 452], to: [1430, 155], color: colors.arrowDashed, label: "ssh/api", type: "dashed" },
    { id: "bastion-stg", from: [450, 452], to: [1430, 612], color: colors.arrowDashed, label: "ssh/api", type: "dashed" },
    { id: "bastion-sbx", from: [450, 452], to: [1380, 972], color: colors.arrowDashed, label: "ssh/api", type: "dashed" },
    
    // VPN connections - Dashed orange
    { id: "vpn-prod", from: [360, 632], to: [2000, 320], color: colors.arrowDashed, label: "VPC peering", type: "dashed" },
    { id: "vpn-stg", from: [360, 632], to: [2000, 697], color: colors.arrowDashed, label: "VPC peering", type: "dashed" },
    
    // Monitoring Stack to EKS - Dashed orange
    { id: "mon-prod", from: [360, 542], to: [1430, 155], color: colors.arrowDashed, label: "metrics", type: "dashed" },
    { id: "mon-stg", from: [360, 542], to: [1430, 612], color: colors.arrowDashed, label: "metrics", type: "dashed" },
    { id: "mon-sbx", from: [360, 542], to: [1380, 972], color: colors.arrowDashed, label: "metrics", type: "dashed" },
    
    // Lambda (Ops) to S3 - Dashed orange
    { id: "lambda-ops-prod-s3", from: [360, 720], to: [1720, 240], color: colors.arrowDashed, label: "s3/api", type: "dashed" },
    { id: "lambda-ops-stg-s3", from: [360, 720], to: [1720, 697], color: colors.arrowDashed, label: "s3/api", type: "dashed" },
    
    // CloudWatch to Alerting - Dashed orange
    { id: "prod-cw-alert", from: [1230, 240], to: [210, 895], color: colors.arrowDashed, label: "metrics", type: "dashed" },
    { id: "stg-cw-alert", from: [1230, 697], to: [210, 895], color: colors.arrowDashed, label: "metrics", type: "dashed" },
    { id: "sbx-cw-alert", from: [1230, 1057], to: [210, 895], color: colors.arrowDashed, label: "metrics", type: "dashed" },
    
    // GuardDuty to Monitoring - Dashed orange
    { id: "gd-mon", from: [900, 210], to: [360, 542], color: colors.arrowDashed, label: "threat detection", type: "dashed" },
    
    // CloudWatch to PagerDuty - Solid black
    { id: "cw-pagerduty", from: [210, 895], to: [440, 895], color: colors.arrowSolid, label: "alerting", type: "solid" },
    
    // PagerDuty to Datadog - Solid black
    { id: "pagerduty-datadog", from: [440, 895], to: [860, 895], color: colors.arrowSolid, label: "notifications", type: "solid" },
  ];

  const renderNode = (node: Node, index: number) => {
    const isGroup = node.type === "group";
    const delay = node.delay ?? index * 0.01;
    
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
            strokeWidth={2}
            rx={6}
          />
          <text
            x={node.x + 16}
            y={node.y + 28}
            fill={colors.label}
            fontSize={14}
            fontWeight={700}
            letterSpacing={0.5}
          >
            {node.label}
          </text>
          {node.region && (
            <text
              x={node.x + 16}
              y={node.y + 52}
              fill="#6b7280"
              fontSize={11}
              fontWeight={500}
            >
              {node.region}
            </text>
          )}
        </motion.g>
      );
    }

    const hasHighlight = node.highlight;
    
    // Determine number label color
    let numberLabelColor = colors.prodBox;
    if (node.numberLabel?.includes("STAGING")) numberLabelColor = colors.stagingBox;
    if (node.numberLabel === "SANDBOX" || node.numberLabel === "3") numberLabelColor = colors.sandboxBox;
    
    return (
      <g key={node.id}>
        {hasHighlight && (
          <motion.rect
            x={node.x - 5}
            y={node.y - 5}
            width={node.w + 10}
            height={node.h + 10}
            fill="none"
            stroke="#ec4899"
            strokeWidth={3}
            rx={8}
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
        
        <rect
          x={node.x}
          y={node.y}
          width={node.w}
          height={node.h}
          fill={colors.bg}
          stroke={colors.stroke}
          strokeWidth={1.5}
          rx={6}
        />
        
        {/* Number label badge */}
        {node.numberLabel && (
          <>
            <rect
              x={node.x + node.w - 60}
              y={node.y + 8}
              width={55}
              height={node.h < 60 ? 24 : 28}
              fill={numberLabelColor}
              rx={6}
            />
            <text
              x={node.x + node.w - 32.5}
              y={node.y + (node.h < 60 ? 26 : 30)}
              fill="white"
              fontSize={node.numberLabel === "3" ? 14 : 11}
              fontWeight={700}
              textAnchor="middle"
            >
              {node.numberLabel}
            </text>
          </>
        )}
        
        {/* Service Icon */}
        <foreignObject x={node.x + 12} y={node.y + (node.h - 28) / 2} width={28} height={28}>
          <div className="flex items-center justify-center h-full" style={{ color: colors.label }}>
            {node.icon}
          </div>
        </foreignObject>
        
        <text
          x={node.x + (node.icon ? 48 : 16)}
          y={node.y + node.h / 2 + 6}
          fill={colors.label}
          fontSize={node.h < 60 ? 11 : 12}
          fontWeight={hasHighlight ? 600 : 500}
        >
          {node.label}
        </text>
      </g>
    );
  };

  return (
    <div className="w-full max-w-[2400px] mx-auto rounded-xl bg-white p-10 md:p-12 overflow-hidden shadow-lg border border-gray-200">
      <svg 
        viewBox="0 0 2400 1200" 
        className="w-full h-auto"
        style={{ minHeight: '800px' }}
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
