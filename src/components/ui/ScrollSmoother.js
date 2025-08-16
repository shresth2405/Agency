'use client';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Observer } from 'gsap/Observer';

// Register GSAP plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger, Observer);
}

const ScrollSmoother = ({ children }) => {
  const wrapperRef = useRef(null);
  const contentRef = useRef(null);
  const heroSectionRef = useRef(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const wrapper = wrapperRef.current;
    const content = contentRef.current;
    const heroSection = heroSectionRef.current;

    let winWidth = window.innerWidth;
    let observer;

    // ScrollTrigger setup for smooth scrolling effects
    const initScrollEffects = () => {
      // Hero section 3D tilt effect
      const heroTl = gsap.timeline();

      // Initial hero animation
      heroTl.fromTo(heroSection, {
        autoAlpha: 0,
        yPercent: 30,
        rotateX: 10
      }, {
        autoAlpha: 1,
        yPercent: 0,
        rotateX: 0,
        duration: 1.5,
        ease: 'power3.out'
      });

      // Observer for mouse interactions
      observer = Observer.create({
        target: document.body,
        ignore: '[data-ignore]',
        type: 'pointer',
        onPress: () => {
          gsap.to('body', {
            backgroundColor: '#0f0f23',
            duration: 0.5
          });
          gsap.to(heroSection, {
            scale: 0.98,
            duration: 0.3,
            ease: 'power2.out'
          });
        },
        onRelease: () => {
          gsap.to('body', {
            backgroundColor: '#1a1a2e',
            duration: 0.5
          });
          gsap.to(heroSection, {
            scale: 1,
            rotateX: 0,
            duration: 0.5,
            ease: 'power2.out'
          });
        },
        onToggleY: (self) => {
          const perspectiveOriginX = Math.floor(100 - self.startX / winWidth * 100);
          const direction = self.deltaY < 0 ? 'up' : 'down';
          
          gsap.to(wrapper, {
            perspectiveOrigin: `${perspectiveOriginX}% 50%`,
            duration: 0.5
          });

          if (direction === 'up') {
            gsap.to(heroSection, {
              rotateX: '2deg',
              duration: 0.3
            });
          } else {
            gsap.to(heroSection, {
              rotateX: '-2deg',
              duration: 0.3
            });
          }
        },
        tolerance: 10
      });

      // Parallax effects for sections
      gsap.utils.toArray('.parallax-section').forEach((section, index) => {
        gsap.fromTo(section, {
          y: -50,
          opacity: 0.8
        }, {
          y: 50,
          opacity: 1,
          scrollTrigger: {
            trigger: section,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true
          }
        });
      });

      // Smooth reveal animations
      gsap.utils.toArray('.reveal-section').forEach(section => {
        gsap.fromTo(section, {
          autoAlpha: 0,
          y: 50
        }, {
          autoAlpha: 1,
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: section,
            start: 'top 80%',
            end: 'top 50%',
            scrub: 1
          }
        });
      });
    };

    // Resize handler
    const onResize = () => {
      winWidth = window.innerWidth;
      ScrollTrigger.refresh();
    };

    // Initialize effects
    initScrollEffects();
    window.addEventListener('resize', onResize);

    // Cleanup
    return () => {
      if (observer) observer.kill();
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return (
    <div 
      ref={wrapperRef}
      className="scroll-wrapper"
      style={{
        perspective: '1000px',
        transformStyle: 'preserve-3d'
      }}
    >
      <div 
        ref={contentRef}
        className="scroll-content min-h-screen"
        style={{
          background: `
            linear-gradient(rgba(139,92,246,.07) 2px, transparent 2px),
            linear-gradient(90deg, rgba(139,92,246,.07) 2px, transparent 2px),
            linear-gradient(rgba(59,130,246,.06) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59,130,246,.06) 1px, transparent 1px)
          `,
          backgroundSize: '100px 100px, 100px 100px, 20px 20px, 20px 20px',
          backgroundPosition: '-2px -2px, -2px -2px, -1px -1px, -1px -1px'
        }}
      >
        <div ref={heroSectionRef} className="hero-section">
          {children}
        </div>
      </div>
    </div>
  );
};

export default ScrollSmoother;
