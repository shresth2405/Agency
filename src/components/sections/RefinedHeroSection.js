'use client';
import { motion } from 'framer-motion';

const RefinedHeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center py-20 relative overflow-hidden">
      <div className="container mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: 'power3.out' }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          {/* Hero Title */}
          <h1 className="refined-text-reveal text-5xl md:text-7xl lg:text-8xl font-black leading-tight">
            <span className="block text-white">Digital Agency</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-blue-400 to-purple-600">
              Reimagined
            </span>
          </h1>

          {/* Hero Subtitle */}
          <motion.p
            className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
            viewport={{ once: true }}
          >
            We craft extraordinary digital experiences that push the boundaries of 
            web technology, combining stunning visuals with seamless functionality.
          </motion.p>

          {/* Service Highlights */}
          <motion.div
            className="flex flex-wrap justify-center gap-6 my-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            viewport={{ once: true }}
          >
            {[
              { icon: '🎨', title: 'UI/UX Design', desc: 'Beautiful interfaces' },
              { icon: '💻', title: 'Development', desc: 'Cutting-edge code' },
              { icon: '🚀', title: 'Optimization', desc: 'Lightning fast' },
              { icon: '✨', title: 'Animation', desc: 'Smooth interactions' }
            ].map((service, index) => (
              <motion.div
                key={service.title}
                className="group p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-300 max-w-xs"
                whileHover={{ 
                  scale: 1.05, 
                  backgroundColor: 'rgba(255,255,255,0.1)',
                  y: -10
                }}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 + index * 0.1, duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-white font-semibold text-lg mb-2">{service.title}</h3>
                <p className="text-white/60 text-sm">{service.desc}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row justify-center gap-6"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.8, duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.button
              className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="flex items-center justify-center gap-2">
                Start Your Project
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  →
                </motion.span>
              </span>
            </motion.button>

            <motion.button
              className="px-8 py-4 bg-transparent border-2 border-white/20 text-white font-semibold rounded-xl hover:border-white/40 hover:bg-white/5 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Our Work
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Background Elements */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Animated Grid */}
          <div className="absolute inset-0 opacity-20">
            <div 
              className="w-full h-full"
              style={{
                backgroundImage: `
                  linear-gradient(rgba(139,92,246,0.1) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(139,92,246,0.1) 1px, transparent 1px)
                `,
                backgroundSize: '60px 60px',
                animation: 'gridMove 20s linear infinite'
              }}
            />
          </div>

          {/* Floating Shapes */}
          <motion.div
            className="absolute top-20 left-1/4 w-32 h-32 border-2 border-purple-500/30 rounded-full"
            animate={{
              y: [0, -30, 0],
              scale: [1, 1.1, 1],
              rotate: [0, 180, 360]
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: 'easeInOut'
            }}
          />

          <motion.div
            className="absolute bottom-32 right-1/4 w-24 h-24 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-lg rotate-45"
            animate={{
              y: [0, 40, 0],
              x: [0, -20, 0],
              rotate: [45, 225, 405]
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: 'easeInOut'
            }}
          />

          {/* Gradient Overlays */}
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-900/10 via-transparent to-blue-900/10" />
        </div>
      </div>

      <style jsx>{`
        @keyframes gridMove {
          0% { transform: translate(0, 0); }
          100% { transform: translate(60px, 60px); }
        }
      `}</style>
    </section>
  );
};

export default RefinedHeroSection;
