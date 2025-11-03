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
    <div className="absolute top-4 right-4 z-50 flex flex-col gap-2 pointer-events-auto">
      {/* Navigation Controls */}
      <div className="bg-white rounded-lg shadow-md p-2 flex flex-col items-center gap-1">
        <button
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            panUp();
          }}
          className="p-1.5 hover:bg-gray-100 rounded transition-colors cursor-pointer"
          aria-label="Pan up"
          type="button"
        >
          <ChevronUp className="w-4 h-4 text-gray-700" />
        </button>
        <div className="flex gap-1">
          <button
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              panLeft();
            }}
            className="p-1.5 hover:bg-gray-100 rounded transition-colors cursor-pointer"
            aria-label="Pan left"
            type="button"
          >
            <ChevronLeft className="w-4 h-4 text-gray-700" />
          </button>
          <button
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              panRight();
            }}
            className="p-1.5 hover:bg-gray-100 rounded transition-colors cursor-pointer"
            aria-label="Pan right"
            type="button"
          >
            <ChevronRight className="w-4 h-4 text-gray-700" />
          </button>
        </div>
        <button
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            panDown();
          }}
          className="p-1.5 hover:bg-gray-100 rounded transition-colors cursor-pointer"
          aria-label="Pan down"
          type="button"
        >
          <ChevronDown className="w-4 h-4 text-gray-700" />
        </button>
      </div>

      {/* Zoom Controls */}
      <div className="bg-white rounded-lg shadow-md p-2 flex flex-col items-center gap-1">
        <button
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            zoomIn();
          }}
          className="p-1.5 hover:bg-gray-100 rounded transition-colors cursor-pointer"
          aria-label="Zoom in"
          type="button"
        >
          <ZoomIn className="w-4 h-4 text-gray-700" />
        </button>
        <button
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            zoomOut();
          }}
          className="p-1.5 hover:bg-gray-100 rounded transition-colors cursor-pointer"
          aria-label="Zoom out"
          type="button"
        >
          <ZoomOut className="w-4 h-4 text-gray-700" />
        </button>
        <button
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            resetTransform();
          }}
          className="p-1.5 px-3 text-xs font-medium text-gray-700 hover:bg-gray-100 rounded transition-colors cursor-pointer"
          aria-label="Reset view"
          type="button"
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
  const [zoomLevel, setZoomLevel] = useState(1.1);

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
          // Make SVG interactive
          const svg = mermaidRef.current.querySelector('svg');
          if (svg) {
            svg.style.width = '100%';
            svg.style.height = 'auto';
            svg.style.maxWidth = 'none';
            svg.setAttribute('preserveAspectRatio', 'xMidYMid meet');
          }
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
        className="w-full relative border border-gray-200 rounded-lg overflow-hidden"
        style={{ minHeight: '500px', height: '600px' }}
      >
        <TransformWrapper
          ref={transformRef}
          initialScale={1.1}
          minScale={0.5}
          maxScale={3}
          panning={{ disabled: false }}
          wheel={{ step: 0.1 }}
          doubleClick={{ disabled: true }}
          limitToBounds={false}
          centerOnInit={true}
          onTransformed={(ref, state) => {
            if (ref && state) {
              setZoomLevel(state.scale);
            }
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
                  wrapperStyle={{
                    width: '100%',
                    height: '100%',
                    cursor: 'grab',
                  }}
                  contentStyle={{
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <div 
                    ref={mermaidRef} 
                    className="mermaid-container"
                    style={{ 
                      width: '100%', 
                      height: '100%',
                      display: 'flex', 
                      justifyContent: 'center', 
                      alignItems: 'center',
                      pointerEvents: 'auto'
                    }}
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

