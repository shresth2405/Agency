'use client';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

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
      description: "A modern e-commerce solution with advanced features and seamless user experience.",
      category: "Web Development",
      image: "🛒",
      tech: ["React", "Node.js", "MongoDB"],
      color: "from-accent-1 to-accent-2"
    },
    {
      id: 2,
      title: "Brand Identity Design",
      description: "Complete brand identity package including logo, colors, and brand guidelines.",
      category: "Branding",
      image: "🎨",
      tech: ["Illustrator", "Photoshop", "Figma"],
      color: "from-accent-2 to-secondary"
    },
    {
      id: 3,
      title: "Mobile Banking App",
      description: "Secure and intuitive mobile banking application with modern UI/UX design.",
      category: "Mobile App",
      image: "📱",
      tech: ["React Native", "Firebase", "Stripe"],
      color: "from-secondary to-accent-1"
    },
    {
      id: 4,
      title: "Healthcare Dashboard",
      description: "Data visualization dashboard for healthcare professionals with real-time analytics.",
      category: "Web App",
      image: "📊",
      tech: ["Vue.js", "D3.js", "PostgreSQL"],
      color: "from-accent-1 to-primary"
    },
    {
      id: 5,
      title: "Restaurant Website",
      description: "Beautiful restaurant website with online ordering and reservation system.",
      category: "Website",
      image: "🍽️",
      tech: ["Next.js", "Tailwind", "Sanity"],
      color: "from-primary to-accent-2"
    },
    {
      id: 6,
      title: "Fitness App",
      description: "Comprehensive fitness tracking app with workout plans and nutrition guides.",
      category: "Mobile App",
      image: "💪",
      tech: ["Flutter", "Firebase", "AI/ML"],
      color: "from-accent-2 to-accent-1"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-secondary relative overflow-hidden">
      {/* Background gradient orbs */}
      <div className="absolute inset-0">
        <div className="absolute top-32 -left-32 w-96 h-96 bg-gradient-purple-blue rounded-full opacity-15 blur-3xl animate-pulse" />
        <div className="absolute bottom-32 -right-32 w-96 h-96 bg-gradient-blue-purple rounded-full opacity-15 blur-3xl animate-pulse delay-500" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-gradient-hero">
            Our <span className="text-gradient-accent">Projects</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Take a look at some of our recent work and see how we&apos;ve helped businesses 
            achieve their digital goals.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="group relative"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              <div className="bg-gray-800/30 backdrop-blur-sm rounded-xl overflow-hidden border border-purple-500/30 hover:border-purple-400/50 transition-all duration-300 h-full shadow-2xl hover:shadow-purple-500/20">
                {/* Project Image/Icon */}
                <div className="h-48 bg-gradient-purple-blue flex items-center justify-center text-6xl relative overflow-hidden">
                  {project.image}
                  
                  {/* Overlay on hover */}
                  <motion.div
                    className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                  >
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="px-6 py-3 bg-gradient-blue-purple text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                      View Project
                    </motion.button>
                  </motion.div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="mb-3">
                    <span className="inline-block px-3 py-1 bg-accent-2/20 text-accent-2 text-sm rounded-full">
                      {project.category}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>
                  
                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 bg-gradient-to-r from-purple-600/30 to-blue-600/30 text-purple-200 text-xs rounded border border-purple-400/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-300 mb-8 text-lg">
            Have a project in mind? Let&apos;s bring it to life together.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-gradient-blue-purple text-white font-semibold rounded-lg shadow-lg hover:shadow-purple-500/30 transition-all duration-300"
          >
            Start Your Project
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSimple;
