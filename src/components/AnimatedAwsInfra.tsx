"use client";

import { motion } from "framer-motion";
import React from "react";
import { Icon } from "@iconify/react";
import {
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
  Server,
  Network,
  Zap,
} from "lucide-react";

type Node = {
  id: string;
  label: string;
  x: number;
  y: number;
  w: number;
  h: number;
  type: "group" | "service";
  awsIcon?: string; // Iconify icon name
  customIcon?: React.ReactNode;
  numberLabel?: string;
  highlight?: boolean;
  delay?: number;
  region?: string;
  showRegionTag?: boolean; // Show region tag inside service box
};

type Edge = {
  id: string;
  from: [number, number];
  to: [number, number];
  label?: string;
  flowType?: "traffic" | "deployment" | "monitoring"; // Determines style and color
};

// Enhanced color system
const colors = {
  bg: "#ffffff",
  panel: "rgba(0, 0, 0, 0.03)",
  stroke: "rgba(0, 0, 0, 0.2)",
  label: "#232f3e",
  // Flow type colors
  traffic: "#2563eb", // Blue for data traffic
  deployment: "#fa8900", // Orange for deployment/automation
  monitoring: "#10b981", // Green for monitoring/metrics
  // Environment badges
  prodBox: "#dc2626",
  stagingBox: "#f59e0b",
  sandboxBox: "#10b981",
  regionTag: "#9ca3af", // Faint gray for region tags
};

