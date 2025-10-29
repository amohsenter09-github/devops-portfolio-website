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
  Server
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
    { id: "argocd", label: "ArgoCD (HA)", x: 585, y: 260, w: 130, h: 36, type: "service", highlight: true, icon: <SiKubernetes className="w-4 h-4" /> },
    { id: "bastion", label: "Bastion Hosts", x: 585, y: 305, w: 130, h: 36, type: "service", icon: <Server className="w-4 h-4" /> },

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
    // External -> Security (blue lines - traffic flow)
    { id: "r53-cf", from: [160, 145], to: [215, 145], color: "#22d3ee", dash: "8 8", speed: 2 },
    { id: "cf-s3", from: [260, 145], to: [305, 145], color: "#22d3ee", dash: "8 8", speed: 2 },
    { id: "s3-waf", from: [340, 145], to: [430, 165], color: "#22d3ee", dash: "8 8", speed: 2 },

    // WAF -> prod/stg ingress (blue lines - traffic flow)
    { id: "waf-prod", from: [520, 165], to: [860, 110], color: "#22d3ee", dash: "8 8", speed: 2.2 },
    { id: "waf-stg",  from: [520, 165], to: [860, 360], color: "#22d3ee", dash: "8 8", speed: 2.2 },

    // ArgoCD -> all EKS clusters (purple lines - GitOps deployments)
    { id: "argo-prod", from: [650, 278], to: [860, 110], color: "#a78bfa", dash: "6 6", speed: 1.8 },
    { id: "argo-stg",  from: [650, 278], to: [860, 360], color: "#a78bfa", dash: "6 6", speed: 1.8 },
    { id: "argo-sbx",  from: [650, 278], to: [860, 610], color: "#a78bfa", dash: "6 6", speed: 1.8 },

    // EKS -> ALB (internal flow within environments)
    { id: "eks-prod-alb", from: [980, 110], to: [1035, 110], color: "#60a5fa", dash: "8 8", speed: 2.5 },
    { id: "eks-stg-alb",  from: [980, 360], to: [1035, 360], color: "#60a5fa", dash: "8 8", speed: 2.5 },

    // ALB -> Database (internal flow)
    { id: "alb-prod-rds", from: [1070, 110], to: [1120, 110], color: "#60a5fa", dash: "8 8", speed: 2.5 },
    { id: "alb-stg-rds",  from: [1070, 360], to: [1120, 360], color: "#60a5fa", dash: "8 8", speed: 2.5 },

    // EKS -> Local CloudWatch (internal monitoring)
    { id: "eks-prod-cw",  from: [980, 110], to: [1035, 170], color: "#60a5fa", dash: "8 8", speed: 3 },
    { id: "eks-stg-cw",   from: [980, 360], to: [1035, 420], color: "#60a5fa", dash: "8 8", speed: 3 },
    { id: "eks-sbx-cw",   from: [980, 610], to: [1035, 610], color: "#60a5fa", dash: "8 8", speed: 3 },

    // Local CloudWatch -> KMS (encryption)
    { id: "cw-prod-kms", from: [1070, 170], to: [1120, 170], color: "#8b5cf6", dash: "6 6", speed: 2.5 },
    { id: "cw-stg-kms",  from: [1070, 420], to: [1120, 420], color: "#8b5cf6", dash: "6 6", speed: 2.5 },

    // Local CloudWatch -> Central CloudWatch (gray lines - log aggregation)
    { id: "cw-prod-central", from: [1035, 170], to: [605, 478], color: "#94a3b8", dash: "8 8", speed: 2.6 },
    { id: "cw-stg-central", from: [1035, 420], to: [605, 478], color: "#94a3b8", dash: "8 8", speed: 2.6 },
    { id: "cw-sbx-central", from: [1035, 610], to: [605, 478], color: "#94a3b8", dash: "8 8", speed: 2.6 },

    // Central CloudWatch -> S3 Logs Archival (gray lines - archival)
    { id: "central-cw-s3logs", from: [650, 478], to: [710, 478], color: "#94a3b8", dash: "8 8", speed: 2.4 },
  ];

  // Render a node
  const renderNode = (node: Node, index: number) => {
    const isGroup = node.type === "group";
    const delay = node.delay ?? index * 0.05;
    
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
        </motion.g>
      );
    }

    // Service node
    const nodeIndex = nodes.findIndex(n => n.id === node.id);
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
              height={18}
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
              y={node.y + 16}
              fill="white"
              fontSize={9}
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
          fontSize={10}
          fontWeight={hasHighlight ? 600 : 500}
        >
          {node.label}
        </text>
      </g>
    );
  };

  return (
    <div className="w-full max-w-[1200px] mx-auto rounded-2xl bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900 p-6 md:p-8 overflow-hidden shadow-2xl border border-slate-800/50">
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
          <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255,255,255,0.03)" strokeWidth="0.5" />
        </pattern>
        <rect width="100%" height="100%" fill="url(#grid)" opacity={0.6} />
        
        {/* Radial gradients for ambiance */}
        <defs>
          <radialGradient id="ambient-glow" cx="50%" cy="50%">
            <stop offset="0%" stopColor="rgba(167,139,250,0.1)" />
            <stop offset="100%" stopColor="rgba(167,139,250,0)" />
          </radialGradient>
        </defs>
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

