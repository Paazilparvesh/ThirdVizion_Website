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
import { useEffect } from "react";
import SectionOne from "/src/Components/3dservicecomp/SectionOne.jsx";
import SectionTwo from "/src/Components/3dservicecomp/SectionTwo.jsx";
import SectionThree from "/src/Components/3dservicecomp/SectionThree.jsx";
import SectionFour from "/src/Components/3dservicecomp/SectionFour.jsx";
import SectionFive from "/src/Components/3dservicecomp/SectionFive.jsx";
import SectionSeven from "/src/Components/3dservicecomp/SectionSeven.jsx";
import ButterflyModel from "/src/Components/3dservicecomp/ButterflyModel.jsx";
import CosmicBackdrop from "/src/Components/3dservicecomp/CosmicBackdrop.jsx";

// 1. Import Lenis and GSAP
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function App() {
  // 2. Setup Smooth Scroll + GSAP Sync
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: "vertical",
      smooth: true,
    });

    // Get Lenis to talk to ScrollTrigger
    lenis.on("scroll", ScrollTrigger.update);

    // Sync GSAP's ticker with Lenis's requestAnimationFrame
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    // Turn off GSAP lag smoothing to prevent stuttering
    gsap.ticker.lagSmoothing(0);

    // Cleanup
    return () => {
      gsap.ticker.remove(lenis.raf);
      lenis.destroy();
    };
  }, []);

  return (
    <div className="cosmic-container relative w-full min-h-[500vh] overflow-x-hidden">
  
      {/* Cosmic Background */}
      <CosmicBackdrop />

      {/* Fixed green background as fallback */}
      <div className="fixed inset-0 -z-20 bg-[#172d16]" />

      {/* Butterfly Model */}
      <div className="hidden lg:block">
        <ButterflyModel />
      </div>

      {/* Page sections */}
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

      {/* Global styles */}
      <style jsx global>{`
        .ripple {
          position: absolute;
          border-radius: 50%;
          background-color: rgba(255, 255, 255, 0.7);
          transform: scale(0);
          animation: ripple-animation 0.6s linear;
        }

        @keyframes ripple-animation {
          to {
            transform: scale(4);
            opacity: 0;
          }
        }

        /* Smooth scrolling */
        html {
          scroll-behavior: smooth;
        }

        /* Custom scrollbar */
        ::-webkit-scrollbar {
          width: 8px;
        }

        ::-webkit-scrollbar-track {
          background: rgba(0, 0, 0, 0.1);
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