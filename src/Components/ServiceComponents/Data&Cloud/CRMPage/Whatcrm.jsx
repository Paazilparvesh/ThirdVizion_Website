function Whatcrm() {
    return (
        <div className="bg-transparent py-16 px-4 min-h-screen relative overflow-hidden">
            {/* Animated Background Effects */}
            <div className="absolute inset-0">
                <div className="absolute inset-0 bg-gradient-to-br from-[#FF6467]/20 via-black to-[#FF6467]/10"></div>
                
                {/* Glowing Orbs */}
                <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#FF6467] rounded-full filter blur-[100px] opacity-20 animate-float"></div>
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#FF6467] rounded-full filter blur-[120px] opacity-15 animate-float-slow"></div>
            </div>

            <div className="max-w-7xl mx-auto relative z-10 space-y-16">
                
                {/* FIRST SECTION - WHAT IS CRM */}
                <div>
                    {/* Section Heading */}
                    <h1 
                        className="text-5xl md:text-6xl font-bold text-center mb-8 bg-gradient-to-r from-[#FF6467] to-[#FF8A8C] bg-clip-text text-transparent"
                        style={{ fontFamily: 'DeaconTest, sans-serif' }}
                    >
                        What is CRM?
                    </h1>

                    {/* Main Content Card */}
                    <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl border border-[#FF6467]/20 p-8 md:p-12 hover:border-[#FF6467]/40 transition-all duration-300">
                        
                        {/* Main Definition */}
                        <div className="text-center mb-10">
                            <p 
                                className="text-xl md:text-2xl text-gray-200 leading-relaxed"
                                style={{ fontFamily: 'work-sans, sans-serif' }}
                            >
                                <span className="font-bold bg-gradient-to-r from-[#FF6467] to-[#FF8A8C] bg-clip-text text-transparent">
                                    Customer Relationship Management (CRM)
                                </span>{" "}
                                is a software system that helps businesses track and manage all interactions with current and potential customers
                            </p>
                        </div>

                        {/* Key Features Grid */}
                        <div className="grid md:grid-cols-3 gap-6 mt-12">
                            {/* Feature 1 */}
                            <div className="bg-gradient-to-br from-[#FF6467]/10 to-[#FF6467]/5 border border-[#FF6467]/20 p-6 rounded-xl hover:shadow-lg hover:border-[#FF6467]/40 hover:scale-105 transition-all duration-300 backdrop-blur-sm">
                                <div className="text-4xl mb-4">📊</div>
                                <h3 
                                    className="text-xl font-bold mb-3 text-[#FF6467]"
                                    style={{ fontFamily: 'DeaconTest, sans-serif' }}
                                >
                                    Centralized Data
                                </h3>
                                <p 
                                    className="text-gray-300 text-sm"
                                    style={{ fontFamily: 'work-sans, sans-serif' }}
                                >
                                    Store customer contact info, purchase history, and interactions in one secure location accessible to your entire team
                                </p>
                            </div>

                            {/* Feature 2 */}
                            <div className="bg-gradient-to-br from-[#FF6467]/10 to-[#FF6467]/5 border border-[#FF6467]/20 p-6 rounded-xl hover:shadow-lg hover:border-[#FF6467]/40 hover:scale-105 transition-all duration-300 backdrop-blur-sm">
                                <div className="text-4xl mb-4">⚙️</div>
                                <h3 
                                    className="text-xl font-bold mb-3 text-[#FF6467]"
                                    style={{ fontFamily: 'DeaconTest, sans-serif' }}
                                >
                                    Automation
                                </h3>
                                <p 
                                    className="text-gray-300 text-sm"
                                    style={{ fontFamily: 'work-sans, sans-serif' }}
                                >
                                    Automate repetitive tasks like data entry, lead routing, and follow-up emails to focus on closing deals
                                </p>
                            </div>

                            {/* Feature 3 */}
                            <div className="bg-gradient-to-br from-[#FF6467]/10 to-[#FF6467]/5 border border-[#FF6467]/20 p-6 rounded-xl hover:shadow-lg hover:border-[#FF6467]/40 hover:scale-105 transition-all duration-300 backdrop-blur-sm">
                                <div className="text-4xl mb-4">🤖</div>
                                <h3 
                                    className="text-xl font-bold mb-3 text-[#FF6467]"
                                    style={{ fontFamily: 'DeaconTest, sans-serif' }}
                                >
                                    AI-Powered Insights
                                </h3>
                                <p 
                                    className="text-gray-300 text-sm"
                                    style={{ fontFamily: 'work-sans, sans-serif' }}
                                >
                                    Use AI to predict customer behavior, automate workflows, and generate actionable insights from your data
                                </p>
                            </div>
                        </div>

                        {/* Core Functions */}
                        <div className="mt-12 grid md:grid-cols-2 gap-4">
                            <div className="flex items-start space-x-3 bg-gradient-to-r from-[#FF6467]/5 to-transparent border border-[#FF6467]/20 p-4 rounded-lg hover:border-[#FF6467]/40 transition-all backdrop-blur-sm">
                                <span className="text-2xl">📈</span>
                                <div>
                                    <h4 
                                        className="font-semibold text-white mb-1"
                                        style={{ fontFamily: 'DeaconTest, sans-serif' }}
                                    >
                                        Sales Pipeline Management
                                    </h4>
                                    <p 
                                        className="text-gray-300 text-sm"
                                        style={{ fontFamily: 'work-sans, sans-serif' }}
                                    >
                                        Track leads, opportunities, and deals through every stage
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-start space-x-3 bg-gradient-to-r from-[#FF6467]/5 to-transparent border border-[#FF6467]/20 p-4 rounded-lg hover:border-[#FF6467]/40 transition-all backdrop-blur-sm">
                                <span className="text-2xl">📧</span>
                                <div>
                                    <h4 
                                        className="font-semibold text-white mb-1"
                                        style={{ fontFamily: 'DeaconTest, sans-serif' }}
                                    >
                                        Marketing Campaigns
                                    </h4>
                                    <p 
                                        className="text-gray-300 text-sm"
                                        style={{ fontFamily: 'work-sans, sans-serif' }}
                                    >
                                        Segment audiences and track campaign performance
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-start space-x-3 bg-gradient-to-r from-[#FF6467]/5 to-transparent border border-[#FF6467]/20 p-4 rounded-lg hover:border-[#FF6467]/40 transition-all backdrop-blur-sm">
                                <span className="text-2xl">💬</span>
                                <div>
                                    <h4 
                                        className="font-semibold text-white mb-1"
                                        style={{ fontFamily: 'DeaconTest, sans-serif' }}
                                    >
                                        Customer Service
                                    </h4>
                                    <p 
                                        className="text-gray-300 text-sm"
                                        style={{ fontFamily: 'work-sans, sans-serif' }}
                                    >
                                        Manage support tickets with complete customer context
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-start space-x-3 bg-gradient-to-r from-[#FF6467]/5 to-transparent border border-[#FF6467]/20 p-4 rounded-lg hover:border-[#FF6467]/40 transition-all backdrop-blur-sm">
                                <span className="text-2xl">📊</span>
                                <div>
                                    <h4 
                                        className="font-semibold text-white mb-1"
                                        style={{ fontFamily: 'DeaconTest, sans-serif' }}
                                    >
                                        Reports & Analytics
                                    </h4>
                                    <p 
                                        className="text-gray-300 text-sm"
                                        style={{ fontFamily: 'work-sans, sans-serif' }}
                                    >
                                        Generate insights for data-driven decisions
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* SECOND SECTION - WHO NEEDS CRM - COMMENTED OUT */}
                {/* 
                <div>
                    <h2 
                        className="text-4xl md:text-5xl font-bold text-center mb-8 bg-gradient-to-r from-[#FF6467] to-[#FF8A8C] bg-clip-text text-transparent"
                        style={{ fontFamily: 'DeaconTest, sans-serif' }}
                    >
                        Who Needs CRM?
                    </h2>

                    <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl border border-[#FF6467]/20 p-8 md:p-12 hover:border-[#FF6467]/40 transition-all duration-300">
                        
                        <p 
                            className="text-lg text-gray-200 text-center mb-10 max-w-3xl mx-auto"
                            style={{ fontFamily: 'work-sans, sans-serif' }}
                        >
                            CRM systems benefit businesses of all sizes across diverse sectors, helping build long-term customer relationships
                        </p>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            
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
                                    style={{ fontFamily: 'work-sans, sans-serif' }}
                                >
                                    Track leads, manage pipelines, automate follow-ups, and close deals faster with organized workflows
                                </p>
                            </div>

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
                                    style={{ fontFamily: 'work-sans, sans-serif' }}
                                >
                                    Segment audiences, track multichannel campaigns, and measure ROI with data-driven insights
                                </p>
                            </div>

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
                                    style={{ fontFamily: 'work-sans, sans-serif' }}
                                >
                                    Provide personalized service with complete customer history and interaction context
                                </p>
                            </div>

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
                                    style={{ fontFamily: 'work-sans, sans-serif' }}
                                >
                                    Manage complex sales cycles with multiple decision-makers and long-term contracts
                                </p>
                            </div>

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
                                    style={{ fontFamily: 'work-sans, sans-serif' }}
                                >
                                    Organize customer data and automate follow-ups to scale operations efficiently
                                </p>
                            </div>

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
                                    style={{ fontFamily: 'work-sans, sans-serif' }}
                                >
                                    Manage dealer networks, track multi-phase contracts, and streamline quote-to-order
                                </p>
                            </div>

                        </div>

                        <div className="mt-8 grid md:grid-cols-2 gap-4">
                            <div className="flex items-center space-x-3 bg-gradient-to-r from-[#FF6467]/5 to-transparent border border-[#FF6467]/20 p-4 rounded-lg hover:border-[#FF6467]/40 transition-all">
                                <span className="text-2xl">⚖️</span>
                                <span 
                                    className="text-gray-200 text-sm"
                                    style={{ fontFamily: 'work-sans, sans-serif' }}
                                >
                                    <span className="font-semibold text-white" style={{ fontFamily: 'DeaconTest, sans-serif' }}>Law Firms:</span> Maintain client records and track case progress
                                </span>
                            </div>
                            <div className="flex items-center space-x-3 bg-gradient-to-r from-[#FF6467]/5 to-transparent border border-[#FF6467]/20 p-4 rounded-lg hover:border-[#FF6467]/40 transition-all">
                                <span className="text-2xl">💰</span>
                                <span 
                                    className="text-gray-200 text-sm"
                                    style={{ fontFamily: 'work-sans, sans-serif' }}
                                >
                                    <span className="font-semibold text-white" style={{ fontFamily: 'DeaconTest, sans-serif' }}>Financial Services:</span> Track transactions and provide personalized advice
                                </span>
                            </div>
                        </div>

                    </div>
                </div>
                */}

            </div>

            {/* Custom Animations */}
            <style jsx>{`
                @keyframes float {
                    0%, 100% { transform: translateY(0px); }
                    50% { transform: translateY(-20px); }
                }
                
                @keyframes float-slow {
                    0%, 100% { transform: translateY(0px); }
                    50% { transform: translateY(10px); }
                }
                
                .animate-float {
                    animation: float 8s ease-in-out infinite;
                }
                
                .animate-float-slow {
                    animation: float-slow 12s ease-in-out infinite;
                }
            `}</style>
        </div>
    );
}

export default Whatcrm;
