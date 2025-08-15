'use client';
import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';

const Testimonials = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const sectionRef = useRef(null);
  
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Marketing Director, EcoTech",
      content: "Working with CreativeSync transformed our digital presence. Their team took the time to understand our brand and delivered a website that exceeded our expectations. The increase in user engagement and conversions has been remarkable.",
      image: "https://randomuser.me/api/portraits/women/32.jpg"
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "CEO, FinVision",
      content: "The dashboard application that CreativeSync built for us has revolutionized how we analyze and present data to our clients. Their technical expertise combined with exceptional design skills made for a seamless user experience.",
      image: "https://randomuser.me/api/portraits/men/46.jpg"
    },
    {
      id: 3,
      name: "Emma Rodriguez",
      role: "Product Manager, StreamFlow",
      content: "The AI recommendation system developed by CreativeSync has significantly improved our user retention and content discovery. Their team was collaborative, responsive, and delivered the project on time and within budget.",
      image: "https://randomuser.me/api/portraits/women/56.jpg"
    }
  ];
  
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    gsap.from(sectionRef.current, {
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top bottom-=100",
        end: "bottom top",
        scrub: 1
      },
      opacity: 0.5,
      duration: 1
    });
    
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);
  
  useEffect(() => {
    // Auto-scroll through testimonials
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    }, 5000);
    
    return () => clearInterval(interval);
  }, [testimonials.length]);
  
  return (
    <section 
      ref={sectionRef}
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
            <span className="bg-accent-1/20 text-accent-1 px-4 py-1 rounded-full text-sm inline-block mb-4">Testimonials</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-white mb-4"
          >
            What Our <span className="text-secondary">Clients Say</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-light/80 max-w-2xl mx-auto"
          >
            Don&apos;t just take our word for it. Hear from some of our satisfied clients.
          </motion.p>
        </div>
        
        <div className="max-w-4xl mx-auto relative">
          {/* Large quote icon */}
          <div className="absolute -top-10 -left-10 opacity-10 text-8xl text-secondary">&ldquo;</div>
          
          <div className="relative z-10">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, x: 100 }}
                animate={{ 
                  opacity: activeTestimonial === index ? 1 : 0,
                  x: activeTestimonial === index ? 0 : 100,
                  display: activeTestimonial === index ? 'block' : 'none'
                }}
                transition={{ duration: 0.5 }}
                className="bg-dark/50 backdrop-blur-sm p-8 md:p-12 rounded-xl border border-white/10"
              >
                <p className="text-light/90 text-lg md:text-xl italic mb-8">&ldquo;{testimonial.content}&rdquo;</p>
                
                <div className="flex items-center">
                  <div className="w-16 h-16 rounded-full overflow-hidden mr-4 relative">
                    <Image 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      width={64}
                      height={64}
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="text-white font-bold">{testimonial.name}</h4>
                    <p className="text-accent-2">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-8 flex justify-center space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  activeTestimonial === index ? 'bg-accent-1 w-8' : 'bg-white/30'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
