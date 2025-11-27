import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function VRHeroSection() {
  const mainRef = useRef(null);
  const canvasRef = useRef(null);
  const [loadingProgress, setLoadingProgress] = useState(0);

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

      // Frame path generator
      const currentFrame = (index) =>
        `/vr/Timeline 1_${(startFrame + index)
          .toString()
          .padStart(8, "0")}.jpg`;

      const images = [];
      const videoFrames = { frame: 0 };

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

      // Optimized parallel loading with progress tracking
      let loadedCount = 0;
      const loadPromises = [];

      // Priority loading: Load first 10 frames immediately for instant start
      const priorityFrames = 10;
      
      for (let i = 0; i < priorityFrames; i++) {
        const img = new Image();
        img.src = currentFrame(i);
        
        const promise = new Promise((resolve) => {
          img.onload = () => {
            images[i] = img;
            loadedCount++;
            setLoadingProgress(Math.floor((loadedCount / frameCount) * 100));
            if (i === 0) render(); // Render first frame immediately
            resolve();
          };
          img.onerror = () => {
            console.warn(`Failed to load frame ${i}`);
            resolve();
          };
        });
        
        loadPromises.push(promise);
      }

      // Load remaining frames in batches for faster loading
      const batchSize = 10; // Load 10 images at a time
      
      const loadBatch = (startIndex, endIndex) => {
        for (let i = startIndex; i < endIndex && i < frameCount; i++) {
          const img = new Image();
          img.src = currentFrame(i);
          
          const promise = new Promise((resolve) => {
            img.onload = () => {
              images[i] = img;
              loadedCount++;
              setLoadingProgress(Math.floor((loadedCount / frameCount) * 100));
              resolve();
            };
            img.onerror = () => {
              console.warn(`Failed to load frame ${i}`);
              resolve();
            };
          });
          
          loadPromises.push(promise);
        }
      };

      // Load in batches with slight delays for better performance
      const loadAllBatches = async () => {
        for (let i = priorityFrames; i < frameCount; i += batchSize) {
          loadBatch(i, i + batchSize);
          await new Promise(resolve => setTimeout(resolve, 50)); // Small delay between batches
        }
      };

      loadAllBatches();

      // Setup ScrollTrigger with smoother settings
      const scrollTriggerInstance = ScrollTrigger.create({
        trigger: mainRef.current,
        start: "top 510",
        end: `+=${frameCount * 5}`, // Increased multiplier for smoother scrolling
        scrub: 0.5, // Reduced scrub value for faster response
        pin: false,
        anticipatePin: 1,
        onUpdate: (self) => {
          const targetFrame = Math.min(
            frameCount - 1,
            Math.floor(self.progress * (frameCount - 1))
          );
          
          // Only update if frame changed to reduce unnecessary renders
          if (videoFrames.frame !== targetFrame && images[targetFrame]) {
            videoFrames.frame = targetFrame;
            requestAnimationFrame(render); // Use RAF for better performance
          }
        },
      });

      // Resize handler with debounce
      let resizeTimeout;
      const handleResize = () => {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(() => {
          setCanvasSize();
          render();
          ScrollTrigger.refresh();
        }, 150);
      };

      window.addEventListener("resize", handleResize);

      return () => {
        window.removeEventListener("resize", handleResize);
        clearTimeout(resizeTimeout);
        scrollTriggerInstance.kill();
      };
    }, mainRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={mainRef}>
      <section className="relative w-full h-[100svh] flex overflow-hidden bg-black">
        <canvas ref={canvasRef} className="z-10" style={{ willChange: 'transform' }}></canvas>

        {/* Loading Indicator */}
        {loadingProgress < 100 && (
          <div className="absolute inset-0 z-30 flex items-center justify-center bg-black/50 backdrop-blur-sm">
            <div className="text-center text-white">
              <div className="w-48 h-2 bg-gray-800 rounded-full overflow-hidden mb-4">
                <div 
                  className="h-full bg-gradient-to-r from-yellow-400 to-red-500 transition-all duration-300"
                  style={{ width: `${loadingProgress}%` }}
                ></div>
              </div>
              <p className="text-sm font-medium" style={{ fontFamily: "Outfit, sans-serif" }}>
                Loading Experience... {loadingProgress}%
              </p>
            </div>
          </div>
        )}

        {/* Main Content - Always visible */}
        <div className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none">
          <div className="text-center text-white">
            <h2
              className="text-4xl md:text-6xl font-bold mb-4"
              style={{ fontFamily: "DeaconTest, sans-serif" }}
            >
              Experience Virtual Reality
            </h2>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 pointer-events-none">
          {/* Uncomment if needed
          <div className="text-center text-white/70">
            <p className="text-sm mb-2">Scroll to explore</p>
            <div className="w-6 h-10 border-2 border-white/50 rounded-full mx-auto flex justify-center">
              <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-bounce"></div>
            </div>
          </div>
          */}
        </div>
      </section>
    </div>
  );
}

export default VRHeroSection;
