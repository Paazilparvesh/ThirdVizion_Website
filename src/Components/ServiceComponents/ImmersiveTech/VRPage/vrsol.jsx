import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// GSAP
gsap.registerPlugin(ScrollTrigger);

// VR Images
import VrImage1 from "/src/assets/vr/vrah.png";
import VrImage2 from "/src/assets/vr/vrtwo.png";
import VrImage3 from "/src/assets/vr/vrthree.png";

// NEW ICON IMAGES
import IconTime from "/src/assets/vr/vr-goggle.png";
import IconGlasses from "/src/assets/vr/vr-glasses.png";
import IconGoggle from "/src/assets/vr/vrthree.png";

// VR Services Data
const VrData = [
  {
    id: "vrDevelopment",
    title: "Custom VR Application Development",
    description:
      "ThirdVizion builds tailored VR applications for training, marketing, and entertainment using Unity and Unreal Engine with seamless cross-platform deployment.",
    icon: IconTime,
    image: VrImage1,
  },
  {
    id: "trainingVR",
    title: "Enterprise VR Training Solutions",
    description:
      "We design immersive VR training programs for industries like healthcare, manufacturing, and aviation with real-time performance tracking and analytics.",
    icon: IconGlasses,
    image: VrImage2,
  },
  {
    id: "architecturalVR",
    title: "VR Visualization & Walkthroughs",
    description:
      "ThirdVizion creates photorealistic 3D architectural walkthroughs and virtual property tours enabling clients to explore spaces before construction.",
    icon: IconGoggle,
    image: VrImage3,
  },
];

