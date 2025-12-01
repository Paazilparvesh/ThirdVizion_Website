import { motion } from "framer-motion";

function Whoneed() {
    const businessTypes = [
        {
            emoji: "🏢",
            title: "Sales Teams",
            description: "Track leads, manage pipelines, automate follow-ups, and close deals faster with organized workflows",
        },
        {
            emoji: "📢",
            title: "Marketing Teams",
            description: "Segment audiences, track multichannel campaigns, and measure ROI with data-driven insights",
        },
        {
            emoji: "🤝",
            title: "Customer Support",
            description: "Provide personalized service with complete customer history and interaction context",
        },
        {
            emoji: "💼",
            title: "B2B Companies",
            description: "Manage complex sales cycles with multiple decision-makers and long-term contracts",
        },
        {
            emoji: "🌐",
            title: "Small Businesses",
            description: "Organize customer data and automate follow-ups to scale operations efficiently",
        },
        {
            emoji: "🏭",
            title: "Manufacturers",
            description: "Manage dealer networks, track multi-phase contracts, and streamline quote-to-order",
        },
    ];

    return (
        <section className="w-full flex items-center justify-center px-4 sm:px-6 md:px-8 lg:px-12 py-16 bg-transparent relative">
            <div className="max-w-6xl mx-auto w-full relative z-10">

                {/* Header */}
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <h1 
                        className="text-5xl font-semibold mb-4 bg-gradient-to-r from-[#FF6467] to-[#FF8A8C] bg-clip-text text-transparent"
                        style={{ fontFamily: "DeaconTest, sans-serif" }}
                    >
                        Who Needs CRM?
                    </h1>
                    <p 
                        className="text-lg text-gray-300 max-w-2xl mx-auto"
                        style={{ fontFamily: "work-sans, sans-serif" }}
                    >
                        CRM systems benefit businesses of all sizes across diverse sectors, helping build long-term customer relationships
                    </p>
                </motion.div>

                {/* Business Types Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                    {businessTypes.map((business, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="relative p-8 rounded-2xl border border-[#FF6467]/20 bg-black/40 backdrop-blur-2xl flex flex-col hover:border-[#FF6467]/40 transition-all duration-500 group"
                        >
                            {/* Emoji Icon */}
                            <div className="flex items-center justify-between mb-6">
                                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-[#FF6467] to-[#FF8A8C] flex items-center justify-center shadow-lg">
                                    <span className="text-2xl">{business.emoji}</span>
                                </div>

                                {/* Optional: You could add a metric here like in the first component */}
                                {/* <div className="relative px-3 py-1.5 bg-gradient-to-r from-[#FF6467] to-[#FF8A8C] rounded-full border border-white/20 shadow-lg">
                                    <span className="text-xl font-black text-white">✓</span>
                                </div> */}
                            </div>

                            {/* Title */}
                            <h3 
                                className="text-2xl font-bold text-white mb-3"
                                style={{ fontFamily: "DeaconTest, sans-serif" }}
                            >
                                {business.title}
                            </h3>

                            {/* Description */}
                            <p 
                                className="text-gray-300 mb-4"
                                style={{ fontFamily: "work-sans, sans-serif" }}
                            >
                                {business.description}
                            </p>

                            {/* Progress bar - optional, but matches the first component's style */}
                            <div className="mt-auto w-full h-1 bg-[#FF6467]/20 rounded-full overflow-hidden">
                                <motion.div
                                    initial={{ width: 0 }}
                                    whileInView={{ width: "100%" }}
                                    transition={{ duration: 1, delay: index * 0.2 }}
                                    viewport={{ once: true }}
                                    className={`h-full bg-gradient-to-r from-[#FF6467] to-[#FF8A8C]`}
                                />
                            </div>
                        </motion.div>
                    ))}
                </div>

             
            </div>
        </section>
    );
}

export default Whoneed;