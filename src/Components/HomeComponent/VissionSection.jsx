import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger only in browser
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const MissionVision = () => {
  const sectionRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  // Refs for first vision-mission pair
  const visionHeadingRef1 = useRef(null);
  const visionLineRef1 = useRef(null);
  const visionTextRef1 = useRef(null);
  const missionHeadingRef1 = useRef(null);
  const missionLineRef1 = useRef(null);
  const missionTextRef1 = useRef(null);

  // Refs for second vision
  const visionHeadingRef2 = useRef(null);
  const visionLineRef2 = useRef(null);
  const visionTextRef2 = useRef(null);

  // Mobile card refs
  const mobileCardRefs = useRef([]);

  // Detect mobile view
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1024);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Desktop animations - NOT TOUCHED
  useEffect(() => {
    if (isMobile) return;

    const ctx = gsap.context(() => {
      // Animation function for vision sections
      const createVisionAnimations = (visionHeading, visionLine, visionText) => {
        const visionTimeline = gsap.timeline({
          scrollTrigger: {
            trigger: visionHeading,
            start: "top 70%",
            end: "bottom 10%",
            toggleActions: "play reverse play reverse",
            markers: false,
          },
        });

        visionTimeline
          .fromTo(
            visionLine,
            { scaleX: 0, transformOrigin: "left center" },
            { scaleX: 1, duration: 0.2 }
          )
          .fromTo(
            visionHeading,
            { opacity: 0, y: 20 },
            { opacity: 1, y: 0, duration: 0.2 },
            "-=0.3"
          )
          .fromTo(
            visionText,
            { opacity: 0, y: 30 },
            { opacity: 1, y: 0, duration: 0.2 },
            "-=0.2"
          );
      };

      // Animation function for mission section
      const createMissionAnimations = (missionHeading, missionLine, missionText) => {
        const missionTimeline = gsap.timeline({
          scrollTrigger: {
            trigger: missionHeading,
            start: "top 60%",
            end: "bottom 20%",
            toggleActions: "play reverse play reverse",
            markers: false,
          },
        });

        missionTimeline
          .fromTo(
            missionLine,
            { scaleX: 0, transformOrigin: "right center" },
            { scaleX: 1, duration: 0.2 }
          )
          .fromTo(
            missionHeading,
            { opacity: 0, y: 20 },
            { opacity: 1, y: 0, duration: 0.2 },
            "-=0.3"
          )
          .fromTo(
            missionText,
            { opacity: 0, y: 30 },
            { opacity: 1, y: 0, duration: 0.2 },
            "-=0.2"
          );
      };

      // Create animations for all sections
      createVisionAnimations(
        visionHeadingRef1.current, visionLineRef1.current, visionTextRef1.current
      );
      
      createMissionAnimations(
        missionHeadingRef1.current, missionLineRef1.current, missionTextRef1.current
      );
      
      createVisionAnimations(
        visionHeadingRef2.current, visionLineRef2.current, visionTextRef2.current
      );

    }, sectionRef);

    return () => ctx.revert();
  }, [isMobile]);

  // ✅ MOBILE SCROLL REVEAL ANIMATIONS - NEW
  useEffect(() => {
    if (!isMobile) return;

    const mm = gsap.matchMedia();

    mm.add("(max-width: 1023px)", () => {
      mobileCardRefs.current.forEach((card, index) => {
        if (card) {
          gsap.fromTo(
            card,
            {
              y: 80,
              opacity: 0,
              scale: 0.9,
            },
            {
              y: 0,
              opacity: 1,
              scale: 1,
              duration: 0.8,
              ease: "power3.out",
              scrollTrigger: {
                trigger: card,
                start: "top 85%",
                end: "top 50%",
                toggleActions: "play none none reverse",
              },
            }
          );
        }
      });
    });

    return () => mm.revert();
  }, [isMobile]);

  // Mobile View with scroll reveal
  if (isMobile) {
    const sections = [
      {
        type: "vision",
        id: 1,
        title: "VISION",
        content: "To become a global leader in immersive 3D and digital innovation, creating experiences that inspire, connect, and transform the way people and businesses interact with technology."
      },
      {
        type: "mission",
        id: 2,
        title: "MISSION",
        content: "At ThirdVizion Labs, our mission is to empower brands and creators with AR, VR, and 3D web technologies that make digital experiences more interactive and impactful."
      },
      {
        type: "values",
        id: 3,
        title: "OUR VALUES",
        content: {
          points: [
            { 
              title: "INTEGRATE", 
              text: "To lead the way in creating groundbreaking technologies that shape the future and redefine industry standards." 
            },
            { 
              title: "INNOVATE", 
              text: "To bring together diverse solutions, creating cohesive experiences that bridge gaps and drive interconnected growth across industries." 
            },
            { 
              title: "INSPIRE", 
              text: "To inspire a culture of continuous innovation, fostering creativity and pushing the boundaries of what's possible." 
            }
          ]
        }
      }
    ];

    return (
      <section
        className="bg-black text-white py-20 px-6"
        style={{ fontFamily: "DeaconTest, sans-serif", fontWeight: 600 }}
      >
        <div className="max-w-lg mx-auto space-y-16">
          {sections.map((section, index) => (
            <div 
              key={section.id} 
              ref={(el) => (mobileCardRefs.current[index] = el)}
              className="relative"
            >
              {section.type === "vision" ? (
                // Vision Card
                <>
                  <div className="absolute -inset-4 bg-gradient-to-r from-[#FFC016]/10 to-transparent rounded-3xl transform -skew-y-3"></div>
                  <div className="relative bg-black rounded-2xl p-8 border-l-4 border-[#FFC016]">
                    <div className="flex items-center mb-6">
                      <div className="w-3 h-8 bg-[#FFC016] rounded-full mr-4"></div>
                      <h2
                        className="text-4xl font-bold text-[#FFC016]"
                        style={{ fontFamily: "anta, sans-serif" }}
                      >
                        {section.title}
                      </h2>
                    </div>
                    <p className="text-gray-300 text-base leading-relaxed pl-7">
                      {section.content}
                    </p>
                  </div>
                </>
              ) : section.type === "mission" ? (
                // Mission Card
                <>
                  <div className="absolute -inset-4 bg-gradient-to-l from-[#FFC016]/10 to-transparent rounded-3xl transform skew-y-3"></div>
                  <div className="relative bg-black rounded-2xl p-8 border-r-4 border-[#FFC016]">
                    <div className="flex items-center justify-end mb-6">
                      <h2
                        className="text-4xl font-bold text-[#FFC016] mr-4"
                        style={{ fontFamily: "DeaconTest, sans-serif", fontWeight: 600 }}
                      >
                        {section.title}
                      </h2>
                      <div className="w-3 h-8 bg-[#FFC016] rounded-full"></div>
                    </div>
                    
                    <p className="text-gray-300 text-base leading-relaxed text-right">
                      {section.content}
                    </p>
                  </div>
                </>
              ) : (
                // Values Card
                <>
                  <div className="absolute -inset-4 bg-gradient-to-r from-[#FFC016]/10 to-transparent rounded-3xl transform -skew-y-3"></div>
                  <div className="relative bg-black rounded-2xl p-8 border-l-4 border-[#FFC016]">
                    <div className="flex items-center mb-6">
                      <div className="w-3 h-8 bg-[#FFC016] rounded-full mr-4"></div>
                      <h2
                        className="text-4xl font-bold text-[#FFC016]"
                        style={{ fontFamily: "anta, sans-serif" }}
                      >
                        {section.title}
                      </h2>
                    </div>
                    
                    <div className="space-y-6 pl-7">
                      {section.content.points.map((item, index) => (
                        <div key={index} className="group">
                          <span
                            className="text-[#FFC016] font-bold text-lg block mb-2"
                            style={{ fontFamily: "DeaconTest, sans-serif", fontWeight: 600 }}
                          >
                            {item.title}
                          </span>
                          <p className="text-gray-300 text-base leading-relaxed">
                            {item.text}
                          </p>
                          {index < section.content.points.length - 1 && <div className="w-16 h-0.5 bg-[#FFC016]/30 mt-4"></div>}
                        </div>
                      ))}
                    </div>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </section>
    );
  }

  // Desktop View - NOT TOUCHED - EXACTLY AS BEFORE
  const sections = [
    {
      type: "vision",
      id: 1,
      title: "VISION",
      headingRef: visionHeadingRef1,
      lineRef: visionLineRef1,
      textRef: visionTextRef1,
      content: "To become a global leader in immersive 3D and digital innovation, creating experiences that inspire, connect, and transform the way people and businesses interact with technology."
    },
    {
      type: "mission",
      id: 2,
      title: "MISSION",
      headingRef: missionHeadingRef1,
      lineRef: missionLineRef1,
      textRef: missionTextRef1,
      content: "At ThirdVizion Labs, our mission is to empower brands and creators with AR, VR, and 3D web technologies that make digital experiences more interactive and impactful."
    },
    {
      type: "values",
      id: 3,
      title: "OUR VALUES",
      headingRef: visionHeadingRef2,
      lineRef: visionLineRef2,
      textRef: visionTextRef2,
      content: {
        points: [
          { 
            title: "INTEGRATE", 
            text: "To lead the way in creating groundbreaking technologies that shape the future and redefine industry standards." 
          },
          { 
            title: "INNOVATE", 
            text: "To bring together diverse solutions, creating cohesive experiences that bridge gaps and drive interconnected growth across industries." 
          },
          { 
            title: "INSPIRE", 
            text: "To inspire a culture of continuous innovation, fostering creativity and pushing the boundaries of what's possible." 
          }
        ]
      }
    }
  ];

  return (
    <section
      ref={sectionRef}
      className="bg-black text-white py-16 px-6 md:px-20 space-y-32"
      style={{ fontFamily: "anta, sans-serif" }}
    >    
      {sections.map((section, index) => (
        <div key={section.id} className="relative">
          {section.type === "vision" ? (
            // Vision Section (Left aligned)
            <>
              {/* Decorative left gold line */}
              <div className="absolute -left-14 top-9 hidden md:block">
                <div
                  ref={section.lineRef}
                  className="h-[2.5px] w-70 bg-yellow-500 ml-[58px] relative"
                >
                  <div className="absolute -right-1 mt-[-2.3px] w-2 h-2 bg-yellow-500 rounded-full"></div>
                  <div className="absolute -left-12 top-[-20.5px] w-[2px] h-34 bg-yellow-500 rotate-46"></div>
                </div>
              </div>

              <h2
                ref={section.headingRef}
                className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl ml-76 font-bold tracking-wider mb-6 flex text-[#FFC016]"
                style={{ fontFamily: "DeaconTest, sans-serif", fontWeight: 600 }}
              >
                {section.title}
              </h2>

              <div ref={section.textRef}>
                <p className="text-gray-300 text-xs md:text-lg ml-30 leading-relaxed max-w-4xl">
                  {section.content}
                </p>
              </div>
            </>
          ) : section.type === "mission" ? (
            // Mission Section (Right aligned)
            <>
              {/* Decorative right gold line */}
              <div className="absolute -right-14 top-9 hidden md:block">
                <div
                  ref={section.lineRef}
                  className="h-[2.5px] w-70 bg-yellow-500 mr-[58px] relative ml-auto"
                >
                  <div className="absolute -left-2 mt-[-2.3px] w-2 h-2 bg-yellow-500 rounded-full"></div>
                  <div className="absolute -right-12 top-[-20.5px] w-[2px] h-34 bg-yellow-500 -rotate-46"></div>
                </div>
              </div>

              <h2
                ref={section.headingRef}
                className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-wider mb-6 flex justify-end text-[#FFC016] pr-76"
                style={{ fontFamily: "DeaconTest, sans-serif", fontWeight: 600 }}
              >
                {section.title}
              </h2>

              <div ref={section.textRef} className="flex justify-end">
                <div className="max-w-4xl text-right mr-30">
                  <p className="text-gray-300 text-xs md:text-lg leading-relaxed">
                    {section.content}
                  </p>
                </div>
              </div>
            </>
          ) : (
            // Values Section (Left aligned)
            <>
              {/* Decorative left gold line */}
              <div className="absolute -left-14 top-9 hidden md:block">
                <div
                  ref={section.lineRef}
                  className="h-[2.5px] w-70 bg-yellow-500 ml-[58px] relative"
                >
                  <div className="absolute -right-1 mt-[-2.3px] w-2 h-2 bg-yellow-500 rounded-full"></div>
                  <div className="absolute -left-12 top-[-20.5px] w-[2px] h-34 bg-yellow-500 rotate-46"></div>
                </div>
              </div>

              <h2
                ref={section.headingRef}
                className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl ml-76 font-bold tracking-wider mb-6 flex text-[#FFC016]"
                style={{ fontFamily: "DeaconTest, sans-serif", fontWeight: 600 }}
              >
                {section.title}
              </h2>

              <div ref={section.textRef} className="ml-30 max-w-4xl">
                {section.content.points.map((point, pointIndex) => (
                  <div key={pointIndex} className="mb-6">
                    <p className="text-gray-300 text-[18px] leading-relaxed">
                      <span
                        className="text-yellow-500 font-light"
                        style={{ fontFamily: "DeaconTest, sans-serif", fontWeight: 600 }}
                      >
                        {point.title}
                      </span>{" "}
                      {point.text}
                    </p>
                    {pointIndex < section.content.points.length - 1 && (
                      <div className="w-16 h-0.5 bg-[#FFC016]/30 mt-4"></div>
                    )}
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      ))}
    </section>
  );
};

export default MissionVision;
