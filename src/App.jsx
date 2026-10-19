import { useEffect } from 'react';
import './index.css';

import Navbar from './components/Navbar';
import NetworkBackground from './components/NetworkBackground';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Education from './components/Education';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import Certifications from './components/Certifications';
import Contact from './components/Contact';

// Intersection Observer for reveal animations
function useReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    const elements = document.querySelectorAll('.reveal');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);
}

export default function App() {
  useReveal();

  return (
    <>
      {/* Animated background */}
      <div className="bg-canvas">
        <div className="bg-orb bg-orb-1" />
        <div className="bg-orb bg-orb-2" />
        <div className="bg-orb bg-orb-3" />
      </div>
      <div className="bg-grid" />
      <NetworkBackground />

      {/* Navigation */}
      <Navbar />

      {/* Main Content */}
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Education />
        <Projects />
        <Achievements />
        <Certifications />
        <Contact />
      </main>

      {/* Footer */}
      <footer>
        <p>
          Designed &amp; Built with ❤️ by{' '}
          <span>Rajasegaran Dhanush</span> · {new Date().getFullYear()}
        </p>
        <p style={{ marginTop: '4px', fontSize: '0.75rem', opacity: 0.6 }}>
          Software Engineering Undergraduate · University of Westminster (IIT)
        </p>
      </footer>
    </>
  );
}