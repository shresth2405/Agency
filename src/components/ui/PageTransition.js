'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const PageTransition = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading delay
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          className="fixed inset-0 bg-primary z-[9999] flex items-center justify-center"
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0,
            transition: { duration: 0.5, delay: 0.2 }
          }}
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <motion.div 
              className="inline-block mb-8"
              animate={{ 
                rotate: 360,
                transition: { 
                  duration: 1.5, 
                  repeat: Infinity, 
                  ease: "linear" 
                }
              }}
            >
              <div className="w-16 h-16 rounded-full border-t-4 border-l-4 border-secondary"></div>
            </motion.div>
            
            <motion.h2 
              className="text-3xl font-bold text-white mb-2"
              animate={{ 
                opacity: [0.5, 1, 0.5],
                transition: { 
                  duration: 1.5, 
                  repeat: Infinity,
                  repeatType: "mirror"
                }
              }}
            >
              Creative<span className="text-secondary">Sync</span>
            </motion.h2>
            
            <motion.p 
              className="text-light/70"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              Loading creative experiences...
            </motion.p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PageTransition;
