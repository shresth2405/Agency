'use client';
import { motion } from 'framer-motion';
import { useState } from 'react';

const AnimatedInput = ({ 
  label, 
  type = 'text', 
  name, 
  value, 
  onChange, 
  required = false,
  multiline = false,
  rows = 3,
  ...props 
}) => {
  const [focused, setFocused] = useState(false);

  const InputComponent = multiline ? motion.textarea : motion.input;

  return (
    <div className="relative">
      <motion.label
        animate={{
          scale: focused || value ? 0.85 : 1,
          y: focused || value ? -24 : 0,
          x: focused || value ? 0 : 0,
        }}
        transition={{ duration: 0.2, ease: "easeOut" }}
        className={`absolute left-4 top-3 pointer-events-none transition-colors duration-200 ${
          focused ? 'text-accent-1' : 'text-gray-400'
        }`}
      >
        {label}
      </motion.label>
      
      <InputComponent
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        required={required}
        rows={multiline ? rows : undefined}
        whileFocus={{ scale: 1.02 }}
        transition={{ duration: 0.2 }}
        className={`
          w-full px-4 py-3 bg-dark border-2 rounded-lg 
          text-white transition-all duration-200
          focus:outline-none focus:border-accent-1 focus:shadow-lg focus:shadow-accent-1/20
          ${focused ? 'border-accent-1' : 'border-white/10'}
          ${multiline ? 'resize-none' : ''}
        `}
        {...props}
      />
      
      {/* Animated underline */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: focused ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-accent-1 to-accent-2 origin-left"
      />
    </div>
  );
};

export default AnimatedInput;
