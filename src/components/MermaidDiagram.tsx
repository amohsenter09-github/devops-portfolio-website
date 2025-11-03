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
  const [zoomLevel, setZoomLevel] = useState(1.0);
  const [initialScale, setInitialScale] = useState(1.0);

  useEffect(() => {
    if (!mermaidRef.current || !chart) return;

    // Initialize Mermaid only once
    if (!mermaidInitialized) {
      mermaid.initialize({
        startOnLoad: false,
        theme: 'default',
        securityLevel: 'loose',
        flowchart: {
          useMaxWidth: false, // Allow full width for better scaling
          htmlLabels: true,
          curve: 'basis',
          padding: 20,
        },
        gantt: {
          useMaxWidth: false,
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
                if (mermaidRef.current && transformRef.current) {
                  mermaidRef.current.innerHTML = result.svg;
                  // Make SVG interactive
                  const svg = mermaidRef.current.querySelector('svg');
                  if (svg) {
                    // Remove default Mermaid sizing constraints
                    svg.removeAttribute('width');
                    svg.removeAttribute('height');
                    svg.style.width = '100%';
                    svg.style.height = 'auto';
                    svg.style.maxWidth = 'none';
                    svg.setAttribute('preserveAspectRatio', 'none');
                    
                    // Wait for SVG to render, then calculate scale to fit
                    setTimeout(() => {
                      if (svg && transformRef.current && mermaidRef.current) {
                        // Get the actual SVG dimensions from viewBox or bounding box
                        const viewBox = svg.viewBox?.baseVal;
                        let svgWidth = viewBox?.width || 800;
                        let svgHeight = viewBox?.height || 600;
                        
                        // If no viewBox, try getBBox (but this requires SVG to be rendered)
                        if (!viewBox || svgWidth === 0 || svgHeight === 0) {
                          try {
                            const bbox = svg.getBBox();
                            svgWidth = bbox.width || 800;
                            svgHeight = bbox.height || 600;
                          } catch {
                            // Fallback to default dimensions
                            svgWidth = 800;
                            svgHeight = 600;
                          }
                        }
                        
                        // Get container dimensions - the TransformComponent wrapper
                        const transformWrapper = mermaidRef.current.closest('.react-transform-wrapper');
                        const containerElement = transformWrapper?.querySelector('.react-transform-component') as HTMLElement;
                        const containerWidth = containerElement?.clientWidth || 800;
                        const containerHeight = containerElement?.clientHeight || 700;
                        
                        // Calculate scale to fit the entire diagram within container with padding
                        const padding = 40;
                        const scaleX = (containerWidth - padding) / svgWidth;
                        const scaleY = (containerHeight - padding) / svgHeight;
                        const calculatedScale = Math.min(scaleX, scaleY, 1.0); // Cap at 100% max
                        
                        // Ensure minimum scale to prevent diagram from being too small
                        const finalScale = Math.max(calculatedScale, 0.5);
                        
                        // Center and scale the diagram to fit
                        transformRef.current.setTransform(
                          0, // center X
                          0, // center Y
                          finalScale
                        );
                        
                        setInitialScale(finalScale);
                        setZoomLevel(finalScale);
                      }
                    }, 200);
                  }
                  setSvgLoaded(true);
                }
              })
      .catch((error) => {
        if (process.env.NODE_ENV === 'development') {
          console.error('Error rendering Mermaid diagram:', error);
        }
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
        style={{ 
          height: 'calc(100vh - 200px)',
          minHeight: '600px',
          maxHeight: '900px'
        }}
      >
        <TransformWrapper
          ref={transformRef}
          initialScale={1.0}
          minScale={0.2}
          maxScale={3}
          panning={{ disabled: false }}
          wheel={{ step: 0.1 }}
          doubleClick={{ disabled: true }}
          limitToBounds={false}
          centerOnInit={true}
          centerZoomedOut={true}
          onInit={(ref) => {
            // This will be called after initial render, but we'll use setTimeout in the render callback instead
          }}
          onTransformed={(ref, state) => {
            if (ref && state) {
              setZoomLevel(state.scale);
            }
          }}
        >
          {({ zoomIn, zoomOut, resetTransform }) => {
            // Enhanced reset function that resets to the calculated fit scale
            const handleReset = () => {
              if (transformRef.current) {
                transformRef.current.setTransform(
                  0,
                  0,
                  initialScale
                );
                setZoomLevel(initialScale);
              }
            };
            
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
                  wrapperClass="w-full h-full cursor-grab"
                  contentClass="w-full h-full flex items-center justify-center p-4"
                >
                  <div 
                    ref={mermaidRef} 
                    className="mermaid-container w-full h-full flex justify-center items-center"
                    style={{ minWidth: '100%', minHeight: '100%' }}
                  />
                </TransformComponent>
                {svgLoaded && !error && (
                  <Controls
                    zoomIn={zoomIn}
                    zoomOut={zoomOut}
                    resetTransform={handleReset}
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

