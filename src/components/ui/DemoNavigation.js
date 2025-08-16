'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';

const DemoNavigation = () => {
  return (
    <motion.div 
      className="fixed top-4 right-4 z-50"
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 1 }}
    >
      <div className="bg-gray-900/80 backdrop-blur-sm rounded-lg p-4 border border-purple-500/30">
        <h3 className="text-white text-sm font-medium mb-2">Demo Pages:</h3>
        <div className="space-y-2">
          <Link 
            href="/"
            className="block px-3 py-2 text-sm text-purple-300 hover:text-white hover:bg-purple-600/20 rounded transition-colors"
          >
            🎭 Loading Animation
          </Link>
          <Link 
            href="/home-enhanced"
            className="block px-3 py-2 text-sm text-blue-300 hover:text-white hover:bg-blue-600/20 rounded transition-colors"
          >
            ✨ GSAP ScrollSmoother
          </Link>
          <Link 
            href="/home-refined"
            className="block px-3 py-2 text-sm text-green-300 hover:text-white hover:bg-green-600/20 rounded transition-colors"
          >
            🎨 Original Refined
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default DemoNavigation;
