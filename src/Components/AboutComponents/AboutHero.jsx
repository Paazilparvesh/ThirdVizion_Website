import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import threed from "/src/assets/AboutImages/group.png";

gsap.registerPlugin(ScrollTrigger);

export default function AboutHero() {
  const headerRef = useRef(null);
  const wrapperRef = useRef(null);
  const imgHolderRef = useRef(null);
  const scrollButtonRef = useRef(null);
  const mobileImageRef = useRef(null);
  const mobileImageContainerRef = useRef(null);
  const [showScrollButton, setShowScrollButton] = useState(true);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  // New useEffect to center the image on mount and resize
  useEffect(() => {
    const centerImage = () => {
      if (mobileImageContainerRef.current) {
        const container = mobileImageContainerRef.current;
        // Calculate the center position (scroll to 25% of total scrollable width)
        // Since image is 200vw, container is 100vw, so center is at 50vw which is 25% of 200vw
        const scrollWidth = container.scrollWidth;
        const containerWidth = container.clientWidth;
        const centerPosition = (scrollWidth - containerWidth) / 2;
        
        container.scrollLeft = centerPosition;
      }
    };

    // Center on initial mount
    centerImage();

    // Also center on window resize
    const handleResize = () => {
      centerImage();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const header = headerRef.current;
      const wrapper = wrapperRef.current;
      const imgHolder = imgHolderRef.current;
      const scrollButton = scrollButtonRef.current;
      
      if (!header || !wrapper || !imgHolder) return;

      const aboutText = header.querySelector(".about-text");
      const thirdText = header.querySelector(".third-text");
      const vizionText = header.querySelector(".vizion-text");
      const innerImg = imgHolder.querySelector("img");

      ScrollTrigger.matchMedia({
        "(min-width: 1024px)": () => {
          // Reset all transforms before animation
          gsap.set([aboutText, thirdText, vizionText, imgHolder, innerImg], {
            clearProps: "transform,opacity,clipPath,borderRadius"
          });

          // Scroll button animation - hide when scrolling starts
          if (scrollButton) {
            gsap.to(scrollButton, {
              opacity: 0,
              y: 20,
              ease: "power2.out",
              duration: 0.5,
              scrollTrigger: {
                trigger: wrapper,
                start: "top top",
                end: "top+=100 top",
                onEnter: () => setShowScrollButton(false),
                onLeaveBack: () => setShowScrollButton(true),
                onEnterBack: () => setShowScrollButton(false),
              }
            });
          }

          // Create a master timeline for smoother sequencing
          const masterTL = gsap.timeline({
            scrollTrigger: {
              trigger: wrapper,
              start: "top top",
              end: "+=300%",
              scrub: 1.5,
              pin: imgHolder,
              anticipatePin: 1,
              markers: false,
            }
          });

          // Text animations with better timing
          if (aboutText) {
            masterTL.to(aboutText, {
              y: -200,
              opacity: 0,
              ease: "power2.inOut",
            }, 0);
          }

          if (thirdText) {
            masterTL.to(thirdText, {
              x: -window.innerWidth * 1.5,
              scale: 3,
              opacity: 0,
              ease: "power2.inOut",
            }, 0);
          }

          if (vizionText) {
            masterTL.to(vizionText, {
              x: window.innerWidth * 1.5,
              scale: 3,
              opacity: 0,
              ease: "power2.inOut",
            }, 0);
          }

          // Image holder animation
          masterTL.fromTo(imgHolder, 
            {
              scale: 0,
              rotate: 30,
              clipPath: "polygon(37.5% 20%, 62.5% 20%, 62.5% 80%, 37.5% 80%)",
            },
            {
              scale: 1,
              rotate: 0,
              clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
              ease: "power2.inOut",
              duration: 1,
            },
            0
          );

          // Inner image animation with better timing - FULL WIDTH
          if (innerImg) {
            masterTL.fromTo(innerImg, 
              {
                scale: 2, // Start with zoomed in
                width: "100%", // Full width
              },
              {
                scale: 1, // End with normal scale
                width: "90%", // Maintain full width
                y: 60,
                borderRadius: "10rem",
                ease: "power2.inOut",
              }, 
              0.5
            );
          }
        },

        "(max-width: 1023px)": () => {
          // Mobile scroll button animation
          if (scrollButton) {
            gsap.to(scrollButton, {
              opacity: 0,
              y: 20,
              ease: "power2.out",
              duration: 0.5,
              scrollTrigger: {
                trigger: wrapper,
                start: "top top",
                end: "top+=50 top",
                onEnter: () => setShowScrollButton(false),
                onLeaveBack: () => setShowScrollButton(true),
                onEnterBack: () => setShowScrollButton(false),
              }
            });
          }
        },
      });
    }, wrapperRef);

    const handleResize = () => {
      ScrollTrigger.refresh();
    };

    // Debounced resize handler for better performance
    let resizeTimeout;
    const debouncedResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(handleResize, 250);
    };

    window.addEventListener("resize", debouncedResize);

    return () => {
      window.removeEventListener("resize", debouncedResize);
      clearTimeout(resizeTimeout);
      ctx.revert();
    };
  }, []);

  // Mobile image drag handlers - FIXED VERSION
  const handleTouchStart = (e) => {
    setIsDragging(true);
    const touch = e.touches[0];
    setStartX(touch.clientX);
    setScrollLeft(mobileImageContainerRef.current.scrollLeft);
    e.preventDefault();
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    const touch = e.touches[0];
    const x = touch.clientX;
    const walk = (x - startX) * 1.5; // Adjust sensitivity
    mobileImageContainerRef.current.scrollLeft = scrollLeft - walk;
    e.preventDefault();
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  // Mouse handlers for desktop testing
  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX);
    setScrollLeft(mobileImageContainerRef.current.scrollLeft);
    mobileImageContainerRef.current.style.cursor = 'grabbing';
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    const x = e.pageX;
    const walk = (x - startX) * 1.5;
    mobileImageContainerRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    mobileImageContainerRef.current.style.cursor = 'grab';
  };

  const handleScrollDown = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  return (
    <div className="relative w-full min-h-screen bg-black overflow-hidden">

      {/* Scroll Down Button */}
      {/* Scroll Down Button */}
      {showScrollButton && (
        <div
          ref={scrollButtonRef}
          className="fixed bottom-8 left-1/2 hidden sm:block transform -translate-x-1/2 z-50 cursor-pointer"
          onClick={handleScrollDown}
        >
          <div className="flex flex-col items-center justify-center">
            <div className="text-white text-sm font-inter-tight mb-2 uppercase tracking-wider">
              Scroll Down
            </div>
            <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white rounded-full mt-2 animate-bounce"></div>
            </div>
          </div>
        </div>
      )}

      {/* Desktop Header - Fixed position for laptops */}
      <div
        ref={headerRef}
        className="hidden lg:flex fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex-col justify-center items-center w-full z-30 pointer-events-none"
        style={{ fontFamily: "Outfit, sans-serif" }}
      >
        <div className="about-text font-inter-tight text-md xl:text-2xl md:mr-6 xl:mr-10 -mb-5 md:-mb-8 xl:-mb-10 font-medium text-white text-center uppercase">
          About
        </div>

        <div className="flex gap-2 xl:gap-6 mt-4">
          <div className="third-text font-inter-tight text-4xl md:text-[5rem] xl:text-[12rem] font-medium uppercase bg-gradient-to-r from-yellow-400 via-green-500 to-red-500 bg-clip-text text-transparent">
            Third
          </div>
          <div className="vizion-text font-inter-tight text-4xl md:text-[5rem] xl:text-[12rem] font-medium uppercase bg-gradient-to-r from-yellow-400 via-green-500 to-red-500 bg-clip-text text-transparent">
            Vizion
          </div>
        </div>
      </div>

      <div ref={wrapperRef} className="w-full relative">
        {/* Desktop scroll section */}
        <div className="hidden lg:block min-h-[100vh]">
          <div className="sticky top-0 w-full min-h-screen z-10">
            <div
              ref={imgHolderRef}
              className="sticky top-0 w-full h-screen bg-black flex items-center justify-center overflow-hidden"
            >
              <img
                src={threed}
                alt="3d visual"
                className="w-full h-full object-contain transform-gpu"
              />
            </div>
          </div>
        </div>

        {/* Mobile Layout - Ultra Minimal & Professional */}
        <div className="lg:hidden w-full bg-black min-h-screen">
          {/* Hero Image Section - Full Screen with Horizontal Drag */}
          <div 
            ref={mobileImageContainerRef}
            className="relative w-full h-[60vh] bg-gradient-to-br from-gray-900 to-black overflow-x-auto overflow-y-hidden"
            style={{ 
              cursor: 'grab',
              WebkitOverflowScrolling: 'touch',
              scrollBehavior: 'smooth'
            }}
          >
            <div 
              className="w-[200vw] h-full flex" // Double width for horizontal scroll
            >
              <img
                ref={mobileImageRef}
                src={threed}
                alt="Third Vizion"
                className="w-[200vw] h-full object-cover opacity-90 min-w-0 flex-shrink-0"
                style={{ 
                  pointerEvents: 'none',
                  userSelect: 'none',
                  WebkitUserSelect: 'none'
                }}
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUp}
                onMouseLeave={handleMouseUp}
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
              />
            </div>
            
          

            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent pointer-events-none"></div>
          </div>

          {/* Content Section */}
          <div className="relative -mt-2 bg-black rounded-t-4xl pt-12 px-6 pb-16">
            {/* Company Badge */}
            <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
  <div className="bg-gradient-to-r from-yellow-400 to-red-500 px-4 py-5 rounded-full">
    <div className="flex items-center gap-3">
      {/* Left (same) SVG */}
      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
          d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
      </svg>

      {/* Center text */}
      <span className="text-black font-semibold text-sm tracking-wider whitespace-nowrap"  style={{ fontFamily: "'anta', sans-serif" }}>
        Drag to explore
      </span>

      {/* Right (same) SVG */}
      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
          d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
      </svg>
    </div>
  </div>
</div>


            {/* Minimal Header */}
            <div className="text-center mb-12">
              <div className="text-gray-400 text-sm font-light tracking-widest uppercase mb-2"  style={{ fontFamily: "'Work Sans', sans-serif" }}>
                About Us
              </div>
              <h1 className="text-4xl font-light text-white mb-4"  style={{ fontFamily: "'Work Sans', sans-serif" }}>
                Third <span className="font-lightbold">Vizion</span>
              </h1>
              <div className="w-20 h-0.5 bg-gradient-to-r from-yellow-400 to-red-500 mx-auto"></div>
            </div>

            {/* Core Description */}
            <div className="max-w-md mx-auto space-y-6 text-center">
              <p className="text-gray-300 text-lg leading-relaxed font-light"  style={{ fontFamily: "'outfit', sans-serif" }}>
                 Blending innovation with clarity to create digital experiences that feel effortless, 
  intuitive, and undeniably modern
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Hide scrollbar styles */}
      <style jsx>{`
        .overflow-x-auto::-webkit-scrollbar {
          display: none;
        }
        .overflow-x-auto {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
}