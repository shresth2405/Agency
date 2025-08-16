'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';

const RefinedNavigation = ({ currentSection = 0 }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const navItems = [
    { label: 'GSAP Demo', href: '/home-enhanced', icon: '⚡', color: 'from-purple-500 to-blue-500' },
    { label: 'Refined Enhanced', href: '/home-refined-enhanced', icon: '✨', color: 'from-blue-500 to-purple-500' },
    { label: 'Original', href: '/', icon: '🎭', color: 'from-purple-400 to-pink-400' },
    { label: 'Simple', href: '/home-refined', icon: '🎨', color: 'from-green-400 to-blue-400' }
  ];

  const sectionIndicators = [
    'Intro', 'About', 'Hero', 'Services', 'About', 'Projects', 'Contact'
  ];

  return (
    <>
      {/* Main Navigation */}
      <motion.div 
        className="fixed top-6 right-6 z-50"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5, duration: 0.6, ease: 'back.out(1.7)' }}
      >
        <div 
          className="relative"
          onMouseEnter={() => setIsExpanded(true)}
          onMouseLeave={() => setIsExpanded(false)}
        >
          {/* Toggle Button */}
          <motion.button
            className="w-14 h-14 bg-gradient-to-br from-purple-600/80 to-blue-600/80 backdrop-blur-md rounded-2xl border border-white/10 shadow-2xl flex items-center justify-center group"
            whileHover={{ scale: 1.1, rotate: 180 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              animate={{ rotate: isExpanded ? 45 : 0 }}
              transition={{ duration: 0.3 }}
              className="text-white text-xl"
            >
              ⚙️
            </motion.div>
          </motion.button>

          {/* Expanded Menu */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: -20 }}
            animate={{ 
              opacity: isExpanded ? 1 : 0, 
              scale: isExpanded ? 1 : 0.8,
              y: isExpanded ? 0 : -20
            }}
            transition={{ duration: 0.3, ease: 'back.out(1.7)' }}
            className="absolute top-16 right-0 w-64 bg-gray-900/90 backdrop-blur-xl rounded-2xl border border-white/10 shadow-2xl overflow-hidden"
            style={{ pointerEvents: isExpanded ? 'auto' : 'none' }}
          >
            <div className="p-4">
              <h3 className="text-white font-bold text-sm mb-4 flex items-center gap-2">
                <span className="text-purple-400">🚀</span>
                Demo Navigation
              </h3>
              
              <div className="space-y-2">
                {navItems.map((item, index) => (
                  <Link 
                    key={item.href}
                    href={item.href}
                    className="block group"
                  >
                    <motion.div
                      className="flex items-center gap-3 p-3 rounded-xl border border-transparent hover:border-white/20 transition-all duration-300"
                      whileHover={{ x: 5, scale: 1.02 }}
                      style={{
                        background: `linear-gradient(135deg, ${item.color.includes('purple') ? 'rgba(139,92,246,0.1)' : 'rgba(59,130,246,0.1)'} 0%, transparent 100%)`
                      }}
                    >
                      <span className="text-lg">{item.icon}</span>
                      <span className="text-white/90 font-medium text-sm group-hover:text-white transition-colors">
                        {item.label}
                      </span>
                    </motion.div>
                  </Link>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Section Progress Indicator */}
      <motion.div
        className="fixed left-6 top-1/2 transform -translate-y-1/2 z-40"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
      >
        <div className="flex flex-col space-y-4">
          {sectionIndicators.map((section, index) => (
            <motion.div
              key={index}
              className="relative group"
              whileHover={{ scale: 1.2 }}
            >
              <div 
                className={`w-3 h-3 rounded-full border-2 transition-all duration-500 ${
                  index === currentSection 
                    ? 'bg-gradient-to-r from-purple-500 to-blue-500 border-white/50 shadow-lg' 
                    : 'bg-transparent border-white/30 hover:border-white/60'
                }`}
              />
              
              {/* Section Label */}
              <motion.div
                className="absolute left-6 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={{ x: -10 }}
                whileHover={{ x: 0 }}
              >
                <div className="bg-gray-900/90 backdrop-blur-sm px-3 py-1 rounded-lg border border-white/10">
                  <span className="text-white/90 text-xs font-medium whitespace-nowrap">
                    {section}
                  </span>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Quick Actions */}
      <motion.div
        className="fixed bottom-6 right-6 z-40"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.6 }}
      >
        <div className="flex gap-3">
          <motion.button
            className="w-12 h-12 bg-gradient-to-br from-purple-500/20 to-blue-500/20 backdrop-blur-md rounded-xl border border-white/10 flex items-center justify-center text-white/70 hover:text-white transition-colors"
            whileHover={{ scale: 1.1, rotate: 360 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            ↑
          </motion.button>
          
          <motion.button
            className="w-12 h-12 bg-gradient-to-br from-blue-500/20 to-purple-500/20 backdrop-blur-md rounded-xl border border-white/10 flex items-center justify-center text-white/70 hover:text-white transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })}
          >
            ↓
          </motion.button>
        </div>
      </motion.div>
    </>
  );
};

export default RefinedNavigation;
