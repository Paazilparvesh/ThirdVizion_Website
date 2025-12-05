import { motion } from "framer-motion";
import img from "/src/assets/AboutImages/about1.png";
import img2 from "/src/assets/AboutImages/about2.png";

export default function About() {
  return (
    <div className="w-full min-h-screen bg-black pt-30 text-yellow-400 py-16 px-6 lg:px-20 xl:px-28 overflow-hidden font-worksans">
      {/* Top Title Section */}
      <div className="text-center mb-4">
        <h2
          className="text-4xl lg:text-6xl tracking-wide pb-15"
          style={{ fontFamily: "DeaconTest, sans-serif", fontWeight: 600 }}
        >
          WHO ARE WE
        </h2>
      </div>

      {/* First Row - Image First on Mobile */}
      <div
        className="flex flex-col md:flex-row items-center justify-between gap-5 mb-10"
        style={{ fontFamily: "anta, sans-serif" }}
      >
        {/* Floating Image - Shows First on Mobile */}
        <motion.div
          className="flex-1 flex justify-center md:justify-end order-1 md:order-2 scale-85 xl:scale-100"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="relative w-full max-w-sm"
            animate={{
              y: [0, -20, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <img
              src={img}
              alt="About Visual 1"
              className="rounded-xl shadow-2xl w-full object-cover"
            />
          </motion.div>
        </motion.div>

        {/* Content - Shows Second on Mobile */}
        <motion.div
          className="flex-1 text-center md:text-left max-w-2xl order-2 md:order-1"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-md md:text-xl leading-relaxed text-gray-300 font-medium text-justify md:text-left">
            At ThirdVizion, we're more than just a technology company—we're innovators
            shaping the future. Our mission is to deliver cutting-edge solutions that
            not only solve challenges but also create new opportunities across
            industries. With a dedicated team of experts, we bring ideas to life with
            seamless technology that transforms businesses.
          </p>
        </motion.div>
      </div>

      {/* Second Row - Image First on Mobile */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-5">
        {/* Floating Image - Shows First on Mobile */}
        <motion.div
          className="flex-1 flex justify-center md:justify-start order-1 scale-85 xl:scale-100"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="relative w-full max-w-sm"
            animate={{
              y: [0, -15, 0],
            }}
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
              className="rounded-xl shadow-2xl w-full object-cover"
            />
          </motion.div>
        </motion.div>

        {/* Content - Shows Second on Mobile */}
        <motion.div
          className="flex-1 text-center md:text-right max-w-2xl order-2"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          style={{ fontFamily: "anta, sans-serif" }}
        >
          <p className="text-md md:text-xl leading-relaxed text-gray-300 font-medium text-justify md:text-right">
            We pride ourselves on being a dynamic team of forward-thinkers, dedicated
            to addressing complex challenges with innovative, tailor-made solutions.
            Our mission is not just to keep up with technological advancements but to
            drive them, creating opportunities for businesses to thrive in a
            fast-paced, digital-first world.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
