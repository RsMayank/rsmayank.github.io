import React, { useState, useEffect } from 'react';
import { ChevronDown, Code, Database, Cloud, Mail, Phone, MapPin, Github, Linkedin, ExternalLink, Award, Users, Zap, CheckCircle } from 'lucide-react';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [isVisible, setIsVisible] = useState({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible(prev => ({
            ...prev,
            [entry.target.id]: entry.isIntersecting
          }));
        });
      },
      { threshold: 0.1 }
    );

    const sections = document.querySelectorAll('section[id]');
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
  };

  const skills = [
    { name: 'Salesforce Development', level: 95, icon: <Cloud className="w-6 h-6" /> },
    { name: 'CPQ Implementation', level: 90, icon: <Database className="w-6 h-6" /> },
    { name: 'Apex Programming', level: 92, icon: <Code className="w-6 h-6" /> },
    { name: 'Lightning Web Components', level: 88, icon: <Zap className="w-6 h-6" /> },
    { name: 'Salesforce Flow', level: 85, icon: <CheckCircle className="w-6 h-6" /> },
    { name: 'Integration & APIs', level: 87, icon: <Database className="w-6 h-6" /> }
  ];

  const projects = [
    {
      title: 'Enterprise CPQ Implementation',
      description: 'Led a complete CPQ implementation for a Fortune 500 company, reducing quote generation time by 75% and increasing sales team productivity.',
      tech: ['Salesforce CPQ', 'Apex', 'Lightning Components', 'Integration APIs'],
      highlights: ['$2M+ revenue impact', '75% faster quotes', '500+ users']
    },
    {
      title: 'Custom Pricing Engine',
      description: 'Developed a sophisticated pricing engine with complex discount structures, approval workflows, and real-time pricing calculations.',
      tech: ['Apex', 'Trigger Framework', 'Process Builder', 'Custom Objects'],
      highlights: ['Complex pricing rules', 'Automated approvals', 'Real-time calculations']
    },
    {
      title: 'Salesforce Integration Hub',
      description: 'Built a comprehensive integration platform connecting Salesforce with ERP, billing, and third-party systems.',
      tech: ['REST APIs', 'Platform Events', 'External Services', 'Middleware'],
      highlights: ['5+ system integrations', 'Real-time sync', 'Error handling']
    }
  ];

  const certifications = [
    'Salesforce Certified Platform Developer I',
    'Salesforce Certified CPQ Specialist',
    'Salesforce Certified Administrator',
    'Salesforce Certified Platform App Builder'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-lg border-b border-purple-500/20">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              SF Developer
            </div>
            <div className="hidden md:flex space-x-8">
              {['About', 'Skills', 'Projects', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="hover:text-purple-400 transition-colors duration-300"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 animate-pulse"></div>
        <div className="relative z-10 text-center px-6">
          <div className="mb-8">
            <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent animate-pulse">
              Salesforce Expert
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Full-Stack Salesforce Developer & CPQ Specialist
            </p>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-12">
              Transforming business processes through innovative Salesforce solutions, 
              specializing in Configure Price Quote (CPQ) implementations and custom development.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
            <button 
              onClick={() => scrollToSection('projects')}
              className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-white font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/25"
            >
              View My Work
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="px-8 py-4 border-2 border-purple-400 rounded-full text-purple-400 font-semibold hover:bg-purple-400 hover:text-white transition-all duration-300 transform hover:scale-105"
            >
              Get In Touch
            </button>
          </div>
          
          <div className="animate-bounce">
            <ChevronDown className="w-8 h-8 mx-auto text-purple-400" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className={`transition-all duration-1000 ${isVisible.about ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              About Me
            </h2>
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-2xl p-8 backdrop-blur-sm border border-purple-500/20">
                  <h3 className="text-2xl font-bold mb-6 text-purple-300">Professional Summary</h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    Experienced Salesforce Developer with 5+ years of expertise in building scalable, 
                    enterprise-grade solutions. Specialized in CPQ implementations, custom development, 
                    and system integrations that drive business growth and operational efficiency.
                  </p>
                  <p className="text-gray-300 leading-relaxed">
                    Passionate about leveraging Salesforce's full potential to solve complex business 
                    challenges and deliver measurable ROI through innovative cloud solutions.
                  </p>
                </div>
              </div>
              
              <div>
                <div className="bg-gradient-to-r from-pink-600/20 to-purple-600/20 rounded-2xl p-8 backdrop-blur-sm border border-pink-500/20">
                  <h3 className="text-2xl font-bold mb-6 text-pink-300">Certifications</h3>
                  <div className="space-y-4">
                    {certifications.map((cert, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <Award className="w-5 h-5 text-yellow-400" />
                        <span className="text-gray-300">{cert}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6 bg-black/20">
        <div className="max-w-6xl mx-auto">
          <div className={`transition-all duration-1000 ${isVisible.skills ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Technical Skills
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              {skills.map((skill, index) => (
                <div key={index} className="bg-gradient-to-r from-purple-600/10 to-pink-600/10 rounded-xl p-6 backdrop-blur-sm border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300">
                  <div className="flex items-center mb-4">
                    <div className="text-purple-400 mr-4">
                      {skill.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-white">{skill.name}</h3>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-3">
                    <div 
                      className="bg-gradient-to-r from-purple-500 to-pink-500 h-3 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: isVisible.skills ? `${skill.level}%` : '0%' }}
                    ></div>
                  </div>
                  <div className="text-right text-purple-300 mt-2 font-semibold">
                    {skill.level}%
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className={`transition-all duration-1000 ${isVisible.projects ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Featured Projects
            </h2>
            
            <div className="grid gap-8">
              {projects.map((project, index) => (
                <div key={index} className="bg-gradient-to-r from-purple-600/10 to-pink-600/10 rounded-2xl p-8 backdrop-blur-sm border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300 transform hover:scale-105">
                  <div className="flex flex-col lg:flex-row gap-8">
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold mb-4 text-purple-300">{project.title}</h3>
                      <p className="text-gray-300 mb-6 leading-relaxed">{project.description}</p>
                      
                      <div className="mb-6">
                        <h4 className="text-lg font-semibold mb-3 text-pink-300">Technologies Used:</h4>
                        <div className="flex flex-wrap gap-2">
                          {project.tech.map((tech, techIndex) => (
                            <span key={techIndex} className="px-3 py-1 bg-purple-600/30 rounded-full text-sm text-purple-200 border border-purple-400/30">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                    
                    <div className="lg:w-1/3">
                      <h4 className="text-lg font-semibold mb-3 text-yellow-300">Key Highlights:</h4>
                      <div className="space-y-2">
                        {project.highlights.map((highlight, highlightIndex) => (
                          <div key={highlightIndex} className="flex items-center space-x-2">
                            <CheckCircle className="w-4 h-4 text-green-400" />
                            <span className="text-gray-300 text-sm">{highlight}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-black/20">
        <div className="max-w-4xl mx-auto">
          <div className={`transition-all duration-1000 ${isVisible.contact ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Let's Connect
            </h2>
            
            <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-2xl p-8 backdrop-blur-sm border border-purple-500/20 text-center">
              <p className="text-xl text-gray-300 mb-8">
                Ready to transform your Salesforce environment? Let's discuss how I can help 
                optimize your business processes and drive growth through innovative solutions.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center mb-8">
                <a href="mailto:your.email@example.com" className="flex items-center justify-center space-x-3 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-white font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105">
                  <Mail className="w-5 h-5" />
                  <span>Send Email</span>
                </a>
                <a href="https://linkedin.com/in/yourprofile" className="flex items-center justify-center space-x-3 px-6 py-3 border-2 border-purple-400 rounded-full text-purple-400 font-semibold hover:bg-purple-400 hover:text-white transition-all duration-300 transform hover:scale-105">
                  <Linkedin className="w-5 h-5" />
                  <span>LinkedIn</span>
                </a>
                <a href="https://github.com/yourprofile" className="flex items-center justify-center space-x-3 px-6 py-3 border-2 border-pink-400 rounded-full text-pink-400 font-semibold hover:bg-pink-400 hover:text-white transition-all duration-300 transform hover:scale-105">
                  <Github className="w-5 h-5" />
                  <span>GitHub</span>
                </a>
              </div>
              
              <div className="flex items-center justify-center space-x-6 text-gray-400">
                <div className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4" />
                  <span>Available Worldwide</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Phone className="w-4 h-4" />
                  <span>Remote & On-site</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-purple-500/20">
        <div className="max-w-6xl mx-auto text-center text-gray-400">
          <p>&copy; 2025 Salesforce Developer Portfolio. Built with React & Tailwind CSS.</p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;