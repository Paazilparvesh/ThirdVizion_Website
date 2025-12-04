import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef } from "react";

// ⬇️ IMPORT YOUR 3D PNG ICONS ⬇️
import FinanceIcon from "/src/assets/Crm/finance-chain-3d-icon-png-download-13077676.png";
import QuickResponseIcon from "/src/assets/Crm/quick-response-3d-icon-png-download-10873210 (1).png";
import WeddingPlannerIcon from "/src/assets/Crm/wedding-planner-3d-icon-png-download-10813997.png";

// Animated Counter Component
function AnimatedCounter({ value, suffix = "" }) {
    const count = useMotionValue(0);
    const rounded = useTransform(count, (latest) => Math.round(latest));
    const nodeRef = useRef(null);

    useEffect(() => {
        const controls = animate(count, value, {
            duration: 2,
            ease: "easeOut",
        });

        return controls.stop;
    }, [value]);

    useEffect(() => {
        const unsubscribe = rounded.on("change", (latest) => {
            if (nodeRef.current) {
                nodeRef.current.textContent = latest + suffix;
            }
        });

        return () => unsubscribe();
    }, [rounded, suffix]);

    return <span ref={nodeRef} />;
}

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
            metric: "24/5",
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

    // Extract numeric value from metric string
    const getNumericValue = (metric) => {
        const match = metric.match(/\d+/);
        return match ? parseInt(match[0]) : 0;
    };

    // Get suffix (X, %, /5)
    const getSuffix = (metric) => {
        return metric.replace(/\d+/g, "");
    };

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
                        style={{ fontFamily: "anta, sans-serif" }}
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
                            {/* Number Badge - Top Left Corner (NO STROKE) */}
                            <div className="absolute -top-4 -left-4 z-20">
                                <div className="relative">
                                    {/* Glow effect */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-[#FF6467] to-[#FF8A8C] rounded-full blur-lg opacity-70"></div>

                                    {/* Number Badge WITHOUT Stroke */}
                                    <div className="relative w-16 h-16 rounded-full bg-gradient-to-br from-[#FF6467] to-[#FF8A8C] flex items-center justify-center shadow-2xl border-4 border-black/90">
                                        <span
                                            className="text-3xl font-black text-white"
                                            style={{
                                                fontFamily: "DeaconTest, sans-serif"
                                            }}
                                        >
                                            {index + 1}
                                        </span>
                                    </div>
                                </div>
                            </div>

                            {/* Icon + Metric */}
                            <div className="flex items-center justify-between mb-6">
                                {/* PNG icon */}
                                <div
                                    className={`w-16 h-16 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center shadow-lg`}
                                >
                                    <img
                                        src={service.icon}
                                        alt="icon"
                                        className="w-10 h-10 object-contain"
                                    />
                                </div>

                                {/* Animated Metric with Stroke */}
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.5 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                                    viewport={{ once: true }}
                                    className="relative px-4 py-2 bg-gradient-to-r from-[#FF6467] to-[#FF8A8C] rounded-full border border-white/20 shadow-lg"
                                >
                                    <span
                                        className="text-2xl font-black text-white relative"
                                        style={{
                                            fontFamily: "DeaconTest, sans-serif",
                                            WebkitTextStroke: "1.5px rgba(0, 0, 0, 0.3)",
                                            paintOrder: "stroke fill",
                                        }}
                                    >
                                        <AnimatedCounter
                                            value={getNumericValue(service.metric)}
                                            suffix={getSuffix(service.metric)}
                                        />
                                    </span>
                                </motion.div>
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
                                style={{ fontFamily: "anta, sans-serif" }}
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
                    className="mt-12 rounded-2xl shadow-2xl border border-[#FF6467]/20 p-10 hover:border-[#FF6467]/40 transition-all"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <h2
                        className="text-4xl text-center mb-10 bg-gradient-to-r from-[#FF6467] to-[#FF8A8C] bg-clip-text text-transparent"
                        style={{ fontFamily: "DeaconTest, sans-serif", fontWeight: 600 }}
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
                                    style={{ fontFamily: "anta, sans-serif" }}
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
