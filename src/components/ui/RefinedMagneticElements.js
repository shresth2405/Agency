'use client';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const RefinedMagneticElements = ({ children, strength = 0.3 }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const container = containerRef.current;
    const magneticElements = container.querySelectorAll('.magnetic-element');

    magneticElements.forEach(element => {
      const bounds = element.getBoundingClientRect();
      let isHovering = false;

      const handleMouseMove = (e) => {
        if (!isHovering) return;

        const elementRect = element.getBoundingClientRect();
        const centerX = elementRect.left + elementRect.width / 2;
        const centerY = elementRect.top + elementRect.height / 2;
        
        const deltaX = (e.clientX - centerX) * strength;
        const deltaY = (e.clientY - centerY) * strength;

        gsap.to(element, {
          x: deltaX,
          y: deltaY,
          rotation: deltaX * 0.1,
          scale: 1 + strength * 0.1,
          duration: 0.6,
          ease: 'power3.out'
        });
      };

      const handleMouseEnter = () => {
        isHovering = true;
        gsap.to(element, {
          scale: 1 + strength * 0.2,
          duration: 0.4,
          ease: 'back.out(1.7)'
        });
      };

      const handleMouseLeave = () => {
        isHovering = false;
        gsap.to(element, {
          x: 0,
          y: 0,
          rotation: 0,
          scale: 1,
          duration: 0.8,
          ease: 'elastic.out(1, 0.3)'
        });
      };

      element.addEventListener('mousemove', handleMouseMove);
      element.addEventListener('mouseenter', handleMouseEnter);
      element.addEventListener('mouseleave', handleMouseLeave);

      // Cleanup function
      return () => {
        element.removeEventListener('mousemove', handleMouseMove);
        element.removeEventListener('mouseenter', handleMouseEnter);
        element.removeEventListener('mouseleave', handleMouseLeave);
      };
    });
  }, [strength]);

  return (
    <div ref={containerRef} className="magnetic-element">
      {children}
    </div>
  );
};

export default RefinedMagneticElements;
