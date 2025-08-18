'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const teamMembers = [
  {
    id: 1,
    name: "John Anderson",
    role: "Founder & CEO",
    bio: "Visionary leader with 15+ years of experience in digital innovation and creative direction. Passionate about merging technology with creative solutions.",
    image: "/team/founder.svg",
    socials: {
      linkedin: "#",
      twitter: "#",
      github: "#"
    }
  },
  {
    id: 2,
    name: "Emily Chen",
    role: "Co-Founder & Creative Director",
    bio: "Award-winning designer with a keen eye for detail and a passion for creating memorable brand experiences. Expert in UI/UX and brand strategy.",
    image: "/team/cofounder.svg",
    socials: {
      linkedin: "#",
      twitter: "#",
      dribbble: "#"
    }
  },
  {
    id: 3,
    name: "Michael Rodriguez",
    role: "Chief Technology Officer",
    bio: "Tech innovator with expertise in emerging technologies. Leading our development team in creating cutting-edge digital solutions.",
    image: "/team/cto.svg",
    socials: {
      linkedin: "#",
      github: "#",
      twitter: "#"
    }
  }
];

const TeamPage = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary to-[#1a1f36] py-20 px-4">
      {/* Header Section */}
      <div className="container mx-auto text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="bg-accent-1/20 text-accent-1 px-4 py-1 rounded-full text-sm inline-block mb-4">
            Our Team
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl md:text-5xl font-bold text-white mb-6"
        >
          Meet the <span className="text-secondary">Creative Minds</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-light/80 max-w-2xl mx-auto mb-12"
        >
          Our talented team brings together expertise in design, development, and strategy
          to deliver exceptional digital experiences.
        </motion.p>
      </div>

      {/* Team Members Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl"
      >
        {teamMembers.map((member) => (
          <motion.div
            key={member.id}
            variants={itemVariants}
            whileHover={{ y: -10 }}
            className="bg-dark/50 backdrop-blur-sm rounded-xl p-6 border border-white/10"
          >
            {/* Image Container */}
            <div className="relative w-48 h-48 mx-auto mb-6">
              <div className="absolute inset-0 bg-gradient-to-br from-accent-1/20 to-accent-2/20 rounded-full"></div>
              <Image
                src={member.image}
                alt={member.name}
                width={192}
                height={192}
                className="rounded-full"
              />
            </div>

            {/* Member Info */}
            <div className="text-center">
              <h3 className="text-xl font-bold text-white mb-2">{member.name}</h3>
              <p className="text-secondary mb-4">{member.role}</p>
              <p className="text-light/80 mb-6">{member.bio}</p>

              {/* Social Links */}
              <div className="flex justify-center space-x-4">
                {Object.keys(member.socials).map((platform) => (
                  <motion.a
                    key={platform}
                    href={member.socials[platform]}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white/80 hover:bg-accent-2 hover:text-white transition-all duration-300"
                  >
                    <i className={`fab fa-${platform}`}></i>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Back to Home Button */}
      <div className="text-center mt-16">
        <Link href="/">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-gradient-to-r from-accent-1 to-accent-2 text-white rounded-lg font-semibold"
          >
            Back to Home
          </motion.button>
        </Link>
      </div>
    </div>
  );
};

export default TeamPage;
