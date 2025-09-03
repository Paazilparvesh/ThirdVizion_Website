import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import service1 from "/src/Assets/service1.jpg";
import service2 from "/src/Assets/service2.jpg";
import service3 from "/src/Assets/service3.jpg";

const services = [
  { id: "01", title: "AR", img: service1 },
  { id: "02", title: "VR", img: service2 },
  { id: "03", title: "3D Services", img: service3 },
];

export default function Services() {
  const [active, setActive] = useState("01");
  const activeService = services.find((s) => s.id === active);

  return (
    <section className="bg-black text-white px-6 md:px-20 py-16 relative">
      {/* Heading */}
      <motion.h2
        className="text-purple-400 text-center text-4xl md:text-6xl font-bold font-serif mb-12"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        SERVICES
      </motion.h2>

      <div className="flex flex-col md:flex-row gap-10">
        {/* Left side: image */}
        <div className="flex-1 flex justify-center items-center">
          <AnimatePresence mode="wait">
            <motion.img
              key={activeService.id}
              src={activeService.img}
              alt={activeService.title}
              className="w-80 h-64 md:w-[400px] md:h-[300px] lg:w-[480px] lg:h-[360px] xl:w-[560px] xl:h-[420px] 
                         object-cover rounded-xl shadow-lg"
              initial={{ opacity: 0, scale: 0.9, x: 80 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              exit={{ opacity: 0, scale: 0.95, x: -40 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            />
          </AnimatePresence>
        </div>

        {/* Right side: list */}
        <motion.div
          className="flex-1 flex flex-col gap-6"
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {services.map((service) => (
            <div
              key={service.id}
              onMouseEnter={() => setActive(service.id)}
              className={`flex items-center justify-between cursor-pointer border-b border-gray-800 pb-2 transition 
                ${active === service.id ? "text-white" : "text-gray-500"}`}
            >
              <span className=" text-xl md:text-2xl xl:text-4xl">
                {service.title}
              </span>
              <motion.span
                className={`text-[60px] md:text-[80px] font-bold ${
                  active === service.id ? "text-yellow-400" : "text-gray-800"
                }`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                {service.id}
              </motion.span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
