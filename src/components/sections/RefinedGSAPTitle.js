'use client';
import { motion } from 'framer-motion';

const RefinedGSAPTitle = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative py-20">
      <div className="container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: 'power3.out' }}
        >
          {/* Main Title */}
          <h1 className="refined-text-reveal text-6xl md:text-8xl lg:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-br from-purple-400 via-blue-400 to-purple-600 mb-8 leading-tight" data-speed="1.1">
            REFINED
          </h1>
          
          {/* Subtitle */}
          <motion.h2
            className="refined-text-reveal text-2xl md:text-4xl lg:text-5xl font-bold text-white/90 mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            data-speed="0.9"
          >
            Enhanced GSAP Experience
          </motion.h2>

          {/* Description */}
          <motion.p
            className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto mb-12 leading-relaxed"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            Immerse yourself in cutting-edge web animations with advanced 3D effects, 
            particle systems, and smooth scrolling powered by GSAP ScrollSmoother.
          </motion.p>

          {/* Feature Badges */}
          <motion.div
            className="flex flex-wrap justify-center gap-4 mb-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.8 }}
          >
            {[
              { icon: '⚡', label: '60fps Animations' },
              { icon: '🎭', label: '3D Parallax' },
              { icon: '✨', label: 'Particle Effects' },
              { icon: '🚀', label: 'Smooth Scrolling' }
            ].map((feature, index) => (
              <motion.div
                key={feature.label}
                className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 text-white/90 text-sm font-medium flex items-center gap-2"
                whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.15)' }}
                transition={{ delay: 1.8 + index * 0.1 }}
              >
                <span>{feature.icon}</span>
                {feature.label}
              </motion.div>
            ))}
          </motion.div>

          {/* Scroll Hint */}
          <motion.div
            className="text-white/50 text-sm font-medium tracking-wider"
            animate={{ 
              opacity: [0.5, 1, 0.5],
              y: [0, -5, 0]
            }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut'
            }}
          >
            SCROLL TO EXPLORE
          </motion.div>
        </motion.div>

        {/* Decorative Elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {/* Geometric Shapes */}
          <motion.div
            className="absolute top-1/4 left-1/4 w-32 h-32 border border-purple-500/20 rotate-45"
            animate={{ 
              rotate: [45, 405],
              scale: [1, 1.2, 1]
            }}
            transition={{ 
              duration: 20,
              repeat: Infinity,
              ease: 'linear'
            }}
            data-speed="1.5"
          />
          
          <motion.div
            className="absolute bottom-1/3 right-1/4 w-24 h-24 border border-blue-500/20 rounded-full"
            animate={{ 
              scale: [1, 1.5, 1],
              opacity: [0.2, 0.5, 0.2]
            }}
            transition={{ 
              duration: 8,
              repeat: Infinity,
              ease: 'easeInOut'
            }}
            data-speed="1.2"
          />

          {/* Gradient Orbs */}
          <div className="absolute top-16 right-16 w-64 h-64 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-full blur-3xl" data-speed="0.8" />
          <div className="absolute bottom-16 left-16 w-48 h-48 bg-gradient-to-br from-blue-500/15 to-purple-500/15 rounded-full blur-2xl" data-speed="0.6" />
        </div>
      </div>
    </section>
  );
};

export default RefinedGSAPTitle;
