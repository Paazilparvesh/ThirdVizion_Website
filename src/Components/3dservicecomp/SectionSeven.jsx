"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function CTASection() {
  const sectionRef = useRef(null);
  const animationRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });

      timeline
        .from(".section-heading", {
          opacity: 0,
          y: 60,
          duration: 1,
          ease: "power4.out",
        })
        .from(
          ".section-subtext",
          { opacity: 0, y: 40, duration: 0.8, ease: "power3.out" },
          "-=0.6"
        )
        .from(
          ".section-highlight",
          { opacity: 0, y: 40, duration: 1, ease: "power3.out" },
          "-=0.5"
        )
        .from(
          ".section-benefits",
          { opacity: 0, y: 20, duration: 0.7, ease: "power2.out" },
          "-=0.5"
        )
        .from(
          ".section-btn",
          { opacity: 0, scale: 0.9, duration: 0.7, ease: "back.out(1.7)" },
          "-=0.4"
        );

      // Background animation elements
      if (animationRef.current) {
        const elements = animationRef.current.querySelectorAll('.anim-element');
        gsap.to(elements, {
          x: "random(-100, 100, 10)",
          y: "random(-50, 50, 10)",
          rotation: "random(-15, 15, 5)",
          duration: "random(3, 6, 0.5)",
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
        {/* Floating 3D Elements with Pink/Purple Gradient */}
        <div className="anim-element absolute top-1/4 left-1/4 transform -translate-x-1/2 -translate-y-1/2">
          <div className="w-64 h-64 opacity-10">
            <svg viewBox="0 0 200 200" className="w-full h-full">
              <path
                d="M100,50 C120,30 150,40 150,70 C150,100 120,110 100,90 C80,110 50,100 50,70 C50,40 80,30 100,50 Z"
                fill="url(#pink-purple-gradient)"
              />
              <defs>
                <linearGradient id="pink-purple-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#EC4899" stopOpacity="0.2" />
                  <stop offset="50%" stopColor="#D946EF" stopOpacity="0.15" />
                  <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0.2" />
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
                fill="url(#purple-pink-gradient)"
              />
              <defs>
                <linearGradient id="purple-pink-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.2" />
                  <stop offset="100%" stopColor="#EC4899" stopOpacity="0.15" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
        
        <div className="anim-element absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
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

      <div className="container mx-auto relative z-10">
        {/* Left-Right Layout with Center Gap */}
        <div className="max-w-7xl w-full flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-120 relative">
          
          {/* Left Column - Redesigned */}
          <div className="w-full lg:w-2/5">
            <div className="p-8 rounded-2xl hover:border-pink-500/30 transition-all duration-300 hover:translate-y-[-4px] hover:shadow-2xl hover:shadow-pink-500/10">
              {/* Tagline */}
              <div className="mb-6">
               
              </div>
              
              {/* Main Heading */}
              <h2 className="section-heading font-bold text-white text-3xl sm:text-4xl lg:text-5xl leading-tight mb-6" style={{ fontFamily: "DeaconTest, sans-serif" }}>
                Ready to Bring Your <span className="bg-gradient-to-r from-pink-400 to-purple-600 bg-clip-text text-transparent">3D Ideas to Life?</span>
              </h2>
              
              {/* Subtext */}
             
              
              {/* Benefits List */}
              <div className="section-benefits space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-gradient-to-r from-pink-600 to-purple-600 flex items-center justify-center">
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-300" style={{ fontFamily: "anta, sans-serif" }}>Professional 3D Modeling & Texturing</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-gradient-to-r from-pink-600 to-purple-600 flex items-center justify-center">
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-300" style={{ fontFamily: "anta, sans-serif" }}>Real-time Rendering & Animation</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-gradient-to-r from-pink-600 to-purple-600 flex items-center justify-center">
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-300" style={{ fontFamily: "anta, sans-serif" }}>VR/AR Integration Ready</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-gradient-to-r from-pink-600 to-purple-600 flex items-center justify-center">
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-300" style={{ fontFamily: "anta, sans-serif" }}>Fast Turnaround & Competitive Pricing</span>
                </div>
              </div>
            </div>
          </div>

          {/* Center Gap */}
         

          {/* Right Column - Redesigned */}
          <div className="w-full lg:w-2/5">
            <div className="p-8 rounded-2xl hover:border-purple-500/30 transition-all duration-300 hover:translate-y-[-4px] hover:shadow-2xl hover:shadow-purple-500/10">
              {/* Highlight Icon */}
              <div className="mb-6">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-pink-600/20 to-purple-600/20 flex items-center justify-center">
                  <svg className="w-6 h-6 text-pink-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
              </div>
              
              {/* Highlight Text */}
              <div className="section-highlight text-gray-300 text-lg leading-relaxed mb-8" style={{ fontFamily: "anta, sans-serif" }}>
              
                <p className="font-semibold text-white">
                  Get started with a <span className="text-pink-400">free consultation</span> and receive a custom quote for your project.
                </p>
              </div>
              
          
              
            
              
            </div>
          </div>

        </div>

   
     
      </div>
    </section>
  );
}