import React, { useState } from 'react';
import { FaGithub, FaExternalLinkAlt, FaCode, FaFolderOpen, FaMicrochip, FaDatabase, FaMobileAlt, FaGlobe } from 'react-icons/fa';
import linecarImage from '../Images/linecar.jpeg';
import plantImage from '../Images/plant.jpg';
import portImage from '../Images/port.png';
import dbms from '../Images/dbms.png';
import app from '../Images/app.jpg';
import wave from '../Images/wave.png';
import box from '../Images/box.png';
import wall from '../Images/wall.png';
import led from '../Images/led.jpg';
import dis from '../Images/dis.jpg';

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      title: "Wall Painting Machine",
      description: "Developed an automated wall painting machine that uses a robotic mechanism to paint surfaces efficiently, reducing manual effort.",
      image: wall,
      technologies: ["Arduino","CNC", "Stepper Motors", "Gear Mechanism"],
      category: "embedded-iot",
      githubLink: "#",
      liveLink: "#"
    },
    {
      title: "Retail Shop Management App",
      description: "Developed a mobile app for retail shop owners to manage inventory and sales efficiently.",
      image: app,
      technologies: ["Flutter", "Firebase"],
      category: "mobile-app",
      githubLink: "#",
      liveLink: "#"
  },
    {
        title: "8x8 LED Matrix Display",
        description: "Designed an LED matrix display using shift registers and Arduino, capable of displaying custom patterns.",
        image: dis,
        technologies: ["Arduino", "Shift Registers"],
        category: "embedded-iot",
        githubLink: "#",
        liveLink: "#"
    },
    {
        title: "Smart Medicine Box",
        description: "Built a medicine reminder system with alerts using Arduino/ESP32 for elderly users.",
        image: box,
        technologies: ["ESP32", "Buzzer", "LEDs"],
        category: "embedded-iot",
        githubLink: "#",
        liveLink: "#"
    },
    {
        title: "Line Following Bot",
        description: "Designed an autonomous robot that follows a predefined path using IR sensors.",
        image: linecarImage,
        technologies: ["Arduino", "IR Sensors", "Motors"],
        category: "embedded-iot",
        githubLink: "#",
        liveLink: "#"
    },
    {
        title: "Wave Mouse",
        description: "Developed a hands-free mouse using gyroscope sensors and Arduino Pro Micro for accessibility.",
        image: wave,
        technologies: ["Arduino Pro Micro", "Gyroscope Sensor"],
        category: "embedded-iot",
        githubLink: "#",
        liveLink: "#"
    },
    {
      title: "36x8 LED Display with Bluetooth",
      description: "Created a Bluetooth-controlled LED panel using Arduino and NeoPixel, allowing dynamic text display.",
      image: led,
      technologies: ["Arduino", "NeoPixel", "HC-05"],
      category: "embedded-iot",
      githubLink: "#",
      liveLink: "#"
  },
    {
        title: "Plant Growing Kit",
        description: "Created a web application for plant enthusiasts to track and get expert feedback on plant growth.",
        image: plantImage,
        technologies: ["HTML", "CSS", "JavaScript"],
        category: "web-app",
        githubLink: "#",
        liveLink: "#"
    },
    {
        title: "Portfolio Website",
        description: "Developed a personal portfolio website showcasing projects and technical expertise.",
        image: portImage,
        technologies: ["React", "Tailwind CSS", "GitHub Pages"],
        category: "web-app",
        githubLink: "#",
        liveLink: "#"
    },
    {
        title: "Student Activity Tracker",
        description: " Designed a database management system for tracking student activities and performance.",
        image: dbms,
        technologies: ["MySQL", "Tkinter", "DBMS"],
        category: "dbms",
        githubLink: "#",
        liveLink: "#"
    }
];

  const categories = [
    { id: 'all', name: 'All Projects', icon: <FaFolderOpen /> },
    { id: 'embedded-iot', name: 'Embedded Systems & IoT', icon: <FaMicrochip /> },
    { id: 'web-app', name: 'Web Application', icon: <FaGlobe /> },
    { id: 'dbms', name: 'DBMS', icon: <FaDatabase /> },
    { id: 'mobile-app', name: 'Mobile App', icon: <FaMobileAlt /> }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <div className="min-h-screen py-20 px-4 bg-gradient-to-b from-gray-900 via-gray-900 to-gray-800">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-5xl pb-3 font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 bg-clip-text text-transparent animate-gradient-x mb-6 leading-[1.2]">
            Engineering Projects
          </h1>
          <p className="text-gray-400 text-lg md:text-xl">
            Showcasing innovative solutions in embedded systems, IoT, web applications, DBMS, and mobile apps
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-6 mb-16">
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setActiveFilter(category.id)}
              className={`px-8 py-3 rounded-full transition-all duration-300 flex items-center gap-3 text-lg
                ${activeFilter === category.id 
                  ? 'bg-gradient-to-r from-blue-600 to-blue-400 text-white shadow-lg shadow-blue-500/20' 
                  : 'bg-gray-800/50 text-gray-400 hover:bg-gray-700/50 hover:text-white'}`}
            >
              {category.icon}
              {category.name}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div key={index} className="group relative bg-gradient-to-b from-gray-800/50 to-gray-900/50 rounded-xl overflow-hidden border border-gray-700/50 hover:border-blue-500/50 transition-all duration-500 backdrop-blur-sm hover:transform hover:scale-[1.02] hover:shadow-xl hover:shadow-blue-500/10">
              <div className="relative h-48 overflow-hidden bg-gray-900">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="absolute inset-0 w-full h-full object-contain group-hover:scale-110 transition-transform duration-300" 
                  onError={(e) => { 
                    e.target.src = 'https://placehold.co/600x400/1f2937/64748b?text=Project+Image'; 
                    e.target.onerror = null; 
                  }} 
                />
              </div>
              <div className="p-8 space-y-6">
                <h3 className="text-2xl font-semibold text-white group-hover:text-blue-400 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-base leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, idx) => (
                    <span key={idx} className="px-4 py-1.5 text-sm bg-gray-800/80 text-blue-400 rounded-full flex items-center gap-2 hover:bg-gray-700/80 transition-colors duration-300 font-medium">
                      <FaCode className="text-xs" />
                      {tech}
                    </span>
                  ))}
                </div>
                {/* <div className="flex items-center justify-end gap-8 pt-6 border-t border-gray-800">
                  <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center gap-3 group/link">
                    <FaGithub className="text-2xl group-hover/link:text-blue-400" />
                    <span className="text-sm font-medium">Code</span>
                  </a>
                  <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center gap-3 group/link">
                    <FaExternalLinkAlt className="text-xl group-hover/link:text-blue-400" />
                    <span className="text-sm font-medium">Demo</span>
                  </a>
                </div> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
