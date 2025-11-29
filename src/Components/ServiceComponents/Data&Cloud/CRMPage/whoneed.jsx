function Whoneed() {
    return (
        <div className="bg-transparent py-16 px-4 min-h-screen relative overflow-hidden">
            <div className="max-w-7xl mx-auto relative z-10">
                {/* Section Heading */}
                <h2 
                    className="text-6xl md:text-5xl font-semibold text-center mb-8 bg-gradient-to-r from-[#FF6467] to-[#FF8A8C] bg-clip-text text-transparent"
                    style={{ fontFamily: 'DeaconTest, sans-serif' }}
                >
                    Who Needs CRM?
                </h2>

                {/* Content Card */}
                <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl border border-[#FF6467]/20 p-8 md:p-12 hover:border-[#FF6467]/40 transition-all duration-300">
                    
                    <p 
                        className="text-lg text-gray-200 text-center mb-10 max-w-3xl mx-auto"
                        style={{ fontFamily: 'anta, sans-serif' }}
                    >
                        CRM systems benefit businesses of all sizes across diverse sectors, helping build long-term customer relationships
                    </p>

                    {/* Business Types Grid */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        
                        {/* Sales Teams */}
                        <div className="group bg-gradient-to-br from-[#FF6467]/10 to-[#FF6467]/5 border border-[#FF6467]/20 p-6 rounded-xl hover:border-[#FF6467]/40 hover:scale-105 transition-all duration-300 backdrop-blur-sm">
                            <div className="w-12 h-12 bg-gradient-to-br from-[#FF6467] to-[#FF8A8C] rounded-xl flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform">
                                🏢
                            </div>
                            <h3 
                                className="text-xl font-bold text-[#FF6467] mb-2"
                                style={{ fontFamily: 'DeaconTest, sans-serif' }}
                            >
                                Sales Teams
                            </h3>
                            <p 
                                className="text-gray-300 text-sm mb-3"
                                style={{ fontFamily: 'anta, sans-serif' }}
                            >
                                Track leads, manage pipelines, automate follow-ups, and close deals faster with organized workflows
                            </p>
                        </div>

                        {/* Marketing Departments */}
                        <div className="group bg-gradient-to-br from-[#FF6467]/10 to-[#FF6467]/5 border border-[#FF6467]/20 p-6 rounded-xl hover:border-[#FF6467]/40 hover:scale-105 transition-all duration-300 backdrop-blur-sm">
                            <div className="w-12 h-12 bg-gradient-to-br from-[#FF6467] to-[#FF8A8C] rounded-xl flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform">
                                📢
                            </div>
                            <h3 
                                className="text-xl font-bold text-[#FF6467] mb-2"
                                style={{ fontFamily: 'DeaconTest, sans-serif' }}
                            >
                                Marketing Teams
                            </h3>
                            <p 
                                className="text-gray-300 text-sm mb-3"
                                style={{ fontFamily: 'anta, sans-serif' }}
                            >
                                Segment audiences, track multichannel campaigns, and measure ROI with data-driven insights
                            </p>
                        </div>

                        {/* Customer Support */}
                        <div className="group bg-gradient-to-br from-[#FF6467]/10 to-[#FF6467]/5 border border-[#FF6467]/20 p-6 rounded-xl hover:border-[#FF6467]/40 hover:scale-105 transition-all duration-300 backdrop-blur-sm">
                            <div className="w-12 h-12 bg-gradient-to-br from-[#FF6467] to-[#FF8A8C] rounded-xl flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform">
                                🤝
                            </div>
                            <h3 
                                className="text-xl font-bold text-[#FF6467] mb-2"
                                style={{ fontFamily: 'DeaconTest, sans-serif' }}
                            >
                                Customer Support
                            </h3>
                            <p 
                                className="text-gray-300 text-sm mb-3"
                                style={{ fontFamily: 'anta, sans-serif' }}
                            >
                                Provide personalized service with complete customer history and interaction context
                            </p>
                        </div>

                        {/* B2B Companies */}
                        <div className="group bg-gradient-to-br from-[#FF6467]/10 to-[#FF6467]/5 border border-[#FF6467]/20 p-6 rounded-xl hover:border-[#FF6467]/40 hover:scale-105 transition-all duration-300 backdrop-blur-sm">
                            <div className="w-12 h-12 bg-gradient-to-br from-[#FF6467] to-[#FF8A8C] rounded-xl flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform">
                                💼
                            </div>
                            <h3 
                                className="text-xl font-bold text-[#FF6467] mb-2"
                                style={{ fontFamily: 'DeaconTest, sans-serif' }}
                            >
                                B2B Companies
                            </h3>
                            <p 
                                className="text-gray-300 text-sm mb-3"
                                style={{ fontFamily: 'anta, sans-serif' }}
                            >
                                Manage complex sales cycles with multiple decision-makers and long-term contracts
                            </p>
                        </div>

                        {/* Small Businesses */}
                        <div className="group bg-gradient-to-br from-[#FF6467]/10 to-[#FF6467]/5 border border-[#FF6467]/20 p-6 rounded-xl hover:border-[#FF6467]/40 hover:scale-105 transition-all duration-300 backdrop-blur-sm">
                            <div className="w-12 h-12 bg-gradient-to-br from-[#FF6467] to-[#FF8A8C] rounded-xl flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform">
                                🌐
                            </div>
                            <h3 
                                className="text-xl font-bold text-[#FF6467] mb-2"
                                style={{ fontFamily: 'DeaconTest, sans-serif' }}
                            >
                                Small Businesses
                            </h3>
                            <p 
                                className="text-gray-300 text-sm mb-3"
                                style={{ fontFamily: 'anta, sans-serif' }}
                            >
                                Organize customer data and automate follow-ups to scale operations efficiently
                            </p>
                        </div>

                        {/* Manufacturers */}
                        <div className="group bg-gradient-to-br from-[#FF6467]/10 to-[#FF6467]/5 border border-[#FF6467]/20 p-6 rounded-xl hover:border-[#FF6467]/40 hover:scale-105 transition-all duration-300 backdrop-blur-sm">
                            <div className="w-12 h-12 bg-gradient-to-br from-[#FF6467] to-[#FF8A8C] rounded-xl flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform">
                                🏭
                            </div>
                            <h3 
                                className="text-xl font-bold text-[#FF6467] mb-2"
                                style={{ fontFamily: 'DeaconTest, sans-serif' }}
                            >
                                Manufacturers
                            </h3>
                            <p 
                                className="text-gray-300 text-sm mb-3"
                                style={{ fontFamily: 'anta, sans-serif' }}
                            >
                                Manage dealer networks, track multi-phase contracts, and streamline quote-to-order
                            </p>
                        </div>

                    </div>

                    {/* Additional Business Types */}
                    {/* <div className="mt-8 grid md:grid-cols-2 gap-4">
                        <div className="flex items-center space-x-3 bg-gradient-to-r from-[#FF6467]/5 to-transparent border border-[#FF6467]/20 p-4 rounded-lg hover:border-[#FF6467]/40 transition-all">
                            <span className="text-2xl">⚖️</span>
                            <span 
                                className="text-gray-200 text-sm"
                                style={{ fontFamily: 'anta, sans-serif' }}
                            >
                                <span className="font-semibold text-white" style={{ fontFamily: 'DeaconTest, sans-serif' }}>Law Firms:</span> Maintain client records and track case progress
                            </span>
                        </div>
                        <div className="flex items-center space-x-3 bg-gradient-to-r from-[#FF6467]/5 to-transparent border border-[#FF6467]/20 p-4 rounded-lg hover:border-[#FF6467]/40 transition-all">
                            <span className="text-2xl">💰</span>
                            <span 
                                className="text-gray-200 text-sm"
                                style={{ fontFamily: 'anta, sans-serif' }}
                            >
                                <span className="font-semibold text-white" style={{ fontFamily: 'DeaconTest, sans-serif' }}>Financial Services:</span> Track transactions and provide personalized advice
                            </span>
                        </div>
                    </div> */}

                </div>
            </div>
        </div>
    );
}

export default Whoneed;
