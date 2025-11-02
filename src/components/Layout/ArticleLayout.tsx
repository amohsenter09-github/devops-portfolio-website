import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface ArticleLayoutProps {
  children: ReactNode;
  className?: string;
  maxWidth?: "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl";
  spacing?: "tight" | "normal" | "relaxed" | "loose";
}

const maxWidthClasses = {
  sm: "max-w-sm",
  md: "max-w-md",
  lg: "max-w-lg",
  xl: "max-w-xl",
  "2xl": "max-w-2xl",
  "3xl": "max-w-3xl",
  "4xl": "max-w-4xl",
};

const spacingClasses = {
  tight: "py-12 md:py-16 space-y-12 md:space-y-16",
  normal: "py-16 md:py-24 space-y-16 md:space-y-24",
  relaxed: "py-20 md:py-32 space-y-20 md:space-y-32",
  loose: "py-24 md:py-40 space-y-24 md:space-y-40",
};

/**
 * ArticleLayout - Consistent layout for blog posts and articles
 * Ensures proper centralization, spacing, and readability
 */
export default function ArticleLayout({
  children,
  className,
  maxWidth = "3xl",
  spacing = "normal",
}: ArticleLayoutProps) {
  return (
    <main className="bg-white min-h-screen">
      <article
        className={cn(
          "mx-auto",
          "px-6 sm:px-8",
          maxWidthClasses[maxWidth],
          spacingClasses[spacing],
          className
        )}
      >
        {children}
      </article>
    </main>
  );
}

