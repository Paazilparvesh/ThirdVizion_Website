import { motion } from "framer-motion";
import { Target, Settings, Database, Users } from "lucide-react";

function Willhelp() {
    const services = [
        {
            icon: Target,
            metric: "5X",
            title: "CRM Strategy & Consulting",
            description: "We analyze your business needs and select the right CRM platform aligned with your goals.",
            gradient: "from-red-500 to-pink-400",
        },
        {
            icon: Settings,
            metric: "70%",
            title: "CRM Implementation",
            description: "Deploy custom CRM solutions with automated workflows and seamless tool integration.",
            gradient: "from-pink-500 to-rose-400",
        },
        {
            icon: Database,
            metric: "95%",
            title: "Data Migration & Integration",
            description: "Securely transfer legacy data and integrate CRM with your software ecosystem.",
            gradient: "from-rose-500 to-red-400",
        },
        {
            icon: Users,
            metric: "3X",
            title: "Training & Support",
            description: "Comprehensive team training with 24/7 support for maximum CRM adoption.",
            gradient: "from-red-400 to-pink-500",
        },
    ];

    return (
        <section className="w-full min-h-screen flex items-center justify-center px-4 sm:px-6 md:px-10 lg:px-16 py-20 bg-transparent relative overflow-hidden">
            <div className="max-w-7xl mx-auto w-full relative z-10">
                {/* Header Section */}
                <motion.div
                    className="text-center mb-20"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true, amount: 0.3 }}
                >
                    <h1 
                        className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold tracking-tight mb-6 leading-tight bg-gradient-to-r from-[#FF6467] to-[#FF8A8C] bg-clip-text text-transparent"
                        style={{ fontFamily: "DeaconTest, sans-serif" }}
                    >
                        Our CRM Excellence
                    </h1>
                    <p 
                        className="text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed" 
                        style={{ fontFamily: "work-sans, sans-serif" }}
                    >
                        Delivering proven CRM solutions with measurable results that accelerate your business success.
                    </p>
                </motion.div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            viewport={{ once: true, amount: 0.3 }}
                            className="relative p-8 rounded-2xl border border-[#FF6467]/20 bg-black/40 backdrop-blur-2xl min-h-[350px] flex flex-col transition-all duration-500 hover:border-[#FF6467]/40 hover:shadow-[0_0_25px_rgba(255,100,103,0.3)] group"
                            style={{
                                backdropFilter: 'blur(20px)',
                                WebkitBackdropFilter: 'blur(20px)'
                            }}
                        >
                            {/* Glass morphism overlay */}
                            <div className="absolute inset-0 bg-gradient-to-br from-[#FF6467]/10 via-transparent to-[#FF8A8C]/5 opacity-50 group-hover:opacity-70 transition-opacity duration-500 rounded-2xl" />
                            
                            <div className="relative z-10 flex flex-col h-full">
                                {/* Icon with Metric Badge */}
                                <div className="flex items-center justify-between mb-6">
                                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center group-hover:scale-110 transition-transform duration-500 shadow-lg`}>
                                        <service.icon className="w-8 h-8 text-white" />
                                    </div>
                                    
                                    {/* Metric Badge - New Design */}
                                    <div className="relative">
                                        <div className="absolute inset-0 bg-gradient-to-r from-[#FF6467] to-[#FF8A8C] blur-xl opacity-40 group-hover:opacity-60 transition-opacity"></div>
                                        <div className="relative px-4 py-2 bg-gradient-to-r from-[#FF6467] to-[#FF8A8C] rounded-full border-2 border-white/20 shadow-lg">
                                            <span className="text-2xl font-black text-white">
                                                {service.metric}
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                {/* Title */}
                                <h3 
                                    className="text-2xl font-bold text-white mb-4 tracking-tight" 
                                    style={{ fontFamily: "DeaconTest, sans-serif" }}
                                >
                                    {service.title}
                                </h3>

                                {/* Description */}
                                <p 
                                    className="text-base text-gray-300 leading-relaxed flex-1" 
                                    style={{ fontFamily: "work-sans, sans-serif" }}
                                >
                                    {service.description}
                                </p>

                                {/* Progress bar */}
                                <div className="mt-6 w-full h-1 bg-[#FF6467]/20 rounded-full overflow-hidden">
                                    <motion.div
                                        initial={{ width: 0 }}
                                        whileInView={{ width: "100%" }}
                                        transition={{ duration: 1, delay: index * 0.2 + 0.5 }}
                                        viewport={{ once: true }}
                                        className={`h-full bg-gradient-to-r ${service.gradient} rounded-full`}
                                    />
                                </div>
                            </div>

                            {/* Decorative corners */}
                            <div className="absolute top-4 right-4 w-2 h-2 border-t border-r border-[#FF6467]/40 group-hover:border-[#FF6467] transition-colors duration-500" />
                            <div className="absolute bottom-4 left-4 w-2 h-2 border-b border-l border-[#FF6467]/40 group-hover:border-[#FF6467] transition-colors duration-500" />
                        </motion.div>
                    ))}
                </div>

                {/* Why Choose ThirdVizion */}
                <motion.div
                    className="mt-16 bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl border border-[#FF6467]/20 p-8 md:p-12 hover:border-[#FF6467]/40 transition-all duration-300"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    viewport={{ once: true, amount: 0.3 }}
                >
                    <h2 
                        className="text-3xl md:text-4xl font-bold text-center mb-8 bg-gradient-to-r from-[#FF6467] to-[#FF8A8C] bg-clip-text text-transparent"
                        style={{ fontFamily: "DeaconTest, sans-serif" }}
                    >
                        Why Choose ThirdVizion?
                    </h2>

                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="text-center p-6 bg-gradient-to-br from-[#FF6467]/5 to-transparent border border-[#FF6467]/20 rounded-xl hover:border-[#FF6467]/40 transition-all">
                            <div className="text-4xl mb-4">🚀</div>
                            <h4 
                                className="text-lg font-bold text-white mb-2"
                                style={{ fontFamily: "DeaconTest, sans-serif" }}
                            >
                                Faster Implementation
                            </h4>
                            <p 
                                className="text-gray-300 text-sm"
                                style={{ fontFamily: "work-sans, sans-serif" }}
                            >
                                Launch in weeks with proven methodologies
                            </p>
                        </div>

                        <div className="text-center p-6 bg-gradient-to-br from-[#FF6467]/5 to-transparent border border-[#FF6467]/20 rounded-xl hover:border-[#FF6467]/40 transition-all">
                            <div className="text-4xl mb-4">💡</div>
                            <h4 
                                className="text-lg font-bold text-white mb-2"
                                style={{ fontFamily: "DeaconTest, sans-serif" }}
                            >
                                Expert Guidance
                            </h4>
                            <p 
                                className="text-gray-300 text-sm"
                                style={{ fontFamily: "work-sans, sans-serif" }}
                            >
                                Industry expertise across multiple sectors
                            </p>
                        </div>

                        <div className="text-center p-6 bg-gradient-to-br from-[#FF6467]/5 to-transparent border border-[#FF6467]/20 rounded-xl hover:border-[#FF6467]/40 transition-all">
                            <div className="text-4xl mb-4">🎯</div>
                            <h4 
                                className="text-lg font-bold text-white mb-2"
                                style={{ fontFamily: "DeaconTest, sans-serif" }}
                            >
                                Tailored Solutions
                            </h4>
                            <p 
                                className="text-gray-300 text-sm"
                                style={{ fontFamily: "work-sans, sans-serif" }}
                            >
                                Custom-built for your business needs
                            </p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

export default Willhelp;
