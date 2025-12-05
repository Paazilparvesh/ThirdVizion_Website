import React, { useState } from 'react';
import Lottie from "lottie-react";
import aiBrain from "../../../../assets/Animations/Digitalmedia3d.json";
import { Link } from "react-router-dom";

const App = () => {
  const [showForm, setShowForm] = useState(false);

  const splitText = (text) => {
    return text.split("").map((char, index) => (
      <span key={index} style={{ animationDelay: `${index * 0.05}s` }}>
        {char}
      </span>
    ));
  };

  return (
    <div className="relative text-white flex p-2 xs:p-3 sm:p-4 md:p-6 lg:p-8 overflow-hidden w-full">

      {/* ⭐ Lottie Animation — CLOSER TO TEXT ON MOBILE */}
      <div
        className="
          absolute 
          bottom-[-30px] xs:bottom-[-60px] sm:bottom-[-100px] md:bottom-[-160px] lg:-bottom-52 xl:-bottom-47 2xl:-bottom-60
          left-1/2 -translate-x-1/2 -translate-y-1/2
          w-[280px] xs:w-[320px]
          sm:w-[400px]
          md:w-[70vw]
          lg:w-[70vw]
          xl:w-[78vh]
          z-20
        "
      >
        <Lottie animationData={aiBrain} loop={true} />
      </div>

      {/* ⭐ Hero Section - REDUCED HEIGHT ON MOBILE */}
      <div
        className="relative z-10 flex flex-col pt-4 xs:pt-12 sm:pt-16 md:pt-28 lg:pt-32 xl:pt-36 2xl:pt-40 items-center text-center w-full min-h-[70vh] sm:min-h-[80vh] md:min-h-screen"
        style={{ fontFamily: "DeaconTest, sans-serif", fontWeight: 600 }}
      >
        {/* Animated Text Line 1 */}
        <div className="overflow-hidden mb-0 xs:mb-2 sm:mb-3 md:mb-5 lg:mb-6 px-2">
          <h1
            className="text-2xl md:text-5xl lg:text-6xl xl:text-7xl leading-tight animate-gradient-typing font-font-semibold"
          >
            99% AR accuracy delivered
          </h1>
        </div>

        {/* Animated Text Line 2 */}
        <div className="overflow-hidden mb-2 xs:mb-3 sm:mb-4 md:mb-7 lg:mb-8 px-2">
          <h1
            className="text-3xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl leading-tight"
            style={{ fontFamily: "DeaconTest, sans-serif", fontWeight: 600 }}
          >
            <span className="animate-stagger-chars">
              {splitText("by ThirdVizion")}
            </span>
          </h1>
        </div>

        {/* CTA Button */}
        {!showForm && (
          <div className="mb-3 xs:mb-4 sm:mb-6 md:mb-10 lg:mb-12 animate-fade-in-up px-2">
            <Link to="/contact">
              <button
                onClick={() => setShowForm(true)}
                className="
                  bg-gradient-to-r from-pink-600 to-fuchsia-600 
                  hover:from-pink-700 hover:to-fuchsia-700 
                  text-white font-semibold 
                  text-sm sm:text-base lg:text-lg xl:text-xl
                  py-2 xs:py-3 sm:py-4 
                  px-6 xs:px-8 sm:px-10 md:px-12 lg:px-14 
                  rounded-lg 
                  transform hover:scale-105 
                  transition-all duration-300 
                  shadow-lg hover:shadow-pink-500/25 
                  animate-float-glow
                "
                style={{ fontFamily: "DeaconTest, sans-serif" }}
              >
                Get Started
              </button>
            </Link>
          </div>
        )}

        {/* Subtle Glow Behind Text */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4/5 h-32 xs:w-3/4 xs:h-36 sm:h-40 md:h-48 lg:h-56 xl:h-64 2xl:h-72 bg-pink-500/10 blur-2xl xs:blur-3xl -z-10 animate-glow-move"></div>
      </div>

      {/* ⭐ Keep ALL your special animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) scale(1); }
          50% { transform: translateY(-20px) scale(1.05); }
        }

        @keyframes float-slow {
          0%, 100% { transform: translateY(0px) scale(1); }
          50% { transform: translateY(10px) scale(1.02); }
        }

        @keyframes fadeInUp {
          0% { opacity: 0; transform: translateY(30px); }
          100% { opacity: 1; transform: translateY(0); }
        }

        @keyframes charStagger {
          0% {
            transform: translateY(30px) rotateX(-90deg);
            opacity: 0;
            text-shadow: 0 0 10px rgba(236,72,214,0.5);
          }
          100% {
            transform: translateY(0) rotateX(0);
            opacity: 1;
            text-shadow: 0 0 20px rgba(236,72,236,0.8);
          }
        }

        .animate-gradient-typing {
          background: linear-gradient(-45deg, #9e07daff, #be18b6ff, #f472b6, #ec4899, #f9a8d4);
          background-size: 300% 300%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: gradientShift 4s ease infinite, gradientTyping 3s forwards;
        }

        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        .animate-stagger-chars span {
          display: inline-block;
          opacity: 0;
          animation: charStagger 0.6s ease forwards;
        }

        .animate-float-glow {
          animation: floatGlow 3s ease-in-out infinite;
        }

        @keyframes floatGlow {
          0% { text-shadow: 0 0 10px rgba(232,121,249,0.5); }
          50% { text-shadow: 0 0 20px rgba(232,121,249,0.9); }
          100% { text-shadow: 0 0 10px rgba(232,121,249,0.5); }
        }

        .animate-glow-move {
          animation: glowMove 8s ease-in-out infinite;
        }

        @keyframes glowMove {
          0% { opacity: 0.1; transform: scale(1); }
          50% { opacity: 0.15; transform: scale(1.1); }
          100% { opacity: 0.1; transform: scale(1); }
        }
      `}</style>
    </div>
  );
};

export default App;
