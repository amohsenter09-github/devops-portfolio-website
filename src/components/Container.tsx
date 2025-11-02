import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface ContainerProps {
  children: ReactNode;
  className?: string;
  maxWidth?: "sm" | "md" | "lg" | "xl" | "2xl" | "4xl" | "6xl" | "7xl" | "full";
  padding?: "none" | "sm" | "md" | "lg";
  centerContent?: boolean;
}

const maxWidthClasses = {
  sm: "max-w-sm",
  md: "max-w-md", 
  lg: "max-w-lg",
  xl: "max-w-xl",
  "2xl": "max-w-2xl",
  "4xl": "max-w-4xl",
  "6xl": "max-w-6xl",
  "7xl": "max-w-7xl",
  full: "max-w-full"
};

const paddingClasses = {
  none: "",
  sm: "px-4 sm:px-6",
  md: "px-6 sm:px-8",
  lg: "px-8 sm:px-12"
};

/**
 * Container - Centered container with consistent max-widths and padding
 * Enhanced with centerContent option for text/content centering
 */
export default function Container({ 
  children, 
  className,
  maxWidth = "7xl",
  padding = "md",
  centerContent = false
}: ContainerProps) {
  return (
    <div className={cn(
      "w-full mx-auto",
      maxWidthClasses[maxWidth],
      paddingClasses[padding],
      centerContent && "flex flex-col items-center text-center",
      className
    )}>
      {children}
    </div>
  );
}