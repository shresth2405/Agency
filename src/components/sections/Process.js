'use client';
import { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const Process = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  
  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);
  
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    const steps = gsap.utils.toArray('.process-step');
    
    steps.forEach((step, i) => {
      gsap.from(step, {
        scrollTrigger: {
          trigger: step,
          start: "top bottom-=100",
          toggleActions: "play none none none"
        },
        x: i % 2 === 0 ? -100 : 100,
        opacity: 0,
        duration: 0.8,
        delay: i * 0.1
      });
    });
    
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);
  
  const steps = [
    {
      id: 1,
      title: "Discovery",
      description: "We begin by understanding your business, goals, and challenges through in-depth discussions and research.",
      icon: "🔍"
    },
    {
      id: 2,
      title: "Strategy",
      description: "Based on our findings, we develop a comprehensive strategy tailored to your specific needs and objectives.",
      icon: "🧠"
    },
    {
      id: 3,
      title: "Design",
      description: "Our creative team crafts visually stunning and functional designs that align with your brand identity.",
      icon: "✏️"
    },
    {
      id: 4,
      title: "Development",
      description: "We bring the designs to life using cutting-edge technologies and industry best practices.",
      icon: "💻"
    },
    {
      id: 5,
      title: "Testing",
      description: "Rigorous testing ensures everything works flawlessly across all devices and platforms.",
      icon: "🔧"
    },
    {
      id: 6,
      title: "Launch",
      description: "We carefully deploy your project and provide support to ensure a smooth launch.",
      icon: "🚀"
    }
  ];
  
  return (
    <section 
      ref={sectionRef} 
      id="process" 
      className="py-20 bg-gradient-to-b from-[#1a1f36] to-primary relative overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          style={{ opacity }}
          className="absolute top-1/4 right-[10%] w-64 h-64 bg-accent-1/10 rounded-full blur-[100px]"
        />
        <motion.div 
          style={{ opacity }}
          className="absolute bottom-1/4 left-[10%] w-80 h-80 bg-accent-2/10 rounded-full blur-[120px]"
        />
        <motion.div 
          style={{ opacity }}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-secondary/10 rounded-full blur-[150px]"
        />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <span className="bg-secondary/20 text-secondary px-4 py-1 rounded-full text-sm inline-block mb-4">Our Process</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-white mb-4"
          >
            How We <span className="text-accent-2">Work</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-light/80 max-w-2xl mx-auto"
          >
            Our proven step-by-step approach ensures we deliver exceptional results for every project.
          </motion.p>
        </div>
        
        <div className="relative">
          {/* Timeline center line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-white/10 rounded-full hidden md:block"></div>
          
          <div className="space-y-12 md:space-y-0 relative">
            {steps.map((step, index) => (
              <div 
                key={step.id}
                className="process-step md:grid md:grid-cols-2 md:gap-8 items-center relative"
              >
                {/* Step number circle for desktop */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-accent-1 rounded-full items-center justify-center text-white font-bold z-10 hidden md:flex">
                  {step.id}
                </div>
                
                {/* Content positioning based on even/odd */}
                <div className={`${index % 2 === 0 ? 'md:col-start-1' : 'md:col-start-2'} bg-dark/50 backdrop-blur-sm p-8 rounded-xl border border-white/10 relative`}>
                  {/* Step number for mobile */}
                  <div className="w-10 h-10 bg-accent-1 rounded-full flex items-center justify-center text-white font-bold mb-4 md:hidden">
                    {step.id}
                  </div>
                  
                  <div className="flex items-center gap-4 mb-4">
                    <div className="text-3xl">{step.icon}</div>
                    <h3 className="text-xl font-bold text-white">{step.title}</h3>
                  </div>
                  
                  <p className="text-light/70">{step.description}</p>
                </div>
                
                {/* Empty div for layout on desktop */}
                <div className={`hidden md:block ${index % 2 === 0 ? 'md:col-start-2' : 'md:col-start-1'}`}></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
