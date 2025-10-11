// lib/figma.ts
export interface FigmaFile {
  name: string;
  lastModified: string;
  thumbnailUrl: string;
  version: string;
}

export interface FigmaNode {
  id: string;
  name: string;
  type: string;
  children?: FigmaNode[];
}

export async function getFigmaFile(fileId: string): Promise<FigmaFile | null> {
  try {
    const response = await fetch(`https://api.figma.com/v1/files/${fileId}`, {
      headers: {
        'X-Figma-Token': process.env.FIGMA_TOKEN || ''
      }
    });

    if (!response.ok) {
      throw new Error(`Figma API error: ${response.status}`);
    }

    const data = await response.json();
    
    return {
      name: data.name,
      lastModified: data.lastModified,
      thumbnailUrl: data.thumbnailUrl,
      version: data.version
    };
  } catch (error) {
    console.error('Error fetching Figma file:', error);
    return null;
  }
}

export async function getFigmaImages(fileId: string, nodeIds: string[]): Promise<Record<string, string>> {
  try {
    const response = await fetch(`https://api.figma.com/v1/images/${fileId}?ids=${nodeIds.join(',')}&format=png&scale=2`, {
      headers: {
        'X-Figma-Token': process.env.FIGMA_TOKEN || ''
      }
    });

    if (!response.ok) {
      throw new Error(`Figma API error: ${response.status}`);
    }

    const data = await response.json();
    return data.images;
  } catch (error) {
    console.error('Error fetching Figma images:', error);
    return {};
  }
}

// Helper function to generate Figma embed URLs
export function generateFigmaEmbedUrl(fileId: string, nodeId?: string): string {
  const baseUrl = `https://www.figma.com/file/${fileId}`;
  return nodeId ? `${baseUrl}?node-id=${nodeId}` : baseUrl;
}

// Helper function to generate Figma share URLs
export function generateFigmaShareUrl(fileId: string, nodeId?: string): string {
  const baseUrl = `https://www.figma.com/file/${fileId}`;
  return nodeId ? `${baseUrl}?node-id=${nodeId}&t=share` : `${baseUrl}?t=share`;
}

// Kubernetes-specific Figma configurations
export const kubernetesFigmaConfigs = {
  microservices: {
    fileId: "YOUR_MICROSERVICES_FILE_ID",
    title: "Kubernetes Microservices Architecture",
    description: "Complete microservices ecosystem with ArgoCD GitOps workflow",
    nodeIds: ["microservices-overview", "service-mesh", "argocd-flow"]
  },
  argocd: {
    fileId: "YOUR_ARGOCD_FILE_ID", 
    title: "ArgoCD GitOps Implementation",
    description: "Automated GitOps deployment flow with ArgoCD",
    nodeIds: ["argocd-apps", "gitops-workflow", "sync-status"]
  },
  observability: {
    fileId: "YOUR_OBSERVABILITY_FILE_ID",
    title: "Observability Stack",
    description: "Comprehensive monitoring with Prometheus, Grafana, and Jaeger",
    nodeIds: ["prometheus-setup", "grafana-dashboards", "jaeger-tracing"]
  }
};

// Helper function to get Kubernetes diagram data
export async function getKubernetesDiagram(type: keyof typeof kubernetesFigmaConfigs) {
  const config = kubernetesFigmaConfigs[type];
  const [fileData, imageData] = await Promise.all([
    getFigmaFile(config.fileId),
    config.nodeIds.length > 0 ? getFigmaImages(config.fileId, config.nodeIds) : Promise.resolve({})
  ]);
  
  return {
    ...config,
    fileData,
    images: imageData
  };
}
