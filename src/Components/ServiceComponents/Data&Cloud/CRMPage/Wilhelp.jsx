// import { motion } from "framer-motion";
// import { Target, Settings, Database, Users } from "lucide-react";

// function Willhelp() {
//     const services = [
//         {
//             icon: Target,
//             metric: "5X",
//             title: "CRM Strategy & Consulting",
//             description: "We analyze your business needs and select the right CRM platform aligned with your goals.",
//             gradient: "from-red-500 to-pink-400",
//         },
//         {
//             icon: Settings,
//             metric: "70%",
//             title: "CRM Implementation",
//             description: "Deploy custom CRM solutions with automated workflows and seamless tool integration.",
//             gradient: "from-pink-500 to-rose-400",
//         },
//         {
//             icon: Database,
//             metric: "95%",
//             title: "Data Migration & Integration",
//             description: "Securely transfer legacy data and integrate CRM with your software ecosystem.",
//             gradient: "from-rose-500 to-red-400",
//         },
//         {
//             icon: Users,
//             metric: "3X",
//             title: "Training & Support",
//             description: "Comprehensive team training with 24/7 support for maximum CRM adoption.",
//             gradient: "from-red-400 to-pink-500",
//         },
//     ];

//     return (
//         <section className="w-full flex items-center justify-center px-4 sm:px-6 md:px-8 lg:px-12 py-16 bg-transparent relative">
//             <div className="max-w-6xl mx-auto w-full relative z-10">
//                 {/* Header Section */}
//                 <motion.div
//                     className="text-center mb-12 md:mb-16"
//                     initial={{ opacity: 0, y: 50 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 0.8 }}
//                     viewport={{ once: true, amount: 0.3 }}
//                 >
//                     <h1 
//                         className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight mb-4 leading-tight bg-gradient-to-r from-[#FF6467] to-[#FF8A8C] bg-clip-text text-transparent"
//                         style={{ fontFamily: "DeaconTest, sans-serif" }}
//                     >
//                         Our CRM Excellence
//                     </h1>
//                     <p 
//                         className="text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed px-4" 
//                         style={{ fontFamily: "work-sans, sans-serif" }}
//                     >
//                         Delivering proven CRM solutions with measurable results that accelerate your business success.
//                     </p>
//                 </motion.div>

//                 {/* Services Grid */}
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6 mb-12">
//                     {services.map((service, index) => (
//                         <motion.div
//                             key={index}
//                             initial={{ opacity: 0, y: 50 }}
//                             whileInView={{ opacity: 1, y: 0 }}
//                             transition={{ duration: 0.6, delay: index * 0.1 }}
//                             viewport={{ once: true, amount: 0.3 }}
//                             className="relative p-6 md:p-8 rounded-2xl border border-[#FF6467]/20 bg-black/40 backdrop-blur-2xl flex flex-col transition-all duration-500 hover:border-[#FF6467]/40 hover:shadow-[0_0_25px_rgba(255,100,103,0.3)] group"
//                             style={{
//                                 backdropFilter: 'blur(20px)',
//                                 WebkitBackdropFilter: 'blur(20px)'
//                             }}
//                         >
//                             {/* Glass morphism overlay */}
//                             <div className="absolute inset-0 bg-gradient-to-br from-[#FF6467]/10 via-transparent to-[#FF8A8C]/5 opacity-50 group-hover:opacity-70 transition-opacity duration-500 rounded-2xl" />
                            
//                             <div className="relative z-10 flex flex-col">
//                                 {/* Icon with Metric Badge */}
//                                 <div className="flex items-center justify-between mb-5">
//                                     <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center group-hover:scale-110 transition-transform duration-500 shadow-lg`}>
//                                         <service.icon className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
//                                     </div>
                                    
//                                     {/* Metric Badge - Compact Design */}
//                                     <div className="relative">
//                                         <div className="absolute inset-0 bg-gradient-to-r from-[#FF6467] to-[#FF8A8C] blur-lg opacity-40 group-hover:opacity-60 transition-opacity"></div>
//                                         <div className="relative px-3 py-1.5 bg-gradient-to-r from-[#FF6467] to-[#FF8A8C] rounded-full border border-white/20 shadow-lg">
//                                             <span className="text-lg sm:text-xl font-black text-white">
//                                                 {service.metric}
//                                             </span>
//                                         </div>
//                                     </div>
//                                 </div>

//                                 {/* Title */}
//                                 <h3 
//                                     className="text-xl sm:text-2xl font-bold text-white mb-3 tracking-tight" 
//                                     style={{ fontFamily: "DeaconTest, sans-serif" }}
//                                 >
//                                     {service.title}
//                                 </h3>