function CleanArrow({ edge, index }: { edge: Edge; index: number }) {
  const { from, to, label, flowType = "traffic" } = edge;
  const markerId = `arrowhead-${edge.id}`;
  
  // Determine arrow properties based on flow type
  let arrowColor: string;
  let strokeDashArray: string;
  let strokeWidth: number;
  
  switch (flowType) {
    case "traffic":
      arrowColor = colors.traffic; // Blue
      strokeDashArray = "none"; // Solid
      strokeWidth = 3;
      break;
    case "deployment":
      arrowColor = colors.deployment; // Orange
      strokeDashArray = "10 6"; // Dashed
      strokeWidth = 2.5;
      break;
    case "monitoring":
      arrowColor = colors.monitoring; // Green
      strokeDashArray = "4 4"; // Dotted
      strokeWidth = 2.5;
      break;
    default:
      arrowColor = colors.traffic;
      strokeDashArray = "none";
      strokeWidth = 3;
  }
  
  const midX = (from[0] + to[0]) / 2;
  const midY = (from[1] + to[1]) / 2;
  
  const dx = to[0] - from[0];
  const dy = to[1] - from[1];
  const pathLength = Math.sqrt(dx * dx + dy * dy);
  
  return (
    <g key={`arrow-${edge.id}`}>
      <defs>
        <marker
          id={markerId}
          markerWidth="14"
          markerHeight="14"
          refX="12"
          refY="7"
          orient="auto"
          markerUnits="strokeWidth"
        >
          <path d="M0,0 L0,14 L14,7 Z" fill={arrowColor} />
        </marker>
      </defs>
      
      {/* Base arrow line */}
      <line
        x1={from[0]}
        y1={from[1]}
        x2={to[0]}
        y2={to[1]}
        stroke={arrowColor}
        strokeWidth={strokeWidth}
        strokeDasharray={strokeDashArray}
        markerEnd={`url(#${markerId})`}
        opacity={0.85}
      />
      
      {/* Animated moving dot - slower, smoother */}
      <motion.g
        initial={{ x: from[0], y: from[1] }}
        animate={{ x: to[0], y: to[1] }}
        transition={{
          duration: 4 + pathLength / 80,
          repeat: Infinity,
          ease: "linear",
          delay: index * 0.2,
        }}
      >
        <motion.circle
          r={flowType === "traffic" ? 6 : 5}
          fill={arrowColor}
          animate={{
            r: flowType === "traffic" ? [6, 8, 6] : [5, 7, 5],
            opacity: [1, 0.7, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <circle r={flowType === "traffic" ? 10 : 8} fill={arrowColor} opacity={0.2} />
      </motion.g>
      
      {/* Label */}
      {label && (
        <g transform={`translate(${midX}, ${midY - 18})`}>
          <rect
            x={-label.length * 4.5}
            y={-9}
            width={label.length * 9}
            height={16}
            fill={colors.bg}
            stroke={arrowColor}
            strokeWidth="1.5"
            rx={4}
            opacity={0.95}
          />
          <text
            x={0}
            y={3}
            fill={colors.label}
            fontSize="10"
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
    { id: "ext", label: "EXTERNAL AWS SERVICES", x: 80, y: 50, w: 700, h: 300, type: "group" },
    { id: "route53", label: "Route53", x: 100, y: 110, w: 200, h: 70, type: "service", awsIcon: "simple-icons:amazonroute53" },
    { id: "api-gateway", label: "API Gateway", x: 320, y: 110, w: 220, h: 70, type: "service", awsIcon: "simple-icons:amazonapigateway" },
    { id: "cloudfront", label: "CloudFront", x: 560, y: 110, w: 200, h: 70, type: "service", awsIcon: "simple-icons:amazoncloudfront" },
    { id: "s3-static", label: "Amazon S3", x: 100, y: 200, w: 200, h: 70, type: "service", awsIcon: "simple-icons:amazons3" },
    { id: "s3-portal", label: "Amazon S3", x: 320, y: 200, w: 440, h: 70, type: "service", awsIcon: "simple-icons:amazons3" },

    // Security Services
    { id: "sec", label: "SECURITY SERVICES", x: 820, y: 50, w: 400, h: 300, type: "group" },
    { id: "waf", label: "WAF", x: 840, y: 110, w: 360, h: 70, type: "service", awsIcon: "simple-icons:amazonaws" },
    { id: "guardduty", label: "GuardDuty", x: 840, y: 200, w: 360, h: 70, type: "service", awsIcon: "simple-icons:amazonaws" },

    // Left: Operations (US-WEST-2)
    { id: "ops-account", label: "OPERATIONS (US-WEST-2)", x: 80, y: 380, w: 600, h: 480, type: "group", region: "us-west-2" },
    { id: "argocd", label: "ArgoCD (HA)", x: 100, y: 450, w: 280, h: 80, type: "service", highlight: true, customIcon: <SiArgo className="w-7 h-7" />, showRegionTag: true, region: "us-west-2" },
    { id: "bastion-ops", label: "Bastion Hosts (m5.medium)", x: 400, y: 450, w: 260, h: 80, type: "service", customIcon: <Server className="w-7 h-7" />, showRegionTag: true, region: "us-west-2" },
    { id: "mon-stack", label: "Monitoring (Prometheus/Grafana)", x: 100, y: 550, w: 560, h: 80, type: "service", customIcon: <SiPrometheus className="w-7 h-7" /> },
    { id: "vpn-ops", label: "Aviatrix VPN", x: 100, y: 650, w: 560, h: 80, type: "service", customIcon: <Network className="w-7 h-7" /> },
    { id: "lambda-ops", label: "Lambda", x: 100, y: 750, w: 560, h: 70, type: "service", awsIcon: "simple-icons:amazonaws", showRegionTag: true, region: "us-west-2" },

    // Top-Right: Production (CA-CENTRAL-1)
    { id: "prod-account", label: "PRODUCTION (CA-CENTRAL-1)", x: 1260, y: 50, w: 1200, h: 500, type: "group", region: "ca-central-1" },
    { id: "prod-alb", label: "ALB", x: 1280, y: 130, w: 200, h: 85, type: "service", numberLabel: "PROD 1", awsIcon: "simple-icons:amazonaws", showRegionTag: true, region: "ca-central-1" },
    { id: "prod-eks", label: "EKS", x: 1500, y: 130, w: 280, h: 85, type: "service", numberLabel: "PROD 2", customIcon: <SiKubernetes className="w-7 h-7" />, showRegionTag: true, region: "ca-central-1" },
    { id: "prod-rds", label: "Aurora PostgreSQL", x: 1800, y: 130, w: 400, h: 85, type: "service", numberLabel: "3", customIcon: <SiPostgresql className="w-7 h-7" />, showRegionTag: true, region: "ca-central-1" },
    { id: "prod-redis", label: "ElastiCache Redis", x: 2220, y: 130, w: 360, h: 85, type: "service", customIcon: <SiRedis className="w-7 h-7" />, showRegionTag: true, region: "ca-central-1" },
    { id: "prod-cw", label: "CloudWatch", x: 1280, y: 240, w: 220, h: 70, type: "service", awsIcon: "simple-icons:amazoncloudwatch", showRegionTag: true, region: "ca-central-1" },
    { id: "prod-kms", label: "KMS", x: 1520, y: 240, w: 180, h: 70, type: "service", awsIcon: "simple-icons:amazonaws", showRegionTag: true, region: "ca-central-1" },
    { id: "prod-s3", label: "Amazon S3", x: 1720, y: 240, w: 520, h: 70, type: "service", awsIcon: "simple-icons:amazons3", showRegionTag: true, region: "ca-central-1" },
    { id: "prod-sns", label: "SNS", x: 2260, y: 240, w: 180, h: 70, type: "service", awsIcon: "simple-icons:amazonaws", showRegionTag: true, region: "ca-central-1" },
    { id: "prod-sqs", label: "SQS", x: 1280, y: 330, w: 180, h: 70, type: "service", awsIcon: "simple-icons:amazonaws", showRegionTag: true, region: "ca-central-1" },
    { id: "prod-lambda", label: "Lambda Functions", x: 1480, y: 330, w: 400, h: 70, type: "service", awsIcon: "simple-icons:amazonaws", showRegionTag: true, region: "ca-central-1" },
    { id: "prod-vpc", label: "VPC (Multi-AZ)", x: 1900, y: 330, w: 540, h: 70, type: "service", awsIcon: "simple-icons:amazonaws", showRegionTag: true, region: "ca-central-1" },

    // Mid-Right: Staging (CA-CENTRAL-1)
    { id: "stg-account", label: "STAGING (CA-CENTRAL-1)", x: 1260, y: 580, w: 1200, h: 380, type: "group", region: "ca-central-1" },
    { id: "stg-alb", label: "ALB", x: 1280, y: 640, w: 200, h: 80, type: "service", numberLabel: "STAGING 1", awsIcon: "simple-icons:amazonaws", showRegionTag: true, region: "ca-central-1" },
    { id: "stg-eks", label: "EKS", x: 1500, y: 640, w: 280, h: 80, type: "service", numberLabel: "STAGING 2", customIcon: <SiKubernetes className="w-7 h-7" />, showRegionTag: true, region: "ca-central-1" },
    { id: "stg-rds", label: "Aurora PostgreSQL", x: 1800, y: 640, w: 400, h: 80, type: "service", customIcon: <SiPostgresql className="w-7 h-7" />, showRegionTag: true, region: "ca-central-1" },
    { id: "stg-redis", label: "ElastiCache Redis", x: 2220, y: 640, w: 360, h: 80, type: "service", customIcon: <SiRedis className="w-7 h-7" />, showRegionTag: true, region: "ca-central-1" },
    { id: "stg-cw", label: "CloudWatch", x: 1280, y: 740, w: 220, h: 65, type: "service", awsIcon: "simple-icons:amazoncloudwatch", showRegionTag: true, region: "ca-central-1" },
    { id: "stg-kms", label: "KMS", x: 1520, y: 740, w: 180, h: 65, type: "service", awsIcon: "simple-icons:amazonaws", showRegionTag: true, region: "ca-central-1" },
    { id: "stg-s3", label: "Amazon S3", x: 1720, y: 740, w: 520, h: 65, type: "service", awsIcon: "simple-icons:amazons3", showRegionTag: true, region: "ca-central-1" },
    { id: "stg-vpc", label: "VPC (Multi-AZ)", x: 2260, y: 740, w: 320, h: 65, type: "service", awsIcon: "simple-icons:amazonaws", showRegionTag: true, region: "ca-central-1" },

    // Bottom-Right: Sandbox (CA-CENTRAL-1)
    { id: "sbx-account", label: "SANDBOX (CA-CENTRAL-1)", x: 1260, y: 990, w: 1200, h: 280, type: "group", region: "ca-central-1" },
    { id: "sbx-eks", label: "EKS", x: 1280, y: 1050, w: 300, h: 80, type: "service", numberLabel: "SANDBOX", customIcon: <SiKubernetes className="w-7 h-7" />, showRegionTag: true, region: "ca-central-1" },
    { id: "sbx-rds", label: "Aurora PostgreSQL", x: 1600, y: 1050, w: 400, h: 80, type: "service", customIcon: <SiPostgresql className="w-7 h-7" />, showRegionTag: true, region: "ca-central-1" },
    { id: "sbx-redis", label: "ElastiCache Redis", x: 2020, y: 1050, w: 360, h: 80, type: "service", customIcon: <SiRedis className="w-7 h-7" />, showRegionTag: true, region: "ca-central-1" },
    { id: "sbx-cw", label: "CloudWatch", x: 1280, y: 1150, w: 220, h: 65, type: "service", awsIcon: "simple-icons:amazoncloudwatch", showRegionTag: true, region: "ca-central-1" },
    { id: "sbx-kms", label: "KMS", x: 1520, y: 1150, w: 180, h: 65, type: "service", awsIcon: "simple-icons:amazonaws", showRegionTag: true, region: "ca-central-1" },

    // Bottom: Monitoring & Alerting
    { id: "mon-alert", label: "MONITORING & ALERTING", x: 80, y: 890, w: 1080, h: 380, type: "group" },
    { id: "central-cw", label: "CloudWatch", x: 100, y: 960, w: 260, h: 80, type: "service", awsIcon: "simple-icons:amazoncloudwatch" },
    { id: "pagerduty", label: "PagerDuty", x: 380, y: 960, w: 240, h: 80, type: "service", customIcon: <SiPagerduty className="w-7 h-7" /> },
    { id: "slack", label: "Slack", x: 640, y: 960, w: 220, h: 80, type: "service", customIcon: <SiSlack className="w-7 h-7" /> },
    { id: "datadog", label: "Datadog", x: 880, y: 960, w: 260, h: 80, type: "service", customIcon: <SiDatadog className="w-7 h-7" /> },
  ];

  // Enhanced edges with flow types
  const edges: Edge[] = [
    // Primary user flow - Traffic (Blue, Solid)
    { id: "cf-waf", from: [760, 145], to: [1020, 145], label: "CDN traffic", flowType: "traffic" },
    { id: "waf-prod", from: [1200, 145], to: [1380, 172], label: "live traffic", flowType: "traffic" },
    { id: "alb-prod-eks", from: [1480, 172], to: [1610, 172], flowType: "traffic" },
    { id: "eks-prod-rds", from: [1780, 172], to: [1910, 172], flowType: "traffic" },
    
    // ArgoCD deployment - Deployment (Orange, Dashed)
    { id: "argo-prod", from: [240, 490], to: [1610, 172], label: "deploy workloads", flowType: "deployment" },
    
    // Monitoring - Monitoring (Green, Dotted)
    { id: "prod-mon", from: [1390, 275], to: [360, 590], label: "metrics", flowType: "monitoring" },
    
    // Alerting flow - Traffic (Blue, Solid)
    { id: "cw-pagerduty", from: [230, 1000], to: [500, 1000], label: "alerting", flowType: "traffic" },
    { id: "pagerduty-slack", from: [500, 1000], to: [750, 1000], label: "notifications", flowType: "traffic" },
  ];

  const renderNode = (node: Node, index: number) => {
    const isGroup = node.type === "group";
    
    if (isGroup) {
      return (
        <motion.g 
          key={node.id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <rect
            x={node.x}
            y={node.y}
            width={node.w}
            height={node.h}
            fill={colors.panel}
            stroke={colors.stroke}
            strokeWidth={2.5}
            rx={8}
          />
          <text
            x={node.x + 20}
            y={node.y + 40}
            fill={colors.label}
            fontSize={18}
            fontWeight={700}
            letterSpacing={1}
          >
            {node.label}
          </text>
          {node.region && (
            <text
              x={node.x + 20}
              y={node.y + 70}
              fill="#6b7280"
              fontSize={14}
              fontWeight={500}
            >
              {node.region}
            </text>
          )}
        </motion.g>
      );
    }

    const hasHighlight = node.highlight;
    
    let numberLabelColor = colors.prodBox;
    if (node.numberLabel?.includes("STAGING")) numberLabelColor = colors.stagingBox;
    if (node.numberLabel === "SANDBOX" || node.numberLabel === "3") numberLabelColor = colors.sandboxBox;
    
    return (
      <g key={node.id}>
        {hasHighlight && (
          <motion.rect
            x={node.x - 6}
            y={node.y - 6}
            width={node.w + 12}
            height={node.h + 12}
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
          strokeWidth={2}
          rx={8}
        />
        
        {node.numberLabel && (
          <>
            <rect
              x={node.x + node.w - 75}
              y={node.y + 10}
              width={70}
              height={node.h < 75 ? 32 : 36}
              fill={numberLabelColor}
              rx={8}
            />
            <text
              x={node.x + node.w - 40}
              y={node.y + (node.h < 75 ? 34 : 40)}
              fill="white"
              fontSize={node.numberLabel === "3" ? 18 : 14}
              fontWeight={700}
              textAnchor="middle"
            >
              {node.numberLabel}
            </text>
          </>
        )}
        
        {/* Region tag - faint gray inside box */}
        {node.showRegionTag && node.region && (
          <text
            x={node.x + 16}
            y={node.y + node.h - 10}
            fill={colors.regionTag}
            fontSize={10}
            fontWeight={400}
            opacity={0.7}
          >
            {node.region}
          </text>
        )}
        
        {/* Service Icon - AWS or Custom */}
        <foreignObject x={node.x + 16} y={node.y + (node.h - 32) / 2} width={32} height={32}>
          <div className="flex items-center justify-center h-full" style={{ color: node.awsIcon ? "#232f3e" : colors.label }}>
            {node.awsIcon ? (
              <Icon icon={node.awsIcon} width="32" height="32" />
            ) : node.customIcon ? (
              node.customIcon
            ) : null}
          </div>
        </foreignObject>
        
        <text
          x={node.x + (node.awsIcon || node.customIcon ? 58 : 20)}
          y={node.y + node.h / 2 + (node.showRegionTag && node.region ? 0 : 7)}
          fill={colors.label}
          fontSize={node.h < 75 ? 13 : 15}
          fontWeight={hasHighlight ? 600 : 500}
        >
          {node.label}
        </text>
      </g>
    );
  };

  return (
    <div className="w-full max-w-[2600px] mx-auto rounded-xl bg-white p-12 md:p-16 overflow-hidden shadow-lg border border-gray-200">
      <svg 
        viewBox="0 0 2600 1350" 
        className="w-full h-auto"
        style={{ minHeight: '900px' }}
      >
        <rect width="100%" height="100%" fill={colors.bg} />

        {nodes.map((node, index) => renderNode(node, index))}
        {edges.map((edge, index) => (
          <CleanArrow key={edge.id} edge={edge} index={index} />
        ))}
      </svg>
    </div>
  );
}
