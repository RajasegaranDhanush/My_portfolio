import { items as experience } from '../content/experience.json';

export default function Experience() {
  if (experience.length === 0) return null;

  return (
    <section id="experience">
      <div className="reveal" style={{ marginBottom: '3rem' }}>
        <div className="section-tag">✦ Work</div>
        <h2 className="section-title">
          Professional <span>Experience</span>
        </h2>
        <div className="section-divider" />
      </div>

      <div className="timeline reveal">
        {experience.map((job, i) => (
          <div
            className="timeline-item"
            key={`${job.role}-${job.organization}-${i}`}
            style={{ animationDelay: `${i * 0.15}s` }}
          >
            <div className="timeline-dot" />
            <div className="edu-card">
              <div className="edu-date">
                🗓 {job.period}
                {job.type && ` · ${job.type}`}
              </div>
              <div className="edu-degree">{job.role}</div>
              <div className="edu-institution">
                🏛 {job.organization}
                {job.location && ` · ${job.location}`}
              </div>
              {job.points?.length > 0 && (
                <ul className="edu-details">
                  {job.points.map((point, j) => (
                    <li key={j}>{point}</li>
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
