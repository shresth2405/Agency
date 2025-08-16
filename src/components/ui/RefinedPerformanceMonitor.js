'use client';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const RefinedPerformanceMonitor = () => {
  const [fps, setFps] = useState(60);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    let frameCount = 0;
    let lastTime = performance.now();
    let animationId;

    const measureFPS = () => {
      frameCount++;
      const currentTime = performance.now();
      
      if (currentTime >= lastTime + 1000) {
        setFps(Math.round(frameCount * 1000 / (currentTime - lastTime)));
        frameCount = 0;
        lastTime = currentTime;
      }
      
      animationId = requestAnimationFrame(measureFPS);
    };

    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      const docHeight = document.documentElement.scrollHeight;
      const winHeight = window.innerHeight;
      const scrollPercent = scrollTop / (docHeight - winHeight);
      setScrollProgress(Math.min(scrollPercent * 100, 100));
    };

    measureFPS();
    window.addEventListener('scroll', handleScroll);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const getFPSColor = () => {
    if (fps >= 55) return 'from-green-400 to-emerald-400';
    if (fps >= 40) return 'from-yellow-400 to-orange-400';
    return 'from-red-400 to-pink-400';
  };

  return (
    <motion.div
      className="fixed bottom-6 left-6 z-40"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: isVisible ? 1 : 0.7, y: 0 }}
      onHoverStart={() => setIsVisible(true)}
      onHoverEnd={() => setIsVisible(false)}
    >
      <div className="bg-gray-900/80 backdrop-blur-xl rounded-2xl p-4 border border-white/10 shadow-2xl">
        <div className="space-y-3">
          {/* FPS Monitor */}
          <div className="flex items-center justify-between gap-4">
            <span className="text-white/70 text-xs font-medium">FPS</span>
            <div className="flex items-center gap-2">
              <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${getFPSColor()}`} />
              <span className="text-white font-mono text-sm">{fps}</span>
            </div>
          </div>

          {/* Scroll Progress */}
          <div className="flex items-center justify-between gap-4">
            <span className="text-white/70 text-xs font-medium">SCROLL</span>
            <div className="flex items-center gap-2">
              <div className="w-16 h-1 bg-gray-700 rounded-full overflow-hidden">
                <motion.div 
                  className="h-full bg-gradient-to-r from-purple-500 to-blue-500"
                  style={{ width: `${scrollProgress}%` }}
                  transition={{ duration: 0.1 }}
                />
              </div>
              <span className="text-white font-mono text-xs w-8">
                {Math.round(scrollProgress)}%
              </span>
            </div>
          </div>

          {/* Performance Status */}
          <motion.div 
            className="text-center"
            animate={{ opacity: isVisible ? 1 : 0 }}
          >
            <div className="text-xs text-white/50 font-medium">
              {fps >= 55 ? '🚀 SMOOTH' : fps >= 40 ? '⚡ GOOD' : '⚠️ SLOW'}
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default RefinedPerformanceMonitor;
