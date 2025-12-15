import React, { useEffect, useRef } from "react";
import Lottie from "lottie-react";
import processorAnimation from "/src/assets/Processor.json";
const gsap = window.gsap;
const ScrollTrigger = window.ScrollTrigger;

export default function SectionTwo() {
  const sectionRef = useRef(null);

  // GSAP animation logic
  useEffect(() => {
    if (gsap && ScrollTrigger) {
      gsap.registerPlugin(ScrollTrigger);

      const ctx = gsap.context(() => {
        const tl = gsap.timeline({
          defaults: { ease: "power3.out" },
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
            end: "bottom 20%",
            toggleActions: "play none none none",
          },
        });

        tl.fromTo(
          ".anim-text",
          { y: 60, opacity: 0, scale: 0.95 },
          { y: 0, opacity: 1, scale: 1, duration: 1, stagger: 0.15 }
        );
      }, sectionRef);

      return () => ctx.revert();
    }
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full min-h-screen flex items-center px-6 sm:px-12 lg:px-24 "
    >
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
        {/* --- Left Side: Lottie Animation --- */}
        <div className="w-full lg:w-1/2 flex items-center justify-center lg:justify-start">
          <div className="relative w-full max-w-lg">
            <div className="absolute inset-0 bg-gradient-to-r from-pink-500/10 to-purple-500/10 blur-3xl rounded-full"></div>
            {/* <Lottie 
              animationData={processorAnimation} 
              className="relative z-10"
            /> */}
          </div>
        </div>

        {/* --- Right Side: Enhanced Content --- */}
        <div className="w-full lg:w-1/2 flex flex-col items-start text-left max-w-2xl">
          {/* Tagline */}
          <div className="mb-4">
           
          </div>
          
          {/* Main Heading */}
          <h1 className="anim-text font-bold text-white text-4xl sm:text-5xl lg:text-6xl leading-tight mb-10"  style={{ fontFamily: "DeaconTest, sans-serif" }}>
            What Makes <span className="bg-gradient-to-r from-pink-400 to-purple-600 bg-clip-text text-transparent" >ThirdVizion</span> Unique 
          </h1>
          
          {/* Enhanced Specialties Grid */}
          <div className="anim-text grid grid-cols-1 md:grid-cols-2 gap-5 mb-10 w-full" style={{ fontFamily: "anta, sans-serif" }}>
            {/* Column 1 */}
            <div className="space-y-5">
              <div className="group p-5 rounded-xl bg-gradient-to-br from-gray-900/40 to-gray-800/20 border border-white/5 hover:border-pink-500/30 transition-all duration-300 hover:translate-y-[-2px] hover:shadow-2xl hover:shadow-pink-500/10">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-gradient-to-br from-pink-600 to-purple-600 flex items-center justify-center shadow-lg shadow-pink-500/20 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-white font-bold text-sm">01</span>
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-lg mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-pink-300 group-hover:to-purple-300 group-hover:bg-clip-text transition-all">
                      Photoreal Excellence
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      Cinematic PBR models with industry-leading material accuracy for film & visualization.
                    </p>
                  </div>
                </div>
              </div>

              <div className="group p-5 rounded-xl bg-gradient-to-br from-gray-900/40 to-gray-800/20 border border-white/5 hover:border-purple-500/30 transition-all duration-300 hover:translate-y-[-2px] hover:shadow-2xl hover:shadow-purple-500/10">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-gradient-to-br from-pink-600 to-purple-600 flex items-center justify-center shadow-lg shadow-purple-500/20 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-white font-bold text-sm">02</span>
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-lg mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-pink-300 group-hover:to-purple-300 group-hover:bg-clip-text transition-all">
                      Real-time Optimization
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      Performance-optimized assets with automated LOD systems for web & game engines.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Column 2 */}
            <div className="space-y-5">
              <div className="group p-5 rounded-xl bg-gradient-to-br from-gray-900/40 to-gray-800/20 border border-white/5 hover:border-pink-500/30 transition-all duration-300 hover:translate-y-[-2px] hover:shadow-2xl hover:shadow-pink-500/10">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-gradient-to-br from-pink-600 to-purple-600 flex items-center justify-center shadow-lg shadow-pink-500/20 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-white font-bold text-sm">03</span>
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-lg mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-pink-300 group-hover:to-purple-300 group-hover:bg-clip-text transition-all">
                      Cross-platform AR/VR Ready
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      USDZ & glTF exports optimized for AR Quick Look and metaverse platforms.
                    </p>
                  </div>
                </div>
              </div>

              <div className="group p-5 rounded-xl bg-gradient-to-br from-gray-900/40 to-gray-800/20 border border-white/5 hover:border-purple-500/30 transition-all duration-300 hover:translate-y-[-2px] hover:shadow-2xl hover:shadow-purple-500/10">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-gradient-to-br from-pink-600 to-purple-600 flex items-center justify-center shadow-lg shadow-purple-500/20 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-white font-bold text-sm">04</span>
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-lg mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-pink-300 group-hover:to-purple-300 group-hover:bg-clip-text transition-all">
                      Production Pipeline Solutions
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      Custom automation scripts and pipeline integration for studio workflows.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced Divider */}
        
      
        </div>
      </div>
    </section>
  );
}