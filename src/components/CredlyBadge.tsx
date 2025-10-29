"use client";

import { useEffect, useRef } from "react";

interface CredlyBadgeProps {
  badgeId: string;
  width?: number;
  height?: number;
}

export default function CredlyBadge({ badgeId, width = 180, height = 270 }: CredlyBadgeProps) {
  const badgeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Load Credly embed script
    const script = document.createElement("script");
    script.src = "https://www.credly.com/assets/utilities/embed.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup
      const existingScript = document.querySelector('script[src="https://www.credly.com/assets/utilities/embed.js"]');
      if (existingScript) {
        document.body.removeChild(existingScript);
      }
    };
  }, []);

  return (
    <div
      ref={badgeRef}
      data-iframe-width={width}
      data-iframe-height={height}
      data-share-badge-id={badgeId}
      data-share-badge-host="https://www.credly.com"
      className="credly-badge-embed"
      style={{ width: `${width}px`, height: `${height}px` }}
    />
  );
}

