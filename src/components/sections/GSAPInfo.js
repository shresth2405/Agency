'use client';
import { motion } from 'framer-motion';

const GSAPInfo = () => {
  return (
    <section className="py-20 bg-gradient-secondary relative overflow-hidden" data-speed="0.75">
      {/* Background gradient orbs */}
      <div className="absolute inset-0">
        <div className="absolute top-32 -left-32 w-96 h-96 bg-gradient-purple-blue rounded-full opacity-15 blur-3xl animate-pulse" />
        <div className="absolute bottom-32 -right-32 w-96 h-96 bg-gradient-blue-purple rounded-full opacity-15 blur-3xl animate-pulse delay-500" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="text-center max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-8 text-gradient-hero">
            Enhanced with <span className="text-gradient-accent">GSAP Magic</span>
          </h2>
          
          <div className="text-xl text-gray-300 mb-12 leading-relaxed space-y-4">
            <p>
              Experience the power of <strong className="text-purple-400">GSAP ScrollTrigger</strong> combined with 
              <strong className="text-blue-400"> Framer Motion</strong> for ultra-smooth scrolling and animations.
            </p>
            
            <p>
              This demo features <strong className="text-green-400">3D perspective effects</strong>, 
              <strong className="text-yellow-400"> parallax scrolling</strong>, and 
              <strong className="text-pink-400"> interactive mouse controls</strong>.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <motion.div 
              className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-6 border border-purple-500/30"
              whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(139, 92, 246, 0.3)" }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-2xl font-bold text-gradient-accent mb-4">✨ Features</h3>
              <ul className="text-gray-300 space-y-2 text-left">
                <li>• 3D Tilt Effects on Mouse Movement</li>
                <li>• Smooth Parallax Scrolling</li>
                <li>• Interactive Drag Gestures</li>
                <li>• Floating Background Elements</li>
                <li>• Custom ScrollTrigger Animations</li>
              </ul>
            </motion.div>

            <motion.div 
              className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-6 border border-blue-500/30"
              whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(59, 130, 246, 0.3)" }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-2xl font-bold text-gradient-accent mb-4">🛠️ Technologies</h3>
              <ul className="text-gray-300 space-y-2 text-left">
                <li>• <strong>GSAP 3.12+</strong> - ScrollTrigger & Observer</li>
                <li>• <strong>Framer Motion</strong> - React Animations</li>
                <li>• <strong>Next.js 15</strong> - React Framework</li>
                <li>• <strong>Tailwind CSS 4</strong> - Styling</li>
                <li>• <strong>Custom Gradient System</strong></li>
              </ul>
            </motion.div>
          </div>

          <motion.div 
            className="inline-block"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <a 
              href="https://greensock.com/docs/v3/Plugins/ScrollTrigger" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-8 py-4 bg-gradient-blue-purple text-white font-semibold rounded-lg shadow-lg hover:shadow-purple-500/30 transition-all duration-300 inline-flex items-center space-x-2"
            >
              <span>📚 Learn More About GSAP</span>
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default GSAPInfo;
