import React from "react";
import { motion } from "framer-motion";
import {
  FaUsers,
  FaBriefcase,
  FaRocket,
  FaLightbulb,
  FaHandsHelping,
  FaGlobe,
} from "react-icons/fa";

export default function About() {
  return (
    <div className="bg-black text-white min-h-screen">
      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center text-center py-20 px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="border-4 border-yellow-400 rounded-2xl p-10 shadow-[0_0_30px_rgba(255,255,0,0.5)] max-w-4xl mx-auto"
        >
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-yellow-400 via-blue-500 via-green-500 to-red-500 bg-clip-text text-transparent">
            About ThirdVizion
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-gray-300 mx-auto">
            At <span className="font-semibold text-yellow-400">ThirdVizion</span>, 
            we are more than just a technology company. Our mission is to deliver 
            cutting-edge solutions that not only solve challenges but also create 
            new opportunities across industries.
          </p>
        </motion.div>
      </section>

      {/* Image + Mission Section */}
      <section className="grid md:grid-cols-2 gap-10 px-8 md:px-20 items-center py-16">
        <motion.img
          src="https://images.unsplash.com/photo-1531297484001-80022131f5a1"
          alt="Innovation"
          className="rounded-2xl shadow-lg"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        />
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="border-4 border-yellow-400 rounded-2xl p-8 shadow-[0_0_30px_rgba(255,255,0,0.5)]"
        >
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-yellow-400 via-blue-500 via-green-500 to-red-500 bg-clip-text text-transparent mb-4">
            Our Mission
          </h2>
          <p className="text-gray-300 leading-relaxed">
            With a dedicated team of experts, we bring ideas to life with seamless 
            technology that transforms businesses. From innovative solutions to 
            impactful strategies, our focus is on shaping the future of industries 
            with creativity and precision.
          </p>
        </motion.div>
      </section>

      {/* Core Values Section */}
      <section className="py-16 px-8 md:px-20 text-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="border-4 border-yellow-400 rounded-2xl p-10 shadow-[0_0_30px_rgba(255,255,0,0.5)] max-w-5xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-yellow-400 mb-10">
            Our Core Values
          </h2>
          <div className="grid md:grid-cols-3 gap-10">
            <motion.div whileHover={{ scale: 1.05 }} className="p-6 bg-gray-900 rounded-2xl shadow-lg">
              <FaLightbulb className="text-yellow-400 text-5xl mb-4 mx-auto" />
              <h3 className="text-xl font-semibold mb-2">Innovation</h3>
              <p className="text-gray-400">
                We embrace creativity and constantly push boundaries to create impactful solutions.
              </p>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} className="p-6 bg-gray-900 rounded-2xl shadow-lg">
              <FaHandsHelping className="text-yellow-400 text-5xl mb-4 mx-auto" />
              <h3 className="text-xl font-semibold mb-2">Collaboration</h3>
              <p className="text-gray-400">
                Teamwork is at the heart of everything we do, driving stronger outcomes for our clients.
              </p>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} className="p-6 bg-gray-900 rounded-2xl shadow-lg">
              <FaGlobe className="text-yellow-400 text-5xl mb-4 mx-auto" />
              <h3 className="text-xl font-semibold mb-2">Impact</h3>
              <p className="text-gray-400">
                Our solutions are designed to transform industries and create global opportunities.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-8 md:px-20 text-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="border-4 border-yellow-400 rounded-2xl p-10 shadow-[0_0_30px_rgba(255,255,0,0.5)] max-w-5xl mx-auto"
        >
          <div className="grid md:grid-cols-3 gap-10">
            {/* Stat 1 */}
            <motion.div whileHover={{ scale: 1.05 }} className="p-6 bg-gray-900/60 rounded-2xl shadow-lg">
              <FaUsers className="text-yellow-400 text-5xl mb-4 mx-auto" />
              <h3 className="text-5xl font-bold text-yellow-400">12</h3>
              <p className="text-gray-300 mt-2">Clients Served</p>
            </motion.div>

            {/* Stat 2 */}
            <motion.div whileHover={{ scale: 1.05 }} className="p-6 bg-gray-900/60 rounded-2xl shadow-lg">
              <FaBriefcase className="text-yellow-400 text-5xl mb-4 mx-auto" />
              <h3 className="text-5xl font-bold text-yellow-400">18</h3>
              <p className="text-gray-300 mt-2">Employees Working</p>
            </motion.div>

            {/* Stat 3 */}
            <motion.div whileHover={{ scale: 1.05 }} className="p-6 bg-gray-900/60 rounded-2xl shadow-lg">
              <FaRocket className="text-yellow-400 text-5xl mb-4 mx-auto" />
              <h3 className="text-5xl font-bold text-yellow-400">23</h3>
              <p className="text-gray-300 mt-2">Projects Launched</p>
            </motion.div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}