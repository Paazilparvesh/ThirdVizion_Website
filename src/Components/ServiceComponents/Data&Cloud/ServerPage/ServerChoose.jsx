import {
  FaShieldAlt,
  FaPiggyBank,
  FaLaptopCode,
  FaHeadset,
} from "react-icons/fa";
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import serverAnimation from "/src/assets/server.json"; // Replace with your Lottie JSON file
import TextReveal from "/src/Hooks/TextReveal.jsx";

export default function ServerChoose() {
  const features = [
    {
      id: 1,
      title: "Enterprise-Grade Infrastructure",
      metric: "99.9%",
      desc: "ThirdVizion deploys high-performance servers with redundancy, backup solutions, and disaster recovery planning.",
      icon: <FaShieldAlt className="text-4xl text-[#05df72]/80" />,
    },
    {
      id: 2,
      title: "Server Migration & Setup",
      metric: "0 Downtime",
      desc: "Our experts handle complete server migration, configuration, and optimization with zero downtime guarantee.",
      icon: <FaPiggyBank className="text-4xl text-[#05df72]/80" />,
    },
    {
      id: 3,
      title: "Proactive Monitoring",
      metric: "24/7",
      desc: "We provide continuous server health monitoring, security patching, and performance optimization services.",
      icon: <FaLaptopCode className="text-4xl text-[#05df72]/80" />,
    },
    {
      id: 4,
      title: "Managed Support Services",
      metric: "3X",
      desc: "ThirdVizion offers 24/7 technical support, incident response, and server administration for your peace of mind.",
      icon: <FaHeadset className="text-4xl text-[#05df72]/80" />,
    },
  ];

  return (
    <section className="relative py-20 px-6 min-h-screen overflow-hidden">
      <TextReveal>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-medium mb-12 text-[#05df72] text-center drop-shadow-lg"
          style={{ fontFamily: "Outfit, sans-serif" }}
        >
          Server Management Excellence
        </motion.h2>
      </TextReveal>

      <div className="max-w-8xl mx-auto flex flex-col-reverse lg:flex-row justify-center items-center gap-12">
        {/* Left - Feature Cards */}
        <div className="w-full lg:w-auto 2xl:w-1/2 flex flex-col gap-6 xl:ml-22">
          {features.map((f, index) => (
            <motion.div
              key={f.id}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="flex items-start gap-4 bg-[#05df72]/5 p-6 rounded-2xl border border-[#05df72]/30 backdrop-blur-md shadow-[0_0_20px_rgba(5,223,114,0.05)] hover:bg-[#05df72]/10 hover:shadow-[0_0_35px_rgba(5,223,114,0.15)] transition group"
            >
              {/* Icon */}
              <div className="flex-shrink-0">{f.icon}</div>
              
              {/* Content */}
              <div className="flex-1">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg font-semibold text-[#05df72]" style={{ fontFamily: "Outfit, sans-serif" }}>
                    {f.title}
                  </h3>
                  
                  {/* Metric Badge */}
                  <div className="relative flex-shrink-0 ml-3">
                    <div className="absolute inset-0 bg-[#05df72] blur-md opacity-40 group-hover:opacity-60 transition-opacity"></div>
                    <div className="relative px-3 py-1 bg-gradient-to-r from-[#05df72] to-[#04c563] rounded-full border border-white/20">
                      <span className="text-base font-black text-white whitespace-nowrap">
                        {f.metric}
                      </span>
                    </div>
                  </div>
                </div>
                
                <p className="text-sm text-white/70" style={{ fontFamily: "work-sans, sans-serif" }}>
                  {f.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Right - Lottie Animation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="lg:w-2/3 xl:w-1/2 flex justify-center"
        >
          <Lottie
            animationData={serverAnimation}
            loop
            autoplay
            className="max-w-[450px] w-full"
          />
        </motion.div>
      </div>
    </section>
  );
}
