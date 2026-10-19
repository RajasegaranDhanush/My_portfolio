import { items as achievements } from '../content/achievements.json';

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
