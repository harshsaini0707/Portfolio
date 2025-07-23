import React, { useState, useEffect } from 'react';

import { 
  Download, 
  Github, 
  Linkedin, 
  Mail, 
  ExternalLink, 
  Code, 
  Database, 
  Server,
  ChevronDown,
  Menu,
  X,
  Twitter,
} from 'lucide-react';
import { TypeAnimation } from 'react-type-animation';
import { GiBrain } from "react-icons/gi";
import { FaReact ,FaNodeJs ,FaJsSquare,FaHtml5 ,FaBootstrap,FaJava,FaGitAlt ,FaGithub    } from "react-icons/fa";
import { SiMongodb ,SiTypescript ,SiExpress ,SiTailwindcss ,SiShadcnui,SiPostman ,SiRedux, SiPrisma, SiZod } from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";
import Agrisphere from '../src/assets/AgriSphere.png'
import EchoMind from '../src/assets/EchoMind.png'
import GitSync from '../src/assets/GitSync.png'
import Resume from '../src/assets/Resume.pdf'

const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // Sample data - replace with your actual information
  const projects = [
 
    {
      title: "AgriSphere",
      description: "A full-stack web app empowering farmers with crop suggestions based on soil type and location, a virtual marketplace , weather forecasts, and a collaborative community platform. Features include role-based access, real-time chat, task management, and product listing to enhance agricultural productivity and connectivity",
      tech:  ["Gemini API","React", "MongoDB", "Tailwind CSS","Express.js", "Node.js" ,"Weather API " ,"RazorPay"],
      github: "https://github.com/harshsaini0707/AgriSphere",
      live: "https://agri-sphere-mu.vercel.app/",
      image: Agrisphere
    },
         {
  title: "GitSync.ai",
  description: "AI-powered Git assistant for code and docs search, meeting insights, commit summaries, and contextual project memory with RAG,  team collaboration.",
  tech: ["Next.js", "Prisma", "PostgreSQL","Vector embedding","Langchain" , "RAG" , "Gemini", "Tailwind CSS", "OpenAI", "Cloudinary", "Mistral", "Vercel", "Typescript" , "Zod"],
  github: "https://github.com/harshsaini0707/Gitsync.ai",
  live: "https://gitsync-ai.vercel.app/",             
  image: GitSync
},
    {
      title: "EchoMind.ai",
      description: "An AI-powered platform that converts audio and PDF files into transcriptions, summaries, and podcasts using Gemini and Sarvam TTS. Enabled multilingual audio generation, OCR-based text extraction, and paragraph-wise voice playback with a user-friendly dashboard.",
      tech: ["Gemini API","Sarvam TTS model","Cloudinary","React", "MongoDB", "Tailwind CSS","Express.js", "Node.js" , " pdf-parse"],
      github: "https://github.com/harshsaini0707/EchoMind.ai",
      live: "https://echo-mind-ai.vercel.app/",
      image: EchoMind
    },
   


   
  ];

