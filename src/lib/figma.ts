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
