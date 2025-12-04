

// // ✅ Import AR Feature Icons
// import RealTimeIcon from "/src/assets/ar/ai-eye-scan-3d-icon-png-download-12712408.png";
// import ProductVizIcon from "/src/assets/ar/quick-response-survey-3d-icon-png-download-10615826.png";
// import WebARIcon from "/src/assets/ar/browser-3d-icon-png-download-9166697 (1).png";

// function Whatar() {
//     return (
//         <div className="bg-gradient-to-br from-gray-900 via-black to-pink-950 py-16 px-4 min-h-screen relative overflow-hidden">
//             {/* Background Layers */}
//             <div className="absolute inset-0">
//                 <div className="absolute inset-0 bg-gradient-to-br from-pink-900/20 via-black to-fuchsia-800/10 animate-pulse-slow"></div>

//                 <div className="absolute inset-0 z-0">
//                     <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
//                         <defs>
//                             <pattern id="grid-pattern" width="20" height="20" patternUnits="userSpaceOnUse">
//                                 <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#ec489955" strokeWidth="0.5" />
//                             </pattern>
//                             <radialGradient id="glow-gradient" cx="50%" cy="50%" r="50%">
//                                 <stop offset="0%" stopColor="#ec4899" stopOpacity="0.3" />
//                                 <stop offset="100%" stopColor="#be185d" stopOpacity="0" />
//                             </radialGradient>
//                         </defs>
//                         <rect width="100%" height="100%" fill="url(#grid-pattern)" />
//                         <circle cx="20%" cy="30%" r="200" fill="url(#glow-gradient)" />
//                         <circle cx="80%" cy="70%" r="150" fill="url(#glow-gradient)" />
//                     </svg>
//                 </div>

//                 <div className="absolute top-1/4 left-1/4 w-16 h-16 sm:w-32 sm:h-32 md:w-48 md:h-48 lg:w-64 lg:h-64 bg-pink-500 rounded-full filter blur-[50px] sm:blur-[75px] md:blur-[100px] opacity-20 animate-float"></div>
//                 <div className="absolute bottom-1/4 right-1/4 w-24 h-24 sm:w-48 sm:h-48 md:w-72 md:h-72 lg:w-96 lg:h-96 bg-fuchsia-400 rounded-full filter blur-[60px] sm:blur-[90px] md:blur-[120px] opacity-15 animate-float-slow"></div>

//                 <div className="absolute inset-0 opacity-[0.02]">
//                     <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
//                         <path d="M0,20 Q40,0 80,20 T160,20" stroke="white" fill="none" strokeWidth="0.5" />
//                         <path d="M0,60 Q40,40 80,60 T160,60" stroke="white" fill="none" strokeWidth="0.5" />
//                         <path d="M0,100 Q40,80 80,100 T160,100" stroke="white" fill="none" strokeWidth="0.5" />
//                         <path d="M0,140 Q40,120 80,140 T160,140" stroke="white" fill="none" strokeWidth="0.5" />
//                     </svg>
//                 </div>
//             </div>

//             <div className="max-w-6xl mx-auto relative z-10">
//                 <div className="text-center mb-12">
//                     <h1
//                         className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent"
//                         style={{ fontFamily: "DeaconTest, sans-serif", fontWeight: 600 }}
//                     >
//                         Augmented Reality Explained
//                     </h1>

//                     <div className="flex justify-center">
//                         <div className="w-48 h-1 bg-gradient-to-r from-transparent via-pink-500 to-transparent rounded-full animate-pulse"></div>
//                     </div>
//                 </div>

//                 {/* MAIN CONTENT CARD */}
//                 <div className="bg-gray-900/40 backdrop-blur-lg rounded-2xl shadow-2xl border border-pink-500/30 p-6 md:p-8 lg:p-12 hover:border-pink-400/40 hover:shadow-pink-500/20 transition-all duration-500">

