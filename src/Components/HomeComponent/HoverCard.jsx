import { useState } from "react";

import web from "/src/assets/HomeImages/webdesign.jpg";
import vr from "/src/assets/HomeImages/vr.png";
import ar from "/src/assets/HomeImages/ar.png";
import threed from "/src/assets/HomeImages/3d development.webp";
import ai from "/src/assets/HomeImages/AI-developer.jpg";

const Services = () => {
  const cards = [
    {
      label: "Website",
      content:
        "With a dedicated team of experts, we bring ideas to life with seamless technology that transforms businesses.",
      img: web,
    },
    {
      label: "AR",
      content:
        "Augmented Reality blends real-world and digital experiences for innovation.",
      img: ar,
    },
    {
      label: "VR",
      content:
        "Virtual Reality creates immersive 3D environments for training and gaming.",
      img: vr,
    },
    {
      label: "3D",
      content:
        "3D technology transforms ideas into visual models and interactive experiences.",
      img: threed,
    },
    {
      label: "AI",
      content:
        "Artificial Intelligence powers automation, insights, and smarter decisions.",
      img: ai,
    },
  ];

  const [active, setActive] = useState(null);

  return (
    <section className="bg-black text-white py-16 min-h-screen flex items-center justify-center">
      {/* Responsive flex handling */}
      <div className="flex flex-col md:flex-col lg:flex-row items-center w-full gap-10 px-[7px] md:px-6 lg:px-0">
        {/* Left Section */}
        <div className="flex flex-col justify-center px-4 md:px-8 lg:pl-[80px] mb-10 lg:mb-0 text-center lg:text-left">
          <h2
            className="
              text-3xl md:text-4xl lg:text-5xl 2xl:text-6xl 
              font-normal leading-tight
            "
          >
            What <br className="hidden lg:block" />
            Innovators <br className="hidden lg:block" />
            Say About <br className="hidden lg:block" />
            <span
              className="
                font-bold 
                text-[50px] md:text-[70px] lg:text-[120px] 2xl:text-[200px]
              "
            >
              US
            </span>
          </h2>
        </div>

        {/* Right Section */}
        <div className="flex flex-col md:flex-col lg:flex-row w-full lg:h-[600px] gap-3 overflow-hidden">
          {cards.map((card, index) => {
            const isActive = active === index;

            return (
              <div
                key={index}
                onMouseEnter={() => setActive(index)}
                onMouseLeave={() => setActive(null)}
                onClick={() =>
                  setActive(isActive && window.innerWidth < 1024 ? null : index)
                } // Mobile + Tablet toggle on tap
                className={[
                  "relative rounded-2xl border border-white/30 overflow-hidden cursor-pointer transition-all duration-700 ease-in-out flex flex-col",
                  // Mobile & Tablet → expand/collapse by height
                  isActive ? "h-72" : "h-28",
                  "lg:h-auto",
                  // Desktop accordion widths
                  isActive ? "lg:flex-[4]" : "lg:flex-[1]",
                ].join(" ")}
                style={{
                  backgroundImage: `url(${card.img})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                {/* Overlay */}
                <div
                  className={`absolute inset-0 rounded-2xl transition-all duration-700 ${
                    isActive ? "bg-black/70" : "bg-black/40"
                  }`}
                ></div>

                {/* Content Centered */}
                <div className="relative z-10 flex-1 flex flex-col justify-center items-center text-center ">
                  <p className="text-base md:text-lg lg:text-2xl font-bold mb-4">
                    {card.label}
                  </p>
                  <p
                    className={`text-gray-200 text-sm md:text-base lg:text-lg leading-relaxed transition-all duration-700 ${
                      isActive
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 lg:translate-y-4"
                    }`}
                  >
                    {card.content}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
