import React from "react";
import { motion } from "framer-motion";

// Sample images (replace with actual paths or imports)
import ARImage from "/src/assets/AR.jpg";
import VRImage from "/src/assets/VR.jpg";
import ThreeDImage from "/src/assets/3D.jpg";

const services = [
  {
    title: "AR",
    description:
      "Augmented Reality blends the digital and physical worlds, overlaying interactive 3D elements onto real environments.",
    image: ARImage,
  },
  {
    title: "VR",
    description:
      "Virtual Reality transports users into fully immersive, computer-generated environments, enabling realistic simulations and interactive experiences. From training and education to entertainment and product visualization, VR opens new dimensions for storytelling, learning, and engagement.",
    image: VRImage,
  },
  {
    title: "3D SERVICES",
    description:
      "Our 3D solutions bring ideas to life with precision and detail, creating realistic models, animations, and visualizations. From product prototypes and architectural renders to interactive design elements, we deliver high-quality 3D assets that enhance presentation, storytelling, and user engagement.",
    image: ThreeDImage,
  },
];

export default function EmergingTech() {
  return (
    <section className="bg-black text-white px-6 md:px-16 py-16">
      <h2 className="text-4xl md:text-6xl font-bold text-gray-700 mb-12 text-center">
        EMERGING TECH
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="relative bg-gray-900 rounded-xl overflow-hidden shadow-lg"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-64 object-cover opacity-80"
            />
            <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-6">
              <h3 className="text-3xl md:text-4xl font-bold mb-4">
                {service.title}
              </h3>
              <p className="bg-black/60 text-sm md:text-base rounded-lg p-4">
                {service.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
