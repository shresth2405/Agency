'use client';
import { motion } from 'framer-motion';

const RefinedLoadingOverlay = () => {
  return (
    <motion.div
      className="fixed inset-0 z-50 bg-gradient-to-br from-gray-900 via-purple-900/20 to-blue-900/20 flex items-center justify-center"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.8, ease: 'power2.out' }}
    >
      <div className="text-center">
        {/* Animated Logo */}
        <motion.div
          className="mb-8"
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, ease: 'back.out(1.7)' }}
        >
          <div className="w-20 h-20 mx-auto bg-gradient-to-br from-purple-500 to-blue-500 rounded-2xl flex items-center justify-center">
            <motion.div
              animate={{ 
                rotate: [0, 360],
                scale: [1, 1.1, 1]
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                ease: 'linear'
              }}
              className="text-white text-2xl"
            >
              ✦
            </motion.div>
          </div>
        </motion.div>

        {/* Loading Text */}
        <motion.h1
          className="text-2xl font-bold text-white mb-4"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Initializing Experience
        </motion.h1>

        {/* Progress Bar */}
        <motion.div
          className="w-64 h-1 bg-gray-700 rounded-full mx-auto overflow-hidden"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <motion.div
            className="h-full bg-gradient-to-r from-purple-500 to-blue-500"
            initial={{ x: '-100%' }}
            animate={{ x: '0%' }}
            transition={{ delay: 0.6, duration: 1.5, ease: 'power2.out' }}
          />
        </motion.div>

        {/* Status Text */}
        <motion.p
          className="text-white/60 text-sm mt-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          Loading enhanced GSAP effects...
        </motion.p>
      </div>

      {/* Background Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-purple-400/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0.3, 1, 0.3],
              scale: [0.5, 1, 0.5],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default RefinedLoadingOverlay;
