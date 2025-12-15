import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { SplitText } from "gsap/dist/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, SplitText);
}

export default function Threelanding() {
  const rootRef = useRef(null);
  const heroTextRef = useRef(null);
  const planetRefs = useRef([]);
  const ringsRef = useRef([]);
  const [isButton1Hovered, setIsButton1Hovered] = useState(false);
  
  const addPlanetRef = (el) => {
    if (el && !planetRefs.current.includes(el)) planetRefs.current.push(el);
  };
  const addRingRef = (el) => {
    if (el && !ringsRef.current.includes(el)) ringsRef.current.push(el);
  };

  // Ripple effect for buttons
  const createRipple = (event) => {
    const button = event.currentTarget;
    const circle = document.createElement('span');
    const diameter = Math.max(button.clientWidth, button.clientHeight);
    const radius = diameter / 2;

    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${
      event.clientX - button.getBoundingClientRect().left - radius
    }px`;
    circle.style.top = `${
      event.clientY - button.getBoundingClientRect().top - radius
    }px`;
    circle.classList.add('ripple');

    const ripple = button.getElementsByClassName('ripple')[0];
    if (ripple) ripple.remove();

    button.appendChild(circle);
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Initial fade in animation
      gsap.fromTo(
        rootRef.current,
        { autoAlpha: 0, y: 20 },
        { autoAlpha: 1, y: 0, duration: 1.2, ease: "power3.out" }
      );

      // Hero text animation with SplitText
      if (heroTextRef.current) {
        const splitHeading = new SplitText(heroTextRef.current.querySelectorAll(".word"), {
          type: 'chars',
          charsClass: 'char',
        });

        gsap.set(splitHeading.chars, {
          opacity: 0,
          y: () => gsap.utils.random(60, 100),
          rotation: () => gsap.utils.random(-15, 15),
          scale: 0.7,
        });

        // Animate heading characters with floating effect
        gsap.to(splitHeading.chars, {
          opacity: 1,
          y: 0,
          rotation: 0,
          scale: 1,
          duration: 1.2,
          stagger: 0.02,
          ease: "back.out(1.7)",
          delay: 0.5
        });

        // Add floating animation to all characters
        gsap.to(splitHeading.chars, {
          y: () => gsap.utils.random(-3, 3),
          rotation: () => gsap.utils.random(-1, 1),
          duration: 4,
          stagger: 0.01,
          ease: 'sine.inOut',
          repeat: -1,
          yoyo: true,
          delay: 2
        });
      }

      // Planet animations
      planetRefs.current.forEach((p, i) => {
        const dir = i % 2 === 0 ? 1 : -1;
        gsap.to(p, {
          y: `+=${20 + i * 6}`,
          x: dir * (10 + i * 4),
          duration: 6 + i,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          delay: i * 0.2,
        });
      });

      // Ring animations
      ringsRef.current.forEach((r, i) => {
        gsap.to(r, {
          rotation: i % 2 === 0 ? 90 : -90,
          duration: 20 + i * 5,
          repeat: -1,
          ease: "linear",
        });
      });

      // Parallax layers with ScrollTrigger
      gsap.to(".parallax-layer", {
        y: (i) => `-${50 + i * 30}`,
        ease: "none",
        scrollTrigger: {
          trigger: rootRef.current,
          start: "top top",
          end: "bottom+=400 top",
          scrub: 1.5,
          markers: false,
        },
      });

      // Feature cards animation
      gsap.from(".feature-card", {
        y: 60,
        autoAlpha: 0,
        rotationY: -10,
        duration: 1.2,
        stagger: 0.15,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: ".features-grid",
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });

      // CTA button animations
      gsap.to(".cta-btn", {
        scale: 1.03,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        duration: 1.2,
      });

      // Card hover animation
      const cards = document.querySelectorAll('.feature-card');
      cards.forEach(card => {
        const handleCardHover = () => {
          gsap.to(card, {
            y: -8,
            rotationY: 5,
            duration: 0.5,
            ease: 'power2.out',
          });
        };

        const handleCardLeave = () => {
          gsap.to(card, {
            y: 0,
            rotationY: 0,
            duration: 0.5,
            ease: 'power2.out',
          });
        };

        card.addEventListener('mouseenter', handleCardHover);
        card.addEventListener('mouseleave', handleCardLeave);
      });

    }, rootRef);

    return () => ctx.revert();
  }, []);

  const Planet = ({ id, size = 160, color = "#ff4d6d", stroke = "#ffffff22", rings = true }) => {
    const viewBox = `0 0 ${size} ${size}`;
    return (
      <svg
        className="planet w-auto h-auto drop-shadow-2xl"
        viewBox={viewBox}
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <defs>
          <radialGradient id={`grad-${id}`} cx="30%" cy="25%">
            <stop offset="0%" stopColor={color} stopOpacity="1" />
            <stop offset="50%" stopColor={color} stopOpacity="0.85" />
            <stop offset="100%" stopColor="#000000" stopOpacity="0.18" />
          </radialGradient>
          <filter id={`glow-${id}`} x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="6" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <g filter={`url(#glow-${id})`}>
          <circle cx={size / 2} cy={size / 2} r={size * 0.42} fill={`url(#grad-${id})`} />
        </g>

        <g opacity="0.16" transform={`translate(${size * 0.08}, ${size * 0.06})`}>
          <path d={`M10 ${size * 0.2} C ${size * 0.15} 10, ${size * 0.5} 10, ${size * 0.7} ${size * 0.2}`} stroke={stroke} strokeWidth="1.8" fill="none" strokeLinecap="round" />
          <path d={`M8 ${size * 0.45} C ${size * 0.25} ${size * 0.4}, ${size * 0.6} ${size * 0.55}, ${size * 0.86} ${size * 0.48}`} stroke={stroke} strokeWidth="1.6" fill="none" strokeLinecap="round" />
        </g>

        {rings && (
          <g className="planet-ring" transform={`translate(${size * 0.06}, ${size * 0.52})`}>
            <ellipse
              ref={addRingRef}
              cx={size * 0.44}
              cy={size * 0.04}
              rx={size * 0.48}
              ry={size * 0.12}
              fill="none"
              stroke="#ffffff10"
              strokeWidth="2"
            />
            <ellipse
              cx={size * 0.44}
              cy={size * 0.04}
              rx={size * 0.36}
              ry={size * 0.08}
              fill="none"
              stroke="#ffffff08"
              strokeWidth="1"
            />
          </g>
        )}
      </svg>
    );
  };

  return (
    <div
      ref={rootRef}
      className="relative min-h-screen overflow-x-hidden text-white mt-20 font-sans leading-relaxed antialiased"
    >
      {/* HERO (no header) */}
      <section className="relative z-20 pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-12">
          {/* Left column — text */}
          <div className="w-full lg:w-1/2">
            <h1 ref={heroTextRef} className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-tight font-semibold extrabold tracking-tight text-center sm:text-left mx-auto sm:mx-0"   style={{ fontFamily: "DeaconTest, sans-serif" }}>
              <span className="block overflow-hidden">
                <span className="word block transform translate-y-0">ThirdVizion 3D</span>
              </span>
              <span className="block overflow-hidden">
                <span className="word block text-transparent bg-clip-text bg-gradient-to-r from-white to-pink-300"></span>
              </span>
              <span className="block overflow-hidden">
                <span className="word block text-6xl md:text-8xl text-white">Service</span>
              </span>
            </h1>

            <p className="mt-6 text-lg text-slate-300 max-w-2xl"   style={{ fontFamily: "anta, sans-serif" }}>ThirdVizion delivers cinematic 3D assets, product visualizations and immersive scenes — modelled and textured for realtime and offline rendering. We craft optimized models, bake realistic materials, and export production-ready assets for web, games, and film.</p>

            <div className="mt-8 flex items-center gap-4">
              <button 
                className="cta-btn px-6 py-3 rounded-full bg-gradient-to-r from-purple-600 to-pink-500 text-black font-semibold shadow-lg relative overflow-hidden"
                onClick={createRipple}
                onMouseEnter={() => setIsButton1Hovered(true)}
                onMouseLeave={() => setIsButton1Hovered(false)}
              >
                <span className="relative z-10">Discover our work</span>
                
                {isButton1Hovered && (
                  <div className="absolute inset-0 rounded-full border-2 border-purple-400 animate-ping opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                )}
              </button>
              <a className="text-sm text-slate-400 hover:text-white transition">Request a quote →</a>
            </div>
          </div>

          {/* Right column — 3D-ish assembled planets */}
          <div className="w-full lg:w-1/2 relative flex items-center justify-center">
            <div className="relative w-[420px] h-[420px] lg:w-[520px] lg:h-[520px]">
              {/* shadowed orb */}
              <div className="absolute -left-10 -top-6 parallax-layer" style={{ zIndex: 5 }}>
                <div ref={addPlanetRef} className="transform-gpu">
                  <Planet id="a" size={220} color="#ff6b6b" rings={true} />
                </div>
              </div>

              <div className="absolute right-0 top-12 parallax-layer" style={{ zIndex: 6 }}>
                <div ref={addPlanetRef} className="transform-gpu scale-[0.86]">
                  <Planet id="b" size={160} color="#6b9bff" rings={false} />
                </div>
              </div>

              <div className="absolute left-6 bottom-4 parallax-layer" style={{ zIndex: 4 }}>
                <div ref={addPlanetRef} className="transform-gpu scale-[0.72]">
                  <Planet id="c" size={120} color="#9b6bff" rings={true} />
                </div>
              </div>

              {/* central core — stylized */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-48 h-48 rounded-full bg-gradient-to-br from-white/6 to-transparent border border-white/6 flex items-center justify-center backdrop-blur-sm">
                  <svg width="140" height="140" viewBox="0 0 140 140" aria-hidden>
                    <defs>
                      <linearGradient id="coreg" x1="0" x2="1">
                        <stop offset="0%" stopColor="#fff" stopOpacity="0.12" />
                        <stop offset="100%" stopColor="#ff9ac2" stopOpacity="0.06" />
                      </linearGradient>
                    </defs>
                    <circle cx="70" cy="70" r="38" fill="url(#coreg)" />
                    <g opacity="0.07">
                      <path d="M30 80 C 55 110, 85 110, 110 80" stroke="#fff" strokeWidth="1.2" fill="none" strokeLinecap="round" />
                    </g>
                  </svg>
                </div>
              </div>

              {/* orbit lines for extra drama */}
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 520 520" aria-hidden>
                <g stroke="#ffffff12" strokeWidth="1" fill="none">
                  <ellipse cx="260" cy="260" rx="210" ry="60" />
                  <ellipse cx="260" cy="260" rx="160" ry="40" />
                  <ellipse cx="260" cy="260" rx="120" ry="30" />
                </g>
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      {/* <section className="relative z-20 py-12">
        <div className="max-w-6xl mx-auto px-6">
          <h3 className="text-xl font-semibold text-pink-300 mb-6">What ThirdVizion provides</h3>

          <div className="features-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <FeatureCard title="Photoreal Models" desc="High-detail PBR models for film and product viz." icon={IconPlanet} />
            <FeatureCard title="Real-time Ready" desc="Optimized meshes and LODs for web / game engines." icon={IconLayers} />
            <FeatureCard title="Texturing & Baking" desc="Substance and hand-painted workflows; normal, AO and curvature bakes." icon={IconHeadline} />
            <FeatureCard title="AR / USDZ export" desc="Prepared exports for AR Quick Look and mobile preview." icon={IconCTA} />
            <FeatureCard title="Rigging & Animation" desc="Skeletons, simple rigs and demonstration animations." icon={IconA11y} />
            <FeatureCard title="Consulting" desc="Workflows, asset pipelines and performance audits." icon={IconTailwind} />
          </div>
        </div>
      </section> */}

      {/* LARGE CTA section */}
      {/* <section className="relative z-20 py-20">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-4xl font-extrabold"style={{ fontFamily: "DeaconTest, sans-serif" }}>Work with ThirdVizion</h2>
            <p className="mt-4 text-slate-300">Send us references, target platform and budgets — we'll reply with a scoped plan and asset pipeline.</p>
            <div className="mt-8 flex items-center justify-center gap-4">
              <button 
                className="cta-btn px-6 py-3 rounded-full bg-gradient-to-r from-purple-600 to-pink-500 text-black font-semibold shadow-2xl relative overflow-hidden"
                onClick={createRipple}
              >
                <span className="relative z-10">Start a project</span>
              </button>
              <button className="px-6 py-3 rounded-full border border-white/10 text-sm">View portfolio</button>
            </div>
          </div>

          <div className="mt-12 flex items-center justify-center">
            <svg className="w-[560px] h-[140px]" viewBox="0 0 560 140" aria-hidden>
              <g stroke="#ffffff10" strokeWidth="1.6" fill="none">
                <path d="M10 80 C 120 10, 220 120, 330 40 C 410 -10, 520 70, 550 50" />
              </g>
            </svg>
          </div>
        </div>
      </section> */}

      {/* No footer as requested */}
      
      <style jsx>{`
        .ripple {
          position: absolute;
          border-radius: 50%;
          background-color: rgba(255, 255, 255, 0.7);
          transform: scale(0);
          animation: ripple-animation 0.6s linear;
        }

        @keyframes ripple-animation {
          to {
            transform: scale(4);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
}


/* ----------------------- Helper components & icons ----------------------- */

function Stat({ label, value }) {
  return (
    <div className="flex items-start gap-3 bg-white/2 rounded-xl px-4 py-3 border border-white/6">
      <div className="w-12 h-12 rounded-md bg-gradient-to-br from-white/6 to-transparent flex items-center justify-center text-lg font-semibold">#</div>
      <div>
        <div className="text-sm text-slate-300">{label}</div>
        <div className="text-lg font-bold">{value}</div>
      </div>
    </div>
  );
}

function FeatureCard({ icon: Icon, title, desc }) {
  return (
    <article className="feature-card relative p-6 rounded-2xl bg-white/2 border border-white/6 hover:shadow-2xl transition-shadow duration-300">
      <div className="flex items-start gap-4">
        <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-700 to-pink-500 flex items-center justify-center">
          <Icon />
        </div>
        <div>
          <h5 className="font-semibold">{title}</h5>
          <p className="mt-1 text-sm text-slate-300">{desc}</p>
        </div>
      </div>
    </article>
  );
}

function ToolCard({ name, desc }) {
  return (
    <div className="p-4 rounded-xl bg-white/3 border border-white/6">
      <div className="flex items-center justify-between">
        <div>
          <div className="font-semibold">{name}</div>
          <div className="text-sm text-slate-300 mt-1">{desc}</div>
        </div>
        <div className="ml-4 w-10 h-10 rounded-md bg-white/5 flex items-center justify-center text-xs">{name[0]}</div>
      </div>
    </div>
  );
}

/* ----------------------- Simple inline SVG icons ----------------------- */
function IconLayers() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M12 3 L2 9 L12 15 L22 9 L12 3 Z" stroke="#fff" strokeWidth="1.2" />
    </svg>
  );
}

function IconPlanet() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
      <circle cx="12" cy="12" r="6" stroke="#fff" strokeWidth="1.2" />
      <path d="M3 12 C7 4, 17 4, 21 12" stroke="#fff" strokeWidth="1" opacity="0.7" />
    </svg>
  );
}

function IconHeadline() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
      <rect x="3" y="5" width="18" height="3" rx="1" stroke="#fff" strokeWidth="1.2" />
      <rect x="3" y="11" width="18" height="3" rx="1" stroke="#fff" strokeWidth="1.2" />
    </svg>
  );
}

function IconCTA() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M3 12 H21" stroke="#fff" strokeWidth="1.4" />
      <path d="M15 6 L21 12 L15 18" stroke="#fff" strokeWidth="1.4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function IconA11y() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
      <circle cx="12" cy="8" r="2" stroke="#fff" strokeWidth="1.2" />
      <path d="M5 20 C7 16, 17 16, 19 20" stroke="#fff" strokeWidth="1.2" fill="none" />
    </svg>
  );
}

function IconTailwind() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M2 12 C6 6, 18 6, 22 12" stroke="#fff" strokeWidth="1.2" />
      <path d="M2 16 C6 10, 18 10, 22 16" stroke="#fff" strokeWidth="1.2" opacity="0.8" />
    </svg>
  );
}