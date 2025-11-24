import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ContactHeroimg from "/src/assets/home/pex.jpg";

gsap.registerPlugin(ScrollTrigger);

export default function ContactHero() {
  const headerRef = useRef(null);
  const wrapperRef = useRef(null);
  const imgHolderRef = useRef(null);
  const mobileImageRef = useRef(null);
  const mobileImageContainerRef = useRef(null);
  const scrollButtonRef = useRef(null);
  const [showScrollButton, setShowScrollButton] = useState(true);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  // useEffect to center the image on mount and resize
  useEffect(() => {
    const centerImage = () => {
      if (mobileImageContainerRef.current) {
        const container = mobileImageContainerRef.current;
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

      const contactText = header.querySelector(".contact-text");
      const getText = header.querySelector(".get-text");
      const touchText = header.querySelector(".touch-text");
      const innerImg = imgHolder.querySelector("img");

      ScrollTrigger.matchMedia({
        "(min-width: 1024px)": () => {
          // Reset all transforms before animation
          gsap.set([contactText, getText, touchText, imgHolder, innerImg], {
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
          if (contactText) {
            masterTL.to(contactText, {
              y: -200,
              opacity: 0,
              ease: "power2.inOut",
            }, 0);
          }

          if (getText) {
            masterTL.to(getText, {
              x: -window.innerWidth * 1.5,
              scale: 3,
              opacity: 0,
              rotation: -10,
              ease: "power2.inOut",
            }, 0);
          }

          if (touchText) {
            masterTL.to(touchText, {
              x: window.innerWidth * 1.5,
              scale: 3,
              opacity: 0,
              rotation: 10,
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

          // Inner image animation with better timing
          if (innerImg) {
            masterTL.fromTo(innerImg, 
              {
                scale: 2,
              },
              {
                scale: 0.8,
                y: 60,
                borderRadius: "5rem",
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

  // Mobile image drag handlers
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
    const walk = (x - startX) * 1.5;
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
        <div className="contact-text text-md xl:text-2xl mb-4 font-bold text-center uppercase font-[Inter_Tight]">
          Contact
        </div>
        <div className="flex gap-3 xl:gap-8 mt-2 font-[Inter_Tight] ">
          <div 
            className="get-text text-5xl md:text-[6rem] xl:text-[12rem] font-medium uppercase bg-clip-text text-transparent"
            style={{
              backgroundImage: "linear-gradient(135deg, #FFD700 0%, #FFB700 25%, #FFAA00 50%, #FF9900 75%, #E5C100 100%)",
              fontFamily: "Outfit, sans-serif"
           
            }}
          >
            Get in
          </div>
          <div 
            className="touch-text text-5xl md:text-[6rem] xl:text-[12rem] font-medium uppercase bg-clip-text text-transparent"
            style={{
              backgroundImage: "linear-gradient(135deg, #FFD700 0%, #FFB700 25%, #FFAA00 50%, #FF9900 75%, #E5C100 100%)",
           
             fontFamily: "Outfit, sans-serif" }}
          >
            Touch
          </div>
        </div>
      </div>

      <div ref={wrapperRef} className="w-full relative">
        {/* Desktop scroll section */}
        <div className="hidden lg:block min-h-[300vh]">
          <div className="sticky top-0 w-full min-h-screen z-10">
            <div
              ref={imgHolderRef}
              className="sticky top-0 w-full h-screen bg-black flex items-center justify-center overflow-hidden"
            >
              <img
                src={ContactHeroimg}
                alt="Contact Visual"
                className="w-full h-full object-contain transform-gpu"
              />
            </div>
          </div>
        </div>

        {/* Mobile Layout - Same as About Page */}
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
            <div className="w-[200vw] h-full flex">
              <img
                ref={mobileImageRef}
                src={ContactHeroimg}
                alt="Contact Visual"
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

          {/* Content Section - Same as About Page */}
          <div className="relative -mt-20 bg-black rounded-t-3xl pt-12 px-6 pb-16">
            {/* Company Badge */}
            <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
              <div className="bg-gradient-to-r from-yellow-400 to-red-500 px-6 py-3 rounded-full">
                <span className="text-black font-semibold text-sm tracking-wider" style={{ fontFamily: "'outfit', sans-serif" }}> Contact Us</span>
              </div>
            </div>

            {/* Minimal Header */}
            <div className="text-center mb-12">
           
              <h1 className="text-4xl font-light text-white mb-4"  style={{ fontFamily: "'outfit', sans-serif" }}>
                Get In <span className="font-semilight">Touch</span>
              </h1>
              <div className="w-20 h-0.5 bg-gradient-to-r from-yellow-400 to-red-500 mx-auto"></div>
            </div>

            {/* Core Description */}
            <div className="max-w-md mx-auto space-y-6 text-center">
              <p className="text-gray-300 text-lg leading-relaxed font-light"  style={{ fontFamily: "'Work Sans', sans-serif" }}>
                Ready to bring your vision to life? Let's start a conversation about 
                your next project and create something extraordinary together.
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