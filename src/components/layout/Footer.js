'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const services = [
    { name: 'UI/UX Design', href: '#services' },
    { name: 'Branding', href: '#services' },
    { name: 'Graphic Design', href: '#services' },
    { name: 'Web Development', href: '#services' },
    { name: 'Machine Learning', href: '#services' },
    { name: 'Video Editing', href: '#services' }
  ];
  
  const company = [
    { name: 'About Us', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Process', href: '#process' },
    { name: 'Careers', href: '#careers' },
    { name: 'Contact', href: '#contact' }
  ];
  
  return (
    <footer className="bg-primary text-white">
      <div className="container mx-auto px-4">
        {/* Newsletter Section */}
        <div className="py-12 border-b border-white/10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <motion.h3 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="text-2xl font-bold mb-4"
              >
                Subscribe to Our Newsletter
              </motion.h3>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="text-light/70"
              >
                Stay updated with our latest projects, insights, and industry trends.
              </motion.p>
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-1 px-4 py-3 bg-dark border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-1 text-white"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-secondary text-primary px-6 py-3 rounded-lg hover:bg-secondary/90 transition-colors font-medium whitespace-nowrap"
              >
                Subscribe
              </motion.button>
            </motion.div>
          </div>
        </div>
        
        {/* Main Footer */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Column 1: About */}
          <div>
            <Link href="/" className="text-2xl font-bold inline-block mb-6">
              Creative<span className="text-secondary">Sync</span>
            </Link>
            <p className="text-light/70 mb-6">
              We craft digital experiences that captivate, inspire, and drive results for businesses of all sizes.
            </p>
            <div className="flex space-x-4">
              {['Twitter', 'LinkedIn', 'Instagram', 'Dribbble'].map((social) => (
                <motion.a
                  key={social}
                  href="#"
                  whileHover={{ y: -5 }}
                  className="w-8 h-8 rounded-full bg-dark/50 flex items-center justify-center text-white hover:bg-accent-1 transition-colors text-sm"
                >
                  {social.charAt(0)}
                </motion.a>
              ))}
            </div>
          </div>
          
          {/* Column 2: Services */}
          <div>
            <h4 className="text-lg font-bold mb-6">Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.name}>
                  <Link 
                    href={service.href}
                    className="text-light/70 hover:text-secondary transition-colors"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Column 3: Company */}
          <div>
            <h4 className="text-lg font-bold mb-6">Company</h4>
            <ul className="space-y-3">
              {company.map((item) => (
                <li key={item.name}>
                  <Link 
                    href={item.href}
                    className="text-light/70 hover:text-secondary transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Column 4: Contact */}
          <div>
            <h4 className="text-lg font-bold mb-6">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-secondary mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-light/70">
                  123 Innovation Street, Creative District, CA 94103
                </span>
              </li>
              <li className="flex items-start space-x-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-secondary mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className="text-light/70">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-start space-x-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-secondary mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="text-light/70">info@creativesync.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="py-6 border-t border-white/10 text-center md:flex md:justify-between md:items-center">
          <p className="text-light/70 mb-4 md:mb-0">
            &copy; {currentYear} CreativeSync. All rights reserved.
          </p>
          <div className="flex justify-center md:justify-end space-x-6">
            <Link href="#" className="text-light/70 hover:text-secondary transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="text-light/70 hover:text-secondary transition-colors">
              Terms of Service
            </Link>
            <Link href="#" className="text-light/70 hover:text-secondary transition-colors">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
