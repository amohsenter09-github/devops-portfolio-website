"use client";
import { useState } from "react";
import Image from "next/image";
import { Icon } from "@iconify/react";
import { Brand } from "@/lib/brands";

export default function BrandLogo({ brand }: { brand: Brand }) {
  const [imageError, setImageError] = useState(false);
  
  // 1) Try Iconify brand icon first (SVG)
  if (brand.icon) {
    return (
      <div className="flex h-10 items-center justify-center opacity-60 hover:opacity-80 transition-opacity">
        <Icon icon={brand.icon} width="120" height="28" className="text-gray-700" />
      </div>
    );
  }
  
  // 2) Try custom logo URL if provided
  if (brand.logoUrl && !imageError) {
    return (
      <div className="relative h-10 w-[140px] opacity-60 hover:opacity-80 transition-opacity">
        <Image
          src={brand.logoUrl}
          alt={brand.name}
          fill
          className="object-contain"
          sizes="140px"
          onError={() => setImageError(true)}
        />
      </div>
    );
  }
  
  // 3) Then try Clearbit by domain
  if (brand.domain && !imageError) {
    return (
      <div className="relative h-10 w-[120px] opacity-60 hover:opacity-80 transition-opacity">
        <Image
          src={`https://logo.clearbit.com/${brand.domain}`}
          alt={brand.name}
          fill
          className="object-contain"
          sizes="120px"
          onError={() => setImageError(true)}
        />
      </div>
    );
  }
  
  // 4) Text fallback (if no icon, or image failed to load)
  return (
    <div className="flex h-10 items-center justify-center px-3 text-sm text-gray-600 font-medium whitespace-nowrap">
      {brand.name}
    </div>
  );
}
