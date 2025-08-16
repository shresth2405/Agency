'use client';
import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';

const GSAPTitle = () => {
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const indicatorRef = useRef(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const title = titleRef.current;
    const subtitle = subtitleRef.current;
    const indicator = indicatorRef.current;

    // Title entrance animation
    const tl = gsap.timeline({ delay: 0.5 });
    
    tl.fromTo(title, {
      autoAlpha: 0,
      yPercent: 100
    }, {
      autoAlpha: 1,
      yPercent: 0,
      duration: 1.2,
      ease: 'power3.out'
    })
    .fromTo(subtitle, {
      autoAlpha: 0,
      y: 30
    }, {
      autoAlpha: 1,
      y: 0,
      duration: 0.8,
      ease: 'power2.out'
    }, '-=0.6')
    .fromTo(indicator, {
      autoAlpha: 0
    }, {
      autoAlpha: 1,
      duration: 1,
      ease: 'power2.out'
    }, '-=0.4');

  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center relative bg-gradient-primary overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-purple-blue rounded-full opacity-20 blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-blue-purple rounded-full opacity-15 blur-3xl animate-pulse delay-1000" />
      </div>

      {/* Main Content */}
      <div className="text-center relative z-10 px-4">
        <div className="mb-8">
          <motion.div 
            className="text-lg md:text-xl font-light text-purple-300 mb-4 font-mono tracking-widest"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <em>GSAP + FRAMER MOTION</em>
          </motion.div>
          
          <div ref={titleRef} className="overflow-hidden">
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold text-gradient-hero mb-4 leading-tight text-reveal">
              Scroll Demo
            </h1>
          </div>
          
          <motion.div 
            className="text-lg md:text-xl font-light text-blue-300 mb-6 font-mono tracking-widest"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <em>Enhanced v2024</em>
          </motion.div>
          
          <div ref={subtitleRef} className="overflow-hidden">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-medium text-gradient-accent text-reveal">
              <span className="font-light">with</span> Enhanced Effects
            </h2>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          ref={indicatorRef}
          className="text-6xl text-white/60 cursor-pointer"
          animate={{ 
            y: [0, 20, 0],
            opacity: [0.6, 1, 0.6]
          }}
          transition={{ 
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          whileHover={{ scale: 1.2 }}
        >
          ☟
        </motion.div>

        {/* Credit */}
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/70 text-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
        >
          Enhanced by: <span className="text-purple-400 font-medium">CreativeSync Agency</span>
        </motion.div>
      </div>
    </section>
  );
};

export default GSAPTitle;
