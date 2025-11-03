'use client';

import { useEffect, useRef, useState } from 'react';
import mermaid from 'mermaid';

interface MermaidDiagramProps {
  chart: string;
  title?: string;
}

let mermaidInitialized = false;

export default function MermaidDiagram({ chart, title }: MermaidDiagramProps) {
  const mermaidRef = useRef<HTMLDivElement>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!mermaidRef.current || !chart) return;

    // Initialize Mermaid only once
    if (!mermaidInitialized) {
      mermaid.initialize({
        startOnLoad: false,
        theme: 'default',
        securityLevel: 'loose',
        flowchart: {
          useMaxWidth: true,
          htmlLabels: true,
          curve: 'basis',
        },
      });
      mermaidInitialized = true;
    }

    const id = `mermaid-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
    
    // Clear previous content
    if (mermaidRef.current) {
      mermaidRef.current.innerHTML = '';
    }
    
    setError(null);

    mermaid.render(id, chart)
      .then((result) => {
        if (mermaidRef.current) {
          mermaidRef.current.innerHTML = result.svg;
        }
      })
      .catch((error) => {
        console.error('Error rendering Mermaid diagram:', error);
        setError('Failed to render diagram');
        if (mermaidRef.current) {
          mermaidRef.current.innerHTML = '<p className="text-red-500 text-center p-4">Error rendering diagram</p>';
        }
      });
  }, [chart]);

  return (
    <div className="w-full bg-white rounded-xl p-4 md:p-6 border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300">
      {title && (
        <h3 className="text-base md:text-lg font-semibold mb-4 text-gray-800 text-center">
          {title}
        </h3>
      )}
      {error && (
        <div className="text-red-500 text-center p-4 bg-red-50 rounded">
          {error}
        </div>
      )}
      <div 
        ref={mermaidRef} 
        className="w-full flex items-center justify-center overflow-auto mermaid-container"
        style={{ minHeight: '400px' }}
      />
    </div>
  );
}

