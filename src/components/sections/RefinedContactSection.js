'use client';
import { motion } from 'framer-motion';
import { useState } from 'react';

const RefinedContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    project: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    console.log('Form submitted:', formData);
    setIsSubmitting(false);
    
    // Reset form
    setFormData({ name: '', email: '', project: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactMethods = [
    {
      icon: '📧',
      title: 'Email Us',
      description: 'Drop us a line anytime',
      contact: 'hello@agency.com',
      gradient: 'from-purple-500 to-blue-500'
    },
    {
      icon: '📞',
      title: 'Call Us',
      description: 'Mon-Fri from 8am to 5pm',
      contact: '+1 (555) 123-4567',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: '💬',
      title: 'Chat With Us',
      description: 'Available 24/7',
      contact: 'Live Chat Support',
      gradient: 'from-green-500 to-blue-500'
    }
  ];

  const socialLinks = [
    { icon: '🐦', name: 'Twitter', gradient: 'from-blue-400 to-blue-600' },
    { icon: '💼', name: 'LinkedIn', gradient: 'from-blue-600 to-blue-800' },
    { icon: '📷', name: 'Instagram', gradient: 'from-purple-500 to-pink-500' },
    { icon: '🎨', name: 'Dribbble', gradient: 'from-pink-500 to-red-500' }
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
            Let&apos;s Start <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">Something Amazing</span>
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
            Ready to transform your ideas into extraordinary digital experiences? 
            We&apos;d love to hear about your project and discuss how we can help.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, ease: 'power3.out' }}
            viewport={{ once: true }}
          >
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h3 className="text-2xl font-bold text-white mb-6">Send us a message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1, duration: 0.8 }}
                    viewport={{ once: true }}
                  >
                    <label className="block text-white/70 text-sm font-medium mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300"
                      placeholder="John Doe"
                      required
                    />
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                    viewport={{ once: true }}
                  >
                    <label className="block text-white/70 text-sm font-medium mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300"
                      placeholder="john@example.com"
                      required
                    />
                  </motion.div>
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  <label className="block text-white/70 text-sm font-medium mb-2">
                    Project Type
                  </label>
                  <select
                    name="project"
                    value={formData.project}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300"
                    required
                  >
                    <option value="" className="bg-gray-900">Select a project type</option>
                    <option value="web-design" className="bg-gray-900">Web Design</option>
                    <option value="web-development" className="bg-gray-900">Web Development</option>
                    <option value="mobile-app" className="bg-gray-900">Mobile App</option>
                    <option value="branding" className="bg-gray-900">Branding</option>
                    <option value="video-editing" className="bg-gray-900">Video Editing</option>
                    <option value="other" className="bg-gray-900">Other</option>
                  </select>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  <label className="block text-white/70 text-sm font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300 resize-none"
                    placeholder="Tell us about your project..."
                    required
                  />
                </motion.div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  whileHover={{ scale: isSubmitting ? 1 : 1.02, y: isSubmitting ? 0 : -2 }}
                  whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center gap-2">
                      <motion.div
                        className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                      />
                      Sending...
                    </span>
                  ) : (
                    'Send Message'
                  )}
                </motion.button>
              </form>
            </div>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, ease: 'power3.out' }}
            viewport={{ once: true }}
          >
            {/* Contact Methods */}
            <div className="space-y-6">
              {contactMethods.map((method, index) => (
                <motion.div
                  key={method.title}
                  className="group p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-300 cursor-pointer"
                  whileHover={{ scale: 1.02, backgroundColor: 'rgba(255,255,255,0.1)' }}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + index * 0.1, duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-16 h-16 bg-gradient-to-br ${method.gradient} rounded-xl flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300`}>
                      {method.icon}
                    </div>
                    <div>
                      <h4 className="text-white font-semibold text-lg">{method.title}</h4>
                      <p className="text-white/60 text-sm mb-1">{method.description}</p>
                      <p className="text-purple-400 font-medium">{method.contact}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Social Links */}
            <motion.div
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h4 className="text-white font-semibold text-lg mb-6">Follow Us</h4>
              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((social, index) => (
                  <motion.button
                    key={social.name}
                    className={`p-4 bg-gradient-to-br ${social.gradient} rounded-xl text-white font-medium flex items-center gap-3 hover:shadow-xl transition-all duration-300`}
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.8 + index * 0.1, duration: 0.6 }}
                    viewport={{ once: true }}
                  >
                    <span className="text-xl">{social.icon}</span>
                    {social.name}
                  </motion.button>
                ))}
              </div>
            </motion.div>

            {/* Fun Fact */}
            <motion.div
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 text-center"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="text-4xl mb-4">⚡</div>
              <h4 className="text-white font-semibold text-lg mb-2">Quick Response</h4>
              <p className="text-white/70 text-sm">
                We typically respond to all inquiries within 24 hours. 
                Urgent projects? We&apos;re here to help immediately!
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-purple-500/10 to-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-2xl" />
        
        {/* Floating Contact Icons */}
        <motion.div
          className="absolute top-16 right-16 text-3xl opacity-20"
          animate={{
            y: [0, -15, 0],
            rotate: [0, 5, 0]
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
        >
          📧
        </motion.div>
        
        <motion.div
          className="absolute bottom-20 left-20 text-2xl opacity-20"
          animate={{
            y: [0, 10, 0],
            x: [0, 5, 0]
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
        >
          💬
        </motion.div>
      </div>
    </section>
  );
};

export default RefinedContactSection;
