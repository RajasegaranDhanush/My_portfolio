import { categories as skillCategories, techStack } from '../content/skills.json';

export default function Skills() {
  return (
    <section id="skills">
      <div className="reveal" style={{ marginBottom: '3rem' }}>
        <div className="section-tag">✦ What I Know</div>
        <h2 className="section-title">
          Skills & <span>Technologies</span>
        </h2>
        <div className="section-divider" />
      </div>

      <div className="skills-wrapper reveal">
        {skillCategories.map((cat) => (
          <div className="skill-category" key={cat.name}>
            <div className="skill-cat-header">
              <div className={`skill-cat-icon ${cat.color}`}>{cat.icon}</div>
              <span className="skill-cat-name">{cat.name}</span>
            </div>
            <div className="skill-tags">
              {cat.skills.map((skill) => (
                <span className={`skill-tag ${cat.color}`} key={skill}>
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="tech-logos reveal" style={{ marginTop: '2rem' }}>
        {techStack.map((tech) => (
          <div className="tech-logo-item" key={tech.name}>
            <div className="tech-logo-icon">{tech.icon}</div>
            <span className="tech-logo-name">{tech.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
