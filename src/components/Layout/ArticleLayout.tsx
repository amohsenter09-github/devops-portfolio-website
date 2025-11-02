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
  const { padding, spacing: spaceY } = {
    tight: { padding: "py-12 md:py-16", spacing: "space-y-12 md:space-y-16" },
    normal: { padding: "py-16 md:py-24", spacing: "space-y-16 md:space-y-24" },
    relaxed: { padding: "py-20 md:py-32", spacing: "space-y-20 md:space-y-32" },
    loose: { padding: "py-24 md:py-40", spacing: "space-y-24 md:space-y-40" },
  }[spacing];

  return (
    <main className="bg-white min-h-screen w-full">
      <article
        className={cn(
          "w-full",
          "mx-auto",
          "px-6 sm:px-8",
          maxWidthClasses[maxWidth],
          padding,
          "flex flex-col items-center",
          spaceY,
          className
        )}
      >
        {children}
      </article>
    </main>
  );
}
