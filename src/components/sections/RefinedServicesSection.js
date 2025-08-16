'use client';
import { motion } from 'framer-motion';

const RefinedServicesSection = () => {
  const services = [
    {
      icon: '🎨',
      title: 'UI/UX Design',
      description: 'Creating intuitive and beautiful user experiences that convert visitors into customers with modern design principles.',
      features: ['User Research', 'Wireframing', 'Prototyping', 'Visual Design'],
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      icon: '💻',
      title: 'Web Development',
      description: 'Building fast, responsive, and scalable websites using cutting-edge technologies and best practices.',
      features: ['React/Next.js', 'TypeScript', 'API Development', 'Performance Optimization'],
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: '🚀',
      title: 'Branding & Identity',
      description: 'Developing strong brand identities that resonate with your target audience and stand out in the market.',
      features: ['Logo Design', 'Brand Guidelines', 'Marketing Materials', 'Brand Strategy'],
      gradient: 'from-purple-500 to-blue-500'
    },
    {
      icon: '📱',
      title: 'Mobile Apps',
      description: 'Native and cross-platform mobile applications that deliver exceptional user experiences.',
      features: ['iOS Development', 'Android Development', 'React Native', 'App Store Optimization'],
      gradient: 'from-green-500 to-blue-500'
    },
    {
      icon: '🤖',
      title: 'AI & ML Solutions',
      description: 'Integrating artificial intelligence and machine learning to create intelligent digital solutions.',
      features: ['Machine Learning', 'Data Analysis', 'AI Integration', 'Automation'],
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      icon: '🎬',
      title: 'Video Editing',
      description: 'Professional video editing services that bring your stories to life with cinematic quality.',
      features: ['Post-Production', 'Motion Graphics', 'Color Grading', 'Audio Mixing'],
      gradient: 'from-orange-500 to-red-500'
    }
  ];

  return (
    <section className="min-h-screen py-20 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: 'power3.out' }}
          viewport={{ once: true }}
        >
          <h2 className="refined-text-reveal text-4xl md:text-6xl font-bold text-white mb-6">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">Services</span>
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
            We provide comprehensive digital solutions to help your business thrive in the modern world 
            with cutting-edge technology and creative excellence.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="group relative"
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.8, ease: 'power3.out' }}
              viewport={{ once: true }}
            >
              <div className="h-full bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-500 group-hover:bg-white/10 relative overflow-hidden">
                {/* Background Gradient Effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-2xl`} />
                
                {/* Service Icon */}
                <motion.div
                  className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300"
                  whileHover={{ rotate: [0, -10, 10, 0], scale: 1.2 }}
                  transition={{ duration: 0.5 }}
                >
                  {service.icon}
                </motion.div>

                {/* Service Title */}
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-blue-400 transition-all duration-300">
                  {service.title}
                </h3>

                {/* Service Description */}
                <p className="text-white/70 mb-6 leading-relaxed group-hover:text-white/90 transition-colors duration-300">
                  {service.description}
                </p>

                {/* Features List */}
                <div className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <motion.div
                      key={feature}
                      className="flex items-center gap-3"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: (index * 0.1) + (featureIndex * 0.05), duration: 0.5 }}
                      viewport={{ once: true }}
                    >
                      <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${service.gradient}`} />
                      <span className="text-white/60 text-sm group-hover:text-white/80 transition-colors duration-300">
                        {feature}
                      </span>
                    </motion.div>
                  ))}
                </div>

                {/* Hover Button */}
                <motion.button
                  className={`mt-6 px-6 py-3 bg-gradient-to-r ${service.gradient} text-white font-semibold rounded-xl opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Learn More
                </motion.button>

                {/* Decorative Elements */}
                <div className="absolute top-4 right-4 w-16 h-16 border border-white/5 rounded-full group-hover:border-white/20 transition-colors duration-500" />
                <div className="absolute bottom-4 left-4 w-8 h-8 border border-white/5 rounded group-hover:border-white/20 transition-colors duration-500" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="text-white/70 mb-8 text-lg">
            Ready to elevate your digital presence?
          </p>
          <motion.button
            className="px-10 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 group"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="flex items-center justify-center gap-2">
              Let&apos;s Work Together
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                →
              </motion.span>
            </span>
          </motion.button>
        </motion.div>
      </div>

      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/6 w-64 h-64 bg-gradient-to-br from-purple-500/10 to-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/6 w-48 h-48 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-2xl" />
      </div>
    </section>
  );
};

export default RefinedServicesSection;
