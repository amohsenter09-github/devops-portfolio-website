import { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface SectionProps {
  children: ReactNode;
  className?: string;
  spacing?: "sm" | "md" | "lg" | "xl" | "2xl";
  withDivider?: boolean;
  animate?: boolean;
}

const spacingClasses = {
  sm: "mb-12 md:mb-16",
  md: "mb-16 md:mb-20",
  lg: "mb-20 md:mb-24",
  xl: "mb-24 md:mb-32",
  "2xl": "mb-32 md:mb-40",
};

/**
 * Section - Consistent section spacing with optional divider
 */
export default function Section({
  children,
  className,
  spacing = "lg",
  withDivider = false,
  animate = false,
}: SectionProps) {
  if (animate) {
    return (
      <>
        <motion.section
          className={cn(spacingClasses[spacing], className)}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {children}
        </motion.section>
        {withDivider && (
          <motion.div
            className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent my-20 md:my-24"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          />
        )}
      </>
    );
  }

  return (
    <>
      <section className={cn(spacingClasses[spacing], className)}>
        {children}
      </section>
      {withDivider && (
        <div className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent my-20 md:my-24" />
      )}
    </>
  );
}

