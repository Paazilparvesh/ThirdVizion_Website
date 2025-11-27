// import React, { useState, useRef, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// // Register ScrollTrigger plugin
// gsap.registerPlugin(ScrollTrigger);

// // ✅ Import your VR images
// import VrImage1 from "/src/assets/vr/VrImage1.jpeg";
// import VrImage2 from "/src/assets/vr/VrImage2.jpeg";
// import VrImage3 from "/src/assets/vr/VrImage3.jpeg";

// // ✅ VR Services Data - ThirdVizion Content
// const VrData = [
//   {
//     id: "vrDevelopment",
//     title: "Custom VR Application Development",
//     description:
//       "ThirdVizion builds tailored VR applications for training, marketing, and entertainment using Unity and Unreal Engine with seamless cross-platform deployment.",
//     icon: "🛠️",
//     image: VrImage1,
//   },
//   {
//     id: "trainingVR",
//     title: "Enterprise VR Training Solutions",
//     icon: "🎯",
//     description:
//       "We design immersive VR training programs for industries like healthcare, manufacturing, and aviation with real-time performance tracking and analytics.",
//     image: VrImage2,
//   },
//   {
//     id: "architecturalVR",
//     title: "VR Visualization & Walkthroughs",
//     icon: "🏗️",
//     description:
//       "ThirdVizion creates photorealistic 3D architectural walkthroughs and virtual property tours enabling clients to explore spaces before construction.",
//     image: VrImage3,
//   },
// ];

// const Vrsol = () => {
//   const [activeService, setActiveService] = useState(VrData[0].id);
//   const containerRef = useRef(null);
//   const headerRef = useRef(null);
//   const scrollTriggerRef = useRef(null);

//   // Helper to get active data
//   const activeServiceData = VrData.find((vr) => vr.id === activeService);

//   useEffect(() => {
//     const ctx = gsap.context(() => {
//       // 1. Header Animation (Intro)
//       gsap.fromTo(
//         headerRef.current,
//         { opacity: 0, y: -50 },
//         { opacity: 1, y: 0, duration: 1.5, ease: "power3.out" }
//       );

//       // Only enable ScrollTrigger on desktop
//       if (window.innerWidth >= 1024) {
//         // 2. The Main ScrollTrigger Logic - Fixed for scroll up/down
//         scrollTriggerRef.current = ScrollTrigger.create({
//           trigger: containerRef.current,
//           start: "top top",
//           end: "+=2500",
//           pin: true,
//           scrub: 1,
//           anticipatePin: 1,
//           invalidateOnRefresh: true,
//           onUpdate: (self) => {
//             const progress = self.progress;
//             const totalServices = VrData.length;
//             // Smooth calculation for transitions
//             const index = Math.min(
//               Math.floor(progress * totalServices),
//               totalServices - 1
//             );
            
//             const newServiceId = VrData[index].id;
//             // Use callback to avoid stale state
//             setActiveService(prevService => {
//               if (newServiceId !== prevService) {
//                 return newServiceId;
//               }
//               return prevService;
//             });
//           },
//         });
//       }
//     }, containerRef);

//     return () => {
//       ctx.revert();
//       // Cleanup ScrollTrigger
//       if (scrollTriggerRef.current) {
//         scrollTriggerRef.current.kill();
//         scrollTriggerRef.current = null;
//       }
//     };
//   }, []); // Empty dependency array - runs once

//   // Manual Click Handler
//   const handleServiceClick = (id) => {
//     setActiveService(id);
//   };

//   return (
//     <div className="bg-black text-white relative">
//       {/* Background Gradient */}
//       <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.15),transparent_70%)] pointer-events-none"></div>

//       {/* Main Container - Responsive height */}
//       <div 
//         ref={containerRef} 
//         className="min-h-screen w-full flex flex-col justify-center items-center px-4 md:px-8 relative z-10 overflow-hidden py-8 lg:py-0"
//       >
        
//         {/* Header */}
//         <div ref={headerRef} className="text-center mb-6 md:mb-8 lg:mb-10 lg:absolute lg:top-8 w-full">
//           <h1
//             className="text-3xl md:text-5xl lg:text-6xl font-medium bg-clip-text text-transparent bg-gradient-to-r from-violet-400 to-indigo-500 tracking-tight "
//             style={{ fontFamily: "DeaconTest, sans-serif" }}
//           >
//             How ThirdVizion Transforms VR
//           </h1>
//           <p 
//             className="text-gray-400 text-base md:text-lg mt-3 max-w-2xl mx-auto"
//             style={{ fontFamily: "anta, sans-serif" }}
//           >
//             We deliver cutting-edge virtual reality solutions from concept to deployment
//           </p>
//         </div>

//         {/* Content Grid - Responsive layout */}
//         <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-16 items-center lg:h-[70vh] mt-4 lg:mt-16">
          
