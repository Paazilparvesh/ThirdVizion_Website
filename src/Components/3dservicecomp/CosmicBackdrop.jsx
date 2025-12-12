import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const CosmicBackdrop = () => {
  const svgMaskRef = useRef(null);

  useEffect(() => {
    // Background animations
    gsap.to(".bg-blob", {
      scale: 1.06,
      rotation: 8,
      duration: 8,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });

    // Parallax effect for stars
    gsap.to(".parallax-layer", {
      y: (i) => `-${50 + i * 30}`,
      ease: "none",
      scrollTrigger: {
        trigger: "body",
        start: "top top",
        end: "bottom top",
        scrub: 1.5,
      },
    });

    // Create glow elements dynamically
    const container = document.querySelector('.cosmic-container');
    if (container) {
      const glowElements = [];
      
      for (let i = 0; i < 4; i++) {
        const glow = document.createElement('div');
        glow.className = 'absolute rounded-full blur-xl opacity-0 cosmic-glow';
        glow.style.width = glow.style.height = `${gsap.utils.random(80, 160)}px`;
        glow.style.background = 'rgba(225, 249, 223, 0.15)';
        glow.style.left = `${gsap.utils.random(10, 90)}%`;
        glow.style.top = `${gsap.utils.random(10, 90)}%`;
        glow.style.zIndex = '0';
        container.appendChild(glow);
        glowElements.push(glow);
      }

      // Animate glow elements
      gsap.to(glowElements, {
        opacity: 0.3,
        duration: 2,
        stagger: 0.2,
        ease: 'power2.out',
        delay: 0.5
      });

      // Continuous animation for glow elements
      glowElements.forEach((glow) => {
        gsap.to(glow, {
          x: gsap.utils.random(-80, 80),
          y: gsap.utils.random(-40, 40),
          duration: gsap.utils.random(10, 15),
          ease: 'sine.inOut',
          repeat: -1,
          yoyo: true,
        });
      });

      // Cleanup
      return () => {
        glowElements.forEach((glow) => glow.remove());
      };
    }
  }, []);

  return (
    <>
      <svg
        ref={svgMaskRef}
        className="pointer-events-none fixed inset-0 w-full h-full -z-10"
        preserveAspectRatio="xMidYMid slice"
        viewBox="0 0 1920 1080"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <defs>
          <radialGradient id="cosmic-grad" cx="40%" cy="30%" r="80%">
            <stop offset="0%" stopColor="#000000" />
            <stop offset="40%" stopColor="#0a0014" />
            <stop offset="100%" stopColor="#000000" />
          </radialGradient>

          <filter id="grain">
            <feTurbulence baseFrequency="0.8" numOctaves="2" stitchTiles="stitch" result="noise" />
            <feColorMatrix type="saturate" values="0" />
            <feBlend in="SourceGraphic" in2="noise" mode="overlay" />
          </filter>
        </defs>

        <rect width="100%" height="100%" fill="url(#cosmic-grad)" />

        <g className="parallax-layer">
          {Array.from({ length: 60 }).map((_, i) => (
            <circle
              key={`s-${i}`}
              cx={Math.random() * 1920}
              cy={Math.random() * 1080}
              r={Math.random() * 1.8 + 0.4}
              fill={`rgba(255,255,255,${Math.random() * 0.9})`}
              opacity={Math.random() * 0.9}
            />
          ))}
        </g>

        <g className="bg-blob opacity-70 mix-blend-screen">
          <ellipse cx="300" cy="200" rx="420" ry="140" fill="#3b0066a0" />
          <ellipse cx="1500" cy="420" rx="520" ry="180" fill="#001f66a0" />
          <ellipse cx="1000" cy="820" rx="680" ry="200" fill="#6600ffaa" />
        </g>

        <rect width="100%" height="100%" fill="url(#cosmic-grad)" opacity="0.08" />
      </svg>
      
      <style jsx>{`
        .cosmic-glow {
          pointer-events: none;
        }
      `}</style>
    </>
  );
};

export default CosmicBackdrop;