"use client";

import { motion } from "framer-motion";
import React, { useRef, useState } from "react";
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
  ChevronUp,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ZoomIn,
  ZoomOut,
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
        <g transform={`translate(${midX}, ${midY - 25})`}>
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
  const svgRef = useRef<SVGSVGElement>(null);
  
  // Pan and zoom state
  const [pan, setPan] = useState({ x: 0, y: 0 });
  const [scale, setScale] = useState(1.2); // Start at 120% as default
  const [isInView, setIsInView] = useState(false);
  
  const PAN_STEP = 50; // Pixels to pan per click
  const ZOOM_STEP = 0.1;
  const MIN_SCALE = 0.2;
  const MAX_SCALE = 2.0; // Allow up to 200% zoom
  
  const handlePan = (direction: 'up' | 'down' | 'left' | 'right') => {
    setPan((prev) => {
      switch (direction) {
        case 'up':
          return { ...prev, y: prev.y + PAN_STEP }; // See content above = move SVG down
        case 'down':
          return { ...prev, y: prev.y - PAN_STEP }; // See content below = move SVG up
        case 'left':
          return { ...prev, x: prev.x + PAN_STEP }; // See content left = move SVG right
        case 'right':
          return { ...prev, x: prev.x - PAN_STEP }; // See content right = move SVG left
        default:
          return prev;
      }
    });
  };
  
  const handleZoom = (type: 'in' | 'out') => {
    setScale((prev) => {
      const newScale = type === 'in' 
        ? Math.min(prev + ZOOM_STEP, MAX_SCALE)
        : Math.max(prev - ZOOM_STEP, MIN_SCALE);
      return newScale;
    });
  };
  
  const resetView = () => {
    setPan({ x: 0, y: 0 });
    setScale(1.2); // Reset to 120% default
  };

  // Track when component is in view for animations
  React.useEffect(() => {
    if (containerRef.current) {
      const observer = new IntersectionObserver(
        ([entry]) => {
          setIsInView(entry.isIntersecting);
        },
        { threshold: 0.1 }
      );
      observer.observe(containerRef.current);
      return () => observer.disconnect();
    }
  }, []);
  
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

    // Top-Right: Production (CA-CENTRAL-1) - Much Larger - Fixed width to fit all cards
    { id: "prod-account", label: "PRODUCTION (CA-CENTRAL-1)", x: 1580, y: 60, w: 1600, h: 620, type: "group", region: "ca-central-1" },
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

    // Mid-Right: Staging (CA-CENTRAL-1) - Much Larger - Fixed width to fit all cards
    { id: "stg-account", label: "STAGING (CA-CENTRAL-1)", x: 1580, y: 720, w: 1720, h: 460, type: "group", region: "ca-central-1" },
    { id: "stg-alb", label: "AWS ALB", x: 1600, y: 800, w: 260, h: 95, type: "service", numberLabel: "STAGING 1", awsIcon: "simple-icons:amazonaws", showRegionTag: true, region: "ca-central-1" },
    { id: "stg-eks", label: "EKS", x: 1880, y: 800, w: 340, h: 95, type: "service", numberLabel: "STAGING 2", customIcon: <SiKubernetes className="w-8 h-8" />, showRegionTag: true, region: "ca-central-1" },
    { id: "stg-rds", label: "Aurora PostgreSQL", x: 2240, y: 800, w: 500, h: 95, type: "service", customIcon: <SiPostgresql className="w-8 h-8" />, showRegionTag: true, region: "ca-central-1" },
    { id: "stg-redis", label: "ElastiCache Redis", x: 2760, y: 800, w: 460, h: 95, type: "service", customIcon: <SiRedis className="w-8 h-8" />, showRegionTag: true, region: "ca-central-1" },
    { id: "stg-cw", label: "CloudWatch", x: 1600, y: 920, w: 280, h: 80, type: "service", awsIcon: "simple-icons:amazoncloudwatch", showRegionTag: true, region: "ca-central-1" },
    { id: "stg-kms", label: "AWS KMS", x: 1900, y: 920, w: 240, h: 80, type: "service", awsIcon: "simple-icons:amazonaws", showRegionTag: true, region: "ca-central-1" },
    { id: "stg-s3", label: "Amazon S3", x: 2160, y: 920, w: 560, h: 80, type: "service", awsIcon: "simple-icons:amazons3", showRegionTag: true, region: "ca-central-1" },
    { id: "stg-vpc", label: "AWS VPC (Multi-AZ)", x: 2740, y: 920, w: 480, h: 80, type: "service", awsIcon: "simple-icons:amazonaws", showRegionTag: true, region: "ca-central-1" },

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

  // Main organized arrow animations - Key flows only, routed to avoid text
  const edges: Edge[] = [
    // Primary user traffic flow (Blue, Solid) - Routed above/below text areas
    { id: "cf-waf", from: [820, 145], to: [1290, 145], label: "CDN traffic", flowType: "traffic" }, // Above boxes
    { id: "waf-prod", from: [1520, 145], to: [1720, 140], label: "live traffic", flowType: "traffic" }, // Above ALB box
    { id: "alb-prod-eks", from: [1860, 140], to: [1990, 140], flowType: "traffic" }, // Above boxes
    { id: "eks-prod-rds", from: [2220, 140], to: [2370, 140], flowType: "traffic" }, // Above boxes
    { id: "rds-prod-redis", from: [2740, 140], to: [2980, 140], flowType: "traffic" }, // Above boxes
    
    // ArgoCD deployment flows (Orange, Dashed) - Routed around boxes
    { id: "argo-prod", from: [300, 607], to: [1990, 140], label: "deploy workloads", flowType: "deployment" }, // Goes to top of EKS
    { id: "argo-stg", from: [300, 607], to: [1990, 760], label: "deploy workloads", flowType: "deployment" }, // Goes above staging boxes
    { id: "argo-sbx", from: [300, 607], to: [1790, 1240], label: "deploy workloads", flowType: "deployment" }, // Goes above sandbox boxes
    
    // Monitoring flows (Green, Dotted) - Routed around boxes
    { id: "prod-mon", from: [1740, 240], to: [490, 727], label: "metrics", flowType: "monitoring" }, // Goes below prod boxes, above ops boxes
    { id: "stg-mon", from: [1740, 880], to: [490, 727], label: "metrics", flowType: "monitoring" }, // Goes below staging boxes
    { id: "sbx-mon", from: [1790, 1360], to: [490, 727], label: "metrics", flowType: "monitoring" }, // Goes below sandbox boxes
    
    // Alerting flow (Blue, Solid) - Already routed between boxes horizontally
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
    <div ref={containerRef} className="w-full relative">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
        className="relative w-full"
      >
        {/* Navigation Controls */}
        <div className="absolute top-4 right-4 z-10 flex flex-col gap-2">
          {/* Pan Controls */}
          <div className="bg-white/90 backdrop-blur-sm rounded-lg shadow-lg p-2 border border-gray-200">
            <div className="flex flex-col gap-1">
              <button
                onClick={() => handlePan('up')}
                className="p-2 hover:bg-gray-100 rounded transition-colors flex items-center justify-center"
                aria-label="Pan Up"
              >
                <ChevronUp size={20} className="text-gray-700" />
              </button>
              <div className="flex gap-1">
                <button
                  onClick={() => handlePan('left')}
                  className="p-2 hover:bg-gray-100 rounded transition-colors flex items-center justify-center"
                  aria-label="Pan Left"
                >
                  <ChevronLeft size={20} className="text-gray-700" />
                </button>
                <button
                  onClick={() => handlePan('right')}
                  className="p-2 hover:bg-gray-100 rounded transition-colors flex items-center justify-center"
                  aria-label="Pan Right"
                >
                  <ChevronRight size={20} className="text-gray-700" />
                </button>
              </div>
              <button
                onClick={() => handlePan('down')}
                className="p-2 hover:bg-gray-100 rounded transition-colors flex items-center justify-center"
                aria-label="Pan Down"
              >
                <ChevronDown size={20} className="text-gray-700" />
              </button>
            </div>
          </div>
          
          {/* Zoom Controls */}
          <div className="bg-white/90 backdrop-blur-sm rounded-lg shadow-lg p-2 border border-gray-200 flex flex-col gap-1">
            <button
              onClick={() => handleZoom('in')}
              className="p-2 hover:bg-gray-100 rounded transition-colors flex items-center justify-center"
              aria-label="Zoom In"
              disabled={scale >= MAX_SCALE}
            >
              <ZoomIn size={20} className="text-gray-700" />
            </button>
            <button
              onClick={() => handleZoom('out')}
              className="p-2 hover:bg-gray-100 rounded transition-colors flex items-center justify-center"
              aria-label="Zoom Out"
              disabled={scale <= MIN_SCALE}
            >
              <ZoomOut size={20} className="text-gray-700" />
            </button>
            <button
              onClick={resetView}
              className="p-2 hover:bg-gray-100 rounded transition-colors text-xs text-gray-700 font-medium"
              aria-label="Reset View"
            >
              Reset
            </button>
          </div>
          
          {/* Scale Indicator */}
          <div className="bg-white/90 backdrop-blur-sm rounded-lg shadow-lg px-3 py-2 border border-gray-200 text-xs text-gray-600 font-medium text-center">
            {Math.round(scale * 100)}%
          </div>
        </div>

        {/* Diagram Container */}
        <div className="w-full rounded-xl bg-white p-8 md:p-12 overflow-hidden shadow-lg border border-gray-200">
          <div 
            className="w-full overflow-auto"
            style={{ 
              height: 'calc(100vh - 200px)',
              minHeight: '600px',
              maxHeight: '900px'
            }}
          >
            <svg 
              ref={svgRef}
              viewBox="0 0 3300 1650" 
              className="w-full h-auto"
              style={{
                transform: `translate(${pan.x}px, ${pan.y}px) scale(${scale})`,
                transformOrigin: 'top left',
                transition: 'transform 0.2s ease-out',
              }}
            >
              <rect width="100%" height="100%" fill={colors.bg} />
              {nodes.map((node, index) => renderNode(node, index))}
              {isInView && edges.map((edge, index) => (
                <CleanArrow key={edge.id} edge={edge} index={index} isVisible={isInView} />
              ))}
            </svg>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
