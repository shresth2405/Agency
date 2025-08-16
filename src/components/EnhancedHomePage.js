'use client';
import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import GSAPTitle from '../sections/GSAPTitle';
import GSAPInfo from '../sections/GSAPInfo';
import HeroSimple from '../sections/HeroSimple';
import ServicesSimple from '../sections/ServicesSimple';
import AboutSimple from '../sections/AboutSimple';
import ProjectsSimple from '../sections/ProjectsSimple';
import ContactSimple from '../sections/ContactSimple';
import DemoNavigation from './ui/DemoNavigation';

// Register GSAP plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const EnhancedHomePage = () => {
  const wrapperRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const wrapper = wrapperRef.current;
    const content = contentRef.current;
    let winWidth = window.innerWidth;

    // Create 3D tilt and scroll effects
    const initEnhancedEffects = () => {
      // Set initial 3D perspective
      gsap.set(wrapper, {
        perspective: 1000,
        transformStyle: 'preserve-3d'
      });

      // Mouse movement 3D tilt effect
      const handleMouseMove = (e) => {
        const { clientX, clientY } = e;
        const centerX = winWidth / 2;
        const centerY = window.innerHeight / 2;
        
        const rotateY = (clientX - centerX) / centerX * 5; // Max 5 degrees
        const rotateX = (clientY - centerY) / centerY * -3; // Max 3 degrees
        
        gsap.to('.tilt-section', {
          rotateY: rotateY,
          rotateX: rotateX,
          duration: 0.5,
          ease: 'power2.out'
        });
      };

      // Mouse press effects
      const handleMouseDown = () => {
        gsap.to('body', {
          backgroundColor: '#0f0f23',
          duration: 0.3
        });
        gsap.to('.tilt-section', {
          scale: 0.98,
          duration: 0.2
        });
        gsap.set(content, { cursor: 'grabbing' });
      };

      const handleMouseUp = () => {
        gsap.to('body', {
          backgroundColor: '#1a1a2e',
          duration: 0.5
        });
        gsap.to('.tilt-section', {
          scale: 1,
          duration: 0.3
        });
        gsap.set(content, { cursor: 'grab' });
      };

      // Parallax scroll effects
      gsap.utils.toArray('.parallax-fast').forEach(element => {
        gsap.fromTo(element, {
          y: -100
        }, {
          y: 100,
          scrollTrigger: {
            trigger: element,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1.5
          }
        });
      });

      gsap.utils.toArray('.parallax-slow').forEach(element => {
        gsap.fromTo(element, {
          y: -30
        }, {
          y: 30,
          scrollTrigger: {
            trigger: element,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 2
          }
        });
      });

      // Section reveal animations
      gsap.utils.toArray('.reveal-up').forEach(element => {
        gsap.fromTo(element, {
          autoAlpha: 0,
          y: 60,
          rotateX: 10
        }, {
          autoAlpha: 1,
          y: 0,
          rotateX: 0,
          duration: 1,
          scrollTrigger: {
            trigger: element,
            start: 'top 85%',
            end: 'top 60%',
            scrub: 1,
            toggleActions: 'play none none reverse'
          }
        });
      });

      // Floating elements animation
      gsap.utils.toArray('.floating-orb').forEach((orb, index) => {
        gsap.to(orb, {
          y: 'random(-20, 20)',
          x: 'random(-10, 10)',
          rotation: 'random(-5, 5)',
          duration: 'random(3, 6)',
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
          delay: index * 0.5
        });
      });

      // Add event listeners
      wrapper.addEventListener('mousemove', handleMouseMove);
      wrapper.addEventListener('mousedown', handleMouseDown);
      wrapper.addEventListener('mouseup', handleMouseUp);
      
      // Set cursor style
      gsap.set(content, { cursor: 'grab' });

      // Cleanup function
      return () => {
        wrapper.removeEventListener('mousemove', handleMouseMove);
        wrapper.removeEventListener('mousedown', handleMouseDown);
        wrapper.removeEventListener('mouseup', handleMouseUp);
      };
    };

    // Resize handler
    const onResize = () => {
      winWidth = window.innerWidth;
      ScrollTrigger.refresh();
    };

    // Initialize effects
    const cleanup = initEnhancedEffects();
    window.addEventListener('resize', onResize);

    // Cleanup on unmount
    return () => {
      if (cleanup) cleanup();
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return (
    <div 
      ref={wrapperRef}
      className="scroll-wrapper min-h-screen"
      style={{
        background: `
          linear-gradient(rgba(139,92,246,.05) 2px, transparent 2px),
          linear-gradient(90deg, rgba(139,92,246,.05) 2px, transparent 2px),
          linear-gradient(rgba(59,130,246,.03) 1px, transparent 1px),
          linear-gradient(90deg, rgba(59,130,246,.03) 1px, transparent 1px)
        `,
        backgroundSize: '80px 80px, 80px 80px, 16px 16px, 16px 16px',
        backgroundPosition: '-1px -1px, -1px -1px, -1px -1px, -1px -1px'
      }}
    >
      {/* Demo Navigation */}
      <DemoNavigation />
      
      <div ref={contentRef} className="scroll-content">
        {/* Floating Background Orbs */}
        <div className="fixed inset-0 pointer-events-none overflow-hidden">
          <div className="floating-orb absolute top-20 left-10 w-64 h-64 bg-gradient-purple-blue rounded-full opacity-10 blur-3xl" />
          <div className="floating-orb absolute top-1/3 right-20 w-48 h-48 bg-gradient-blue-purple rounded-full opacity-15 blur-2xl" />
          <div className="floating-orb absolute bottom-1/4 left-1/4 w-32 h-32 bg-gradient-purple-blue rounded-full opacity-20 blur-xl" />
          <div className="floating-orb absolute bottom-10 right-10 w-56 h-56 bg-gradient-blue-purple rounded-full opacity-8 blur-3xl" />
        </div>

        {/* Main Content Sections with 3D Effects */}
        <div className="tilt-section">
          <section className="parallax-slow reveal-up">
            <GSAPTitle />
          </section>

          <section className="parallax-fast reveal-up">
            <GSAPInfo />
          </section>

          <section className="parallax-slow reveal-up">
            <HeroSimple />
          </section>

          <section className="parallax-fast reveal-up">
            <ServicesSimple />
          </section>

          <section className="parallax-slow reveal-up">
            <AboutSimple />
          </section>

          <section className="parallax-fast reveal-up">
            <ProjectsSimple />
          </section>

          <section className="parallax-slow reveal-up">
            <ContactSimple />
          </section>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          className="fixed bottom-8 left-1/2 transform -translate-x-1/2 text-white/60 text-4xl pointer-events-none"
          animate={{ 
            y: [0, 10, 0],
            opacity: [0.6, 1, 0.6]
          }}
          transition={{ 
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          ↓
        </motion.div>
      </div>
    </div>
  );
};

export default EnhancedHomePage;
