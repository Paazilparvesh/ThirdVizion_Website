import { motion } from "framer-motion";

// Import WebP images
import salesImg from "/src/assets/crmasset/salesteam.png";
import marketingImg from "/src/assets/crmasset/marketing.png";
import customercareImg from "/src/assets/crmasset/coustamare support.png";
import companiesImg from "/src/assets/crmasset/company.png";
import smallBusinessImg from "/src/assets/crmasset/buisness.png";
import manufacturingImg from "/src/assets/crmasset/retail.png";

function Whoneed() {
    const businessTypes = [
        {
            image: salesImg,
            title: "Sales Teams",
            description: "Track leads, manage pipelines, automate follow-ups, and close deals faster with organized workflows",
        },
        {
            image: marketingImg,
            title: "Marketing Teams",
            description: "Segment audiences, track multichannel campaigns, and measure ROI with data-driven insights",
        },
        {
            image: customercareImg,
            title: "Customer Support",
            description: "Provide personalized service with complete customer history and interaction context",
        },
        {
            image: companiesImg,
            title: "B2B Companies",
            description: "Manage complex sales cycles with multiple decision-makers and long-term contracts",
        },
        {
            image: smallBusinessImg,
            title: "Small Businesses",
            description: "Organize customer data and automate follow-ups to scale operations efficiently",
        },
        {
            image: manufacturingImg,
            title: "Manufacturers",
            description: "Manage dealer networks, track multi-phase contracts, and streamline quote-to-order",
        },
    ];

    return (
        <div className="bg-transparent py-16 px-4 min-h-screen relative overflow-hidden">
            <div className="max-w-7xl mx-auto relative z-10">

               <h2 
    className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl  font-font-semibold text-center mb-8 bg-gradient-to-r from-[#FF6467] to-[#FF8A8C] bg-clip-text text-transparent"
    style={{ fontFamily: 'DeaconTest, sans-serif' }}
>
    Who Needs CRM?
</h2>


                <div className="rounded-2xl shadow-2xl border border-[#FF6467]/20 p-8 md:p-12 hover:border-[#FF6467]/40 transition-all duration-300">
                    
                    <p 
                        className="text-lg text-gray-300 max-w-2xl mx-auto mb-12 text-center"
                        style={{ fontFamily: "anta, sans-serif" }}
                    >
                        CRM systems benefit businesses of all sizes across diverse sectors, helping build long-term customer relationships
                    </p>

                    {/* Business Types Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {businessTypes.map((business, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="relative p-8 rounded-2xl border border-[#FF6467]/20 bg-black/40 backdrop-blur-2xl flex flex-col hover:border-[#FF6467]/40 transition-all duration-500 group"
                            >
                                <div className="flex items-center justify-between mb-6">
                                    <div className="w-16 h-16 rounded-xl bg-transparent flex items-center justify-center shadow-lg overflow-hidden">
                                        <img 
                                            src={business.image} 
                                            alt={business.title}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                </div>

                                <h3 
                                    className="text-2xl font-bold text-white mb-3"
                                    style={{ fontFamily: "DeaconTest, sans-serif" }}
                                >
                                    {business.title}
                                </h3>

                                <p 
                                    className="text-gray-300 mb-4 flex-1"
                                    style={{ fontFamily: "anta, sans-serif" }}
                                >
                                    {business.description}
                                </p>

                                <div className="mt-auto w-full h-1 bg-[#FF6467]/20 rounded-full overflow-hidden">
                                    <motion.div
                                        initial={{ width: 0 }}
                                        whileInView={{ width: "100%" }}
                                        transition={{ duration: 1, delay: index * 0.2 }}
                                        viewport={{ once: true }}
                                        className="h-full bg-gradient-to-r from-[#FF6467] to-[#FF8A8C]"
                                    />
                                </div>
                            </motion.div>
                        ))}
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Whoneed;
