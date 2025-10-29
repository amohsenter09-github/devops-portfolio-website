"use client";
import { useState } from "react";
import Image from "next/image";
import { Icon } from "@iconify/react";
import { Brand } from "@/lib/brands";

export default function BrandLogo({ brand }: { brand: Brand }) {
  const [imageError, setImageError] = useState(false);
  const [clearbitError, setClearbitError] = useState(false);
  
  // 1) Try Iconify brand icon first (SVG) - these are already vectors, use text color
  if (brand.icon) {
    return (
      <div className="flex h-10 items-center justify-center min-w-[120px]">
        <Icon icon={brand.icon} width="120" height="28" className="text-slate-100 opacity-90 hover:opacity-100 transition-opacity" />
      </div>
    );
  }
  
  // 2) Try custom logo URL if provided
  if (brand.logoUrl && !imageError) {
    return (
      <div className="relative h-10 w-[140px] flex items-center justify-center">
        <Image
          src={brand.logoUrl}
          alt={brand.name}
          fill
          className="object-contain opacity-90 hover:opacity-100 transition-opacity"
          sizes="140px"
          onError={() => setImageError(true)}
          style={{
            filter: 'brightness(0) invert(1)',
          }}
        />
      </div>
    );
  }
  
  // 3) Try Clearbit by domain (with error handling)
  if (brand.domain && !clearbitError) {
    return (
      <div className="relative h-10 w-[120px] flex items-center justify-center">
        <Image
          src={`https://logo.clearbit.com/${brand.domain}`}
          alt={brand.name}
          fill
          className="object-contain opacity-90 hover:opacity-100 transition-opacity"
          sizes="120px"
          onError={() => {
            setClearbitError(true);
          }}
          style={{
            filter: 'brightness(0) invert(1)',
          }}
        />
      </div>
    );
  }
  
  // 4) Text fallback (if no icon, or image failed to load)
  return (
    <div className="flex h-10 items-center justify-center px-4 text-sm text-slate-200 font-semibold whitespace-nowrap opacity-90 min-w-[100px]">
      {brand.name}
    </div>
  );
}
