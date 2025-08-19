'use client';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import Image from 'next/image';

const ProjectsSimple = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return <div className="h-96 bg-primary"></div>;
  }

  const projects = [
    {
      id: 1,
      title: "E-commerce Platform",
      description: "A modern e-commerce solution with advanced features and seamless user experience. Built with scalable architecture and modern payment integration.",
      category: "Web Development",
      image: "/images/Coolcare.mp4",
      tech: ["React", "Node.js", "MongoDB"],
      github: "https://github.com/username/ecommerce-platform",
      live: "https://ecommerce-demo.com"
    },
    {
      id: 2,
      title: "Brand Identity Design",
      description: "Complete brand identity package including logo, colors, and brand guidelines. Creating memorable visual experiences that resonate with target audiences.",
      category: "Branding",
      image: "/images/contracker.png",
      tech: ["Illustrator", "Photoshop", "Figma"],
      github: "https://github.com/username/brand-identity",
      live: "https://brand-portfolio.com"
    },
    {
      id: 3,
      title: "Mobile Banking App",
      description: "Secure and intuitive mobile banking application with modern UI/UX design. Features biometric authentication and real-time transaction monitoring.",
      category: "Mobile App",
      image: "/images/layerforge.png",
      tech: ["React Native", "Firebase", "Stripe"],
      github: "https://github.com/username/banking-app",
      live: "https://banking-app-demo.com"
    },
    {
      id: 4,
      title: "Healthcare Dashboard",
      description: "Data visualization dashboard for healthcare professionals with real-time analytics. Helps medical teams make data-driven decisions quickly.",
      category: "Web App",
      image: "/images/vibhav.png",
      tech: ["Vue.js", "D3.js", "PostgreSQL"],
      github: "https://github.com/username/healthcare-dashboard",
      live: "https://healthcare-dash.com"
    },
    {
      id: 5,
      title: "Restaurant Website",
      description: "Beautiful restaurant website with online ordering and reservation system. Features interactive menu, table booking, and seamless payment processing.",
      category: "Website",
      image: "/images/vibhav.png",
      tech: ["Next.js", "Tailwind", "Sanity"],
      github: "https://github.com/username/restaurant-website",
      live: "https://restaurant-demo.com"
    },
    {
      id: 6,
      title: "Fitness App",
      description: "Comprehensive fitness tracking app with workout plans and nutrition guides. AI-powered recommendations and progress tracking for better results.",
      category: "Mobile App",
      image: "/images/vibhav.png",
      tech: ["Flutter", "Firebase", "AI/ML"],
      github: "https://github.com/username/fitness-app",
      live: "https://fitness-app-demo.com"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 60,
      scale: 0.95
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.7,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const overlayVariants = {
    hidden: { 
      opacity: 0, 
      y: 20,
      scale: 0.95
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut",
        staggerChildren: 0.1
      }
    }
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.3 }
    },
    hover: {
      scale: 1.05,
      y: -2,
      transition: {
        duration: 0.2,
        ease: "easeInOut"
      }
    },
    tap: {
      scale: 0.95,
      transition: { duration: 0.1 }
    }
  };

  return (
    <section id="projects" className="py-20 bg-gradient-secondary relative overflow-hidden">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-32 -left-32 w-96 h-96 bg-gradient-purple-blue rounded-full opacity-15 blur-3xl animate-pulse" />
        <div className="absolute bottom-32 -right-32 w-96 h-96 bg-gradient-blue-purple rounded-full opacity-15 blur-3xl animate-pulse delay-500" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-purple-500/10 rounded-full blur-2xl animate-ping" style={{ animationDuration: '4s' }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h2 
            className="text-5xl md:text-7xl font-bold mb-6 text-gradient-hero"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Our <span className="text-gradient-accent">Projects</span>
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Take a look at some of our recent work and see how we&apos;ve helped businesses
            achieve their digital goals through innovative solutions.
          </motion.p>
        </motion.div>

        {/* Projects Grid - Enlarged Cards */}
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-8 justify-items-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }} src={projects.image}
                    layout="fill"
                    objectFit="cover"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="bg-gray-800/40 backdrop-blur-md rounded-3xl overflow-hidden border border-purple-500/30 hover:border-purple-400/60 transition-all duration-500 h-[300px] w-[220px] lg:h-[400px] lg:w-[450px] shadow-2xl hover:shadow-purple-500/30 group relative"
              variants={cardVariants}
              whileHover={{ 
                y: -8,
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
            >
              {/* Project Image */}
              <div className="h-full w-full relative overflow-hidden">
                <motion.div
                  className="h-full w-full"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                >
                  <video
                    autoPlay
                    loop
                    muted
                    // objectFit="cover"
                    src={project.image}
                    className="transition-all duration-500"
                  />
                </motion.div>

                {/* Gradient Overlay for better text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                {/* Always visible Title and Category */}
                <motion.div 
                  className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/90 via-black/70 to-transparent py-6 px-6"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  <h3 className="text-xl font-bold text-white mb-1">{project.title}</h3>
                  <p className="text-sm text-purple-200 font-medium">{project.category}</p>
                </motion.div>

                {/* Enhanced Hover Overlay */}
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-br from-gray-900/95 via-slate-900/95 to-gray-800/95 backdrop-blur-sm flex flex-col justify-center items-center p-8 text-center"
                  initial="hidden"
                  whileHover="visible"
                  variants={overlayVariants}
                >
                  <motion.h3 
                    className="text-2xl font-bold text-white mb-4"
                    variants={{ hidden: { y: 20, opacity: 0 }, visible: { y: 0, opacity: 1 } }}
                  >
                    {project.title}
                  </motion.h3>
                  
                  <motion.p 
                    className="text-gray-200 text-sm leading-relaxed mb-6 line-clamp-4"
                    variants={{ hidden: { y: 20, opacity: 0 }, visible: { y: 0, opacity: 1 } }}
                  >
                    {project.description}
                  </motion.p>
                  
                  {/* Tech Stack with Animation */}
                  <motion.div 
                    className="flex flex-wrap justify-center gap-2 mb-8"
                    variants={{ hidden: { y: 20, opacity: 0 }, visible: { y: 0, opacity: 1 } }}
                  >
                    {project.tech.map((tech, i) => (
                      <motion.span
                        key={i}
                        className="px-3 py-1.5 bg-purple-600/40 text-purple-100 text-xs font-medium rounded-full border border-purple-400/40 backdrop-blur-sm"
                        whileHover={{ scale: 1.1, y: -2 }}
                        transition={{ duration: 0.2 }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </motion.div>

                  {/* Enhanced Action Buttons */}
                  <motion.div 
                    className="flex gap-4"
                    variants={{ hidden: { y: 20, opacity: 0 }, visible: { y: 0, opacity: 1 } }}
                  >
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-6 py-3 bg-gray-700/80 hover:bg-gray-600 text-white font-medium rounded-xl backdrop-blur-sm border border-gray-600/30 hover:border-gray-500/50 transition-all duration-300"
                      variants={buttonVariants}
                      whileHover="hover"
                      whileTap="tap"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                      Code
                    </motion.a>
                    
                    <motion.a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-6 py-3 bg-gradient-blue-purple text-white font-medium rounded-xl shadow-lg hover:shadow-purple-500/30 border border-purple-400/30 hover:border-purple-300/50 transition-all duration-300"
                      variants={buttonVariants}
                      whileHover="hover"
                      whileTap="tap"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                      Live Demo
                    </motion.a>
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Enhanced CTA Section */}
        <motion.div
          className="text-center mt-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <motion.p 
            className="text-gray-300 mb-8 text-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
          >
            Have a project in mind? Let&apos;s bring it to life together.
          </motion.p>
          <motion.button
            onClick={() => window.location.href = '/contact'}
            className="px-10 py-4 bg-gradient-blue-purple text-white font-semibold rounded-xl shadow-lg hover:shadow-purple-500/40 transition-all duration-300 border border-purple-400/30 hover:border-purple-300/50"
            whileHover={{ 
              scale: 1.05,
              y: -2,
              boxShadow: "0 20px 40px rgba(147, 51, 234, 0.3)"
            }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            viewport={{ once: true }}
          >
            Start Your Project
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSimple;