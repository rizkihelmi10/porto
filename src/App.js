import React, { useState } from 'react';
import { Camera, Mail, Phone, MapPin, Calendar } from 'lucide-react';

// Assume bc.png is imported correctly
import bc from './bcs.png';
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

const Section = ({ id, className, children }) => (
  <section id={id} className={`py-16 ${className}`}>
    <div className="container mx-auto px-4">
      {children}
    </div>
  </section>
);

const SkillBar = ({ skill, percentage }) => (
  <div className="mb-4">
    <h3 className="text-lg font-semibold mb-2">{skill}</h3>
    <div className="w-full bg-gray-200 rounded-full h-2">
      <div 
        className="bg-yellow-500 h-2 rounded-full transition-all duration-500 ease-out" 
        style={{ width: `${percentage}%` }}
      ></div>
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
        <img src={images[currentImageIndex].src} alt={images[currentImageIndex].alt} className="w-full h-full object-cover" />
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
};const App = () => {
  return (
    <div className="min-h-screen text-gray-800 font-sans">

<header className="py-4 bg-white shadow-md fixed w-full z-10">
      <div className="container mx-auto flex justify-between items-center px-4">
          <h1 className="text-2xl font-bold text-yellow-500">RH's Technology</h1>
          <nav className="space-x-4 text-sm hidden md:block">
            {['Home', 'About', 'Skills', 'Projects'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-yellow-500 transition duration-300">
                {item}
              </a>
            ))}
            <a href="mailto:rizkihelmi1008@gmail.com" className="hover:text-yellow-500 transition duration-300">
              Contact
            </a>
            <a href="https://drive.google.com/file/d/1nIbHH6FvPId8p6DYy0IZV_UeCr_8HRyj/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-500 transition duration-300">
              Resume
            </a>
          </nav>
        </div>
      </header>

  <Section id="home" className="h-screen flex items-center justify-center relative">
      <div className="absolute inset-0 z-0 flex justify-center items-center">
    <img 
      src={bc} 
      alt="Background" 
      className="max-w-full max-h-full object-contain"
    />
    <div className="absolute inset-0 bg-black opacity-50"></div>
  </div>
        <div className="relative z-10 text-center text-white">
          <p className="text-2xl mb-3 font-semibold animate-pulse">Hello there!</p>
          <h2 className="text-7xl font-extrabold mb-6 text-yellow-500 animate-bounce">I'm Rizki Helmi</h2>
          <p className="text-3xl font-light mb-10 italic">Innovating in AI, Mobile, and Web Development</p>
          <div className="space-x-4">
            <button onClick={() => window.location.href = 'mailto:rizkihelmi1008@gmail.com'} className="bg-yellow-500 text-black px-8 py-4 rounded-full text-xl font-bold hover:bg-yellow-600 transition duration-300 transform hover:scale-105">
              HIRE ME
            </button>
            <button className="border-2 border-yellow-500 text-yellow-500 px-6 py-3 rounded-full font-semibold hover:bg-yellow-500 hover:text-black transition duration-300">
              MY WORKS
            </button>
          </div>
        </div>
      </Section>

      <Section id="about">
  <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>
  <div className="flex flex-col md:flex-row items-center md:items-start">
      <img
        src={me}
        alt="About Me"
        className="rounded-full w-48 h-48 mb-6 md:mb-0 md:mr-8 border-4 border-yellow-500 shadow-lg transition-transform duration-300 hover:scale-105 hover:rotate-3"
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
          { icon: <Calendar size={18} />, label: 'Date of birth', value: 'August 10, 2001' },
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
      <button onClick={() => window.open('https://drive.google.com/file/d/1nIbHH6FvPId8p6DYy0IZV_UeCr_8HRyj/view?usp=sharing', '_blank')} className="bg-yellow-500 text-black px-6 py-3 rounded-full font-semibold hover:bg-yellow-600 transition duration-300">
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
              {src: mob, alt: "Mobile app screenshot"},
              {src: web, alt: "Web app screenshot"},
              {src: key, alt: "Key features illustration"}
            ]}
            technologies={['Kotlin', 'ReactJS', 'Firebase', 'Random Forest']}
            link="https://lecturer-web-portal.vercel.app/"
          />
          <ProjectCard
            title="High-Risk Pregnancy Trimester 3 Detector App"
            description="An Android app that gives automatic decisions based on a scoring system. Built with Java and Firebase Realtime Database, with SQLite for data storage."
            images={[
              {src: hrone, alt: "Mobile app screenshot"},
              {src: hrtwo, alt: "Web app screenshot"},
              {src: hrthree, alt: "Key features illustration"},
              {src: hrfour, alt: "Key features illustration"},
              
            ]}
            technologies={['Java', 'Firebase', 'SQLite', 'Android Studio']}
            link="https://github.com/rizkihelmi10"
          />
          <ProjectCard
            title="Radio Streaming App (Radio PPI Dunia)"
            description="Developed a cross-platform radio streaming app using React Native and deployed via Expo. Ensures seamless and high-quality streaming across iOS and Android."
            images={[
              {src: rpdone, alt: "Mobile app screenshot"},
              {src: rpdtwo, alt: "Web app screenshot"},
              
            ]}
            technologies={['React Native', 'Expo', 'Streaming', 'Mobile Development']}
            link="https://rpd-app.vercel.app/radio"
          />
           <ProjectCard
            title="Go-Tour"
            description="
Go-Tour is a web application designed to match travelers with personalized travel guides, enhancing their tourism experience. Leveraging the power of the OpenAI API, Go-Tour intelligently tailors recommendations based on individual preferences, ensuring a unique and customized journey for every user. Built within just 24 hours during a hackathon, the app utilizes React for the frontend, delivering a sleek and responsive user interface, while FastAPI and Alibaba Cloud power the backend for efficient and scalable performance. Go-Tour represents a perfect fusion of AI-driven personalization and modern web technologies."
            images={[
              {src: gtone, alt: "Mobile app screenshot"},
              {src: gtwo, alt: "Web app screenshot"},
              {src: gthree, alt: "Web app screenshot"},
              
            ]}
            technologies={['React JS', 'Alibaba Cloud', 'FastAPI', 'Web Development']}
            link="https://github.com/rizkihelmi10"
          />
        </div>
        <div className="text-center mt-8">
          <a
            href="https://github.com/rizkihelmi10"
            className="bg-yellow-500 text-black px-6 py-3 rounded-full font-semibold hover:bg-yellow-600 transition duration-300"
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
      
         <Section id="skills" className="bg-gray-100">
        <h2 className="text-3xl font-bold mb-8 text-center">My Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
  <SkillBar skill="Python" percentage={80} />
  <SkillBar skill="C++" percentage={75} />
  <SkillBar skill="Java" percentage={85} />
  <SkillBar skill="Kotlin" percentage={90} />
  <SkillBar skill="ReactJS" percentage={85} />
  <SkillBar skill="TypeScript" percentage={70} />
  <SkillBar skill="React Native" percentage={80} />
  <SkillBar skill="Vue.js" percentage={70} />
  <SkillBar skill="Next.js" percentage={80} />
  <SkillBar skill="MySQL" percentage={80} />
  <SkillBar skill="R" percentage={65} />
  <SkillBar skill="HTML" percentage={95} />
  <SkillBar skill="CSS" percentage={90} />
</div>
      </Section>

      

      <footer className="py-6 bg-gray-800 text-white text-center">
        <div className="container mx-auto px-4">
          <p>© 2024 My Portfolio. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;