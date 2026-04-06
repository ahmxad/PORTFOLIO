import { useScrollReveal } from '../hooks/useScrollReveal';
import './About.css';

export default function About() {
  const sectionRef = useScrollReveal();

  return (
    <section className="about section" aria-label="About me" ref={sectionRef}>
      <div className="reveal">
        <p className="section-label">About</p>
        <h2 className="section-title">A little about me</h2>
      </div>

      <div className="about__grid">
        <div className="about__text reveal reveal-delay-1">
          <p>
            I'm a Web developer with a deep curiosity for how things work — and how they break.
            My journey started with writing simple scripts and has evolved into building full-stack
            web applications and exploring the fascinating world of cybersecurity.
          </p>
          <p>
            I enjoy crafting clean, efficient code and building intuitive user experiences.
            When I'm not writing code, I'm likely learning about new attack vectors,
            participating in CTF challenges, or diving into the latest security research.
          </p>
          <p>
            I believe in continuous learning and pushing beyond comfort zones.
            Whether it's mastering a new programming language like Rust or earning
            cybersecurity certifications, I'm always looking for the next challenge.
          </p>
        </div>

        <div className="about__highlights reveal reveal-delay-2">
          <div className="about__card">
            <div className="about__card-icon">⚡</div>
            <div className="about__card-content">
              <h3>Fast Learner</h3>
              <p>Quickly adapting to new technologies and frameworks</p>
            </div>
          </div>
          <div className="about__card">
            <div className="about__card-icon">🔒</div>
            <div className="about__card-content">
              <h3>Security-Minded</h3>
              <p>Building with security-first principles</p>
            </div>
          </div>
          <div className="about__card">
            <div className="about__card-icon">🎯</div>
            <div className="about__card-content">
              <h3>Detail-Oriented</h3>
              <p>Crafting pixel-perfect, accessible interfaces</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