const skills = [
  { name: "React", icon: FaReact, color: "#61DAFB", bgColor: "#1d3b4f" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6", bgColor: "#1a3a5e" },
  { name: "Next.js", icon: RiNextjsFill, color: "#ffffff", bgColor: "#0f0f0f" },
  { name: "Node.js", icon: FaNodeJs, color: "#68A063", bgColor: "#d1f5d3" },
  { name: "Express", icon: SiExpress, color: "#ffffff", bgColor: "#f5f5f5" },
  { name: "MongoDB", icon: SiMongodb, color: "#47A248", bgColor: "#e1f3e8" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "#38BDF8", bgColor: "#e0f6ff" },
  { name: "JavaScript", icon: FaJsSquare, color: "#F7DF1E", bgColor: "#fffbe6" },
  { name: "HTML", icon: FaHtml5, color: "#E34F26", bgColor: "#ffe8e2" },
  { name: "BootStrap", icon: FaBootstrap, color: "#7952B3", bgColor: "#f0e8ff" },
  { name: "Shadcn UI", icon: SiShadcnui, color: "#ffffff", bgColor: "#f0f0f0" },
  { name: "PostMan", icon: SiPostman, color: "#FF6C37", bgColor: "#ffe6dc" },
  { name: "Java", icon: FaJava, color: "#007396", bgColor: "#e1ecf4" },
  { name: "Redux Toolkit", icon: SiRedux, color: "#007396", bgColor: "#ffe6dc"},
  { name: "Git", icon: FaGitAlt, color: "#F05032", bgColor: "#ffe5e0" },
  { name: "GitHub", icon: FaGithub, color: "#ffffff", bgColor: "#000000" },
  {name :"Prisma" , icon :SiPrisma , color: "#ffffff", bgColor: "#000000"  },
  {name :"Zod" , icon : SiZod , color: "#00ffff", bgColor: "#000000"}
];


  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 900;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/90 backdrop-blur-md z-50 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-xl font-bold">@code by Harsh Saini</div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`hover:text-emerald-400 transition-colors duration-300 ${
                    activeSection === item.toLowerCase() ? 'text-emerald-400' : 'text-gray-300'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden pb-4">
              {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="block w-full text-left py-2 text-gray-300 hover:text-emerald-400 transition-colors duration-300"
                >
                  {item}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
     <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/20 via-transparent to-blue-900/20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="space-y-6">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight">
              Hi, I'm <span className="bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent">Harsh Saini</span>
              <br />
              <span className="text-gray-300">
                <TypeAnimation
                  sequence={[
                    'Full Stack Developer',
                    1000,
                    'Smart AI Integrator',
                    1000,
                    'MERN Stack Expert',
                    1000,
                  ]}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                />
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto text-center">
              I craft intelligent digital products with modern frontend, scalable backend, and AI-powered innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
             <a 
  href={Resume}
  download="Harsh_Saini_Resume.pdf" 
  className="bg-gray-800 hover:bg-gray-700 text-white px-8 py-3 rounded-full transition-all duration-300 flex items-center gap-2 group"
>
  <Download size={20} />
  Download Resume
  <div className="w-0 group-hover:w-4 transition-all duration-300 overflow-hidden">
    <ChevronDown size={16} className="rotate-90" />
  </div>
</a>

              <div className="flex gap-4">
                <a href="https://github.com/harshsaini0707?tab=repositories" className="p-3 bg-gray-800 hover:bg-emerald-600 rounded-full transition-all duration-300 hover:scale-110">
                  <Github size={20} />
                </a>
                <a href="https://www.linkedin.com/in/harsh-saini-850940288/" className="p-3 bg-gray-800 hover:bg-blue-600 rounded-full transition-all duration-300 hover:scale-110">
                  <Linkedin size={20} />
                </a>
                <a href="#contact" className="p-3 bg-gray-800 hover:bg-red-600 rounded-full transition-all duration-300 hover:scale-110">
                  <Mail size={20} />
                </a>
                <a href="https://x.com/HarshSaini41432" className="p-3 bg-gray-800 hover:bg-blue-900 rounded-full transition-all duration-300 hover:scale-110">
                  <Twitter size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown size={24} className="text-gray-400" />
        </div>
      </section>
      {/* About Section */}
      <section id="about" className="py-20 bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">About Me</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-emerald-400 to-blue-400 mx-auto mb-8"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center font-mono">
            <div className="space-y-6">
             <p className="text-lg text-gray-300 leading-relaxed">
  I'm a Full Stack Developer who loves building end-to-end digital experiences clean UI, scalable backend, and smart AI integration. From real-time systems to SaaS tools, I enjoy turning ideas into fast, functional, and human-friendly products.
</p>
<p className="text-lg text-gray-300 leading-relaxed mt-4">
  When I’m not building, I’m usually diving into the latest AI models, experimenting with developer tools, or optimizing real-world. I enjoy pushing ideas into polished, usable products that feel both smart and seamless.
</p>




            </div>
            <div className="relative">
              <div className="w-full h-80 bg-gradient-to-br from-emerald-900/30 to-blue-900/30 rounded-2xl relative overflow-hidden">
                <div className="absolute inset-0 bg-black/20"></div>
                <img 
                  src="https://img.freepik.com/premium-vector/young-man-writing-code-desktop-computer-software-developer-work-programming_625536-3102.jpg?ga=GA1.1.647561633.1750266469&semt=ais_hybrid&w=740" 
                  alt="Profile" 
                  className="w-full h-full object-cover rounded-2xl opacity-80"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

       {/* Skills Section */}
      <section id="skills" className="py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Skills & Expertise</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-emerald-400 to-blue-400 mx-auto mb-8"></div>
          </div>
          
          <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 mb-12">
            <div className="flex flex-wrap justify-center gap-6">
              {skills.map((skill, index) => {
                const IconComponent = skill.icon;
                const randomDelay = Math.random() * 3;
                return (
                  <div 
                    key={index} 
                    className="skill-item relative group cursor-pointer"
                    style={{
                      '--delay': `${randomDelay}s`
                    }}
                  >
                    <div className="flex flex-col items-center justify-center p-4 transition-all duration-300 group-hover:scale-110">
                      <IconComponent 
                        size={32} 
                        style={{ color: skill.color }} 
                        className="mb-2 skill-logo transition-transform duration-300"
                      />
                      <span className="text-sm font-semibold text-center text-gray-300 group-hover:text-white transition-colors duration-300">
                        {skill.name}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Additional Skills Categories */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-gray-900/50 rounded-xl">
              <Code className="mx-auto mb-4 text-emerald-400" size={38} />
              <h3 className="text-lg font-semibold mb-2">Frontend</h3>
              <p className="text-gray-400 text-sm">Modern UI/UX Development</p>
            </div>
            <div className="text-center p-6 bg-gray-900/50 rounded-xl">
              <Server className="mx-auto mb-4 text-blue-400" size={38} />
              <h3 className="text-lg font-semibold mb-2">Backend</h3>
              <p className="text-gray-400 text-sm">Server & API Development</p>
            </div>
            <div className="text-center p-6 bg-gray-900/50 rounded-xl">
              <Database className="mx-auto mb-4 text-purple-400" size={38} />
              <h3 className="text-lg font-semibold mb-2">Database</h3>
              <p className="text-gray-400 text-sm">Data Management & Design</p>
            </div>
            <div className="text-center p-6 bg-gray-900/50 rounded-xl">
              <GiBrain className="mx-auto mb-4 text-pink-400" size={38} />
              <h3 className="text-lg font-semibold mb-2">AI Integration</h3>
              <p className="text-gray-400 text-sm">Building intelligent solutions</p>
            </div>
          </div>
        </div>

        <style jsx>{`
          .skill-logo {
            animation: vibrate 3s ease-in-out infinite;
            animation-delay: var(--delay, 0s);
          }
          
          @keyframes vibrate {
            0%, 100% {
              transform: translate(0);
            }
            10% {
              transform: translate(-0.5px, -0.5px);
            }
            20% {
              transform: translate(0.5px, -0.5px);
            }
            30% {
              transform: translate(-0.5px, 0.5px);
            }
            40% {
              transform: translate(0.5px, 0.5px);
            }
            50% {
              transform: translate(-0.5px, -0.5px);
            }
            60% {
              transform: translate(0.5px, 0px);
            }
            70% {
              transform: translate(0px, 0.5px);
            }
            80% {
              transform: translate(-0.5px, 0px);
            }
            90% {
              transform: translate(0px, -0.5px);
            }
          }
          
          .skill-item:hover .skill-logo {
            animation-play-state: paused;
            transform: scale(1.1);
          }
        `}</style>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Featured Projects</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-emerald-400 to-blue-400 mx-auto mb-8"></div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-gray-800/50 rounded-xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300 group">
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                  <p className="text-gray-400 mb-4 line-clamp-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, techIndex) => (
                      <span key={techIndex} className="px-3 py-1 bg-emerald-900/30 text-emerald-400 rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <a href={project.github} className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors duration-300">
                      <Github size={18} />
                      Code
                    </a>
                    <a href={project.live} className="flex items-center gap-2 text-gray-400 hover:text-emerald-400 transition-colors duration-300">
                      <ExternalLink size={18} />
                      Live Demo
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Get In Touch</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-emerald-400 to-blue-400 mx-auto mb-8"></div>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              I'm always open to discussing new opportunities, creative projects, or partnerships.
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
       <div className="max-w-4xl mx-auto">
  <div className="grid md:grid-cols-3 gap-8 mb-12">
    {/* Email */}
    <div className="text-center p-6 bg-gray-900/50 rounded-xl">
      <Mail className="mx-auto mb-4 text-emerald-400" size={32} />
      <h3 className="text-xl font-semibold mb-2">Email</h3>
      <a
        href="mailto:harshsaini0172@gmail.com"
        className="text-gray-400 hover:underline"
      >
        harshsaini0172@gmail.com
      </a>
    </div>

    {/* LinkedIn */}
    <div className="text-center p-6 bg-gray-900/50 rounded-xl">
      <Linkedin className="mx-auto mb-4 text-blue-400" size={32} />
      <h3 className="text-xl font-semibold mb-2">LinkedIn</h3>
      <a
        href="https://linkedin.com/in/harsh-saini-850940288/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-400 hover:underline"
      >
        linkedin.com/in/harsh-saini-850940288/
      </a>
    </div>

    {/* X (Twitter) */}
    <div className="text-center p-6 bg-gray-900/50 rounded-xl">
      <Twitter className="mx-auto mb-4 text-blue-900" size={38} />
      <h3 className="text-xl font-semibold mb-2">X</h3>
      <a
        href="https://x.com/HarshSaini41432"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-400 hover:underline"
      >
        x.com/HarshSaini41432
      </a>
    </div>
  </div>
</div>
           
          </div>
        </div>
      </section>

    
    </div>
  );
};

export default Portfolio;