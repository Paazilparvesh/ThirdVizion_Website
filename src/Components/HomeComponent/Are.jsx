import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useEffect, useState, useRef } from "react";

function Are() {
  const stats = [
    {
      value: 17,
      suffix: "+",
      title: "Projects launched",
      description: "Helping brands make their mark online.",
    },
    {
      value: 2,
      suffix: "M+",
      title: "Users reached",
      description: "Our designs engage millions globally.",
    },
    {
      value: 98,
      suffix: "%",
      title: "Client satisfaction rate",
      description: "We build long-term partnerships through proven results.",
    },
    {
      value: 45,
      suffix: "+",
      title: "Years of expertise",
      description: "Decades of experience in delivering impactful digital solutions.",
    },
  ];

  return (
    <section className="bg-black text-white min-h-screen flex items-center justify-center px-6 py-20 font-[anta]">
      <div className="max-w-7xl w-full">

        {/* Top Section */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-8 mb-20">
          <Link
            to="/contact"
            className="flex items-center gap-2 text-sm font-medium text-white hover:opacity-70 transition"
          >
            <span className="inline-block h-[2px] w-6 bg-red-500" />
            <span className="font-semibold font-[DeaconTest]">
              Let’s talk
            </span>
          </Link>

          {/* Title */}
          <div className="ml-auto max-w-xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-2 font-[DeaconTest] text-center text-white">
              <span className="block text-center"
              style={{ fontFamily: "DeaconTest, sans-serif" }}>
                Our work speaks through numbers. Here’s what we’ve achieved so far
              </span>
            </h2>
          </div>
        </div>

        {/* ✅ Stats Row scroll reveal */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 border-t border-neutral-800 pt-14"
        >
          {stats.map((item, index) => (
            <CounterBox
              key={index}
              value={item.value}
              suffix={item.suffix}
              title={item.title}
              description={item.description}
              delay={index * 0.15}
            />
          ))}
        </motion.div>

      </div>
    </section>
  );
}

function CounterBox({ value, suffix, title, description, delay }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const [start, setStart] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStart(true);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    if (!start) return;
    let current = 0;
    const end = value;
    const duration = 1200;
    const step = Math.max(Math.floor(duration / end), 20);

    const timer = setInterval(() => {
      current += 1;
      if (current >= end) {
        current = end;
        clearInterval(timer);
      }
      setCount(current);
    }, step);

    return () => clearInterval(timer);
  }, [start, value]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay }}
      className="space-y-6"
    >
      {/* Number */}
      <div className="text-6xl md:text-7xl font-bold font-[DeaconTest] text-white">
        {count}{suffix}
      </div>

      {/* ✅ Animated Yellow Line */}
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: "100%" }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut", delay: delay + 0.2 }}
        className="h-[2px] bg-yellow-400"
      />

      <h3 className="text-lg font-semibold text-white">{title}</h3>

      <p className="text-sm text-neutral-400 leading-relaxed" 
       style={{ fontFamily: "DeaconTest, sans-serif" }}>
        {description}
      </p>
    </motion.div>
  );
}

export default Are;
