import { motion } from "framer-motion";
import img from "/src/assets/AboutImages/about1.png";
import img2 from "/src/assets/AboutImages/about2.png";

export default function About() {
  return (
    <div className="w-full min-h-screen bg-black pt-20 lg:pt-40 text-white py-16 px-6 lg:px-20 overflow-hidden">
      {/* Top Title Section */}
      <div className="text-center mb-16 lg:mb-20">
        <h2
          className="text-4xl lg:text-6xl font-bold tracking-wide"
          style={{ fontFamily: "Outfit, sans-serif" }}>
          WHO ARE WE
        </h2>
      </div>

      {/* Mobile Layout */}
      <div className="lg:hidden">
        {/* First Section */}
        <div className="mb-20">
          <motion.div
            className="mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <img
              src={img}
              alt="About Visual 1"
              className="w-[85%] mx-auto h-auto rounded-lg"
            />
          </motion.div>

          <motion.div
            className="text-left"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-gray-300 leading-relaxed text-base text-justify">
              At ThirdVizion, we're more than just a technology company—we're innovators
              shaping the future. Our mission is to deliver cutting-edge solutions that
              transform businesses and create new opportunities.
            </p>
          </motion.div>
        </div>

        {/* Second Section */}
        <div className="mb-20">
          <motion.div
            className="mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <img
              src={img2}
              alt="About Visual 2"
              className="w-[85%] mx-auto h-auto rounded-lg"
            />
          </motion.div>

          <motion.div
            className="text-left"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-gray-300 leading-relaxed text-base text-justify">
              We pride ourselves on being forward-thinkers dedicated to addressing
              complex challenges with innovative, tailor-made solutions that help
              businesses thrive in a digital-first world and beyond.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden lg:block">
        {/* First Row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 mb-24"
          style={{ fontFamily: "worksans, sans-serif" }}>
          
          {/* Content */}
          <motion.div
            className="flex-1 text-center md:text-left max-w-2xl"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-lg md:text-xl leading-relaxed text-gray-300 font-medium">
              At ThirdVizion, we're more than just a technology company—we're innovators
              shaping the future. Our mission is to deliver cutting-edge solutions that
              not only solve challenges but also create new opportunities across
              industries. With a dedicated team of experts, we bring ideas to life with
              seamless technology that transforms businesses.
            </p>
          </motion.div>

          {/* Floating Image */}
          <motion.div
            className="flex-1 flex justify-center md:justify-end"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="relative w-full max-w-xl"
              animate={{ y: [0, -20, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <img
                src={img}
                alt="About Visual 1"
                className="rounded-xl shadow-2xl w-[75%] mx-auto object-cover"
              />
            </motion.div>
          </motion.div>
        </div>

        {/* Second Row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">

          {/* Floating Image */}
          <motion.div
            className="flex-1 flex justify-center md:justify-start"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="relative w-full max-w-xl"
              animate={{ y: [0, -15, 0] }}
              transition={{
                duration: 3.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5,
              }}
            >
              <img
                src={img2}
                alt="About Visual 2"
                className="rounded-xl shadow-2xl w-[75%] mx-auto object-cover"
              />
            </motion.div>
          </motion.div>

          {/* Content */}
          <motion.div
            className="flex-1 text-center md:text-right max-w-2xl"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            style={{ fontFamily: "worksans, sans-serif" }}
          >
            <p className="text-lg md:text-xl leading-relaxed text-gray-300 font-medium">
              We pride ourselves on being a dynamic team of forward-thinkers, dedicated
              to addressing complex challenges with innovative, tailor-made solutions.
              Our mission is not just to keep up with technological advancements but to
              drive them, creating opportunities for businesses to thrive in a
              fast-paced, digital-first world.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
