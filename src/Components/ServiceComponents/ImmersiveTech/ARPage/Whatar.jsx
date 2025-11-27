function Whatar() {
    return (
        <div className="bg-gradient-to-br from-gray-900 via-black to-pink-950 py-16 px-4 min-h-screen relative overflow-hidden">
            {/* Background Layers */}
            <div className="absolute inset-0">
                {/* Animated gradient background */}
                <div className="absolute inset-0 bg-gradient-to-br from-pink-900/20 via-black to-fuchsia-800/10 animate-pulse-slow"></div>
                
                {/* Grid pattern with pink glow */}
                <div className="absolute inset-0 z-0">
                    <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                            <pattern id="grid-pattern" width="20" height="20" patternUnits="userSpaceOnUse">
                                <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#ec489955" strokeWidth="0.5" />
                            </pattern>
                            <radialGradient id="glow-gradient" cx="50%" cy="50%" r="50%">
                                <stop offset="0%" stopColor="#ec4899" stopOpacity="0.3" />
                                <stop offset="100%" stopColor="#be185d" stopOpacity="0" />
                            </radialGradient>
                        </defs>
                        <rect width="100%" height="100%" fill="url(#grid-pattern)" />
                        <circle cx="20%" cy="30%" r="200" fill="url(#glow-gradient)" />
                        <circle cx="80%" cy="70%" r="150" fill="url(#glow-gradient)" />
                    </svg>
                </div>

                {/* Animated glowing orbs */}
                <div className="absolute top-1/4 left-1/4 w-16 h-16 sm:w-32 sm:h-32 md:w-48 md:h-48 lg:w-64 lg:h-64 bg-pink-500 rounded-full filter blur-[50px] sm:blur-[75px] md:blur-[100px] opacity-20 animate-float"></div>
                <div className="absolute bottom-1/4 right-1/4 w-24 h-24 sm:w-48 sm:h-48 md:w-72 md:h-72 lg:w-96 lg:h-96 bg-fuchsia-400 rounded-full filter blur-[60px] sm:blur-[90px] md:blur-[120px] opacity-15 animate-float-slow"></div>
                
                {/* Circuit pattern overlay */}
                <div className="absolute inset-0 opacity-[0.02]">
                    <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0,20 Q40,0 80,20 T160,20" stroke="white" fill="none" strokeWidth="0.5"/>
                        <path d="M0,60 Q40,40 80,60 T160,60" stroke="white" fill="none" strokeWidth="0.5"/>
                        <path d="M0,100 Q40,80 80,100 T160,100" stroke="white" fill="none" strokeWidth="0.5"/>
                        <path d="M0,140 Q40,120 80,140 T160,140" stroke="white" fill="none" strokeWidth="0.5"/>
                    </svg>
                </div>
            </div>

            <div className="max-w-6xl mx-auto relative z-10">
                {/* Main Heading with DeaconTest Font */}
                <h1 
                    className="text-5xl md:text-6xl font-bold text-center mb-6 bg-gradient-to-r from-pink-300 to-fuchsia-300 bg-clip-text text-transparent"
                    style={{ fontFamily: 'DeaconTest, sans-serif' }}
                >
                    Augmented Reality Explained
                </h1>

                {/* Main Content Card */}
                <div className="bg-white/10 backdrop-blur-lg rounded-xl shadow-2xl border border-pink-500/20 p-8 md:p-12 hover:border-pink-500/40 transition-all duration-300">
                    {/* Description */}
                    <p 
                        className="text-lg md:text-xl text-gray-200 leading-relaxed mb-8 text-center"
                        style={{ fontFamily: 'work-sans, sans-serif' }}
                    >
                        <span className="font-bold bg-gradient-to-r from-pink-400 to-fuchsia-400 bg-clip-text text-transparent">
                            Augmented Reality (AR)
                        </span>{" "}
                        blends digital content with the real world, creating immersive experiences through your device's camera.
                    </p>

                    {/* AR Features Grid - With Numbers */}
                    <div className="grid md:grid-cols-3 gap-6 mt-10">
                        {/* Feature 1 */}
                        <div className="bg-gradient-to-br from-pink-500/10 to-fuchsia-500/10 border border-pink-500/20 p-6 rounded-lg hover:shadow-lg hover:border-pink-400/40 hover:scale-105 transition-all duration-300 backdrop-blur-sm">
                            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-pink-500 to-fuchsia-600 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                                <span className="text-white font-bold text-base sm:text-lg">1</span>
                            </div>
                            <div className="text-4xl mb-4">📱</div>
                            <h3 
                                className="text-xl font-bold mb-3 text-pink-300"
                                style={{ fontFamily: 'DeaconTest, sans-serif' }}
                            >
                                Real-Time Interaction
                            </h3>
                            <p 
                                className="text-gray-300 text-sm"
                                style={{ fontFamily: 'work-sans, sans-serif' }}
                            >
                                Interact with 3D objects and virtual elements in your real environment instantly
                            </p>
                        </div>

                        {/* Feature 2 */}
                        <div className="bg-gradient-to-br from-pink-500/10 to-purple-500/10 border border-pink-500/20 p-6 rounded-lg hover:shadow-lg hover:border-pink-400/40 hover:scale-105 transition-all duration-300 backdrop-blur-sm">
                            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-pink-500 to-fuchsia-600 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                                <span className="text-white font-bold text-base sm:text-lg">2</span>
                            </div>
                            <div className="text-4xl mb-4">🎯</div>
                            <h3 
                                className="text-xl font-bold mb-3 text-pink-300"
                                style={{ fontFamily: 'DeaconTest, sans-serif' }}
                            >
                                Product Visualization
                            </h3>
                            <p 
                                className="text-gray-300 text-sm"
                                style={{ fontFamily: 'work-sans, sans-serif' }}
                            >
                                See products in your space before buying - furniture, decor, and more
                            </p>
                        </div>

                        {/* Feature 3 */}
                        <div className="bg-gradient-to-br from-fuchsia-500/10 to-cyan-500/10 border border-pink-500/20 p-6 rounded-lg hover:shadow-lg hover:border-pink-400/40 hover:scale-105 transition-all duration-300 backdrop-blur-sm">
                            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-pink-500 to-fuchsia-600 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                                <span className="text-white font-bold text-base sm:text-lg">3</span>
                            </div>
                            <div className="text-4xl mb-4">🌐</div>
                            <h3 
                                className="text-xl font-bold mb-3 text-pink-300"
                                style={{ fontFamily: 'DeaconTest, sans-serif' }}
                            >
                                Web-Based AR
                            </h3>
                            <p 
                                className="text-gray-300 text-sm"
                                style={{ fontFamily: 'work-sans, sans-serif' }}
                            >
                                Access AR experiences directly through browsers - no app downloads needed
                            </p>
                        </div>
                    </div>

                    {/* Use Cases Section - With Numbers */}
                    <div className="mt-12">
                        <h2 
                            className="text-3xl font-bold text-center mb-6 bg-gradient-to-r from-pink-300 to-fuchsia-300 bg-clip-text text-transparent"
                            style={{ fontFamily: 'DeaconTest, sans-serif' }}
                        >
                            AR Applications
                        </h2>
                        
                        <div className="grid md:grid-cols-2 gap-4">
                            {/* Application 1 */}
                            <div className="flex items-center space-x-3 bg-gradient-to-r from-pink-500/5 to-fuchsia-500/5 border border-pink-500/20 p-4 rounded-lg hover:border-pink-400/40 transition-all backdrop-blur-sm">
                                <div className="w-8 h-8 bg-gradient-to-r from-pink-500 to-fuchsia-600 rounded-full flex items-center justify-center flex-shrink-0">
                                    <span className="text-white font-bold text-sm">1</span>
                                </div>
                                <span className="text-2xl">🛋️</span>
                                <span 
                                    className="text-gray-200 text-sm"
                                    style={{ fontFamily: 'work-sans, sans-serif' }}
                                >
                                    Interior Design & Furniture Placement
                                </span>
                            </div>

                            {/* Application 2 */}
                            <div className="flex items-center space-x-3 bg-gradient-to-r from-pink-500/5 to-fuchsia-500/5 border border-pink-500/20 p-4 rounded-lg hover:border-pink-400/40 transition-all backdrop-blur-sm">
                                <div className="w-8 h-8 bg-gradient-to-r from-pink-500 to-fuchsia-600 rounded-full flex items-center justify-center flex-shrink-0">
                                    <span className="text-white font-bold text-sm">2</span>
                                </div>
                                <span className="text-2xl">👓</span>
                                <span 
                                    className="text-gray-200 text-sm"
                                    style={{ fontFamily: 'work-sans, sans-serif' }}
                                >
                                    Virtual Try-On (Glasses, Clothes)
                                </span>
                            </div>

                            {/* Application 3 */}
                            <div className="flex items-center space-x-3 bg-gradient-to-r from-pink-500/5 to-fuchsia-500/5 border border-pink-500/20 p-4 rounded-lg hover:border-pink-400/40 transition-all backdrop-blur-sm">
                                <div className="w-8 h-8 bg-gradient-to-r from-pink-500 to-fuchsia-600 rounded-full flex items-center justify-center flex-shrink-0">
                                    <span className="text-white font-bold text-sm">3</span>
                                </div>
                                <span className="text-2xl">🎮</span>
                                <span 
                                    className="text-gray-200 text-sm"
                                    style={{ fontFamily: 'work-sans, sans-serif' }}
                                >
                                    Gaming & Entertainment
                                </span>
                            </div>

                            {/* Application 4 */}
                            <div className="flex items-center space-x-3 bg-gradient-to-r from-pink-500/5 to-fuchsia-500/5 border border-pink-500/20 p-4 rounded-lg hover:border-pink-400/40 transition-all backdrop-blur-sm">
                                <div className="w-8 h-8 bg-gradient-to-r from-pink-500 to-fuchsia-600 rounded-full flex items-center justify-center flex-shrink-0">
                                    <span className="text-white font-bold text-sm">4</span>
                                </div>
                                <span className="text-2xl">📚</span>
                                <span 
                                    className="text-gray-200 text-sm"
                                    style={{ fontFamily: 'work-sans, sans-serif' }}
                                >
                                    Education & Training
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* CTA Button - Commented out */}
                    <div className="text-center mt-10">
                        {/* Button removed */}
                    </div>
                </div>
            </div>

            {/* Add custom styles */}
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