//           {/* LEFT COLUMN: The Service Cards */}
//           <div className="flex flex-col justify-center gap-3 md:gap-4 lg:h-full relative order-2 lg:order-1">
//             {VrData.map((service, index) => (
//               <motion.div
//                 key={service.id}
//                 onClick={() => handleServiceClick(service.id)}
//                 className={`p-4 md:p-6 rounded-xl md:rounded-2xl cursor-pointer transition-all duration-500 border relative group
//                   ${
//                     activeService === service.id
//                       ? "bg-violet-900/30 border-violet-500 shadow-lg shadow-violet-500/10 scale-100 opacity-100"
//                       : "bg-zinc-900/30 border-zinc-800 hover:border-zinc-600 opacity-50 scale-95 hover:opacity-80"
//                   }`}
//                 initial={{ opacity: 0, x: -20 }}
//                 animate={{ opacity: 1, x: 0 }}
//                 transition={{ delay: index * 0.1 }}
//               >
//                 <div className="flex items-center gap-3 md:gap-4">
//                   <span className="text-2xl md:text-3xl">{service.icon}</span>
//                   <div>
//                     <h3
//                       className={`text-lg md:text-xl font-bold transition-colors ${
//                         activeService === service.id ? "text-white" : "text-gray-400"
//                       }`}
//                       style={{ fontFamily: "DeaconTest, sans-serif" }}
//                     >
//                       {service.title}
//                     </h3>
//                   </div>
//                 </div>
                
//                 {/* Show description on mobile, animated on desktop */}
//                 <div className="block lg:hidden mt-3">
//                   <p 
//                     className="text-gray-300 text-sm leading-relaxed pl-0 md:pl-12 border-l-0 md:border-l-2 border-violet-500/50"
//                     style={{ fontFamily: "anta, sans-serif" }}
//                   >
//                     {service.description}
//                   </p>
//                 </div>

//                 {/* Animated description for desktop */}
//                 <div className="hidden lg:block">
//                   <AnimatePresence>
//                     {activeService === service.id && (
//                       <motion.div 
//                         initial={{ height: 0, opacity: 0 }}
//                         animate={{ height: "auto", opacity: 1 }}
//                         exit={{ height: 0, opacity: 0 }}
//                         transition={{ duration: 0.3 }}
//                         className="overflow-hidden"
//                       >
//                         <p 
//                           className="mt-3 text-gray-300 text-sm leading-relaxed pl-12 border-l-2 border-violet-500/50"
//                           style={{ fontFamily: "anta, sans-serif" }}
//                         >
//                           {service.description.substring(0, 80)}...
//                         </p>
//                       </motion.div>
//                     )}
//                   </AnimatePresence>
//                 </div>
//               </motion.div>
//             ))}
//           </div>

//           {/* RIGHT COLUMN: Large Image & Detail View */}
//           <div className="h-full w-full flex items-center justify-center order-1 lg:order-2 mb-6 lg:mb-0">
//             <AnimatePresence mode="wait">
//               <motion.div
//                 key={activeService}
//                 initial={{ opacity: 0, scale: 0.95 }}
//                 animate={{ opacity: 1, scale: 1 }}
//                 exit={{ opacity: 0, scale: 0.95 }}
//                 transition={{ duration: 0.4, ease: "easeInOut" }}
//                 className="w-full bg-zinc-900/80 rounded-2xl lg:rounded-3xl overflow-hidden border border-zinc-700/50 shadow-2xl p-2"
//               >
//                 {/* Image Area */}
//                 <div className="relative h-48 md:h-64 lg:h-80 w-full overflow-hidden rounded-xl lg:rounded-2xl">
//                   <img 
//                     src={activeServiceData.image} 
//                     alt={activeServiceData.title}
//                     className="w-full h-full object-cover"
//                   />
//                   <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                  
//                   {/* Icon Overlay */}
//                   <div className="absolute bottom-3 md:bottom-4 left-3 md:left-4 bg-white/10 backdrop-blur-md p-2 rounded-lg border border-white/20">
//                     <span className="text-xl md:text-2xl">{activeServiceData.icon}</span>
//                   </div>
//                 </div>

//                 {/* Text Details Area - Hidden on mobile since we show description in cards */}
//                 <div className="hidden lg:block p-6 md:p-8">
//                   <h2 
//                     className="text-2xl md:text-3xl font-bold mb-4 text-white" 
//                     style={{ fontFamily: "DeaconTest, sans-serif" }}
//                   >
//                     {activeServiceData.title}
//                   </h2>
//                   <p 
//                     className="text-gray-400 leading-relaxed text-lg" 
//                     style={{ fontFamily: "anta, sans-serif" }}
//                   >
//                     {activeServiceData.description}
//                   </p>
//                 </div>
//               </motion.div>
//             </AnimatePresence>
//           </div>
//         </div>

