import { useEffect, useRef } from "react";
import * as THREE from "three";
import { prefersReducedMotion } from "../lib/gsap";

// A deliberately quiet Three.js element for the HOME title sequence:
// drifting illuminated "sign rings" (tape-reel / neon-ad energy, kept warm)
// plus a faint particle field. Integrated into the art direction, not a
// loud centerpiece. Disposes everything on unmount; caps DPR.
export default function ThreeBackground() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const width = mount.clientWidth;
    const height = mount.clientHeight;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(50, width / height, 0.1, 100);
    camera.position.z = 14;

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: "low-power",
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    renderer.setSize(width, height);
    renderer.setClearColor(0x000000, 0);
    mount.appendChild(renderer.domElement);

    const group = new THREE.Group();
    scene.add(group);

    // Illuminated sign rings.
    const ringColors = [0xe51b23, 0xffd400, 0xe51b23];
    const ringRadii = [5.2, 3.6, 2.4];
    const rings: THREE.Mesh[] = [];
    ringColors.forEach((color, i) => {
      const geo = new THREE.TorusGeometry(ringRadii[i], 0.12, 12, 96);
      const mat = new THREE.MeshBasicMaterial({
        color,
        transparent: true,
        opacity: 0.5 - i * 0.08,
      });
      const ring = new THREE.Mesh(geo, mat);
      ring.rotation.x = Math.PI / 2.6 + i * 0.2;
      ring.rotation.y = i * 0.5;
      group.add(ring);
      rings.push(ring);
    });

    // Faint warm particle field.
    const count = 220;
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 28;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 18;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 12;
    }
    const pGeo = new THREE.BufferGeometry();
    pGeo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    const pMat = new THREE.PointsMaterial({
      color: 0xffd400,
      size: 0.07,
      transparent: true,
      opacity: 0.55,
    });
    const points = new THREE.Points(pGeo, pMat);
    scene.add(points);

    const clock = new THREE.Clock();
    let frame = 0;
    let running = true;

    const render = () => {
      const t = clock.getElapsedTime();
      group.rotation.z = Math.sin(t * 0.15) * 0.25;
      group.rotation.y = t * 0.08;
      rings.forEach((r, i) => {
        r.rotation.z = t * (0.18 + i * 0.07) * (i % 2 ? -1 : 1);
      });
      points.rotation.y = t * 0.02;
      renderer.render(scene, camera);
    };

    const loop = () => {
      if (!running) return;
      frame = requestAnimationFrame(loop);
      render();
    };

    if (prefersReducedMotion) {
      render(); // single static frame
    } else {
      loop();
    }

    const onResize = () => {
      const w = mount.clientWidth;
      const h = mount.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
      if (prefersReducedMotion) render();
    };
    window.addEventListener("resize", onResize);

    const onVisibility = () => {
      if (document.hidden) {
        running = false;
        cancelAnimationFrame(frame);
      } else if (!prefersReducedMotion && running === false) {
        running = true;
        loop();
      }
    };
    document.addEventListener("visibilitychange", onVisibility);

    return () => {
      running = false;
      cancelAnimationFrame(frame);
      window.removeEventListener("resize", onResize);
      document.removeEventListener("visibilitychange", onVisibility);
      rings.forEach((r) => {
        r.geometry.dispose();
        (r.material as THREE.Material).dispose();
      });
      pGeo.dispose();
      pMat.dispose();
      renderer.dispose();
      if (renderer.domElement.parentNode === mount) {
        mount.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={mountRef}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 z-0"
    />
  );
}
