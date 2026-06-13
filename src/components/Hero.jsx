import { useEffect, useState } from 'react';

const roles = [
  'Software Engineer',
  'Frontend Developer',
  'UI/UX Enthusiast',
  'React Developer',
  'IoT Explorer',
];

function TypeWriter() {
  const [text, setText] = useState('');
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIndex];
    const delay = deleting ? 60 : 100;

    const timer = setTimeout(() => {
      if (!deleting) {
        setText(current.slice(0, charIndex + 1));
        if (charIndex + 1 === current.length) {
          setTimeout(() => setDeleting(true), 1800);
        } else {
          setCharIndex(charIndex + 1);
        }
      } else {
        setText(current.slice(0, charIndex - 1));
        if (charIndex - 1 === 0) {
          setDeleting(false);
          setRoleIndex((roleIndex + 1) % roles.length);
          setCharIndex(0);
        } else {
          setCharIndex(charIndex - 1);
        }
      }
    }, delay);

    return () => clearTimeout(timer);
  }, [charIndex, deleting, roleIndex]);

  return (
    <span className="hero-role">
      <span style={{ color: 'var(--primary-light)' }}>{text}</span>
      <span className="typing-cursor" />
    </span>
  );
}

export default function Hero() {
  return (
    <section id="hero">
      <div className="hero-inner">
        {/* Left Content */}
        <div className="animate-fade-up">
          <div className="hero-badge">
            <span className="badge-dot" />
            Available for Internship &amp; Freelance
          </div>

          <h1 className="hero-name">
            <span className="first">Rajasegaran</span><br />
            <span className="last">Dhanush</span>
          </h1>

          <TypeWriter />

          <p className="hero-desc">
            Second-year Software Engineering undergraduate at the University of Westminster (IIT).
            Passionate about building beautiful, responsive interfaces and exploring the intersection
            of software &amp; hardware.
          </p>

          <div className="hero-actions">
            <a href="#projects" className="btn-primary">
              <span>🚀</span> View My Work
            </a>
            <a href="#contact" className="btn-secondary">
              <span>💬</span> Let's Talk
            </a>
          </div>

          <div className="hero-socials">
            <a
              href="https://github.com/RajasegaranDhanush"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              title="GitHub"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.37 0 0 5.373 0 12c0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.218.694.824.576C20.565 21.796 24 17.298 24 12c0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
            <a
              href="https://linkedin.com/in/rajasegaran-dhanush"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              title="LinkedIn"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            <a
              href="mailto:rajasegarandhanush@gmail.com"
              className="social-link"
              title="Email"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="2" y="4" width="20" height="16" rx="2"/>
                <path d="M2 7l10 7 10-7"/>
              </svg>
            </a>
            <a
              href="tel:+94772943890"
              className="social-link"
              title="Phone"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 014.69 12 19.79 19.79 0 011.62 3.38 2 2 0 013.6 1.22h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L7.91 8.85a16 16 0 006.29 6.29l.95-.95a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Right – Visual */}
        <div className="hero-visual animate-fade-up delay-3">
          <div className="avatar-container">
            <div className="avatar-ring" />
            <div className="avatar-ring avatar-ring-2" />
            <div className="avatar-placeholder">RD</div>

            <div className="float-badge float-badge-1">
              <span>⚛️</span> React Developer
            </div>
            <div className="float-badge float-badge-2">
              <span>🤖</span> IoT Hardware
            </div>
            <div className="float-badge float-badge-3">
              <span>🎨</span> UI / UX
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="scroll-indicator">
        <div className="scroll-mouse">
          <div className="scroll-wheel" />
        </div>
        <span>Scroll</span>
      </div>
    </section>
  );
}
