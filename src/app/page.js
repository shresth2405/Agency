'use client';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

// Import simplified components
import HeroSimple from "@/components/sections/HeroSimple";
import AboutSimple from "@/components/sections/AboutSimple";
import ServicesSimple from "@/components/sections/ServicesSimple";
import ProjectsSimple from "@/components/sections/ProjectsSimple";
import ContactSimple from "@/components/sections/ContactSimple";
import Testimonials from '@/components/sections/Testimonials';
import TeamPage from './team/page';
import Process from '@/components/sections/Process';
// import RefinedTeamSection from "@/components/sections/RefinedTeamSection";

// Simple Navbar Component
const SimpleNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { title: 'Home', href: '#home' },
    { title: 'About', href: '#about' },
    { title: 'Services', href: '#services' },
    { title: 'Projects', href: '#projects' },
    { title: 'Team', href: '#team' },
    { title: 'Contact', href: '#contact' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-primary/90 backdrop-blur-md shadow-lg' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-white">
            Creative<span className="text-secondary">Sync</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <motion.a
                key={index}
                href={item.href}
                className="text-white hover:text-secondary transition-colors duration-300"
                whileHover={{ y: -2 }}
              >
                {item.title}
              </motion.a>
            ))}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-2 bg-gradient-to-r from-accent-1 to-accent-2 text-white rounded-lg font-semibold"
            >
              Get Started
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden bg-primary/95 backdrop-blur-md rounded-lg mt-2 p-4"
          >
            {navItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="block py-3 text-white hover:text-secondary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.title}
              </a>
            ))}
            <button className="w-full mt-4 px-6 py-3 bg-gradient-to-r from-accent-1 to-accent-2 text-white rounded-lg font-semibold">
              Get Started
            </button>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

// Simple Footer Component
const SimpleFooter = () => {
  return (
    <footer className="bg-primary py-12 border-t border-gray-800">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <Link href="/" className="text-2xl font-bold text-white mb-4 block">
              Creative<span className="text-secondary">Sync</span>
            </Link>
            <p className="text-gray-400 mb-4 max-w-md">
              We create exceptional digital experiences that help businesses thrive 
              in the modern world through innovative design and development.
            </p>
            <div className="flex space-x-4">
              {['🐦', '💼', '📸', '🏀'].map((icon, index) => (
                <motion.button
                  key={index}
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-lg hover:bg-accent-2 transition-colors"
                >
                  {icon}
                </motion.button>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <div className="space-y-2">
              {['Home', 'About', 'Services', 'Projects', 'Team', 'Contact'].map((link, index) => (
                <a
                  key={index}
                  href={`#${link.toLowerCase()}`}
                  className="block text-gray-400 hover:text-secondary transition-colors"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <div className="space-y-2 text-gray-400">
              <p>📧 hello@creativesync.com</p>
              <p>📱 +1 (555) 123-4567</p>
              <p>📍 San Francisco, CA</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2025 CreativeSync. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default function Home() {
  const [progress, setProgress] = useState(0);
  const [loading, setLoading] = useState(true);
  const [showStats, setShowStats] = useState(false);

  useEffect(() => {
    // Show stats after 2 seconds
    const statsTimer = setTimeout(() => setShowStats(true), 5900);
    
    // Simulate loading progress with deterministic increments
    let currentProgress = 0;
    const interval = setInterval(() => {
      currentProgress += 2.5; // Fixed increment
      setProgress(currentProgress);
      
      if (currentProgress >= 100) {
        clearInterval(interval);
        // Hide loader after completion
        setTimeout(() => {
          setLoading(false);
        }, 3000);
      }
    }, 100);

    return () => {
      clearInterval(interval);
      clearTimeout(statsTimer);
    };
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-primary flex flex-col items-center justify-center">
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="mb-8"
        >
          <div className="w-24 h-24 relative">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              className="w-full h-full rounded-2xl bg-gradient-to-br from-blue-500 via-purple-600 to-blue-400 flex items-center justify-center shadow-2xl"
            >
              <motion.span 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 0.5 }}
                className="text-2xl font-bold text-white"
              >
                
              </motion.span>
            </motion.div>
            
            {/* Pulse Ring */}
            <motion.div
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.8, 0, 0.8],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute inset-0 rounded-2xl border-2 border-blue-500/60"
            />
          </div>
        </motion.div>

        {/* Progress Bar */}
        <div className="w-64 mb-8">
          <div className="flex justify-between text-xs text-gray-400 mb-2">
            <span>Loading Experience</span>
            <span className="text-blue-400 font-semibold">{Math.round(progress)}%</span>
          </div>
          <div className="w-full bg-gray-800/50 rounded-full h-2 overflow-hidden backdrop-blur-sm border border-white/10">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="h-full bg-gradient-to-r from-blue-500 via-purple-600 to-blue-400 rounded-full"
            />
          </div>
        </div>

        <motion.p
          key={Math.floor(progress / 25)}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-gray-400 text-base font-medium"
        >
          {progress < 25 && "Initializing creative workspace..."}
          {progress >= 25 && progress < 50 && "Loading design components..."}
          {progress >= 50 && progress < 75 && "Preparing user experience..."}
          {progress >= 75 && progress < 100 && "Finalizing magical touches..."}
          {progress >= 100 && "Welcome to CreativeSync! 🎉"}
        </motion.p>
      </div>
    );
  }

  return (
    <div className="relative">
      <SimpleNavbar />
      
      <main>
        <HeroSimple />
        <AboutSimple />
        <ServicesSimple />
        <ProjectsSimple />
        <Process/>
        <TeamPage/>
        <ContactSimple />
      </main>
      
      <SimpleFooter />
      
      {/* Scroll to Top Button */}
      <motion.button
        className="fixed bottom-8 right-8 w-12 h-12 bg-accent-2 text-white rounded-full flex items-center justify-center shadow-lg z-40"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        ↑
      </motion.button>
    </div>
  );
}
