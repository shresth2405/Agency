"use client";

import {Carousel} from "@/components/ui/carousel";
import { motion, useScroll, useTransform } from 'framer-motion';
export function CarouselDemo() {
  const slideData =  [
    {
      id: 1,
      title: "E-commerce Platform",
      description: "A modern e-commerce solution with advanced features and seamless user experience. Built with scalable architecture and modern payment integration.",
      category: "Web Development",
      image: "/images/Coolcare1.mp4",
      tech: ["React", "Node.js", "MongoDB"],
      github: "https://github.com/username/ecommerce-platform",
      live: "https://ecommerce-demo.com"
    },
    {
      id: 2,
      title: "Brand Identity Design",
      description: "Complete brand identity package including logo, colors, and brand guidelines. Creating memorable visual experiences that resonate with target audiences.",
      category: "Branding",
      image: "/images/civicledger.mp4",
      tech: ["Illustrator", "Photoshop", "Figma"],
      github: "https://github.com/username/brand-identity",
      live: "https://brand-portfolio.com"
    },
    {
      id: 3,
      title: "Mobile Banking App",
      description: "Secure and intuitive mobile banking application with modern UI/UX design. Features biometric authentication and real-time transaction monitoring.",
      category: "Mobile App",
      image: "/images/layerforge.png",
      tech: ["React Native", "Firebase", "Stripe"],
      github: "https://github.com/username/banking-app",
      live: "https://banking-app-demo.com"
    },
    {
      id: 4,
      title: "Healthcare Dashboard",
      description: "Data visualization dashboard for healthcare professionals with real-time analytics. Helps medical teams make data-driven decisions quickly.",
      category: "Web App",
      image: "/images/vibhav.png",
      tech: ["Vue.js", "D3.js", "PostgreSQL"],
      github: "https://github.com/username/healthcare-dashboard",
      live: "https://healthcare-dash.com"
    },
    {
      id: 5,
      title: "Restaurant Website",
      description: "Beautiful restaurant website with online ordering and reservation system. Features interactive menu, table booking, and seamless payment processing.",
      category: "Website",
      image: "/images/vibhav.png",
      tech: ["Next.js", "Tailwind", "Sanity"],
      github: "https://github.com/username/restaurant-website",
      live: "https://restaurant-demo.com"
    },
    {
      id: 6,
      title: "Fitness App",
      description: "Comprehensive fitness tracking app with workout plans and nutrition guides. AI-powered recommendations and progress tracking for better results.",
      category: "Mobile App",
      image: "/images/vibhav.png",
      tech: ["Flutter", "Firebase", "AI/ML"],
      github: "https://github.com/username/fitness-app",
      live: "https://fitness-app-demo.com"
    }
  ];
  return (
    <div className="relative overflow-hidden w-full h-full py-20">
      <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl p-6 md:text-6xl font-bold  text-center mb-6 text-gradient-hero">
            Our <span className="text-gradient-accent">Projects</span>
          </h2>
          </motion.div>
      <Carousel slides={slideData} />
    </div>
  );
}
// [
//     {
//       id: 1,
//       title: "E-commerce Platform",
//       description: "A modern e-commerce solution with advanced features and seamless user experience. Built with scalable architecture and modern payment integration.",
//       category: "Web Development",
//       image: "/images/Coolcare.mp4",
//       tech: ["React", "Node.js", "MongoDB"],
//       github: "https://github.com/username/ecommerce-platform",
//       live: "https://ecommerce-demo.com"
//     },
//     {
//       id: 2,
//       title: "Brand Identity Design",
//       description: "Complete brand identity package including logo, colors, and brand guidelines. Creating memorable visual experiences that resonate with target audiences.",
//       category: "Branding",
//       image: "/images/contracker.png",
//       tech: ["Illustrator", "Photoshop", "Figma"],
//       github: "https://github.com/username/brand-identity",
//       live: "https://brand-portfolio.com"
//     },
//     {
//       id: 3,
//       title: "Mobile Banking App",
//       description: "Secure and intuitive mobile banking application with modern UI/UX design. Features biometric authentication and real-time transaction monitoring.",
//       category: "Mobile App",
//       image: "/images/layerforge.png",
//       tech: ["React Native", "Firebase", "Stripe"],
//       github: "https://github.com/username/banking-app",
//       live: "https://banking-app-demo.com"
//     },
//     {
//       id: 4,
//       title: "Healthcare Dashboard",
//       description: "Data visualization dashboard for healthcare professionals with real-time analytics. Helps medical teams make data-driven decisions quickly.",
//       category: "Web App",
//       image: "/images/vibhav.png",
//       tech: ["Vue.js", "D3.js", "PostgreSQL"],
//       github: "https://github.com/username/healthcare-dashboard",
//       live: "https://healthcare-dash.com"
//     },
//     {
//       id: 5,
//       title: "Restaurant Website",
//       description: "Beautiful restaurant website with online ordering and reservation system. Features interactive menu, table booking, and seamless payment processing.",
//       category: "Website",
//       image: "/images/vibhav.png",
//       tech: ["Next.js", "Tailwind", "Sanity"],
//       github: "https://github.com/username/restaurant-website",
//       live: "https://restaurant-demo.com"
//     },
//     {
//       id: 6,
//       title: "Fitness App",
//       description: "Comprehensive fitness tracking app with workout plans and nutrition guides. AI-powered recommendations and progress tracking for better results.",
//       category: "Mobile App",
//       image: "/images/vibhav.png",
//       tech: ["Flutter", "Firebase", "AI/ML"],
//       github: "https://github.com/username/fitness-app",
//       live: "https://fitness-app-demo.com"
//     }
//   ];