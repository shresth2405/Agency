'use client';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const RefinedParticleSystem = ({ mousePosition }) => {
  const containerRef = useRef(null);
  const particlesRef = useRef([]);
  const mouseRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const container = containerRef.current;
    const particleCount = 60;
    const particles = [];

    // Create enhanced particles
    const createParticles = () => {
      for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'refined-particle absolute pointer-events-none';
        
        // Varied particle types
        const type = Math.random();
        if (type < 0.4) {
          // Glow particles
          particle.style.cssText = `
            width: ${Math.random() * 6 + 2}px;
            height: ${Math.random() * 6 + 2}px;
            background: radial-gradient(circle, rgba(139,92,246,0.8) 0%, transparent 70%);
            border-radius: 50%;
            filter: blur(${Math.random() * 2}px);
          `;
        } else if (type < 0.7) {
          // Geometric particles
          particle.style.cssText = `
            width: ${Math.random() * 4 + 1}px;
            height: ${Math.random() * 4 + 1}px;
            background: linear-gradient(45deg, rgba(59,130,246,0.6), rgba(139,92,246,0.6));
            transform: rotate(${Math.random() * 360}deg);
            filter: blur(${Math.random()}px);
          `;
        } else {
          // Star particles
          particle.innerHTML = '✦';
          particle.style.cssText = `
            color: rgba(139,92,246,0.4);
            font-size: ${Math.random() * 8 + 4}px;
            filter: blur(${Math.random() * 0.5}px);
          `;
        }

        // Random initial position
        particle.style.left = Math.random() * window.innerWidth + 'px';
        particle.style.top = Math.random() * window.innerHeight + 'px';

        container.appendChild(particle);

        // Enhanced particle properties
        const particleData = {
          element: particle,
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          size: Math.random() * 6 + 2,
          opacity: Math.random() * 0.6 + 0.2,
          mass: Math.random() * 2 + 0.5,
          magnetism: Math.random() * 0.3 + 0.1,
          rotation: Math.random() * 360,
          rotationSpeed: (Math.random() - 0.5) * 2
        };

        particles.push(particleData);
      }
    };

    // Enhanced animation loop
    const animateParticles = () => {
      particles.forEach((particle, index) => {
        // Natural drift
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Mouse interaction with realistic physics
        const dx = mouseRef.current.x - particle.x;
        const dy = mouseRef.current.y - particle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const maxDistance = 200;

        if (distance < maxDistance) {
          const force = (maxDistance - distance) / maxDistance;
          const magneticForce = force * particle.magnetism;
          
          // Repulsion
          particle.vx -= (dx / distance) * magneticForce * 0.5;
          particle.vy -= (dy / distance) * magneticForce * 0.5;
          
          // Attraction (subtle)
          particle.vx += (dx / distance) * magneticForce * 0.1;
          particle.vy += (dy / distance) * magneticForce * 0.1;
        }

        // Velocity damping
        particle.vx *= 0.98;
        particle.vy *= 0.98;

        // Boundary collision with wrap-around
        if (particle.x < -50) particle.x = window.innerWidth + 50;
        if (particle.x > window.innerWidth + 50) particle.x = -50;
        if (particle.y < -50) particle.y = window.innerHeight + 50;
        if (particle.y > window.innerHeight + 50) particle.y = -50;

        // Rotation
        particle.rotation += particle.rotationSpeed;

        // Pulsing opacity
        const pulse = Math.sin(Date.now() * 0.001 + index) * 0.3 + 0.7;
        const finalOpacity = particle.opacity * pulse;

        // Apply transformations
        gsap.set(particle.element, {
          x: particle.x,
          y: particle.y,
          rotation: particle.rotation,
          opacity: finalOpacity,
          scale: 0.8 + pulse * 0.4
        });
      });

      requestAnimationFrame(animateParticles);
    };

    // Particle connections
    const drawConnections = () => {
      const canvas = document.createElement('canvas');
      canvas.className = 'absolute inset-0 pointer-events-none';
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      container.appendChild(canvas);

      const ctx = canvas.getContext('2d');
      
      const updateConnections = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.strokeStyle = 'rgba(139,92,246,0.1)';
        ctx.lineWidth = 1;

        particles.forEach((particle1, i) => {
          particles.slice(i + 1).forEach(particle2 => {
            const dx = particle1.x - particle2.x;
            const dy = particle1.y - particle2.y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < 150) {
              const opacity = (150 - distance) / 150;
              ctx.globalAlpha = opacity * 0.3;
              ctx.beginPath();
              ctx.moveTo(particle1.x, particle1.y);
              ctx.lineTo(particle2.x, particle2.y);
              ctx.stroke();
            }
          });
        });

        requestAnimationFrame(updateConnections);
      };

      updateConnections();
    };

    // Initialize system
    createParticles();
    animateParticles();
    drawConnections();

    particlesRef.current = particles;

    // Cleanup
    return () => {
      container.innerHTML = '';
    };
  }, []);

  // Update mouse position
  useEffect(() => {
    mouseRef.current = mousePosition;
  }, [mousePosition]);

  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 pointer-events-none z-10"
      style={{ 
        background: 'transparent',
        mixBlendMode: 'normal'
      }}
    />
  );
};

export default RefinedParticleSystem;
