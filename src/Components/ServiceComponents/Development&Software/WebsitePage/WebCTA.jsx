import React from "react";
import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";
import TextReveal from "/src/Hooks/TextReveal.jsx";

const AnimatedCounter = ({ value, suffix = "" }) => {
  const ref = useRef(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    damping: 50,
    stiffness: 100,
  });
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [motionValue, isInView, value]);

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = Math.floor(latest) + suffix;
      }
    });
  }, [springValue, suffix]);

  return <span ref={ref}>0{suffix}</span>;
};

const WebCTA = () => {
  const statsRef = useRef(null);
  const isStatsInView = useInView(statsRef, { once: true, amount: 0.3 });

  const stats = [
    { value: 98, label: "Client Satisfaction", suffix: "%" },
    { value: 100, label: "Design Quality", suffix: "%" },
    { value: 24, label: "Support Available", suffix: "/5" },
  ];

  return (
    <section className="w-full py-24 px-6 flex flex-col items-center text-center relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#00d3f3]/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#00d3f3]/5 rounded-full blur-3xl animate-pulse delay-700"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 w-full">
        <TextReveal>
          <motion.h2
            className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-medium mb-6 text-[#00d3f3]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            style={{ fontFamily: "DeaconTest, sans-serif" }}
          >
            Transform Your Digital Presence
          </motion.h2>
        </TextReveal>

        <TextReveal delay={0.2}>
          <motion.p
            className="text-gray-300 text-lg md:text-xl max-w-3xl mb-4 mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{ fontFamily: "anta, sans-serif" }}
          >
            With ThirdVizion, your website won't just look stunning—it will be{" "}
            <span className="text-[#00d3f3] font-semibold">
              dynamic, responsive, and built to perform
            </span>
            . We create digital experiences that drive real results.
          </motion.p>
        </TextReveal>

        

        {/* Animated Statistics - 3 Column Centered */}
        <motion.div
          ref={statsRef}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-4xl mx-auto mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isStatsInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="relative group"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isStatsInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
            >
              <div className="bg-gradient-to-br from-[#00d3f3]/10 to-transparent border border-[#00d3f3]/30 rounded-2xl p-6 md:p-8 backdrop-blur-sm hover:border-[#00d3f3]/60 transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,211,243,0.3)] group-hover:scale-105">
                <div
                  className="text-5xl md:text-6xl font-bold text-[#00d3f3] mb-3"
                  style={{ fontFamily: "Outfit, sans-serif" }}
                >
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </div>
                <div
                  className="text-gray-300 text-sm md:text-base font-medium"
                  style={{ fontFamily: "anta, sans-serif" }}
                >
                  {stat.label}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Button */}
        <div className="flex justify-center items-center">
          <Link to="/contact">
            <motion.button
              className="inline-flex items-center justify-center gap-2 rounded-xl sm:rounded-2xl border-2 border-[#00d3f3] bg-[#00d3f3] px-6 sm:px-8 md:px-10 py-3 sm:py-4 font-semibold tracking-wide text-sm sm:text-base md:text-lg shadow-[0_0_20px_rgba(0,211,243,0.4)] backdrop-blur-md transition-all duration-500 hover:shadow-[0_0_35px_rgba(0,211,243,0.6)] hover:scale-105 text-black"
              style={{ fontFamily: "Outfit, sans-serif" }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
            >
              Start Your Project
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </motion.button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default WebCTA;
