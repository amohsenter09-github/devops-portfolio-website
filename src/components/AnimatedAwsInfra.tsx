"use client";

import { motion } from "framer-motion";
import React from "react";
import {
  SiAmazon,
  SiAmazoncloudwatch,
  SiKubernetes,
  SiPrometheus,
  SiGrafana,
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
  Database,
  Network,
  Lock,
  Server,
  Zap,
  Globe,
  Key
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
};

type Edge = {
  id: string;
  from: [number, number];
  to: [number, number];
  color?: string;
  speed?: number;
  dash?: string;
  label?: string;
};

const bg = {
  panel: "rgba(255,255,255,0.05)",
  stroke: "rgba(255,255,255,0.12)",
  label: "rgb(203 213 225)",
};

// Enhanced animated arrow with clearer movement
function AnimatedArrow({ edge, index }: { edge: Edge; index: number }) {
  const { from, to, color = "#22d3ee", dash = "8 8", speed = 3, label } = edge;
  const markerId = `arrowhead-${edge.id}`;
  
  // Calculate midpoint for label
  const midX = (from[0] + to[0]) / 2;
  const midY = (from[1] + to[1]) / 2;
  
  // Calculate angle for label positioning
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
          refX="7"
          refY="4"
          orient="auto"
          markerUnits="strokeWidth"
        >
          <path d="M0,0 L0,8 L10,4 Z" fill={color} />
        </marker>
      </defs>
      
      {/* Static dashed line - more visible */}
      <line
        x1={from[0]}
        y1={from[1]}
        x2={to[0]}
        y2={to[1]}
        stroke={color}
        strokeWidth={2.5}
        strokeDasharray={dash}
        opacity={0.5}
      />
      
      {/* Multiple animated dots for clearer movement */}
      {[0, 0.33, 0.66].map((offset, i) => (
        <motion.g
          key={i}
          initial={{ x: from[0], y: from[1] }}
          animate={{ x: to[0], y: to[1] }}
          transition={{
            duration: speed,
            repeat: Infinity,
            ease: "linear",
            delay: index * 0.3 + offset * speed,
          }}
        >
          <motion.circle 
            r={5}
            fill={color}
            animate={{
              r: [5, 6.5, 5],
              opacity: [1, 0.9, 1],
            }}
            transition={{
              duration: 1.2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <circle r={8} fill={color} opacity={0.25} />
        </motion.g>
      ))}
      
      {/* Arrow line with marker */}
      <line
        x1={from[0]}
        y1={from[1]}
        x2={to[0]}
        y2={to[1]}
        stroke={color}
        strokeWidth={2.5}
        markerEnd={`url(#${markerId})`}
        opacity={0.7}
      />
      
      {/* Enhanced connection label */}
      {label && (
        <g transform={`translate(${midX}, ${midY}) rotate(${angle})`}>
          <rect
            x={-label.length * 3.5}
            y={-10}
            width={label.length * 7}
            height={16}
            fill="rgba(15, 23, 42, 0.95)"
            rx={4}
            stroke={color}
            strokeWidth={1.5}
            opacity={0.95}
          />
          <text
            x={0}
            y={3}
            fill={bg.label}
            fontSize={10}
            fontWeight={600}
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
  // Expanded canvas: 1800x1000 for better clarity
  const nodes: Node[] = [
    // Top: External AWS Services (scaled up)
    { id: "ext", label: "EXTERNAL AWS SERVICES", x: 60, y: 40, w: 420, h: 200, type: "group" },
    { id: "route53", label: "Route53", x: 80, y: 80, w: 120, h: 45, type: "service", icon: <Globe className="w-5 h-5" /> },
    { id: "cloudfront", label: "CloudFront", x: 210, y: 80, w: 130, h: 45, type: "service", icon: <Cloud className="w-5 h-5" /> },
    { id: "s3-static", label: "S3 (static assets)", x: 350, y: 80, w: 120, h: 45, type: "service", icon: <SiAmazon className="w-5 h-5" /> },
    { id: "s3-portal", label: "portal-admin-app-production", x: 80, y: 140, w: 390, h: 38, type: "service", icon: <SiAmazon className="w-5 h-5" /> },

    // Security Services (larger)
    { id: "sec", label: "SECURITY SERVICES", x: 500, y: 40, w: 240, h: 200, type: "group" },
    { id: "waf", label: "WAF", x: 520, y: 80, w: 200, h: 45, type: "service", icon: <Shield className="w-5 h-5" /> },
    { id: "guardduty", label: "GuardDuty", x: 520, y: 140, w: 200, h: 45, type: "service", icon: <Shield className="w-5 h-5" /> },

    // Left: Operations (US-WEST-2) - larger
    { id: "ops-account", label: "OPERATIONS (US-WEST-2)", x: 60, y: 260, w: 380, h: 280, type: "group", region: "us-west-2" },
    { id: "argocd", label: "ArgoCD (HA)", x: 80, y: 310, w: 170, h: 48, type: "service", highlight: true, icon: <SiArgo className="w-5 h-5" /> },
    { id: "bastion-ops", label: "Bastion Hosts (m5.medium)", x: 260, y: 310, w: 170, h: 48, type: "service", icon: <Server className="w-5 h-5" /> },
    { id: "mon-stack", label: "Monitoring Stack (Prometheus/Grafana)", x: 80, y: 375, w: 350, h: 48, type: "service", icon: <SiPrometheus className="w-5 h-5" /> },
    { id: "vpn-ops", label: "Aviatrix VPN", x: 80, y: 440, w: 350, h: 48, type: "service", icon: <Network className="w-5 h-5" /> },

    // Top-Right: Production (CA-CENTRAL-1) - larger and better organized
    { id: "prod-account", label: "PRODUCTION (CA-CENTRAL-1)", x: 860, y: 40, w: 880, h: 340, type: "group", region: "ca-central-1" },
    { id: "prod-alb", label: "ALB", x: 880, y: 90, w: 100, h: 48, type: "service", icon: <Network className="w-5 h-5" />, pill: "prod" },
    { id: "prod-eks", label: "EKS (m5.xlarge x3)", x: 990, y: 90, w: 180, h: 48, type: "service", icon: <SiKubernetes className="w-5 h-5" />, pill: "prod" },
    { id: "prod-rds", label: "Aurora PostgreSQL (db.r6g.large x3)", x: 1180, y: 90, w: 260, h: 48, type: "service", icon: <SiPostgresql className="w-5 h-5" /> },
    { id: "prod-redis", label: "Redis (cache.r6g.large x3)", x: 1450, y: 90, w: 250, h: 48, type: "service", icon: <SiRedis className="w-5 h-5" /> },
    { id: "prod-cw", label: "CloudWatch", x: 880, y: 155, w: 130, h: 42, type: "service", icon: <SiAmazoncloudwatch className="w-5 h-5" /> },
    { id: "prod-kms", label: "KMS", x: 1020, y: 155, w: 90, h: 42, type: "service", icon: <Key className="w-5 h-5" /> },
    { id: "prod-s3", label: "S3 (api-internal-files-production)", x: 880, y: 210, w: 340, h: 42, type: "service", icon: <SiAmazon className="w-5 h-5" /> },

    // Mid-Right: Staging (CA-CENTRAL-1) - larger
    { id: "stg-account", label: "STAGING (CA-CENTRAL-1)", x: 860, y: 400, w: 880, h: 260, type: "group", region: "ca-central-1" },
    { id: "stg-alb", label: "ALB", x: 880, y: 440, w: 100, h: 42, type: "service", icon: <Network className="w-5 h-5" />, pill: "staging" },
    { id: "stg-eks", label: "EKS (m5.xlarge x3)", x: 990, y: 440, w: 180, h: 42, type: "service", icon: <SiKubernetes className="w-5 h-5" />, pill: "staging" },
    { id: "stg-rds", label: "Aurora PostgreSQL (db.t3.medium x1)", x: 1180, y: 440, w: 260, h: 42, type: "service", icon: <SiPostgresql className="w-5 h-5" /> },
    { id: "stg-redis", label: "Redis (cache.t3.medium x1)", x: 1450, y: 440, w: 250, h: 42, type: "service", icon: <SiRedis className="w-5 h-5" /> },
    { id: "stg-cw", label: "CloudWatch", x: 880, y: 495, w: 130, h: 38, type: "service", icon: <SiAmazoncloudwatch className="w-5 h-5" /> },
    { id: "stg-kms", label: "KMS", x: 1020, y: 495, w: 90, h: 38, type: "service", icon: <Key className="w-5 h-5" /> },
    { id: "stg-s3", label: "S3 (api-internal-files-staging)", x: 880, y: 545, w: 340, h: 38, type: "service", icon: <SiAmazon className="w-5 h-5" /> },

    // Bottom-Right: Sandbox (CA-CENTRAL-1) - larger
    { id: "sbx-account", label: "SANDBOX (CA-CENTRAL-1)", x: 860, y: 680, w: 880, h: 200, type: "group", region: "ca-central-1" },
    { id: "sbx-eks", label: "EKS (t3.medium x2)", x: 880, y: 720, w: 170, h: 42, type: "service", icon: <SiKubernetes className="w-5 h-5" />, pill: "sandbox" },
    { id: "sbx-rds", label: "Aurora PostgreSQL (db.t3.small x1)", x: 1060, y: 720, w: 260, h: 42, type: "service", icon: <SiPostgresql className="w-5 h-5" /> },
    { id: "sbx-redis", label: "Redis (cache.t3.small x1)", x: 1330, y: 720, w: 250, h: 42, type: "service", icon: <SiRedis className="w-5 h-5" /> },
    { id: "sbx-cw", label: "CloudWatch", x: 880, y: 775, w: 130, h: 38, type: "service", icon: <SiAmazoncloudwatch className="w-5 h-5" /> },
    { id: "sbx-kms", label: "KMS", x: 1020, y: 775, w: 90, h: 38, type: "service", icon: <Key className="w-5 h-5" /> },

    // Bottom: Monitoring & Alerting - larger
    { id: "mon-alert", label: "MONITORING & ALERTING", x: 60, y: 560, w: 680, h: 320, type: "group" },
    { id: "central-cw", label: "CloudWatch", x: 80, y: 600, w: 160, h: 48, type: "service", icon: <SiAmazoncloudwatch className="w-5 h-5" /> },
    { id: "pagerduty", label: "PagerDuty", x: 260, y: 600, w: 140, h: 48, type: "service", icon: <SiPagerduty className="w-5 h-5" /> },
    { id: "slack", label: "Slack", x: 420, y: 600, w: 120, h: 48, type: "service", icon: <SiSlack className="w-5 h-5" /> },
    { id: "datadog", label: "Datadog", x: 560, y: 600, w: 160, h: 48, type: "service", icon: <SiDatadog className="w-5 h-5" /> },
  ];

  const edges: Edge[] = [
    // External flow with labels (slower speeds for clarity)
    { id: "r53-cf", from: [200, 102], to: [275, 102], color: "#22d3ee", dash: "10 8", speed: 3.5, label: "user access" },
    { id: "cf-s3", from: [340, 102], to: [410, 102], color: "#22d3ee", dash: "10 8", speed: 3.5, label: "static assets" },
    { id: "cf-waf", from: [410, 102], to: [580, 102], color: "#22d3ee", dash: "10 8", speed: 3.5, label: "CDN traffic" },
    
    // WAF to environments (clearer)
    { id: "waf-prod", from: [740, 102], to: [930, 114], color: "#22d3ee", dash: "10 8", speed: 4, label: "live traffic" },
    { id: "waf-stg", from: [740, 102], to: [930, 461], color: "#22d3ee", dash: "10 8", speed: 4, label: "live traffic" },
    
    // ALB to EKS (clearer movement)
    { id: "alb-prod-eks", from: [930, 114], to: [1050, 114], color: "#60a5fa", dash: "10 8", speed: 3.8, label: "app data" },
    { id: "alb-stg-eks", from: [930, 461], to: [1050, 461], color: "#60a5fa", dash: "10 8", speed: 3.8, label: "app data" },
    
    // EKS to Databases (clearer)
    { id: "eks-prod-rds", from: [1050, 114], to: [1240, 114], color: "#60a5fa", dash: "10 8", speed: 3.8, label: "app data" },
    { id: "eks-prod-redis", from: [1050, 114], to: [1575, 114], color: "#60a5fa", dash: "10 8", speed: 4.2, label: "cache" },
    { id: "eks-stg-rds", from: [1050, 461], to: [1240, 461], color: "#60a5fa", dash: "10 8", speed: 3.8, label: "app data" },
    { id: "eks-stg-redis", from: [1050, 461], to: [1575, 461], color: "#60a5fa", dash: "10 8", speed: 4.2, label: "cache" },
    { id: "eks-sbx-rds", from: [965, 741], to: [1195, 741], color: "#60a5fa", dash: "10 8", speed: 3.8, label: "app data" },
    { id: "eks-sbx-redis", from: [965, 741], to: [1505, 741], color: "#60a5fa", dash: "10 8", speed: 4.2, label: "cache" },
    
    // ArgoCD deployments (GitOps - clearer)
    { id: "argo-prod", from: [165, 334], to: [1050, 114], color: "#a78bfa", dash: "8 6", speed: 3, label: "deploy workloads" },
    { id: "argo-stg", from: [165, 334], to: [1050, 461], color: "#a78bfa", dash: "8 6", speed: 3, label: "deploy workloads" },
    { id: "argo-sbx", from: [165, 334], to: [965, 741], color: "#a78bfa", dash: "8 6", speed: 3, label: "deploy workloads" },
    
    // VPN connections (clearer)
    { id: "vpn-prod", from: [425, 464], to: [1050, 114], color: "#8b5cf6", dash: "8 6", speed: 3.5, label: "VPC peering" },
    { id: "vpn-stg", from: [425, 464], to: [1050, 461], color: "#8b5cf6", dash: "8 6", speed: 3.5, label: "VPC peering" },
    { id: "vpn-sbx", from: [425, 464], to: [965, 741], color: "#8b5cf6", dash: "8 6", speed: 3.5, label: "VPC peering" },
    
    // GuardDuty to Monitoring
    { id: "gd-mon", from: [680, 162], to: [255, 399], color: "#ef4444", dash: "10 8", speed: 3.8, label: "threat detection" },
    
    // Metrics to Monitoring Stack (clearer)
    { id: "prod-mon-stack", from: [1050, 114], to: [255, 399], color: "#10b981", dash: "10 8", speed: 4, label: "metrics" },
    { id: "stg-mon-stack", from: [1050, 461], to: [255, 399], color: "#10b981", dash: "10 8", speed: 4, label: "metrics" },
    { id: "sbx-mon-stack", from: [965, 741], to: [255, 399], color: "#10b981", dash: "10 8", speed: 4, label: "metrics" },
    
    // CloudWatch to Alerting (clearer)
    { id: "prod-cw-alert", from: [945, 176], to: [160, 624], color: "#94a3b8", dash: "10 8", speed: 4.2, label: "metrics" },
    { id: "stg-cw-alert", from: [945, 514], to: [160, 624], color: "#94a3b8", dash: "10 8", speed: 4.2, label: "metrics" },
    { id: "sbx-cw-alert", from: [945, 794], to: [160, 624], color: "#94a3b8", dash: "10 8", speed: 4.2, label: "metrics" },
    
    // CloudWatch to PagerDuty/Slack (clearer)
    { id: "cw-pagerduty", from: [160, 624], to: [330, 624], color: "#f59e0b", dash: "10 8", speed: 3.8, label: "alerting" },
    { id: "cw-slack", from: [160, 624], to: [480, 624], color: "#f59e0b", dash: "10 8", speed: 3.8, label: "notifications" },
    
    // Monitoring Stack to Datadog
    { id: "mon-datadog", from: [255, 399], to: [640, 624], color: "#10b981", dash: "10 8", speed: 4, label: "metrics" },
    
    // KMS encryption connections
    { id: "kms-prod-rds", from: [1065, 176], to: [1240, 114], color: "#8b5cf6", dash: "8 6", speed: 3.5 },
    { id: "kms-prod-redis", from: [1065, 176], to: [1575, 114], color: "#8b5cf6", dash: "8 6", speed: 3.5 },
    { id: "kms-prod-s3", from: [1065, 176], to: [1050, 231], color: "#8b5cf6", dash: "8 6", speed: 3.5 },
  ];

  const renderNode = (node: Node, index: number) => {
    const isGroup = node.type === "group";
    const delay = node.delay ?? index * 0.03;
    
    if (isGroup) {
      return (
        <motion.g 
          key={node.id}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay }}
        >
          <rect
            x={node.x}
            y={node.y}
            width={node.w}
            height={node.h}
            fill={bg.panel}
            stroke={bg.stroke}
            strokeWidth={2}
            rx={8}
          />
          <text
            x={node.x + 12}
            y={node.y + 24}
            fill={bg.label}
            fontSize={13}
            fontWeight={700}
            letterSpacing={1}
          >
            {node.label}
          </text>
          {node.region && (
            <text
              x={node.x + 12}
              y={node.y + 45}
              fill="rgba(203,213,225,0.7)"
              fontSize={11}
              fontWeight={500}
              letterSpacing={0.6}
            >
              {node.region}
            </text>
          )}
        </motion.g>
      );
    }

    const hasHighlight = node.highlight;
    
    return (
      <g key={node.id}>
        {hasHighlight && (
          <motion.rect
            x={node.x - 3}
            y={node.y - 3}
            width={node.w + 6}
            height={node.h + 6}
            fill="none"
            stroke="#a78bfa"
            strokeWidth={3}
            rx={10}
            opacity={0.5}
            animate={{
              opacity: [0.5, 0.8, 0.5],
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
          fill={hasHighlight ? "rgba(167,139,250,0.18)" : "rgba(255,255,255,0.1)"}
          stroke={hasHighlight ? "#a78bfa" : bg.stroke}
          strokeWidth={hasHighlight ? 2 : 1.5}
          rx={8}
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ 
            duration: 0.6, 
            delay,
            type: "spring",
            stiffness: 180,
            damping: 18
          }}
          whileHover={{ 
            stroke: hasHighlight ? "#c4b5fd" : "#a78bfa",
            strokeWidth: hasHighlight ? 3 : 2.5,
            fill: hasHighlight ? "rgba(167,139,250,0.3)" : "rgba(255,255,255,0.18)",
            filter: "drop-shadow(0 0 12px rgba(167,139,250,0.6))"
          }}
          style={{ cursor: "pointer" }}
        />
        
        {node.pill && (
          <>
            <motion.rect
              x={node.x + node.w - 55}
              y={node.y + 5}
              width={50}
              height={node.h < 42 ? 20 : 22}
              fill={
                node.pill === "prod" ? "#ef4444" :
                node.pill === "staging" ? "#f59e0b" :
                "#10b981"
              }
              rx={10}
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
              x={node.x + node.w - 30}
              y={node.y + (node.h < 42 ? 19 : 22)}
              fill="white"
              fontSize={node.h < 42 ? 9 : 10}
              fontWeight={700}
              textAnchor="middle"
            >
              {node.pill.toUpperCase()}
            </text>
          </>
        )}
        
        {node.icon && (
          <foreignObject x={node.x + 8} y={node.y + (node.h - 20) / 2} width={20} height={20}>
            <div className="text-gray-300 flex items-center justify-center">
              {node.icon}
            </div>
          </foreignObject>
        )}
        
        <text
          x={node.x + (node.icon ? 32 : 12)}
          y={node.y + node.h / 2 + 6}
          fill={bg.label}
          fontSize={node.h < 42 ? 10 : 11}
          fontWeight={hasHighlight ? 600 : 500}
        >
          {node.label}
        </text>
      </g>
    );
  };

  return (
    <div className="w-full max-w-[1800px] mx-auto rounded-2xl bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900 p-8 md:p-10 overflow-hidden shadow-2xl border border-slate-800/50">
      <svg 
        viewBox="0 0 1800 1000" 
        className="w-full h-auto"
        style={{ minHeight: '700px' }}
      >
        <defs>
          <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
            <path d="M 50 0 L 0 0 0 50" fill="none" stroke="rgba(255,255,255,0.04)" strokeWidth="0.8" />
          </pattern>
          <radialGradient id="ambient-glow" cx="50%" cy="50%">
            <stop offset="0%" stopColor="rgba(167,139,250,0.12)" />
            <stop offset="100%" stopColor="rgba(167,139,250,0)" />
          </radialGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>

        <rect width="100%" height="100%" fill="url(#grid)" opacity={0.7} />
        <rect width="100%" height="100%" fill="url(#ambient-glow)" opacity={0.4} />

        {nodes.map((node, index) => renderNode(node, index))}
        {edges.map((edge, index) => (
          <AnimatedArrow key={edge.id} edge={edge} index={index} />
        ))}
      </svg>
    </div>
  );
}
