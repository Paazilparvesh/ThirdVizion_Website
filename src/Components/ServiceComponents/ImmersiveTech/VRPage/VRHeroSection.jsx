import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function VRHeroSection() {
  const mainRef = useRef(null);
  const canvasRef = useRef(null);
  const [isReady, setIsReady] = useState(false);

  const frameCount = 192;
  const startFrame = 86400;
  const priorityFrames = 20; // Load first 20 frames quickly

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

      // Priority loading - load first frame immediately
      const firstImage = new Image();
      firstImage.src = currentFrame(0);
      firstImage.onload = () => {
        images[0] = firstImage;
        render();
        setIsReady(true); // Show component immediately after first frame

        // Load priority frames (first 20) quickly in batches
        const loadPriorityBatch = async () => {
          const batchSize = 5;
          for (let i = 1; i < priorityFrames; i += batchSize) {
            const promises = [];
            for (let j = i; j < Math.min(i + batchSize, priorityFrames); j++) {
              promises.push(
                new Promise((resolve) => {
                  const img = new Image();
                  img.src = currentFrame(j);
                  img.onload = () => {
                    images[j] = img;
                    resolve();
                  };
                  img.onerror = resolve;
                })
              );
            }
            await Promise.all(promises);
          }

          // Load remaining frames in background with lower priority
          for (let i = priorityFrames; i < frameCount; i++) {
            const img = new Image();
            img.src = currentFrame(i);
            img.onload = () => {
              images[i] = img;
            };
          }
        };

        loadPriorityBatch();
      };

      firstImage.onerror = () => {
        console.error("Failed to load first frame");
        setIsReady(true); // Show component anyway
      };

      // Setup ScrollTrigger
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

      // Resize handler
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
        <canvas
          ref={canvasRef}
          className={`z-10 transition-opacity duration-500 ${
            isReady ? "opacity-100" : "opacity-0"
          }`}
        ></canvas>

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
