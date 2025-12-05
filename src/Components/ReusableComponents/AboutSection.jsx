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

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const lenis = new Lenis({ smooth: true, lerp: 0.08 });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    gsap.to(capsuleRef.current, {
      scale: 1.05,
      rotate: 3,
      duration: 2,
      ease: "power1.inOut",
      repeat: -1,
      yoyo: true,
    });

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

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
      lenis.destroy();
    };
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative bg-gradient-to-b from-black via-neutral-900 to-black text-white min-h-screen w-full overflow-hidden py-10 md:py-54"
    >
      <div className="max-w-8xl mx-auto grid grid-cols-1 lg:grid-cols-2 items-center px-4 md:px-13">

        {/* LEFT SIDE */}
        <div className="flex flex-col gap-6 mt-10 md:mt-0">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ amount: 0.3 }}
            className="text-3xl sm:text-4xl md:text-5xl xl:text-[54px] font-extrabold 
            bg-clip-text text-transparent 
            bg-gradient-to-r from-[#F7E08C] via-[#F3C74F] to-[#D9A441] 
            text-center md:text-center lg:text-left font-inter-tight leading-tight"
            style={{ fontFamily: 'DeaconTest, sans-serif', fontWeight: 600 }}
          >
            Transforming Businesses<br />
            with Innovative<br />
            Digital Technology.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ amount: 0.3 }}
            className="text-gray-300 md:text-center lg:text-left text-base sm:text-md xl:text-lg leading-relaxed sm:leading-snug px-4 md:px-0"
            style={{ fontFamily: 'anta, sans-serif' }}
          >
            We create innovative digital solutions that blend AR/VR, 3D design, cloud infrastructure, and custom software development. Our goal is to help businesses grow smarter, work faster, and lead through technology.
          </motion.p>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex justify-center lg:justify-end items-center mt-10 md:mt-0 pr-0 lg:pr-20">
          <div
            ref={capsuleRef}
            className="relative 
            w-[280px] h-[280px] 
            sm:w-[320px] sm:h-[320px]
            md:w-72 md:h-72 
            lg:w-[38vw] lg:h-[40vh]
            xl:w-[32vw] xl:h-[45vh] 
            2xl:h-[40vh]
            rounded-full 
            bg-gradient-to-tr from-[#F7E08C]/15 to-[#D9A441]/15
            backdrop-blur-md 
            border border-[#F3C74F]/20
            shadow-[0_0_55px_rgba(243,199,79,0.28)]
            flex flex-col items-center justify-center"
          >
            <img
              ref={logoRef}
              src={Logo}
              className="w-32 h-32 
              sm:w-36 sm:h-36 
              md:w-44 md:h-44 
              lg:w-40 lg:h-40 
              xl:w-36 xl:h-36 
              z-10 drop-shadow-[0_0_25px_rgba(243,199,79,0.45)] object-contain"
              alt="Logo"
            />

            <span className="absolute inset-0 rounded-full 
              bg-gradient-to-tr from-[#F7E08C]/15 to-[#D9A441]/15 
              animate-pulse blur-3xl" />
          </div>
        </div>

      </div>
    </section>
  );
}