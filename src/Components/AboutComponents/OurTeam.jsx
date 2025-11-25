import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// ---------- IMPORT ALL 18 IMAGES ----------
import img1 from "/src/assets/AboutImages/Artboard 1 copy.jpg";
import img2 from "/src/assets/AboutImages/dhilip.jpg";
import img3 from "/src/assets/AboutImages/JANA.jpg";
import img4 from "/src/assets/AboutImages/JERO.jpg";
import img5 from "/src/assets/AboutImages/KARTHICK.jpg";
import img6 from "/src/assets/AboutImages/PAZIL.jpg";

import img7 from "/src/assets/AboutImages/RAGUL.jpg";
import img8 from "/src/assets/AboutImages/RAJESH.jpg";
import img9 from "/src/assets/AboutImages/RAKESH.jpg";
import img10 from "/src/assets/AboutImages/REX.jpg";
import img11 from "/src/assets/AboutImages/S2.jpg";
import img12 from "/src/assets/AboutImages/saravana priya.jpg";

import img13 from "/src/assets/AboutImages/SATHYA.jpg";
import img14 from "/src/assets/AboutImages/SHAMMI.jpg";
import img15 from "/src/assets/AboutImages/THARUN.jpg";
import img16 from "/src/assets/AboutImages/vishnu priya.jpg";
import img17 from "/src/assets/AboutImages/yeshwant.jpg";

// ---------- TEAM DATA (18 MEMBERS) ----------
const teamData = [
  { img: img1, name: "Member 1", role: "Role 1" },
  { img: img2, name: "Member 2", role: "Role 2" },
  { img: img3, name: "Member 3", role: "Role 3" },
  { img: img4, name: "Member 4", role: "Role 4" },
  { img: img5, name: "Member 5", role: "Role 5" },
  { img: img6, name: "Member 6", role: "Role 6" },

  { img: img7, name: "Member 7", role: "Role 7" },
  { img: img8, name: "Member 8", role: "Role 8" },
  { img: img9, name: "Member 9", role: "Role 9" },
  { img: img10, name: "Member 10", role: "Role 10" },
  { img: img11, name: "Member 11", role: "Role 11" },
  { img: img12, name: "Member 12", role: "Role 12" },

  { img: img13, name: "Member 13", role: "Role 13" },
  { img: img14, name: "Member 14", role: "Role 14" },
  { img: img15, name: "Member 15", role: "Role 15" },
  { img: img16, name: "Member 16", role: "Role 16" },
  { img: img17, name: "Member 17", role: "Role 17" },
];

export default function OurTeam() {
  const [active, setActive] = useState(null);

  return (
    <section className="bg-black text-white relative min-h-screen py-20 flex flex-col items-center justify-center">
      {/* Top Section */}
      <div className="text-center mb-16 px-6 max-w-3xl">
        <h2
          className="text-yellow-400 text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6"
          style={{ fontFamily: "Outfit, sans-serif" }}
        >
          OUR TEAM
        </h2>
        <p className="text-white text-base text-xs md:text-lg leading-relaxed">
          Meet the passionate innovators who power ThirdVizion with creativity
          and expertise. Our team blends technology and vision to deliver
          solutions that inspire and transform.
        </p>

        <div
          className="h-1 w-2/3 mx-auto mt-6"
          style={{
            background:
              "linear-gradient(to right, rgba(255,255,255,0) 0%, white 20%, white 80%, rgba(255,255,255,0) 100%)",
          }}
        />
      </div>

      {/* 18 CARDS — 3 ROWS (6 per row) */}
      {/* 2 ROWS: Row1 = 8 members, Row2 = 9 members */}
<div className="grid grid-cols-1 md:grid-cols-1 gap-8 w-full max-w-7xl px-6">
  {[0, 1].map((row) => (
    <div
      key={row}
      className="flex flex-row w-full h-[350px] lg:h-[420px] gap-4 overflow-hidden"
    >
      {teamData
        .slice(row === 0 ? 0 : 8, row === 0 ? 8 : 17)
        .map((member, index) => {
          const actualIndex = row === 0 ? index : 8 + index;
          const isActive = active === actualIndex;

          return (
            <motion.div
              key={actualIndex}
              onMouseEnter={() => setActive(actualIndex)}
              onMouseLeave={() => setActive(null)}
              className={`relative rounded-2xl border border-white/30 overflow-hidden cursor-pointer transition-all duration-700 ease-in-out flex flex-col justify-end ${
                isActive ? "flex-[3]" : "flex-[1]"
              }`}
              style={{
                backgroundImage: `url(${member.img})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div
                className={`absolute inset-0 transition-all duration-700 ${
                  isActive ? "bg-black/70" : "bg-black/40"
                }`}
              />

              <div className="relative z-10 p-4 text-center">
                <AnimatePresence>
                  {isActive && (
                    <>
                      <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 20 }}
                        transition={{ duration: 0.4 }}
                        className="text-lg md:text-xl font-bold text-yellow-400 mb-1"
                      >
                        {member.name}
                      </motion.p>

                      <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 20 }}
                        transition={{ duration: 0.4, delay: 0.1 }}
                        className="text-gray-200 text-sm md:text-base leading-relaxed"
                      >
                        {member.role}
                      </motion.p>
                    </>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          );
        })}
    </div>
  ))}
</div>

    </section>
  );
}
