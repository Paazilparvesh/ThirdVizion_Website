import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
import img18 from "/src/assets/AboutImages/THARUN copy.jpg";

const teamData = [
  { img: img8, name: "RAJESH", role: "GAME DEVELOPER" },
  { img: img4, name: "JERO", role: "BACK END DEVELOPER" },
  { img: img2, name: "DHILIP", role: "FRONT END DEVELOPER" },
  { img: img14, name: "SHAMMIKUMAR", role: "BACK END DEVELOPER" },
  { img: img15, name: "THARUN", role: "3D GENERALIST" },
  { img: img18, name: "SANTHOSH", role: "UI & UX DESIGNER" },
  { img: img6, name: "PAAZIL PARVESH", role: "FRONT END DEVELOPER" },
  { img: img17, name: "YESWANTH", role: "BACK END DEVELOPER" },
  { img: img10, name: "ARULWIN REX", role: "SALES & AUTOMATION" },
  { img: img13, name: "SATHIYA", role: "BACK END DEVELOPER" },
  { img: img11, name: "SANTHOUSH REDDY", role: "DIGITAL MARKETING SPECIALIST" },
  { img: img16, name: "VISHNU PRIYA", role: "FRONT END DEVELOPER" },
  { img: img5, name: "KARTHICK", role: "FRONT END DEVELOPER" },
  { img: img1, name: "AKASH CHARLES", role: "GAME DEVELOPER" },
  { img: img7, name: "RAGUL", role: "UI & UX DESIGNER" },
  { img: img12, name: "SARVANA PRIYA", role: "FRONT END DEVELOPER" },
  { img: img3, name: "JANARTHANAN", role: "UI & UX DESIGNER" },
  { img: img9, name: "RAKESH", role: "3D GENERALIST" },
];

export default function OurTeam() {
  const [active, setActive] = useState(null);

  return (
    <section className="bg-black text-white relative min-h-screen py-20 flex flex-col items-center justify-center">
      {/* Top Section */}
      <div className="text-center mb-16 px-6 max-w-3xl">
        <h2
          className="text-yellow-400 text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6"
          style={{ fontFamily: "DeaconTest, sans-serif", fontWeight: 600 }}
        >
          OUR TEAM
        </h2>
        <p
          className="text-white text-xs md:text-lg leading-relaxed"
          style={{ fontFamily: "anta, sans-serif" }}
        >
          Meet the passionate innovators who power ThirdVizion with creativity
          and expertise. Our team blends technology and vision to deliver
          solutions that inspire.
        </p>

        <div
          className="h-1 w-2/3 mx-auto mt-6"
          style={{
            background:
              "linear-gradient(to right, rgba(255,255,255,0) 0%, white 20%, white 80%, rgba(255,255,255,0) 100%)",
          }}
        />
      </div>

      {/* Desktop Layout - Horizontal Rows */}
      <div className="hidden md:grid grid-cols-1 gap-8 w-full max-w-7xl px-6">
        {[0, 1].map((row) => (
          <div
            key={row}
            className="flex flex-row w-full h-[350px] lg:h-[420px] gap-4 overflow-hidden"
          >
            {teamData
              .slice(row === 0 ? 0 : 9, row === 0 ? 9 : 18)
              .map((member, index) => {
                const actualIndex = row === 0 ? index : 9 + index;
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
                              style={{
                                fontFamily: "DeaconTest, sans-serif",
                                fontWeight: 900,
                              }}
                            >
                              {member.name}
                            </motion.p>

                            <motion.p
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: 20 }}
                              transition={{ duration: 0.4, delay: 0.1 }}
                              className="text-gray-200 text-sm md:text-base leading-relaxed"
                              style={{
                                fontFamily: "anta, sans-serif",
                                fontWeight: 100,
                              }}
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

      {/* Mobile Layout - Circular Cards Grid */}
      <div className="md:hidden grid grid-cols-2 gap-6 w-full max-w-md px-6">
        {teamData.map((member, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
          >
            {/* Circular Image */}
            {/* <div
              className="relative w-32 h-32 rounded-full border-4 border-yellow-400 overflow-hidden shadow-lg"
              style={{
                backgroundImage: `url(${member.img})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            </div> */}

            <div
  className="relative w-32 h-32 rounded-full border-2 border-yellow-400 overflow-hidden shadow-lg"
  style={{
    backgroundImage: `url(${member.img})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}
>
  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
</div>


            {/* Name and Role */}
            <div className="mt-3 text-center">
              <p
                className="text-yellow-400 text-sm font-bold mb-1"
                style={{
                  fontFamily: "DeaconTest, sans-serif",
                  fontWeight: 700,
                }}
              >
                {member.name}
              </p>
              <p
                className="text-gray-300 text-xs leading-tight"
                style={{
                  fontFamily: "anta, sans-serif",
                  fontWeight: 100,
                }}
              >
                {member.role}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
