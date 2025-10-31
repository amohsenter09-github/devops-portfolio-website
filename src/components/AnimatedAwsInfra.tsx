"use client";

import { motion, useInView } from "framer-motion";
import React, { useRef } from "react";
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
} from "lucide-react";

type Node = {
  id: string;
  label: string;
  x: number;
  y: number;
  w: number;
  h: number;
  type: "group" | "service";
  awsIcon?: string;
  customIcon?: React.ReactNode;
  numberLabel?: string;
  highlight?: boolean;
  delay?: number;
  region?: string;
  showRegionTag?: boolean;
};

type Edge = {
  id: string;
  from: [number, number];
  to: [number, number];
  label?: string;
  flowType?: "traffic" | "deployment" | "monitoring";
};

const colors = {
  bg: "#ffffff",
  panel: "rgba(0, 0, 0, 0.03)",
  stroke: "rgba(0, 0, 0, 0.1)",
  label: "#232f3e",
  traffic: "#2563eb",
  deployment: "#fa8900",
  monitoring: "#10b981",
  prodBox: "#dc2626",
  stagingBox: "#f59e0b",
  sandboxBox: "#10b981",
  regionTag: "#9ca3af",
};

function CleanArrow({ edge, index, isVisible }: { edge: Edge; index: number; isVisible: boolean }) {
  const { from, to, label, flowType = "traffic" } = edge;
  const markerId = `arrowhead-${edge.id}`;
  
  let arrowColor: string;
  let strokeDashArray: string;
  let strokeWidth: number;
  
  switch (flowType) {
    case "traffic":
      arrowColor = colors.traffic;
      strokeDashArray = "none";
      strokeWidth = 3;
      break;
    case "deployment":
      arrowColor = colors.deployment;
      strokeDashArray = "10 6";
      strokeWidth = 2.5;
      break;
    case "monitoring":
      arrowColor = colors.monitoring;
      strokeDashArray = "4 4";
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
        <filter id={`glow-${edge.id}`}>
          <feGaussianBlur stdDeviation="2.5" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>
      
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
        filter={flowType === "traffic" ? `url(#glow-${edge.id})` : undefined}
      />
      
      {isVisible && (
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
      )}
      
      {label && (
        <g transform={`translate(${midX}, ${midY - 18})`}>
          <rect
            x={-label.length * 5}
            y={-10}
            width={label.length * 10}
            height={18}
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
            fontSize="11"
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
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: false, margin: "-100px" });
  
  // Larger canvas and bigger service boxes to fit text properly
  const nodes: Node[] = [
    // Top: External AWS Services - Much Larger
    { id: "ext", label: "EXTERNAL AWS SERVICES", x: 100, y: 60, w: 900, h: 380, type: "group" },
    { id: "route53", label: "Route53", x: 120, y: 130, w: 240, h: 85, type: "service", awsIcon: "simple-icons:amazonroute53" },
    { id: "api-gateway", label: "API Gateway", x: 380, y: 130, w: 280, h: 85, type: "service", awsIcon: "simple-icons:amazonapigateway" },
    { id: "cloudfront", label: "CloudFront", x: 680, y: 130, w: 280, h: 85, type: "service", awsIcon: "simple-icons:amazoncloudfront" },
    { id: "s3-static", label: "Amazon S3", x: 120, y: 240, w: 280, h: 85, type: "service", awsIcon: "simple-icons:amazons3" },
    { id: "s3-portal", label: "Amazon S3", x: 420, y: 240, w: 540, h: 85, type: "service", awsIcon: "simple-icons:amazons3" },

    // Security Services - Much Larger
    { id: "sec", label: "SECURITY SERVICES", x: 1040, y: 60, w: 500, h: 380, type: "group" },
    { id: "waf", label: "AWS WAF", x: 1060, y: 130, w: 460, h: 85, type: "service", awsIcon: "simple-icons:amazonaws" },
    { id: "guardduty", label: "AWS GuardDuty", x: 1060, y: 240, w: 460, h: 85, type: "service", awsIcon: "simple-icons:amazonaws" },

    // Left: Operations (US-WEST-2) - Much Larger
    { id: "ops-account", label: "OPERATIONS (US-WEST-2)", x: 100, y: 480, w: 800, h: 580, type: "group", region: "us-west-2" },
    { id: "argocd", label: "ArgoCD (HA)", x: 120, y: 560, w: 360, h: 95, type: "service", highlight: true, customIcon: <SiArgo className="w-8 h-8" />, showRegionTag: true, region: "us-west-2" },
    { id: "bastion-ops", label: "Bastion Hosts (m5.medium)", x: 500, y: 560, w: 360, h: 95, type: "service", customIcon: <Server className="w-8 h-8" />, showRegionTag: true, region: "us-west-2" },
    { id: "mon-stack", label: "Monitoring (Prometheus/Grafana)", x: 120, y: 680, w: 740, h: 95, type: "service", customIcon: <SiPrometheus className="w-8 h-8" /> },
    { id: "vpn-ops", label: "Aviatrix VPN", x: 120, y: 800, w: 740, h: 95, type: "service", customIcon: <Network className="w-8 h-8" /> },
    { id: "lambda-ops", label: "AWS Lambda", x: 120, y: 920, w: 740, h: 90, type: "service", awsIcon: "simple-icons:amazonaws", showRegionTag: true, region: "us-west-2" },

    // Top-Right: Production (CA-CENTRAL-1) - Much Larger
    { id: "prod-account", label: "PRODUCTION (CA-CENTRAL-1)", x: 1580, y: 60, w: 1500, h: 620, type: "group", region: "ca-central-1" },
    { id: "prod-alb", label: "AWS ALB", x: 1600, y: 150, w: 260, h: 100, type: "service", numberLabel: "PROD 1", awsIcon: "simple-icons:amazonaws", showRegionTag: true, region: "ca-central-1" },
    { id: "prod-eks", label: "EKS", x: 1880, y: 150, w: 340, h: 100, type: "service", numberLabel: "PROD 2", customIcon: <SiKubernetes className="w-8 h-8" />, showRegionTag: true, region: "ca-central-1" },
    { id: "prod-rds", label: "Aurora PostgreSQL", x: 2240, y: 150, w: 500, h: 100, type: "service", numberLabel: "3", customIcon: <SiPostgresql className="w-8 h-8" />, showRegionTag: true, region: "ca-central-1" },
    { id: "prod-redis", label: "ElastiCache Redis", x: 2760, y: 150, w: 460, h: 100, type: "service", customIcon: <SiRedis className="w-8 h-8" />, showRegionTag: true, region: "ca-central-1" },
    { id: "prod-cw", label: "CloudWatch", x: 1600, y: 280, w: 280, h: 85, type: "service", awsIcon: "simple-icons:amazoncloudwatch", showRegionTag: true, region: "ca-central-1" },
    { id: "prod-kms", label: "AWS KMS", x: 1900, y: 280, w: 240, h: 85, type: "service", awsIcon: "simple-icons:amazonaws", showRegionTag: true, region: "ca-central-1" },
    { id: "prod-s3", label: "Amazon S3", x: 2160, y: 280, w: 680, h: 85, type: "service", awsIcon: "simple-icons:amazons3", showRegionTag: true, region: "ca-central-1" },
    { id: "prod-sns", label: "AWS SNS", x: 2860, y: 280, w: 200, h: 85, type: "service", awsIcon: "simple-icons:amazonaws", showRegionTag: true, region: "ca-central-1" },
    { id: "prod-sqs", label: "AWS SQS", x: 1600, y: 390, w: 240, h: 85, type: "service", awsIcon: "simple-icons:amazonaws", showRegionTag: true, region: "ca-central-1" },
    { id: "prod-lambda", label: "AWS Lambda Functions", x: 1860, y: 390, w: 500, h: 85, type: "service", awsIcon: "simple-icons:amazonaws", showRegionTag: true, region: "ca-central-1" },
    { id: "prod-vpc", label: "AWS VPC (Multi-AZ)", x: 2380, y: 390, w: 680, h: 85, type: "service", awsIcon: "simple-icons:amazonaws", showRegionTag: true, region: "ca-central-1" },

    // Mid-Right: Staging (CA-CENTRAL-1) - Much Larger
    { id: "stg-account", label: "STAGING (CA-CENTRAL-1)", x: 1580, y: 720, w: 1500, h: 460, type: "group", region: "ca-central-1" },
    { id: "stg-alb", label: "AWS ALB", x: 1600, y: 800, w: 260, h: 95, type: "service", numberLabel: "STAGING 1", awsIcon: "simple-icons:amazonaws", showRegionTag: true, region: "ca-central-1" },
    { id: "stg-eks", label: "EKS", x: 1880, y: 800, w: 340, h: 95, type: "service", numberLabel: "STAGING 2", customIcon: <SiKubernetes className="w-8 h-8" />, showRegionTag: true, region: "ca-central-1" },
    { id: "stg-rds", label: "Aurora PostgreSQL", x: 2240, y: 800, w: 500, h: 95, type: "service", customIcon: <SiPostgresql className="w-8 h-8" />, showRegionTag: true, region: "ca-central-1" },
    { id: "stg-redis", label: "ElastiCache Redis", x: 2760, y: 800, w: 460, h: 95, type: "service", customIcon: <SiRedis className="w-8 h-8" />, showRegionTag: true, region: "ca-central-1" },
    { id: "stg-cw", label: "CloudWatch", x: 1600, y: 920, w: 280, h: 80, type: "service", awsIcon: "simple-icons:amazoncloudwatch", showRegionTag: true, region: "ca-central-1" },
    { id: "stg-kms", label: "AWS KMS", x: 1900, y: 920, w: 240, h: 80, type: "service", awsIcon: "simple-icons:amazonaws", showRegionTag: true, region: "ca-central-1" },
    { id: "stg-s3", label: "Amazon S3", x: 2160, y: 920, w: 680, h: 80, type: "service", awsIcon: "simple-icons:amazons3", showRegionTag: true, region: "ca-central-1" },
    { id: "stg-vpc", label: "AWS VPC (Multi-AZ)", x: 2860, y: 920, w: 420, h: 80, type: "service", awsIcon: "simple-icons:amazonaws", showRegionTag: true, region: "ca-central-1" },

    // Bottom-Right: Sandbox (CA-CENTRAL-1) - Much Larger
    { id: "sbx-account", label: "SANDBOX (CA-CENTRAL-1)", x: 1580, y: 1220, w: 1500, h: 360, type: "group", region: "ca-central-1" },
    { id: "sbx-eks", label: "EKS", x: 1600, y: 1290, w: 380, h: 95, type: "service", numberLabel: "SANDBOX", customIcon: <SiKubernetes className="w-8 h-8" />, showRegionTag: true, region: "ca-central-1" },
    { id: "sbx-rds", label: "Aurora PostgreSQL", x: 2000, y: 1290, w: 500, h: 95, type: "service", customIcon: <SiPostgresql className="w-8 h-8" />, showRegionTag: true, region: "ca-central-1" },
    { id: "sbx-redis", label: "ElastiCache Redis", x: 2520, y: 1290, w: 460, h: 95, type: "service", customIcon: <SiRedis className="w-8 h-8" />, showRegionTag: true, region: "ca-central-1" },
    { id: "sbx-cw", label: "CloudWatch", x: 1600, y: 1410, w: 280, h: 80, type: "service", awsIcon: "simple-icons:amazoncloudwatch", showRegionTag: true, region: "ca-central-1" },
    { id: "sbx-kms", label: "AWS KMS", x: 1900, y: 1410, w: 240, h: 80, type: "service", awsIcon: "simple-icons:amazonaws", showRegionTag: true, region: "ca-central-1" },

    // Bottom: Monitoring & Alerting - Much Larger
    { id: "mon-alert", label: "MONITORING & ALERTING", x: 100, y: 1100, w: 1380, h: 480, type: "group" },
    { id: "central-cw", label: "CloudWatch", x: 120, y: 1180, w: 320, h: 95, type: "service", awsIcon: "simple-icons:amazoncloudwatch" },
    { id: "pagerduty", label: "PagerDuty", x: 460, y: 1180, w: 300, h: 95, type: "service", customIcon: <SiPagerduty className="w-8 h-8" /> },
    { id: "slack", label: "Slack", x: 780, y: 1180, w: 280, h: 95, type: "service", customIcon: <SiSlack className="w-8 h-8" /> },
    { id: "datadog", label: "Datadog", x: 1080, y: 1180, w: 320, h: 95, type: "service", customIcon: <SiDatadog className="w-8 h-8" /> },
  ];

  const edges: Edge[] = [
    { id: "cf-waf", from: [960, 172], to: [1290, 172], label: "CDN traffic", flowType: "traffic" },
    { id: "waf-prod", from: [1520, 172], to: [1720, 200], label: "live traffic", flowType: "traffic" },
    { id: "alb-prod-eks", from: [1860, 200], to: [1990, 200], flowType: "traffic" },
    { id: "eks-prod-rds", from: [2220, 200], to: [2370, 200], flowType: "traffic" },
    { id: "argo-prod", from: [300, 607], to: [1990, 200], label: "deploy workloads", flowType: "deployment" },
    { id: "prod-mon", from: [1740, 322], to: [490, 727], label: "metrics", flowType: "monitoring" },
    { id: "cw-pagerduty", from: [280, 1227], to: [610, 1227], label: "alerting", flowType: "traffic" },
    { id: "pagerduty-slack", from: [610, 1227], to: [920, 1227], label: "notifications", flowType: "traffic" },
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
            strokeWidth={1.5}
            rx={8}
          />
          <text
            x={node.x + 24}
            y={node.y + 50}
            fill={colors.label}
            fontSize={22}
            fontWeight={700}
            letterSpacing={1.2}
          >
            {node.label}
          </text>
          {node.region && (
            <text
              x={node.x + 24}
              y={node.y + 85}
              fill="#6b7280"
              fontSize={16}
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
            x={node.x - 8}
            y={node.y - 8}
            width={node.w + 16}
            height={node.h + 16}
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
          rx={8}
        />
        
        {node.numberLabel && (
          <>
            <rect
              x={node.x + node.w - 90}
              y={node.y + 12}
              width={85}
              height={node.h < 90 ? 38 : 42}
              fill={numberLabelColor}
              rx={8}
            />
            <text
              x={node.x + node.w - 47.5}
              y={node.y + (node.h < 90 ? 42 : 48)}
              fill="white"
              fontSize={node.numberLabel === "3" ? 22 : 16}
              fontWeight={700}
              textAnchor="middle"
            >
              {node.numberLabel}
            </text>
          </>
        )}
        
        {/* Elegant Region Badge */}
        {node.showRegionTag && node.region && (
          <foreignObject x={node.x + 20} y={node.y + node.h - 32} width={110} height={28}>
            <div className="text-[11px] bg-gray-200/70 px-3 py-1 rounded-full text-gray-600 font-medium text-center">
              {node.region}
            </div>
          </foreignObject>
        )}
        
        {/* Service Icon */}
        <foreignObject x={node.x + 20} y={node.y + (node.h - 38) / 2} width={38} height={38}>
          <div className="flex items-center justify-center h-full" style={{ color: node.awsIcon ? "#232f3e" : colors.label }}>
            {node.awsIcon ? (
              <Icon icon={node.awsIcon} width="38" height="38" />
            ) : node.customIcon ? (
              node.customIcon
            ) : null}
          </div>
        </foreignObject>
        
        <text
          x={node.x + (node.awsIcon || node.customIcon ? 68 : 24)}
          y={node.y + node.h / 2 + (node.showRegionTag && node.region ? -8 : 8)}
          fill={colors.label}
          fontSize={node.h < 90 ? 15 : 17}
          fontWeight={hasHighlight ? 600 : 500}
        >
          {node.label}
        </text>
      </g>
    );
  };

  return (
    <div ref={containerRef} className="w-full overflow-x-auto">
      <div className="min-w-[3200px]">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="w-full max-w-[3200px] mx-auto rounded-xl bg-white p-16 md:p-20 overflow-hidden shadow-lg border border-gray-200">
            <svg 
              viewBox="0 0 3200 1650" 
              className="w-full h-auto"
              style={{ minHeight: '1100px' }}
            >
              <rect width="100%" height="100%" fill={colors.bg} />

              {nodes.map((node, index) => renderNode(node, index))}
              {isInView && edges.map((edge, index) => (
                <CleanArrow key={edge.id} edge={edge} index={index} isVisible={isInView} />
              ))}
            </svg>
            
            {/* Legend - Bottom Right */}
            <div className="absolute bottom-8 right-12 text-sm text-gray-600 bg-white/80 backdrop-blur-sm rounded-lg shadow-lg px-6 py-4 border border-gray-200">
              <div className="flex items-center gap-6">
                <div className="flex items-center gap-2">
                  <div className="w-5 h-2 bg-blue-500 rounded-full" />
                  <span className="font-medium">Traffic</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-5 h-2 bg-orange-500 rounded-full" style={{ border: "2px dashed", borderColor: "#fa8900", background: "transparent" }} />
                  <span className="font-medium">Deployment</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-5 h-2 bg-green-500 rounded-full" style={{ border: "1px dotted", borderColor: "#10b981", background: "transparent" }} />
                  <span className="font-medium">Monitoring</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
