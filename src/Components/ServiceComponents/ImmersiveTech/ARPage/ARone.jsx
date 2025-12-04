// ArPage.jsx
import React, { useRef, useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { Html, useGLTF } from "@react-three/drei";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import Lottie from "lottie-react";
import aiBrain from "../../../../assets/Animations/voice.json";

/**
 * Single-file component that:
 * - Shows a minimal interface with only AR functionality
 * - On mobile, opens a WebXR immersive-ar session with hit-test placement
 * - Places only one model at a time with enhanced lighting and auto-rotation
 * - Supports gesture controls (drag, rotate, zoom) for placed models
 *
 * Usage: <ArPage />
 */

// ------------ Config ------------
const MODEL_URL = "/models/canon_at-1_retro_camera/scene.gltf";

// ------------ Helpers ------------
function isMobile() {
  return /Mobi|Android|iPhone|iPad|iPod|Mobile/i.test(navigator.userAgent);
}

// ---------------------- Gesture Controls Component ----------------------
function GestureControls({ modelRef, zoomSpeed = 0.02 }) {
  const lastAngle = useRef(null);
  const lastDistance = useRef(null);
  const dragging = useRef(false);
  const lastPos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const getDistance = (t1, t2) => {
      const dx = t2.clientX - t1.clientX;
      const dy = t2.clientY - t1.clientY;
      return Math.sqrt(dx * dx + dy * dy);
    };

    const handleTouchStart = (e) => {
      if (e.touches.length === 1) {
        dragging.current = true;
        lastPos.current = {
          x: e.touches[0].clientX,
          y: e.touches[0].clientY,
        };
      }
    };

    const handleTouchMove = (e) => {
      if (!modelRef.current) return;

      // Prevent scrolling
      e.preventDefault();

      // --------------------------
      // 1-FINGER DRAG (Snapchat style)
      // --------------------------
      if (e.touches.length === 1 && dragging.current) {
        const touch = e.touches[0];

        const dx = touch.clientX - lastPos.current.x;
        const dy = touch.clientY - lastPos.current.y;

        modelRef.current.position.x += dx * 0.0005;
        modelRef.current.position.y -= dy * 0.0005;

        lastPos.current = { x: touch.clientX, y: touch.clientY };
      }

      // --------------------------
      // 2-FINGER ROTATE + PINCH ZOOM
      // --------------------------
      if (e.touches.length === 2) {
        const [t1, t2] = e.touches;

        // ROTATION
        const dx = t2.clientX - t1.clientX;
        const dy = t2.clientY - t1.clientY;
        const angle = Math.atan2(dy, dx);

        if (lastAngle.current !== null) {
          const delta = angle - lastAngle.current;
          modelRef.current.rotation.y += delta * 2; // rotation speed
        }
        lastAngle.current = angle;

        // PINCH ZOOM
        const dist = getDistance(t1, t2);

        if (lastDistance.current !== null) {
          const diff = dist - lastDistance.current;
          modelRef.current.scale.multiplyScalar(1 + diff * zoomSpeed);
        }

        lastDistance.current = dist;
      }
    };

    const handleTouchEnd = () => {
      dragging.current = false;
      lastAngle.current = null;
      lastDistance.current = null;
    };

    window.addEventListener("touchstart", handleTouchStart, { passive: false });
    window.addEventListener("touchmove", handleTouchMove, { passive: false });
    window.addEventListener("touchend", handleTouchEnd);
    window.addEventListener("touchcancel", handleTouchEnd);

    return () => {
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleTouchEnd);
      window.removeEventListener("touchcancel", handleTouchEnd);
    };
  }, [modelRef, zoomSpeed]);

  return null;
}

