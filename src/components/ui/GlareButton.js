'use client';
import { motion } from 'framer-motion';
import { useState } from 'react';

const GlareButton = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className = '', 
  onClick,
  disabled = false,
  ...props 
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const variants = {
    primary: 'bg-gradient-to-r from-accent-2 to-accent-3 text-white',
    secondary: 'bg-transparent border-2 border-accent-1 text-accent-1 hover:bg-accent-1 hover:text-primary',
    accent: 'bg-gradient-to-r from-accent-1 to-accent-2 text-primary',
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className={`
        relative overflow-hidden rounded-lg font-semibold
        transition-all duration-300 ease-out
        ${variants[variant]}
        ${sizes[size]}
        ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
        ${className}
      `}
      onClick={disabled ? undefined : onClick}
      disabled={disabled}
      {...props}
    >
      {/* Glare Effect */}
      <motion.div
        initial={{ x: '-100%', opacity: 0 }}
        animate={isHovered ? { x: '100%', opacity: 1 } : { x: '-100%', opacity: 0 }}
        transition={{ duration: 0.6, ease: 'easeInOut' }}
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
        style={{
          transform: 'skewX(-20deg)',
        }}
      />

      {/* Button Content */}
      <span className="relative z-10 flex items-center justify-center gap-2">
        {children}
      </span>

      {/* Hover Background Overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isHovered ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="absolute inset-0 bg-white/10"
      />
    </motion.button>
  );
};

export default GlareButton;
