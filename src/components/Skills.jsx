const skillCategories = [
  {
    name: 'Programming Languages',
    icon: '💻',
    colorClass: 'purple',
    skills: ['Python', 'Java', 'JavaScript', 'HTML5', 'CSS3', 'C++'],
  },
  {
    name: 'Frameworks & Tools',
    icon: '⚛️',
    colorClass: 'cyan',
    skills: ['React', 'Firebase', 'Tkinter', 'Git', 'Figma', 'VS Code'],
  },
  {
    name: 'Interests & Domains',
    icon: '🎯',
    colorClass: 'pink',
    skills: ['UI/UX Design', 'Mobile Apps', 'IoT Hardware', 'Cybersecurity', 'Frontend Dev', 'Backend Dev'],
  },
  {
    name: 'Soft Skills',
    icon: '🌟',
    colorClass: 'green',
    skills: ['Teamwork', 'Leadership', 'Communication', 'Community', 'Organization', 'Event Management'],
  },
];

const techStack = [
  { icon: '🐍', name: 'Python' },
  { icon: '☕', name: 'Java' },
  { icon: '📜', name: 'JavaScript' },
  { icon: '⚛️', name: 'React' },
  { icon: '🌐', name: 'HTML5' },
  { icon: '🎨', name: 'CSS3' },
  { icon: '🔥', name: 'Firebase' },
  { icon: '🐙', name: 'Git' },
  { icon: '🖥️', name: 'C++' },
  { icon: '✏️', name: 'Figma' },
  { icon: '🔌', name: 'IoT' },
  { icon: '📦', name: 'Tkinter' },
];

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
              <div className={`skill-cat-icon ${cat.colorClass}`}>{cat.icon}</div>
              <span className="skill-cat-name">{cat.name}</span>
            </div>
            <div className="skill-tags">
              {cat.skills.map((skill) => (
                <span className={`skill-tag ${cat.colorClass}`} key={skill}>
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
