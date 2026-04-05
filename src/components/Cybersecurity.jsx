import { useScrollReveal } from '../hooks/useScrollReveal';
import './Cybersecurity.css';

const pursuits = [
  {
    icon: '🏴',
    title: 'CTF Competitions',
    description:
      'Actively participating in Capture The Flag challenges to sharpen offensive and defensive security skills across web, crypto, and binary exploitation.',
  },
  {
    icon: '📜',
    title: 'Certifications',
    description:
      'Working towards industry-recognized certifications including CompTIA Security+, CEH, and OSCP to validate and deepen security expertise.',
  },
  {
    icon: '🔬',
    title: 'Vulnerability Research',
    description:
      'Exploring web application vulnerabilities, studying OWASP Top 10, and practicing responsible disclosure through bug bounty platforms.',
  },
  {
    icon: '🖧',
    title: 'Network Security',
    description:
      'Learning network analysis, packet inspection with Wireshark, and penetration testing methodologies using tools like Nmap and Burp Suite.',
  },
];

export default function Cybersecurity() {
  const sectionRef = useScrollReveal();

  return (
    <section className="cyber section" aria-label="Cybersecurity" ref={sectionRef}>
      <div className="reveal">
        <p className="section-label">Cybersecurity</p>
        <h2 className="section-title">Security & learning</h2>
        <p className="section-description">
          Cybersecurity isn't just a skill — it's a mindset. Here's what I'm currently pursuing.
        </p>
      </div>

      <div className="cyber__grid">
        {pursuits.map((item, index) => (
          <article
            key={item.title}
            className={`cyber__card reveal reveal-delay-${index + 1}`}
          >
            <div className="cyber__card-icon">{item.icon}</div>
            <h3 className="cyber__card-title">{item.title}</h3>
            <p className="cyber__card-description">{item.description}</p>
          </article>
        ))}
      </div>

      <div className="cyber__banner reveal">
        <div className="cyber__banner-content">
          <span className="cyber__banner-icon">🛡</span>
          <div>
            <h3>Security-First Development</h3>
            <p>
              I integrate security principles into every stage of development — from writing
              secure code to performing threat modeling and code reviews.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
