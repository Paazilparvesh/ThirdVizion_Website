import React, { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import ScrollReveal from "scrollreveal";

import threed from "/src/assets/HomeImages/3d development.webp";
import gam from "/src/assets/HomeImages/gam.png";
import are from "/src/assets/HomeImages/ar.png";
import wih from "/src/assets/HomeImages/hiw.png";
import extra from "/src/assets/HomeImages/pon.png";

export default function Industries() {
  // 🔥 Responsive circle radius
  const [radius, setRadius] = useState(120);

  useEffect(() => {
    const updateRadius = () => {
      if (window.innerWidth < 640) setRadius(70); // mobile
      else if (window.innerWidth < 1024) setRadius(100); // tablet
      else if (window.innerWidth < 1536) setRadius(120); // laptop
      else setRadius(140); // 2xl screens
    };
    updateRadius();
    window.addEventListener("resize", updateRadius);
    return () => window.removeEventListener("resize", updateRadius);
  }, []);

  // 🔹 Circle positions
  const circles = [
    { id: 1, cx: 200, cy: 200, label: "Enterprise Solutions", img: threed },
    { id: 2, cx: 350, cy: 600, label: "Healthcare", img: gam },
    { id: 3, cx: 100, cy: 1000, label: "Education", img: are },
    { id: 4, cx: 300, cy: 1400, label: "Retail & E-commerce", img: wih },
    { id: 5, cx: 200, cy: 1800, label: "Manufacturing", img: extra },
  ];

  // 🔹 Path connecting circles
  const pathD = `
    M ${circles[0].cx} ${circles[0].cy - 200}
    ${circles
      .map((c, i) =>
        i > 0
          ? `C ${circles[i - 1].cx - 100} ${circles[i - 1].cy + 150}, ${
              c.cx + 100
            } ${c.cy - 150}, ${c.cx} ${c.cy}`
          : ""
      )
      .join(" ")}
  `;

  const pathRef = useRef(null);
  const svgRef = useRef(null);

  const [progresses, setProgresses] = useState([]);
  const [started, setStarted] = useState(false);
  const pathDuration = 6;

  // 👀 inView detection
  const isInView = useInView(svgRef, { once: true, margin: "-100px" });

  // ✨ ScrollReveal
  useEffect(() => {
    ScrollReveal().reveal(".industries-container", {
      duration: 1200,
      distance: "50px",
      origin: "bottom",
      easing: "ease-in-out",
      opacity: 0,
      reset: false,
    });
  }, []);

  // 🔥 calculate circle reveal timing
  useEffect(() => {
    if (!isInView) return;

    const pathEl = pathRef.current;
    if (!pathEl) return;

    const raf = requestAnimationFrame(() => {
      try {
        const total = pathEl.getTotalLength();
        const step = Math.max(2, Math.floor(total / 1200));

        const progs = circles.map((c) => {
          let minDist = Infinity;
          let bestLen = 0;
          for (let len = 0; len <= total; len += step) {
            const p = pathEl.getPointAtLength(len);
            const d = Math.hypot(p.x - c.cx, p.y - c.cy);
            if (d < minDist) {
              minDist = d;
              bestLen = len;
            }
          }
          return bestLen / total;
        });

        setProgresses(progs);
        setStarted(true);
      } catch (err) {
        console.error("Path measurement failed:", err);
        setProgresses(circles.map((_, i) => i / (circles.length - 1)));
        setStarted(true);
      }
    });

    return () => cancelAnimationFrame(raf);
  }, [isInView]);

  return (
    <section className="relative w-full min-h-screen bg-black text-white flex flex-col items-center justify-start py-16 sm:py-20 lg:py-28 overflow-hidden">
      {/* 🔥 Heading */}
      <div className="text-center mb-12 sm:mb-16 industries-container px-4">
        <p className="text-xs sm:text-sm text-gray-400 tracking-wide uppercase">
          Industry Applications
        </p>
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl 2xl:text-7xl font-extrabold mt-2 leading-tight">
          INDUSTRIES <br className="hidden sm:block" /> WE EMPOWER
        </h1>
      </div>

      {/* 🔥 SVG Path + Circles */}
      <div className="relative w-full max-w-[95%] sm:max-w-[700px] lg:max-w-[900px] 2xl:max-w-[1100px] mx-auto industries-container">
        <svg
          ref={svgRef}
          viewBox="0 0 500 2000"
          className="w-full h-[1500px] sm:h-[1800px] lg:h-[2000px] 2xl:h-[2200px] mx-auto"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMin meet"
        >
          {/* base faint path */}
          <path
            ref={pathRef}
            d={pathD}
            stroke="rgba(255,255,255,0.18)"
            strokeWidth="3"
            fill="none"
            strokeLinecap="round"
          />

          {/* glowing path */}
          <motion.path
            d={pathD}
            stroke="url(#glow)"
            strokeWidth="4"
            strokeLinecap="round"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={started ? { pathLength: 1 } : { pathLength: 0 }}
            transition={{ duration: pathDuration, ease: "easeInOut" }}
          />

          {/* gradient + glow filter */}
          <defs>
            <linearGradient id="glow" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#f43f5e" />
              <stop offset="50%" stopColor="#fbbf24" />
              <stop offset="100%" stopColor="#10b981" />
            </linearGradient>
            <filter id="softGlow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="10" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* 🔥 Circles + Labels */}
          {circles.map((c, idx) => {
            const prog = progresses[idx] ?? idx / (circles.length - 1);
            const delay = Math.max(0, pathDuration * prog - 0.15);
            const textX = c.cx + (idx % 2 === 0 ? -(radius + 60) : radius + 60);

            // 📏 Responsive font size for labels
            let fontSize = 12;
            if (window.innerWidth >= 640) fontSize = 14 + radius / 10;
            if (window.innerWidth >= 1024) fontSize = 16 + radius / 10;
            if (window.innerWidth >= 1536) fontSize = 18 + radius / 8;

            return (
              <motion.g
                key={c.id}
                initial={{ scale: 0.6, opacity: 0 }}
                animate={
                  started
                    ? { scale: 1, opacity: 1 }
                    : { scale: 0.6, opacity: 0 }
                }
                transition={{
                  delay,
                  type: "spring",
                  stiffness: 260,
                  damping: 24,
                }}
              >
                {/* background circle */}
                <motion.circle
                  cx={c.cx}
                  cy={c.cy}
                  r={radius}
                  fill="#111"
                  initial={{ r: 40 }}
                  animate={started ? { r: radius } : { r: 40 }}
                  transition={{ delay, duration: 0.6, ease: "easeOut" }}
                />

                {/* image mask */}
                <clipPath id={`clip-${c.id}`}>
                  <circle cx={c.cx} cy={c.cy} r={radius} />
                </clipPath>
                <motion.image
                  href={c.img}
                  x={c.cx - radius}
                  y={c.cy - radius}
                  width={radius * 2}
                  height={radius * 2}
                  preserveAspectRatio="xMidYMid slice"
                  clipPath={`url(#clip-${c.id})`}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={
                    started
                      ? { opacity: 1, scale: 1 }
                      : { opacity: 0, scale: 0.8 }
                  }
                  transition={{
                    delay: delay + 0.1,
                    duration: 0.6,
                    ease: "easeOut",
                  }}
                  style={{ transformOrigin: `${c.cx}px ${c.cy}px` }}
                />

                {/* glow ring */}
                <motion.circle
                  cx={c.cx}
                  cy={c.cy}
                  fill="none"
                  stroke="#ffffff"
                  strokeWidth={2}
                  initial={{ r: radius - 20, opacity: 0 }}
                  animate={
                    started
                      ? { r: radius + 20, opacity: 0.15 }
                      : { r: radius - 20, opacity: 0 }
                  }
                  transition={{
                    delay: delay + 0.12,
                    duration: 0.8,
                    ease: "easeOut",
                  }}
                  style={{ filter: "url(#softGlow)" }}
                />

                {/* label */}
                <motion.text
                  x={textX}
                  y={c.cy + 8}
                  textAnchor={idx % 2 === 0 ? "end" : "start"}
                  fill="#E6E7E8"
                  fontSize={fontSize}
                  fontWeight={700}
                  initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
                  animate={started ? { opacity: 1, x: 0 } : { opacity: 0 }}
                  transition={{
                    delay: delay + 0.2,
                    duration: 0.5,
                    ease: "easeOut",
                  }}
                  style={{ fontFamily: "inherit" }}
                >
                  {c.label}
                </motion.text>
              </motion.g>
            );
          })}
        </svg>
      </div>
    </section>
  );
}
