'use client';

import { useEffect, useRef, useState } from 'react';
import mermaid from 'mermaid';
import { TransformWrapper, TransformComponent, ReactZoomPanPinchRef } from 'react-zoom-pan-pinch';
import { ChevronUp, ChevronDown, ChevronLeft, ChevronRight, ZoomIn, ZoomOut } from 'lucide-react';

interface MermaidDiagramProps {
  chart: string;
  title?: string;
}

let mermaidInitialized = false;

// Controls Component
function Controls({ zoomIn, zoomOut, resetTransform, panUp, panDown, panLeft, panRight, zoom }: {
  zoomIn: () => void;
  zoomOut: () => void;
  resetTransform: () => void;
  panUp: () => void;
  panDown: () => void;
  panLeft: () => void;
  panRight: () => void;
  zoom: number;
}) {
  return (
    <div className="absolute top-4 right-4 z-10 flex flex-col gap-2">
      {/* Navigation Controls */}
      <div className="bg-white rounded-lg shadow-md p-2 flex flex-col items-center gap-1">
        <button
          onClick={panUp}
          className="p-1.5 hover:bg-gray-100 rounded transition-colors"
          aria-label="Pan up"
        >
          <ChevronUp className="w-4 h-4 text-gray-700" />
        </button>
        <div className="flex gap-1">
          <button
            onClick={panLeft}
            className="p-1.5 hover:bg-gray-100 rounded transition-colors"
            aria-label="Pan left"
          >
            <ChevronLeft className="w-4 h-4 text-gray-700" />
          </button>
          <button
            onClick={panRight}
            className="p-1.5 hover:bg-gray-100 rounded transition-colors"
            aria-label="Pan right"
          >
            <ChevronRight className="w-4 h-4 text-gray-700" />
          </button>
        </div>
        <button
          onClick={panDown}
          className="p-1.5 hover:bg-gray-100 rounded transition-colors"
          aria-label="Pan down"
        >
          <ChevronDown className="w-4 h-4 text-gray-700" />
        </button>
      </div>

      {/* Zoom Controls */}
      <div className="bg-white rounded-lg shadow-md p-2 flex flex-col items-center gap-1">
        <button
          onClick={zoomIn}
          className="p-1.5 hover:bg-gray-100 rounded transition-colors"
          aria-label="Zoom in"
        >
          <ZoomIn className="w-4 h-4 text-gray-700" />
        </button>
        <button
          onClick={zoomOut}
          className="p-1.5 hover:bg-gray-100 rounded transition-colors"
          aria-label="Zoom out"
        >
          <ZoomOut className="w-4 h-4 text-gray-700" />
        </button>
        <button
          onClick={resetTransform}
          className="p-1.5 px-3 text-xs font-medium text-gray-700 hover:bg-gray-100 rounded transition-colors"
          aria-label="Reset view"
        >
          Reset
        </button>
      </div>

      {/* Zoom Level Indicator */}
      <div className="bg-white rounded-lg shadow-md px-3 py-2 text-xs font-medium text-gray-700">
        {Math.round(zoom * 100)}%
      </div>
    </div>
  );
}

export default function MermaidDiagram({ chart, title }: MermaidDiagramProps) {
  const mermaidRef = useRef<HTMLDivElement>(null);
  const transformRef = useRef<ReactZoomPanPinchRef | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [svgLoaded, setSvgLoaded] = useState(false);
  const [zoomLevel, setZoomLevel] = useState(1);

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
    setSvgLoaded(false);

    mermaid.render(id, chart)
      .then((result) => {
        if (mermaidRef.current) {
          mermaidRef.current.innerHTML = result.svg;
          setSvgLoaded(true);
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
    <div className="w-full bg-white rounded-xl p-4 md:p-6 border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300 relative">
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
        className="w-full relative"
        style={{ minHeight: '400px' }}
      >
        <TransformWrapper
          ref={transformRef}
          initialScale={1}
          minScale={0.5}
          maxScale={3}
          panning={{ disabled: false }}
          wheel={{ step: 0.1 }}
          doubleClick={{ disabled: true }}
          onTransformed={(ref, state) => {
            setZoomLevel(state.scale);
          }}
        >
          {({ zoomIn, zoomOut, resetTransform }) => {
            // Pan functions using setTransform
            const handlePanUp = () => {
              if (transformRef.current) {
                const state = transformRef.current.state;
                transformRef.current.setTransform(
                  state.positionX,
                  state.positionY - 50,
                  state.scale
                );
              }
            };
            const handlePanDown = () => {
              if (transformRef.current) {
                const state = transformRef.current.state;
                transformRef.current.setTransform(
                  state.positionX,
                  state.positionY + 50,
                  state.scale
                );
              }
            };
            const handlePanLeft = () => {
              if (transformRef.current) {
                const state = transformRef.current.state;
                transformRef.current.setTransform(
                  state.positionX - 50,
                  state.positionY,
                  state.scale
                );
              }
            };
            const handlePanRight = () => {
              if (transformRef.current) {
                const state = transformRef.current.state;
                transformRef.current.setTransform(
                  state.positionX + 50,
                  state.positionY,
                  state.scale
                );
              }
            };

            return (
              <>
                <TransformComponent
                  wrapperClass="w-full h-full"
                  contentClass="flex items-center justify-center"
                >
                  <div 
                    ref={mermaidRef} 
                    className="mermaid-container"
                    style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
                  />
                </TransformComponent>
                {svgLoaded && !error && (
                  <Controls
                    zoomIn={zoomIn}
                    zoomOut={zoomOut}
                    resetTransform={resetTransform}
                    panUp={handlePanUp}
                    panDown={handlePanDown}
                    panLeft={handlePanLeft}
                    panRight={handlePanRight}
                    zoom={zoomLevel}
                  />
                )}
              </>
            );
          }}
        </TransformWrapper>
      </div>
    </div>
  );
}

