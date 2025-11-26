function Whatiam() {
    return (
        <div className="bg-transparent py-16 px-4 min-h-screen relative overflow-hidden">
            <div className="max-w-7xl mx-auto relative z-10">
                {/* Main Heading */}
                <h1 
                    className="text-5xl md:text-6xl font-bold text-center mb-6 bg-gradient-to-r from-[#FDC700] to-[#FFD700] bg-clip-text text-transparent"
                    style={{ fontFamily: 'DeaconTest, sans-serif' }}
                >
                    What is IAM?
                </h1>

                {/* Subheading */}
                <p 
                    className="text-xl md:text-2xl text-gray-200 text-center mb-12 max-w-4xl mx-auto"
                    style={{ fontFamily: 'work-sans, sans-serif' }}
                >
                    Identity and Access Management ensures the right people have secure access to the right resources at the right time
                </p>

                {/* Main Content Card */}
                <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl border border-[#FDC700]/20 p-8 md:p-12 hover:border-[#FDC700]/40 transition-all duration-300">
                    
                    {/* Main Definition */}
                    <div className="text-center mb-10">
                        <p 
                            className="text-xl md:text-2xl text-gray-200 leading-relaxed"
                            style={{ fontFamily: 'work-sans, sans-serif' }}
                        >
                            <span className="font-bold bg-gradient-to-r from-[#FDC700] to-[#FFD700] bg-clip-text text-transparent">
                                Identity and Access Management (IAM)
                            </span>{" "}
                            is a security framework that controls digital identities and manages user access across systems, applications, and data
                        </p>
                    </div>

                    {/* Key Components Grid */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
                        
                        {/* Component 1 */}
                        <div className="group bg-gradient-to-br from-[#FDC700]/10 to-[#FDC700]/5 border border-[#FDC700]/20 p-6 rounded-xl hover:border-[#FDC700]/40 hover:scale-105 transition-all duration-300 backdrop-blur-sm text-center">
                            <div className="text-5xl mb-4">🔐</div>
                            <h3 
                                className="text-xl font-bold mb-3 text-[#FDC700]"
                                style={{ fontFamily: 'DeaconTest, sans-serif' }}
                            >
                                Authentication
                            </h3>
                            <p 
                                className="text-gray-300 text-sm"
                                style={{ fontFamily: 'work-sans, sans-serif' }}
                            >
                                Verify user identity through passwords, biometrics, or multi-factor authentication
                            </p>
                        </div>

                        {/* Component 2 */}
                        <div className="group bg-gradient-to-br from-[#FDC700]/10 to-[#FDC700]/5 border border-[#FDC700]/20 p-6 rounded-xl hover:border-[#FDC700]/40 hover:scale-105 transition-all duration-300 backdrop-blur-sm text-center">
                            <div className="text-5xl mb-4">🛡️</div>
                            <h3 
                                className="text-xl font-bold mb-3 text-[#FDC700]"
                                style={{ fontFamily: 'DeaconTest, sans-serif' }}
                            >
                                Authorization
                            </h3>
                            <p 
                                className="text-gray-300 text-sm"
                                style={{ fontFamily: 'work-sans, sans-serif' }}
                            >
                                Control what authenticated users can access based on roles and permissions
                            </p>
                        </div>

                        {/* Component 3 */}
                        <div className="group bg-gradient-to-br from-[#FDC700]/10 to-[#FDC700]/5 border border-[#FDC700]/20 p-6 rounded-xl hover:border-[#FDC700]/40 hover:scale-105 transition-all duration-300 backdrop-blur-sm text-center">
                            <div className="text-5xl mb-4">👤</div>
                            <h3 
                                className="text-xl font-bold mb-3 text-[#FDC700]"
                                style={{ fontFamily: 'DeaconTest, sans-serif' }}
                            >
                                User Management
                            </h3>
                            <p 
                                className="text-gray-300 text-sm"
                                style={{ fontFamily: 'work-sans, sans-serif' }}
                            >
                                Create, modify, and delete user accounts throughout their lifecycle
                            </p>
                        </div>

                        {/* Component 4 */}
                        <div className="group bg-gradient-to-br from-[#FDC700]/10 to-[#FDC700]/5 border border-[#FDC700]/20 p-6 rounded-xl hover:border-[#FDC700]/40 hover:scale-105 transition-all duration-300 backdrop-blur-sm text-center">
                            <div className="text-5xl mb-4">📊</div>
                            <h3 
                                className="text-xl font-bold mb-3 text-[#FDC700]"
                                style={{ fontFamily: 'DeaconTest, sans-serif' }}
                            >
                                Audit & Compliance
                            </h3>
                            <p 
                                className="text-gray-300 text-sm"
                                style={{ fontFamily: 'work-sans, sans-serif' }}
                            >
                                Track access logs and generate reports for regulatory compliance
                            </p>
                        </div>

                    </div>

                    {/* How IAM Works Section */}
                    <div className="mt-16">
                        <h2 
                            className="text-3xl md:text-4xl font-bold text-center mb-8 bg-gradient-to-r from-[#FDC700] to-[#FFD700] bg-clip-text text-transparent"
                            style={{ fontFamily: 'DeaconTest, sans-serif' }}
                        >
                            How IAM Works
                        </h2>

                        <div className="grid md:grid-cols-3 gap-8">
                            
                            {/* Step 1 */}
                            <div className="relative">
                                <div className="flex items-start space-x-4">
                                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-[#FDC700] to-[#FFD700] rounded-full flex items-center justify-center text-black font-bold text-xl" style={{ fontFamily: 'DeaconTest, sans-serif' }}>
                                        1
                                    </div>
                                    <div>
                                        <h3 
                                            className="text-xl font-bold text-[#FDC700] mb-2"
                                            style={{ fontFamily: 'DeaconTest, sans-serif' }}
                                        >
                                            Identity Verification
                                        </h3>
                                        <p 
                                            className="text-gray-300 text-sm"
                                            style={{ fontFamily: 'work-sans, sans-serif' }}
                                        >
                                            User requests access by providing credentials like username, password, or biometric data
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Step 2 */}
                            <div className="relative">
                                <div className="flex items-start space-x-4">
                                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-[#FDC700] to-[#FFD700] rounded-full flex items-center justify-center text-black font-bold text-xl" style={{ fontFamily: 'DeaconTest, sans-serif' }}>
                                        2
                                    </div>
                                    <div>
                                        <h3 
                                            className="text-xl font-bold text-[#FDC700] mb-2"
                                            style={{ fontFamily: 'DeaconTest, sans-serif' }}
                                        >
                                            Access Validation
                                        </h3>
                                        <p 
                                            className="text-gray-300 text-sm"
                                            style={{ fontFamily: 'work-sans, sans-serif' }}
                                        >
                                            IAM system validates credentials and checks permissions against policies and roles
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Step 3 */}
                            <div className="relative">
                                <div className="flex items-start space-x-4">
                                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-[#FDC700] to-[#FFD700] rounded-full flex items-center justify-center text-black font-bold text-xl" style={{ fontFamily: 'DeaconTest, sans-serif' }}>
                                        3
                                    </div>
                                    <div>
                                        <h3 
                                            className="text-xl font-bold text-[#FDC700] mb-2"
                                            style={{ fontFamily: 'DeaconTest, sans-serif' }}
                                        >
                                            Grant or Deny
                                        </h3>
                                        <p 
                                            className="text-gray-300 text-sm"
                                            style={{ fontFamily: 'work-sans, sans-serif' }}
                                        >
                                            System grants access to authorized resources or denies if permissions don't match
                                        </p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                    {/* Key Benefits */}
                    <div className="mt-16 pt-8 border-t border-[#FDC700]/20">
                        <h2 
                            className="text-3xl md:text-4xl font-bold text-center mb-8 bg-gradient-to-r from-[#FDC700] to-[#FFD700] bg-clip-text text-transparent"
                            style={{ fontFamily: 'DeaconTest, sans-serif' }}
                        >
                            Key Benefits
                        </h2>

                        <div className="grid md:grid-cols-2 gap-6">
                            
                            <div className="flex items-start space-x-4 bg-gradient-to-r from-[#FDC700]/5 to-transparent border border-[#FDC700]/20 p-5 rounded-lg hover:border-[#FDC700]/40 transition-all">
                                <span className="text-3xl">🔒</span>
                                <div>
                                    <h4 
                                        className="font-bold text-white mb-2 text-lg"
                                        style={{ fontFamily: 'DeaconTest, sans-serif' }}
                                    >
                                        Enhanced Security
                                    </h4>
                                    <p 
                                        className="text-gray-300 text-sm"
                                        style={{ fontFamily: 'work-sans, sans-serif' }}
                                    >
                                        Prevent unauthorized access and reduce security breaches with multi-layered protection
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4 bg-gradient-to-r from-[#FDC700]/5 to-transparent border border-[#FDC700]/20 p-5 rounded-lg hover:border-[#FDC700]/40 transition-all">
                                <span className="text-3xl">⚡</span>
                                <div>
                                    <h4 
                                        className="font-bold text-white mb-2 text-lg"
                                        style={{ fontFamily: 'DeaconTest, sans-serif' }}
                                    >
                                        Improved Productivity
                                    </h4>
                                    <p 
                                        className="text-gray-300 text-sm"
                                        style={{ fontFamily: 'work-sans, sans-serif' }}
                                    >
                                        Single sign-on enables quick access to multiple applications without repeated logins
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4 bg-gradient-to-r from-[#FDC700]/5 to-transparent border border-[#FDC700]/20 p-5 rounded-lg hover:border-[#FDC700]/40 transition-all">
                                <span className="text-3xl">📋</span>
                                <div>
                                    <h4 
                                        className="font-bold text-white mb-2 text-lg"
                                        style={{ fontFamily: 'DeaconTest, sans-serif' }}
                                    >
                                        Regulatory Compliance
                                    </h4>
                                    <p 
                                        className="text-gray-300 text-sm"
                                        style={{ fontFamily: 'work-sans, sans-serif' }}
                                    >
                                        Meet GDPR, HIPAA, SOX requirements with automated audit trails and reporting
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4 bg-gradient-to-r from-[#FDC700]/5 to-transparent border border-[#FDC700]/20 p-5 rounded-lg hover:border-[#FDC700]/40 transition-all">
                                <span className="text-3xl">💰</span>
                                <div>
                                    <h4 
                                        className="font-bold text-white mb-2 text-lg"
                                        style={{ fontFamily: 'DeaconTest, sans-serif' }}
                                    >
                                        Cost Reduction
                                    </h4>
                                    <p 
                                        className="text-gray-300 text-sm"
                                        style={{ fontFamily: 'work-sans, sans-serif' }}
                                    >
                                        Automate user provisioning and reduce IT help desk tickets for password resets
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

export default Whatiam;
