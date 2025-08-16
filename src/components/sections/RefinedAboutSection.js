'use client';
import { motion } from 'framer-motion';

const RefinedAboutSection = () => {
  const stats = [
    { number: '50+', label: 'Projects Completed', icon: '🚀' },
    { number: '25+', label: 'Happy Clients', icon: '😊' },
    { number: '3+', label: 'Years Experience', icon: '⭐' },
    { number: '100%', label: 'Client Satisfaction', icon: '💯' }
  ];

  const team = [
    {
      name: 'Creative Director',
      role: 'Design & Strategy',
      avatar: '🎨',
      skills: ['UI/UX Design', 'Branding', 'Strategy']
    },
    {
      name: 'Lead Developer',
      role: 'Technical Excellence',
      avatar: '💻',
      skills: ['React/Next.js', 'Node.js', 'DevOps']
    },
    {
      name: 'Video Specialist',
      role: 'Motion & Media',
      avatar: '🎬',
      skills: ['Video Editing', 'Motion Graphics', 'Animation']
    }
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
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">Our Agency</span>
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
            We are a passionate team of digital creators, developers, and strategists 
            dedicated to pushing the boundaries of what&apos;s possible in web experiences.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left Content */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, ease: 'power3.out' }}
            viewport={{ once: true }}
          >
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-white">
                Crafting Digital Experiences That Matter
              </h3>
              
              <p className="text-lg text-white/70 leading-relaxed">
                Our approach combines cutting-edge technology with creative excellence. 
                We believe that great digital experiences should not only look beautiful 
                but also perform flawlessly and deliver real business value.
              </p>

              <p className="text-lg text-white/70 leading-relaxed">
                From concept to launch, we work closely with our clients to understand 
                their vision and transform it into digital reality that exceeds expectations.
              </p>
            </div>

            {/* Mission Values */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { icon: '🎯', title: 'Mission', desc: 'Create exceptional digital experiences' },
                { icon: '💡', title: 'Innovation', desc: 'Stay ahead with latest technologies' },
                { icon: '🤝', title: 'Partnership', desc: 'Collaborate closely with clients' },
                { icon: '🔧', title: 'Quality', desc: 'Deliver pixel-perfect solutions' }
              ].map((value, index) => (
                <motion.div
                  key={value.title}
                  className="p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-white/20 transition-all duration-300"
                  whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.1)' }}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + index * 0.1, duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  <div className="text-2xl mb-2">{value.icon}</div>
                  <h4 className="text-white font-semibold mb-1">{value.title}</h4>
                  <p className="text-white/60 text-sm">{value.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Visual - Team Grid */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, ease: 'power3.out' }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-white text-center mb-8">
              Meet Our Team
            </h3>
            
            <div className="grid gap-6">
              {team.map((member, index) => (
                <motion.div
                  key={member.name}
                  className="group p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-300"
                  whileHover={{ scale: 1.02, backgroundColor: 'rgba(255,255,255,0.1)' }}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 + index * 0.2, duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="text-4xl group-hover:scale-110 transition-transform duration-300">
                      {member.avatar}
                    </div>
                    <div>
                      <h4 className="text-white font-semibold">{member.name}</h4>
                      <p className="text-purple-400 text-sm">{member.role}</p>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {member.skills.map((skill, skillIndex) => (
                      <span
                        key={skill}
                        className="px-3 py-1 bg-gradient-to-r from-purple-500/20 to-blue-500/20 text-white/80 text-xs rounded-full border border-white/10"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'power3.out' }}
          viewport={{ once: true }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10"
              whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.1)' }}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1, duration: 0.8, ease: 'back.out(1.7)' }}
              viewport={{ once: true }}
            >
              <div className="text-3xl mb-3">{stat.icon}</div>
              <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400 mb-2">
                {stat.number}
              </div>
              <div className="text-white/70 text-sm font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-white mb-4">
            Ready to start your next project?
          </h3>
          <p className="text-white/70 mb-8">
            Let&apos;s discuss how we can bring your vision to life.
          </p>
          <motion.button
            className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            Get In Touch
          </motion.button>
        </motion.div>
      </div>

      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-gradient-to-br from-purple-500/10 to-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-1/4 w-56 h-56 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-2xl" />
      </div>
    </section>
  );
};

export default RefinedAboutSection;
