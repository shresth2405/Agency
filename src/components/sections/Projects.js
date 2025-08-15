'use client';
import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import ImageLoader from '@/components/ui/ImageLoader';

const Projects = () => {
  const [activeProject, setActiveProject] = useState(0);
  const sectionRef = useRef(null);
  const projectsRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.from(projectsRef.current, {
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top center",
      },
      y: 100,
      opacity: 0,
      duration: 1,
      ease: "power3.out"
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const projects = [
    {
      id: 1,
      title: "Eco-Friendly E-commerce Platform",
      category: "Web Development",
      description: "A fully responsive e-commerce website with custom animations, filtering system, and seamless checkout experience for an eco-friendly product line.",
      image: "/images/project1.svg",
      tech: ["React", "Next.js", "TailwindCSS", "Stripe"]
    },
    {
      id: 2,
      title: "Financial Dashboard App",
      category: "UI/UX Design & Development",
      description: "Interactive dashboard with real-time data visualization, customizable widgets, and comprehensive reporting features for financial analysis.",
      image: "/images/project2.svg",
      tech: ["Figma", "React", "D3.js", "Firebase"]
    },
    {
      id: 3,
      title: "AI-Powered Content Recommendation",
      category: "Machine Learning",
      description: "Personalized content recommendation system that analyzes user behavior and preferences to deliver tailored suggestions across multiple platforms.",
      image: "/images/project3.svg",
      tech: ["Python", "TensorFlow", "Node.js", "MongoDB"]
    },
    {
      id: 4,
      title: "Corporate Brand Identity",
      category: "Branding & Design",
      description: "Complete brand identity design including logo, color palette, typography, and brand guidelines for a technology startup.",
      image: "/images/project4.svg",
      tech: ["Adobe Illustrator", "Photoshop", "InDesign"]
    },
    {
      id: 5,
      title: "Product Promotional Video",
      category: "Video Editing",
      description: "High-quality promotional video showcasing product features, benefits, and customer testimonials with professional editing and motion graphics.",
      image: "/images/project5.svg",
      tech: ["Adobe Premiere Pro", "After Effects", "Audition"]
    }
  ];

  // Function to handle next project
  const nextProject = () => {
    setActiveProject((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  };

  // Function to handle previous project
  const prevProject = () => {
    setActiveProject((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="py-20 bg-gradient-to-b from-primary to-[#1a1f36]"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <span className="bg-secondary/20 text-secondary px-4 py-1 rounded-full text-sm inline-block mb-4">Our Portfolio</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-white mb-4"
          >
            Featured <span className="text-accent-1">Projects</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-light/80 max-w-2xl mx-auto"
          >
            Check out some of our recent work that showcases our expertise and creativity.
          </motion.p>
        </div>
        
        <div ref={projectsRef} className="relative">
          <div className="flex justify-between mb-8">
            <h3 className="text-xl text-white font-medium">
              {activeProject + 1}/{projects.length} - <span className="text-accent-2">{projects[activeProject].category}</span>
            </h3>
            <div className="flex gap-4">
              <button 
                onClick={prevProject}
                className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white/10 transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button 
                onClick={nextProject}
                className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white/10 transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <motion.div
              key={`image-${activeProject}`}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50 }}
              transition={{ duration: 0.5 }}
              className="rounded-xl overflow-hidden aspect-video relative h-[300px] md:h-[400px] shadow-xl"
            >
              <ImageLoader 
                src={projects[activeProject].image} 
                alt={projects[activeProject].title}
                className="w-full h-full"
                width={1200}
                height={800}
              />
            </motion.div>
            
            <motion.div
              key={`content-${activeProject}`}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="text-left"
            >
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">{projects[activeProject].title}</h3>
              <p className="text-light/80 mb-6">{projects[activeProject].description}</p>
              
              <div className="mb-8">
                <h4 className="text-white font-medium mb-3">Technologies Used:</h4>
                <div className="flex flex-wrap gap-2">
                  {projects[activeProject].tech.map((tech, index) => (
                    <span 
                      key={index}
                      className="bg-dark px-3 py-1 rounded-full text-sm text-light/90"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-accent-1 text-white px-6 py-3 rounded-full hover:bg-accent-1/90 transition-colors"
              >
                View Case Study
              </motion.button>
            </motion.div>
          </div>
          
          <div className="mt-12 flex justify-center">
            <div className="flex space-x-2">
              {projects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveProject(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    activeProject === index ? 'bg-accent-1 w-8' : 'bg-white/30'
                  }`}
                  aria-label={`Go to project ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
