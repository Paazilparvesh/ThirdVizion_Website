import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import qqq from "/src/assets/qqq.mp4";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

export default function AppHero() {
  const wrapperRef = useRef(null);
  const imgHolderRef = useRef(null);
  const blackScreenRef = useRef(null);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    const imgHolder = imgHolderRef.current;
    const blackScreen = blackScreenRef.current;

    if (!wrapper || !imgHolder || !blackScreen) return;

    const innerVideo = imgHolder.querySelector("video");

    ScrollTrigger.getAll().forEach((t) => t.kill());

    // Timeline create pannurom - scale and fade sequence ku
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: wrapper,
        start: "top top",
        end: "bottom bottom",
        scrub: 1,
        pin: true,
        anticipatePin: 1,
      },
    });

    // First: Scale animation - 0.8 to 3.5 (inu zoom aagum)
    tl.fromTo(
      imgHolder,
      { scale: 0.8 },
      {
        scale: 3.5,
        ease: "power2.inOut",
        transformOrigin: "center center",
        duration: 0.6, // 60% of scroll
      }
    );

    // Second: Fade animation - apuram fade aagum
    tl.to(
      imgHolder,
      {
        opacity: 0,
        ease: "power2.out",
        duration: 0.4, // 40% of scroll
      },
      "-=0.1" // Slight overlap
    );

    // Black screen fade in - video fade aagura apuram varum
    gsap.fromTo(
      blackScreen,
      { opacity: 0 },
      {
        opacity: 1,
        ease: "power2.in",
        scrollTrigger: {
          trigger: wrapper,
          start: "top+=50% top",
          end: "top+=90% top",
          scrub: 1,
        },
      }
    );

    // Border radius animation - smooth ahha maarும்
    if (innerVideo) {
      gsap.fromTo(
        innerVideo,
        { borderRadius: "3rem" },
        {
          borderRadius: "0rem",
          ease: "power2.inOut",
          scrollTrigger: {
            trigger: wrapper,
            start: "top top",
            end: "top+=50% top",
            scrub: 1,
          },
        }
      );
    }

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <div className="bg-black text-white font-sans overflow-x-hidden mb-[-10vh]">
      {/* Hero text section */}
      <section className="mt-40 lg:mt-0 lg:h-screen flex flex-col justify-center items-center text-center px-4 sm:px-6 md:px-10 lg:px-16 xl:px-24 relative z-10">
        <h1
          className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-medium mb-4 text-[#ff8904]"
          style={{ fontFamily: "DeaconTest, sans-serif" }}
        >
          We Craft Seamless Mobile Experiences
        </h1>

        <p
          className="text-gray-400 text-sm hidden sm:block sm:text-base md:text-lg max-w-md sm:max-w-xl lg:max-w-2xl mb-6"
          style={{ fontFamily: "anta, sans-serif" }}
        >
          Transforming ideas into intuitive and engaging mobile applications
          that drive success.
        </p>

        <Link to="/contact">
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true, amount: 0.3 }}
            className="inline-flex items-center justify-center gap-2 rounded-xl sm:rounded-2xl border border-[#ff8904]/40 bg-black px-5 sm:px-6 md:px-8 py-3 sm:py-4 font-medium sm:font-semibold tracking-wide text-sm sm:text-base md:text-lg shadow-[0_0_10px_rgba(0,211,243,0.3)] backdrop-blur-md transition-all duration-500 hover:shadow-[0_0_25px_rgba(255,137,4,0.5)] hover:scale-105 text-[#ff8904]"
            style={{ fontFamily: "anta, sans-serif" }}
          >
            Get Started
          </motion.button>
        </Link>
      </section>

      {/* Scroll-through section */}
      <div
        ref={wrapperRef}
        className="relative w-full min-h-[200vh] flex justify-center items-start overflow-hidden"
      >
        {/* Black screen overlay */}
        <div
          ref={blackScreenRef}
          className="fixed inset-0 bg-black opacity-0 z-40 pointer-events-none"
        />

        {/* Video holder */}
        <div
          ref={imgHolderRef}
          className="w-full flex items-center justify-center relative z-20"
        >
          <video
            src={qqq}
            autoPlay
            loop
            muted
            playsInline
            className="w-56 sm:w-64 md:w-80 lg:w-[20rem] xl:w-[22rem] 2xl:w-[20rem]  md:mt-20 object-contain rounded-3xl"
          />
        </div>
      </div>
    </div>
  );
}
