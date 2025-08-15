'use client';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorVariant, setCursorVariant] = useState('default');
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    
    const mouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      });
    };

    window.addEventListener('mousemove', mouseMove);

    // Add listeners to change cursor on interactive elements
    const links = document.querySelectorAll('a, button');
    
    links.forEach(link => {
      link.addEventListener('mouseenter', () => setCursorVariant('hover'));
      link.addEventListener('mouseleave', () => setCursorVariant('default'));
    });

    return () => {
      window.removeEventListener('mousemove', mouseMove);
      
      links.forEach(link => {
        link.removeEventListener('mouseenter', () => setCursorVariant('hover'));
        link.removeEventListener('mouseleave', () => setCursorVariant('default'));
      });
    };
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      height: 32,
      width: 32,
      backgroundColor: 'rgba(239, 71, 111, 0)',
      border: '2px solid rgba(239, 71, 111, 0.5)',
      transition: {
        type: 'spring',
        mass: 0.3
      }
    },
    hover: {
      x: mousePosition.x - 20,
      y: mousePosition.y - 20,
      height: 40,
      width: 40,
      backgroundColor: 'rgba(239, 71, 111, 0.1)',
      border: '2px solid rgba(239, 71, 111, 0.8)',
      transition: {
        type: 'spring',
        mass: 0.3
      }
    }
  };

  if (!isClient) {
    return null;
  }

  return (
    <div suppressHydrationWarning>
      <motion.div
        className="custom-cursor rounded-full fixed top-0 left-0 pointer-events-none z-50 hidden md:block mix-blend-difference"
        variants={variants}
        animate={cursorVariant}
      />
    </div>
  );
};

export default CustomCursor;
