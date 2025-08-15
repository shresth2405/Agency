'use client';
import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import GlareButton from '@/components/ui/GlareButton';

const Hero = () => {
  const sectionRef = useRef(null);
  const textRef = useRef(null);
  const headingRef = useRef(null);
  
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    // Initial animation
    const tl = gsap.timeline();
    
    tl.from(headingRef.current, {
      duration: 1,
      opacity: 0,
      y: 100,
      ease: "power3.out"
    })
    .from(textRef.current, {
      duration: 1,
      opacity: 0,
      y: 50,
      ease: "power3.out"
    }, "-=0.5");
    
    // Scroll effect
    gsap.to(sectionRef.current, {
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true
      },
      backgroundPosition: "50% 100%",
      ease: "none"
    });
    
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);
  
  return (
    <section 
      ref={sectionRef} 
      id="home" 
      className="min-h-screen bg-gradient-to-b from-primary to-[#1a1f36] bg-fixed bg-center bg-no-repeat bg-cover relative flex items-center py-20"
    >
      <div className="absolute inset-0 bg-primary/20 backdrop-blur-[2px]"></div>
      
      <div className="container mx-auto px-4 z-10 flex flex-col items-center justify-center">
        <div className="text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-6"
          >
            <span className="bg-accent-1 text-white px-4 py-1 rounded-full text-sm inline-block mb-4">We Create Digital Experiences</span>
          </motion.div>
          
          <h1 
            ref={headingRef}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
          >
            <span className="block">Transform Your Ideas</span>
            <span className="block mt-2">Into <span className="text-secondary">Digital Reality</span></span>
          </h1>
          
          <p 
            ref={textRef}
            className="text-lg md:text-xl text-light/90 mb-10 max-w-2xl mx-auto"
          >
            We&apos;re a creative agency specializing in design, development, and digital solutions that help brands stand out in the digital landscape.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <GlareButton 
              variant="accent"
              size="lg"
              className="text-lg"
            >
              Get Started
            </GlareButton>
            
            <GlareButton 
              variant="secondary"
              size="lg"
              className="text-lg"
            >
              View Our Work
            </GlareButton>
          </div>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="flex flex-col items-center">
            <span className="text-white/80 text-sm mb-2">Scroll Down</span>
            <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center p-1">
              <motion.div 
                animate={{ 
                  y: [0, 12, 0],
                }}
                transition={{ 
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: "loop" 
                }}
                className="w-2 h-2 bg-white rounded-full"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
