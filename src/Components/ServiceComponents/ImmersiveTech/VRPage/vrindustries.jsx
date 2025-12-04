import { motion } from "framer-motion";

// Import WebP images
import heartImg from "/src/assets/vrassset/health.png";
import educationImg from "/src/assets/vrassset/education.png";
import carImg from "/src/assets/vrassset/truck.png";
import realestateImg from "/src/assets/vrassset/realestate.webp";
import manufacturingImg from "/src/assets/vrassset/manufature.png";
import retailImg from "/src/assets/vrassset/retail.png";

function VRIndustries() {
    const industries = [
        {
            image: heartImg,
            metric: "85%",
            title: "Healthcare",
            description: "Surgical training, pain management, mental health therapy, and medical simulations in risk-free environments for doctors and students.",
            gradient: "from-blue-500 to-cyan-400",
        },
        {
            image: educationImg,
            metric: "3X",
            title: "Education",
            description: "Virtual classrooms, immersive training, and interactive lessons improve learning in schools, universities, and corporate settings.",
            gradient: "from-green-500 to-emerald-400",
        },
        {
            image: carImg,
            metric: "60%",
            title: "Automotive",
            description: "Car manufacturers use VR for design, crash simulations, virtual test drives, and autonomous vehicle development before production.",
            gradient: "from-red-500 to-orange-400",
        },
        {
            image: realestateImg,
            metric: "5X",
            title: "Real Estate",
            description: "VR-powered tours let buyers explore properties remotely while architects visualize and refine designs before construction begins.",
            gradient: "from-purple-500 to-pink-400",
        },
        {
            image: manufacturingImg,
            metric: "70%",
            title: "Manufacturing",
            description: "Prototype testing, assembly line optimization, and worker training in complex or hazardous environments with zero real-world risk.",
            gradient: "from-orange-500 to-yellow-400",
        },
        {
            image: retailImg,
            metric: "4X",
            title: "Retail",
            description: "Brands leverage VR for virtual shopping experiences, interactive product trials, and immersive advertising campaigns that engage customers.",
            gradient: "from-pink-500 to-rose-400",
        },
    ];

    return (
        <section className="w-full min-h-screen flex items-center justify-center px-4 sm:px-6 md:px-10 lg:px-16 py-20 bg-black relative overflow-hidden">
            <div className="max-w-7xl mx-auto w-full relative z-10">
                {/* Header Section */}
                <motion.div
                    className="text-center mb-20"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true, amount: 0.3 }}
                >
                    <h2 
                        className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-font-semibold tracking-tight mb-6 leading-tight bg-gradient-to-r from-violet-400 to-indigo-500 bg-clip-text text-transparent" 
                        style={{ fontFamily: "DeaconTest, sans-serif" }}
                    >
                        VR Industries
                    </h2>
                    <p 
                        className="text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed" 
                        style={{ fontFamily: "anta, sans-serif" }}
                    >
                        Virtual Reality transforms how we work, learn, and innovate across multiple industries with measurable results.
                    </p>
                </motion.div>

                {/* Industries Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {industries.map((industry, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            viewport={{ once: true, amount: 0.3 }}
                            className="relative p-8 rounded-2xl border border-violet-500/20 bg-black/40 backdrop-blur-2xl min-h-[380px] flex flex-col transition-all duration-500 hover:border-violet-500/40 hover:shadow-[0_0_25px_rgba(139,92,246,0.3)] group"
                            style={{
                                backdropFilter: 'blur(20px)',
                                WebkitBackdropFilter: 'blur(20px)'
                            }}
                        >
                            {/* Glass morphism overlay */}
                            <div className="absolute inset-0 bg-gradient-to-br from-violet-500/10 via-transparent to-indigo-500/5 opacity-50 group-hover:opacity-70 transition-opacity duration-500 rounded-2xl" />
                            
                            <div className="relative z-10 flex flex-col h-full">
                                {/* Image Icon - No Background */}
                                <div className="w-16 h-16 rounded-2xl bg-transparent flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 shadow-lg overflow-hidden">
                                    <img 
                                        src={industry.image} 
                                        alt={industry.title}
                                        className="w-full h-full object-cover"
                                    />
                                </div>

                                {/* Metric */}
                                <div className="text-2xl md:text-3xl lg:text-4xl font-black bg-gradient-to-r from-violet-400 to-indigo-500 bg-clip-text text-transparent mb-4 group-hover:drop-shadow-[0_0_10px_rgba(139,92,246,0.3)] transition-all duration-500"
                                 style={{ fontFamily: "DeaconTest, sans-serif" }}>
                                    {industry.metric}
                                </div>

                                {/* Title */}
                                <h3 
                                    className="text-2xl font-bold text-white mb-4 tracking-tight" 
                                    style={{ fontFamily: "DeaconTest, sans-serif" }}
                                >
                                    {industry.title}
                                </h3>

                                {/* Description */}
                                <p 
                                    className="text-base text-gray-300 leading-relaxed flex-1" 
                                    style={{ fontFamily: "anta, sans-serif" }}
                                >
                                    {industry.description}
                                </p>

                                {/* Progress bar */}
                                <div className="mt-6 w-full h-1 bg-violet-500/20 rounded-full overflow-hidden">
                                    <motion.div
                                        initial={{ width: 0 }}
                                        whileInView={{ width: "100%" }}
                                        transition={{ duration: 1, delay: index * 0.2 + 0.5 }}
                                        viewport={{ once: true }}
                                        className={`h-full bg-gradient-to-r ${industry.gradient} rounded-full`}
                                    />
                                </div>
                            </div>

                            {/* Decorative corners */}
                            <div className="absolute top-4 right-4 w-2 h-2 border-t border-r border-violet-500/40 group-hover:border-violet-500 transition-colors duration-500" />
                            <div className="absolute bottom-4 left-4 w-2 h-2 border-b border-l border-violet-500/40 group-hover:border-violet-500 transition-colors duration-500" />
                        </motion.div>
                    ))}
                </div>

                {/* Future Impact Section */}
                <motion.div
                    className="mt-16 bg-transparent border border-violet-500/20 rounded-2xl shadow-xl p-8 text-white"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    viewport={{ once: true, amount: 0.3 }}
                >
                    <h2 
                        className="text-3xl font-bold mb-4 bg-gradient-to-r from-violet-400 to-indigo-500 bg-clip-text text-transparent" 
                        style={{ fontFamily: "DeaconTest, sans-serif" }}
                    >
                        The Future of VR
                    </h2>
                    <p 
                        className="text-lg leading-relaxed text-gray-300" 
                        style={{ fontFamily: "anta, sans-serif" }}
                    >
                        As VR technology continues to evolve, it's revolutionizing industries by reducing costs, 
                        improving safety, enhancing training programs, and creating unprecedented opportunities 
                        for innovation. From space exploration to mental health therapy, VR is shaping the future 
                        of how we interact with digital environments.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}

export default VRIndustries;
