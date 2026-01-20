import React, { useEffect, useRef } from "react";
import reach from "/src/assets/HomeImages/contactBg.png";
import { ArrowRight } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function ContactHero() {
  const leftSideRef = useRef(null);
  const rightSideRef = useRef(null);

  useEffect(() => {
    // GSAP matchMedia for mobile-only animations
    const mm = gsap.matchMedia();

    // Mobile only (≤768px)
    mm.add("(max-width: 768px)", () => {
      // Left side (heading + paragraph) - slide from left
      gsap.fromTo(
        leftSideRef.current,
        {
          x: -100,
          opacity: 0,
        },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: leftSideRef.current,
            start: "top 80%",
            end: "top 50%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Right side (form) - slide from right
      gsap.fromTo(
        rightSideRef.current,
        {
          x: 100,
          opacity: 0,
        },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: rightSideRef.current,
            start: "top 80%",
            end: "top 50%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });

    // Desktop (>768px) - no animations, show immediately
    mm.add("(min-width: 769px)", () => {
      gsap.set([leftSideRef.current, rightSideRef.current], {
        x: 0,
        opacity: 1,
      });
    });

    return () => mm.revert();
  }, []);

  return (
    <section
      className="relative w-full overflow-hidden bg-transparent text-white pt-32 pb-32 sm:pt-40 sm:pb-40 md:pt-48 md:pb-48 lg:pt-56 lg:pb-56"
      style={{
        backgroundImage: `url(${reach})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* background glow lines */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_45%,#000_85%)]" />
        <div className="absolute left-1/2 top-1/2 h-[140%] w-px -translate-x-1/2 -translate-y-1/2 rotate-45 bg-gradient-to-b from-transparent via-amber-400/20 to-transparent" />
        <div className="absolute left-1/2 top-1/2 h-[140%] w-px -translate-x-1/2 -translate-y-1/2 -rotate-45 bg-gradient-to-b from-transparent via-amber-400/20 to-transparent" />
      </div>

      {/* content container */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8 overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-start">
          {/* LEFT SIDE — heading + paragraph */}
          <div ref={leftSideRef} className="space-y-6">
            <h1
              className="text-4xl md:text-5xl lg:text-6xl uppercase xl:text-7xl font-medium leading-tight font-outfit text-center sm:text-left mx-auto sm:mx-0"
              style={{ fontFamily: "DeaconTest, sans-serif", fontWeight: 600 }}
            >
              Let's Build Something Great{" "}
              <span className="text-yellow-400 text-center sm:text-left mx-auto sm:mx-0">
                Together
              </span>
            </h1>
            <p
              className="max-w-lg text-gray-300 text-xs md:text-lg leading-7 font-work-sans tracking-wide"
              style={{ fontFamily: "anta, sans-serif" }}
            >
              Ready to take your ideas to the next level? Our team is here to
              collaborate, innovate, and build custom digital solutions for your
              business. Whether you need AI-powered platforms, immersive AR/VR
              experiences, or scalable cloud services, we're ready to help you
              grow. Let's create something amazing together!
            </p>
          </div>

          {/* RIGHT SIDE — form */}
          <div
            ref={rightSideRef}
            className="w-full max-w-md md:ml-auto border-[#] text-3xl"
            style={{ fontFamily: "anta, Outfit" }}
          >
            <form className="space-y-4">
              <GradientInput placeholder="Name" />
              <GradientInput placeholder="E-mail" type="email" />
              <GradientTextarea placeholder="Tell about your Project" />

              <button
                type="submit"
                className="relative group flex items-center justify-center gap-2 rounded-full px-6 py-3 text-base font-medium tracking-wide text-white transition-all active:scale-[0.98] font-work-sans"
              >
                <span className="absolute inset-0 pointer-events-none"></span>

                <span className="relative z-10 text-yellow-400 flex items-center gap-2">
                  Get in touch
                  <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

/* --- Styled Inputs --- */
function GradientInput({ placeholder, type = "text" }) {
  return (
    <div className="relative rounded-full">
      {/* Top black & bottom yellow border layer */}
      <span className="absolute inset-0 rounded-full border-t border-t-black border-b-2 border-[#9f9f9f] pointer-events-none"></span>

      {/* Actual input field */}
      <input
        type={type}
        placeholder={placeholder}
        className="relative z-10 w-full rounded-full bg-transparent px-4 sm:px-5 py-3 text-sm sm:text-base text-white placeholder-yellow-400 outline-none focus:border-none font-work-sans"
      />
    </div>
  );
}

function GradientTextarea({ placeholder }) {
  return (
    <div className="relative rounded-xl">
      {/* Top black & bottom yellow border layer */}
      <span className="absolute inset-0 rounded-xl border-t border-t-black border-b-2 border-[#9f9f9f] pointer-events-none"></span>

      {/* Actual textarea field */}
      <textarea
        rows={4}
        placeholder={placeholder}
        className="relative z-10 w-full resize-none rounded-xl bg-transparent px-4 py-3 text-sm sm:text-base text-white border-[#9f9f9f] placeholder-yellow-400 outline-none focus:border-none font-work-sans"
      />
    </div>
  );
}