// ---------------------- Main Component ----------------------
export default function ArPage() {
  const [showArUnavailableMsg, setShowArUnavailableMsg] = useState(false);
  const [startingAr, setStartingAr] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const xrRendererRef = useRef(null);
  const xrSessionRef = useRef(null);
  const currentModelRef = useRef(null);
  const initialDistanceRef = useRef(null);
  const initialScaleRef = useRef(1.4); // Default scale
  const animationFrameIdRef = useRef(null);
  const [modelPlaced, setModelPlaced] = useState(false);

  // Start the WebXR session and create a Three.js XR-renderer world
  const startAR = async () => {
    if (!isMobile()) {
      setShowArUnavailableMsg(true);
      return;
    }

    if (!navigator.xr) {
      setShowArUnavailableMsg(true);
      return;
    }

    setStartingAr(true);

    try {
      const supported = await navigator.xr.isSessionSupported("immersive-ar");
      if (!supported) {
        setShowArUnavailableMsg(true);
        setStartingAr(false);
        return;
      }

      const renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true,
      });
      renderer.setPixelRatio(window.devicePixelRatio);
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.xr.enabled = true;
      renderer.xr.setReferenceSpaceType("local-floor");

      renderer.domElement.style.position = "fixed";
      renderer.domElement.style.top = "0";
      renderer.domElement.style.left = "0";
      renderer.domElement.style.width = "100%";
      renderer.domElement.style.height = "100%";
      renderer.domElement.style.zIndex = "9999";
      document.body.appendChild(renderer.domElement);

      xrRendererRef.current = renderer;

      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera();

      // Enhanced lighting setup
      const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
      scene.add(ambientLight);

      const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
      directionalLight.position.set(5, 10, 5);
      directionalLight.castShadow = true;
      directionalLight.shadow.mapSize.width = 2048;
      directionalLight.shadow.mapSize.height = 2048;
      scene.add(directionalLight);

      const hemisphereLight = new THREE.HemisphereLight(0xffffff, 0x444444, 0.4);
      scene.add(hemisphereLight);

      const pointLight = new THREE.PointLight(0xffffff, 0.5, 100);
      pointLight.position.set(0, 5, 0);
      scene.add(pointLight);

      const reticle = new THREE.Mesh(
        new THREE.RingGeometry(0.08, 0.12, 32).rotateX(-Math.PI / 2),
        new THREE.MeshBasicMaterial({ color: 0xffffff, opacity: 0.9, transparent: true })
      );
      reticle.matrixAutoUpdate = false;
      reticle.visible = false;
      scene.add(reticle);

      const placed = new THREE.Group();
      scene.add(placed);

      const loader = new GLTFLoader();
      const gltf = await new Promise((res, rej) => {
        loader.load(
          MODEL_URL,
          (g) => res(g),
          undefined,
          (e) => rej(e)
        );
      });

      const createModelInstance = () => {
        const clone = THREE.SkeletonUtils ? THREE.SkeletonUtils.clone(gltf.scene) : gltf.scene.clone(true);
        clone.scale.setScalar(initialScaleRef.current);
        
        // Enhanced model materials and properties
        clone.traverse((child) => {
          if (child.isMesh) {
            // Enable shadows
            child.castShadow = true;
            child.receiveShadow = true;
            
            // Enhance materials
            if (child.material) {
              child.material.metalness = 0.4;
              child.material.roughness = 0.5;
              child.material.envMapIntensity = 1.0;
              
              // Make materials more responsive to lighting
              if (child.material.isMeshStandardMaterial) {
                child.material.needsUpdate = true;
              }
            }
          }
        });
        
        return clone;
      };

      // Function to start auto-rotation animation
      const startAutoRotation = (model) => {
        if (animationFrameIdRef.current) {
          cancelAnimationFrame(animationFrameIdRef.current);
        }

        const animate = () => {
          if (model && model.rotation) {
            // Smooth 360-degree rotation on Y axis
            model.rotation.y += 0.01; // Adjust speed as needed (0.01 = slow rotation)
          }
          animationFrameIdRef.current = requestAnimationFrame(animate);
        };
        
        animationFrameIdRef.current = requestAnimationFrame(animate);
      };

      const placeModel = () => {
        if (!reticle.visible) return;
        
        // Remove existing model if any
        if (currentModelRef.current) {
          placed.remove(currentModelRef.current);
          if (animationFrameIdRef.current) {
            cancelAnimationFrame(animationFrameIdRef.current);
          }
        }
        
        const model = createModelInstance();
        const matrix = new THREE.Matrix4();
        matrix.copy(reticle.matrix);
        model.applyMatrix4(matrix);
        model.position.y += 0.0;
        
        // Add enhanced lighting specifically for the model
        const modelLight = new THREE.SpotLight(0xffffff, 0.3, 10, Math.PI / 8, 0.5);
        modelLight.position.set(0, 3, 2);
        model.add(modelLight);
        
        const fillLight = new THREE.PointLight(0xffffff, 0.2, 8);
        fillLight.position.set(2, 1, 0);
        model.add(fillLight);
        
        placed.add(model);
        currentModelRef.current = model;
        setModelPlaced(true);
        
        // Start automatic rotation animation
        startAutoRotation(model);
        
        // Hide the reticle after placing the object
        reticle.visible = false;
      };

      const onSelect = (ev) => {
        placeModel();
      };

      // Handle pinch zoom for placed model (legacy - will be replaced by gesture controls)
      const handleTouchStart = (e) => {
        if (e.touches.length === 2 && currentModelRef.current) {
          // Calculate initial distance between two touches
          const touch1 = e.touches[0];
          const touch2 = e.touches[1];
          initialDistanceRef.current = Math.hypot(
            touch1.clientX - touch2.clientX,
            touch1.clientY - touch2.clientY
          );
        }
      };

      const handleTouchMove = (e) => {
        if (e.touches.length === 2 && currentModelRef.current && initialDistanceRef.current) {
          // Calculate current distance between two touches
          const touch1 = e.touches[0];
          const touch2 = e.touches[1];
          const currentDistance = Math.hypot(
            touch1.clientX - touch2.clientX,
            touch1.clientY - touch2.clientY
          );

          // Calculate scale factor
          const scaleFactor = currentDistance / initialDistanceRef.current;
          
          // Apply scaling with constraints (min: 0.5x, max: 3x)
          const newScale = Math.max(0.5, Math.min(3, initialScaleRef.current * scaleFactor));
          
          // Apply scale to the model
          currentModelRef.current.scale.setScalar(newScale);
        }
      };

      const handleTouchEnd = (e) => {
        if (e.touches.length < 2) {
          // Update initial scale for next pinch gesture
          if (currentModelRef.current) {
            initialScaleRef.current = currentModelRef.current.scale.x;
          }
          initialDistanceRef.current = null;
        }
      };

      const session = await navigator.xr.requestSession("immersive-ar", {
        requiredFeatures: ["hit-test", "local-floor"],
        optionalFeatures: ["dom-overlay"],
      });
      xrSessionRef.current = session;

      await renderer.xr.setSession(session);

      const referenceSpace = await session.requestReferenceSpace("local-floor");
      const viewerRefSpace = await session.requestReferenceSpace("viewer");
      const hitTestSource = await session.requestHitTestSource({ space: viewerRefSpace });

      session.addEventListener("select", onSelect);

      const touchPlace = (e) => {
        if (e.touches.length === 1) {
          placeModel();
        }
      };

      // Add event listeners for touch interactions
      renderer.domElement.addEventListener("touchend", touchPlace);
      // Keep legacy touch events for now, but GestureControls will handle the advanced gestures

      renderer.setAnimationLoop((timestamp, xrFrame) => {
        if (xrFrame) {
          const pose = xrFrame.getViewerPose(referenceSpace);
          const hitTestResults = xrFrame.getHitTestResults(hitTestSource);

          // Only show reticle if no model is placed and we have hit test results
          if (hitTestResults.length > 0 && !currentModelRef.current) {
            const hit = hitTestResults[0];
            const hitPose = hit.getPose(referenceSpace);
            reticle.visible = true;
            reticle.matrix.fromArray(hitPose.transform.matrix);
          } else if (!currentModelRef.current) {
            reticle.visible = false;
          }
        }
        renderer.render(scene, camera);
      });

      session.addEventListener("end", () => {
        try {
          renderer.setAnimationLoop(null);
          renderer.domElement.removeEventListener("touchend", touchPlace);
          session.removeEventListener("select", onSelect);
          
          // Stop rotation animation
          if (animationFrameIdRef.current) {
            cancelAnimationFrame(animationFrameIdRef.current);
            animationFrameIdRef.current = null;
          }
          
          if (renderer.domElement && renderer.domElement.parentNode) {
            renderer.domElement.parentNode.removeChild(renderer.domElement);
          }
          currentModelRef.current = null;
          setModelPlaced(false);
          initialScaleRef.current = 1.4; // Reset scale
        } catch (err) {
          console.warn("cleanup error", err);
        } finally {
          xrRendererRef.current = null;
          xrSessionRef.current = null;
          setStartingAr(false);
        }
      });

    } catch (err) {
      console.error("Failed to start AR session:", err);
      setShowArUnavailableMsg(true);
      setStartingAr(false);
      if (xrRendererRef.current && xrRendererRef.current.domElement && xrRendererRef.current.domElement.parentNode) {
        xrRendererRef.current.domElement.parentNode.removeChild(xrRendererRef.current.domElement);
      }
      xrRendererRef.current = null;
      currentModelRef.current = null;
      setModelPlaced(false);
      
      // Stop rotation animation on error
      if (animationFrameIdRef.current) {
        cancelAnimationFrame(animationFrameIdRef.current);
        animationFrameIdRef.current = null;
      }
    }
  };

  const endAR = async () => {
    try {
      const session = xrSessionRef.current;
      if (session) await session.end();
    } catch (err) {
      console.warn("Error ending XR session", err);
    }
  };

  useEffect(() => {
    return () => {
      if (xrSessionRef.current) xrSessionRef.current.end();
      if (xrRendererRef.current && xrRendererRef.current.domElement && xrRendererRef.current.domElement.parentNode) {
        xrRendererRef.current.domElement.parentNode.removeChild(xrRendererRef.current.domElement);
      }
      currentModelRef.current = null;
      setModelPlaced(false);
      
      // Clean up animation frame
      if (animationFrameIdRef.current) {
        cancelAnimationFrame(animationFrameIdRef.current);
        animationFrameIdRef.current = null;
      }
    };
  }, []);

  return (
//     <div className="bg-gradient-to-br pt-10  from-gray-900 via-black to-pink-950 text-white min-h-screen flex p-4 overflow-hidden relative">
//       {/* Gesture Controls - Only active when model is placed */}
//       {modelPlaced && (
//         <GestureControls 
//           modelRef={currentModelRef} 
//           zoomSpeed={0.02}
//         />
//       )}
      
//       <div className="absolute inset-0">
//         {/* Animated gradient background */}
//         <div className="absolute inset-0 bg-gradient-to-br from-pink-900/20 via-black to-fuchsia-800/10 animate-pulse-slow"></div>
        
//         {/* Grid pattern with pink glow */}
//         <div className="absolute inset-0 z-0">
//           <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
//             <defs>
//               <pattern id="grid-pattern" width="20" height="20" patternUnits="userSpaceOnUse">
//                 <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#ec489955" strokeWidth="0.5" />
//               </pattern>
//               <radialGradient id="glow-gradient" cx="50%" cy="50%" r="50%">
//                 <stop offset="0%" stopColor="#ec4899" stopOpacity="0.3" />
//                 <stop offset="100%" stopColor="#be185d" stopOpacity="0" />
//               </radialGradient>
//             </defs>
//             <rect width="100%" height="100%" fill="url(#grid-pattern)" />
//             <circle cx="20%" cy="30%" r="200" fill="url(#glow-gradient)" />
//             <circle cx="80%" cy="70%" r="150" fill="url(#glow-gradient)" />
//           </svg>
//         </div>

//         {/* Animated glowing orbs */}
//         <div className="absolute top-1/4 left-1/4 w-16 h-16 sm:w-32 sm:h-32 md:w-48 md:h-48 lg:w-64 lg:h-64 bg-pink-500 rounded-full filter blur-[50px] sm:blur-[75px] md:blur-[100px] opacity-20 animate-float"></div>
//         <div className="absolute bottom-1/4 right-1/4 w-24 h-24 sm:w-48 sm:h-48 md:w-72 md:h-72 lg:w-96 lg:h-96 bg-fuchsia-400 rounded-full filter blur-[60px] sm:blur-[90px] md:blur-[120px] opacity-15 animate-float-slow"></div>
        
//         {/* Circuit pattern overlay */}
//         <div className="absolute inset-0 opacity-[0.02]">
//           <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
//             <path d="M0,20 Q40,0 80,20 T160,20" stroke="white" fill="none" strokeWidth="0.5"/>
//             <path d="M0,60 Q40,40 80,60 T160,60" stroke="white" fill="none" strokeWidth="0.5"/>
//             <path d="M0,100 Q40,80 80,100 T160,100" stroke="white" fill="none" strokeWidth="0.5"/>
//             <path d="M0,140 Q40,120 80,140 T160,140" stroke="white" fill="none" strokeWidth="0.5"/>
//           </svg>
//         </div>
//       </div>

//       {/* Main content - centered with engaging hook */}
//       <div className="relative z-10 flex flex-col items-center justify-center w-full mt-12 sm:mt-16 md:mt-20 lg:mt-24 lg:mb-34 text-center px-2 sm:px-4">
        
//         {/* Engaging Hook Section */}
//         <div className="mb-8 sm:mb-10 md:mb-12 lg:mb-16">
//          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-medium mb-4 sm:mb-6 leading-tight"   style={{ fontFamily: "DeaconTest, sans-serif", fontWeight: 600 }}>
//   Unlock the <span className="bg-gradient-to-r from-pink-500 to-fuchsia-400 bg-clip-text text-transparent">
//     Power
//   </span> of <br className="hidden sm:block" />
//   <span className="bg-gradient-to-r from-pink-500 to-fuchsia-400 bg-clip-text text-transparent">
//     Augmented Reality
//   </span>
// </h1>


//           <p className="text-xs hidden sm:block md:text-lg text-gray-300 max-w-xs xs:max-w-sm sm:max-w-xl md:max-w-2xl lg:max-w-3xl mx-auto leading-relaxed"   style={{ fontFamily: "anta, sans-serif" }}>
//             Enhance real-world experiences with interactive AR solutions. Visualize products, designs, and spaces in real time before making decisions.
//           </p>
//         </div>
         

//         {/* AR Button Section */}
//         <div className="flex flex-col items-center space-y-6 sm:space-y-8 animate-fade-in-up" style={{animationDelay: '0.3s'}}>
          
//           {/* Animated call-to-action arrow */}
//           <div className="animate-bounce">
//             <div className="w-6 h-6 sm:w-8 sm:h-8 border-r-2 border-b-2 border-pink-400 transform rotate-45"></div>
//           </div>
         
//           <button
//             onClick={startAR}
//             onMouseEnter={() => setIsHovered(true)}
//             onMouseLeave={() => setIsHovered(false)}
//             disabled={startingAr}
//             className="relative group bg-gradient-to-r from-pink-500 to-fuchsia-600 text-white font-bold py-4 px-8 sm:py-5 sm:px-12 md:py-6 md:px-16 lg:py-7 lg:px-20 rounded-xl sm:rounded-2xl transition-all duration-500 shadow-2xl hover:shadow-3xl hover:scale-105 active:scale-95 border-2 border-pink-300/40 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 text-base sm:text-lg md:text-xl lg:text-2xl overflow-hidden"
//           >
//             {/* Animated gradient overlay */}
//             <div className={`absolute inset-0 bg-gradient-to-r from-pink-400 to-fuchsia-500 rounded-xl sm:rounded-2xl transition-all duration-1000 ${isHovered ? 'opacity-100' : 'opacity-70'} ${isHovered ? 'blur-lg' : 'blur-md'}`}></div>
            
//             {/* Shine effect */}
//             <div className=" absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
            
//             <span className="relative flex items-center space-x-2 sm:space-x-3 md:space-x-4">
//               {startingAr ? (
//                 <>
//                   <div className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
//                   <span className="text-sm sm:text-base md:text-lg lg:text-xl">Preparing Your AR Experience...</span>
//                 </>
//               ) : (
//                 <>
//                   <div className="text-2xl sm:text-3xl md:text-4xl">👁️</div>
//                   <div className="text-left">
//                     <div className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold"  style={{ fontFamily: "anta, sans-serif" }} >Launch AR Experience</div>
//                     <div className="text-xs sm:text-sm font-normal opacity-90 hidden sm:block"style={{ fontFamily: "anta, sans-serif" }}>Tap to place camera in your space</div>
//                   </div>
//                 </>
//               )}
//             </span>
//           </button>

//           {/* Close AR button when active */}
//           {xrSessionRef.current && (
//             <button
//               onClick={endAR}
//               className="relative group bg-gradient-to-r from-zinc-800 to-zinc-900 text-red-400 font-semibold py-3 px-6 sm:py-4 sm:px-8 md:py-4 md:px-10 rounded-lg sm:rounded-xl transition-all duration-300 hover:scale-105 active:scale-95 border border-red-500/30 hover:border-red-400/50 backdrop-blur-sm text-sm sm:text-base md:text-lg"
//             >
//               <span className="relative flex items-center space-x-2 sm:space-x-3">
//                 <div className="text-lg sm:text-xl">✕</div>
//                 <span className="text-sm sm:text-base md:text-lg"style={{ fontFamily: "anta, sans-serif" }} >Exit AR Mode</span>
//               </span>
//             </button>
//           )}
//         </div>

//         {/* Instructions */}
//         <div className="mt-8 sm:mt-10 md:mt-12 lg:mt-16 animate-fade-in-up"  style={{ fontFamily: "anta, sans-serif", animationDelay: '0.9s' }} >
//           <h3 className="text-base sm:text-lg md:text-xl font-semibold text-pink-300 mb-4 sm:mb-6 text-center"style={{ fontFamily: "anta, sans-serif" }} >How it works:</h3>
//           <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-3 md:gap-4 max-w-6xl mx-auto px-2">
            
//             {/* Step 1 */}
//             <div className="bg-gradient-to-br from-pink-500/10 to-fuchsia-600/10 border border-pink-500/20 rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-5 lg:p-6 text-center backdrop-blur-sm hover:border-pink-400/40 transition-all duration-300 hover:scale-105 group" >
//               <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-gradient-to-r from-pink-500 to-fuchsia-600 rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-3 md:mb-4 group-hover:scale-110 transition-transform duration-300">
//                 <span className="text-white font-bold text-sm sm:text-base md:text-lg">1</span>
//               </div>
//               <h4 className="text-pink-300 font-semibold mb-1 sm:mb-2 text-sm sm:text-base md:text-lg">Launch AR</h4>
//               <p className="text-gray-300 text-xs sm:text-sm leading-tight">Tap "Launch AR Experience" above</p>
//             </div>

//             {/* Step 2 */}
//             <div className="bg-gradient-to-br from-pink-500/10 to-fuchsia-600/10 border border-pink-500/20 rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-5 lg:p-6 text-center backdrop-blur-sm hover:border-pink-400/40 transition-all duration-300 hover:scale-105 group">
//               <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-gradient-to-r from-pink-500 to-fuchsia-600 rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-3 md:mb-4 group-hover:scale-110 transition-transform duration-300">
//                 <span className="text-white font-bold text-sm sm:text-base md:text-lg">2</span>
//               </div>
//               <h4 className="text-pink-300 font-semibold mb-1 sm:mb-2 text-sm sm:text-base md:text-lg">Allow Access</h4>
//               <p className="text-gray-300 text-xs sm:text-sm leading-tight">Allow camera permissions when prompted</p>
//             </div>

//             {/* Step 3 */}
//             <div className="bg-gradient-to-br from-pink-500/10 to-fuchsia-600/10 border border-pink-500/20 rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-5 lg:p-6 text-center backdrop-blur-sm hover:border-pink-400/40 transition-all duration-300 hover:scale-105 group">
//               <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-gradient-to-r from-pink-500 to-fuchsia-600 rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-3 md:mb-4 group-hover:scale-110 transition-transform duration-300">
//                 <span className="text-white font-bold text-sm sm:text-base md:text-lg">3</span>
//               </div>
//               <h4 className="text-pink-300 font-semibold mb-1 sm:mb-2 text-sm sm:text-base md:text-lg">Scan Surfaces</h4>
//               <p className="text-gray-300 text-xs sm:text-sm leading-tight">Move your phone to detect surfaces</p>
//             </div>

//             {/* Step 4 */}
//             <div className="bg-gradient-to-br from-pink-500/10 to-fuchsia-600/10 border border-pink-500/20 rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-5 lg:p-6 text-center backdrop-blur-sm hover:border-pink-400/40 transition-all duration-300 hover:scale-105 group">
//               <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-gradient-to-r from-pink-500 to-fuchsia-600 rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-3 md:mb-4 group-hover:scale-110 transition-transform duration-300">
//                 <span className="text-white font-bold text-sm sm:text-base md:text-lg">4</span>
//               </div>
//               <h4 className="text-pink-300 font-semibold mb-1 sm:mb-2 text-sm sm:text-base md:text-lg">Place & Explore</h4>
//               <p className="text-gray-300 text-xs sm:text-sm leading-tight">
//                 Tap to place on ring, model auto-rotates 360°
//               </p>
//             </div>
            
//           </div>
//         </div>

//         {/* Gesture Instructions */}
//         {xrSessionRef.current && (
//           <div className="mt-6 sm:mt-8 animate-fade-in-up" style={{animationDelay: '1.2s'}}>
//             <div className="bg-gradient-to-br from-pink-500/10 to-fuchsia-600/10 border border-pink-500/30 rounded-xl sm:rounded-2xl p-4 sm:p-6 backdrop-blur-sm max-w-md mx-auto">
//               <h4 className="text-pink-300 font-semibold mb-2 sm:mb-3 text-sm sm:text-base md:text-lg flex items-center justify-center">
//                 <span className="mr-2">👆</span>
//                 Gesture Controls
//               </h4>
//               <div className="text-gray-300 text-xs sm:text-sm leading-relaxed text-center space-y-2">
//                 <p>
//                   <span className="text-pink-300 font-semibold">1 Finger Drag:</span> Move model around
//                 </p>
//                 <p>
//                   <span className="text-pink-300 font-semibold">2 Finger Rotate:</span> Rotate model manually
//                 </p>
//                 <p>
//                   <span className="text-pink-300 font-semibold">Pinch Zoom:</span> Zoom in/out on model
//                 </p>
//                 <p className="text-pink-200 font-medium mt-2">
//                   Model auto-rotates when not interacting
//                 </p>
//               </div>
//             </div>
//           </div>
//         )}
//       </div>

//       {/* AR Unavailable Modal */}
//       {showArUnavailableMsg && (
//         <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 backdrop-blur-md">
//           <div className="relative bg-gradient-to-br from-zinc-900 to-zinc-950 border border-white/10 rounded-2xl sm:rounded-3xl p-6 sm:p-8 max-w-xs xs:max-w-sm sm:max-w-md mx-4 shadow-2xl">
//             {/* Modal glow */}
//             <div className="absolute -inset-2 sm:-inset-4 bg-gradient-to-r from-pink-500/10 to-fuchsia-500/10 rounded-2xl sm:rounded-3xl blur-2xl opacity-50"></div>
            
//             <div className="relative text-center">
//               <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-r from-pink-500/10 to-fuchsia-500/10 rounded-full mb-4 sm:mb-6 border border-pink-500/20">
//                 <div className="text-2xl sm:text-3xl">⚠️</div>
//               </div>
              
//               <h3 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-pink-200 to-fuchsia-200 bg-clip-text text-transparent mb-2 sm:mb-3">
//                 AR Not Available
//               </h3>
              
//               <p className="text-gray-300 mb-4 sm:mb-6 text-xs sm:text-sm leading-relaxed">
//                 Your device or browser doesn't support native WebXR `immersive-ar`. 
//                 Use a compatible Android device or IOS device with Chrome, ensure you're on HTTPS, and try again.
//               </p>
              
//               <div className="flex gap-2 sm:gap-3 justify-center">
//                 <button
//                   onClick={() => setShowArUnavailableMsg(false)}
//                   className="bg-gradient-to-r from-pink-500 to-fuchsia-600 text-white px-6 py-2 sm:px-8 sm:py-3 rounded-lg sm:rounded-xl font-medium transition-all hover:scale-105 active:scale-95 text-sm sm:text-base"
//                 >
//                   Understand
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Add custom styles */}
//       <style jsx>{`
//         .shadow-3xl {
//           box-shadow: 0 25px 50px -12px rgba(236, 72, 153, 0.25), 0 0 0 1px rgba(236, 72, 153, 0.1);
//         }
        
