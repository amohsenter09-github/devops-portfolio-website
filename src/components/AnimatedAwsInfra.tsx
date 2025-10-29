"use client";

import { motion } from "framer-motion";
import React from "react";
import {
  SiAmazon,
  SiKubernetes
} from "react-icons/si";
import {
  Cloud,
  Shield,
  Database,
  Network,
  Lock,
  Server,
  Zap
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
  pill?: string; // e.g., 'prod', 'staging', 'sandbox'
  highlight?: boolean; // For important nodes like ArgoCD
  delay?: number; // Custom animation delay
  region?: string; // Region label
};

type Edge = {
  id: string;
  from: [number, number]; // x,y start
  to: [number, number];   // x,y end
  color?: string;
  speed?: number;         // lower=faster, typical 1.8–3.2
  dash?: string;          // "8 8"
};

const bg = {
  panel: "rgba(255,255,255,0.05)",
  stroke: "rgba(255,255,255,0.12)",
  label: "rgb(203 213 225)", // slate-300
};

// Animated arrow along a path
function AnimatedArrow({ edge, index }: { edge: Edge; index: number }) {
  const { from, to, color = "#22d3ee", dash = "8 8", speed = 2 } = edge;
  
  const markerId = `arrowhead-${edge.id}`;
  
  return (
    <g key={`arrow-${edge.id}`}>
      <defs>
        <marker
          id={markerId}
          markerWidth="8"
          markerHeight="8"
          refX="6"
          refY="3"
          orient="auto"
          markerUnits="strokeWidth"
        >
          <path d="M0,0 L0,6 L8,3 Z" fill={color} />
        </marker>
      </defs>
      
      {/* Static dashed line */}
      <line
        x1={from[0]}
        y1={from[1]}
        x2={to[0]}
        y2={to[1]}
        stroke={color}
        strokeWidth={2}
        strokeDasharray={dash}
        opacity={0.4}
      />
      
      {/* Animated dot moving along the line */}
      <motion.g
        initial={{ x: from[0], y: from[1] }}
        animate={{
          x: to[0],
          y: to[1],
        }}
        transition={{
          duration: speed,
          repeat: Infinity,
          ease: "linear",
          delay: index * 0.25,
        }}
      >
        <motion.circle 
          r={4} 
          fill={color}
          animate={{
            r: [4, 5, 4],
            opacity: [1, 0.8, 1],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <circle r={6} fill={color} opacity={0.3} />
      </motion.g>
      
      {/* Arrow line with marker */}
      <line
        x1={from[0]}
        y1={from[1]}
        x2={to[0]}
        y2={to[1]}
        stroke={color}
        strokeWidth={2}
        markerEnd={`url(#${markerId})`}
        opacity={0.6}
      />
    </g>
  );
}

export default function AnimatedAwsInfra() {
  // Expanded canvas for better organization: 1400x900
  // Layout:
  // Top: External (Route53, CloudFront, S3) -> Security (WAF)
  // Left: Operations Account (us-west-2) - ArgoCD, VPN, Ops
  // Center-Right: Application Accounts (ca-central-1) - Prod/Staging/Sandbox
  // Bottom: Monitoring & Alerting (CloudWatch, SNS, Lambda, Slack/PagerDuty)

  const nodes: Node[] = [
    // Top: External Access & Security
    { id: "ext", label: "EXTERNAL ACCESS", x: 50, y: 40, w: 320, h: 140, type: "group" },
    { id: "route53", label: "Route53 DNS", x: 70, y: 70, w: 85, h: 36, type: "service", icon: <Network className="w-4 h-4" /> },
    { id: "cloudfront", label: "CloudFront CDN", x: 165, y: 70, w: 110, h: 36, type: "service", icon: <Cloud className="w-4 h-4" /> },
    { id: "s3-static", label: "S3 (Static Assets)", x: 285, y: 70, w: 75, h: 36, type: "service", icon: <SiAmazon className="w-4 h-4" /> },

    { id: "sec", label: "SECURITY SERVICES", x: 390, y: 40, w: 180, h: 140, type: "group" },
    { id: "waf", label: "AWS WAF", x: 410, y: 70, w: 140, h: 36, type: "service", icon: <Shield className="w-4 h-4" /> },
    { id: "guardduty", label: "GuardDuty", x: 410, y: 115, w: 140, h: 36, type: "service", icon: <Lock className="w-4 h-4" /> },

    // Left: Operations Account (us-west-2)
    { id: "ops-account", label: "OPERATIONS ACCOUNT (us-west-2)", x: 50, y: 200, w: 300, h: 200, type: "group", region: "us-west-2" },
    { id: "ops-vpc", label: "Operations VPC", x: 70, y: 230, w: 260, h: 140, type: "group" },
    { id: "argocd", label: "ArgoCD (HA)", x: 90, y: 260, w: 120, h: 38, type: "service", highlight: true, icon: <SiKubernetes className="w-4 h-4" /> },
    { id: "vpn", label: "Aviatrix VPN", x: 220, y: 260, w: 90, h: 38, type: "service", icon: <Network className="w-4 h-4" /> },
    { id: "ops-inst", label: "Ops EC2 Instances", x: 90, y: 310, w: 220, h: 38, type: "service", icon: <Server className="w-4 h-4" /> },

    // Center-Right: Production Account (ca-central-1)
    { id: "prod-account", label: "PRODUCTION ACCOUNT (ca-central-1)", x: 600, y: 40, w: 750, h: 280, type: "group", region: "ca-central-1" },
    
    // Production Network Layer
    { id: "prod-net", label: "Network Layer", x: 620, y: 70, w: 230, h: 110, type: "group" },
    { id: "prod-alb", label: "Application Load Balancer", x: 640, y: 100, w: 110, h: 32, type: "service", icon: <Network className="w-4 h-4" />, pill: "prod" },
    { id: "prod-nat", label: "NAT Gateway", x: 760, y: 100, w: 75, h: 32, type: "service", icon: <Network className="w-4 h-4" /> },
    
    // Production Compute Layer
    { id: "prod-compute", label: "Compute Layer", x: 620, y: 190, w: 230, h: 110, type: "group" },
    { id: "prod-eks", label: "EKS Cluster (Bottlerocket)", x: 640, y: 220, w: 190, h: 36, type: "service", icon: <SiKubernetes className="w-4 h-4" />, pill: "prod" },
    { id: "prod-pods", label: "Application Pods", x: 640, y: 265, w: 90, h: 28, type: "service", icon: <SiKubernetes className="w-4 h-4" /> },
    { id: "prod-mon", label: "Prometheus/Grafana", x: 740, y: 265, w: 90, h: 28, type: "service", icon: <Zap className="w-4 h-4" /> },
    
    // Production Data Layer - Multiple Databases
    { id: "prod-data", label: "Data Layer", x: 870, y: 70, w: 240, h: 230, type: "group" },
    { id: "prod-rds1", label: "Aurora PostgreSQL", x: 890, y: 100, w: 100, h: 30, type: "service", icon: <Database className="w-4 h-4" /> },
    { id: "prod-rds2", label: "Aurora PostgreSQL", x: 1000, y: 100, w: 100, h: 30, type: "service", icon: <Database className="w-4 h-4" /> },
    { id: "prod-rds3", label: "Aurora PostgreSQL", x: 890, y: 135, w: 100, h: 30, type: "service", icon: <Database className="w-4 h-4" /> },
    { id: "prod-rds4", label: "Aurora PostgreSQL", x: 1000, y: 135, w: 100, h: 30, type: "service", icon: <Database className="w-4 h-4" /> },
    { id: "prod-redis1", label: "ElastiCache Redis", x: 890, y: 180, w: 100, h: 30, type: "service", icon: <Zap className="w-4 h-4" /> },
    { id: "prod-redis2", label: "ElastiCache Redis", x: 1000, y: 180, w: 100, h: 30, type: "service", icon: <Zap className="w-4 h-4" /> },
    { id: "prod-bastion", label: "Bastion Host", x: 890, y: 225, w: 210, h: 30, type: "service", icon: <Server className="w-4 h-4" /> },
    
    // Production Security & Monitoring
    { id: "prod-sec", label: "Security & Monitoring", x: 1130, y: 70, w: 200, h: 110, type: "group" },
    { id: "prod-cw", label: "CloudWatch", x: 1150, y: 100, w: 80, h: 32, type: "service", icon: <SiAmazon className="w-4 h-4" /> },
    { id: "prod-kms", label: "KMS", x: 1240, y: 100, w: 70, h: 32, type: "service", icon: <Lock className="w-4 h-4" /> },
    { id: "prod-acm", label: "ACM Certificates", x: 1150, y: 140, w: 160, h: 32, type: "service", icon: <Lock className="w-4 h-4" /> },

    // Staging Account (ca-central-1)
    { id: "stg-account", label: "STAGING ACCOUNT (ca-central-1)", x: 600, y: 340, w: 750, h: 200, type: "group", region: "ca-central-1" },
    { id: "stg-net", label: "Network", x: 620, y: 370, w: 110, h: 80, type: "group" },
    { id: "stg-alb", label: "ALB", x: 640, y: 395, w: 70, h: 28, type: "service", icon: <Network className="w-4 h-4" />, pill: "staging" },
    { id: "stg-compute", label: "Compute", x: 750, y: 370, w: 110, h: 80, type: "group" },
    { id: "stg-eks", label: "EKS Cluster", x: 770, y: 395, w: 70, h: 28, type: "service", icon: <SiKubernetes className="w-4 h-4" />, pill: "staging" },
    { id: "stg-data", label: "Data", x: 880, y: 370, w: 110, h: 80, type: "group" },
    { id: "stg-rds", label: "Aurora PostgreSQL", x: 900, y: 395, w: 70, h: 28, type: "service", icon: <Database className="w-4 h-4" /> },
    { id: "stg-redis", label: "ElastiCache Redis", x: 900, y: 430, w: 70, h: 28, type: "service", icon: <Zap className="w-4 h-4" /> },
    { id: "stg-mon", label: "Monitoring", x: 1010, y: 370, w: 110, h: 80, type: "group" },
    { id: "stg-cw", label: "CloudWatch", x: 1030, y: 395, w: 70, h: 28, type: "service", icon: <SiAmazon className="w-4 h-4" /> },

    // Sandbox Account (ca-central-1)
    { id: "sbx-account", label: "SANDBOX ACCOUNT (ca-central-1)", x: 600, y: 560, w: 750, h: 160, type: "group", region: "ca-central-1" },
    { id: "sbx-eks", label: "EKS Cluster", x: 620, y: 590, w: 90, h: 32, type: "service", icon: <SiKubernetes className="w-4 h-4" />, pill: "sandbox" },
    { id: "sbx-rds", label: "Aurora PostgreSQL", x: 730, y: 590, w: 90, h: 32, type: "service", icon: <Database className="w-4 h-4" /> },
    { id: "sbx-cw", label: "CloudWatch", x: 840, y: 590, w: 80, h: 32, type: "service", icon: <SiAmazon className="w-4 h-4" /> },

    // Bottom: Monitoring & Alerting (Centralized)
    { id: "mon-account", label: "MONITORING & ALERTING", x: 50, y: 420, w: 480, h: 300, type: "group" },
    { id: "central-cw", label: "CloudWatch (Centralized)", x: 70, y: 450, w: 140, h: 36, type: "service", icon: <SiAmazon className="w-4 h-4" /> },
    { id: "sns", label: "SNS Topics", x: 230, y: 450, w: 110, h: 36, type: "service", icon: <SiAmazon className="w-4 h-4" /> },
    { id: "lambda", label: "Lambda (CloudWatch → Slack)", x: 360, y: 450, w: 160, h: 36, type: "service", icon: <Zap className="w-4 h-4" /> },
    { id: "s3-logs", label: "S3 (Logs/Archival)", x: 70, y: 500, w: 120, h: 36, type: "service", icon: <SiAmazon className="w-4 h-4" /> },
    
    // External Integrations
    { id: "ext-int", label: "EXTERNAL INTEGRATIONS", x: 70, y: 560, w: 440, h: 140, type: "group" },
    { id: "github", label: "GitHub Actions", x: 90, y: 590, w: 110, h: 32, type: "service", icon: <Server className="w-4 h-4" /> },
    { id: "slack", label: "Slack Webhooks", x: 220, y: 590, w: 110, h: 32, type: "service", icon: <Zap className="w-4 h-4" /> },
    { id: "pagerduty", label: "PagerDuty", x: 350, y: 590, w: 110, h: 32, type: "service", icon: <Shield className="w-4 h-4" /> },
  ];

  const edges: Edge[] = [
    // External flow (blue - traffic)
    { id: "r53-cf", from: [155, 88], to: [220, 88], color: "#22d3ee", dash: "8 8", speed: 2 },
    { id: "cf-s3", from: [275, 88], to: [320, 88], color: "#22d3ee", dash: "8 8", speed: 2 },
    { id: "s3-waf", from: [360, 88], to: [460, 88], color: "#22d3ee", dash: "8 8", speed: 2 },

    // WAF -> Production ALB (traffic flow)
    { id: "waf-prod", from: [580, 88], to: [695, 116], color: "#22d3ee", dash: "8 8", speed: 2.2 },
    // WAF -> Staging ALB
    { id: "waf-stg", from: [580, 88], to: [675, 409], color: "#22d3ee", dash: "8 8", speed: 2.2 },

    // ALB -> EKS (application flow)
    { id: "alb-prod-eks", from: [695, 116], to: [735, 238], color: "#60a5fa", dash: "8 8", speed: 2.5 },
    { id: "alb-stg-eks", from: [675, 409], to: [805, 409], color: "#60a5fa", dash: "8 8", speed: 2.5 },

    // EKS -> Databases (data access)
    { id: "eks-prod-rds1", from: [830, 238], to: [940, 115], color: "#60a5fa", dash: "8 8", speed: 2.5 },
    { id: "eks-prod-rds2", from: [830, 238], to: [1050, 115], color: "#60a5fa", dash: "8 8", speed: 2.5 },
    { id: "eks-prod-redis", from: [830, 238], to: [945, 195], color: "#60a5fa", dash: "8 8", speed: 2.8 },
    { id: "eks-stg-rds", from: [805, 409], to: [935, 409], color: "#60a5fa", dash: "8 8", speed: 2.5 },
    { id: "eks-stg-redis", from: [805, 409], to: [935, 448], color: "#60a5fa", dash: "8 8", speed: 2.8 },
    { id: "eks-sbx-rds", from: [665, 606], to: [775, 606], color: "#60a5fa", dash: "8 8", speed: 2.5 },

    // ArgoCD -> All EKS clusters (purple - GitOps deployments)
    { id: "argo-prod", from: [150, 279], to: [735, 238], color: "#a78bfa", dash: "6 6", speed: 1.8 },
    { id: "argo-stg", from: [150, 279], to: [805, 409], color: "#a78bfa", dash: "6 6", speed: 1.8 },
    { id: "argo-sbx", from: [150, 279], to: [665, 606], color: "#a78bfa", dash: "6 6", speed: 1.8 },

    // GitHub -> Production (CI/CD)
    { id: "gh-prod", from: [145, 606], to: [735, 238], color: "#8b5cf6", dash: "6 6", speed: 2.5 },

    // Monitoring flows (gray - logs/metrics)
    { id: "prod-cw-central", from: [1190, 116], to: [140, 468], color: "#94a3b8", dash: "8 8", speed: 2.6 },
    { id: "stg-cw-central", from: [1065, 409], to: [140, 468], color: "#94a3b8", dash: "8 8", speed: 2.6 },
    { id: "sbx-cw-central", from: [880, 606], to: [140, 468], color: "#94a3b8", dash: "8 8", speed: 2.6 },
    { id: "prom-prod-cw", from: [785, 279], to: [1190, 116], color: "#94a3b8", dash: "8 8", speed: 2.8 },

    // CloudWatch -> SNS -> Lambda -> Slack (alerting chain)
    { id: "cw-sns", from: [210, 468], to: [285, 468], color: "#f59e0b", dash: "8 8", speed: 2.4 },
    { id: "sns-lambda", from: [340, 468], to: [440, 468], color: "#f59e0b", dash: "8 8", speed: 2.4 },
    { id: "lambda-slack", from: [520, 468], to: [275, 606], color: "#f59e0b", dash: "8 8", speed: 2.2 },
    { id: "cw-pagerduty", from: [210, 468], to: [405, 606], color: "#f59e0b", dash: "8 8", speed: 2.4 },
    
    // Central CloudWatch -> S3 logs (archival)
    { id: "cw-s3logs", from: [140, 468], to: [130, 518], color: "#94a3b8", dash: "8 8", speed: 2.4 },
  ];

  // Render a node
  const renderNode = (node: Node, index: number) => {
    const isGroup = node.type === "group";
    const delay = node.delay ?? index * 0.04;
    
    if (isGroup) {
      return (
        <motion.g 
          key={node.id}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay }}
        >
          <rect
            x={node.x}
            y={node.y}
            width={node.w}
            height={node.h}
            fill={bg.panel}
            stroke={bg.stroke}
            strokeWidth={1.5}
            rx={6}
          />
          <text
            x={node.x + 10}
            y={node.y + 18}
            fill={bg.label}
            fontSize={11}
            fontWeight={700}
            letterSpacing={0.8}
          >
            {node.label}
          </text>
          {node.region && (
            <text
              x={node.x + 10}
              y={node.y + 35}
              fill="rgba(203,213,225,0.6)"
              fontSize={9}
              fontWeight={500}
              letterSpacing={0.5}
            >
              {node.region}
            </text>
          )}
        </motion.g>
      );
    }

    // Service node
    const hasHighlight = node.highlight;
    
    return (
      <g key={node.id}>
        {/* Glow effect for highlighted nodes */}
        {hasHighlight && (
          <motion.rect
            x={node.x - 2}
            y={node.y - 2}
            width={node.w + 4}
            height={node.h + 4}
            fill="none"
            stroke="#a78bfa"
            strokeWidth={2}
            rx={8}
            opacity={0.4}
            animate={{
              opacity: [0.4, 0.7, 0.4],
            }}
            transition={{
              duration: 2,
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
          fill={hasHighlight ? "rgba(167,139,250,0.15)" : "rgba(255,255,255,0.08)"}
          stroke={hasHighlight ? "#a78bfa" : bg.stroke}
          strokeWidth={hasHighlight ? 1.5 : 1}
          rx={6}
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ 
            duration: 0.5, 
            delay,
            type: "spring",
            stiffness: 200,
            damping: 15
          }}
          whileHover={{ 
            stroke: hasHighlight ? "#c4b5fd" : "#a78bfa",
            strokeWidth: hasHighlight ? 2.5 : 2,
            fill: hasHighlight ? "rgba(167,139,250,0.25)" : "rgba(255,255,255,0.15)",
            filter: "drop-shadow(0 0 8px rgba(167,139,250,0.5))"
          }}
          style={{ cursor: "pointer" }}
        />
        
        {/* Pill badge */}
        {node.pill && (
          <>
            <motion.rect
              x={node.x + node.w - 48}
              y={node.y + 4}
              width={44}
              height={node.h < 32 ? 16 : 18}
              fill={
                node.pill === "prod" ? "#ef4444" :
                node.pill === "staging" ? "#f59e0b" :
                "#10b981"
              }
              rx={9}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ 
                delay: delay + 0.2,
                type: "spring",
                stiffness: 300,
                damping: 20
              }}
            />
            <text
              x={node.x + node.w - 26}
              y={node.y + (node.h < 32 ? 13 : 16)}
              fill="white"
              fontSize={node.h < 32 ? 8 : 9}
              fontWeight={700}
              textAnchor="middle"
            >
              {node.pill.toUpperCase()}
            </text>
          </>
        )}
        
        {/* Icon */}
        {node.icon && (
          <foreignObject x={node.x + 6} y={node.y + (node.h - 16) / 2} width={16} height={16}>
            <div className="text-gray-300 flex items-center justify-center">
              {node.icon}
            </div>
          </foreignObject>
        )}
        
        {/* Label */}
        <text
          x={node.x + (node.icon ? 26 : 8)}
          y={node.y + node.h / 2 + 5}
          fill={bg.label}
          fontSize={node.h < 32 ? 9 : 10}
          fontWeight={hasHighlight ? 600 : 500}
        >
          {node.label}
        </text>
      </g>
    );
  };

  return (
    <div className="w-full max-w-[1400px] mx-auto rounded-2xl bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900 p-6 md:p-8 overflow-hidden shadow-2xl border border-slate-800/50">
      <svg 
        viewBox="0 0 1400 900" 
        className="w-full h-auto"
        style={{ minHeight: '600px' }}
      >
        <defs>
          {/* Arrow markers */}
          <marker
            id="arrow-cyan"
            markerWidth="8"
            markerHeight="8"
            refX="6"
            refY="3"
            orient="auto"
            markerUnits="strokeWidth"
          >
            <path d="M0,0 L0,6 L8,3 Z" fill="#22d3ee" />
          </marker>
          <marker
            id="arrow-purple"
            markerWidth="8"
            markerHeight="8"
            refX="6"
            refY="3"
            orient="auto"
            markerUnits="strokeWidth"
          >
            <path d="M0,0 L0,6 L8,3 Z" fill="#a78bfa" />
          </marker>
          <marker
            id="arrow-blue"
            markerWidth="8"
            markerHeight="8"
            refX="6"
            refY="3"
            orient="auto"
            markerUnits="strokeWidth"
          >
            <path d="M0,0 L0,6 L8,3 Z" fill="#60a5fa" />
          </marker>
          <marker
            id="arrow-gray"
            markerWidth="8"
            markerHeight="8"
            refX="6"
            refY="3"
            orient="auto"
            markerUnits="strokeWidth"
          >
            <path d="M0,0 L0,6 L8,3 Z" fill="#94a3b8" />
          </marker>
          <marker
            id="arrow-orange"
            markerWidth="8"
            markerHeight="8"
            refX="6"
            refY="3"
            orient="auto"
            markerUnits="strokeWidth"
          >
            <path d="M0,0 L0,6 L8,3 Z" fill="#f59e0b" />
          </marker>
        </defs>

        {/* Background grid */}
        <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
          <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255,255,255,0.03)" strokeWidth="0.5" />
        </pattern>
        <rect width="100%" height="100%" fill="url(#grid)" opacity={0.6} />
        
        {/* Radial gradients for ambiance */}
        <radialGradient id="ambient-glow" cx="50%" cy="50%">
          <stop offset="0%" stopColor="rgba(167,139,250,0.1)" />
          <stop offset="100%" stopColor="rgba(167,139,250,0)" />
        </radialGradient>
        <rect width="100%" height="100%" fill="url(#ambient-glow)" opacity={0.3} />

        {/* Render all nodes */}
        {nodes.map((node, index) => renderNode(node, index))}

        {/* Render all animated edges */}
        {edges.map((edge, index) => (
          <AnimatedArrow key={edge.id} edge={edge} index={index} />
        ))}
      </svg>
    </div>
  );
}
