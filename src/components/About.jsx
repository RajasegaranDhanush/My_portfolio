import { items as stats } from '../content/stats.json';

export default function About() {
  return (
    <section id="about">
      <div className="about-grid">
        {/* Left side – Stats */}
        <div className="reveal">
          <div className="about-stats">
            {stats.map((stat) => (
              <div className="stat-card" key={stat.label}>
                <div className="stat-number">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>

          <div className="about-info-grid" style={{ marginTop: '1.5rem' }}>
            <div className="info-item">
              <div className="info-icon">📍</div>
              <div>
                <div className="info-label">Location</div>
                <div className="info-value">Nuwara Eliya, SL</div>
              </div>
            </div>
            <div className="info-item">
              <div className="info-icon">🎓</div>
              <div>
                <div className="info-label">University</div>
                <div className="info-value">Westminster (IIT)</div>
              </div>
            </div>
            <div className="info-item">
              <div className="info-icon">📧</div>
              <div>
                <div className="info-label">Email</div>
                <div className="info-value" style={{ fontSize: '0.78rem' }}>rajasegarandhanush@gmail.com</div>
              </div>
            </div>
            <div className="info-item">
              <div className="info-icon">📞</div>
              <div>
                <div className="info-label">Phone</div>
                <div className="info-value">+94 772943890</div>
              </div>
            </div>
          </div>
        </div>

        {/* Right side – Text */}
        <div className="about-text reveal">
          <div className="section-tag">✦ About Me</div>
          <h2 className="section-title">
            Turning Ideas Into <span>Digital Reality</span>
          </h2>
          <div className="section-divider" />

          <p>
            Hey! I'm <strong style={{ color: 'var(--primary-light)' }}>Rajasegaran Dhanush</strong>, a passionate
            Software Engineering undergraduate at the University of Westminster (delivered through IIT),
            currently in my second year.
          </p>
          <p>
            I thrive at the intersection of beautiful design and clean code. With hands-on experience
            in <strong style={{ color: 'var(--accent-light)' }}>React</strong> and frontend development,
            I love crafting responsive, user-friendly interfaces that not only look great but work flawlessly.
          </p>
          <p>
            Beyond web, I explore <strong style={{ color: 'var(--primary-light)' }}>IoT hardware</strong>,
            <strong style={{ color: 'var(--accent-light)' }}> Python</strong>, and Firebase — currently
            contributing to a Smart Locker System that bridges hardware and software. I'm eager to grow
            in a professional engineering environment through internships.
          </p>

          <div style={{ display: 'flex', gap: '1rem', marginTop: '1.5rem', flexWrap: 'wrap' }}>
            <a href="#contact" className="btn-primary" style={{ fontSize: '0.9rem', padding: '12px 24px' }}>
              🤝 Get In Touch
            </a>
            <a
              href="https://linkedin.com/in/rajasegaran-dhanush"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
              style={{ fontSize: '0.9rem', padding: '12px 24px' }}
            >
              📄 View LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
