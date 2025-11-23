import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function VRHeroSection() {
  const mainRef = useRef(null);
  const canvasRef = useRef(null);
  const loadingRef = useRef(null);

  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  const frameCount = 192;
  const startFrame = 86400;

  useEffect(() => {
    const ctx = gsap.context(() => {
      const canvas = canvasRef.current;
      const context = canvas.getContext("2d");

      const setCanvasSize = () => {
        const pixelRatio = window.devicePixelRatio || 1;
        canvas.width = window.innerWidth * pixelRatio;
        canvas.height = window.innerHeight * pixelRatio;
        canvas.style.width = window.innerWidth + "px";
        canvas.style.height = window.innerHeight + "px";
        context.setTransform(1, 0, 0, 1, 0, 0);
        context.scale(pixelRatio, pixelRatio);
      };

      setCanvasSize();

      // -------------------------------------
      // FRAME PATH
      // -------------------------------------
      const currentFrame = (index) =>
        `/vr/Timeline 1_${(startFrame + index)
          .toString()
          .padStart(8, "0")}.jpg`;

      const images = [];
      const videoFrames = { frame: 0 };
      let loadedCount = 0;

      const updateProgress = () => {
        loadedCount++;
        const newProgress = Math.min(100, Math.round((loadedCount / frameCount) * 100));
        setProgress(newProgress);
      };

      const render = () => {
        const pixelRatio = window.devicePixelRatio || 1;
        const canvasWidth = canvas.width / pixelRatio;
        const canvasHeight = canvas.height / pixelRatio;

        context.clearRect(0, 0, canvas.width, canvas.height);
        const img = images[videoFrames.frame];

        if (img?.complete && img.naturalWidth > 0) {
          const imageAspect = img.naturalWidth / img.naturalHeight;
          const canvasAspect = canvasWidth / canvasHeight;

          let drawWidth, drawHeight, drawX, drawY;

          if (imageAspect > canvasAspect) {
            drawHeight = canvasHeight;
            drawWidth = drawHeight * imageAspect;
            drawX = (canvasWidth - drawWidth) / 2;
            drawY = 0;
          } else {
            drawWidth = canvasWidth;
            drawHeight = drawWidth / imageAspect;
            drawX = 0;
            drawY = (canvasHeight - drawHeight) / 2;
          }

          context.drawImage(img, drawX, drawY, drawWidth, drawHeight);
        }
      };

      // -------------------------------------
      // LOAD FIRST FRAME IMMEDIATELY
      // -------------------------------------
      const firstImage = new Image();
      firstImage.src = currentFrame(0);

      firstImage.onload = () => {
        images[0] = firstImage;
        render();
        updateProgress();
      };

      // -------------------------------------
      // PRELOAD ALL FRAMES WITH PROGRESS TRACKING
      // -------------------------------------
      const loadImages = () => {
        const promises = [];

        for (let i = 0; i < frameCount; i++) {
          const promise = new Promise((resolve) => {
            const img = new Image();
            img.onload = () => {
              images[i] = img;
              updateProgress();
              resolve();
            };
            img.onerror = () => {
              updateProgress();
              resolve();
            };
            img.src = currentFrame(i);
          });
          promises.push(promise);
        }

        // When all images are loaded
        Promise.all(promises).then(() => {
          // Add a small delay for smooth transition
          setTimeout(() => {
            setLoading(false);
            
            // Animate out the loading screen
            gsap.to(loadingRef.current, {
              opacity: 0,
              duration: 0.8,
              ease: "power2.inOut",
              onComplete: () => {
                // Ensure loading state is false
                setLoading(false);
              }
            });
          }, 500);
        });
      };

      loadImages();

      // -------------------------------------
      // SCROLLTRIGGER
      // -------------------------------------
      const setupScrollAnimations = () => {
        ScrollTrigger.create({
          trigger: mainRef.current,
          start: "top 510",
          end: `+=${frameCount * 3}`,
          scrub: 1,
          onUpdate: (self) => {
            const targetFrame = Math.min(
              frameCount - 1,
              Math.floor(self.progress * (frameCount - 1))
            );
            videoFrames.frame = targetFrame;
            render();
          },
        });
      };

      setupScrollAnimations();

      // -------------------------------------
      // RESIZE HANDLER
      // -------------------------------------
      const handleResize = () => {
        setCanvasSize();
        render();
        ScrollTrigger.refresh();
      };

      window.addEventListener("resize", handleResize);

      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }, mainRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={mainRef}>
      <section className="relative w-full h-[100svh] flex overflow-hidden bg-black">
        <canvas ref={canvasRef} className="z-10"></canvas>

        {/* Enhanced Loading Screen */}
        {loading && (
          <div 
            ref={loadingRef}
            className="absolute inset-0 flex items-center justify-center bg-black z-50"
          >
            <div className="text-center text-white">
              {/* Animated VR Icon */}
              <div className="relative mb-8">
                <div className="w-20 h-20 border-4 border-violet-500 rounded-lg mx-auto animate-pulse">
                  <div className="w-16 h-16 border-2 border-violet-300 rounded m-1 animate-ping"></div>
                </div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="w-8 h-8 bg-violet-500 rounded-full animate-bounce"></div>
                </div>
              </div>

              {/* Loading Text */}
              <h3 
                className="text-2xl md:text-3xl font-bold mb-4 bg-gradient-to-r from-violet-400 to-indigo-400 bg-clip-text text-transparent"
                style={{ fontFamily: "Outfit, sans-serif" }}
              >
                Loading VR Experience
              </h3>

              {/* Progress Bar */}
              <div className="w-64 md:w-80 h-2 bg-gray-700 rounded-full overflow-hidden mx-auto mb-4">
                <div 
                  className="h-full bg-gradient-to-r from-violet-500 to-indigo-500 rounded-full transition-all duration-300 ease-out"
                  style={{ width: `${progress}%` }}
                ></div>
              </div>

              {/* Progress Percentage */}
              <p className="text-gray-300 text-sm mb-2">
                {progress}% Complete
              </p>

              {/* Loading Dots Animation */}
              <div className="flex justify-center space-x-1">
                <div className="w-2 h-2 bg-violet-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                <div className="w-2 h-2 bg-violet-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                <div className="w-2 h-2 bg-violet-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
              </div>

              {/* Hint Text */}
              <p className="text-gray-400 text-xs mt-6 max-w-md mx-auto">
                Preparing immersive virtual reality experience...
              </p>
            </div>
          </div>
        )}

        {/* Main Content - Only visible after loading */}
        {!loading && (
          <div className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none">
            <div className="text-center text-white">
              <h2
                className="text-4xl md:text-6xl font-bold mb-4"
                style={{ fontFamily: "Outfit, sans-serif" }}
              >
                {/* Add your title here */}
              </h2>
            </div>
          </div>
        )}

        {/* Scroll Indicator - Only visible after loading */}
        {!loading && (
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 pointer-events-none">
            <div className="text-center text-white/70">
              <p className="text-sm mb-2">Scroll to explore</p>
              <div className="w-6 h-10 border-2 border-white/50 rounded-full mx-auto flex justify-center">
                <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-bounce"></div>
              </div>
            </div>
          </div>
        )}
      </section>
    </div>
  );
}

export default VRHeroSection;