//                                 {/* Description */}
//                                 <p 
//                                     className="text-sm sm:text-base text-gray-300 leading-relaxed mb-4" 
//                                     style={{ fontFamily: "work-sans, sans-serif" }}
//                                 >
//                                     {service.description}
//                                 </p>

//                                 {/* Progress bar */}
//                                 <div className="mt-auto w-full h-1 bg-[#FF6467]/20 rounded-full overflow-hidden">
//                                     <motion.div
//                                         initial={{ width: 0 }}
//                                         whileInView={{ width: "100%" }}
//                                         transition={{ duration: 1, delay: index * 0.2 + 0.5 }}
//                                         viewport={{ once: true }}
//                                         className={`h-full bg-gradient-to-r ${service.gradient} rounded-full`}
//                                     />
//                                 </div>
//                             </div>

//                             {/* Decorative corners - Smaller */}
//                             <div className="absolute top-3 right-3 w-2 h-2 border-t border-r border-[#FF6467]/40 group-hover:border-[#FF6467] transition-colors duration-500" />
//                             <div className="absolute bottom-3 left-3 w-2 h-2 border-b border-l border-[#FF6467]/40 group-hover:border-[#FF6467] transition-colors duration-500" />
//                         </motion.div>
//                     ))}
//                 </div>

//                 {/* Why Choose ThirdVizion - Compact Version */}
//                 <motion.div
//                     className="mt-12 bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl border border-[#FF6467]/20 p-6 md:p-10 hover:border-[#FF6467]/40 transition-all duration-300"
//                     initial={{ opacity: 0, y: 30 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 0.6, delay: 0.4 }}
//                     viewport={{ once: true, amount: 0.3 }}
//                 >
//                     <h2 
//                         className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 bg-gradient-to-r from-[#FF6467] to-[#FF8A8C] bg-clip-text text-transparent"
//                         style={{ fontFamily: "DeaconTest, sans-serif" }}
//                     >
//                         Why Choose ThirdVizion?
//                     </h2>

//                     <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5 md:gap-6">
//                         <div className="text-center p-5 bg-gradient-to-br from-[#FF6467]/5 to-transparent border border-[#FF6467]/20 rounded-xl hover:border-[#FF6467]/40 transition-all">
//                             <div className="text-3xl mb-3">🚀</div>
//                             <h4 
//                                 className="text-base sm:text-lg font-bold text-white mb-2"
//                                 style={{ fontFamily: "DeaconTest, sans-serif" }}
//                             >
//                                 Faster Implementation
//                             </h4>
//                             <p 
//                                 className="text-gray-300 text-xs sm:text-sm"
//                                 style={{ fontFamily: "work-sans, sans-serif" }}
//                             >
//                                 Launch in weeks with proven methodologies
//                             </p>
//                         </div>

//                         <div className="text-center p-5 bg-gradient-to-br from-[#FF6467]/5 to-transparent border border-[#FF6467]/20 rounded-xl hover:border-[#FF6467]/40 transition-all">
//                             <div className="text-3xl mb-3">💡</div>
//                             <h4 
//                                 className="text-base sm:text-lg font-bold text-white mb-2"
//                                 style={{ fontFamily: "DeaconTest, sans-serif" }}
//                             >
//                                 Expert Guidance
//                             </h4>
//                             <p 
//                                 className="text-gray-300 text-xs sm:text-sm"
//                                 style={{ fontFamily: "work-sans, sans-serif" }}
//                             >
//                                 Industry expertise across multiple sectors
//                             </p>
//                         </div>

//                         <div className="text-center p-5 bg-gradient-to-br from-[#FF6467]/5 to-transparent border border-[#FF6467]/20 rounded-xl hover:border-[#FF6467]/40 transition-all sm:col-span-2 md:col-span-1">
//                             <div className="text-3xl mb-3">🎯</div>
//                             <h4 
//                                 className="text-base sm:text-lg font-bold text-white mb-2"
//                                 style={{ fontFamily: "DeaconTest, sans-serif" }}
//                             >
//                                 Tailored Solutions
//                             </h4>
//                             <p 
//                                 className="text-gray-300 text-xs sm:text-sm"
//                                 style={{ fontFamily: "work-sans, sans-serif" }}
//                             >
//                                 Custom-built for your business needs
//                             </p>
//                         </div>
//                     </div>
//                 </motion.div>
//             </div>
//         </section>
//     );
// }

// export default Willhelp;
import { motion } from "framer-motion";

// ⬇️ IMPORT YOUR 3D PNG ICONS ⬇️
import FinanceIcon from "/src/assets/Crm/finance-chain-3d-icon-png-download-13077676.png";
import QuickResponseIcon from "/src/assets/Crm/quick-response-3d-icon-png-download-10873210 (1).png";
import WeddingPlannerIcon from "/src/assets/Crm/wedding-planner-3d-icon-png-download-10813997.png";

