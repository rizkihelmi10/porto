import React, { useState } from 'react';
import { Camera, Mail, Phone, MapPin, Calendar } from 'lucide-react';
import { Code, Cpu, Database, Globe } from 'lucide-react';
import { Analytics } from "@vercel/analytics/react"
import Head from 'next/head';

import bc from './bc.jpg';
import me from './me.jpg';
import mob from './mob.png';
import web from './web.png';
import key from './key.png';
import hrone from './hrone.png';
import hrtwo from './hrtwo.png';
import hrthree from './hrthree.png';
import hrfour from './hrfour.png';
import rpdone from './rpdone.png';
import rpdtwo from './rpdtwo.png';
import gtone from './gtone.png';
import gtwo from './gtwo.png';
import gthree from './gthree.png';
import pbotone from './pbotone.png';
import pbotwo from './pbottwo.png';
import pbothree from './pbotthree.png';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import ChatBot from './chatbot';
import logo from './RizkiHelmitech.png'

const Section = ({ id, className, children }) => (
  <section id={id} className={`py-16 ${className}`}>
    <div className="container mx-auto px-4">
      {children}
    </div>
  </section>
);

const SkillBar = ({ skill, percentage, icon: Icon }) => (
  <motion.div
    className="mb-6 bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow duration-300"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
  >
    <div className="flex items-center mb-2">
      <Icon className="w-6 h-6 mr-2 text-yellow-500" />
      <h3 className="text-lg font-semibold">{skill}</h3>
    </div>
    <div className="w-full bg-gray-200 rounded-full h-3">
      <motion.div 
        className="bg-yellow-500 h-3 rounded-full"
        initial={{ width: 0 }}
        animate={{ width: `${percentage}%` }}
        transition={{ duration: 1, ease: "easeOut" }}
      />
    </div>
    <span className="text-sm text-gray-600 mt-1 block text-right">{percentage}%</span>
  </motion.div>
);

const SkillCategory = ({ title, skills, icon: Icon }) => (
  <div className="mb-8">
    <div className="flex items-center mb-4">
      <Icon className="w-8 h-8 mr-2 text-yellow-600" />
      <h2 className="text-2xl font-bold">{title}</h2>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {skills.map((skill, index) => (
        <SkillBar key={index} {...skill} />
      ))}
    </div>
  </div>
);

const ProjectCard = ({ title, description, images, technologies, link }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105">
      <div className="relative">
        <img 
          src={images[currentImageIndex].src} 
          alt={images[currentImageIndex].alt} 
          className="w-full h-full object-cover"
          loading="lazy"
          width="400"
          height="300"
        />
        <button onClick={prevImage} className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full">
        </button>
        <button onClick={nextImage} className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full">
        </button>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 text-gray-800">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech, index) => (
            <span key={index} className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm">
              {tech}
            </span>
          ))}
        </div>
        <a href={link} className="mt-4 inline-block text-yellow-500 hover:underline">View Project</a>
      </div>
    </div>
  );
};

