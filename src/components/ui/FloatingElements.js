'use client';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const FloatingElements = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return <div className="fixed inset-0 pointer-events-none z-0" />; // Return empty placeholder
  }

  // Generate deterministic elements that won't change between renders
  const elements = Array.from({ length: 8 }, (_, i) => ({
    id: i,
    size: 50 + (i * 10), // Deterministic size
    x: 10 + (i * 12), // Deterministic x position
    y: 10 + (i * 8), // Deterministic y position
    delay: i * 0.5, // Deterministic delay
  }));

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" suppressHydrationWarning>
      {elements.map((element) => (
        <motion.div
          key={element.id}
          className="absolute rounded-full opacity-5"
          style={{
            width: element.size,
            height: element.size,
            left: `${element.x}%`,
            top: `${element.y}%`,
            background: `linear-gradient(45deg, #FFD166, #EF476F, #06D6A0)`,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, 15, -15, 0],
            rotate: [0, 180, 360],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 20 + Math.random() * 10,
            repeat: Infinity,
            delay: element.delay,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
};

export default FloatingElements;
