import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function VRHeroSection() {
  const mainRef = useRef(null);
  const canvasRef = useRef(null);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [allImagesLoaded, setAllImagesLoaded] = useState(false);

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

      // Preload single image with promise
      const preloadImage = (index) => {
        return new Promise((resolve, reject) => {
          const img = new Image();
          img.src = currentFrame(index);
          
          img.onload = () => {
            images[index] = img;
            resolve(img);
          };
          
          img.onerror = () => {
            console.error(`Failed to load frame ${index}`);
            reject(new Error(`Failed to load frame ${index}`));
          };
        });
      };

      // Load ALL images with progress tracking
      const loadAllImages = async () => {
        try {
          // Load first frame immediately and show it
          await preloadImage(0);
          render();
          setLoadingProgress(1);

          // Load remaining images in optimized batches
          const batchSize = 10; // Load 10 images at a time
          let loadedCount = 1;

          for (let i = 1; i < frameCount; i += batchSize) {
            const batchPromises = [];
            
            // Create batch of promises
            for (let j = i; j < Math.min(i + batchSize, frameCount); j++) {
              batchPromises.push(preloadImage(j));
            }

            // Wait for current batch to complete
            await Promise.all(batchPromises);
            
            // Update progress
            loadedCount += batchPromises.length;
            setLoadingProgress(loadedCount);
            
            console.log(`Loaded ${loadedCount}/${frameCount} images`);
          }

          // All images loaded successfully
          console.log("✅ All images loaded successfully!");
          setAllImagesLoaded(true);
          
        } catch (error) {
          console.error("Error loading images:", error);
          setAllImagesLoaded(true); // Show content anyway
        }
      };

      // Start loading all images
      loadAllImages();

      // Setup ScrollTrigger
      const scrollTriggerInstance = ScrollTrigger.create({
        trigger: mainRef.current,
        start: "top 510",
        end: `+=${frameCount * 3}`,
        scrub: 1,
        onUpdate: (self) => {
          const targetFrame = Math.min(
            frameCount - 1,
            Math.floor(self.progress * (frameCount - 1))
          );
          
          // Only update if frame exists and is loaded
          if (images[targetFrame]) {
            videoFrames.frame = targetFrame;
            render();
          }
        },
      });

      // Resize handler
      const handleResize = () => {
        setCanvasSize();
        render();
        ScrollTrigger.refresh();
      };

      window.addEventListener("resize", handleResize);

      return () => {
        window.removeEventListener("resize", handleResize);
        scrollTriggerInstance.kill();
      };
    }, mainRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={mainRef}>
      <section className="relative w-full h-[100svh] flex overflow-hidden bg-black">
        <canvas
          ref={canvasRef}
          className="z-10"
        ></canvas>

        {/* Loading Progress Indicator */}
        {!allImagesLoaded && (
          <div className="absolute inset-0 z-30 flex items-center justify-center bg-black/80">
            <div className="text-center text-white">
              <div className="mb-4">
                <div className="w-64 h-2 bg-gray-700 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-white transition-all duration-300"
                    style={{ width: `${(loadingProgress / frameCount) * 100}%` }}
                  ></div>
                </div>
              </div>
              <p className="text-sm">
                Loading {loadingProgress}/{frameCount} frames
              </p>
            </div>
          </div>
        )}

        {/* Main Content */}
        <div className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none">
          <div className="text-center text-white">
            <h2
              className="text-4xl md:text-6xl font-bold mb-4"
              style={{ fontFamily: "Outfit, sans-serif" }}
            >
              Experience Virtual Reality
            </h2>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 pointer-events-none">
          {/* Commented out as per your original code */}
        </div>
      </section>
    </div>
  );
}

export default VRHeroSection;
