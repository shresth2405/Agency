'use client';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const AdvancedParticleSystem = () => {
  const containerRef = useRef(null);
  const particlesRef = useRef([]);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const container = containerRef.current;
    const particles = [];

    // Create particles
    for (let i = 0; i < 50; i++) {
      const particle = document.createElement('div');
      particle.className = `absolute w-1 h-1 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full opacity-30`;
      
      // Random starting position
      gsap.set(particle, {
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        scale: Math.random() * 0.5 + 0.5
      });
      
      container.appendChild(particle);
      particles.push(particle);
    }

    particlesRef.current = particles;

    // Animate particles
    particles.forEach((particle, index) => {
      const tl = gsap.timeline({ repeat: -1 });
      
      tl.to(particle, {
        x: `+=${Math.random() * 400 - 200}`,
        y: `+=${Math.random() * 400 - 200}`,
        rotation: 360,
        duration: Math.random() * 10 + 5,
        ease: 'none'
      })
      .to(particle, {
        opacity: Math.random() * 0.6 + 0.2,
        scale: Math.random() * 1.5 + 0.5,
        duration: Math.random() * 3 + 2,
        yoyo: true,
        repeat: 1
      }, 0);

      // Stagger the animations
      tl.delay(index * 0.1);
    });

    // Mouse interaction
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      
      particles.forEach((particle, index) => {
        const rect = particle.getBoundingClientRect();
        const particleX = rect.left + rect.width / 2;
        const particleY = rect.top + rect.height / 2;
        
        const distance = Math.sqrt(
          Math.pow(clientX - particleX, 2) + Math.pow(clientY - particleY, 2)
        );
        
        if (distance < 150) {
          const force = (150 - distance) / 150;
          const angle = Math.atan2(particleY - clientY, particleX - clientX);
          
          gsap.to(particle, {
            x: `+=${Math.cos(angle) * force * 20}`,
            y: `+=${Math.sin(angle) * force * 20}`,
            scale: 1 + force,
            opacity: 0.8,
            duration: 0.3,
            ease: 'power2.out'
          });
        }
      });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      particles.forEach(particle => particle.remove());
    };
  }, []);

  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ mixBlendMode: 'screen' }}
    />
  );
};

export default AdvancedParticleSystem;
