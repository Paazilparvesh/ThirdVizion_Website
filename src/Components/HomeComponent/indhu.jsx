// src/components/Industries.jsx
import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import threed from "/src/assets/indh/search.png";
import gam from "/src/assets/indh/second.png";
import are from "/src/assets/indh/tool.png";
import wih from "/src/assets/indh/dounload.png";
import bit from "/src/assets/indh/succes.png";

gsap.registerPlugin(ScrollTrigger);

export default function Indhu() {
  const [radius, setRadius] = useState(10);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);

  const svgRef = useRef(null);
  const pathRef = useRef(null);
  const containerRef = useRef(null);

  // PRECISE COLOR TRANSITION CONTROL
  const colorTransitions = {
    transitions: [
      {
        startProgress: 0.0,
        endProgress: 0.25,
        color: "#fb923c",
        label: "DISCOVER Phase"
      },
      {
        startProgress: 0.25,
        endProgress: 0.50,
        color: "#f472b6",
        label: "ARCHITECT Phase"
      },
      {
        startProgress: 0.45,
        endProgress: 0.75,
        color: "#4ade80",
        label: "BUILD Phase"
      },
      {
        startProgress: 0.65,
        endProgress: 0.85,
        color: "#f87171",
        label: "ELEVATE Phase"
      },
      {
        startProgress: 0.85,
        endProgress: 1.0,
        color: "#FFC016",
        label: "SUCCESS Phase"
      }
    ],
    
    useSingleColor: false,
    singleColor: "#FFC016",
    pulseEffect: true,
    pulseIntensity: 0.2,
    glowEffect: true,
    glowIntensity: 0.3,
    strokeWidth: 5,
    strokeOpacity: 1
  };

  // Responsive detection
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
      if (window.innerWidth < 240) setRadius(30);
      else if (window.innerWidth < 1000) setRadius(15);
      else setRadius(80);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const svgWidth = 6500;
  const leftShift = 150;
  const circleSpacing = svgWidth / (5 + 1);

  const circles = [
    {
      id: 1,
      label: "DISCOVER",
      description:
        "We begin by understanding your business goals, vision, and challenges. Our team studies every detail to find the right digital strategy for your brand.",
      img: threed,
      cx: circleSpacing * 0.9 - leftShift,
      cy: 200,
      color: colorTransitions.transitions[0].color,
      progressStart: colorTransitions.transitions[0].startProgress,
      progressEnd: colorTransitions.transitions[0].endProgress,
    },
    {
      id: 2,
      label: "ARCHITECT",
      description:
        "We design robust and scalable system architectures using the latest technologies and best industry practices.",
      img: gam,
      cx: circleSpacing * 2 - leftShift,
      cy: 300,
      color: colorTransitions.transitions[1].color,
      progressStart: colorTransitions.transitions[1].startProgress,
      progressEnd: colorTransitions.transitions[1].endProgress,
    },
    {
      id: 3,
      label: "BUILD",
      description:
        "We build your solution with cutting-edge technologies and agile methodologies, ensuring code quality and maintainability.",
      img: are,
      cx: circleSpacing * 3.1 - leftShift,
      cy: 200,
      color: colorTransitions.transitions[2].color,
      progressStart: colorTransitions.transitions[2].startProgress,
      progressEnd: colorTransitions.transitions[2].endProgress,
    },
    {
      id: 4,
      label: "ELEVATE",
      description:
        "We conduct comprehensive testing to ensure your solution is bug-free, performs optimally, and delivers exceptional user experience.",
      img: wih,
      cx: circleSpacing * 4.2 - leftShift,
      cy: 300,
      color: colorTransitions.transitions[3].color,
      progressStart: colorTransitions.transitions[3].startProgress,
      progressEnd: colorTransitions.transitions[3].endProgress,
    },
    {
      id: 5,
      label: "SUCCESS",
      description:
        "Success isn't a destination—it's a journey of constant growth. We empower your business to achieve measurable results through strategic execution, data-driven insights, and relentless improvement—ensuring your goals aren't just met, but exceeded.",
      img: bit,
      cx: circleSpacing * 5.35 - leftShift,
      cy: 200,
      color: colorTransitions.transitions[4].color,
      progressStart: colorTransitions.transitions[4].startProgress,
      progressEnd: colorTransitions.transitions[4].endProgress,
    },
  ];

  // Function to get current color based on scroll progress
  const getCurrentColor = (progress) => {
    if (colorTransitions.useSingleColor) {
      return colorTransitions.singleColor;
    }
    
    const currentTransition = colorTransitions.transitions.find(
      transition => progress >= transition.startProgress && progress <= transition.endProgress
    );
    
    return currentTransition ? currentTransition.color : colorTransitions.transitions[0].color;
  };

  // Function to create gradient stops for precise color transitions
  const getPreciseGradientStops = () => {
    if (colorTransitions.useSingleColor) {
      return [
        <stop key="single-start" offset="0%" stopColor={colorTransitions.singleColor} />,
        <stop key="single-end" offset="100%" stopColor={colorTransitions.singleColor} />
      ];
    }

    const gradientStops = [];
    
    colorTransitions.transitions.forEach((transition, index) => {
      gradientStops.push(
        <stop 
          key={`start-${index}`}
          offset={`${transition.startProgress * 100}%`} 
          stopColor={transition.color}
        />
      );
      
      gradientStops.push(
        <stop 
          key={`end-${index}`}
          offset={`${transition.endProgress * 100}%`} 
          stopColor={transition.color}
        />
      );
    });

    return gradientStops;
  };

  // Function to apply pulse animation
  const applyPulseEffect = () => {
    if (!colorTransitions.pulseEffect || !pathRef.current) return;
    
    const path = pathRef.current;
    gsap.to(path, {
      strokeOpacity: 1 - colorTransitions.pulseIntensity,
      duration: 1.5,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    });
  };

  // Function to apply glow effect
  const applyGlowEffect = () => {
    if (!colorTransitions.glowEffect || !pathRef.current) return;
    
    const path = pathRef.current;
    path.style.filter = `drop-shadow(0 0 ${colorTransitions.glowIntensity * 8}px currentColor)`;
  };

  // --- MOBILE SIMPLE HORIZONTAL SCROLL VERSION ---
  if (isMobile) {
    return (
      <section className="bg-black text-white w-full py-16 px-4 flex flex-col items-center">
        {/* Heading */}
        <div
          className="text-center mb-10"
          style={{ fontFamily: "Outfit, sans-serif" }}
        >
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl  capitalize text-white">
            how we <span className="text-[#FFC016]">deliver</span> excellence
          </h1>
        </div>

        {/* Horizontal scroll cards */}
        <div className="w-[280px] flex overflow-x-auto space-x-5 scrollbar-hide snap-x snap-mandatory">
          {circles.map((c) => (
            <div
              key={c.id}
              className="min-w-[250px] max-w-[260px] bg-[#111] border border-[#222] rounded-2xl p-5 flex-shrink-0 snap-center text-center"
            >
              <div 
                className="w-20 h-20 mx-auto mb-4 rounded-full bg-[#1a1a1a] border flex items-center justify-center"
                style={{ borderColor: c.color }}
              >
                <img
                  src={c.img}
                  alt={c.label}
                  className="w-12 h-12 object-contain"
                  loading="lazy"
                />
              </div>
              <h2
                className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-2"
                style={{ 
                  fontFamily: "Outfit, sans-serif",
                  color: c.color 
                }}
              >
                {c.label}
              </h2>
              <p
                className="text-xs md:text-lg text-gray-300 leading-relaxed"
                style={{ fontFamily: "Work Sans, sans-serif" }}
              >
                {c.description}
              </p>
            </div>
            
          ))}
        </div>
        {/* Scroll hint at bottom */}
<div className="mt-6 text-center flex items-center justify-center gap-2 opacity-70 animate-pulse">
  <svg className="w-4 h-4 text-gray-300 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
      d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
  </svg>

  <span className="text-gray-300 text-sm">Scroll left to know more</span>

  <svg className="w-4 h-4 text-gray-300 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
      d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
  </svg>
</div>

      </section>
    );
  }

  // --- DESKTOP ORIGINAL DESIGN ---
  const splitDescription = (description) => {
    const words = description.split(" ");
    const totalWords = words.length;
    const targetLines = 3;
    const wordsPerLine = Math.ceil(totalWords / targetLines);
    const lines = [];
    let currentLine = [];
    let currentWordCount = 0;

    words.forEach((word, index) => {
      currentLine.push(word);
      currentWordCount++;
      if (currentWordCount >= wordsPerLine || index === words.length - 1) {
        if (currentLine.length > 2 || index === words.length - 1) {
          lines.push(currentLine.join(" "));
          currentLine = [];
          currentWordCount = 0;
        }
      }
    });
    while (lines.length < targetLines) lines.push("");
    return lines.slice(0, targetLines);
  };

  const pathD = `
    M ${circles[0].cx} ${circles[0].cy}
    ${circles
      .slice(1)
      .map((circle, i) => {
        const prevCircle = circles[i];
        const controlPoint1 = {
          x: prevCircle.cx + (circle.cx - prevCircle.cx) * 0.25,
          y: prevCircle.cy,
        };
        const controlPoint2 = {
          x: circle.cx - (circle.cx - prevCircle.cx) * 0.25,
          y: circle.cy,
        };
        return `C ${controlPoint1.x} ${controlPoint1.y}, ${controlPoint2.x} ${controlPoint2.y}, ${circle.cx} ${circle.cy}`;
      })
      .join(" ")}
  `;

  useEffect(() => {
    if (isMobile) return;
    
    const section = containerRef.current;
    const svg = svgRef.current;
    const path = pathRef.current;
    
    if (!section || !svg || !path) return;

    // Clean up any existing ScrollTriggers
    ScrollTrigger.getAll().forEach((st) => {
      if (st.trigger === section || st.trigger === svg || st.vars?.trigger === section) {
        st.kill();
      }
    });

    const totalLength = path.getTotalLength();
    gsap.set(path, { 
      strokeDasharray: totalLength, 
      strokeDashoffset: totalLength,
      strokeWidth: colorTransitions.strokeWidth,
      strokeOpacity: colorTransitions.strokeOpacity
    });

    // Apply visual effects
    applyPulseEffect();
    applyGlowEffect();

    // FIXED: Proper scroll distance calculation to avoid white space
    const getScrollAmount = () => {
      const svgWidth = svg.scrollWidth;
      const viewportWidth = window.innerWidth;
      return -(svgWidth - viewportWidth);
    };

    const scrollTween = gsap.to(svg, {
      x: getScrollAmount,
      ease: "none",
      scrollTrigger: {
        trigger: section,
        start: "top top",
        end: () => `+=${Math.abs(getScrollAmount())}`,
        scrub: 1,
        pin: true,
        anticipatePin: 1,
        invalidateOnRefresh: true,
        pinSpacing: true,
        markers: false,
      },
    });

    const pathAnimation = gsap.to(path, {
      strokeDashoffset: 0,
      ease: "none",
      scrollTrigger: {
        trigger: section,
        start: "top top",
        end: () => `+=${Math.abs(getScrollAmount())}`,
        scrub: 1,
        invalidateOnRefresh: true,
      },
    });

    // PRECISE COLOR TRANSITION CONTROL BASED ON SCROLL PROGRESS
    const colorAnimation = gsap.to({}, {
      duration: 1,
      scrollTrigger: {
        trigger: section,
        start: "top top",
        end: () => `+=${Math.abs(getScrollAmount())}`,
        scrub: 0.1,
        onUpdate: (self) => {
          const progress = self.progress;
          const currentColor = getCurrentColor(progress);
          
          // Update the path color
          if (path) {
            path.style.stroke = currentColor;
          }
          
          // Update circle colors based on progress
          circles.forEach((circle) => {
            if (progress >= circle.progressStart && progress <= circle.progressEnd) {
              const circleElement = document.querySelector(`circle[cx="${circle.cx}"]`);
              if (circleElement) {
                circleElement.style.strokeWidth = "3";
                circleElement.style.filter = "drop-shadow(0 0 8px currentColor)";
              }
            }
          });
        },
      },
    });

    // Refresh ScrollTrigger on window resize
    const handleResize = () => {
      ScrollTrigger.refresh();
    };

    window.addEventListener('resize', handleResize);

    // Cleanup function
    return () => {
      window.removeEventListener('resize', handleResize);
      scrollTween?.kill();
      pathAnimation?.kill();
      colorAnimation?.kill();
      
      // Kill all ScrollTriggers associated with this section
      ScrollTrigger.getAll().forEach((st) => {
        if (st.trigger === section || st.vars?.trigger === section) {
          st.kill();
        }
      });
    };
  }, [isMobile]);

  return (
    <section
      ref={containerRef}
      className="relative w-full min-h-screen overflow-hidden bg-black text-white flex items-center justify-start py-16 isolate"
    >
      <div className="absolute inset-0 bg-black" />
      
      <div
        className="absolute top-24 left-1/2 -translate-x-1/2 text-center z-10 w-full px-4"
        style={{ fontFamily: "Outfit, sans-serif" }}
      >
        <p className="text-xs sm:text-sm text-[#FFC016] tracking-wide uppercase mb-2">
          Our Process
        </p>
        <h1
          className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl  leading-tight text-[#ffffff] capitalize"
          style={{ textShadow: "none" }}
        >
          how we <span className="text-[#FFC016]">deliver</span> excellence
        </h1>
      </div>

      <div className="relative flex-shrink-0 w-full h-[600px] lg:h-[700px] 2xl:h-[800px] z-10 overflow-visible">
        <svg
          ref={svgRef}
          viewBox={`0 0 ${svgWidth} 600`}
          className="w-[6000px] h-full"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid meet"
        >
          {/* Background path */}
          <path
            d={pathD}
            stroke="rgba(255, 255, 255, 0.05)"
            strokeWidth="3"
            fill="none"
            strokeLinecap="round"
          />

          {/* Main animated path with precise color control */}
          <path
            ref={pathRef}
            d={pathD}
            stroke={colorTransitions.useSingleColor ? colorTransitions.singleColor : "currentColor"}
            strokeWidth={colorTransitions.strokeWidth}
            strokeLinecap="round"
            fill="none"
            strokeOpacity={colorTransitions.strokeOpacity}
          />

          <defs>
            {/* Gradient definition (backup for gradient mode) */}
            <linearGradient id="gradientGlow" x1="0" y1="0" x2="1" y2="0">
              {getPreciseGradientStops()}
            </linearGradient>
            
            {/* Glow filter */}
            {colorTransitions.glowEffect && (
              <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation={colorTransitions.glowIntensity * 4} result="coloredBlur"/>
                <feMerge> 
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
            )}
          </defs>

          {circles.map((c) => {
            const labelY = c.cy + radius + 70;
            const descStartY = labelY + 50;
            const lineHeight = 28;
            const fontSize =
              window.innerWidth >= 1536
                ? 18 + radius / 7
                : window.innerWidth >= 1024
                ? 16 + radius / 9
                : 12;
            const descriptionLines = splitDescription(c.description);

            return (
              <g key={c.id}>
                <circle
                  cx={c.cx}
                  cy={c.cy}
                  r={radius}
                  fill="transparent"
                  stroke={c.color}
                  strokeWidth="2"
                />
                <clipPath id={`clip-${c.id}`}>
                  <circle cx={c.cx} cy={c.cy} r={radius} />
                </clipPath>
                <image
                  href={c.img}
                  x={c.cx - radius}
                  y={c.cy - radius}
                  width={radius * 2}
                  height={radius * 2}
                  preserveAspectRatio="xMidYMid slice"
                  clipPath={`url(#clip-${c.id})`}
                />
                <rect
                  x={c.cx - 220}
                  y={labelY - 25}
                  width="440"
                  height="130"
                  fill="rgba(0, 0, 0, 0.85)"
                  rx="15"
                />
                <text
                  x={c.cx}
                  y={labelY}
                  textAnchor="middle"
                  fill={c.color}
                  fontSize={fontSize * 1.7}
                  fontWeight={400}
                  style={{ fontFamily: "Outfit, sans-serif" }}
                >
                  {c.label}
                </text>
                {descriptionLines.map((line, i) => (
                  <text
                    key={i}
                    x={c.cx}
                    y={descStartY + i * lineHeight}
                    textAnchor="middle"
                    fill="#FFFFFF"
                    fontSize={fontSize * 0.65}
                    fontWeight={400}
                    style={{
                      fontFamily: "Work Sans, sans-serif",
                    }}
                  >
                    {line}
                  </text>
                ))}
              </g>
            );
          })}
        </svg>
      </div>
    </section>
  );
}
