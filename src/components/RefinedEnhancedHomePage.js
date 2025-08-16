'use client';
import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/dist/ScrollToPlugin';
import RefinedGSAPTitle from './sections/RefinedGSAPTitle';
import RefinedGSAPInfo from './sections/RefinedGSAPInfo';
import RefinedHeroSection from './sections/RefinedHeroSection';
import RefinedServicesSection from './sections/RefinedServicesSection';
import RefinedAboutSection from './sections/RefinedAboutSection';
import RefinedProjectsSection from './sections/RefinedProjectsSection';
import RefinedContactSection from './sections/RefinedContactSection';
import RefinedTeamSection from './sections/RefinedTeamSection';
import RefinedNavigation from './ui/RefinedNavigation';
import RefinedParticleSystem from './ui/RefinedParticleSystem';
import RefinedMagneticElements from './ui/RefinedMagneticElements';
import RefinedPerformanceMonitor from './ui/RefinedPerformanceMonitor';
import RefinedLoadingOverlay from './ui/RefinedLoadingOverlay';

// Register GSAP plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
}

const RefinedEnhancedHomePage = () => {
  const wrapperRef = useRef(null);
  const contentRef = useRef(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentSection, setCurrentSection] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const wrapper = wrapperRef.current;
    const content = contentRef.current;
    let winWidth = window.innerWidth;
    let winHeight = window.innerHeight;

    // Initialize loading sequence
    const initializeApp = () => {
      // Preload animation
      gsap.timeline()
        .set(wrapper, { opacity: 0 })
        .to(wrapper, { 
          opacity: 1, 
          duration: 1,
          ease: 'power2.out',
          onComplete: () => setIsLoaded(true)
        });
    };

    // Enhanced 3D effects with smooth performance
    const initRefinedEffects = () => {
      // Set 3D perspective with hardware acceleration
      gsap.set(wrapper, {
        perspective: 1500,
        transformStyle: 'preserve-3d',
        willChange: 'transform'
      });

      // Set default scroller for all ScrollTrigger instances
      ScrollTrigger.defaults({
        scroller: window
      });
      
      // Optimized mouse movement tracking
      let mouseX = 0, mouseY = 0;
      let currentX = 0, currentY = 0;
      
      const handleMouseMove = (e) => {
        mouseX = (e.clientX - winWidth / 2) / winWidth;
        mouseY = (e.clientY - winHeight / 2) / winHeight;
        setMousePosition({ x: e.clientX, y: e.clientY });
      };

      // Smooth mouse interpolation
      const updateMousePosition = () => {
        currentX += (mouseX - currentX) * 0.1;
        currentY += (mouseY - currentY) * 0.1;
        
        gsap.to('.tilt-section', {
          rotateY: currentX * 8,
          rotateX: -currentY * 5,
          duration: 0.8,
          ease: 'power2.out'
        });

        requestAnimationFrame(updateMousePosition);
      };

      // Enhanced scroll-triggered animations
      gsap.utils.toArray('.refined-section').forEach((section, index) => {
        // Section entrance animation
        gsap.fromTo(section, {
          autoAlpha: 0,
          y: 100,
          rotateX: 15,
          scale: 0.95
        }, {
          autoAlpha: 1,
          y: 0,
          rotateX: 0,
          scale: 1,
          duration: 1.5,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 80%',
            end: 'top 20%',
            scrub: 1,
            onEnter: () => setCurrentSection(index),
            onEnterBack: () => setCurrentSection(index)
          }
        });

        // Parallax depth effects
        const depth = (index % 3 + 1) * 0.3;
        gsap.fromTo(section, {
          z: -200 * depth,
        }, {
          z: 200 * depth,
          scrollTrigger: {
            trigger: section,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 2
          }
        });
      });

      // Advanced text reveal animations
      gsap.utils.toArray('.refined-text-reveal').forEach(text => {
        const words = text.textContent.split(' ');
        text.innerHTML = words.map(word => 
          `<span class="word">${word.split('').map(char => 
            `<span class="char">${char}</span>`
          ).join('')}</span>`
        ).join(' ');
        
        gsap.fromTo(text.querySelectorAll('.char'), {
          opacity: 0,
          y: 60,
          rotateX: 90,
          scale: 0.8
        }, {
          opacity: 1,
          y: 0,
          rotateX: 0,
          scale: 1,
          duration: 0.08,
          stagger: {
            amount: 0.8,
            from: 'start',
            ease: 'power2.out'
          },
          scrollTrigger: {
            trigger: text,
            start: 'top 85%',
            toggleActions: 'play none none reverse'
          }
        });
      });

      // Enhanced magnetic sections
      gsap.utils.toArray('.refined-magnetic').forEach(element => {
        const bounds = element.getBoundingClientRect();
        const centerX = bounds.left + bounds.width / 2;
        const centerY = bounds.top + bounds.height / 2;
        
        element.addEventListener('mouseenter', () => {
          gsap.to(element, {
            scale: 1.05,
            rotateY: 5,
            rotateX: 3,
            duration: 0.6,
            ease: 'power3.out'
          });
        });

        element.addEventListener('mouseleave', () => {
          gsap.to(element, {
            scale: 1,
            rotateY: 0,
            rotateX: 0,
            duration: 0.8,
            ease: 'elastic.out(1, 0.5)'
          });
        });
      });

      // Smooth morphing transitions
      gsap.utils.toArray('.refined-morph').forEach((section, index) => {
        gsap.fromTo(section, {
          clipPath: 'polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)',
          filter: 'blur(10px)',
        }, {
          clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
          filter: 'blur(0px)',
          duration: 2,
          ease: 'power4.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 75%',
            end: 'top 25%',
            scrub: 1.5
          }
        });
      });

      // Floating elements with physics
      gsap.utils.toArray('.refined-float').forEach((orb, index) => {
        const tl = gsap.timeline({ repeat: -1, yoyo: true });
        tl.to(orb, {
          y: `random(-30, 30)`,
          x: `random(-15, 15)`,
          rotation: `random(-10, 10)`,
          scale: `random(0.8, 1.2)`,
          duration: `random(4, 8)`,
          ease: 'sine.inOut'
        });
      });

      // Initialize mouse tracking
      wrapper.addEventListener('mousemove', handleMouseMove);
      updateMousePosition();

      // Cleanup function
      return () => {
        wrapper.removeEventListener('mousemove', handleMouseMove);
      };
    };

    // Resize handler with debouncing
    let resizeTimeout;
    const onResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        winWidth = window.innerWidth;
        winHeight = window.innerHeight;
        ScrollTrigger.refresh();
      }, 100);
    };

    // Initialize app
    initializeApp();
    const cleanup = initRefinedEffects();
    window.addEventListener('resize', onResize);

    // Cleanup on unmount
    return () => {
      if (cleanup) cleanup();
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      window.removeEventListener('resize', onResize);
      clearTimeout(resizeTimeout);
    };
  }, []);

  return (
    <>
      <AnimatePresence>
        {!isLoaded && <RefinedLoadingOverlay />}
      </AnimatePresence>

      <div 
        ref={wrapperRef}
        className="refined-wrapper min-h-screen relative overflow-hidden"
        style={{
          background: `
            radial-gradient(circle at 25% 25%, rgba(139,92,246,0.15) 0%, transparent 50%),
            radial-gradient(circle at 75% 75%, rgba(59,130,246,0.15) 0%, transparent 50%),
            linear-gradient(135deg, #0f0f23 0%, #1a1a2e 50%, #16213e 100%)
          `
        }}
      >
        {/* Enhanced Navigation */}
        <RefinedMagneticElements strength={0.3}>
          <RefinedNavigation currentSection={currentSection} />
        </RefinedMagneticElements>
        
        {/* Advanced Particle System */}
        <RefinedParticleSystem mousePosition={mousePosition} />
        
        <div ref={contentRef} className="refined-content relative z-10">
          {/* Enhanced Background Elements */}
          <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
            <div className="refined-float absolute top-1/4 left-1/6 w-96 h-96 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-full blur-3xl" data-lag="0.15" />
            <div className="refined-float absolute top-2/3 right-1/4 w-72 h-72 bg-gradient-to-br from-blue-500/15 to-purple-500/15 rounded-full blur-2xl" data-lag="0.25" />
            <div className="refined-float absolute bottom-1/3 left-1/3 w-48 h-48 bg-gradient-to-br from-purple-400/25 to-blue-400/25 rounded-full blur-xl" data-lag="0.2" />
            <div className="refined-float absolute top-1/2 right-1/6 w-64 h-64 bg-gradient-to-br from-blue-400/10 to-purple-400/10 rounded-full blur-3xl" data-lag="0.3" />
          </div>

          {/* Main Content with Enhanced 3D Effects */}
          <div className="tilt-section relative z-20">
            <section className="refined-section refined-magnetic refined-morph" data-speed="0.9">
              <RefinedGSAPTitle />
            </section>

            <section className="refined-section refined-magnetic refined-morph" data-speed="1.1">
              <RefinedGSAPInfo />
            </section>

            <section className="refined-section refined-magnetic refined-morph" data-speed="0.95">
              <RefinedHeroSection />
            </section>

            <section className="refined-section refined-magnetic refined-morph" data-speed="1.05">
              <RefinedServicesSection />
            </section>

            <section className="refined-section refined-magnetic refined-morph" data-speed="0.9">
              <RefinedAboutSection />
            </section>

            <section className="refined-section refined-magnetic refined-morph" data-speed="1.1">
              <RefinedProjectsSection />
            </section>

            <section className="refined-section refined-magnetic refined-morph" data-speed="0.9">
              <RefinedTeamSection />
            </section>

            <section className="refined-section refined-magnetic refined-morph" data-speed="0.95">
              <RefinedContactSection />
            </section>
          </div>

          {/* Enhanced Scroll Indicator */}
          <motion.div 
            className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-30"
            animate={{ 
              y: [0, 15, 0],
              opacity: [0.4, 1, 0.4],
              scale: [0.9, 1.1, 0.9]
            }}
            transition={{ 
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <div className="flex flex-col items-center space-y-2">
              <div className="w-1 h-8 bg-gradient-to-b from-purple-500 to-blue-500 rounded-full opacity-60" />
              <div className="text-white/40 text-xs font-medium tracking-wider">SCROLL</div>
            </div>
          </motion.div>

          {/* Enhanced Performance Monitor */}
          <RefinedPerformanceMonitor />
        </div>

        {/* Background Noise Texture */}
        <div 
          className="fixed inset-0 pointer-events-none z-5 opacity-20 mix-blend-overlay"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
            backgroundSize: '200px 200px'
          }}
        />
      </div>
    </>
  );
};

export default RefinedEnhancedHomePage;
