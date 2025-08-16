'use client';
import { motion } from 'framer-motion';

const RefinedGSAPInfo = () => {
  return (
    <section className="min-h-screen flex items-center justify-center py-20">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, ease: 'power3.out' }}
            viewport={{ once: true }}
          >
            <h2 className="refined-text-reveal text-4xl md:text-6xl font-bold text-white mb-6">
              Next-Level
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
                Web Experiences
              </span>
            </h2>

            <p className="text-lg text-white/70 leading-relaxed">
              This refined version showcases the pinnacle of modern web animation technology, 
              featuring enhanced GSAP ScrollSmoother effects, advanced particle systems, 
              and immersive 3D interactions that respond to your every movement.
            </p>

            <div className="grid grid-cols-2 gap-6">
              {[
                { number: '60+', label: 'Interactive Particles', icon: '✨' },
                { number: '3D', label: 'Depth Layers', icon: '🎭' },
                { number: '120', label: 'FPS Capable', icon: '⚡' },
                { number: '∞', label: 'Smooth Scrolling', icon: '🚀' }
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="text-center p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10"
                  whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.1)' }}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + index * 0.1, duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  <div className="text-2xl mb-2">{stat.icon}</div>
                  <div className="text-2xl font-bold text-white mb-1">{stat.number}</div>
                  <div className="text-sm text-white/60">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            <motion.button
              className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="flex items-center gap-2">
                Explore Features
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  →
                </motion.span>
              </span>
            </motion.button>
          </motion.div>

          {/* Right Visual */}
          <motion.div
            className="relative h-96 lg:h-[500px]"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, ease: 'power3.out' }}
            viewport={{ once: true }}
          >
            {/* Central Orb */}
            <motion.div
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-gradient-to-br from-purple-500/30 to-blue-500/30 rounded-full blur-xl"
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 360],
              }}
              transition={{
                scale: { duration: 4, repeat: Infinity, ease: 'easeInOut' },
                rotate: { duration: 20, repeat: Infinity, ease: 'linear' }
              }}
            />

            {/* Orbiting Elements */}
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-4 h-4 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full"
                style={{
                  top: '50%',
                  left: '50%',
                  transformOrigin: '0 0'
                }}
                animate={{
                  rotate: [0, 360],
                  scale: [0.5, 1.5, 0.5],
                }}
                transition={{
                  rotate: { 
                    duration: 8 + i * 2, 
                    repeat: Infinity, 
                    ease: 'linear',
                    delay: i * 0.5
                  },
                  scale: { 
                    duration: 3 + i, 
                    repeat: Infinity, 
                    ease: 'easeInOut',
                    delay: i * 0.2
                  }
                }}
                initial={{
                  x: 100 + i * 20,
                  y: 0
                }}
              />
            ))}

            {/* Tech Stack Labels */}
            <div className="absolute inset-0">
              {[
                { label: 'GSAP', x: '20%', y: '20%', color: 'from-green-400 to-emerald-400' },
                { label: 'ScrollTrigger', x: '80%', y: '30%', color: 'from-blue-400 to-cyan-400' },
                { label: 'Framer Motion', x: '15%', y: '70%', color: 'from-purple-400 to-pink-400' },
                { label: 'React', x: '75%', y: '75%', color: 'from-blue-500 to-blue-600' },
                { label: 'Next.js', x: '50%', y: '10%', color: 'from-gray-400 to-gray-600' }
              ].map((tech, index) => (
                <motion.div
                  key={tech.label}
                  className={`absolute px-3 py-1 bg-gradient-to-r ${tech.color} text-white text-xs font-semibold rounded-full shadow-lg`}
                  style={{ left: tech.x, top: tech.y }}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1 + index * 0.2, duration: 0.6, ease: 'back.out(1.7)' }}
                  whileHover={{ scale: 1.1 }}
                  viewport={{ once: true }}
                >
                  {tech.label}
                </motion.div>
              ))}
            </div>

            {/* Connection Lines */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none">
              <defs>
                <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="rgba(139,92,246,0.3)" />
                  <stop offset="100%" stopColor="rgba(59,130,246,0.3)" />
                </linearGradient>
              </defs>
              {[...Array(5)].map((_, i) => (
                <motion.line
                  key={i}
                  x1="50%"
                  y1="50%"
                  x2={`${Math.random() * 100}%`}
                  y2={`${Math.random() * 100}%`}
                  stroke="url(#lineGradient)"
                  strokeWidth="1"
                  initial={{ pathLength: 0, opacity: 0 }}
                  whileInView={{ pathLength: 1, opacity: 1 }}
                  transition={{ delay: 1.5 + i * 0.2, duration: 2 }}
                  viewport={{ once: true }}
                />
              ))}
            </svg>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default RefinedGSAPInfo;
