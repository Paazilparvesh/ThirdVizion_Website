// import { useEffect } from "react";


// import Threelanding from "/src/Components/3dservicecomp/Threelanding.jsx";
// const ThreeDServices = () => {


//   return (
//     <div >
//       <Threelanding />
     
     
      
//     </div>
//   );
// };

// export default ThreeDServices;












import React, { useEffect, useRef } from "react";
import SectionOne from "/src/Components/3dservicecomp/SectionOne.jsx";
import SectionTwo from "/src/Components/3dservicecomp/SectionTwo.jsx";
import SectionThree from "/src/Components/3dservicecomp/SectionThree.jsx";
import SectionFour from "/src/Components/3dservicecomp/SectionFour.jsx";
import SectionFive from "/src/Components/3dservicecomp/SectionFive.jsx";
import SectionSeven from "/src/Components/3dservicecomp/SectionSeven.jsx";
import ButterflyModel from "/src/Components/3dservicecomp/ButterflyModel.jsx";
import CosmicBackdrop from "/src/Components/3dservicecomp/CosmicBackdrop.jsx";

import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function ServicePage() {
  const containerRef = useRef();

  useEffect(() => {
    // ------------------------------
    // Reset scroll to top when page loads
    // ------------------------------
    if (typeof window !== "undefined") {
      window.scrollTo(0, 0);
    }

    // ------------------------------
    // Kill any previous ScrollTriggers
    // ------------------------------
    ScrollTrigger.getAll().forEach((trigger) => trigger.kill());

    // ------------------------------
    // Smooth scroll setup
    // ------------------------------
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: "vertical",
      smooth: true,
    });

    lenis.on("scroll", ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });
    gsap.ticker.lagSmoothing(0);

    // Cleanup function
    return () => {
      gsap.ticker.remove(lenis.raf);
      lenis.destroy();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div ref={containerRef} className="cosmic-container relative w-full min-h-[500vh] overflow-x-hidden">
      {/* Cosmic Background */}
      <CosmicBackdrop />

      {/* Fixed background fallback */}
      <div className="fixed inset-0 -z-20 bg-[#172d16]" />

      {/* Butterfly model */}
      <div className="hidden lg:block">
        <ButterflyModel />
      </div>

      {/* Page Sections */}
      <div className="section-one">
        <SectionOne />
      </div>
      <div className="section-two">
        <SectionTwo />
      </div>
      <div className="hidden lg:block section-three">
        <SectionThree />
      </div>
      <div className="section-four">
        <SectionFour />
      </div>
      <div className="section-five">
        <SectionFive />
      </div>
      <div className="section-seven">
        <SectionSeven />
      </div>

      {/* Optional: custom scrollbar + ripple styles */}
      <style jsx global>{`
        html {
          scroll-behavior: smooth;
        }
        ::-webkit-scrollbar {
          width: 8px;
        }
        ::-webkit-scrollbar-track {
          background: rgba(0,0,0,0.1);
        }
        ::-webkit-scrollbar-thumb {
          background: linear-gradient(to bottom, #3b0066, #6600ff);
          border-radius: 4px;
        }
        ::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(to bottom, #4d0099, #7a33ff);
        }
      `}</style>
    </div>
  );
}
