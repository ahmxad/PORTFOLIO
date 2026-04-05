import { useScrollReveal } from '../hooks/useScrollReveal';
import './Skills.css';

const skillCategories = [
  {
    name: 'Languages',
    color: 'var(--cat-languages)',
    skills: [
      { label: 'Python', icon: '🐍' },
      { label: 'JavaScript', icon: 'JS' },
      { label: 'C++', icon: 'C++' },
      { label: 'Rust', icon: '🦀' },
    ],
  },
  {
    name: 'Frontend',
    color: 'var(--cat-frontend)',
    skills: [
      { label: 'HTML5', icon: '◇' },
      { label: 'CSS3', icon: '◈' },
      { label: 'React', icon: '⚛' },
      { label: 'Responsive Design', icon: '📱' },
    ],
  },
  {
    name: 'Backend & Tools',
    color: 'var(--cat-backend)',
    skills: [
      { label: 'Node.js', icon: '▲' },
      { label: 'Git', icon: '⎇' },
      { label: 'Linux', icon: '🐧' },
      { label: 'VS Code', icon: '⌨' },
    ],
  },
  {
    name: 'Security & Cybersecurity',
    color: 'var(--cat-security)',
    skills: [
      { label: 'Burp Suite', icon: '🔓' },
      { label: 'Wireshark', icon: '🦈' },
      { label: 'Nmap', icon: '🗺' },
      { label: 'OWASP', icon: '🛡' },
    ],
  },
];

export default function Skills() {
  const sectionRef = useScrollReveal();

  return (
    <section className="skills section" aria-label="Skills" ref={sectionRef}>
      <div className="reveal">
        <p className="section-label">Skills</p>
        <h2 className="section-title">Technologies I work with</h2>
        <p className="section-description">
          A collection of languages, frameworks, and tools I use to bring ideas to life.
        </p>
      </div>

      <div className="skills__categories">
        {skillCategories.map((category, catIndex) => (
          <div
            key={category.name}
            className={`skills__category reveal reveal-delay-${catIndex + 1}`}
            style={{ '--category-color': category.color }}
          >
            <h3 className="skills__category-name">{category.name}</h3>
            <div className="skills__badges">
              {category.skills.map((skill) => (
                <div key={skill.label} className="skills__badge" tabIndex={0} role="listitem">
                  <span className="skills__badge-icon">{skill.icon}</span>
                  <span className="skills__badge-label">{skill.label}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
