function Whatweb() {
    return (
        <div className="bg-black py-16 px-4 min-h-screen relative overflow-hidden">
            <div className="max-w-7xl mx-auto relative z-10">
                {/* Main Heading */}
                <h1 
                    className="text-5xl md:text-6xl font-bold text-center mb-6 bg-gradient-to-r from-[#00d3f3] to-[#00a8cc] bg-clip-text text-transparent"
                    style={{ fontFamily: 'Outfit, sans-serif' }}
                >
                    Web Development & Design
                </h1>

                {/* Subheading */}
                <p 
                    className="text-xl md:text-2xl text-white/70 text-center mb-12 max-w-4xl mx-auto"
                    style={{ fontFamily: 'Work Sans, sans-serif' }}
                >
                    Creating digital experiences that combine stunning visuals with powerful functionality
                </p>

                {/* Main Content Card */}
                <div className="bg-white/5 backdrop-blur-lg rounded-2xl shadow-2xl border border-[#00d3f3]/20 p-8 md:p-12 hover:border-[#00d3f3]/40 transition-all duration-300">
                    
                    {/* Main Definition */}
                    <div className="text-center mb-10">
                        <p 
                            className="text-xl md:text-2xl text-white/90 leading-relaxed"
                            style={{ fontFamily: 'Work Sans, sans-serif' }}
                        >
                            <span className="font-bold bg-gradient-to-r from-[#00d3f3] to-[#00a8cc] bg-clip-text text-transparent">
                                Web Development & Design
                            </span>{" "}
                            is the process of building responsive, scalable, and visually appealing websites that deliver exceptional user experiences across all devices
                        </p>
                    </div>

                    {/* Key Services Grid */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
                        
                        {/* Service 1 */}
                        <div className="group bg-gradient-to-br from-[#00d3f3]/10 to-[#00d3f3]/5 border border-[#00d3f3]/20 p-6 rounded-xl hover:border-[#00d3f3]/40 hover:scale-105 transition-all duration-300 backdrop-blur-sm text-center">
                            <div className="text-5xl mb-4">🎨</div>
                            <h3 
                                className="text-xl font-bold mb-3 text-[#00d3f3]"
                                style={{ fontFamily: 'Outfit, sans-serif' }}
                            >
                                UI/UX Design
                            </h3>
                            <p 
                                className="text-white/70 text-sm"
                                style={{ fontFamily: 'Work Sans, sans-serif' }}
                            >
                                Crafting intuitive interfaces that users love, with pixel-perfect attention to detail
                            </p>
                        </div>

                        {/* Service 2 */}
                        <div className="group bg-gradient-to-br from-[#00d3f3]/10 to-[#00d3f3]/5 border border-[#00d3f3]/20 p-6 rounded-xl hover:border-[#00d3f3]/40 hover:scale-105 transition-all duration-300 backdrop-blur-sm text-center">
                            <div className="text-5xl mb-4">💻</div>
                            <h3 
                                className="text-xl font-bold mb-3 text-[#00d3f3]"
                                style={{ fontFamily: 'Outfit, sans-serif' }}
                            >
                                Frontend Development
                            </h3>
                            <p 
                                className="text-white/70 text-sm"
                                style={{ fontFamily: 'Work Sans, sans-serif' }}
                            >
                                Building fast, responsive interfaces using React, Next.js, and modern frameworks
                            </p>
                        </div>

                        {/* Service 3 */}
                        <div className="group bg-gradient-to-br from-[#00d3f3]/10 to-[#00d3f3]/5 border border-[#00d3f3]/20 p-6 rounded-xl hover:border-[#00d3f3]/40 hover:scale-105 transition-all duration-300 backdrop-blur-sm text-center">
                            <div className="text-5xl mb-4">⚙️</div>
                            <h3 
                                className="text-xl font-bold mb-3 text-[#00d3f3]"
                                style={{ fontFamily: 'Outfit, sans-serif' }}
                            >
                                Backend Systems
                            </h3>
                            <p 
                                className="text-white/70 text-sm"
                                style={{ fontFamily: 'Work Sans, sans-serif' }}
                            >
                                Robust server-side solutions with scalable APIs and database architecture
                            </p>
                        </div>

                        {/* Service 4 */}
                        <div className="group bg-gradient-to-br from-[#00d3f3]/10 to-[#00d3f3]/5 border border-[#00d3f3]/20 p-6 rounded-xl hover:border-[#00d3f3]/40 hover:scale-105 transition-all duration-300 backdrop-blur-sm text-center">
                            <div className="text-5xl mb-4">🚀</div>
                            <h3 
                                className="text-xl font-bold mb-3 text-[#00d3f3]"
                                style={{ fontFamily: 'Outfit, sans-serif' }}
                            >
                                Performance
                            </h3>
                            <p 
                                className="text-white/70 text-sm"
                                style={{ fontFamily: 'Work Sans, sans-serif' }}
                            >
                                Optimized for speed with lightning-fast load times and smooth interactions
                            </p>
                        </div>

                    </div>

                    {/* Development Process Section */}
                    <div className="mt-16">
                        <h2 
                            className="text-3xl md:text-4xl font-bold text-center mb-8 bg-gradient-to-r from-[#00d3f3] to-[#00a8cc] bg-clip-text text-transparent"
                            style={{ fontFamily: 'Outfit, sans-serif' }}
                        >
                            Our Development Process
                        </h2>

                        <div className="grid md:grid-cols-3 gap-8">
                            
                            {/* Step 1 */}
                            <div className="relative">
                                <div className="flex items-start space-x-4">
                                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-[#00d3f3] to-[#00a8cc] rounded-full flex items-center justify-center text-black font-bold text-xl" style={{ fontFamily: 'Outfit, sans-serif' }}>
                                        1
                                    </div>
                                    <div>
                                        <h3 
                                            className="text-xl font-bold text-[#00d3f3] mb-2"
                                            style={{ fontFamily: 'Outfit, sans-serif' }}
                                        >
                                            Discovery & Planning
                                        </h3>
                                        <p 
                                            className="text-white/70 text-sm"
                                            style={{ fontFamily: 'Work Sans, sans-serif' }}
                                        >
                                            Understanding your goals, audience, and requirements to create a strategic roadmap
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Step 2 */}
                            <div className="relative">
                                <div className="flex items-start space-x-4">
                                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-[#00d3f3] to-[#00a8cc] rounded-full flex items-center justify-center text-black font-bold text-xl" style={{ fontFamily: 'Outfit, sans-serif' }}>
                                        2
                                    </div>
                                    <div>
                                        <h3 
                                            className="text-xl font-bold text-[#00d3f3] mb-2"
                                            style={{ fontFamily: 'Outfit, sans-serif' }}
                                        >
                                            Design & Development
                                        </h3>
                                        <p 
                                            className="text-white/70 text-sm"
                                            style={{ fontFamily: 'Work Sans, sans-serif' }}
                                        >
                                            Creating beautiful designs and building them with clean, maintainable code
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Step 3 */}
                            <div className="relative">
                                <div className="flex items-start space-x-4">
                                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-[#00d3f3] to-[#00a8cc] rounded-full flex items-center justify-center text-black font-bold text-xl" style={{ fontFamily: 'Outfit, sans-serif' }}>
                                        3
                                    </div>
                                    <div>
                                        <h3 
                                            className="text-xl font-bold text-[#00d3f3] mb-2"
                                            style={{ fontFamily: 'Outfit, sans-serif' }}
                                        >
                                            Testing & Launch
                                        </h3>
                                        <p 
                                            className="text-white/70 text-sm"
                                            style={{ fontFamily: 'Work Sans, sans-serif' }}
                                        >
                                            Rigorous testing across devices followed by seamless deployment and support
                                        </p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                    {/* Key Technologies */}
                    <div className="mt-16 pt-8 border-t border-[#00d3f3]/20">
                        <h2 
                            className="text-3xl md:text-4xl font-bold text-center mb-8 bg-gradient-to-r from-[#00d3f3] to-[#00a8cc] bg-clip-text text-transparent"
                            style={{ fontFamily: 'Outfit, sans-serif' }}
                        >
                            Technologies We Use
                        </h2>

                        <div className="grid md:grid-cols-2 gap-6">
                            
                            <div className="flex items-start space-x-4 bg-gradient-to-r from-[#00d3f3]/5 to-transparent border border-[#00d3f3]/20 p-5 rounded-lg hover:border-[#00d3f3]/40 transition-all">
                                <span className="text-3xl">⚛️</span>
                                <div>
                                    <h4 
                                        className="font-bold text-white mb-2 text-lg"
                                        style={{ fontFamily: 'Outfit, sans-serif' }}
                                    >
                                        Modern Frameworks
                                    </h4>
                                    <p 
                                        className="text-white/70 text-sm"
                                        style={{ fontFamily: 'Work Sans, sans-serif' }}
                                    >
                                        React, Next.js, Vue.js, and Tailwind CSS for cutting-edge web applications
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4 bg-gradient-to-r from-[#00d3f3]/5 to-transparent border border-[#00d3f3]/20 p-5 rounded-lg hover:border-[#00d3f3]/40 transition-all">
                                <span className="text-3xl">📱</span>
                                <div>
                                    <h4 
                                        className="font-bold text-white mb-2 text-lg"
                                        style={{ fontFamily: 'Outfit, sans-serif' }}
                                    >
                                        Responsive Design
                                    </h4>
                                    <p 
                                        className="text-white/70 text-sm"
                                        style={{ fontFamily: 'Work Sans, sans-serif' }}
                                    >
                                        Mobile-first approach ensuring perfect display across all screen sizes
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4 bg-gradient-to-r from-[#00d3f3]/5 to-transparent border border-[#00d3f3]/20 p-5 rounded-lg hover:border-[#00d3f3]/40 transition-all">
                                <span className="text-3xl">🔒</span>
                                <div>
                                    <h4 
                                        className="font-bold text-white mb-2 text-lg"
                                        style={{ fontFamily: 'Outfit, sans-serif' }}
                                    >
                                        Security First
                                    </h4>
                                    <p 
                                        className="text-white/70 text-sm"
                                        style={{ fontFamily: 'Work Sans, sans-serif' }}
                                    >
                                        Industry-standard security practices with SSL, authentication, and data protection
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4 bg-gradient-to-r from-[#00d3f3]/5 to-transparent border border-[#00d3f3]/20 p-5 rounded-lg hover:border-[#00d3f3]/40 transition-all">
                                <span className="text-3xl">⚡</span>
                                <div>
                                    <h4 
                                        className="font-bold text-white mb-2 text-lg"
                                        style={{ fontFamily: 'Outfit, sans-serif' }}
                                    >
                                        Cloud Infrastructure
                                    </h4>
                                    <p 
                                        className="text-white/70 text-sm"
                                        style={{ fontFamily: 'Work Sans, sans-serif' }}
                                    >
                                        Scalable hosting solutions with AWS, Vercel, and modern deployment pipelines
                                    </p>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Whatweb;
