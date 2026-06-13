const education = [
  {
    degree: 'BSc (Hons) Software Engineering – Undergraduate',
    institution: 'University of Westminster (Delivered through IIT)',
    period: '01/2025 – 12/2028',
    details: ['Specializing in Software Engineering', 'Focus on full-stack & UI/UX development'],
  },
  {
    degree: 'Diploma in Professional English',
    institution: 'Tea Leaf Centre for Professional Development',
    period: '01/2024 – 12/2024',
    details: ['Enhanced professional communication skills', 'Business English certification'],
  },
  {
    degree: 'GCE Advanced Level – Engineering Technology Stream',
    institution: 'Cambridge National College – Kotagala',
    period: '01/2021 – 12/2023',
    details: ['Engineering Technology (C)', 'Science for Technology (C)', 'ICT (C)'],
  },
  {
    degree: 'GCE Ordinary Level',
    institution: 'Methodist College – Kandapola',
    period: '01/2019 – 12/2021',
    details: [
      'Tamil (A), Health & PT (A)',
      'Mathematics (B), History (B)',
      'Art (B), Science (C), English (C)',
      'Business Studies (C), Religion (C)',
    ],
  },
];

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
              {edu.details.length > 0 && (
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
