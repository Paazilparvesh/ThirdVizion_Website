function VRIndustries() {
    return (
        <div className="min-h-screen bg-black py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
                {/* Header Section */}
                <div className="text-center mb-12">
                    <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent" 
                        style={{ fontFamily: 'DeaconTest, serif', fontStyle: 'normal' }}>
                        VR Industries
                    </h1>
                    <p className="text-xl md:text-2xl text-white max-w-3xl mx-auto leading-relaxed" 
                       style={{ fontFamily: 'Arial, sans-serif' }}>
                        Virtual Reality (VR) is transforming how we work, learn, and innovate across multiple industries. 
                        Explore the revolutionary applications of VR technology in today's modern world.
                    </p>
                </div>

                {/* What is VR Section */}
                <div className="bg-transparent border border-gray-800 rounded-2xl shadow-xl p-8 mb-8">
                    <h2 className="text-3xl font-bold text-white mb-4" 
                        style={{ fontFamily: 'DeaconTest, serif', fontStyle: 'normal' }}>
                        What is Virtual Reality?
                    </h2>
                    <p className="text-lg text-gray-300 leading-relaxed">
                        Virtual Reality is an immersive technology that creates simulated environments, 
                        allowing users to interact with 3D worlds through specialized headsets and controllers. 
                        It provides realistic experiences that can replicate real-world scenarios or create 
                        entirely new digital environments for training, entertainment, and innovation.
                    </p>
                </div>

                {/* Industries Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                    {/* Healthcare */}
                    <div className="bg-transparent border border-gray-800 rounded-xl shadow-lg p-6 hover:shadow-2xl transition-shadow duration-300">
                        <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center mb-4">
                            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-bold text-white mb-2" 
                            style={{ fontFamily: 'DeaconTest, serif' }}>
                            Healthcare
                        </h3>
                        <p className="text-gray-300">
                            Surgical training, pain management, mental health therapy, and medical simulations 
                            in risk-free environments for doctors and students.
                        </p>
                    </div>

                    {/* Education */}
                    <div className="bg-transparent border border-gray-800 rounded-xl shadow-lg p-6 hover:shadow-2xl transition-shadow duration-300">
                        <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center mb-4">
                            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-bold text-white mb-2" 
                            style={{ fontFamily: 'DeaconTest, serif' }}>
                            Education
                        </h3>
                        <p className="text-gray-300">
                            Virtual classrooms, immersive training, and interactive lessons improve learning 
                            in schools, universities, and corporate settings.
                        </p>
                    </div>

                    {/* Automotive */}
                    <div className="bg-transparent border border-gray-800 rounded-xl shadow-lg p-6 hover:shadow-2xl transition-shadow duration-300">
                        <div className="w-12 h-12 bg-red-500 rounded-lg flex items-center justify-center mb-4">
                            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-bold text-white mb-2" 
                            style={{ fontFamily: 'DeaconTest, serif' }}>
                            Automotive
                        </h3>
                        <p className="text-gray-300">
                            Car manufacturers use VR for design, crash simulations, virtual test drives, 
                            and autonomous vehicle development before production.
                        </p>
                    </div>

                    {/* Real Estate */}
                    <div className="bg-transparent border border-gray-800 rounded-xl shadow-lg p-6 hover:shadow-2xl transition-shadow duration-300">
                        <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center mb-4">
                            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-bold text-white mb-2" 
                            style={{ fontFamily: 'DeaconTest, serif' }}>
                            Real Estate
                        </h3>
                        <p className="text-gray-300">
                            VR-powered tours let buyers explore properties remotely while architects 
                            visualize and refine designs before construction begins.
                        </p>
                    </div>

                    {/* Manufacturing */}
                    <div className="bg-transparent border border-gray-800 rounded-xl shadow-lg p-6 hover:shadow-2xl transition-shadow duration-300">
                        <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center mb-4">
                            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-bold text-white mb-2" 
                            style={{ fontFamily: 'DeaconTest, serif' }}>
                            Manufacturing
                        </h3>
                        <p className="text-gray-300">
                            Prototype testing, assembly line optimization, and worker training in 
                            complex or hazardous environments with zero real-world risk.
                        </p>
                    </div>

                    {/* Retail */}
                    <div className="bg-transparent border border-gray-800 rounded-xl shadow-lg p-6 hover:shadow-2xl transition-shadow duration-300">
                        <div className="w-12 h-12 bg-pink-500 rounded-lg flex items-center justify-center mb-4">
                            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-bold text-white mb-2" 
                            style={{ fontFamily: 'DeaconTest, serif' }}>
                            Retail
                        </h3>
                        <p className="text-gray-300">
                            Brands leverage VR for virtual shopping experiences, interactive product trials, 
                            and immersive advertising campaigns that engage customers.
                        </p>
                    </div>
                </div>

                {/* Future Impact */}
                <div className="bg-transparent border border-gray-800 rounded-2xl shadow-xl p-8 text-white">
                    <h2 className="text-3xl font-bold mb-4" 
                        style={{ fontFamily: 'DeaconTest, serif', fontStyle: 'normal' }}>
                        The Future of VR
                    </h2>
                    <p className="text-lg leading-relaxed text-gray-300">
                        As VR technology continues to evolve, it's revolutionizing industries by reducing costs, 
                        improving safety, enhancing training programs, and creating unprecedented opportunities 
                        for innovation. From space exploration to mental health therapy, VR is shaping the future 
                        of how we interact with digital environments.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default VRIndustries;