//                     <div className="text-center mb-10">
//                         <p
//                             className="text-lg md:text-xl lg:text-2xl text-gray-300 leading-relaxed max-w-4xl mx-auto"
//                             style={{ fontFamily: "anta, sans-serif" }}
//                         >
//                             <span className="font-bold bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
//                                 Augmented Reality (AR)
//                             </span>{" "}
//                             blends digital content with the real world, creating immersive experiences through your device's camera and sensors.
//                         </p>
//                     </div>

//                     {/* FEATURES GRID */}
//                     <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-12">

//                         {/* FEATURE 1 */}
//                         <div className="bg-gradient-to-br from-pink-900/20 to-purple-900/20 border border-pink-500/30 p-6 rounded-xl hover:shadow-lg hover:border-pink-400/40 hover:scale-105 transition-all duration-300 backdrop-blur-sm group">
//                             <div className="flex items-center justify-between mb-4">
//                                 <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
//                                     <span className="text-white font-bold text-lg">1</span>
//                                 </div>

//                                 <img
//                                     src={RealTimeIcon}
//                                     alt="Real-Time Interaction"
//                                     className="w-14 h-14 object-contain group-hover:scale-110 transition-transform duration-300"
//                                 />
//                             </div>
//                             <h3 className="text-xl font-bold mb-3 text-pink-300 border-b border-pink-700/50 pb-2">
//                                 Real-Time Interaction
//                             </h3>
//                             <p className="text-gray-300 text-sm leading-relaxed">
//                                 Interact with 3D objects and virtual elements instantly through camera and sensors.
//                             </p>
//                         </div>

//                         {/* FEATURE 2 */}
//                         <div className="bg-gradient-to-br from-pink-900/20 to-purple-900/20 border border-pink-500/30 p-6 rounded-xl hover:shadow-lg hover:border-pink-400/40 hover:scale-105 transition-all duration-300 backdrop-blur-sm group">
//                             <div className="flex items-center justify-between mb-4">
//                                 <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
//                                     <span className="text-white font-bold text-lg">2</span>
//                                 </div>

//                                 <img
//                                     src={ProductVizIcon}
//                                     alt="Product Visualization"
//                                     className="w-14 h-14 object-contain group-hover:scale-110 transition-transform duration-300"
//                                 />
//                             </div>
//                             <h3 className="text-xl font-bold mb-3 text-pink-300 border-b border-pink-700/50 pb-2">
//                                 Product Visualization
//                             </h3>
//                             <p className="text-gray-300 text-sm leading-relaxed">
//                                 See furniture, decor & products in your space before buying.
//                             </p>
//                         </div>

//                         {/* FEATURE 3 */}
//                         <div className="bg-gradient-to-br from-pink-900/20 to-purple-900/20 border border-pink-500/30 p-6 rounded-xl hover:shadow-lg hover:border-pink-400/40 hover:scale-105 transition-all duration-300 backdrop-blur-sm group">
//                             <div className="flex items-center justify-between mb-4">
//                                 <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
//                                     <span className="text-white font-bold text-lg">3</span>
//                                 </div>

//                                 <img
//                                     src={WebARIcon}
//                                     alt="Web Based AR"
//                                     className="w-14 h-14 object-contain group-hover:scale-110 transition-transform duration-300"
//                                 />
//                             </div>
//                             <h3 className="text-xl font-bold mb-3 text-pink-300 border-b border-pink-700/50 pb-2">
//                                 Web-Based AR
//                             </h3>
//                             <p className="text-gray-300 text-sm leading-relaxed">
//                                 Use AR directly in browsers via WebXR — no app downloads needed.
//                             </p>
//                         </div>
//                     </div>

//                     {/* APPLICATIONS SECTION */}
//                     <div className="mt-12">
//                         <div className="text-center mb-8">
//                             <h2
//                                 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent"
//                             >
//                                 AR Applications
//                             </h2>
//                             <div className="w-32 h-1 bg-gradient-to-r from-transparent via-pink-500 to-transparent rounded-full animate-pulse mx-auto"></div>
//                         </div>

