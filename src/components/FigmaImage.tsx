import Image from "next/image";
import { motion } from "framer-motion";

interface FigmaImageProps {
  src: string;
  alt: string;
  caption?: string;
  width?: number;
  height?: number;
  priority?: boolean;
}

export default function FigmaImage({ 
  src, 
  alt, 
  caption, 
  width = 800, 
  height = 600,
  priority = false 
}: FigmaImageProps) {
  return (
    <motion.div 
      className="my-8"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div className="rounded-lg overflow-hidden shadow-lg border border-gray-200 dark:border-gray-700">
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          className="w-full h-auto hover:scale-105 transition-transform duration-300"
          priority={priority}
        />
      </div>
      {caption && (
        <p className="text-sm text-gray-600 dark:text-gray-400 mt-2 text-center italic">
          {caption}
        </p>
      )}
    </motion.div>
  );
}
