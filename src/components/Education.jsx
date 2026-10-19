import { items as education } from '../content/education.json';

export default function Education() {
  return (
    <section id="education">
      <div className="reveal" style={{ marginBottom: '3rem' }}>
        <div className="section-tag">✦ My Journey</div>
        <h2 className="section-title">
          Education & <span>Background</span>
        </h2>
        <div className="section-divider" />
      </div>

      <div className="timeline reveal">
        {education.map((edu, i) => (
          <div
            className="timeline-item"
            key={i}
            style={{ animationDelay: `${i * 0.15}s` }}
          >
            <div className="timeline-dot" />
            <div className="edu-card">
              <div className="edu-date">🗓 {edu.period}</div>
              <div className="edu-degree">{edu.degree}</div>
              <div className="edu-institution">🏛 {edu.institution}</div>
              {edu.details?.length > 0 && (
                <ul className="edu-details">
                  {edu.details.map((d, j) => (
                    <li key={j}>{d}</li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
