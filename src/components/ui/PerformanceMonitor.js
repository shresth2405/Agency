'use client';
import { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';

const PerformanceMonitor = () => {
  const [fps, setFps] = useState(60);
  const [scrollPos, setScrollPos] = useState(0);
  const frameCount = useRef(0);
  const lastTime = useRef(performance.now());

  useEffect(() => {
    if (typeof window === 'undefined') return;

    // FPS Counter
    const calculateFPS = () => {
      frameCount.current++;
      const now = performance.now();
      
      if (now - lastTime.current >= 1000) {
        setFps(frameCount.current);
        frameCount.current = 0;
        lastTime.current = now;
      }
      
      requestAnimationFrame(calculateFPS);
    };

    // Scroll Position
    const handleScroll = () => {
      const scrollPercent = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
      setScrollPos(Math.round(scrollPercent));
    };

    calculateFPS();
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <motion.div 
      className="fixed bottom-4 left-4 z-50 bg-black/80 backdrop-blur-sm rounded-lg p-3 border border-purple-500/30 font-mono text-xs"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 2 }}
    >
      <div className="space-y-1 text-white/80">
        <div className="flex items-center space-x-2">
          <div className={`w-2 h-2 rounded-full ${fps >= 55 ? 'bg-green-400' : fps >= 30 ? 'bg-yellow-400' : 'bg-red-400'}`} />
          <span>FPS: {fps}</span>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-2 h-2 rounded-full bg-blue-400" />
          <span>Scroll: {scrollPos}%</span>
        </div>
        <div className="text-purple-300 text-[10px]">
          GSAP + Framer Motion
        </div>
      </div>
    </motion.div>
  );
};

export default PerformanceMonitor;