function Willhelp() {
    const services = [
        {
            icon: FinanceIcon,
            metric: "5X",
            title: "CRM Strategy & Consulting",
            description: "We analyze your business needs and select the right CRM platform aligned with your goals.",
            gradient: "from-red-500 to-pink-400",
        },
        {
            icon: QuickResponseIcon,
            metric: "70%",
            title: "CRM Implementation",
            description: "Deploy custom CRM solutions with automated workflows and seamless tool integration.",
            gradient: "from-pink-500 to-rose-400",
        },
        {
            icon: WeddingPlannerIcon,
            metric: "95%",
            title: "Data Migration & Integration",
            description: "Securely transfer legacy data and integrate CRM with your software ecosystem.",
            gradient: "from-rose-500 to-red-400",
        },
        {
            icon: FinanceIcon,
            metric: "3X",
            title: "Training & Support",
            description: "Comprehensive team training with 24/7 support for maximum CRM adoption.",
            gradient: "from-red-400 to-pink-500",
        },
    ];

    const whyChoose = [
        {
            title: "Faster Implementation",
            desc: "Launch in weeks with proven methodologies",
            image: QuickResponseIcon,
        },
        {
            title: "Expert Guidance",
            desc: "Industry expertise across multiple sectors",
            image: WeddingPlannerIcon,
        },
        {
            title: "Tailored Solutions",
            desc: "Custom-built for your business needs",
            image: FinanceIcon,
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
                        Our CRM Excellence
                    </h1>
                    <p 
                        className="text-lg text-gray-300 max-w-2xl mx-auto"
                        style={{ fontFamily: "work-sans, sans-serif" }}
                    >
                        Delivering proven CRM solutions with measurable results that accelerate your business success.
                    </p>
                </motion.div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="relative p-8 rounded-2xl border border-[#FF6467]/20 bg-black/40 backdrop-blur-2xl flex flex-col hover:border-[#FF6467]/40 transition-all duration-500 group"
                        >
                            {/* Icon + Badge */}
                            <div className="flex items-center justify-between mb-6">
                                {/* PNG icon */}
                                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center shadow-lg`}>
                                    <img src={service.icon} alt="icon" className="w-10 h-10 object-contain" />
                                </div>

                                {/* Metric */}
                                <div className="relative px-3 py-1.5 bg-gradient-to-r from-[#FF6467] to-[#FF8A8C] rounded-full border border-white/20 shadow-lg">
                                    <span className="text-xl font-black text-white">{service.metric}</span>
                                </div>
                            </div>

                            {/* Title */}
                            <h3 
                                className="text-2xl font-bold text-white mb-3"
                                style={{ fontFamily: "DeaconTest, sans-serif" }}
                            >
                                {service.title}
                            </h3>

                            {/* Description */}
                            <p 
                                className="text-gray-300 mb-4"
                                style={{ fontFamily: "work-sans, sans-serif" }}
                            >
                                {service.description}
                            </p>

                            {/* Progress bar */}
                            <div className="mt-auto w-full h-1 bg-[#FF6467]/20 rounded-full overflow-hidden">
                                <motion.div
                                    initial={{ width: 0 }}
                                    whileInView={{ width: "100%" }}
                                    transition={{ duration: 1, delay: index * 0.2 }}
                                    viewport={{ once: true }}
                                    className={`h-full bg-gradient-to-r ${service.gradient}`}
                                />
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Why Choose Us */}
                <motion.div
                    className="mt-12 bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl border border-[#FF6467]/20 p-10 hover:border-[#FF6467]/40 transition-all"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <h2 
                        className="text-4xl font-bold text-center mb-10 bg-gradient-to-r from-[#FF6467] to-[#FF8A8C] bg-clip-text text-transparent"
                        style={{ fontFamily: "DeaconTest, sans-serif" }}
                    >
                        Why Choose ThirdVizion?
                    </h2>

                    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
                        {whyChoose.map((item, i) => (
                            <div
                                key={i}
                                className="text-center p-6 bg-gradient-to-br from-[#FF6467]/5 to-transparent border border-[#FF6467]/20 rounded-xl hover:border-[#FF6467]/40 transition-all"
                            >
                                {/* image instead of emoji */}
                                <img 
                                    src={item.image} 
                                    alt="benefit-icon"
                                    className="w-16 h-16 mx-auto mb-4 object-contain drop-shadow-xl"
                                />

                                <h4 
                                    className="text-lg font-bold text-white mb-2"
                                    style={{ fontFamily: "DeaconTest, sans-serif" }}
                                >
                                    {item.title}
                                </h4>

                                <p 
                                    className="text-gray-300 text-sm"
                                    style={{ fontFamily: "work-sans, sans-serif" }}
                                >
                                    {item.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

export default Willhelp;
