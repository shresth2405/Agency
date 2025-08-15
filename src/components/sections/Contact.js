'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import GlareButton from '@/components/ui/GlareButton';
import AnimatedInput from '@/components/ui/AnimatedInput';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (would connect to API in a real application)
    console.log(formData);
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
    // Show success message
    alert('Thank you for your message! We will get back to you soon.');
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-primary to-[#1a1f36]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <span className="bg-accent-1/20 text-accent-1 px-4 py-1 rounded-full text-sm inline-block mb-4">Get In Touch</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-white mb-4"
          >
            Contact <span className="text-secondary">Us</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-light/80 max-w-2xl mx-auto"
          >
            Have a project in mind? Let&apos;s discuss how we can help bring your ideas to life.
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Let&apos;s start a conversation</h3>
              <p className="text-light/70 mb-8">
                We&apos;re excited to hear about your project. Fill out the form or use our contact information below to get in touch.
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-accent-2/20 p-3 rounded-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-accent-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-white font-medium">Phone</h4>
                  <p className="text-light/70">+1 (555) 123-4567</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-accent-1/20 p-3 rounded-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-accent-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-white font-medium">Email</h4>
                  <p className="text-light/70">info@creativesync.com</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-secondary/20 p-3 rounded-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-white font-medium">Address</h4>
                  <p className="text-light/70">123 Innovation Street, Creative District, CA 94103</p>
                </div>
              </div>
            </div>
            
            <div className="pt-6">
              <h4 className="text-white font-medium mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                {['Twitter', 'LinkedIn', 'Instagram', 'Dribbble'].map((social) => (
                  <motion.a
                    key={social}
                    href="#"
                    whileHover={{ y: -5 }}
                    className="w-10 h-10 rounded-full bg-dark/50 flex items-center justify-center text-white hover:bg-accent-1 transition-colors"
                  >
                    {social.charAt(0)}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
          
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-dark/50 backdrop-blur-sm p-8 rounded-xl border border-white/10"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <AnimatedInput
                  label="Your Name"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
                
                <AnimatedInput
                  label="Your Email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <AnimatedInput
                label="Subject"
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
              />
              
              <AnimatedInput
                label="Message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                multiline
                rows={5}
              />
              
              <GlareButton
                type="submit"
                variant="primary"
                size="lg"
                className="w-full"
              >
                Send Message
              </GlareButton>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