//         {/* Scroll Indicator - Hidden on mobile */}
//         <div className="hidden lg:flex absolute bottom-8 left-1/2 transform -translate-x-1/2 flex-col items-center gap-2 opacity-60">
//           <span className="text-xs uppercase tracking-widest text-gray-500">Scroll to Explore</span>
//           <motion.div 
//             animate={{ y: [0, 8, 0] }}
//             transition={{ repeat: Infinity, duration: 2 }}
//             className="w-1 h-8 rounded-full bg-gradient-to-b from-violet-500 to-transparent"
//           />
//         </div>
//       </div>
      
//       {/* Spacer to allow scrolling past the pinned section - Only on desktop */}
//       <div className="hidden lg:block h-[20vh] w-full bg-black"></div>
//     </div>
//   );
// };

// export default Vrsol;
import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// GSAP
gsap.registerPlugin(ScrollTrigger);

// VR Images
import VrImage1 from "/src/assets/vr/VrImage1.jpeg";
import VrImage2 from "/src/assets/vr/VrImage2.jpeg";
import VrImage3 from "/src/assets/vr/VrImage3.jpeg";

// NEW ICON IMAGES
import IconTime from "/src/assets/vr/time-management.png";
import IconGlasses from "/src/assets/vr/vr-glasses.png";
import IconGoggle from "/src/assets/vr/vr-goggle.png";

// VR Services Data
const VrData = [
  {
    id: "vrDevelopment",
    title: "Custom VR Application Development",
    description:
      "ThirdVizion builds tailored VR applications for training, marketing, and entertainment using Unity and Unreal Engine with seamless cross-platform deployment.",
    icon: IconTime,   // <-- Using image
    image: VrImage1,
  },
  {
    id: "trainingVR",
    title: "Enterprise VR Training Solutions",
    description:
      "We design immersive VR training programs for industries like healthcare, manufacturing, and aviation with real-time performance tracking and analytics.",
    icon: IconGlasses,  // <-- Using image
    image: VrImage2,
  },
  {
    id: "architecturalVR",
    title: "VR Visualization & Walkthroughs",
    description:
      "ThirdVizion creates photorealistic 3D architectural walkthroughs and virtual property tours enabling clients to explore spaces before construction.",
    icon: IconGoggle,  // <-- Using image
    image: VrImage3,
  },
];

const Vrsol = () => {
  const [activeService, setActiveService] = useState(VrData[0].id);
  const containerRef = useRef(null);
  const headerRef = useRef(null);
  const scrollTriggerRef = useRef(null);

  const activeServiceData = VrData.find((vr) => vr.id === activeService);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        headerRef.current,
        { opacity: 0, y: -50 },
        { opacity: 1, y: 0, duration: 1.5, ease: "power3.out" }
      );

      if (window.innerWidth >= 1024) {
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
        className="min-h-screen w-full flex flex-col justify-center items-center px-4 md:px-8 relative z-10"
      >
        <div ref={headerRef} className="text-center mb-10 lg:absolute lg:top-8 w-full">
          <h1 className="text-3xl md:text-5xl font-medium bg-clip-text text-transparent bg-gradient-to-r from-violet-400 to-indigo-500">
            How ThirdVizion Transforms VR
          </h1>
          <p className="text-gray-400 text-base md:text-lg mt-3 max-w-2xl mx-auto">
            We deliver cutting-edge virtual reality solutions from concept to deployment
          </p>
        </div>

        {/* Content Grid */}
        <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-8 items-center lg:h-[70vh] mt-16">

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
                  >
                    {service.title}
                  </h3>
                </div>

                <div className="block lg:hidden mt-3">
                  <p className="text-gray-300 text-sm">
                    {service.description}
                  </p>
                </div>

                <div className="hidden lg:block">
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
                </div>
              </motion.div>
            ))}
          </div>

          {/* RIGHT COLUMN */}
          <div className="h-full w-full flex justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeService}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="w-full bg-zinc-900/80 rounded-3xl overflow-hidden border border-zinc-700/50 shadow-2xl p-2"
              >
                <div className="relative h-64 md:h-80">
                  <img
                    src={activeServiceData.image}
                    alt={activeServiceData.title}
                    className="w-full h-full object-cover rounded-2xl"
                  />

                  {/* ICON OVERLAY */}
                  <div className="absolute bottom-4 left-4 bg-white/10 backdrop-blur-md p-2 rounded-lg border border-white/20">
                    <img
                      src={activeServiceData.icon}
                      alt="icon"
                      className="w-6 h-6 object-contain"
                    />
                  </div>
                </div>

                <div className="hidden lg:block p-8">
                  <h2 className="text-3xl font-bold mb-4 text-white">
                    {activeServiceData.title}
                  </h2>
                  <p className="text-gray-400 text-lg">
                    {activeServiceData.description}
                  </p>
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
