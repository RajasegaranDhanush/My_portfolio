const achievements = [
  {
    icon: '🏆',
    title: 'IEEE Tech Workshop',
    org: 'Vertex, IEEE',
    date: '11/2025 – 12/2025',
    desc: 'Participated in IEEE-organized tech workshops and design activities, gaining exposure to cutting-edge engineering concepts and professional networking.',
  },
  {
    icon: '🎓',
    title: 'Diploma in Professional English',
    org: 'Tea Leaf Centre for Professional Development',
    date: '01/2024 – 12/2024',
    desc: 'Completed a professional English diploma, strengthening communication skills essential for a global engineering career.',
  },
  {
    icon: '💡',
    title: 'Smart Locker System Contributor',
    org: 'University of Westminster (IIT)',
    date: '2025 – Present',
    desc: 'Actively contributing to a Smart Locker System project that combines IoT hardware with a full-stack software solution.',
  },
  {
    icon: '🌐',
    title: 'Community Engagement Leader',
    org: 'Extracurricular Activities',
    date: '2021 – Present',
    desc: 'Demonstrated strong leadership and organizational skills through community engagement and event management initiatives.',
  },
];

export default function Achievements() {
  return (
    <section id="achievements">
      <div className="reveal" style={{ marginBottom: '3rem' }}>
        <div className="section-tag">✦ Milestones</div>
        <h2 className="section-title">
          Achievements & <span>Activities</span>
        </h2>
        <div className="section-divider" />
      </div>

      <div className="achievements-grid reveal">
        {achievements.map((item, i) => (
          <div
            className="achievement-card"
            key={i}
            style={{ animationDelay: `${i * 0.1}s` }}
          >
            <div className="achievement-icon">{item.icon}</div>
            <div className="achievement-body">
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', alignItems: 'center' }}>
                <span style={{
                  fontSize: '0.78rem',
                  color: 'var(--accent-light)',
                  fontWeight: 500,
                }}>🏛 {item.org}</span>
              </div>
              <div className="achievement-date">🗓 {item.date}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
