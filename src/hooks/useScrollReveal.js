import { useEffect, useRef } from 'react';

export function useScrollReveal(threshold = 0.15) {
  const ref = useRef(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold, rootMargin: '0px 0px -50px 0px' }
    );

    // Observe the container and all .reveal children
    const revealElements = node.querySelectorAll('.reveal');
    revealElements.forEach((el) => observer.observe(el));

    // Also observe the node itself if it has .reveal
    if (node.classList.contains('reveal')) {
      observer.observe(node);
    }

    return () => observer.disconnect();
  }, [threshold]);

  return ref;
}
