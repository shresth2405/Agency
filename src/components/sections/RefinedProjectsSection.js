'use client';
import { motion } from 'framer-motion';

const RefinedProjectsSection = () => {
  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      category: 'Web Development',
      description: 'A modern e-commerce platform with advanced animations and seamless user experience.',
      image: '🛒',
      tech: ['Next.js', 'GSAP', 'Stripe', 'MongoDB'],
      gradient: 'from-purple-500 to-pink-500',
      delay: 0
    },
    {
      id: 2,
      title: 'Brand Identity System',
      category: 'Branding & Design',
      description: 'Complete brand identity design for a tech startup including logo and guidelines.',
      image: '🎨',
      tech: ['Figma', 'Illustrator', 'After Effects'],
      gradient: 'from-blue-500 to-cyan-500',
      delay: 0.1
    },
    {
      id: 3,
      title: 'SaaS Dashboard',
      category: 'UI/UX Design',
      description: 'Analytics dashboard with interactive charts and real-time data visualization.',
      image: '📊',
      tech: ['React', 'D3.js', 'TypeScript', 'Tailwind'],
      gradient: 'from-green-500 to-blue-500',
      delay: 0.2
    },
    {
      id: 4,
      title: 'Mobile Banking App',
      category: 'Mobile Development',
      description: 'Secure and intuitive mobile banking application with biometric authentication.',
      image: '📱',
      tech: ['React Native', 'Node.js', 'MongoDB'],
      gradient: 'from-purple-500 to-blue-500',
      delay: 0.3
    },
    {
      id: 5,
      title: 'AI Content Platform',
      category: 'AI & Machine Learning',
      description: 'AI-powered content creation platform with natural language processing.',
      image: '🤖',
      tech: ['Python', 'TensorFlow', 'OpenAI', 'FastAPI'],
      gradient: 'from-orange-500 to-red-500',
      delay: 0.4
    },
    {
      id: 6,
      title: 'Corporate Video',
      category: 'Video Production',
      description: 'High-quality corporate video with motion graphics and professional editing.',
      image: '🎬',
      tech: ['After Effects', 'Premiere Pro', 'Cinema 4D'],
      gradient: 'from-pink-500 to-purple-500',
      delay: 0.5
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
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">Projects</span>
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
            Discover our latest work showcasing innovative solutions, cutting-edge technology, 
            and exceptional design that drives real business results.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="group relative h-96 rounded-2xl overflow-hidden cursor-pointer"
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: project.delay, duration: 0.8, ease: 'power3.out' }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-20 group-hover:opacity-30 transition-opacity duration-500`} />
              
              {/* Content Container */}
              <div className="relative h-full bg-white/5 backdrop-blur-sm border border-white/10 group-hover:border-white/20 transition-all duration-500 p-8 flex flex-col">
                {/* Project Icon */}
                <motion.div
                  className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300"
                  whileHover={{ rotate: [0, -5, 5, 0] }}
                >
                  {project.image}
                </motion.div>

                {/* Project Category */}
                <div className="text-purple-400 text-sm font-medium mb-2 uppercase tracking-wider">
                  {project.category}
                </div>

                {/* Project Title */}
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-blue-400 transition-all duration-300">
                  {project.title}
                </h3>

                {/* Project Description */}
                <p className="text-white/70 mb-6 leading-relaxed flex-1">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, techIndex) => (
                    <motion.span
                      key={tech}
                      className="px-3 py-1 bg-white/10 text-white/80 text-xs rounded-full border border-white/20"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: project.delay + (techIndex * 0.1), duration: 0.5 }}
                      viewport={{ once: true }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>

                {/* View Project Button */}
                <motion.button
                  className={`w-full py-3 bg-gradient-to-r ${project.gradient} text-white font-semibold rounded-xl opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  View Project
                </motion.button>

                {/* Decorative Elements */}
                <div className="absolute top-4 right-4 w-12 h-12 border border-white/10 rounded-full group-hover:border-white/30 transition-colors duration-500" />
                <div className="absolute bottom-4 left-4 w-6 h-6 border border-white/10 rounded group-hover:border-white/30 transition-colors duration-500" />
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>
          ))}
        </div>

        {/* Portfolio Stats */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'power3.out' }}
          viewport={{ once: true }}
        >
          {[
            { icon: '🎯', number: '50+', label: 'Projects Delivered' },
            { icon: '🏆', number: '98%', label: 'Client Satisfaction' },
            { icon: '⚡', number: '24/7', label: 'Support Available' }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10"
              whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.1)' }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + index * 0.1, duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="text-4xl mb-4">{stat.icon}</div>
              <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400 mb-2">
                {stat.number}
              </div>
              <div className="text-white/70 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold text-white mb-4">
            Have a project in mind?
          </h3>
          <p className="text-white/70 mb-8 text-lg">
            Let&apos;s collaborate and create something amazing together.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <motion.button
              className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Start Your Project
            </motion.button>
            <motion.button
              className="px-8 py-4 bg-transparent border-2 border-white/20 text-white font-semibold rounded-xl hover:border-white/40 hover:bg-white/5 transition-all duration-300"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              View All Projects
            </motion.button>
          </div>
        </motion.div>
      </div>

      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/5 w-80 h-80 bg-gradient-to-br from-purple-500/10 to-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/5 w-64 h-64 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-2xl" />
        
        {/* Floating Project Icons */}
        <motion.div
          className="absolute top-20 right-20 text-4xl opacity-20"
          animate={{
            y: [0, -20, 0],
            rotate: [0, 10, 0]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
        >
          💻
        </motion.div>
        
        <motion.div
          className="absolute bottom-32 left-16 text-3xl opacity-20"
          animate={{
            y: [0, 15, 0],
            x: [0, 10, 0]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
        >
          🎨
        </motion.div>
      </div>
    </section>
  );
};

export default RefinedProjectsSection;