//         @keyframes float {
//           0%, 100% { transform: translateY(0px) scale(1); }
//           50% { transform: translateY(-20px) scale(1.05); }
//         }
        
//         @keyframes float-slow {
//           0%, 100% { transform: translateY(0px) scale(1); }
//           50% { transform: translateY(10px) scale(1.02); }
//         }
        
//         @keyframes fadeInUp {
//           from {
//             opacity: 0;
//             transform: translateY(30px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }
        
//         @keyframes pulse-slow {
//           0%, 100% { opacity: 1; }
//           50% { opacity: 0.8; }
//         }
        
//         .animate-float {
//           animation: float 8s ease-in-out infinite;
//         }
        
//         .animate-float-slow {
//           animation: float-slow 12s ease-in-out infinite;
//         }
        
//         .animate-pulse-slow {
//           animation: pulse-slow 6s cubic-bezier(0.4, 0, 0.6, 1) infinite;
//         }
        
//         .animate-fade-in-up {
//           animation: fadeInUp 0.8s ease-out forwards;
//           opacity: 0;
//         }

//         /* Extra small devices (phones under 375px) */
//         @media (max-width: 374px) {
//           .xs\\:text-3xl {
//             font-size: 1.875rem;
//             line-height: 2.25rem;
//           }
//           .xs\\:text-base {
//             fontSize: 1rem;
//             line-height: 1.5rem;
//           }
//           .xs\\:max-w-sm {
//             max-width: 24rem;
//           }
//           .xs\\:grid-cols-2 {
//             grid-template-columns: repeat(2, minmax(0, 1fr));
//           }
//           .xs\\:max-w-xs {
//             max-width: 20rem;
//           }
//         }
//       `}</style>
//     </div>

  <div className="pt-10 text-white w-full flex p-4 overflow-hidden relative">
      {/* Gesture Controls */}
      {modelPlaced && (
        <GestureControls 
          modelRef={currentModelRef} 
          zoomSpeed={0.02}
        />
      )}

      {/* ❌ Removed background layers here */}
      {/* ❌ Removed gradient / grid / orbs */}

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center justify-center w-full mt-12 sm:mt-16 md:mt-20 lg:mt-24 text-center px-2 sm:px-4">
        
        {/* Heading */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium leading-tight"
            style={{ fontFamily: "DeaconTest, sans-serif", fontWeight: 600 }}>
            Unlock the <span className="bg-gradient-to-r from-pink-500 to-fuchsia-400 bg-clip-text text-transparent">
              Power
            </span> of<br />
            <span className="bg-gradient-to-r from-pink-500 to-fuchsia-400 bg-clip-text text-transparent">
              Augmented Reality
            </span>
          </h1>

          <p className="text-gray-300 max-w-2xl mx-auto mt-4 hidden sm:block"
            style={{ fontFamily: "anta, sans-serif" }}>
            Enhance real-world experiences with interactive AR solutions.
          </p>
        </div>

        {/* AR Launch Button */}
        <div className="flex flex-col items-center space-y-6 animate-fade-in-up">
          <div className="animate-bounce">
            <div className="w-6 h-6 border-r-2 border-b-2 border-pink-400 transform rotate-45"></div>
          </div>

          <button
            onClick={startAR}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            disabled={startingAr}
            className="relative group bg-gradient-to-r from-pink-500 to-fuchsia-600 text-white font-bold py-5 px-12 rounded-xl shadow-2xl hover:scale-105 transition-all duration-500"
          >
            {startingAr ? "Preparing AR..." : "Launch AR Experience"}
          </button>

          {/* Close AR button */}
          {xrSessionRef.current && (
            <button
              onClick={endAR}
              className="bg-zinc-900 text-red-400 py-3 px-6 rounded-lg border border-red-500/30 hover:border-red-400/50 transition-all duration-300"
            >
              Exit AR Mode
            </button>
          )}
        </div>

        {/* Steps */}
        <div className="mt-12 max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 animate-fade-in-up">
          {["Launch AR", "Allow Access", "Scan Surfaces", "Place & Explore"].map((text, i) => (
            <div key={i} className="bg-gradient-to-br from-pink-500/10 to-fuchsia-600/10 border border-pink-500/20 p-4 rounded-xl backdrop-blur-sm text-center">
              <div className="w-10 h-10 bg-gradient-to-r from-pink-500 to-fuchsia-600 rounded-full flex items-center justify-center mx-auto text-white font-bold">
                {i + 1}
              </div>
              <h4 className="text-pink-300 font-semibold mt-3">{text}</h4>
            </div>
          ))}
        </div>

        {/* Gesture instructions */}
        {xrSessionRef.current && (
          <div className="mt-8 bg-gradient-to-br from-pink-500/10 to-fuchsia-600/10 border border-pink-500/30 rounded-xl p-6 backdrop-blur-sm max-w-md mx-auto">
            <h4 className="text-pink-300 font-semibold mb-3">Gesture Controls</h4>
            <p className="text-gray-300 text-sm">1 Finger: Move model</p>
            <p className="text-gray-300 text-sm">2 Fingers: Rotate</p>
            <p className="text-gray-300 text-sm">Pinch: Zoom</p>
          </div>
        )}
      </div>

      {/* Modal */}
      {showArUnavailableMsg && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 backdrop-blur-md">
          <div className="relative bg-zinc-900 border border-white/10 rounded-2xl p-6 text-center">
            <h3 className="text-2xl font-bold text-pink-200 mb-4">AR Not Available</h3>
            <p className="text-gray-300 mb-4 text-sm">
              Your device doesn't support immersive AR. Try using a compatible browser or Android/IOS device.
            </p>
            <button
              onClick={() => setShowArUnavailableMsg(false)}
              className="bg-gradient-to-r from-pink-500 to-fuchsia-600 text-white px-8 py-3 rounded-lg"
            >
              OK
            </button>
          </div>
        </div>
      )}
  </div>
);

 
}