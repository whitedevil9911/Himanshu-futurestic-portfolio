'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';
import gsap from 'gsap';
import ParticleBackground from '@/components/ParticleBackground';

export default function Home() {
  const { scrollYProgress } = useScroll();
  const heroRef = useRef(null);
  
  // References for animation sections
  const [aboutRef, aboutInView] = useInView({ threshold: 0.2, triggerOnce: true });
  const [skillsRef, skillsInView] = useInView({ threshold: 0.2, triggerOnce: true });
  const [projectsRef, projectsInView] = useInView({ threshold: 0.2, triggerOnce: true });
  const [achievementsRef, achievementsInView] = useInView({ threshold: 0.2, triggerOnce: true });
  const [contactRef, contactInView] = useInView({ threshold: 0.2, triggerOnce: true });

  // Parallax effect for hero section
  const y = useTransform(scrollYProgress, [0, 1], [0, -300]);

  useEffect(() => {
    // Hero section animation
    if (heroRef.current) {
      gsap.fromTo(
        '.hero-title',
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, delay: 0.5 }
      );
      
      gsap.fromTo(
        '.hero-subtitle',
        { opacity: 0 },
        { opacity: 1, duration: 1, delay: 1 }
      );
      
      gsap.fromTo(
        '.hero-cta',
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8, delay: 1.5 }
      );
    }
  }, []);

  // Skills data
  const skills = [
    { name: 'AI/ML', level: 90 },
    { name: 'Web Development', level: 95 },
    { name: 'UI/UX Design', level: 85 },
    { name: 'Robotics', level: 80 },
    { name: 'Cloud Computing', level: 88 },
    { name: 'Blockchain', level: 75 },
  ];

  // Projects data
  const projects = [
    {
      title: 'AI-Driven Health Assistant',
      description: 'A machine learning powered application that provides personalized health recommendations.',
      tech: ['Python', 'TensorFlow', 'React', 'AWS'],
      image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=500&q=80'
    },
    {
      title: 'Smart Home Automation System',
      description: 'IoT-based system for controlling home appliances with voice commands and AI predictions.',
      tech: ['IoT', 'Node.js', 'React Native', 'TensorFlow Lite'],
      image: 'https://images.unsplash.com/photo-1558002038-1055e2dae1d7?auto=format&fit=crop&w=500&q=80'
    },
    {
      title: 'Blockchain Voting Platform',
      description: 'Secure and transparent voting system built on blockchain technology.',
      tech: ['Solidity', 'Ethereum', 'Web3.js', 'React'],
      image: 'https://images.unsplash.com/photo-1639762681057-408e52192e55?auto=format&fit=crop&w=500&q=80'
    },
    {
      title: 'AR Educational App',
      description: 'Augmented reality application for interactive learning experiences.',
      tech: ['Unity', 'ARKit', 'C#', 'Firebase'],
      image: 'https://images.unsplash.com/photo-1617802690992-15d93263d3a9?auto=format&fit=crop&w=500&q=80'
    }
  ];

  // Achievements data
  const achievements = [
    {
      title: 'Innovation Award 2024',
      organization: 'Tech Innovators Summit',
      year: '2024',
      description: 'Recognized for groundbreaking work in AI-driven healthcare solutions.'
    },
    {
      title: 'Master Certification in AI & ML',
      organization: 'Stanford University',
      year: '2023',
      description: 'Advanced certification in artificial intelligence and machine learning applications.'
    },
    {
      title: 'Best Research Paper',
      organization: 'International Conference on Future Technologies',
      year: '2023',
      description: 'Award for research on neural networks in predictive analytics.'
    },
    {
      title: 'Hackathon Champion',
      organization: 'Global Tech Fest',
      year: '2022',
      description: 'First place in a 48-hour hackathon focused on sustainable technology solutions.'
    }
  ];

  return (
    <main className="relative min-h-screen">
      {/* Particle background */}
      <ParticleBackground />
      
      {/* Background grid effect */}
      <div className="fixed inset-0 grid-bg opacity-20 z-[-1]"></div>
      
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass-card bg-opacity-70 backdrop-blur-md">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-xl font-bold gradient-text">HKV</div>
          <div className="hidden md:flex space-x-8">
            <a href="#about" className="nav-link">About</a>
            <a href="#skills" className="nav-link">Skills</a>
            <a href="#projects" className="nav-link">Projects</a>
            <a href="#achievements" className="nav-link">Achievements</a>
            <a href="#contact" className="nav-link">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section 
        ref={heroRef} 
        className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
      >
        <motion.div style={{ y }} className="absolute inset-0 hero-gradient z-[-1]"></motion.div>
        
        <div className="container mx-auto px-6 py-12 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 text-center md:text-left mb-12 md:mb-0">
            <motion.h1 
              className="hero-title text-4xl md:text-6xl font-bold mb-6 gradient-text"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Himanshu Kumar Vishwakarma
            </motion.h1>
            
            <motion.h2 
              className="hero-subtitle text-xl md:text-2xl mb-8 text-gray-300"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Innovator | Creator | Futurist
            </motion.h2>
            
            <motion.p 
              className="mb-10 text-gray-400 max-w-lg mx-auto md:mx-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Transforming Ideas into Reality with Code and Creativity
            </motion.p>
            
            <motion.div
              className="hero-cta"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
            >
              <a 
                href="#contact" 
                className="btn-primary inline-block"
              >
                Get In Touch
              </a>
            </motion.div>
          </div>
          
          <div className="md:w-1/2 flex justify-center">
            <motion.div 
              className="relative w-64 h-64 md:w-80 md:h-80 float-animation"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              {/* Placeholder for 3D avatar or profile image */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-cyan-500 to-purple-600 opacity-70 blur-md"></div>
              <div className="absolute inset-2 rounded-full overflow-hidden border-2 border-cyan-300 glow-animation">
                <Image 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=500&q=80" 
                  alt="Himanshu Kumar Vishwakarma" 
                  fill
                  style={{ objectFit: 'cover' }}
                  className="rounded-full"
                />
              </div>
            </motion.div>
          </div>
        </div>
        
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 pulse-animation">
          <a href="#about" className="flex flex-col items-center text-sm text-gray-400">
            <span className="mb-2">Scroll Down</span>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" ref={aboutRef} className="py-20 relative">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={aboutInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">About Me</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-purple-600 mx-auto"></div>
          </motion.div>
          
          <div className="flex flex-col md:flex-row items-center">
            <motion.div 
              className="md:w-1/2 mb-10 md:mb-0"
              initial={{ opacity: 0, x: -50 }}
              animate={aboutInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="glass-card p-6 md:p-8 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 to-purple-600"></div>
                <h3 className="text-xl md:text-2xl font-semibold mb-4 text-cyan-300">My Journey</h3>
                <p className="text-gray-300 mb-6">
                  As a passionate technologist and futurist, I've dedicated my career to pushing the boundaries of what's possible with technology. With over 8 years of experience in software development, AI research, and innovative product design, I strive to create solutions that make a meaningful impact.
                </p>
                <p className="text-gray-300">
                  My approach combines technical expertise with creative problem-solving, allowing me to tackle complex challenges and transform visionary ideas into functional realities. I'm constantly exploring emerging technologies and finding ways to apply them to real-world problems.
                </p>
              </div>
            </motion.div>
            
            <motion.div 
              className="md:w-1/2 md:pl-10"
              initial={{ opacity: 0, x: 50 }}
              animate={aboutInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="relative">
                <div className="timeline-line"></div>
                
                {/* Timeline items */}
                <div className="relative pl-8 pb-10">
                  <div className="timeline-dot" style={{ top: '0px' }}></div>
                  <div className="glass-card p-4">
                    <h4 className="text-lg font-semibold text-cyan-300">2024 - Present</h4>
                    <p className="text-gray-300">Lead AI Researcher at FutureTech Labs</p>
                  </div>
                </div>
                
                <div className="relative pl-8 pb-10">
                  <div className="timeline-dot" style={{ top: '0px' }}></div>
                  <div className="glass-card p-4">
                    <h4 className="text-lg font-semibold text-cyan-300">2021 - 2024</h4>
                    <p className="text-gray-300">Senior Software Engineer at InnovateCorp</p>
                  </div>
                </div>
                
                <div className="relative pl-8 pb-10">
                  <div className="timeline-dot" style={{ top: '0px' }}></div>
                  <div className="glass-card p-4">
                    <h4 className="text-lg font-semibold text-cyan-300">2019 - 2021</h4>
                    <p className="text-gray-300">Full Stack Developer at TechSolutions</p>
                  </div>
                </div>
                
                <div className="relative pl-8">
                  <div className="timeline-dot" style={{ top: '0px' }}></div>
                  <div className="glass-card p-4">
                    <h4 className="text-lg font-semibold text-cyan-300">2016 - 2019</h4>
                    <p className="text-gray-300">Computer Science, MIT</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" ref={skillsRef} className="py-20 relative bg-opacity-30 bg-black">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={skillsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">Skills & Technologies</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-purple-600 mx-auto"></div>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={skillsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className="glass-card p-6"
              >
                <div className="flex justify-between items-center mb-3">
                  <h3 className="text-xl font-semibold text-cyan-300">{skill.name}</h3>
                  <span className="text-gray-300">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2.5">
                  <motion.div 
                    className="skill-bar"
                    initial={{ width: 0 }}
                    animate={skillsInView ? { width: `${skill.level}%` } : { width: 0 }}
                    transition={{ duration: 1, delay: 0.2 + (0.1 * index) }}
                  ></motion.div>
                </div>
              </motion.div>
            ))}
          </div>
          
          <motion.div 
            className="mt-16 glass-card p-8"
            initial={{ opacity: 0, y: 30 }}
            animate={skillsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <h3 className="text-xl md:text-2xl font-semibold mb-6 text-center gradient-text">Technologies I Work With</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {['Python', 'JavaScript', 'React', 'Node.js', 'TensorFlow', 'PyTorch', 
                'AWS', 'Docker', 'Kubernetes', 'GraphQL', 'MongoDB', 'PostgreSQL'].map((tech, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={skillsInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.4, delay: 0.7 + (0.05 * index) }}
                  className="flex flex-col items-center justify-center p-4 rounded-lg bg-opacity-30 bg-gray-800 border border-gray-700 hover:border-cyan-500 transition-all"
                >
                  <span className="text-gray-300 text-center">{tech}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" ref={projectsRef} className="py-20 relative">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={projectsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">Featured Projects</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-purple-600 mx-auto"></div>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={projectsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className="glass-card overflow-hidden project-card"
              >
                <div className="relative h-48">
                  <Image 
                    src={project.image} 
                    alt={project.title}
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3 text-cyan-300">{project.title}</h3>
                  <p className="text-gray-300 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, techIndex) => (
                      <span 
                        key={techIndex} 
                        className="px-3 py-1 text-xs rounded-full bg-opacity-30 bg-purple-900 text-cyan-300 border border-purple-700"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <a href="#" className="text-cyan-400 hover:text-cyan-300 inline-flex items-center">
                    View Project
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
          
          <motion.div 
            className="text-center mt-12"
            initial={{ opacity: 0 }}
            animate={projectsInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <a href="#" className="btn-primary inline-block">
              View All Projects
            </a>
          </motion.div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" ref={achievementsRef} className="py-20 relative bg-opacity-30 bg-black">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={achievementsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">Achievements & Certifications</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-purple-600 mx-auto"></div>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                animate={achievementsInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className="glass-card p-6 border-l-4 border-cyan-500"
              >
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-semibold text-cyan-300">{achievement.title}</h3>
                  <span className="text-sm bg-purple-900 bg-opacity-50 px-3 py-1 rounded-full text-purple-300">
                    {achievement.year}
                  </span>
                </div>
                <p className="text-gray-400 mb-3">{achievement.organization}</p>
                <p className="text-gray-300">{achievement.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" ref={contactRef} className="py-20 relative">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={contactInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">Get In Touch</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-purple-600 mx-auto"></div>
          </motion.div>
          
          <div className="flex flex-col md:flex-row gap-10">
            <motion.div 
              className="md:w-1/2"
              initial={{ opacity: 0, x: -50 }}
              animate={contactInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="glass-card p-8">
                <h3 className="text-xl font-semibold mb-6 text-cyan-300">Send Me a Message</h3>
                <form>
                  <div className="mb-4">
                    <label htmlFor="name" className="block text-gray-300 mb-2">Name</label>
                    <input type="text" id="name" className="contact-input w-full" />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="email" className="block text-gray-300 mb-2">Email</label>
                    <input type="email" id="email" className="contact-input w-full" />
                  </div>
                  <div className="mb-6">
                    <label htmlFor="message" className="block text-gray-300 mb-2">Message</label>
                    <textarea id="message" rows={5} className="contact-input w-full"></textarea>
                  </div>
                  <button type="submit" className="btn-primary w-full">Send Message</button>
                </form>
              </div>
            </motion.div>
            
            <motion.div 
              className="md:w-1/2"
              initial={{ opacity: 0, x: 50 }}
              animate={contactInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="glass-card p-8 h-full flex flex-col">
                <h3 className="text-xl font-semibold mb-6 text-cyan-300">Connect With Me</h3>
                
                <div className="space-y-6 flex-grow">
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full bg-purple-900 bg-opacity-50 flex items-center justify-center mr-4">
                      <FaEnvelope className="text-cyan-300 text-xl" />
                    </div>
                    <div>
                      <h4 className="text-gray-300 font-medium">Email</h4>
                      <p className="text-cyan-400">himanshu@example.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full bg-purple-900 bg-opacity-50 flex items-center justify-center mr-4">
                      <svg className="w-6 h-6 text-cyan-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-gray-300 font-medium">Location</h4>
                      <p className="text-cyan-400">San Francisco, CA</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8">
                  <h4 className="text-gray-300 font-medium mb-4">Follow Me</h4>
                  <div className="flex space-x-4">
                    <a href="#" className="social-icon w-10 h-10 rounded-full bg-purple-900 bg-opacity-50 flex items-center justify-center text-cyan-300 hover:bg-opacity-70">
                      <FaGithub />
                    </a>
                    <a href="#" className="social-icon w-10 h-10 rounded-full bg-purple-900 bg-opacity-50 flex items-center justify-center text-cyan-300 hover:bg-opacity-70">
                      <FaLinkedin />
                    </a>
                    <a href="#" className="social-icon w-10 h-10 rounded-full bg-purple-900 bg-opacity-50 flex items-center justify-center text-cyan-300 hover:bg-opacity-70">
                      <FaTwitter />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-gray-800">
        <div className="container mx-auto px-6 text-center">
          <div className="mb-4">
            <span className="text-xl font-bold gradient-text">HKV</span>
          </div>
          <p className="text-gray-400 mb-6">Made with <span className="text-pink-500">♥</span> and Code</p>
          <p className="text-gray-500 text-sm">© 2025 Himanshu Kumar Vishwakarma. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}