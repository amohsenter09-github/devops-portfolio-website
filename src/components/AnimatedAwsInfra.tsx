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
  pill?: string; // e.g., 'prod', 'staging', 'sandbox'
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
          delay: index * 0.3,
        }}
      >
        <circle r={4} fill={color} />
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
  // Canvas coords ~ 1200x760 (responsive via viewBox)
  // Positions chosen to match the layout: left → security → ops → 3 VPCs on the right

  const nodes: Node[] = [
    // Left: External access block
    { id: "ext", label: "EXTERNAL ACCESS", x: 60, y: 80, w: 280, h: 180, type: "group" },
    { id: "route53", label: "Route53", x: 90, y: 120, w: 70, h: 50, type: "service", icon: <Network className="w-4 h-4" /> },
    { id: "cloudfront", label: "CloudFront", x: 170, y: 120, w: 90, h: 50, type: "service", icon: <Cloud className="w-4 h-4" /> },
    { id: "s3-static", label: "S3 (static assets)", x: 270, y: 120, w: 70, h: 50, type: "service", icon: <SiAmazon className="w-4 h-4" /> },

    // Center: Security
    { id: "sec", label: "SECURITY SERVICES", x: 410, y: 120, w: 130, h: 110, type: "group" },
    { id: "waf", label: "WAF", x: 430, y: 145, w: 90, h: 34, type: "service", icon: <Shield className="w-4 h-4" /> },
    { id: "guardduty", label: "GuardDuty", x: 430, y: 185, w: 90, h: 34, type: "service", icon: <Lock className="w-4 h-4" /> },

    // Center-left: Operations / GitOps
    { id: "ops", label: "OPERATIONS / GITOPS", x: 560, y: 230, w: 180, h: 160, type: "group" },
    { id: "argocd", label: "ArgoCD (HA)", x: 585, y: 260, w: 130, h: 36, type: "service" },
    { id: "bastion", label: "Bastion Hosts", x: 585, y: 305, w: 130, h: 36, type: "service" },

    // Bottom-center: Monitoring & Alerts
    { id: "mon", label: "MONITORING & ALERTING", x: 540, y: 430, w: 240, h: 140, type: "group" },
    { id: "cw", label: "CloudWatch", x: 560, y: 460, w: 90, h: 36, type: "service", icon: <SiAmazon className="w-4 h-4" /> },
    { id: "s3-logs", label: "S3 (logs/archival)", x: 660, y: 460, w: 100, h: 36, type: "service", icon: <SiAmazon className="w-4 h-4" /> },

    // Right: VPCs (prod, staging, sandbox) stacks
    { id: "vpc-prod", label: "PRODUCTION (eu-central-1)", x: 840, y: 60, w: 320, h: 230, type: "group" },
    { id: "prod-eks", label: "EKS (m5.large x4)", x: 860, y: 90, w: 120, h: 40, type: "service", icon: <SiKubernetes className="w-4 h-4" />, pill: "prod" },
    { id: "prod-alb", label: "ALB", x: 1000, y: 90, w: 70, h: 40, type: "service", icon: <Network className="w-4 h-4" /> },
    { id: "prod-rds", label: "Aurora PostgreSQL", x: 1080, y: 90, w: 80, h: 40, type: "service", icon: <Database className="w-4 h-4" /> },
    { id: "prod-cw", label: "CloudWatch", x: 1000, y: 150, w: 70, h: 40, type: "service", icon: <SiAmazon className="w-4 h-4" /> },
    { id: "prod-kms", label: "KMS", x: 1080, y: 150, w: 80, h: 40, type: "service", icon: <Lock className="w-4 h-4" /> },

    { id: "vpc-stg", label: "STAGING (eu-central-1)", x: 840, y: 310, w: 320, h: 230, type: "group" },
    { id: "stg-eks", label: "EKS (t3.large x2)", x: 860, y: 340, w: 120, h: 40, type: "service", icon: <SiKubernetes className="w-4 h-4" />, pill: "staging" },
    { id: "stg-alb", label: "ALB", x: 1000, y: 340, w: 70, h: 40, type: "service", icon: <Network className="w-4 h-4" /> },
    { id: "stg-rds", label: "Aurora PostgreSQL", x: 1080, y: 340, w: 80, h: 40, type: "service", icon: <Database className="w-4 h-4" /> },
    { id: "stg-cw", label: "CloudWatch", x: 1000, y: 400, w: 70, h: 40, type: "service", icon: <SiAmazon className="w-4 h-4" /> },
    { id: "stg-kms", label: "KMS", x: 1080, y: 400, w: 80, h: 40, type: "service", icon: <Lock className="w-4 h-4" /> },

    { id: "vpc-sbx", label: "SANDBOX (eu-central-1)", x: 840, y: 560, w: 320, h: 180, type: "group" },
    { id: "sbx-eks", label: "EKS (t3.medium)", x: 860, y: 590, w: 120, h: 40, type: "service", icon: <SiKubernetes className="w-4 h-4" />, pill: "sandbox" },
    { id: "sbx-cw", label: "CloudWatch", x: 1000, y: 590, w: 70, h: 40, type: "service", icon: <SiAmazon className="w-4 h-4" /> },
  ];

  const edges: Edge[] = [
    // External -> Security
    { id: "r53-cf", from: [160, 145], to: [215, 145], color: "#22d3ee", dash: "8 8", speed: 2 },
    { id: "cf-waf", from: [260, 145], to: [430, 165], color: "#22d3ee", dash: "8 8", speed: 2 },

    // WAF -> prod/stg ingress
    { id: "waf-prod", from: [520, 165], to: [900, 110], color: "#22d3ee", dash: "8 8", speed: 2.2 },
    { id: "waf-stg",  from: [520, 165], to: [900, 360], color: "#22d3ee", dash: "8 8", speed: 2.2 },

    // ArgoCD -> all EKS clusters (deploy workloads)
    { id: "argo-prod", from: [650, 278], to: [920, 110], color: "#a78bfa", dash: "6 6", speed: 1.8 },
    { id: "argo-stg",  from: [650, 278], to: [920, 360], color: "#a78bfa", dash: "6 6", speed: 1.8 },
    { id: "argo-sbx",  from: [650, 278], to: [920, 610], color: "#a78bfa", dash: "6 6", speed: 1.8 },

    // EKS -> DB / CW
    { id: "eks-prod-rds", from: [980, 110], to: [1120, 110], color: "#60a5fa", dash: "8 8", speed: 3 },
    { id: "eks-prod-cw",  from: [980, 110], to: [1035, 170], color: "#60a5fa", dash: "8 8", speed: 3 },
    { id: "eks-stg-rds",  from: [980, 360], to: [1120, 360], color: "#60a5fa", dash: "8 8", speed: 3 },
    { id: "eks-stg-cw",   from: [980, 360], to: [1035, 420], color: "#60a5fa", dash: "8 8", speed: 3 },
    { id: "eks-sbx-cw",   from: [980, 610], to: [1035, 610], color: "#60a5fa", dash: "8 8", speed: 3 },

    // Logs to Monitoring S3
    { id: "cw-to-s3logs", from: [1035, 170], to: [710, 478], color: "#94a3b8", dash: "8 8", speed: 2.6 },
    { id: "stg-cw-to-s3", from: [1035, 420], to: [710, 478], color: "#94a3b8", dash: "8 8", speed: 2.6 },
    { id: "sbx-cw-to-s3", from: [1035, 610], to: [710, 478], color: "#94a3b8", dash: "8 8", speed: 2.6 },
  ];

  // Render a node
  const renderNode = (node: Node) => {
    const isGroup = node.type === "group";
    
    if (isGroup) {
      return (
        <g key={node.id}>
          <rect
            x={node.x}
            y={node.y}
            width={node.w}
            height={node.h}
            fill={bg.panel}
            stroke={bg.stroke}
            strokeWidth={1}
            rx={4}
          />
          <text
            x={node.x + 8}
            y={node.y + 16}
            fill={bg.label}
            fontSize={11}
            fontWeight={700}
            letterSpacing={0.5}
          >
            {node.label}
          </text>
        </g>
      );
    }

    // Service node
    return (
      <g key={node.id}>
        <motion.rect
          x={node.x}
          y={node.y}
          width={node.w}
          height={node.h}
          fill="rgba(255,255,255,0.08)"
          stroke={bg.stroke}
          strokeWidth={1}
          rx={6}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          whileHover={{ 
            stroke: "#a78bfa",
            strokeWidth: 2,
            fill: "rgba(255,255,255,0.12)"
          }}
        />
        
        {/* Pill badge */}
        {node.pill && (
          <motion.rect
            x={node.x + node.w - 45}
            y={node.y + 4}
            width={40}
            height={16}
            fill={
              node.pill === "prod" ? "#ef4444" :
              node.pill === "staging" ? "#f59e0b" :
              "#10b981"
            }
            rx={8}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3 }}
          />
        )}
        {node.pill && (
          <text
            x={node.x + node.w - 25}
            y={node.y + 15}
            fill="white"
            fontSize={9}
            fontWeight={600}
            textAnchor="middle"
          >
            {node.pill.toUpperCase()}
          </text>
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
          y={node.y + node.h / 2 + 4}
          fill={bg.label}
          fontSize={10}
          fontWeight={500}
        >
          {node.label}
        </text>
      </g>
    );
  };

  return (
    <div className="w-full max-w-[1200px] mx-auto rounded-2xl bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900 p-6 md:p-8 overflow-hidden">
      <svg 
        viewBox="0 0 1200 760" 
        className="w-full h-auto"
        style={{ minHeight: '500px' }}
      >
        <defs>
          {/* Gradient definitions */}
          <linearGradient id="glow" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgba(147,51,234,0.2)" />
            <stop offset="100%" stopColor="rgba(34,211,238,0.2)" />
          </linearGradient>
          
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
        </defs>

        {/* Background grid (subtle) */}
        <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
          <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255,255,255,0.02)" strokeWidth="1" />
        </pattern>
        <rect width="100%" height="100%" fill="url(#grid)" />

        {/* Render all nodes */}
        {nodes.map(renderNode)}

        {/* Render all animated edges */}
        {edges.map((edge, index) => (
          <AnimatedArrow key={edge.id} edge={edge} index={index} />
        ))}
      </svg>
    </div>
  );
}

