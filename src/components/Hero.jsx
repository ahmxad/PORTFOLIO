import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import profileImg from '../assets/profile.jpeg';
import './Hero.css';

const roles = ['Web Developer', 'Cybersecurity Enthusiast', 'Problem Solver', 'Lifelong Learner'];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    let timeout;

    if (!isDeleting && displayText === currentRole) {
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && displayText === '') {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    } else {
      const speed = isDeleting ? 40 : 80;
      timeout = setTimeout(() => {
        setDisplayText(
          isDeleting
            ? currentRole.slice(0, displayText.length - 1)
            : currentRole.slice(0, displayText.length + 1)
        );
      }, speed);
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, roleIndex]);

  return (
    <section className="hero" aria-label="Introduction">
      <div className="hero__bg">
        <div className="hero__gradient"></div>
      </div>

      <div className="hero__inner">
        <div className="hero__content">
          <p className="hero__greeting" style={{ animationDelay: '0.2s' }}>Hi, my name is</p>
          <h1 className="hero__name" style={{ animationDelay: '0.4s' }}>Ahmad.</h1>
          <div className="hero__role-wrapper" style={{ animationDelay: '0.6s' }}>
            <span className="hero__role-text">{displayText}</span>
            <span className="hero__cursor">|</span>
          </div>
          <p className="hero__description" style={{ animationDelay: '0.8s' }}>
            I build things for the web and explore the depths of cybersecurity.
            Passionate about writing clean code and breaking systems to make them more secure.
          </p>
          <div className="hero__actions" style={{ animationDelay: '1s' }}>
            <Link to="/contact" className="hero__btn hero__btn--primary">
              Get In Touch
            </Link>
            <Link to="/about" className="hero__btn hero__btn--ghost">
              Learn More
            </Link>
          </div>
        </div>

        <div className="hero__portrait" style={{ animationDelay: '0.6s' }}>
          <div className="hero__portrait-frame">
            <img src={profileImg} alt="Ahmad — Web Developer" className="hero__portrait-img" />
          </div>
          <div className="hero__portrait-accent" aria-hidden="true"></div>
        </div>
      </div>
    </section>
  );
}
