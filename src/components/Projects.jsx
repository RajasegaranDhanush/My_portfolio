const projects = [
  {
    icon: '🔐',
    iconBg: 'linear-gradient(135deg, rgba(124,58,237,0.3), rgba(6,182,212,0.2))',
    title: 'Smart Locker System',
    desc: 'An IoT-powered smart locker combining hardware sensors with a software dashboard. Enables secure access control, real-time monitoring and remote management through a React-based interface integrated with Firebase.',
    tags: ['React', 'Firebase', 'IoT', 'Python', 'Hardware'],
    github: 'https://github.com/RajasegaranDhanush',
    featured: true,
  },
  {
    icon: '🎨',
    iconBg: 'linear-gradient(135deg, rgba(236,72,153,0.3), rgba(124,58,237,0.2))',
    title: 'UI/UX Design Projects',
    desc: 'A collection of responsive and user-friendly interface designs crafted in Figma. Focused on modern design patterns, accessibility, and pixel-perfect implementations.',
    tags: ['Figma', 'UI/UX', 'Prototyping', 'Wireframing'],
    github: 'https://github.com/RajasegaranDhanush',
    featured: false,
  },
  {
    icon: '📱',
    iconBg: 'linear-gradient(135deg, rgba(6,182,212,0.3), rgba(74,222,128,0.2))',
    title: 'Mobile App Concept',
    desc: 'A mobile-first application concept focusing on intuitive navigation and smooth animations. Designed with user experience at the forefront, combining React Native principles with Firebase backend.',
    tags: ['React', 'Firebase', 'CSS', 'Mobile-First'],
    github: 'https://github.com/RajasegaranDhanush',
    featured: false,
  },
  {
    icon: '🤖',
    iconBg: 'linear-gradient(135deg, rgba(74,222,128,0.3), rgba(6,182,212,0.2))',
    title: 'Python Automation Tools',
    desc: 'A suite of Python scripts and Tkinter GUI applications for automating repetitive tasks. Includes file management utilities, data processing scripts, and GUI-based tools.',
    tags: ['Python', 'Tkinter', 'Automation', 'GUI'],
    github: 'https://github.com/RajasegaranDhanush',
    featured: false,
  },
];

export default function Projects() {
  return (
    <section id="projects">
      <div className="reveal" style={{ marginBottom: '3rem' }}>
        <div className="section-tag">✦ My Work</div>
        <h2 className="section-title">
          Featured <span>Projects</span>
        </h2>
        <div className="section-divider" />
        <p style={{ color: 'var(--text-secondary)', maxWidth: '500px' }}>
          Here are some of the projects I've built and contributed to. Each one reflects
          my passion for clean code and thoughtful design.
        </p>
      </div>

      <div className="projects-grid reveal">
        {projects.map((proj, i) => (
          <div className="project-card" key={i}>
            {proj.featured && <div className="featured-tag">⭐ Featured</div>}

            <div className="project-header">
              <div
                className="project-icon"
                style={{ background: proj.iconBg }}
              >
                {proj.icon}
              </div>
              <div className="project-links">
                <a
                  href={proj.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link-btn"
                  title="View on GitHub"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0C5.37 0 0 5.373 0 12c0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.218.694.824.576C20.565 21.796 24 17.298 24 12c0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
                <a
                  href={proj.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link-btn"
                  title="Open project"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/>
                    <polyline points="15 3 21 3 21 9"/>
                    <line x1="10" y1="14" x2="21" y2="3"/>
                  </svg>
                </a>
              </div>
            </div>

            <div className="project-title">{proj.title}</div>
            <div className="project-desc">{proj.desc}</div>

            <div className="project-tags">
              {proj.tags.map((tag) => (
                <span className="project-tag" key={tag}>{tag}</span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
        <a
          href="https://github.com/RajasegaranDhanush"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-secondary"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0C5.37 0 0 5.373 0 12c0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.218.694.824.576C20.565 21.796 24 17.298 24 12c0-6.627-5.373-12-12-12z"/>
          </svg>
          See All on GitHub
        </a>
      </div>
    </section>
  );
}
