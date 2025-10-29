"use client";

import { useEffect, useRef, useState } from "react";

interface CredlyBadgeProps {
  badgeId: string;
  width?: number;
  height?: number;
}

export default function CredlyBadge({ badgeId, width = 180, height = 270 }: CredlyBadgeProps) {
  const badgeRef = useRef<HTMLDivElement>(null);
  const [scriptLoaded, setScriptLoaded] = useState(false);

  useEffect(() => {
    // Check if script already exists
    const existingScript = document.querySelector('script[src="https://www.credly.com/assets/utilities/embed.js"]');
    
    if (existingScript) {
      setScriptLoaded(true);
      return;
    }

    // Load Credly embed script
    const script = document.createElement("script");
    script.src = "https://www.credly.com/assets/utilities/embed.js";
    script.async = true;
    script.onload = () => setScriptLoaded(true);
    document.body.appendChild(script);

    return () => {
      // Don't remove script as it might be used by other badges
    };
  }, []);

  return (
    <>
      <div
        ref={badgeRef}
        data-iframe-width={width}
        data-iframe-height={height}
        data-share-badge-id={badgeId}
        data-share-badge-host="https://www.credly.com"
        className="credly-badge-embed"
        style={{ width: `${width}px`, height: `${height}px`, minHeight: `${height}px` }}
      />
      {!scriptLoaded && (
        <div className="w-full h-full flex items-center justify-center bg-gray-100 rounded animate-pulse">
          <span className="text-xs text-gray-400">Loading badge...</span>
        </div>
      )}
    </>
  );
}

