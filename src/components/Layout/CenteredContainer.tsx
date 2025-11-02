import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface CenteredContainerProps {
  children: ReactNode;
  className?: string;
  maxWidth?: "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl" | "6xl" | "7xl";
  padding?: "none" | "sm" | "md" | "lg" | "xl";
  centerContent?: boolean;
}

const maxWidthClasses = {
  sm: "max-w-sm",
  md: "max-w-md",
  lg: "max-w-lg",
  xl: "max-w-xl",
  "2xl": "max-w-2xl",
  "3xl": "max-w-3xl",
  "4xl": "max-w-4xl",
  "5xl": "max-w-5xl",
  "6xl": "max-w-6xl",
  "7xl": "max-w-7xl",
};

const paddingClasses = {
  none: "",
  sm: "px-4 sm:px-6",
  md: "px-6 sm:px-8",
  lg: "px-8 sm:px-12",
  xl: "px-12 sm:px-16",
};

/**
 * CenteredContainer - Ensures content is centered horizontally with consistent max-widths
 * This is an enhanced version of the Container component
 */
export default function CenteredContainer({
  children,
  className,
  maxWidth = "4xl",
  padding = "md",
  centerContent = false,
}: CenteredContainerProps) {
  return (
    <div
      className={cn(
        "w-full mx-auto",
        maxWidthClasses[maxWidth],
        paddingClasses[padding],
        centerContent && "flex flex-col items-center text-center",
        className
      )}
    >
      {children}
    </div>
  );
}