const Vrsol = () => {
  const [activeService, setActiveService] = useState(VrData[0].id);
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const containerRef = useRef(null);
  const headerRef = useRef(null);
  const scrollTriggerRef = useRef(null);

  const activeServiceData = VrData.find((vr) => vr.id === activeService);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Initial header animation
      gsap.fromTo(
        headerRef.current,
        { opacity: 0, y: -50 },
        { opacity: 1, y: 0, duration: 1.5, ease: "power3.out" }
      );

      if (window.innerWidth >= 1024) {
        // Header hide/show ScrollTrigger - BEFORE pin starts
        ScrollTrigger.create({
          trigger: containerRef.current,
          start: "top top+=100",
          end: "top top",
          onEnter: () => setIsHeaderVisible(false),
          onLeaveBack: () => setIsHeaderVisible(true),
        });

        // Main pinning ScrollTrigger
        scrollTriggerRef.current = ScrollTrigger.create({
          trigger: containerRef.current,
          start: "top top",
          end: "+=2500",
          pin: true,
          scrub: 1,
          anticipatePin: 1,
          onUpdate: (self) => {
            const progress = self.progress;
            const index = Math.min(
              Math.floor(progress * VrData.length),
              VrData.length - 1
            );
            const newServiceId = VrData[index].id;

            setActiveService((prev) =>
              prev !== newServiceId ? newServiceId : prev
            );
          },
        });
      }
    }, containerRef);

    return () => {
      ctx.revert();
      if (scrollTriggerRef.current) {
        scrollTriggerRef.current.kill();
        scrollTriggerRef.current = null;
      }
    };
  }, []);

  return (
    <div className="bg-black text-white relative">
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.15),transparent_70%)]"></div>

      <div
        ref={containerRef}
        className="min-h-screen w-full flex flex-col justify-start lg:justify-center items-center px-4 py-12 md:px-8 relative z-10"
      >
        {/* Header */}
        <div ref={headerRef} className="text-center mb-8 lg:mb-10 lg:absolute lg:top-1 w-full">
          <h1
            className="text-3xl md:text-5xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-violet-400 to-indigo-500"
            style={{ fontFamily: "DeaconTest, sans-serif" }}
          >
            How ThirdVizion Transforms VR
          </h1>
          <p
            className="text-gray-400 text-base md:text-lg mt-3 max-w-2xl mx-auto"
            style={{ fontFamily: "anta, sans-serif" }}
          >
            We deliver cutting-edge virtual reality solutions from concept to deployment
          </p>
        </div>

        {/* MOBILE LAYOUT - Card Stack */}
        <div className="lg:hidden w-full max-w-md mx-auto space-y-6">
          {VrData.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-zinc-900/50 backdrop-blur-lg rounded-2xl overflow-hidden border border-violet-500/20 shadow-xl"
            >
              {/* Image Section */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

                {/* Icon Badge */}
                <div className="absolute top-4 right-4 bg-white/10 backdrop-blur-md p-3 rounded-xl border border-white/20">
                  <img src={service.icon} alt="icon" className="w-8 h-8 object-contain" />
                </div>
              </div>

              {/* Content Section */}
              <div className="p-6">
                <h3
                  className="text-xl font-bold text-white mb-3"
                  style={{ fontFamily: "DeaconTest, sans-serif" }}
                >
                  {service.title}
                </h3>
                <p
                  className="text-gray-300 text-sm leading-relaxed"
                  style={{ fontFamily: "anta, sans-serif" }}
                >
                  {service.description}
                </p>

                {/* Progress Indicator */}
                <div className="mt-4 flex items-center gap-2">
                  <div className="flex-1 h-1 bg-zinc-700 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: "100%" }}
                      transition={{ duration: 1, delay: 0.3 }}
                      viewport={{ once: true }}
                      className="h-full bg-gradient-to-r from-violet-500 to-indigo-500"
                    />
                  </div>
                  <span className="text-violet-400 text-xs font-semibold">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* DESKTOP LAYOUT - Original Two Column */}
        <div className="hidden lg:grid max-w-7xl w-full grid-cols-2 gap-8 items-center h-[85vh]">
          {/* LEFT COLUMN */}
          <div className="flex flex-col gap-4">
            {VrData.map((service, index) => (
              <motion.div
                key={service.id}
                onClick={() => setActiveService(service.id)}
                className={`p-6 rounded-xl cursor-pointer transition-all border ${
                  activeService === service.id
                    ? "bg-violet-900/30 border-violet-500 opacity-100"
                    : "bg-zinc-900/30 border-zinc-800 opacity-50 hover:opacity-80"
                }`}
              >
                <div className="flex items-center gap-4">
                  {/* ICON IMAGE */}
                  <img
                    src={service.icon}
                    alt={service.title}
                    className="w-10 h-10 object-contain"
                  />

                  <h3
                    className={`text-xl font-bold ${
                      activeService === service.id ? "text-white" : "text-gray-400"
                    }`}
                    style={{ fontFamily: "DeaconTest, sans-serif" }}
                  >
                    {service.title}
                  </h3>
                </div>

                <AnimatePresence>
                  {activeService === service.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <p className="mt-3 text-gray-300 text-sm pl-12 border-l-2 border-violet-500/50">
                        {service.description.substring(0, 80)}...
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>

          {/* RIGHT COLUMN - Full Image Display */}
          <div className="w-full flex items-center justify-center h-[600px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeService}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="w-full h-full bg-zinc-900/80 rounded-3xl overflow-hidden border border-zinc-700/50 shadow-2xl p-2"
              >
                {/* Full Image Container */}
                <div className="relative w-full h-full">
                  <img
                    src={activeServiceData.image}
                    alt={activeServiceData.title}
                    className="w-full h-full object-fill rounded-2xl"
                  />

                  {/* ICON OVERLAY */}
                  <div className="absolute bottom-4 left-4 bg-white/10 backdrop-blur-md p-2 rounded-lg border border-white/20">
                    <img
                      src={activeServiceData.icon}
                      alt="icon"
                      className="w-6 h-6 object-contain"
                    />
                  </div>

                  {/* Content Overlay - Bottom */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/70 to-transparent p-8">
                    <h2
                      className="text-3xl font-bold mb-3 text-white"
                      style={{ fontFamily: "DeaconTest, sans-serif" }}
                    >
                      {activeServiceData.title}
                    </h2>
                    <p
                      className="text-gray-200 text-base"
                      style={{ fontFamily: "anta, sans-serif" }}
                    >
                      {activeServiceData.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      <div className="hidden lg:block h-[20vh] w-full bg-black"></div>
    </div>
  );
};

export default Vrsol;
