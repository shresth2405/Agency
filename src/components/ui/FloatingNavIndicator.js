'use client';
import { motion } from 'framer-motion';
import { useState, useEffect, useMemo } from 'react';
import Icon from './Icon';

const FloatingNavIndicator = () => {
  const [activeSection, setActiveSection] = useState('home');

  const sections = useMemo(() => [
    { id: 'home', label: 'Home', icon: 'home' },
    { id: 'about', label: 'About', icon: 'users' },
    { id: 'services', label: 'Services', icon: 'lightning' },
    { id: 'projects', label: 'Projects', icon: 'rocket' },
    { id: 'team', label: 'Team', icon: 'briefcase' },
    { id: 'faq', label: 'FAQ', icon: 'question' },
    { id: 'contact', label: 'Contact', icon: 'mail' },
  ], []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;
      
      sections.forEach((section) => {
        const element = document.getElementById(section.id);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section.id);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sections]);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.div
      initial={{ x: 100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ delay: 1, duration: 0.8, type: "spring" }}
      className="fixed right-6 top-1/2 transform -translate-y-1/2 z-40 hidden xl:block"
    >
      <div className="bg-black/20 backdrop-blur-xl rounded-2xl p-3 border border-white/10">
        <div className="space-y-3">
          {sections.map((section, index) => (
            <motion.button
              key={section.id}
              onClick={() => scrollToSection(section.id)}
              className={`relative w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 group ${
                activeSection === section.id
                  ? 'bg-gradient-to-r from-accent-1 to-accent-2 text-white scale-110'
                  : 'bg-white/5 text-white/60 hover:bg-white/10 hover:text-white'
              }`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 1.2 + index * 0.1, duration: 0.5 }}
            >
              {/* Icon */}
              <motion.span
                className="text-lg"
                animate={{
                  rotate: activeSection === section.id ? [0, 10, -10, 0] : 0
                }}
                transition={{ duration: 0.5 }}
              >
                <Icon name={section.icon} className="w-5 h-5" />
              </motion.span>

              {/* Tooltip */}
              <motion.div
                className="absolute right-full mr-3 px-3 py-2 bg-black/80 backdrop-blur-md text-white text-xs rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 pointer-events-none"
                initial={{ x: 10, opacity: 0 }}
                whileHover={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.2 }}
              >
                {section.label}
                <div className="absolute left-full top-1/2 transform -translate-y-1/2 w-0 h-0 border-l-4 border-l-black/80 border-y-4 border-y-transparent"></div>
              </motion.div>

              {/* Active indicator pulse */}
              {activeSection === section.id && (
                <motion.div
                  className="absolute inset-0 rounded-xl bg-gradient-to-r from-accent-1 to-accent-2"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.5, 0.8, 0.5]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              )}
            </motion.button>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default FloatingNavIndicator;