//                         <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
//                             {[
//                                 "Interior Design & Furniture",
//                                 "Virtual Try-On",
//                                 "Gaming & Entertainment",
//                                 "Education & Training",
//                             ].map((item, index) => (
//                                 <div
//                                     key={index}
//                                     className="flex items-center space-x-4 bg-gradient-to-r from-pink-900/10 to-purple-900/10 border border-pink-500/20 p-4 rounded-lg hover:border-pink-400/40 hover:bg-pink-900/20 transition-all duration-300 backdrop-blur-sm group"
//                                 >
//                                     <div className="w-8 h-8 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
//                                         <span className="text-white font-bold text-sm">{index + 1}</span>
//                                     </div>
//                                     <span className="text-gray-200 text-sm font-medium flex-1">{item}</span>
//                                 </div>
//                             ))}
//                         </div>
//                     </div>

//                     <div className="mt-12 text-center">
//                         <div className="bg-gradient-to-r from-pink-900/20 to-purple-900/20 border border-pink-500/30 rounded-xl p-6 backdrop-blur-sm">
//                             <h3 className="text-2xl font-bold mb-4 text-pink-300">
//                                 Experience the Future Today
//                             </h3>
//                             <p className="text-gray-300 text-lg leading-relaxed max-w-2xl mx-auto">
//                                 AR continues to evolve, providing new ways to interact with digital content.
//                             </p>
//                         </div>
//                     </div>
//                 </div>
//             </div>

//             {/* Custom Animations */}
//             <style jsx>{`
//                 @keyframes float {
//                     0%, 100% { transform: translateY(0px) scale(1); }
//                     50% { transform: translateY(-20px) scale(1.05); }
//                 }
//                 @keyframes float-slow {
//                     0%, 100% { transform: translateY(0px) scale(1); }
//                     50% { transform: translateY(10px) scale(1.02); }
//                 }
//                 @keyframes pulse-slow {
//                     0%, 100% { opacity: 1; }
//                     50% { opacity: 0.8; }
//                 }
//                 .animate-float {
//                     animation: float 8s ease-in-out infinite;
//                 }
//                 .animate-float-slow {
//                     animation: float-slow 12s ease-in-out infinite;
//                 }
//                 .animate-pulse-slow {
//                     animation: pulse-slow 6s cubic-bezier(0.4, 0, 0.6, 1) infinite;
//                 }
//             `}</style>
//         </div>
//     );
// }

// export default Whatar;
// Whatar.jsx
// ✅ Keeps content, removes background SVG/orbs so wrapper controls the background
import RealTimeIcon from "/src/assets/ar/ai-eye-scan-3d-icon-png-download-12712408.png";
import ProductVizIcon from "/src/assets/ar/quick-response-survey-3d-icon-png-download-10615826.png";
import WebARIcon from "/src/assets/ar/browser-3d-icon-png-download-9166697 (1).png";

