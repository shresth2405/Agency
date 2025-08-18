'use client';
import { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';
import Link from 'next/link';
import Icon from '../ui/Icon';

const EnhancedNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeItem, setActiveItem] = useState(0);
  const [hoveredItem, setHoveredItem] = useState(null);
  const { scrollY } = useScroll();

  const navItems = useMemo(() => [
    { title: 'Home', href: '/', icon: 'home' },
    { title: 'About', href: '#about', icon: 'users' },
    { title: 'Services', href: '#services', icon: 'lightning' },
    { title: 'Projects', href: '#projects', icon: 'rocket' },
    { title: 'Team', href: '#team', icon: 'briefcase' },
    { title: 'FAQ', href: '#faq', icon: 'question' },
    { title: 'Pricing', href: '/pricing', icon: 'currency' },
    { title: 'Contact', href: '#contact', icon: 'mail' },
  ], []);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 50);
  });

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => {
        if (item.href.startsWith('#')) {
          return document.querySelector(item.href);
        }
        return null;
      }).filter(Boolean);

      const scrollPosition = window.scrollY + 100;
      
      sections.forEach((section, index) => {
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionBottom = sectionTop + section.offsetHeight;
          
          if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
            setActiveItem(index + 1); // +1 because Home is index 0
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [navItems]);

  const navVariants = {
    hidden: { 
      y: -100,
      opacity: 0 
    },
    visible: { 
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: -20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 20
      }
    }
  };

  const logoVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: { 
      scale: 1, 
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 15
      }
    }
  };

  return (
    <motion.nav
      variants={navVariants}
      initial="hidden"
      animate="visible"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled 
          ? 'bg-primary/95 backdrop-blur-xl shadow-2xl border-b border-white/10' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Animated Logo */}
          <motion.div
            variants={logoVariants}
            whileHover={{ 
              scale: 1.1,
              rotate: [0, -10, 10, -5, 5, 0],
              transition: { duration: 0.5 }
            }}
            className="relative"
          >
            <Link href="/" className="text-3xl font-bold text-white relative z-10">
              <motion.span
                initial={{ color: "#ffffff" }}
                animate={{ 
                  color: ["#ffffff", "#60A5FA", "#8B5CF6", "#ffffff"],
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                Creative
              </motion.span>
              <motion.span 
                className="text-secondary"
                initial={{ scale: 1 }}
                animate={{ 
                  scale: [1, 1.1, 1],
                  rotateY: [0, 180, 360]
                }}
                transition={{ 
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                Sync
              </motion.span>
            </Link>
            
            {/* Logo background glow */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-accent-1/20 to-accent-2/20 rounded-lg blur-xl"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.6, 0.3]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="relative"
                onHoverStart={() => setHoveredItem(index)}
                onHoverEnd={() => setHoveredItem(null)}
              >
                <Link
                  href={item.href}
                  className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 flex items-center gap-2 ${
                    activeItem === index 
                      ? 'text-accent-1' 
                      : 'text-white hover:text-accent-1'
                  }`}
                >
                  {/* Icon with animation */}
                  <motion.span
                    animate={{
                      rotate: hoveredItem === index ? [0, -10, 10, 0] : 0,
                      scale: hoveredItem === index ? 1.2 : 1
                    }}
                    transition={{ duration: 0.3 }}
                    className="text-base"
                  >
                    <Icon name={item.icon} className="w-5 h-5" />
                  </motion.span>
                  
                  {/* Text */}
                  <motion.span
                    animate={{
                      y: hoveredItem === index ? -2 : 0
                    }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    {item.title}
                  </motion.span>

                  {/* Active indicator */}
                  {activeItem === index && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute inset-0 bg-gradient-to-r from-accent-1/20 to-accent-2/20 rounded-lg border border-accent-1/30"
                      initial={false}
                      transition={{ type: "spring", stiffness: 500, damping: 30 }}
                    />
                  )}

                  {/* Hover effect */}
                  {hoveredItem === index && activeItem !== index && (
                    <motion.div
                      className="absolute inset-0 bg-white/10 rounded-lg"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      transition={{ duration: 0.2 }}
                    />
                  )}
                </Link>
              </motion.div>
            ))}

            {/* Animated CTA Button */}
            <motion.div
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="ml-4"
            >
              <motion.button
                className="relative px-6 py-3 bg-gradient-to-r from-accent-1 to-accent-2 text-white rounded-lg font-semibold overflow-hidden group"
                whileHover="hover"
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-accent-2 to-accent-1"
                  initial={{ x: "-100%" }}
                  variants={{
                    hover: { x: "0%" }
                  }}
                  transition={{ duration: 0.3 }}
                />
                <span className="relative z-10">Get Started</span>
                
                {/* Sparkle effect */}
                <motion.div
                  className="absolute top-1/2 left-1/2 w-1 h-1 bg-white rounded-full"
                  animate={{
                    scale: [0, 1, 0],
                    x: [-20, 20],
                    y: [-10, 10],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: Math.random() * 2
                  }}
                />
              </motion.button>
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className="lg:hidden text-white relative w-10 h-10 flex items-center justify-center"
            onClick={() => setIsOpen(!isOpen)}
            whileTap={{ scale: 0.9 }}
          >
            <motion.div
              animate={isOpen ? "open" : "closed"}
              className="w-6 h-6 relative"
            >
              <motion.span
                className="absolute top-1 left-0 w-6 h-0.5 bg-white rounded-full"
                variants={{
                  closed: { rotate: 0, y: 0 },
                  open: { rotate: 45, y: 8 }
                }}
                transition={{ duration: 0.3 }}
              />
              <motion.span
                className="absolute top-3 left-0 w-6 h-0.5 bg-white rounded-full"
                variants={{
                  closed: { opacity: 1 },
                  open: { opacity: 0 }
                }}
                transition={{ duration: 0.3 }}
              />
              <motion.span
                className="absolute top-5 left-0 w-6 h-0.5 bg-white rounded-full"
                variants={{
                  closed: { rotate: 0, y: 0 },
                  open: { rotate: -45, y: -8 }
                }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0, y: -20 }}
              animate={{ opacity: 1, height: "auto", y: 0 }}
              exit={{ opacity: 0, height: 0, y: -20 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="lg:hidden bg-primary/95 backdrop-blur-xl rounded-2xl mt-4 overflow-hidden border border-white/10"
            >
              <div className="p-6">
                {navItems.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.3 }}
                  >
                    <Link
                      href={item.href}
                      className="flex items-center gap-3 py-4 text-white hover:text-accent-1 transition-colors border-b border-white/10 last:border-b-0 group"
                      onClick={() => setIsOpen(false)}
                    >
                      <motion.span
                        className="text-xl"
                        whileHover={{ 
                          rotate: [0, -10, 10, 0],
                          scale: 1.2
                        }}
                        transition={{ duration: 0.3 }}
                      >
                        <Icon name={item.icon} className="w-6 h-6" />
                      </motion.span>
                      <motion.span
                        className="font-medium"
                        whileHover={{ x: 5 }}
                        transition={{ type: "spring", stiffness: 400 }}
                      >
                        {item.title}
                      </motion.span>
                    </Link>
                  </motion.div>
                ))}
                
                <motion.button
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: navItems.length * 0.1, duration: 0.3 }}
                  className="w-full mt-6 px-6 py-4 bg-gradient-to-r from-accent-1 to-accent-2 text-white rounded-lg font-semibold relative overflow-hidden group"
                  whileTap={{ scale: 0.98 }}
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-accent-2 to-accent-1 opacity-0 group-hover:opacity-100"
                    transition={{ duration: 0.3 }}
                  />
                  <span className="relative z-10">Get Started</span>
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Scroll progress indicator */}
      <motion.div
        className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-accent-1 to-accent-2"
        style={{
          width: scrolled ? "100%" : "0%"
        }}
        initial={{ scaleX: 0 }}
        animate={{ scaleX: scrolled ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        transformOrigin="left"
      />
    </motion.nav>
  );
};

export default EnhancedNavbar;
