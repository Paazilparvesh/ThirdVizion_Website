function Whatar() {
    return (
        <div className="bg-transparent py-16 px-4 min-h-screen relative overflow-hidden">
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

                    {/* AR Features Grid */}
                    <div className="grid md:grid-cols-3 gap-6 mt-10">
                        {/* Feature 1 */}
                        <div className="bg-gradient-to-br from-pink-500/10 to-fuchsia-500/10 border border-pink-500/20 p-6 rounded-lg hover:shadow-lg hover:border-pink-400/40 hover:scale-105 transition-all duration-300 backdrop-blur-sm">
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

                    {/* Use Cases Section */}
                    <div className="mt-12">
                        <h2 
                            className="text-3xl font-bold text-center mb-6 bg-gradient-to-r from-pink-300 to-fuchsia-300 bg-clip-text text-transparent"
                            style={{ fontFamily: 'DeaconTest, sans-serif' }}
                        >
                            AR Applications
                        </h2>
                        
                        <div className="grid md:grid-cols-2 gap-4">
                            <div className="flex items-center space-x-3 bg-gradient-to-r from-pink-500/5 to-fuchsia-500/5 border border-pink-500/20 p-4 rounded-lg hover:border-pink-400/40 transition-all backdrop-blur-sm">
                                <span className="text-2xl">🛋️</span>
                                <span 
                                    className="text-gray-200 text-sm"
                                    style={{ fontFamily: 'work-sans, sans-serif' }}
                                >
                                    Interior Design & Furniture Placement
                                </span>
                            </div>
                            <div className="flex items-center space-x-3 bg-gradient-to-r from-pink-500/5 to-fuchsia-500/5 border border-pink-500/20 p-4 rounded-lg hover:border-pink-400/40 transition-all backdrop-blur-sm">
                                <span className="text-2xl">👓</span>
                                <span 
                                    className="text-gray-200 text-sm"
                                    style={{ fontFamily: 'work-sans, sans-serif' }}
                                >
                                    Virtual Try-On (Glasses, Clothes)
                                </span>
                            </div>
                            <div className="flex items-center space-x-3 bg-gradient-to-r from-pink-500/5 to-fuchsia-500/5 border border-pink-500/20 p-4 rounded-lg hover:border-pink-400/40 transition-all backdrop-blur-sm">
                                <span className="text-2xl">🎮</span>
                                <span 
                                    className="text-gray-200 text-sm"
                                    style={{ fontFamily: 'work-sans, sans-serif' }}
                                >
                                    Gaming & Entertainment
                                </span>
                            </div>
                            <div className="flex items-center space-x-3 bg-gradient-to-r from-pink-500/5 to-fuchsia-500/5 border border-pink-500/20 p-4 rounded-lg hover:border-pink-400/40 transition-all backdrop-blur-sm">
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
        </div>
    );
}

export default Whatar;
