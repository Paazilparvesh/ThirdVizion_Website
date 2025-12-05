import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

import digitalEnterpriseImage from "/src/assets/industrieshome/ex.svg";
import healthcareImage from "/src/assets/industrieshome/exx.svg";
import educationImage from "/src/assets/industrieshome/exxx.svg";
import retailImage from "/src/assets/industrieshome/exxxx.svg";

gsap.registerPlugin(ScrollTrigger);

const industries = [
  { id: 1, number: "01/", name: "Digital Services", color: "indigo-400" },
  { id: 2, number: "02/", name: "Healthcare Innovation", color: "green-400" },
  { id: 3, number: "03/", name: "Education Technology", color: "red-400" },
  { id: 4, number: "04/", name: "Retail & E-commerce Solutions", color: "purple-400" },
];

const industryImages = [
  digitalEnterpriseImage,
  healthcareImage,
  educationImage,
  retailImage,
];

const imagePositions = [
  "center 34.5%",
  "center 52%",
  "center 49%",
  "center 49.7%",
];

const colorGradients = {
  "indigo-400": "linear-gradient(to right, #1f93ffff 80%, transparent 100%)",
  "green-400": "linear-gradient(to right, #4ade80 80%, transparent 100%)",
  "red-400": "linear-gradient(to right, #f87171 80%, transparent 100%)",
  "purple-400": "linear-gradient(to right, #c084fc 80%, transparent 100%)",
};

const mobileColorOverlays = {
  "indigo-400": "rgba(67, 56, 202, 0.55)",   // Dark indigo
  "green-400": "rgba(22, 163, 74, 0.55)",    // Dark green
  "red-400": "rgba(185, 28, 28, 0.55)",      // Dark red
  "purple-400": "rgba(134, 25, 143, 0.55)",  // Dark purple
};


