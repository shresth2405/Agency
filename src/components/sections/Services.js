'use client';
import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const Services = () => {
  const sectionRef = useRef(null);
  
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    const cards = gsap.utils.toArray('.service-card');
    
    cards.forEach((card, i) => {
      gsap.from(card, {
        scrollTrigger: {
          trigger: card,
          start: "top bottom-=100",
          toggleActions: "play none none none"
        },
        y: 100,
        opacity: 0,
        duration: 0.8,
        delay: i * 0.1
      });
    });
    
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);
  
  const services = [
    {
      id: 1,
      title: "UI/UX Design",
      description: "Crafting intuitive and engaging user experiences that delight your customers and boost conversion rates.",
      icon: "✏️",
      category: "Design",
      color: "bg-accent-1"
    },
    {
      id: 2,
      title: "Branding & Identity",
      description: "Building memorable brand identities that communicate your values and resonate with your audience.",
      icon: "🎨",
      category: "Design",
      color: "bg-accent-1"
    },
    {
      id: 3,
      title: "Graphic Design",
      description: "Creating stunning visuals that capture attention and effectively communicate your message.",
      icon: "📐",
      category: "Design",
      color: "bg-accent-1"
    },
    {
      id: 4,
      title: "Full Stack Development",
      description: "Building responsive, scalable web applications with cutting-edge technologies and best practices.",
      icon: "💻",
      category: "IT Solutions",
      color: "bg-accent-2"
    },
    {
      id: 5,
      title: "Machine Learning",
      description: "Implementing intelligent solutions that analyze data and provide actionable insights for your business.",
      icon: "🤖",
      category: "IT Solutions",
      color: "bg-accent-2"
    },
    {
      id: 6,
      title: "Video Editing",
      description: "Producing high-quality video content that tells your story and engages your audience.",
      icon: "🎬",
      category: "Video",
      color: "bg-secondary"
    }
  ];
  
  return (
    <section 
      ref={sectionRef} 
      id="services" 
      className="py-20 bg-gradient-to-b from-[#1a1f36] to-primary"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <span className="bg-accent-2/20 text-accent-2 px-4 py-1 rounded-full text-sm inline-block mb-4">Our Services</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-white mb-4"
          >
            What We <span className="text-secondary">Offer</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-light/80 max-w-2xl mx-auto"
          >
            We provide a comprehensive range of services to help your business thrive in the digital world.
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <motion.div
              key={service.id}
              whileHover={{ y: -10, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.2)" }}
              className="service-card bg-dark/50 backdrop-blur-sm p-8 rounded-xl hover:bg-dark/70 transition-all duration-300 border border-white/10"
            >
              <div className={`${service.color} w-16 h-16 rounded-lg flex items-center justify-center text-2xl mb-6`}>
                {service.icon}
              </div>
              
              <span className="text-sm text-secondary/90 mb-2 inline-block">{service.category}</span>
              <h3 className="text-xl font-bold text-white mb-4">{service.title}</h3>
              <p className="text-light/70 mb-6">{service.description}</p>
              
              <div className="flex items-center text-secondary group cursor-pointer">
                <span className="mr-2 font-medium">Learn More</span>
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-5 w-5 group-hover:translate-x-1 transition-transform" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
