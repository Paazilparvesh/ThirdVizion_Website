import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import { motion } from "framer-motion";
import Logo from "/src/assets/Logo_5.png";

export default function About() {
  const containerRef = useRef(null);
  const capsuleRef = useRef(null);
  const logoRef = useRef(null);
  const itemsRef = useRef([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const lenis = new Lenis({ smooth: true, lerp: 0.08 });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // Capsule breathing animation
    gsap.to(capsuleRef.current, {
      scale: 1.05,
      rotate: 3,
      duration: 2,
      ease: "power1.inOut",
      repeat: -1,
      yoyo: true,
    });

    // Logo fade-in
    gsap.fromTo(
      logoRef.current,
      { opacity: 0, scale: 0.8, y: 30 },
      {
        opacity: 1,
        scale: 1,
        y: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: capsuleRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      }
    );

    // Counter + fade
    itemsRef.current.forEach((el) => {
      const numEl = el.querySelector(".highlight-num");
      const value = numEl.dataset.value;

      gsap.fromTo(
        numEl,
        { innerText: 0 },
        {
          innerText: value,
          duration: 2,
          ease: "power1.out",
          snap: { innerText: 1 },
          scrollTrigger: {
            trigger: el,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );

      gsap.fromTo(
        el,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
      lenis.destroy();
    };
  }, []);

  const highlights = [
    { num: 50, text: "Immersive Tech Projects Delivered" },
    { num: 25, text: "Enterprise Systems Implemented" },
    { num: 15, text: "Custom Applications Developed" },
    { num: 8, text: "Technology Domains Mastered" },
  ];

  return (
    <section
      ref={containerRef}
      className="relative bg-gradient-to-b from-black via-neutral-900 to-black text-white min-h-screen w-full overflow-hidden py-24"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-12 items-center">
        
        {/* LEFT */}
        <div className="px-6 flex flex-col gap-6">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ amount: 0.3 }}
            className="text-4xl md:text-5xl xl:text-[54px] font-extrabold 
            bg-clip-text text-transparent 
            bg-gradient-to-r from-[#F7E08C] via-[#F3C74F] to-[#D9A441] 
            md:text-center lg:text-left font-inter-tight"
            style={{ fontFamily: "DeaconTest, sans-serif", fontWeight: 600 }}
          >
            Transforming Businesses with Innovative Digital Technology.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ amount: 0.3 }}
            className="text-gray-300 md:text-center lg:text-left text-md xl:text-lg leading-snug"
            style={{ fontFamily: "anta, sans-serif" }}
          >
            We create innovative digital solutions that blend AR/VR, 3D design, cloud infrastructure, and custom software development. Our goal is to help businesses grow smarter, work faster, and lead through technology.
          </motion.p>
        </div>

        {/* CENTER CAPSULE */}
        <div className="flex justify-center items-center">
          <div
            ref={capsuleRef}
            className="relative w-80 h-80 md:w-96 md:h-96 lg:w-[45vw] lg:h-[50vh] 
            xl:w-full xl:h-[70vh] 2xl:h-[55vh] rounded-full 
            bg-gradient-to-tr 
from-[#F7E08C]/15 
to-[#D9A441]/15
            backdrop-blur-md 
            border border-[#F3C74F]/20
            shadow-[0_0_65px_rgba(243,199,79,0.30)]
            flex flex-col items-center justify-center"
          >
            <img
              ref={logoRef}
              src={Logo}
              className="w-48 h-48 md:w-56 md:h-56 lg:w-54 lg:h-54 xl:w-35 xl:h-35 
              z-10 drop-shadow-[0_0_25px_rgba(243,199,79,0.45)] object-contain"
            />

            {/* Golden aura */}
            <span className="absolute inset-0 rounded-full 
            bg-gradient-to-tr from-[#F7E08C]/15 to-[#D9A441]/15 
            animate-pulse blur-3xl" />
          </div>
        </div>

        {/* RIGHT HIGHLIGHTS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-12 px-6">
          {highlights.map((item, i) => (
            <div
              key={i}
              ref={(el) => (itemsRef.current[i] = el)}
              className="flex flex-col items-center gap-2"
            >
              <span
                className="highlight-num text-4xl md:text-5xl font-extrabold 
                bg-clip-text text-transparent 
                bg-gradient-to-r from-[#F7E08C] via-[#F3C74F] to-[#D9A441]"
                data-value={item.num}
                style={{ fontFamily: "anta, sans-serif" }}
              >
                0
              </span>

              <p
                className="text-gray-300 text-lg text-center"
                style={{ fontFamily: "anta, sans-serif" }}
              >
                {item.text}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
