function Whatserver() {
    return (
        <div className="bg-transparent py-16 px-4 min-h-screen relative overflow-hidden">
            <div className="max-w-7xl mx-auto relative z-10">
                {/* Main Heading */}
                <h1 
                    className="text-5xl md:text-6xl font-bold text-center mb-6 text-[#05df72] drop-shadow-[0_0_15px_rgba(5,223,114,0.3)]"
                    style={{ fontFamily: 'DeaconTest, sans-serif' }}
                >
                    What is Server Management?
                </h1>

                {/* Subheading */}
                <p 
                    className="text-xl md:text-2xl text-white/70 text-center mb-12 max-w-4xl mx-auto"
                    style={{ fontFamily: 'work-sans, sans-serif' }}
                >
                    Professional server administration that ensures your infrastructure runs smoothly, securely, and efficiently 24/7
                </p>

                {/* Main Content Card */}
                <div className="bg-[#05df72]/5 backdrop-blur-lg rounded-2xl shadow-[0_0_20px_rgba(5,223,114,0.05)] border border-[#05df72]/30 p-8 md:p-12 hover:border-[#05df72]/40 hover:shadow-[0_0_35px_rgba(5,223,114,0.15)] transition-all duration-300">
                    
                    {/* Main Definition */}
                    <div className="text-center mb-10">
                        <p 
                            className="text-xl md:text-2xl text-gray-200 leading-relaxed"
                            style={{ fontFamily: 'work-sans, sans-serif' }}
                        >
                            <span className="font-bold text-[#05df72]">
                                Server Management
                            </span>{" "}
                            is the comprehensive monitoring, maintenance, and optimization of physical or virtual servers to ensure maximum uptime, security, and performance for your business applications
                        </p>
                    </div>

                    {/* Key Services Grid */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
                        
                        {/* Service 1 */}
                        <div className="group bg-gradient-to-br from-[#05df72]/10 to-[#05df72]/5 border border-[#05df72]/20 p-6 rounded-xl hover:border-[#05df72]/40 hover:scale-105 transition-all duration-300 backdrop-blur-sm text-center">
                            <div className="text-5xl mb-4">🖥️</div>
                            <h3 
                                className="text-xl font-bold mb-3 text-[#05df72]"
                                style={{ fontFamily: 'DeaconTest, sans-serif' }}
                            >
                                Server Monitoring
                            </h3>
                            <p 
                                className="text-white/70 text-sm"
                                style={{ fontFamily: 'work-sans, sans-serif' }}
                            >
                                24/7 tracking of CPU, memory, disk space, and network performance metrics
                            </p>
                        </div>

                        {/* Service 2 */}
                        <div className="group bg-gradient-to-br from-[#05df72]/10 to-[#05df72]/5 border border-[#05df72]/20 p-6 rounded-xl hover:border-[#05df72]/40 hover:scale-105 transition-all duration-300 backdrop-blur-sm text-center">
                            <div className="text-5xl mb-4">🔒</div>
                            <h3 
                                className="text-xl font-bold mb-3 text-[#05df72]"
                                style={{ fontFamily: 'DeaconTest, sans-serif' }}
                            >
                                Security Management
                            </h3>
                            <p 
                                className="text-white/70 text-sm"
                                style={{ fontFamily: 'work-sans, sans-serif' }}
                            >
                                Firewall configuration, intrusion detection, and regular security patch updates
                            </p>
                        </div>

                        {/* Service 3 */}
                        <div className="group bg-gradient-to-br from-[#05df72]/10 to-[#05df72]/5 border border-[#05df72]/20 p-6 rounded-xl hover:border-[#05df72]/40 hover:scale-105 transition-all duration-300 backdrop-blur-sm text-center">
                            <div className="text-5xl mb-4">💾</div>
                            <h3 
                                className="text-xl font-bold mb-3 text-[#05df72]"
                                style={{ fontFamily: 'DeaconTest, sans-serif' }}
                            >
                                Backup & Recovery
                            </h3>
                            <p 
                                className="text-white/70 text-sm"
                                style={{ fontFamily: 'work-sans, sans-serif' }}
                            >
                                Automated daily backups with disaster recovery planning and testing
                            </p>
                        </div>

                        {/* Service 4 */}
                        <div className="group bg-gradient-to-br from-[#05df72]/10 to-[#05df72]/5 border border-[#05df72]/20 p-6 rounded-xl hover:border-[#05df72]/40 hover:scale-105 transition-all duration-300 backdrop-blur-sm text-center">
                            <div className="text-5xl mb-4">⚡</div>
                            <h3 
                                className="text-xl font-bold mb-3 text-[#05df72]"
                                style={{ fontFamily: 'DeaconTest, sans-serif' }}
                            >
                                Performance Tuning
                            </h3>
                            <p 
                                className="text-white/70 text-sm"
                                style={{ fontFamily: 'work-sans, sans-serif' }}
                            >
                                Regular optimization of server resources for maximum speed and efficiency
                            </p>
                        </div>

                    </div>

                    {/* What We Manage Section */}
                    <div className="mt-16">
                        <h2 
                            className="text-3xl md:text-4xl font-bold text-center mb-8 text-[#05df72] drop-shadow-[0_0_10px_rgba(5,223,114,0.3)]"
                            style={{ fontFamily: 'DeaconTest, sans-serif' }}
                        >
                            What We Manage
                        </h2>

                        <div className="grid md:grid-cols-3 gap-8">
                            
                            {/* Category 1 */}
                            <div className="bg-[#05df72]/5 border border-[#05df72]/20 p-6 rounded-xl hover:border-[#05df72]/40 transition-all">
                                <h3 
                                    className="text-xl font-bold text-[#05df72] mb-4 flex items-center"
                                    style={{ fontFamily: 'DeaconTest, sans-serif' }}
                                >
                                    <span className="text-2xl mr-3">🌐</span>
                                    Web Servers
                                </h3>
                                <ul className="space-y-2 text-white/70 text-sm" style={{ fontFamily: 'work-sans, sans-serif' }}>
                                    <li className="flex items-center"><span className="text-[#05df72] mr-2">•</span> Apache HTTP Server</li>
                                    <li className="flex items-center"><span className="text-[#05df72] mr-2">•</span> Nginx</li>
                                    <li className="flex items-center"><span className="text-[#05df72] mr-2">•</span> Microsoft IIS</li>
                                    <li className="flex items-center"><span className="text-[#05df72] mr-2">•</span> LiteSpeed</li>
                                </ul>
                            </div>

                            {/* Category 2 */}
                            <div className="bg-[#05df72]/5 border border-[#05df72]/20 p-6 rounded-xl hover:border-[#05df72]/40 transition-all">
                                <h3 
                                    className="text-xl font-bold text-[#05df72] mb-4 flex items-center"
                                    style={{ fontFamily: 'DeaconTest, sans-serif' }}
                                >
                                    <span className="text-2xl mr-3">🗄️</span>
                                    Database Servers
                                </h3>
                                <ul className="space-y-2 text-white/70 text-sm" style={{ fontFamily: 'work-sans, sans-serif' }}>
                                    <li className="flex items-center"><span className="text-[#05df72] mr-2">•</span> MySQL / MariaDB</li>
                                    <li className="flex items-center"><span className="text-[#05df72] mr-2">•</span> PostgreSQL</li>
                                    <li className="flex items-center"><span className="text-[#05df72] mr-2">•</span> MongoDB</li>
                                    <li className="flex items-center"><span className="text-[#05df72] mr-2">•</span> Microsoft SQL Server</li>
                                </ul>
                            </div>

                            {/* Category 3 */}
                            <div className="bg-[#05df72]/5 border border-[#05df72]/20 p-6 rounded-xl hover:border-[#05df72]/40 transition-all">
                                <h3 
                                    className="text-xl font-bold text-[#05df72] mb-4 flex items-center"
                                    style={{ fontFamily: 'DeaconTest, sans-serif' }}
                                >
                                    <span className="text-2xl mr-3">📧</span>
                                    Application Servers
                                </h3>
                                <ul className="space-y-2 text-white/70 text-sm" style={{ fontFamily: 'work-sans, sans-serif' }}>
                                    <li className="flex items-center"><span className="text-[#05df72] mr-2">•</span> Email Servers (Postfix)</li>
                                    <li className="flex items-center"><span className="text-[#05df72] mr-2">•</span> FTP Servers</li>
                                    <li className="flex items-center"><span className="text-[#05df72] mr-2">•</span> DNS Servers</li>
                                    <li className="flex items-center"><span className="text-[#05df72] mr-2">•</span> Node.js / Python Apps</li>
                                </ul>
                            </div>

                        </div>
                    </div>

                    {/* Why Server Management Matters */}
                    <div className="mt-16 pt-8 border-t border-[#05df72]/20">
                        <h2 
                            className="text-3xl md:text-4xl font-bold text-center mb-8 text-[#05df72] drop-shadow-[0_0_10px_rgba(5,223,114,0.3)]"
                            style={{ fontFamily: 'DeaconTest, sans-serif' }}
                        >
                            Why It Matters
                        </h2>

                        <div className="grid md:grid-cols-2 gap-6">
                            
                            <div className="flex items-start space-x-4 bg-gradient-to-r from-[#05df72]/5 to-transparent border border-[#05df72]/20 p-5 rounded-lg hover:border-[#05df72]/40 transition-all">
                                <span className="text-3xl">✅</span>
                                <div>
                                    <h4 
                                        className="font-bold text-white mb-2 text-lg"
                                        style={{ fontFamily: 'DeaconTest, sans-serif' }}
                                    >
                                        Maximum Uptime
                                    </h4>
                                    <p 
                                        className="text-white/70 text-sm"
                                        style={{ fontFamily: 'work-sans, sans-serif' }}
                                    >
                                        Proactive monitoring prevents downtime before it affects your business operations
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4 bg-gradient-to-r from-[#05df72]/5 to-transparent border border-[#05df72]/20 p-5 rounded-lg hover:border-[#05df72]/40 transition-all">
                                <span className="text-3xl">🛡️</span>
                                <div>
                                    <h4 
                                        className="font-bold text-white mb-2 text-lg"
                                        style={{ fontFamily: 'DeaconTest, sans-serif' }}
                                    >
                                        Enhanced Security
                                    </h4>
                                    <p 
                                        className="text-white/70 text-sm"
                                        style={{ fontFamily: 'work-sans, sans-serif' }}
                                    >
                                        Regular security updates protect against vulnerabilities and cyber threats
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4 bg-gradient-to-r from-[#05df72]/5 to-transparent border border-[#05df72]/20 p-5 rounded-lg hover:border-[#05df72]/40 transition-all">
                                <span className="text-3xl">💰</span>
                                <div>
                                    <h4 
                                        className="font-bold text-white mb-2 text-lg"
                                        style={{ fontFamily: 'DeaconTest, sans-serif' }}
                                    >
                                        Cost Efficiency
                                    </h4>
                                    <p 
                                        className="text-white/70 text-sm"
                                        style={{ fontFamily: 'work-sans, sans-serif' }}
                                    >
                                        Prevent expensive emergency fixes with regular maintenance and monitoring
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4 bg-gradient-to-r from-[#05df72]/5 to-transparent border border-[#05df72]/20 p-5 rounded-lg hover:border-[#05df72]/40 transition-all">
                                <span className="text-3xl">📈</span>
                                <div>
                                    <h4 
                                        className="font-bold text-white mb-2 text-lg"
                                        style={{ fontFamily: 'DeaconTest, sans-serif' }}
                                    >
                                        Scalability
                                    </h4>
                                    <p 
                                        className="text-white/70 text-sm"
                                        style={{ fontFamily: 'work-sans, sans-serif' }}
                                    >
                                        Easily scale server resources as your business grows without disruption
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

export default Whatserver;