const App = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code,
      skills: [
        { skill: "Python", percentage: 80, icon: Code },
        { skill: "C++", percentage: 75, icon: Code },
        { skill: "Java", percentage: 85, icon: Code },
        { skill: "Kotlin", percentage: 90, icon: Code },
      ]
    },
    {
      title: "Web Technologies",
      icon: Globe,
      skills: [
        { skill: "ReactJS", percentage: 85, icon: Globe },
        { skill: "TypeScript", percentage: 70, icon: Globe },
        { skill: "Vue.js", percentage: 70, icon: Globe },
        { skill: "Next.js", percentage: 80, icon: Globe },
      ]
    },
    {
      title: "Mobile Development",
      icon: Cpu,
      skills: [
        { skill: "React Native", percentage: 80, icon: Cpu },
        { skill: "Android (Kotlin)", percentage: 75, icon: Cpu },
      ]
    },
    {
      title: "Other Technologies",
      icon: Database,
      skills: [
        { skill: "MySQL", percentage: 80, icon: Database },
        { skill: "R", percentage: 65, icon: Database },
        { skill: "HTML", percentage: 95, icon: Globe },
        { skill: "CSS", percentage: 90, icon: Globe },
      ]
    },
  ];

  return (
    <div className="min-h-screen text-gray-800 font-sans">
      <Head>
        <title>Rizki Helmi | AI & Full-Stack Developer Portfolio</title>
        <meta name="description" content="Professional portfolio of Rizki Helmi, showcasing expertise in AI, mobile development, and web technologies. View projects, skills, and work experience." />
        <meta name="keywords" content="AI developer, mobile developer, web developer, Kotlin, React, Python, portfolio, software engineer, Rizki Helmi" />
        <meta name="author" content="Rizki Helmi" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://rizkiprojects.vercel.app/" />
        <meta property="og:title" content="Rizki Helmi | AI & Full-Stack Developer Portfolio" />
        <meta property="og:description" content="Professional portfolio showcasing AI, mobile, and web development projects." />
        
        {/* Twitter */}
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://rizkiprojects.vercel.app/" />
        
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Rizki Helmi",
            "jobTitle": "AI & Full-Stack Developer",
            "url": "https://rizkiprojects.vercel.app",
            "sameAs": [
              "https://github.com/rizkihelmi10",
              "https://linkedin.com/in/rizkihelmi10"
            ],
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Jakarta",
              "addressRegion": "Indonesia"
            },
            "email": "rizkihelmi1008@gmail.com",
          })}
        </script>
      </Head>

      <header className="py-0 bg-gradient-to-r from-yellow-400 to-yellow-600 shadow-lg fixed w-full z-10">
        <div className="container mx-auto flex justify-between items-center px-6">
          <img
            src={logo}
            alt="Rizki Helmi Logo"
            className="w-24 h-24 rounded-full"
            width="96"
            height="96"
          />
          <nav className="space-x-6 text-sm hidden md:flex items-center">
            {['Home', 'About', 'Skills', 'Projects'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`} 
                className="text-white hover:text-yellow-200 transition duration-300 ease-in-out transform hover:scale-110"
                aria-label={`Navigate to ${item} section`}
              >
                {item}
              </a>
            ))}
            <a 
              href="mailto:rizkihelmi1008@gmail.com" 
              className="text-white hover:text-yellow-200 transition duration-300 ease-in-out transform hover:scale-110"
              aria-label="Contact Rizki Helmi via email"
            >
              Contact
            </a>
            <a 
              href="https://drive.google.com/file/d/1WYwLesFh5VFBcaevg2lZYr96_bMfeK_F/view?usp=sharing" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-white text-yellow-600 px-4 py-2 rounded-full hover:bg-yellow-100 transition duration-300 ease-in-out transform hover:scale-110"
              aria-label="View Rizki Helmi's resume"
            >
              Resume
            </a>
          </nav>
        </div>
      </header>

      <Section id="home" className="h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <motion.img 
            src={bc} 
            alt="Background" 
            className="w-full h-full object-cover"
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
            loading="eager"
            width="1920"
            height="1080"
          />
          <Analytics/>
          <div className="absolute inset-0 bg-black opacity-60"></div>
        </div>
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <motion.p 
            className="text-2xl mb-3 font-semibold text-yellow-300"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Greetings, tech enthusiasts!
          </motion.p>
          <motion.h1 
            className="text-6xl sm:text-7xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            I'm Rizki Helmi
          </motion.h1>
          <motion.p 
            className="text-2xl sm:text-3xl font-light mb-10 italic text-gray-300"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Crafting the future through AI, Mobile, and Web Innovation
          </motion.p>
          <motion.div 
            className="space-y-4 sm:space-y-0 sm:space-x-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <button 
              onClick={() => window.location.href = 'mailto:rizkihelmi1008@gmail.com'} 
              className="bg-yellow-500 text-black px-8 py-4 rounded-full text-xl font-bold hover:bg-yellow-600 transition duration-300 transform hover:scale-105 shadow-lg"
              aria-label="Contact me for collaboration"
            >
              Let's Collaborate
            </button>
            <button 
              onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
              className="border-2 border-yellow-500 text-yellow-500 px-6 py-3 rounded-full font-semibold hover:bg-yellow-500 hover:text-black transition duration-300 shadow-lg"
              aria-label="View my projects"
            >
              Explore My Projects
            </button>
          </motion.div>
        </div>
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown size={32} className="text-yellow-500" />
        </motion.div>
      </Section>

      <Section id="about">
        <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>
        <div className="flex flex-col md:flex-row items-center md:items-start">
          <img
            src={me}
            alt="Rizki Helmi Portrait"
            className="rounded-full w-48 h-48 mb-6 md:mb-0 md:mr-8 border-4 border-yellow-500 shadow-lg transition-transform duration-300 hover:scale-105 hover:rotate-3"
            width="192"
            height="192"
            loading="lazy"
          />
          <div>
            <p className="text-lg mb-4">
              Hi, I'm <strong>Rizki Helmi</strong>, a passionate AI enthusiast, Mobile Developer, and Web Developer. My journey in tech began with a deep curiosity for how things work behind the scenes, and this has led me to explore a wide range of tools and technologies over the years.
            </p>
            <p className="text-lg mb-4">
              From building AI-driven solutions to crafting seamless mobile and web experiences, I aim to create meaningful products that blend functionality with creativity. I'm always eager to explore the latest advancements in AI and continuously push the boundaries of what's possible.
            </p>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              {[
                { icon: <Camera size={18} />, label: 'Name', value: 'Rizki Helmi' },
                { icon: <MapPin size={18} />, label: 'Address', value: 'Penang, Malaysia' },
                { icon: <Mail size={18} />, label: 'Email', value: 'rizkihelmi1008@gmail.com' },
                { icon: <Phone size={18} />, label: 'Phone', value: '+60-1170-0044-491/+62-852-6090-2451' },
                { icon: <Camera size={18} />, label: 'Projects Completed', value: '5+' },
              ].map(({ icon, label, value }) => (
                <li key={label} className="flex items-center">
                  <span className="mr-2 text-yellow-500">{icon}</span>
                  <span><strong>{label}:</strong> {value}</span>
                </li>
              ))}
            </ul>
            <button 
              onClick={() => window.open('https://drive.google.com/file/d/1nIbHH6FvPId8p6DYy0IZV_UeCr_8HRyj/view?usp=sharing', '_blank')} 
              className="bg-yellow-500 text-black px-6 py-3 rounded-full font-semibold hover:bg-yellow-600 transition duration-300"
              aria-label="Download Rizki Helmi's CV"
            >
              DOWNLOAD CV
            </button>
          </div>
        </div>
      </Section>

      <Section id="projects" className="bg-gradient-to-b from-white to-gray-100">
        <h2 className="text-4xl font-bold mb-12 text-center text-gray-800 relative">
          My Projects
          <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-yellow-500 mt-2"></span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ProjectCard
            title="Students Performance Tracking App"
            description="Developed an application that predicts student results using machine learning. Built with Kotlin for mobile and ReactJS for web. Utilizes Firebase for backend and Random Forest regression for ML."
            images={[
              {src: mob, alt: "Mobile app screenshot of Student Performance Tracking App"},
              {src: web, alt: "Web interface of Student Performance Tracking App"},
              {src: key, alt: "Key features of Student Performance Tracking App"}
            ]}
            technologies={['Kotlin', 'ReactJS', 'Firebase', 'Random Forest']}
            link="https://lecturer-web-portal.vercel.app/"
          />
          <ProjectCard
            title="High-Risk Pregnancy Trimester 3 Detector App"
            description="An Android app that gives automatic decisions based on a scoring system. Built with Java and Firebase Realtime Database, with SQLite for data storage."
            images={[
              {src: hrone, alt: "Mobile app screenshot of High-Risk Pregnancy Detector"},
              {src: hrtwo, alt: "User interface of High-Risk Pregnancy Detector"},
              {src: hrthree, alt: "Features of High-Risk Pregnancy Detector"},
              {src: hrfour, alt: "Scoring system of High-Risk Pregnancy Detector"},
            ]}
            technologies={['Java', 'Firebase', 'SQLite', 'Android Studio']}
            link="https://github.com/rizkihelmi10"
          />
          <ProjectCard
            title="Radio Streaming App (Radio PPI Dunia)"
            description="Developed a cross-platform radio streaming app using React Native and deployed via Expo. Ensures seamless and high-quality streaming across iOS and Android."
            images={[
              {src: rpdone, alt: "Mobile app screenshot of Radio PPI Dunia"},
              {src: rpdtwo, alt: "Streaming interface of Radio PPI Dunia"},
            ]}
            technologies={['React Native', 'Expo', 'Streaming', 'Mobile Development']}
            link="https://rpd-app.vercel.app/radio"
          />
          <ProjectCard
            title="Go-Tour"
            description="Go-Tour is a web application designed to match travelers with personalized travel guides, enhancing their tourism experience. Leveraging the power of the OpenAI API, Go-Tour intelligently tailors recommendations based on individual preferences, ensuring a unique and customized journey for every user."
            images={[
              {src: gtone, alt: "Mobile app screenshot of Go-Tour"},
              {src: gtwo, alt: "User interface of Go-Tour"},
              {src: gthree, alt: "Features of Go-Tour"},
            ]}
            technologies={['React JS', 'Alibaba Cloud', 'FastAPI', 'Web Development']}
            link="https://github.com/rizkihelmi10"
          />
          <ProjectCard
            title="AskPbot"
            description="Prompt-based AI chatbot that provides instant answers to a wide range of questions. Built with React for the frontend and FastAPI for the backend, AskPbot leverages the power of the OpenAI API to deliver accurate and relevant responses to user queries."
            images={[
              {src: pbotwo, alt: "Web interface of AskPbot"},
              {src: pbotone, alt: "Mobile view of AskPbot"},
              {src: pbothree, alt: "Chat interface of AskPbot"},
            ]}
            technologies={['Next.js', 'TypeScript', 'FastAPI', 'Web Development', 'OpenAI', 'React', 'Tailwind CSS', 'PostgreSQL', 'Python']}
            link="https://aitutor.pandai.org/"
          />
        </div>
        <div className="text-center mt-8">
          <a
            href="https://github.com/rizkihelmi10"
            className="bg-yellow-500 text-black px-6 py-3 rounded-full font-semibold hover:bg-yellow-600 transition duration-300"
            aria-label="View Rizki Helmi's GitHub repositories"
          >
            View My GitHub Repo
          </a>
        </div>
      </Section>

      <Section id="experience" className="bg-gradient-to-b from-white to-gray-100 py-20">
        <h2 className="text-4xl font-bold mb-12 text-center text-gray-800 relative">
          Work Experience
          <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-yellow-500 mt-2"></span>
        </h2>
        <div className="space-y-12 max-w-4xl mx-auto">
          <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-2xl font-semibold text-gray-800">Pandai Education Sdn Bhd.<br /> AI Engineer Intern <span className="text-yellow-500 font-normal">(May 2024 – present)</span></h3>
            <ul className="list-none pl-5 mt-4 space-y-2">
              {[
                "Develop user-facing features using TypeScript and Tailwind CSS, ensuring responsiveness and cross-browser compatibility.",
                "Translate UI/UX designs into high-quality code, maintaining consistency and fidelity to the design.",
                "Connect the frontend to the backend using FastAPI and Python, creating seamless and efficient communication between the client and server."
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-yellow-500 mr-2">★</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-2xl font-semibold text-gray-800">Pandai Education Sdn Bhd. <br />Android Developer Intern <span className="text-yellow-500 font-normal">(January 2024 – May 2024)</span></h3>
            <ul className="list-none pl-5 mt-4 space-y-2">
              {[
                "Proficiently resolved bugs and introduced new features in Android applications, primarily utilizing Kotlin.",
                "Contributed to both Android and AI teams, utilizing Kotlin for Android projects and TypeScript with Tailwind for AI frontend development.",
                "Demonstrated versatility and adaptability by effectively juggling responsibilities across two departments during the internship."
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-yellow-500 mr-2">★</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-2xl font-semibold text-gray-800">SmartLab Sdn Bhd.<br /> Software Engineer Intern <span className="text-yellow-500 font-normal">(March 2023 – September 2023)</span></h3>
            <ul className="list-none pl-5 mt-4 space-y-2">
              {[
                "Proficient in Android-based ERP System development.",
                "Experienced in integrating API functionality.",
                "Skilled in Android app development utilizing Android Studio and Java as primary languages.",
                "Proficient in Raspberry Pi development for Building Automation Systems (BAS) using Python."
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-yellow-500 mr-2">★</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>
      
      <section id="skills" className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <motion.h1 
            className="text-4xl font-bold mb-12 text-center text-gray-800"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            My Skills
          </motion.h1>
          {skillCategories.map((category, index) => (
            <SkillCategory key={index} {...category} />
          ))}
        </div>
      </section>

      <footer className="py-6 bg-gray-800 text-white text-center">
        <div className="container mx-auto px-4">
          <div className="flex justify-center space-x-6 mb-4">
            <a href="https://github.com/rizkihelmi10" target="_blank" rel="noopener noreferrer" aria-label="GitHub profile">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
            </a>
            <a href="https://linkedin.com/in/rizkihelmi10" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
            <a href="mailto:rizkihelmi1008@gmail.com" aria-label="Send email">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 12.713l-11.985-9.713h23.97l-11.985 9.713zm0 2.574l-12-9.725v15.438h24v-15.438l-12 9.725z" />
              </svg>
            </a>
          </div>
          <p>© {new Date().getFullYear()} Rizki Helmi Technology. All Rights Reserved.</p>
        </div>
      </footer>
      
      <div className="fixed bottom-4 right-4 z-50">
        <ChatBot />
      </div>
    </div>
  );
};

export default App;