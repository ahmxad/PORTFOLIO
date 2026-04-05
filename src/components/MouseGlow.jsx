import { useEffect, useRef } from 'react';
import './MouseGlow.css';

export default function MouseGlow() {
  const glowRef = useRef(null);
  const trailRefs = useRef([]);
  const mouse = useRef({ x: -200, y: -200 });
  const positions = useRef([]);

  useEffect(() => {
    const TRAIL_COUNT = 5;
    positions.current = Array.from({ length: TRAIL_COUNT }, () => ({ x: -200, y: -200 }));

    const handleMouseMove = (e) => {
      mouse.current = { x: e.clientX, y: e.clientY };

      // Main glow follows instantly
      if (glowRef.current) {
        glowRef.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
        glowRef.current.style.opacity = '1';
      }
    };

    const handleMouseLeave = () => {
      if (glowRef.current) {
        glowRef.current.style.opacity = '0';
      }
    };

    // Smooth trail animation
    let animId;
    const animate = () => {
      for (let i = 0; i < positions.current.length; i++) {
        const target = i === 0 ? mouse.current : positions.current[i - 1];
        const speed = 0.15 - i * 0.02;
        positions.current[i].x += (target.x - positions.current[i].x) * speed;
        positions.current[i].y += (target.y - positions.current[i].y) * speed;

        if (trailRefs.current[i]) {
          trailRefs.current[i].style.transform =
            `translate(${positions.current[i].x}px, ${positions.current[i].y}px)`;
        }
      }
      animId = requestAnimationFrame(animate);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    animId = requestAnimationFrame(animate);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <div className="mouse-glow-container" aria-hidden="true">
      {/* Main glow */}
      <div className="mouse-glow" ref={glowRef}></div>

      {/* Trailing particles */}
      {Array.from({ length: 5 }).map((_, i) => (
        <div
          key={i}
          className="mouse-trail"
          ref={(el) => (trailRefs.current[i] = el)}
          style={{
            width: `${8 - i}px`,
            height: `${8 - i}px`,
            opacity: 0.6 - i * 0.1,
          }}
        ></div>
      ))}
    </div>
  );
}
