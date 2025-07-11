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
  { name: 'Salesforce B2B Commerce', level: 95, icon: <Cloud className="w-6 h-6" /> },
  { name: 'Salesforce CPQ', level: 92, icon: <Database className="w-6 h-6" /> },
  { name: 'Revenue Cloud (CPQ + Billing)', level: 90, icon: <Database className="w-6 h-6" /> },
  { name: 'Salesforce OMS', level: 88, icon: <Cloud className="w-6 h-6" /> },
  { name: 'Apex Development', level: 90, icon: <Code className="w-6 h-6" /> },
  { name: 'Lightning Web Components', level: 88, icon: <Zap className="w-6 h-6" /> },
  { name: 'Salesforce Flows', level: 85, icon: <CheckCircle className="w-6 h-6" /> },
  { name: 'REST APIs & Integration', level: 87, icon: <Database className="w-6 h-6" /> }
];

  // phone
  const [showPhone, setShowPhone] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (showPhone) {
        setShowPhone(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [showPhone]);
  // @mayank 11 July 2025

  const projects = [
    {
      title: 'B2B Commerce Store with CPQ Integration',
      description: 'Built a comprehensive B2B Commerce platform with dynamic product catalog, advanced configurations, and seamless CPQ integration for automated pricing and approvals.',
      tech: ['Salesforce CPQ', 'B2B Commerce (LWR)', 'Apex', 'Lightning Web Components', 'REST APIs'],
      highlights: ['Dynamic product catalog', 'Advanced pricing configurations', 'Responsive UI design']
    },
    {
      title: 'Payment Integration with Commerce',
      description: 'Integrated multiple payment solutions including Stripe API and native Salesforce payment systems into the checkout process for seamless transaction handling.',
      tech: ['Stripe API', 'Salesforce Native Payments', 'Apex', 'JavaScript', 'REST APIs'],
      highlights: ['Multi-payment gateway support', 'Secure transaction handling', 'Seamless checkout flow']
    },
    {
      title: 'Advanced Flow & Trigger Automation',
      description: 'Automated comprehensive lead-to-order processes using Salesforce Flows and Apex Triggers, ensuring data consistency and streamlined business operations.',
      tech: ['Salesforce Flows', 'Apex Triggers', 'Process Builder', 'Custom Objects', 'SOQL'],
      highlights: ['Automated lead-to-order process', 'Data consistency', 'Business logic automation']
    },
    {
      title: 'Loyalty Management System',
      description: 'Implemented comprehensive loyalty programs using Salesforce Loyalty Management, integrating with commerce platforms for enhanced customer engagement.',
      tech: ['Salesforce Loyalty Management', 'OMS', 'Integration APIs', 'Custom Components'],
      highlights: ['Customer engagement boost', 'Integrated loyalty programs', 'Order lifecycle management']
    },
    {
      title: 'Advanced Order Lifecycle Management using Salesforce OMS',
      description: 'Designed and implemented an end-to-end order lifecycle solution using Salesforce OMS, from order capture through fulfillment to return and refund, enhancing visibility and operational efficiency for B2B clients.',
      tech: ['Salesforce OMS', 'Apex', 'Salesforce Flows', 'LWC', 'REST APIs', 'External WMS Integration'],
      highlights: [
        'Automated order capture, fulfillment, and return handling',
        'Integrated OMS with B2B Commerce for seamless order sync',
        'Built custom order tracking UI using LWC',
        'Enabled inventory-aware order splitting based on warehouse location'
      ]
    },
    {
      title: 'End-to-End Quote-to-Cash Automation with Revenue Cloud',
      description: 'Developed a seamless Quote-to-Cash pipeline leveraging Salesforce Revenue Cloud with CPQ, Billing, and automation. Streamlined pricing, approvals, invoicing, and revenue recognition for subscription-based services.',
      tech: ['Salesforce CPQ', 'Salesforce Billing', 'Apex', 'Flows', 'Revenue Cloud', 'REST APIs'],
      highlights: [
        'Automated complex quote approvals and discounting workflows',
        'Integrated Salesforce Billing for automated invoice generation and tax handling',
        'Streamlined revenue recognition for recurring/subscription billing',
        'Enabled PDF quote/doc generation and email delivery using Flows'
      ]
    }


  ];

  const certifications = [
    'Salesforce Certified Platform Developer I',
    'Salesforce Certified Administrator',
    'Salesforce Certified Associate',
    'Data Structure and Algorithms',
    'Database and PHP - Coursera'
  ];

  const experience = [
    {
      title: 'Software Engineer - Salesforce Developer',
      company: 'RafterOne',
      period: '08/2024 - Present',
      location: 'Remote',
      highlights: [
        'Developed and customized B2B Commerce and CPQ solutions for diverse clients',
        'Integrated 3rd party systems with Salesforce to extend commerce functionality',
        'Optimized QCP logic and complex flows to enhance sales processes',
        'Built custom B2B Commerce experiences using LWC, Apex, and APIs'
      ]
    },
    {
      title: 'Associate Software Engineer - Salesforce',
      company: 'RafterOne',
      period: '05/2022 - 08/2024',
      location: 'Mohali',
      highlights: [
        'Led development of B2B Commerce Store with dynamic product catalog and CPQ integration',
        'Implemented Loyalty Programs using Salesforce Loyalty Management',
        'Developed custom CPQ configurations and automated pricing/approval flows',
        'Enhanced order management using Salesforce OMS'
      ]
    },
    {
      title: 'Developer',
      company: 'Docmation LLC',
      period: '10/2021 - 05/2022',
      location: 'Mohali',
      highlights: [
        'Developed Salesforce solutions for B2B Commerce implementations',
        'Automated processes using Flows, Apex Triggers, and business logic automation',
        'Customized reports and dashboards for business insights',
        'Participated in release management using Copado and Git'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-lg border-b border-purple-500/20">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Mayank Srivastava
            </div>
            <div className="hidden md:flex space-x-8">
              {['About', 'Skills', 'Experience', 'Projects', 'Contact'].map((item) => (
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
              Mayank Srivastava
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              B2B Commerce & CPQ Specialist | Salesforce Developer
            </p>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-12">
              Software Developer with 3+ years of experience, specializing in B2B Commerce and Revenue Cloud (CPQ & Billing).
              Expertise in designing scalable commerce solutions and streamlining order management workflows.
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
                    Software Developer with 3+ years of experience, specializing in B2B Commerce and Revenue Cloud (CPQ & Billing).
                    Expertise in designing scalable commerce solutions, integrating complex pricing configurations, and streamlining order management workflows.
                  </p>
                  <p className="text-gray-300 leading-relaxed">
                    Skilled in Apex, LWC, SOQL, Salesforce Flows, and CPQ customization, with hands-on experience in
                    Loyalty Management, OMS and Payment Integrations. Based in Mohali, Punjab, working remotely with global clients.
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

      {/* Experience Section */}
      <section id="experience" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className={`transition-all duration-1000 ${isVisible.experience ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Professional Experience
            </h2>

            <div className="space-y-8">
              {experience.map((job, index) => (
                <div key={index} className="bg-gradient-to-r from-purple-600/10 to-pink-600/10 rounded-2xl p-8 backdrop-blur-sm border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300">
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-6">
                    <div>
                      <h3 className="text-2xl font-bold text-purple-300 mb-2">{job.title}</h3>
                      <p className="text-xl text-pink-300">{job.company}</p>
                    </div>
                    <div className="text-right text-gray-400">
                      <p className="text-lg">{job.period}</p>
                      <p className="text-sm">{job.location}</p>
                    </div>
                  </div>
                  <div className="space-y-3">
                    {job.highlights.map((highlight, highlightIndex) => (
                      <div key={highlightIndex} className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                        <span className="text-gray-300">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6 bg-black/20">
        <div className="max-w-6xl mx-auto">
          <div className={`transition-all duration-1000 ${isVisible.projects ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Key Projects
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
      <section id="contact" className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className={`transition-all duration-1000 ${isVisible.contact ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Let's Connect
            </h2>

            <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-2xl p-8 backdrop-blur-sm border border-purple-500/20 text-center">
              <p className="text-xl text-gray-300 mb-8">
                Ready to transform your Salesforce environment with B2B Commerce and CPQ solutions?
                Let's discuss how I can help optimize your business processes and drive growth.
              </p>

              <div className="flex flex-col sm:flex-row gap-6 justify-center mb-8">
                <a href="mailto:rsmayank25@outlook.com" className="flex items-center justify-center space-x-3 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-white font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105">
                  <Mail className="w-5 h-5" />
                  <span>Send Email</span>
                </a>
                <a href="https://www.linkedin.com/in/rsmayank" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center space-x-3 px-6 py-3 border-2 border-purple-400 rounded-full text-purple-400 font-semibold hover:bg-purple-400 hover:text-white transition-all duration-300 transform hover:scale-105">
                  <Linkedin className="w-5 h-5" />
                  <span>LinkedIn</span>
                </a>
                <a href="https://github.com/rsmayank" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center space-x-3 px-6 py-3 border-2 border-pink-400 rounded-full text-pink-400 font-semibold hover:bg-pink-400 hover:text-white transition-all duration-300 transform hover:scale-105">
                  <Github className="w-5 h-5" />
                  <span>GitHub</span>
                </a>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 text-gray-400">
                <div className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4" />
                  <span>Mohali, Punjab, India</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Phone className="w-4 h-4" />
                  {showPhone ? (
                    <span>+91 78872 16127</span>
                  ) : (
                    <button
                      onClick={() => setShowPhone(true)}
                      className="text-purple-400 underline hover:text-purple-200 transition"
                    >
                      Show Phone
                    </button>
                  )}
                </div>


              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-purple-500/20">
        <div className="max-w-6xl mx-auto text-center text-gray-400">
          <p>&copy; 2025 Mayank Srivastava. Salesforce Developer Portfolio. Built with React & Tailwind CSS.</p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;