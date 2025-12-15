"use client";
import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const steps = [
  {
    id: 1,
    icon: "🚀",
    title: "Consultation & Concept",
    description: "Discuss your vision, goals, and requirements for your 3D project during initial consultation"
  },
  {
    id: 2,
    icon: "🎨",
    title: "Design & Modeling",
    description: "Our artists create detailed 3D models with photorealistic textures and materials"
  },
  {
    id: 3,
    icon: "⚡",
    title: "Optimization & Integration",
    description: "Assets are optimized for real-time performance and integrated into your platform"
  },
  {
    id: 4,
    icon: "📦",
    title: "Delivery & Support",
    description: "Receive final files with documentation and ongoing technical support"
  },
];

export default function ServiceProcessSection() {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const subheadingRef = useRef(null);
  const stepsRef = useRef(null);
  const ctaRef = useRef(null);
  const animationRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      // Text animations
      gsap.fromTo(
        headingRef.current,
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: { trigger: headingRef.current, start: "top 80%" },
        }
      );
      gsap.fromTo(
        subheadingRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          delay: 0.3,
          ease: "power2.out",
          scrollTrigger: { trigger: subheadingRef.current, start: "top 85%" },
        }
      );
      gsap.fromTo(
        stepsRef.current.querySelectorAll(".step-card"),
        { opacity: 0, y: 40, scale: 0.9 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: "back.out(1.4)",
          scrollTrigger: { trigger: stepsRef.current, start: "top 80%" },
        }
      );

      // Background animation elements
      if (animationRef.current) {
        const elements = animationRef.current.querySelectorAll('.anim-element');
        gsap.to(elements, {
          x: "random(-50, 50, 5)",
          y: "random(-30, 30, 5)",
          rotation: "random(-10, 10, 2)",
          duration: "random(4, 8, 0.5)",
          ease: "sine.inOut",
          repeat: -1,
          yoyo: true,
        });
      }
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full min-h-screen flex items-center px-6 sm:px-12 lg:px-24 relative overflow-hidden"
    >
      {/* Background Animation Elements */}
      <div 
        ref={animationRef}
        className="absolute inset-0 pointer-events-none z-0"
      >
        {/* Floating 3D Elements */}
        <div className="anim-element absolute top-1/4 left-1/4 transform -translate-x-1/2 -translate-y-1/2">
          <div className="w-64 h-64 opacity-10">
            <svg viewBox="0 0 200 200" className="w-full h-full">
              <path
                d="M100,50 C120,30 150,40 150,70 C150,100 120,110 100,90 C80,110 50,100 50,70 C50,40 80,30 100,50 Z"
                fill="url(#pink-purple-gradient)"
              />
              <defs>
                <linearGradient id="pink-purple-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#EC4899" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0.3" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
        
        <div className="anim-element absolute bottom-1/3 right-1/4 transform translate-x-1/2 translate-y-1/2">
          <div className="w-48 h-48 opacity-15">
            <svg viewBox="0 0 200 200" className="w-full h-full">
              <path
                d="M100,60 C115,45 135,50 135,70 C135,90 115,95 100,80 C85,95 65,90 65,70 C65,50 85,45 100,60 Z"
                fill="url(#purple-gradient)"
              />
              <defs>
                <linearGradient id="purple-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.2" />
                  <stop offset="100%" stopColor="#EC4899" stopOpacity="0.2" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
        
        <div className="anim-element absolute top-1/2 right-1/3 transform -translate-y-1/2">
          <div className="w-32 h-32 opacity-20">
            <svg viewBox="0 0 200 200" className="w-full h-full">
              <path
                d="M100,70 C110,60 120,65 120,75 C120,85 110,90 100,80 C90,90 80,85 80,75 C80,65 90,60 100,70 Z"
                fill="url(#pink-gradient)"
              />
              <defs>
                <linearGradient id="pink-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#EC4899" stopOpacity="0.2" />
                  <stop offset="100%" stopColor="#D946EF" stopOpacity="0.2" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          {/* Tagline */}
          <div className="mb-4">
            <span className="inline-block px-4 py-1.5 text-xs font-medium tracking-wider uppercase bg-gradient-to-r from-pink-500/10 via-purple-500/5 to-purple-500/10 text-pink-300 rounded-lg border border-white/5 backdrop-blur-sm"   style={{ fontFamily: "DeaconTest, sans-serif" }}>
              Our Process
            </span>
          </div>
          
          {/* Main Heading */}
          <div ref={headingRef}>
            <h1 className="font-bold text-white text-4xl sm:text-5xl lg:text-6xl leading-tight mb-2"style={{ fontFamily: "DeaconTest, sans-serif" }}>
              Simple <span className="bg-gradient-to-r from-pink-400 to-purple-600 bg-clip-text text-transparent">4-Step</span> Process
            </h1>
          </div>
          
          {/* Subheading */}
          <p
            ref={subheadingRef}
            className="text-lg text-gray-400 max-w-2xl mx-auto"
      style={{ fontFamily: "DeaconTest, sans-serif" }}    >
            From concept to delivery - our streamlined workflow ensures exceptional 3D results
          </p>
        </div>

        {/* Steps Grid */}
        <div
          ref={stepsRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-16"
        >
          {steps.map((step, index) => (
            <div
              key={step.id}
              className="step-card group"
            >
              <div className="group p-5 rounded-xl bg-gradient-to-br from-gray-900/40 to-gray-800/20 border border-white/5 hover:border-pink-500/30 transition-all duration-300 hover:translate-y-[-2px] hover:shadow-2xl hover:shadow-pink-500/10 h-full flex flex-col items-center text-center">
                {/* Step Icon */}
                <div className="mb-4">
                  <div className="flex-shrink-0 w-16 h-16 rounded-full bg-gradient-to-br from-pink-600 to-purple-600 flex items-center justify-center shadow-lg shadow-pink-500/20 group-hover:scale-110 transition-transform duration-300 mb-4">
                    <span className="text-2xl text-white"style={{ fontFamily: "DeaconTest, sans-serif" }}>{step.icon}</span>
                  </div>
                </div>
                
                {/* Step Title */}
                <h3 className="text-white font-semibold text-lg mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-pink-300 group-hover:to-purple-300 group-hover:bg-clip-text transition-all"style={{ fontFamily: "DeaconTest, sans-serif" }}>
                  {step.title}
                </h3>
                
                {/* Step Description */}
                <p className="text-gray-400 text-sm leading-relaxed flex-grow"style={{ fontFamily: "anta, sans-serif" }}>
                  {step.description}
                </p>
                
                {/* Step Indicator */}
                <div className="mt-6">
                  <div className="relative">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-pink-600 to-purple-600 flex items-center justify-center shadow-lg shadow-purple-500/20">
                      <span className="text-white font-bold text-sm">{index + 1}</span>
                    </div>
                    {index < steps.length - 1 && (
                      <div className="absolute top-1/2 left-full w-full h-0.5 bg-gradient-to-r from-pink-500/30 to-purple-500/30 hidden lg:block"></div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      

       

       
      </div>
    </section>
  );
}