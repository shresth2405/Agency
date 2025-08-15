'use client';
import { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const About = () => {
  const sectionRef = useRef(null);
  const textRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    gsap.from(textRef.current, {
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top bottom-=100",
        end: "bottom top",
        scrub: 1
      },
      opacity: 0,
      y: 100,
      duration: 1
    });
    
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);
  
  const stats = [
    { value: '5+', label: 'Years Experience' },
    { value: '100+', label: 'Projects Completed' },
    { value: '25+', label: 'Team Members' },
    { value: '50+', label: 'Happy Clients' }
  ];
  
  return (
    <section 
      id="about" 
      ref={sectionRef}
      className="py-20 bg-gradient-to-b from-[#1a1f36] to-primary overflow-hidden relative"
    >
      {/* Animated background elements */}
      <motion.div 
        style={{ y }}
        className="absolute right-0 top-0 w-[500px] h-[500px] bg-accent-2/5 rounded-full blur-[150px] -z-10"
      />
      <motion.div 
        style={{ y: useTransform(scrollYProgress, [0, 1], [-100, 100]) }}
        className="absolute left-0 bottom-0 w-[500px] h-[500px] bg-accent-1/5 rounded-full blur-[150px] -z-10"
      />
      
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column: About Text */}
          <div ref={textRef}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <span className="bg-secondary/20 text-secondary px-4 py-1 rounded-full text-sm inline-block mb-4">About Us</span>
            </motion.div>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold text-white mb-6"
            >
              We&apos;re a Team of <span className="text-accent-1">Creative</span> Digital Experts
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-light/70 mb-6"
            >
              Founded in 2018, CreativeSync is a full-service digital agency specializing in creating exceptional digital experiences. We combine innovative design with cutting-edge technology to help businesses thrive in the digital landscape.
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-light/70 mb-8"
            >
              Our multidisciplinary team brings together expertise in design, development, and strategy to deliver comprehensive solutions that drive results. We&apos;re passionate about crafting digital experiences that captivate, inspire, and elevate brands.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <button className="bg-accent-2 text-primary px-6 py-3 rounded-full hover:bg-accent-2/90 transition-colors font-medium">
                Learn More About Us
              </button>
            </motion.div>
          </div>
          
          {/* Right Column: Stats */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                viewport={{ once: true }}
                className="bg-dark/50 backdrop-blur-sm p-8 rounded-xl border border-white/10 text-center"
              >
                <h3 className="text-3xl md:text-4xl font-bold text-accent-1 mb-2">{stat.value}</h3>
                <p className="text-light/70">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
        
        {/* Values Section */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-2xl md:text-3xl font-bold text-white mb-4"
            >
              Our Core <span className="text-secondary">Values</span>
            </motion.h3>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-light/70 max-w-2xl mx-auto"
            >
              These principles guide everything we do and help us deliver exceptional results for our clients.
            </motion.p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: "💡",
                title: "Innovation",
                description: "We embrace new ideas and technologies to push the boundaries of what's possible."
              },
              {
                icon: "🤝",
                title: "Collaboration",
                description: "We work closely with our clients to understand their vision and bring it to life."
              },
              {
                icon: "✨",
                title: "Excellence",
                description: "We strive for perfection in every project, paying attention to even the smallest details."
              }
            ].map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                viewport={{ once: true }}
                className="bg-dark/30 backdrop-blur-sm p-8 rounded-xl border border-white/5 text-center"
              >
                <div className="text-4xl mb-4">{value.icon}</div>
                <h4 className="text-xl font-bold text-white mb-3">{value.title}</h4>
                <p className="text-light/70">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
