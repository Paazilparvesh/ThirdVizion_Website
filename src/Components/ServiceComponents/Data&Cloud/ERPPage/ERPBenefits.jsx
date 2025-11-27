import { motion } from "framer-motion";
import { Package, Code, Database, HeadphonesIcon } from "lucide-react";

export default function ERPBenefits() {
  const benefits = [
    {
      icon: Package,
      metric: "100%",
      title: "Complete ERP Implementation",
      text: "ThirdVizion deploys end-to-end ERP systems integrating finance, HR, inventory, and operations seamlessly.",
      gradient: "from-purple-500 to-indigo-400",
    },
    {
      icon: Code,
      metric: "5X",
      title: "Custom Module Development",
      text: "We build tailored ERP modules that fit your unique business processes and industry requirements.",
      gradient: "from-indigo-500 to-blue-400",
    },
    {
      icon: Database,
      metric: "95%",
      title: "Migration & Integration",
      text: "Our experts migrate legacy data securely and integrate ERP with your existing software ecosystem.",
      gradient: "from-blue-500 to-cyan-400",
    },
    {
      icon: HeadphonesIcon,
      metric: "24/7",
      title: "Training & Support",
      text: "We provide comprehensive user training and round-the-clock support to ensure maximum ERP adoption and efficiency.",
      gradient: "from-cyan-500 to-purple-400",
    },
  ];

  return (
    <section className="relative isolate w-full py-20 overflow-hidden bg-transparent">
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ amount: 0.3 }}
          className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold leading-[1.05] tracking-tight text-center bg-gradient-to-r from-white via-[#dfe1ff] to-[#a9afff] bg-clip-text text-transparent mb-12"
          style={{ fontFamily: "DeaconTest, sans-serif" }}
        >
          ERP Solutions Delivered
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          viewport={{ amount: 0.8 }}
          className="mt-5 max-w-3xl mx-auto text-[#c7cbff] text-xl leading-relaxed text-center mb-16"
          style={{ fontFamily: "anta, sans-serif" }}
        >
          Complete ERP implementation services with measurable outcomes and continuous support for business excellence.
        </motion.p>

        {/* Benefits Grid with Connected Lines */}
        <div className="relative">
          {/* Connecting Lines - Hidden on mobile, visible on desktop */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#7C86FF50] to-transparent transform -translate-y-1/2 z-0" />
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 relative z-10">
            {benefits.map((b, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="relative p-8 rounded-2xl bg-[#7C86FF10] border border-[#7C86FF30] shadow-[0_0_20px_rgba(124,134,255,0.15)] backdrop-blur-md hover:shadow-[0_0_40px_rgba(124,134,255,0.35)] hover:border-[#7C86FF40] hover:scale-105 transition-all duration-300 min-h-[340px] flex flex-col group"
              >
                {/* Icon with Gradient */}
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${b.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-500 shadow-lg`}>
                  <b.icon className="w-8 h-8 text-white" />
                </div>

                {/* Metric Badge */}
                <div className="mb-4">
                  <div className="inline-block px-4 py-2 bg-gradient-to-r from-[#7C86FF] to-[#a9afff] rounded-full border-2 border-white/20 shadow-lg">
                    <span className="text-2xl font-black text-white">
                      {b.metric}
                    </span>
                  </div>
                </div>

                {/* Title */}
                <h3 
                  className="text-xl font-semibold text-white mb-3" 
                  style={{ fontFamily: "DeaconTest, sans-serif" }}
                >
                  {b.title}
                </h3>

                {/* Description */}
                <p 
                  className="text-[#c7cbff] text-sm leading-relaxed flex-1" 
                  style={{ fontFamily: "anta, sans-serif" }}
                >
                  {b.text}
                </p>

                {/* Progress Bar */}
                <div className="mt-4 w-full h-1 bg-[#7C86FF]/20 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    transition={{ duration: 1, delay: i * 0.2 + 0.5 }}
                    viewport={{ once: true }}
                    className={`h-full bg-gradient-to-r ${b.gradient} rounded-full`}
                  />
                </div>

                {/* Step Number Indicator */}
                <div className="absolute top-4 right-4 w-8 h-8 bg-[#7C86FF]/20 rounded-full flex items-center justify-center border border-[#7C86FF]/40">
                  <span className="text-[#a9afff] font-bold text-sm">{i + 1}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Optional CTA */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.7 }}
          viewport={{ amount: 1 }}
          className="mt-16 text-center"
        >
          {/* CTA content here if needed */}
        </motion.div>
      </div>
    </section>
  );
}