const Industries = () => {
  const overlayRefs = useRef([]);
  const numberTextRefs = useRef([]);
  const nameTextRefs = useRef([]);
  const imageOverlayRefs = useRef([]);

  const hoverXValues = ["-172%", "-125%", "-125%", "-85%"];

  useGSAP(() => {
    gsap.from("#industry-item", {
      y: 80,
      opacity: 110,
      delay: 0.3,
      duration: 0.8,
      stagger: 0.2,
      ease: "power3.out",
      scrollTrigger: { trigger: "#industries" },
    });
  }, []);

  const handleMouseEnter = (index) => {
    if (window.innerWidth < 768) return;
    const overlayEl = overlayRefs.current[index];
    const imageOverlayEl = imageOverlayRefs.current[index];
    const numberEl = numberTextRefs.current[index];
    const nameEl = nameTextRefs.current[index];
    if (!overlayEl || !imageOverlayEl || !numberEl || !nameEl) return;

    gsap.killTweensOf([overlayEl, imageOverlayEl, numberEl, nameEl]);

    gsap.to(overlayEl, {
      width: "50%",
      x: "0%",
      duration: 0.8,
      ease: "power2.out",
    });

    gsap.to(imageOverlayEl, {
      x: "0%",
      scale: 1,
      transformOrigin: "center center",
      duration: 0.8,
      ease: "power2.out",
    });

    gsap.to(numberEl, {
      opacity: 0,
      duration: 0.4,
      ease: "power2.out",
    });

    const currentFontSize = window.getComputedStyle(nameEl).fontSize;
    const fontSizeValue = parseFloat(currentFontSize);
    const scaleValue = (fontSizeValue + 4) / fontSizeValue;

    gsap.to(nameEl, {
      x: hoverXValues[index],
      scale: scaleValue,
      duration: 0.8,
      ease: "power2.out",
    });
  };

  const handleMouseLeave = (index) => {
    if (window.innerWidth < 768) return;

    const overlayEl = overlayRefs.current[index];
    const imageOverlayEl = imageOverlayRefs.current[index];
    const numberEl = numberTextRefs.current[index];
    const nameEl = nameTextRefs.current[index];
    if (!overlayEl || !imageOverlayEl || !numberEl || !nameEl) return;

    gsap.killTweensOf([overlayEl, imageOverlayEl, numberEl, nameEl]);

    gsap.to(overlayEl, {
      width: "100%",
      x: "100%",
      duration: 0.8,
      ease: "power2.inOut",
    });

    gsap.to(imageOverlayEl, {
      x: "100%",
      scale: 1,
      duration: 0.8,
      ease: "power2.inOut",
    });

    gsap.to(numberEl, {
      opacity: 1,
      duration: 0.6,
      delay: 0.2,
      ease: "power2.inOut",
    });

    gsap.to(nameEl, {
      x: 0,
      scale: 1,
      duration: 0.8,
      ease: "power2.inOut",
    });
  };

  return (
    <section
      id="industries"
      className="bg-black text-white font-outfit py-16 sm:py-20 md:py-24 px-4 sm:px-8 lg:px-24 xl:px-20 overflow-hidden"
      style={{ fontFamily: "anta, sans-serif" }}
    >
      {/* TOP SECTION */}
      <div className="flex flex-col md:flex-row justify-between items-start lg:items-center mb-10 sm:mb-14 md:mb-16 gap-6 md:gap-8">
        <div className="flex-1">
          <p className="circle-text text-gray-400 text-white uppercase tracking-widest text-xs sm:text-sm md:text-xs text-center sm:text-left mx-auto sm:mx-0 "
            style={{ fontFamily: "DeaconTest, sans-serif", fontWeight: 600 }}>
            Industries we empower
          </p>

          <h2
            className="text-3xl md:text-4xl lg:text-6xl xl:text-7xl capitalize font-bold leading-tight font-Outfit text-center sm:text-left mx-auto sm:mx-0"
            style={{ fontFamily: "DeaconTest, sans-serif", fontWeight: 600 }}
          >
            Turning <span className="text-yellow-400">vision</span> into impact.
          </h2>
        </div>

        <div className="flex-1 font-worksans text-gray-300 text-justify md:text-right text-md md:text-sm lg:text-lg px-2 md:px-8 mb-8 leading-relaxed max-w-xl"
          style={{ fontFamily: "anta, sans-serif" }}>
          We partner with organizations to unlock new opportunities and
          strengthen workforce capabilities. Through technology, training, and
          strategic collaboration, we enable industries to thrive. Our goal is to
          bridge skill gaps and foster sustainable business ecosystems.
        </div>
      </div>

      {/* -------------------------------------- */}
      {/* 📱 MOBILE VIEW (Updated as you requested) */}
      {/* -------------------------------------- */}
      <div className="block md:hidden">
        {industries.map((industry, index) => (
          <div key={industry.id} className="">
            <div className="relative w-full h-25  overflow-hidden">

              {/* Color Overlay */}
              <div
                className="absolute inset-0 z-10"
                style={{
                  background: mobileColorOverlays[industry.color],
                }}
              />

              {/* Background Image */}
              <img
                src={industryImages[index]}
                alt={industry.name}
                className="w-full h-full object-cover  scale-95"
                style={{ objectPosition: imagePositions[index] }}
              />

              {/* TEXT INSIDE IMAGE */}
              <div className="absolute bottom-8 left-3 z-20">
              <p className="text-[16px] font-semibold flex gap-32">
  <span>{industry.number}</span>
  <span>{industry.name}</span>
</p>

                
                  
             
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* DESKTOP VIEW — NOT TOUCHED */}
      <div className="hidden md:block relative flex flex-col border-t border-gray-700">
        {industries.map((industry, index) => (
          <div
            key={industry.id}
            id="industry-item"
            className="relative grid grid-cols-1 md:grid-cols-2 items-center py-6 sm:py-7 md:py-5 px-2 sm:px-4 md:px-6 border-b border-gray-700 cursor-pointer group overflow-hidden"
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={() => handleMouseLeave(index)}
          >
            <div
              ref={(el) => (overlayRefs.current[index] = el)}
              className="absolute inset-0 z-10"
              style={{
                width: "0%",
                transform: "translateX(0%)",
                backgroundImage: colorGradients[industry.color],
              }}
            ></div>

            <div
              ref={(el) => (imageOverlayRefs.current[index] = el)}
              className="absolute top-0 right-0 h-full w-[60%] z-20"
              style={{
                backgroundImage: `${colorGradients[industry.color]}, url(${industryImages[index]})`,
                backgroundSize: "cover",
                backgroundPosition: imagePositions[index],
                backgroundBlendMode: "multiply",
                transform: "translateX(100%)",
              }}
            ></div>

            <div className="relative z-30 flex justify-start">
              <h3
                ref={(el) => (numberTextRefs.current[index] = el)}
                className="text-xl sm:text-2xl md:text-3xl font-outfit text-gray-300"
              >
                {industry.number}
              </h3>
            </div>

            <div className="relative z-30 flex justify-start">
              <p
                ref={(el) => (nameTextRefs.current[index] = el)}
                className="text-2xl md:text-3xl lg:text-4xl font-outfit text-gray-100"
              >
                {industry.name}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Industries;
