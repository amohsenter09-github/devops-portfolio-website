# 🎨 How to Add Your Kubernetes Microservices Figma Designs

## 📋 Step-by-Step Guide

### 1. Create Your Figma Designs

**Design Ideas for Kubernetes Microservices:**

#### 🐳 Microservices Architecture Overview
- **API Gateway** (Kong, Istio Gateway)
- **User Service** (Node.js, Python, Go)
- **Order Service** (Java Spring Boot)
- **Payment Service** (Python FastAPI)
- **Notification Service** (Node.js)
- **Database Services** (PostgreSQL, Redis, MongoDB)

#### 🔄 ArgoCD GitOps Flow
- **Git Repository** → **ArgoCD** → **Kubernetes Clusters**
- **Application Sets** for multi-environment deployments
- **Sync Status** indicators (Synced, OutOfSync, Unknown)
- **Rollback** capabilities and health checks

#### 🌐 Service Mesh (Istio)
- **Sidecar Proxies** (Envoy)
- **Traffic Management** (Virtual Services, Destination Rules)
- **Security Policies** (mTLS, Authorization Policies)
- **Observability** (Metrics, Tracing, Logging)

#### 📊 Observability Stack
- **Prometheus** for metrics collection
- **Grafana** dashboards for visualization
- **Jaeger** for distributed tracing
- **ELK Stack** (Elasticsearch, Logstash, Kibana) for logging

### 2. Get Your Figma File URLs

1. **Open your Figma design**
2. **Click "Share" button** (top-right)
3. **Copy the link** - it looks like:
   ```
   https://www.figma.com/file/ABC123DEF456/Your-Design-Name
   ```
4. **Extract the File ID** - the part after `/file/`:
   ```
   ABC123DEF456
   ```

### 3. Update Your Portfolio Code

#### Option A: Update Individual Components

```tsx
// In src/app/kubernetes/page.tsx
<FigmaEmbed
  url="https://www.figma.com/file/YOUR_ACTUAL_FILE_ID/Kubernetes-Microservices"
  title="Interactive Microservices Architecture"
  description="Explore the interactive microservices architecture with ArgoCD deployment flows"
  height={600}
/>
```

#### Option B: Update Configuration File

```typescript
// In src/lib/figma.ts
export const kubernetesFigmaConfigs = {
  microservices: {
    fileId: "YOUR_ACTUAL_FILE_ID", // Replace with your real file ID
    title: "Kubernetes Microservices Architecture",
    description: "Complete microservices ecosystem with ArgoCD GitOps workflow",
    nodeIds: ["microservices-overview", "service-mesh", "argocd-flow"]
  }
};
```

### 4. Add Static Images (Optional)

If you want to add static images alongside Figma embeds:

1. **Export images from Figma** (PNG, SVG, or JPG)
2. **Place them in** `/public/images/` folder
3. **Update the image paths** in your components:

```tsx
<FigmaImage
  src="/images/k8s-microservices-overview.png" // Your actual image
  alt="Kubernetes Microservices Architecture"
  caption="Complete microservices ecosystem with ArgoCD GitOps workflow"
  width={600}
  height={400}
  priority={true}
/>
```

### 5. Test Your Integration

1. **Run the development server**: `npm run dev`
2. **Visit** `/kubernetes` page
3. **Check** that your Figma designs load correctly
4. **Test** the expand/collapse functionality
5. **Verify** external links work

## 🎯 Design Tips for Kubernetes Diagrams

### Visual Elements to Include:

#### 🏗️ Architecture Components
- **Kubernetes Clusters** (EKS, GKE, AKS)
- **Namespaces** (dev, staging, prod)
- **Pods** and **Services**
- **Ingress Controllers**
- **Service Mesh** components

#### 🔄 GitOps Flow
- **Git Repository** (GitHub, GitLab)
- **ArgoCD Applications**
- **Sync Status** indicators
- **Deployment Pipeline** stages

#### 📊 Observability
- **Metrics Flow** (Prometheus → Grafana)
- **Tracing Flow** (Jaeger)
- **Logging Flow** (ELK Stack)
- **Alerting** (PagerDuty, Slack)

### Color Coding Suggestions:

- **🔵 Blue**: Core Kubernetes components
- **🟢 Green**: ArgoCD and GitOps elements
- **🟣 Purple**: Observability stack
- **🟠 Orange**: Service mesh components
- **🔴 Red**: Security and RBAC elements

## 🚀 Example Figma File Structure

```
📁 Kubernetes Microservices Portfolio
├── 🎯 Page 1: Architecture Overview
│   ├── Microservices ecosystem
│   ├── Service communication
│   └── Data flow
├── 🔄 Page 2: ArgoCD GitOps
│   ├── Application definitions
│   ├── Sync workflows
│   └── Multi-environment setup
├── 🌐 Page 3: Service Mesh
│   ├── Istio components
│   ├── Traffic management
│   └── Security policies
└── 📊 Page 4: Observability
    ├── Monitoring stack
    ├── Dashboard layouts
    └── Alerting flows
```

## 🔧 Troubleshooting

### Common Issues:

1. **"Invalid URL" Error**
   - ✅ Check that your Figma file is public or shared
   - ✅ Verify the file ID is correct
   - ✅ Ensure the file exists and is accessible

2. **Images Not Loading**
   - ✅ Check image paths in `/public/images/`
   - ✅ Verify image file names match exactly
   - ✅ Ensure images are optimized for web

3. **Figma Embed Not Working**
   - ✅ Make sure the file is shared publicly
   - ✅ Check if your organization has Figma restrictions
   - ✅ Try using the direct Figma URL first

## 📞 Need Help?

If you need assistance with:
- Creating Kubernetes diagrams in Figma
- Setting up the Figma API integration
- Customizing the components
- Adding more interactive features

Just let me know! I can help you create specific diagrams or troubleshoot any issues.
