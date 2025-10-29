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
      <div className="flex h-8 items-center justify-center">
        <Icon icon={brand.icon} width="120" height="24" className="text-gray-600" />
      </div>
    );
  }
  
  // 2) Then try Clearbit by domain
  if (brand.domain && !imageError) {
    return (
      <div className="relative h-8 w-[120px]">
        <Image
          src={`https://logo.clearbit.com/${brand.domain}`}
          alt={brand.name}
          fill
          className="object-contain grayscale opacity-50"
          sizes="120px"
          onError={() => setImageError(true)}
        />
      </div>
    );
  }
  
  // 3) Text fallback (if no icon, or image failed to load)
  return (
    <div className="flex h-8 items-center justify-center px-3 text-sm text-gray-600 font-medium whitespace-nowrap opacity-50">
      {brand.name}
    </div>
  );
}
