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
  Server,
  Globe,
  Key,
  Loader,
  MessageSquare,
  Zap,
  Lock
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
  priority?: "high" | "medium" | "low"; // For arrow visibility
};

const bg = {
  panel: "rgba(255,255,255,0.05)",
  stroke: "rgba(255,255,255,0.12)",
  label: "rgb(203 213 225)",
};

// Improved animated arrow with single flowing line - less noisy
function AnimatedArrow({ edge, index }: { edge: Edge; index: number }) {
  const { from, to, color = "#22d3ee", dash = "12 8", speed = 4, label, priority = "medium" } = edge;
  const markerId = `arrowhead-${edge.id}`;
  
  // Calculate path
  const midX = (from[0] + to[0]) / 2;
  const midY = (from[1] + to[1]) / 2;
  
  const dx = to[0] - from[0];
  const dy = to[1] - from[1];
  const angle = Math.atan2(dy, dx) * (180 / Math.PI);
  
  // Only show animated dots for high priority connections, static for others
  const showAnimation = priority === "high";
  const strokeOpacity = priority === "high" ? 0.8 : priority === "medium" ? 0.6 : 0.4;
  
  return (
    <g key={`arrow-${edge.id}`}>
      <defs>
        <marker
          id={markerId}
          markerWidth="8"
          markerHeight="8"
          refX="6"
          refY="3.5"
          orient="auto"
          markerUnits="strokeWidth"
        >
          <path d="M0,0 L0,7 L8,3.5 Z" fill={color} />
        </marker>
      </defs>
      
      {/* Static dashed line - base path */}
      <line
        x1={from[0]}
        y1={from[1]}
        x2={to[0]}
        y2={to[1]}
        stroke={color}
        strokeWidth={2}
        strokeDasharray={dash}
        opacity={strokeOpacity * 0.5}
      />
      
      {/* Single flowing dot - less noisy than multiple */}
      {showAnimation && (
        <motion.g
          initial={{ x: from[0], y: from[1] }}
          animate={{ x: to[0], y: to[1] }}
          transition={{
            duration: speed,
            repeat: Infinity,
            ease: "linear",
            delay: index * 0.2,
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
              duration: 0.8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <circle r={6} fill={color} opacity={0.2} />
        </motion.g>
      )}
      
      {/* Arrow line with marker */}
      <line
        x1={from[0]}
        y1={from[1]}
        x2={to[0]}
        y2={to[1]}
        stroke={color}
        strokeWidth={2}
        markerEnd={`url(#${markerId})`}
        opacity={strokeOpacity}
      />
      
      {/* Connection label - only for high priority */}
      {label && priority === "high" && (
        <g transform={`translate(${midX}, ${midY}) rotate(${angle})`}>
          <rect
            x={-label.length * 3}
            y={-9}
            width={label.length * 6}
            height={14}
            fill="rgba(15, 23, 42, 0.9)"
            rx={3}
            stroke={color}
            strokeWidth={1}
            opacity={0.9}
          />
          <text
            x={0}
            y={2}
            fill={bg.label}
            fontSize={9}
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
  const nodes: Node[] = [
    // Top: External AWS Services
    { id: "ext", label: "EXTERNAL AWS SERVICES", x: 60, y: 40, w: 480, h: 220, type: "group" },
    { id: "route53", label: "Route53", x: 80, y: 80, w: 130, h: 45, type: "service", icon: <Globe className="w-5 h-5" /> },
    { id: "cloudfront", label: "CloudFront", x: 220, y: 80, w: 140, h: 45, type: "service", icon: <Cloud className="w-5 h-5" /> },
    { id: "s3-static", label: "S3 (static assets)", x: 370, y: 80, w: 150, h: 45, type: "service", icon: <SiAmazon className="w-5 h-5" /> },
    { id: "api-gateway", label: "API Gateway", x: 80, y: 140, w: 140, h: 45, type: "service", icon: <Network className="w-5 h-5" /> },
    { id: "s3-portal", label: "S3 (portal-admin-app)", x: 230, y: 140, w: 290, h: 45, type: "service", icon: <SiAmazon className="w-5 h-5" /> },

    // Security Services - Enhanced
    { id: "sec", label: "SECURITY SERVICES", x: 560, y: 40, w: 280, h: 220, type: "group" },
    { id: "waf", label: "WAF", x: 580, y: 80, w: 240, h: 45, type: "service", icon: <Shield className="w-5 h-5" /> },
    { id: "guardduty", label: "GuardDuty", x: 580, y: 140, w: 240, h: 45, type: "service", icon: <Shield className="w-5 h-5" /> },
    { id: "iam", label: "IAM", x: 580, y: 200, w: 240, h: 45, type: "service", icon: <Lock className="w-5 h-5" /> },

    // Left: Operations (US-WEST-2) - Enhanced
    { id: "ops-account", label: "OPERATIONS (US-WEST-2)", x: 60, y: 280, w: 400, h: 300, type: "group", region: "us-west-2" },
    { id: "argocd", label: "ArgoCD (HA)", x: 80, y: 330, w: 180, h: 50, type: "service", highlight: true, icon: <SiArgo className="w-5 h-5" /> },
    { id: "bastion-ops", label: "Bastion Hosts (m5.medium)", x: 270, y: 330, w: 180, h: 50, type: "service", icon: <Server className="w-5 h-5" /> },
    { id: "mon-stack", label: "Monitoring (Prometheus/Grafana)", x: 80, y: 395, w: 370, h: 50, type: "service", icon: <SiPrometheus className="w-5 h-5" /> },
    { id: "vpn-ops", label: "Aviatrix VPN", x: 80, y: 460, w: 370, h: 50, type: "service", icon: <Network className="w-5 h-5" /> },
    { id: "lambda-ops", label: "Lambda (Ops Automation)", x: 80, y: 525, w: 370, h: 45, type: "service", icon: <Zap className="w-5 h-5" /> },

    // Top-Right: Production (CA-CENTRAL-1) - Enhanced
    { id: "prod-account", label: "PRODUCTION (CA-CENTRAL-1)", x: 860, y: 40, w: 920, h: 360, type: "group", region: "ca-central-1" },
    { id: "prod-alb", label: "ALB", x: 880, y: 90, w: 110, h: 50, type: "service", icon: <Network className="w-5 h-5" />, pill: "prod" },
    { id: "prod-eks", label: "EKS (m5.xlarge x3)", x: 1000, y: 90, w: 200, h: 50, type: "service", icon: <SiKubernetes className="w-5 h-5" />, pill: "prod" },
    { id: "prod-rds", label: "Aurora PostgreSQL (db.r6g.large x3)", x: 1210, y: 90, w: 280, h: 50, type: "service", icon: <SiPostgresql className="w-5 h-5" /> },
    { id: "prod-redis", label: "ElastiCache Redis (cache.r6g.large x3)", x: 1500, y: 90, w: 260, h: 50, type: "service", icon: <SiRedis className="w-5 h-5" /> },
    { id: "prod-cw", label: "CloudWatch", x: 880, y: 155, w: 140, h: 44, type: "service", icon: <SiAmazoncloudwatch className="w-5 h-5" /> },
    { id: "prod-kms", label: "KMS", x: 1030, y: 155, w: 100, h: 44, type: "service", icon: <Key className="w-5 h-5" /> },
    { id: "prod-s3", label: "S3 (api-internal-files)", x: 880, y: 215, w: 360, h: 44, type: "service", icon: <SiAmazon className="w-5 h-5" /> },
    { id: "prod-sns", label: "SNS", x: 1250, y: 215, w: 100, h: 44, type: "service", icon: <MessageSquare className="w-5 h-5" /> },
    { id: "prod-sqs", label: "SQS", x: 1360, y: 215, w: 100, h: 44, type: "service", icon: <Loader className="w-5 h-5" /> },
    { id: "prod-lambda", label: "Lambda Functions", x: 880, y: 275, w: 280, h: 44, type: "service", icon: <Zap className="w-5 h-5" /> },
    { id: "prod-vpc", label: "VPC (Multi-AZ)", x: 1170, y: 275, w: 290, h: 44, type: "service", icon: <Network className="w-5 h-5" /> },

    // Mid-Right: Staging (CA-CENTRAL-1) - Enhanced
    { id: "stg-account", label: "STAGING (CA-CENTRAL-1)", x: 860, y: 420, w: 920, h: 280, type: "group", region: "ca-central-1" },
    { id: "stg-alb", label: "ALB", x: 880, y: 460, w: 110, h: 44, type: "service", icon: <Network className="w-5 h-5" />, pill: "staging" },
    { id: "stg-eks", label: "EKS (m5.xlarge x3)", x: 1000, y: 460, w: 200, h: 44, type: "service", icon: <SiKubernetes className="w-5 h-5" />, pill: "staging" },
    { id: "stg-rds", label: "Aurora PostgreSQL (db.t3.medium x1)", x: 1210, y: 460, w: 280, h: 44, type: "service", icon: <SiPostgresql className="w-5 h-5" /> },
    { id: "stg-redis", label: "ElastiCache Redis (cache.t3.medium x1)", x: 1500, y: 460, w: 260, h: 44, type: "service", icon: <SiRedis className="w-5 h-5" /> },
    { id: "stg-cw", label: "CloudWatch", x: 880, y: 520, w: 140, h: 40, type: "service", icon: <SiAmazoncloudwatch className="w-5 h-5" /> },
    { id: "stg-kms", label: "KMS", x: 1030, y: 520, w: 100, h: 40, type: "service", icon: <Key className="w-5 h-5" /> },
    { id: "stg-s3", label: "S3 (api-internal-files-staging)", x: 880, y: 575, w: 360, h: 40, type: "service", icon: <SiAmazon className="w-5 h-5" /> },
    { id: "stg-vpc", label: "VPC (Multi-AZ)", x: 1250, y: 575, w: 290, h: 40, type: "service", icon: <Network className="w-5 h-5" /> },

    // Bottom-Right: Sandbox (CA-CENTRAL-1)
    { id: "sbx-account", label: "SANDBOX (CA-CENTRAL-1)", x: 860, y: 720, w: 920, h: 220, type: "group", region: "ca-central-1" },
    { id: "sbx-eks", label: "EKS (t3.medium x2)", x: 880, y: 760, w: 190, h: 44, type: "service", icon: <SiKubernetes className="w-5 h-5" />, pill: "sandbox" },
    { id: "sbx-rds", label: "Aurora PostgreSQL (db.t3.small x1)", x: 1080, y: 760, w: 280, h: 44, type: "service", icon: <SiPostgresql className="w-5 h-5" /> },
    { id: "sbx-redis", label: "ElastiCache Redis (cache.t3.small x1)", x: 1370, y: 760, w: 260, h: 44, type: "service", icon: <SiRedis className="w-5 h-5" /> },
    { id: "sbx-cw", label: "CloudWatch", x: 880, y: 820, w: 140, h: 40, type: "service", icon: <SiAmazoncloudwatch className="w-5 h-5" /> },
    { id: "sbx-kms", label: "KMS", x: 1030, y: 820, w: 100, h: 40, type: "service", icon: <Key className="w-5 h-5" /> },

    // Bottom: Monitoring & Alerting - Enhanced
    { id: "mon-alert", label: "MONITORING & ALERTING", x: 60, y: 600, w: 740, h: 340, type: "group" },
    { id: "central-cw", label: "CloudWatch Dashboards", x: 80, y: 640, w: 180, h: 50, type: "service", icon: <SiAmazoncloudwatch className="w-5 h-5" /> },
    { id: "pagerduty", label: "PagerDuty", x: 280, y: 640, w: 150, h: 50, type: "service", icon: <SiPagerduty className="w-5 h-5" /> },
    { id: "slack", label: "Slack", x: 450, y: 640, w: 130, h: 50, type: "service", icon: <SiSlack className="w-5 h-5" /> },
    { id: "datadog", label: "Datadog", x: 600, y: 640, w: 180, h: 50, type: "service", icon: <SiDatadog className="w-5 h-5" /> },
  ];

  const edges: Edge[] = [
    // External flow - high priority
    { id: "r53-cf", from: [215, 102], to: [290, 102], color: "#22d3ee", dash: "12 8", speed: 4, label: "DNS", priority: "high" },
    { id: "cf-s3", from: [360, 102], to: [445, 102], color: "#22d3ee", dash: "12 8", speed: 4, label: "static", priority: "high" },
    { id: "cf-waf", from: [445, 102], to: [600, 102], color: "#22d3ee", dash: "12 8", speed: 4, label: "CDN", priority: "high" },
    
    // WAF to environments - high priority
    { id: "waf-prod", from: [820, 102], to: [935, 115], color: "#22d3ee", dash: "12 8", speed: 4.5, label: "traffic", priority: "high" },
    { id: "waf-stg", from: [820, 102], to: [935, 482], color: "#22d3ee", dash: "12 8", speed: 4.5, label: "traffic", priority: "high" },
    
    // ALB to EKS - high priority
    { id: "alb-prod-eks", from: [935, 115], to: [1060, 115], color: "#60a5fa", dash: "12 8", speed: 4, label: "app", priority: "high" },
    { id: "alb-stg-eks", from: [935, 482], to: [1060, 482], color: "#60a5fa", dash: "12 8", speed: 4, label: "app", priority: "high" },
    
    // EKS to Databases - high priority
    { id: "eks-prod-rds", from: [1060, 115], to: [1270, 115], color: "#60a5fa", dash: "12 8", speed: 4, priority: "high" },
    { id: "eks-prod-redis", from: [1060, 115], to: [1630, 115], color: "#60a5fa", dash: "12 8", speed: 4.5, priority: "high" },
    { id: "eks-stg-rds", from: [1060, 482], to: [1270, 482], color: "#60a5fa", dash: "12 8", speed: 4, priority: "high" },
    { id: "eks-stg-redis", from: [1060, 482], to: [1630, 482], color: "#60a5fa", dash: "12 8", speed: 4.5, priority: "high" },
    { id: "eks-sbx-rds", from: [975, 782], to: [1220, 782], color: "#60a5fa", dash: "12 8", speed: 4, priority: "medium" },
    { id: "eks-sbx-redis", from: [975, 782], to: [1500, 782], color: "#60a5fa", dash: "12 8", speed: 4.5, priority: "medium" },
    
    // ArgoCD deployments - high priority (GitOps)
    { id: "argo-prod", from: [170, 355], to: [1060, 115], color: "#a78bfa", dash: "10 6", speed: 3.5, label: "deploy", priority: "high" },
    { id: "argo-stg", from: [170, 355], to: [1060, 482], color: "#a78bfa", dash: "10 6", speed: 3.5, label: "deploy", priority: "high" },
    { id: "argo-sbx", from: [170, 355], to: [975, 782], color: "#a78bfa", dash: "10 6", speed: 3.5, priority: "medium" },
    
    // VPN connections - medium priority
    { id: "vpn-prod", from: [445, 485], to: [1060, 115], color: "#8b5cf6", dash: "10 6", speed: 4, priority: "medium" },
    { id: "vpn-stg", from: [445, 485], to: [1060, 482], color: "#8b5cf6", dash: "10 6", speed: 4, priority: "medium" },
    { id: "vpn-sbx", from: [445, 485], to: [975, 782], color: "#8b5cf6", dash: "10 6", speed: 4, priority: "low" },
    
    // GuardDuty to Monitoring - medium priority
    { id: "gd-mon", from: [760, 162], to: [265, 420], color: "#ef4444", dash: "12 8", speed: 4, priority: "medium" },
    
    // Metrics to Monitoring Stack - medium priority
    { id: "prod-mon-stack", from: [1060, 115], to: [265, 420], color: "#10b981", dash: "12 8", speed: 4.5, priority: "medium" },
    { id: "stg-mon-stack", from: [1060, 482], to: [265, 420], color: "#10b981", dash: "12 8", speed: 4.5, priority: "medium" },
    { id: "sbx-mon-stack", from: [975, 782], to: [265, 420], color: "#10b981", dash: "12 8", speed: 4.5, priority: "low" },
    
    // CloudWatch to Alerting - low priority (less noise)
    { id: "prod-cw-alert", from: [950, 177], to: [170, 665], color: "#94a3b8", dash: "14 10", speed: 5, priority: "low" },
    { id: "stg-cw-alert", from: [950, 540], to: [170, 665], color: "#94a3b8", dash: "14 10", speed: 5, priority: "low" },
    { id: "sbx-cw-alert", from: [950, 840], to: [170, 665], color: "#94a3b8", dash: "14 10", speed: 5, priority: "low" },
    
    // CloudWatch to PagerDuty/Slack - medium priority
    { id: "cw-pagerduty", from: [170, 665], to: [355, 665], color: "#f59e0b", dash: "12 8", speed: 4, priority: "medium" },
    { id: "cw-slack", from: [170, 665], to: [515, 665], color: "#f59e0b", dash: "12 8", speed: 4, priority: "medium" },
    
    // Monitoring Stack to Datadog - medium priority
    { id: "mon-datadog", from: [265, 420], to: [690, 665], color: "#10b981", dash: "12 8", speed: 4.5, priority: "medium" },
    
    // KMS encryption connections - low priority
    { id: "kms-prod-rds", from: [1080, 177], to: [1270, 115], color: "#8b5cf6", dash: "10 6", speed: 4, priority: "low" },
    { id: "kms-prod-redis", from: [1080, 177], to: [1630, 115], color: "#8b5cf6", dash: "10 6", speed: 4, priority: "low" },
    { id: "kms-prod-s3", from: [1080, 177], to: [1060, 237], color: "#8b5cf6", dash: "10 6", speed: 4, priority: "low" },
  ];

  const renderNode = (node: Node, index: number) => {
    const isGroup = node.type === "group";
    const delay = node.delay ?? index * 0.02;
    
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
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ 
            duration: 0.5, 
            delay,
            type: "spring",
            stiffness: 200,
            damping: 20
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
        
        {/* Service Icon */}
        <foreignObject x={node.x + 8} y={node.y + (node.h - 22) / 2} width={22} height={22}>
          <div className="text-gray-300 flex items-center justify-center h-full">
            {node.icon}
          </div>
        </foreignObject>
        
        <text
          x={node.x + (node.icon ? 34 : 12)}
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
