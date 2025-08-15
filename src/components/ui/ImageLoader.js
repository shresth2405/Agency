'use client';
import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const ImageLoader = ({ src, alt, className, width = 1200, height = 800 }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Skeleton loading effect */}
      {!isLoaded && (
        <div className="absolute inset-0 bg-dark animate-pulse flex items-center justify-center">
          <svg 
            className="w-12 h-12 text-secondary/30 animate-spin" 
            xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            viewBox="0 0 24 24"
          >
            <circle 
              className="opacity-25" 
              cx="12" 
              cy="12" 
              r="10" 
              stroke="currentColor" 
              strokeWidth="4"
            ></circle>
            <path 
              className="opacity-75" 
              fill="currentColor" 
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>
        </div>
      )}
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoaded ? 1 : 0 }}
        transition={{ duration: 0.5 }}
      >
        <Image 
          src={src} 
          alt={alt} 
          width={width} 
          height={height}
          onLoad={() => setIsLoaded(true)}
          className="object-cover w-full h-full"
        />
      </motion.div>
    </div>
  );
};

export default ImageLoader;