function Whatar() {
  return (
    <div className="py-16 px-4 relative overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent"
            style={{ fontFamily: "DeaconTest, sans-serif", fontWeight: 600 }}
          >
            Augmented Reality Explained
          </h1>

          <div className="flex justify-center">
            <div className="w-48 h-1 bg-gradient-to-r from-transparent via-pink-500 to-transparent rounded-full animate-pulse"></div>
          </div>
        </div>

        {/* MAIN CONTENT CARD */}
        <div className="bg-gray-900/40 backdrop-blur-lg rounded-2xl shadow-2xl border border-pink-500/30 p-6 md:p-8 lg:p-12 hover:border-pink-400/40 hover:shadow-pink-500/20 transition-all duration-500">
          <div className="text-center mb-10">
            <p
              className="text-lg md:text-xl lg:text-2xl text-gray-300 leading-relaxed max-w-4xl mx-auto"
              style={{ fontFamily: "anta, sans-serif" }}
            >
              <span className="font-bold bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
                Augmented Reality (AR)
              </span>{" "}
              blends digital content with the real world, creating immersive experiences through your device's camera and sensors.
            </p>
          </div>

          {/* FEATURES GRID */}
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-12">
            {/* FEATURE 1 */}
            <div className="bg-gradient-to-br from-pink-900/20 to-purple-900/20 border border-pink-500/30 p-6 rounded-xl hover:shadow-lg hover:border-pink-400/40 hover:scale-105 transition-all duration-300 backdrop-blur-sm group">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white font-bold text-lg">1</span>
                </div>

                <img
                  src={RealTimeIcon}
                  alt="Real-Time Interaction"
                  className="w-14 h-14 object-contain group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <h3 className="text-xl font-bold mb-3 text-pink-300 border-b border-pink-700/50 pb-2">
                Real-Time Interaction
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Interact with 3D objects and virtual elements instantly through camera and sensors.
              </p>
            </div>

            {/* FEATURE 2 */}
            <div className="bg-gradient-to-br from-pink-900/20 to-purple-900/20 border border-pink-500/30 p-6 rounded-xl hover:shadow-lg hover:border-pink-400/40 hover:scale-105 transition-all duration-300 backdrop-blur-sm group">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white font-bold text-lg">2</span>
                </div>

                <img
                  src={ProductVizIcon}
                  alt="Product Visualization"
                  className="w-14 h-14 object-contain group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <h3 className="text-xl font-bold mb-3 text-pink-300 border-b border-pink-700/50 pb-2">
                Product Visualization
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                See furniture, decor & products in your space before buying.
              </p>
            </div>

            {/* FEATURE 3 */}
            <div className="bg-gradient-to-br from-pink-900/20 to-purple-900/20 border border-pink-500/30 p-6 rounded-xl hover:shadow-lg hover:border-pink-400/40 hover:scale-105 transition-all duration-300 backdrop-blur-sm group">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white font-bold text-lg">3</span>
                </div>

                <img
                  src={WebARIcon}
                  alt="Web Based AR"
                  className="w-14 h-14 object-contain group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <h3 className="text-xl font-bold mb-3 text-pink-300 border-b border-pink-700/50 pb-2">
                Web-Based AR
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Use AR directly in browsers via WebXR — no app downloads needed.
              </p>
            </div>
          </div>

          {/* APPLICATIONS SECTION */}
          <div className="mt-12">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
                AR Applications
              </h2>
              <div className="w-32 h-1 bg-gradient-to-r from-transparent via-pink-500 to-transparent rounded-full animate-pulse mx-auto"></div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                "Interior Design & Furniture",
                "Virtual Try-On",
                "Gaming & Entertainment",
                "Education & Training",
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-4 bg-gradient-to-r from-pink-900/10 to-purple-900/10 border border-pink-500/20 p-4 rounded-lg hover:border-pink-400/40 hover:bg-pink-900/20 transition-all duration-300 backdrop-blur-sm group"
                >
                  <div className="w-8 h-8 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-white font-bold text-sm">{index + 1}</span>
                  </div>
                  <span className="text-gray-200 text-sm font-medium flex-1">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-12 text-center">
            <div className="bg-gradient-to-r from-pink-900/20 to-purple-900/20 border border-pink-500/30 rounded-xl p-6 backdrop-blur-sm">
              <h3 className="text-2xl font-bold mb-4 text-pink-300">Experience the Future Today</h3>
              <p className="text-gray-300 text-lg leading-relaxed max-w-2xl mx-auto">
                AR continues to evolve, providing new ways to interact with digital content.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) scale(1); }
          50% { transform: translateY(-20px) scale(1.05); }
        }
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px) scale(1); }
          50% { transform: translateY(10px) scale(1.02); }
        }
        @keyframes pulse-slow {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.8; }
        }
        .animate-float {
          animation: float 8s ease-in-out infinite;
        }
        .animate-float-slow {
          animation: float-slow 12s ease-in-out infinite;
        }
        .animate-pulse-slow {
          animation: pulse-slow 6s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
      `}</style>
    </div>
  );
}

export default Whatar;
