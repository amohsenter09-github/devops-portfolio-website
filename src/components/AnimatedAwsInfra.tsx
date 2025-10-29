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
  Globe
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
  label?: string; // Connection label
};

const bg = {
  panel: "rgba(255,255,255,0.05)",
  stroke: "rgba(255,255,255,0.12)",
  label: "rgb(203 213 225)",
};

// Animated arrow with label
function AnimatedArrow({ edge, index }: { edge: Edge; index: number }) {
  const { from, to, color = "#22d3ee", dash = "8 8", speed = 2, label } = edge;
  const markerId = `arrowhead-${edge.id}`;
  
  // Calculate midpoint for label
  const midX = (from[0] + to[0]) / 2;
  const midY = (from[1] + to[1]) / 2;
  
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
      
      {/* Animated dot */}
      <motion.g
        initial={{ x: from[0], y: from[1] }}
        animate={{ x: to[0], y: to[1] }}
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
      
      {/* Arrow line */}
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
      
      {/* Connection label */}
      {label && (
        <g>
          <rect
            x={midX - label.length * 3}
            y={midY - 8}
            width={label.length * 6}
            height={14}
            fill="rgba(15, 23, 42, 0.8)"
            rx={3}
            stroke={color}
            strokeWidth={1}
            opacity={0.9}
          />
          <text
            x={midX}
            y={midY + 3}
            fill={bg.label}
            fontSize={9}
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
  // Layout matching the reference diagram more closely
  const nodes: Node[] = [
    // Top: External AWS Services
    { id: "ext", label: "EXTERNAL AWS SERVICES", x: 50, y: 30, w: 350, h: 160, type: "group" },
    { id: "route53", label: "Route53", x: 70, y: 60, w: 90, h: 36, type: "service", icon: <Globe className="w-4 h-4" /> },
    { id: "cloudfront", label: "CloudFront", x: 170, y: 60, w: 100, h: 36, type: "service", icon: <Cloud className="w-4 h-4" /> },
    { id: "s3-static", label: "S3 (static assets)", x: 280, y: 60, w: 100, h: 36, type: "service", icon: <SiAmazon className="w-4 h-4" /> },
    { id: "s3-portal", label: "portal-admin-app-production", x: 70, y: 110, w: 310, h: 32, type: "service", icon: <SiAmazon className="w-4 h-4" /> },

    // Security Services
    { id: "sec", label: "SECURITY SERVICES", x: 420, y: 30, w: 200, h: 160, type: "group" },
    { id: "waf", label: "WAF", x: 440, y: 60, w: 160, h: 36, type: "service", icon: <Shield className="w-4 h-4" /> },
    { id: "guardduty", label: "GuardDuty", x: 440, y: 110, w: 160, h: 36, type: "service", icon: <Shield className="w-4 h-4" /> },

    // Left: Operations (US-WEST-2)
    { id: "ops-account", label: "OPERATIONS (US-WEST-2)", x: 50, y: 210, w: 300, h: 220, type: "group", region: "us-west-2" },
    { id: "argocd", label: "ArgoCD (HA)", x: 70, y: 250, w: 130, h: 38, type: "service", highlight: true, icon: <SiArgo className="w-4 h-4" /> },
    { id: "bastion-ops", label: "Bastion Hosts (m5.medium)", x: 210, y: 250, w: 130, h: 38, type: "service", icon: <Server className="w-4 h-4" /> },
    { id: "mon-stack", label: "Monitoring Stack (Prometheus/Grafana)", x: 70, y: 300, w: 270, h: 38, type: "service", icon: <SiPrometheus className="w-4 h-4" /> },
    { id: "vpn-ops", label: "Aviatrix VPN", x: 70, y: 350, w: 270, h: 38, type: "service", icon: <Network className="w-4 h-4" /> },

    // Top-Right: Production (CA-CENTRAL-1)
    { id: "prod-account", label: "PRODUCTION (CA-CENTRAL-1)", x: 640, y: 30, w: 680, h: 270, type: "group", region: "ca-central-1" },
    { id: "prod-alb", label: "ALB", x: 660, y: 70, w: 80, h: 36, type: "service", icon: <Network className="w-4 h-4" />, pill: "prod" },
    { id: "prod-eks", label: "EKS (m5.xlarge x3)", x: 750, y: 70, w: 140, h: 36, type: "service", icon: <SiKubernetes className="w-4 h-4" />, pill: "prod" },
    { id: "prod-rds", label: "Aurora PostgreSQL (db.r6g.large x3)", x: 900, y: 70, w: 200, h: 36, type: "service", icon: <SiPostgresql className="w-4 h-4" /> },
    { id: "prod-redis", label: "Redis (cache.r6g.large x3)", x: 1110, y: 70, w: 180, h: 36, type: "service", icon: <SiRedis className="w-4 h-4" /> },
    { id: "prod-cw", label: "CloudWatch", x: 660, y: 120, w: 100, h: 32, type: "service", icon: <SiAmazoncloudwatch className="w-4 h-4" /> },
    { id: "prod-kms", label: "KMS", x: 770, y: 120, w: 70, h: 32, type: "service", icon: <Lock className="w-4 h-4" /> },
    { id: "prod-s3", label: "S3 (api-internal-files-production)", x: 660, y: 165, w: 230, h: 32, type: "service", icon: <SiAmazon className="w-4 h-4" /> },

    // Mid-Right: Staging (CA-CENTRAL-1)
    { id: "stg-account", label: "STAGING (CA-CENTRAL-1)", x: 640, y: 320, w: 680, h: 200, type: "group", region: "ca-central-1" },
    { id: "stg-alb", label: "ALB", x: 660, y: 350, w: 80, h: 32, type: "service", icon: <Network className="w-4 h-4" />, pill: "staging" },
    { id: "stg-eks", label: "EKS (m5.xlarge x3)", x: 750, y: 350, w: 140, h: 32, type: "service", icon: <SiKubernetes className="w-4 h-4" />, pill: "staging" },
    { id: "stg-rds", label: "Aurora PostgreSQL (db.t3.medium x1)", x: 900, y: 350, w: 200, h: 32, type: "service", icon: <SiPostgresql className="w-4 h-4" /> },
    { id: "stg-redis", label: "Redis (cache.t3.medium x1)", x: 1110, y: 350, w: 180, h: 32, type: "service", icon: <SiRedis className="w-4 h-4" /> },
    { id: "stg-cw", label: "CloudWatch", x: 660, y: 395, w: 100, h: 32, type: "service", icon: <SiAmazoncloudwatch className="w-4 h-4" /> },
    { id: "stg-kms", label: "KMS", x: 770, y: 395, w: 70, h: 32, type: "service", icon: <Lock className="w-4 h-4" /> },
    { id: "stg-s3", label: "S3 (api-internal-files-staging)", x: 660, y: 440, w: 230, h: 32, type: "service", icon: <SiAmazon className="w-4 h-4" /> },

    // Bottom-Right: Sandbox (CA-CENTRAL-1)
    { id: "sbx-account", label: "SANDBOX (CA-CENTRAL-1)", x: 640, y: 540, w: 680, h: 160, type: "group", region: "ca-central-1" },
    { id: "sbx-eks", label: "EKS (t3.medium x2)", x: 660, y: 570, w: 130, h: 32, type: "service", icon: <SiKubernetes className="w-4 h-4" />, pill: "sandbox" },
    { id: "sbx-rds", label: "Aurora PostgreSQL (db.t3.small x1)", x: 800, y: 570, w: 200, h: 32, type: "service", icon: <SiPostgresql className="w-4 h-4" /> },
    { id: "sbx-redis", label: "Redis (cache.t3.small x1)", x: 1010, y: 570, w: 180, h: 32, type: "service", icon: <SiRedis className="w-4 h-4" /> },
    { id: "sbx-cw", label: "CloudWatch", x: 660, y: 615, w: 100, h: 32, type: "service", icon: <SiAmazoncloudwatch className="w-4 h-4" /> },
    { id: "sbx-kms", label: "KMS", x: 770, y: 615, w: 70, h: 32, type: "service", icon: <Lock className="w-4 h-4" /> },

    // Bottom: Monitoring & Alerting
    { id: "mon-alert", label: "MONITORING & ALERTING", x: 50, y: 450, w: 520, h: 250, type: "group" },
    { id: "central-cw", label: "CloudWatch", x: 70, y: 480, w: 120, h: 36, type: "service", icon: <SiAmazoncloudwatch className="w-4 h-4" /> },
    { id: "pagerduty", label: "PagerDuty", x: 210, y: 480, w: 110, h: 36, type: "service", icon: <SiPagerduty className="w-4 h-4" /> },
    { id: "slack", label: "Slack", x: 340, y: 480, w: 90, h: 36, type: "service", icon: <SiSlack className="w-4 h-4" /> },
    { id: "datadog", label: "Datadog", x: 450, y: 480, w: 100, h: 36, type: "service", icon: <SiDatadog className="w-4 h-4" /> },
  ];

  const edges: Edge[] = [
    // External flow with labels
    { id: "r53-cf", from: [160, 78], to: [220, 78], color: "#22d3ee", dash: "8 8", speed: 2, label: "user access" },
    { id: "cf-s3", from: [270, 78], to: [330, 78], color: "#22d3ee", dash: "8 8", speed: 2, label: "static assets" },
    { id: "cf-waf", from: [320, 78], to: [480, 78], color: "#22d3ee", dash: "8 8", speed: 2, label: "CDN traffic" },
    
    // WAF to environments
    { id: "waf-prod", from: [620, 78], to: [700, 88], color: "#22d3ee", dash: "8 8", speed: 2.2, label: "live traffic" },
    { id: "waf-stg", from: [620, 78], to: [700, 366], color: "#22d3ee", dash: "8 8", speed: 2.2, label: "live traffic" },
    
    // ALB to EKS
    { id: "alb-prod-eks", from: [700, 88], to: [820, 88], color: "#60a5fa", dash: "8 8", speed: 2.5, label: "app data" },
    { id: "alb-stg-eks", from: [700, 366], to: [820, 366], color: "#60a5fa", dash: "8 8", speed: 2.5, label: "app data" },
    
    // EKS to Databases
    { id: "eks-prod-rds", from: [820, 88], to: [950, 88], color: "#60a5fa", dash: "8 8", speed: 2.5, label: "app data" },
    { id: "eks-prod-redis", from: [820, 88], to: [1200, 88], color: "#60a5fa", dash: "8 8", speed: 2.8, label: "cache" },
    { id: "eks-stg-rds", from: [820, 366], to: [950, 366], color: "#60a5fa", dash: "8 8", speed: 2.5, label: "app data" },
    { id: "eks-stg-redis", from: [820, 366], to: [1200, 366], color: "#60a5fa", dash: "8 8", speed: 2.8, label: "cache" },
    { id: "eks-sbx-rds", from: [725, 586], to: [850, 586], color: "#60a5fa", dash: "8 8", speed: 2.5, label: "app data" },
    { id: "eks-sbx-redis", from: [725, 586], to: [1100, 586], color: "#60a5fa", dash: "8 8", speed: 2.8, label: "cache" },
    
    // ArgoCD deployments (GitOps)
    { id: "argo-prod", from: [135, 269], to: [820, 88], color: "#a78bfa", dash: "6 6", speed: 1.8, label: "deploy workloads" },
    { id: "argo-stg", from: [135, 269], to: [820, 366], color: "#a78bfa", dash: "6 6", speed: 1.8, label: "deploy workloads" },
    { id: "argo-sbx", from: [135, 269], to: [725, 586], color: "#a78bfa", dash: "6 6", speed: 1.8, label: "deploy workloads" },
    
    // VPN connections
    { id: "vpn-prod", from: [340, 369], to: [820, 88], color: "#8b5cf6", dash: "6 6", speed: 2.2, label: "VPC peering" },
    { id: "vpn-stg", from: [340, 369], to: [820, 366], color: "#8b5cf6", dash: "6 6", speed: 2.2, label: "VPC peering" },
    { id: "vpn-sbx", from: [340, 369], to: [725, 586], color: "#8b5cf6", dash: "6 6", speed: 2.2, label: "VPC peering" },
    
    // GuardDuty to Monitoring
    { id: "gd-mon", from: [540, 128], to: [205, 319], color: "#ef4444", dash: "8 8", speed: 2.4, label: "threat detection" },
    
    // Metrics to Monitoring Stack
    { id: "prod-mon-stack", from: [820, 88], to: [205, 319], color: "#10b981", dash: "8 8", speed: 2.6, label: "metrics" },
    { id: "stg-mon-stack", from: [820, 366], to: [205, 319], color: "#10b981", dash: "8 8", speed: 2.6, label: "metrics" },
    { id: "sbx-mon-stack", from: [725, 586], to: [205, 319], color: "#10b981", dash: "8 8", speed: 2.6, label: "metrics" },
    
    // CloudWatch to Alerting
    { id: "prod-cw-alert", from: [710, 136], to: [130, 498], color: "#94a3b8", dash: "8 8", speed: 2.6, label: "metrics" },
    { id: "stg-cw-alert", from: [710, 411], to: [130, 498], color: "#94a3b8", dash: "8 8", speed: 2.6, label: "metrics" },
    { id: "sbx-cw-alert", from: [710, 631], to: [130, 498], color: "#94a3b8", dash: "8 8", speed: 2.6, label: "metrics" },
    
    // CloudWatch to PagerDuty/Slack
    { id: "cw-pagerduty", from: [130, 498], to: [265, 498], color: "#f59e0b", dash: "8 8", speed: 2.4, label: "alerting" },
    { id: "cw-slack", from: [130, 498], to: [385, 498], color: "#f59e0b", dash: "8 8", speed: 2.4, label: "notifications" },
    
    // Monitoring Stack to Datadog
    { id: "mon-datadog", from: [205, 319], to: [500, 498], color: "#10b981", dash: "8 8", speed: 2.6, label: "metrics" },
    
    // KMS encryption connections
    { id: "kms-prod-rds", from: [805, 136], to: [950, 88], color: "#8b5cf6", dash: "6 6", speed: 2.5 },
    { id: "kms-prod-redis", from: [805, 136], to: [1200, 88], color: "#8b5cf6", dash: "6 6", speed: 2.5 },
    { id: "kms-prod-s3", from: [805, 136], to: [775, 181], color: "#8b5cf6", dash: "6 6", speed: 2.5 },
  ];

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

    const hasHighlight = node.highlight;
    
    return (
      <g key={node.id}>
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
        
        {node.icon && (
          <foreignObject x={node.x + 6} y={node.y + (node.h - 16) / 2} width={16} height={16}>
            <div className="text-gray-300 flex items-center justify-center">
              {node.icon}
            </div>
          </foreignObject>
        )}
        
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
        viewBox="0 0 1400 800" 
        className="w-full h-auto"
        style={{ minHeight: '600px' }}
      >
        <defs>
          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255,255,255,0.03)" strokeWidth="0.5" />
          </pattern>
          <radialGradient id="ambient-glow" cx="50%" cy="50%">
            <stop offset="0%" stopColor="rgba(167,139,250,0.1)" />
            <stop offset="100%" stopColor="rgba(167,139,250,0)" />
          </radialGradient>
        </defs>

        <rect width="100%" height="100%" fill="url(#grid)" opacity={0.6} />
        <rect width="100%" height="100%" fill="url(#ambient-glow)" opacity={0.3} />

        {nodes.map((node, index) => renderNode(node, index))}
        {edges.map((edge, index) => (
          <AnimatedArrow key={edge.id} edge={edge} index={index} />
        ))}
      </svg>
    </div>
  );
}
