

import { useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import TextReveal from "/src/Hooks/TextReveal.jsx";
import { Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import Lottie from "lottie-react";

// 👉 Import the JSON animation
import AssistantBot from "/src/assets/Crm/Trackkkk.json";

export default function CrmHero() {
  const rootRef = useRef(null);
  const badgesRef = useRef([]);

  badgesRef.current = [];

  const titleControls = useAnimation();
  const subtitleControls = useAnimation();
  const ctaControls = useAnimation();
  const badgesControls = useAnimation();

  const inView = useInView(rootRef, { once: true, margin: "-100px" });

  if (inView) {
    titleControls.start({ opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.8 } });
    subtitleControls.start({ opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.3 } });
    ctaControls.start({ opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, delay: 0.5 } });
    badgesControls.start({
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: { staggerChildren: 0.08, delay: 0.4 },
    });
  }

  function setBadgeRef(el) {
    if (el && !badgesRef.current.includes(el)) badgesRef.current.push(el);
  }

  return (
    <section
      ref={rootRef}
      className="relative overflow-hidden px-4 sm:px-6 py-16 sm:py-20 lg:py-28 text-white"
      aria-label="CRM Hero - Coral Theme"
    >
      <div className="relative max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-10 lg:gap-20 xl:gap-10">
        
        {/* ---------------------------------- */}
        {/* LEFT SIDE TEXT                     */}
        {/* ---------------------------------- */}
        <div className="w-full lg:w-6/12 text-center lg:text-left">
          <div className="max-w-2xl mx-auto lg:ml-0">
            <p className="inline-flex items-center gap-2 sm:gap-3 text-xs sm:text-sm font-medium text-white/80 bg-[#FF646710] border border-[#FF646740] rounded-full px-3 py-1 sm:px-4 sm:py-1.5 mb-4 lg:mb-6">
              <Sparkles className="size-3 sm:size-4 text-[#FF6467]" />
              Built for growth
            </p>

            <TextReveal>
             <motion.h1
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.3, duration: 0.6 }}
  viewport={{ amount: 0 }}
  className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold leading-tight tracking-tight mb-4 lg:mb-6 text-[#FF6467]"
  style={{ fontFamily: "DeaconTest, sans-serif" }}
>
  Enterprise-Grade CRM
</motion.h1>

            </TextReveal>

            <motion.p
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ amount: 0 }}
              className="text-sm sm:text-base lg:text-lg text-white/70 mb-6 lg:mb-8 leading-relaxed"
              style={{ fontFamily: "anta, sans-serif" }}
            >
              Boost growth with an AI-powered CRM that unites sales, marketing, and support. 
              Manage pipelines, automate workflows, and build stronger customer relationships.
            </motion.p>

            {/* CTA Button */}
            <Link to="/contact">
              <motion.button
                initial={{ opacity: 0, y: 40, scale: 0.96 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                className="hover:bg-[#FF6467] text-white shadow-[0_0_20px_rgba(255,100,103,0.4)] hover:shadow-[0_0_35px_rgba(255,100,103,0.6)] hover:scale-[1.02] transition-all duration-500 border border-[#FF6467]/30 px-5 py-2.5 sm:px-6 sm:py-3 font-semibold backdrop-blur-md rounded-xl sm:rounded-2xl md:px-8 text-sm sm:text-base lg:text-lg xl:text-xl mb-6 lg:mb-8"
                  style={{ fontFamily: "DeaconTest, sans-serif" }}
              >
                Request a demo
              </motion.button>
            </Link>

            {/* Badges */}
            <motion.div
              whileInView={badgesControls}
              initial={{ opacity: 1, y: 50, rotateX: -8 }}
              className="flex flex-wrap gap-2 sm:gap-3 items-center justify-center lg:justify-start"
            >
              {[].map((b) => (
                <span
                  key={b}
                  ref={setBadgeRef}
                  className="inline-flex items-center gap-1 sm:gap-2 rounded-full px-2.5 py-1 sm:px-3 sm:py-1 text-xs font-medium bg-[#FF646710] border border-[#FF646730] text-white shadow-md"
                >
                  {b}
                </span>
              ))}
            </motion.div>
          </div>
        </div>

        {/* ---------------------------------- */}
        {/* RIGHT SIDE: LOTTIE ANIMATION       */}
        {/* ---------------------------------- */}
        <div className="w-full lg:w-6/12 flex justify-center lg:justify-end">
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="w-[260px] sm:w-[300px] md:w-[380px] lg:w-[420px] xl:w-[480px]"
          >
            <Lottie animationData={AssistantBot} loop autoplay />
          </motion.div>
        </div>

      </div>
    </section>
  );
}
