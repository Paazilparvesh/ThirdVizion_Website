import React, { useRef } from 'react';
import { RefreshCcw, Layout, Code, Zap, Rocket, LifeBuoy } from 'lucide-react';
import { motion } from 'framer-motion';

// Data structure for the process steps
const processSteps = [
  {
    id: "01",
    title: "Ideation and Planning",
    description: "We define your app's purpose, target audience, and core features through comprehensive market research. We analyze competitors and identify gaps in industries like e-commerce, healthcare, fintech, and logistics to create a solid foundation.",
    icon: RefreshCcw,
  },
  {
    id: "02",
    title: "UI/UX Design and Wireframing",
    description: "We create intuitive visual blueprints outlining your app's structure, layout, and navigation flow. Our designs focus on user-friendly interfaces that enhance engagement across retail, education, travel, and hospitality sectors.",
    icon: Layout,
  },
  {
    id: "03",
    title: "Native and Cross-Platform Development",
    description: "Using cutting-edge technologies like Flutter, React Native, Swift, and Kotlin, we build high-performance mobile apps for iOS and Android. We integrate APIs, cloud services (AWS, Azure, Firebase), and backend systems tailored to your industry.",
    icon: Code,
  },
  {
    id: "04",
    title: "Quality Assurance and Testing",
    description: "We conduct rigorous testing for functionality, performance, security, and UI/UX across devices. Our QA process ensures your app meets industry standards for healthcare compliance, banking security, and e-commerce reliability.",
    icon: Zap,
  },
  {
    id: "05",
    title: "Deployment and Launch",
    description: "We handle the complete app store submission process for Google Play and Apple App Store. Our marketing team executes strategic campaigns to generate user interest in sectors like real estate, entertainment, and on-demand services.",
    icon: Rocket,
  },
  {
    id: "06",
    title: "Maintenance and Optimization",
    description: "We provide 24/7 support with regular updates, bug fixes, and feature enhancements. We monitor app performance, analyze user data, and implement improvements to keep your app competitive in the $800B+ global mobile app market.",
    icon: LifeBuoy,
  },
];

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.6,
      staggerChildren: 0.2
    }
  }
};

const headerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  },
  hover: {
    y: -8,
    scale: 1.02,
    boxShadow: "0 0 30px rgba(255, 137, 4, 0.4)",
    transition: { duration: 0.3 }
  }
};

// Component for a single process card
const ProcessCard = ({ step }) => {
  const IconComponent = step.icon;

  return (
    <motion.div
      variants={cardVariants}
      whileHover="hover"
      className="relative p-8 rounded-2xl border border-[#ff8904]/20 bg-black/40 backdrop-blur-2xl min-h-[320px] flex flex-col transition-all duration-500 hover:border-[#ff8904]/40 hover:shadow-[0_0_25px_rgba(255,137,4,0.3)] group"
      style={{
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)'
      }}
    >
      {/* Glass morphism overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#ff8904]/10 via-transparent to-[#ff7300]/5 opacity-50 group-hover:opacity-70 transition-opacity duration-500 rounded-2xl" />
      
      <div className="relative z-10 flex flex-col h-full">
        {/* Header with number and icon */}
        <div className="flex items-center mb-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-[#ff8904]/20 flex items-center justify-center border border-[#ff8904]/30 group-hover:bg-[#ff8904]/30 group-hover:border-[#ff8904]/50 transition-all duration-500">
              <span className="text-xl font-bold text-[#ff8904]" style={{ fontFamily: "Outfit, sans-serif" }}>
                {step.id}
              </span>
            </div>
            <div className="w-12 h-0.5 bg-[#ff8904]/30 group-hover:bg-[#ff8904]/60 transition-colors duration-500" />
            <IconComponent className="w-8 h-8 text-[#ff8904] group-hover:scale-110 transition-transform duration-500" />
          </div>
        </div>
        
        {/* Title */}
        <h3 className="text-2xl font-medium text-[#ff8904] mb-4 tracking-tight group-hover:drop-shadow-[0_0_8px_rgba(255,137,4,0.3)] transition-all duration-500" style={{ fontFamily: "Outfit, sans-serif" }}>
          {step.title}
        </h3>
        
        {/* Description */}
        <p className="text-gray-300 leading-relaxed text-base flex-1 group-hover:text-gray-200 transition-colors duration-500" style={{ fontFamily: "Work Sans, sans-serif" }}>
          {step.description}
        </p>
      </div>

      {/* Decorative corners */}
      <div className="absolute top-4 right-4 w-2 h-2 border-t border-r border-[#ff8904]/40 group-hover:border-[#ff8904] transition-colors duration-500" />
      <div className="absolute bottom-4 left-4 w-2 h-2 border-b border-l border-[#ff8904]/40 group-hover:border-[#ff8904] transition-colors duration-500" />
    </motion.div>
  );
};

// Main component
const App = () => {
  return (
    <div className="min-h-screen bg-black text-white font-sans overflow-x-hidden">
      {/* Process Section */}
      <main className="relative bg-black py-20 px-4 sm:px-6 md:px-10 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-center text-[#ff8904] mb-6 tracking-tight"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            style={{ fontFamily: "Outfit, sans-serif" }}
          >
            Our <span className="text-white">Mobile App Development</span> Process
          </motion.h2>

          <motion.p
            className="text-gray-400 text-lg md:text-xl text-center max-w-4xl mx-auto mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            style={{ fontFamily: "Work Sans, sans-serif" }}
          >
            Serving top industries including <span className="text-[#ff8904] font-semibold">E-commerce, Healthcare, Fintech, Education, Real Estate, Travel & Hospitality, Logistics, and Entertainment</span> with cutting-edge mobile solutions that drive growth in the global $800B+ app market.
          </motion.p>

          {/* Process Grid */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            {processSteps.map((step) => (
              <ProcessCard key={step.id} step={step} />
            ))}
          </motion.div>
        </div>
      </main>
    </div>
  );
};

export default App;
