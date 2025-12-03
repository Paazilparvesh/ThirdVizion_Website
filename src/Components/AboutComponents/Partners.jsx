import Client1 from "/src/assets/partners/client1.png";
import Client2 from "/src/assets/partners/client2.png";
import Client3 from "/src/assets/partners/client3.png";
import Client4 from "/src/assets/partners/client4.png";
import Client5 from "/src/assets/home/Clients/Logo ssm-11.png";
import Client6 from "/src/assets/home/Clients/Logo ssm-12.png";
import Client7 from "/src/assets/partners/c1.svg";
import Client8 from "/src/assets/partners/c2.png";
import Client9 from "/src/assets/partners/c3.png";
import Client10 from "/src/assets/partners/c4.png";
import Client11 from "/src/assets/home/Clients/kt-10 (1).png";
import Client12 from "/src/assets/partners/c6.png";
import Client13 from "/src/assets/partners/c7.png";
import Client14 from "/src/assets/partners/a.png";
import Client15 from "/src/assets/partners/aa.png";
import Client16 from "/src/assets/partners/aaa.png";
import Client17 from "/src/assets/partners/aaaa.png";

// ---------------------------
// NEW: SEPARATE ARRAYS
// ---------------------------
const topSlides = [Client14, Client15, Client16, Client17, Client3];

const bottomSlides = [
  Client1, Client2, Client3, Client4,
  Client5, Client6, Client7, Client8,
  Client9, Client10, Client11, Client12,
  Client13
];


// Carousal Component with the Desired Effect
const FinalCarousalRow = ({ slides, reverse = false, duration = 14, compact = false }) => {
  return (
    <div className="relative w-full overflow-hidden my-2 carousel-container">

      {/* Enhanced gradient overlay for the fade effect */}
      <div className="absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-black via-black/80 to-transparent z-30 pointer-events-none"></div>
      <div className="absolute inset-y-0 left-1/3 w-1/3 bg-transparent z-20 pointer-events-none color-zone"></div>
      <div className="absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-black via-black/80 to-transparent z-30 pointer-events-none"></div>

      {/* Sliding Row */}
      <div
        className="flex items-center"
        style={{
          width: `${slides.length * 2 * 10}rem`,
          animation: `${reverse ? "reverseScroll" : "scroll"} ${duration}s linear infinite`,
        }}
      >
        {slides.concat(slides).map((img, idx) => (
          <div
            key={idx}
            className={`flex-shrink-0 ${compact
              ? "w-20 h-20 md:w-28 md:h-28 lg:w-32 lg:h-32 mx-3"
              : "w-28 h-28 md:w-36 md:h-36 lg:w-40 lg:h-30 mx-4"
              } flex justify-center items-center`}
          >
            <div className="relative w-full h-full">
              <img
                src={img}
                alt={`slide-${idx}`}
                className="w-full h-full object-contain object-center logo-img"
              />
            </div>
          </div>
        ))}
      </div>

      {/* Custom styles for the position-based color effect */}
      <style jsx>{`
        .carousel-container {
          mask-image: linear-gradient(
            to right,
            transparent 0%,
            black 25%,
            black 75%,
            transparent 100%
          );
        }
        
        .logo-img {
          filter: none;
          opacity: 0.7;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        /* Create the illusion of color in the middle through the mask */
        /* The logos will appear colorful in the middle due to the mask transparency */
      `}</style>
    </div>
  );
};

// Main Component
export default function Partners() {
  return (
    <div className="bg-black text-white py-12 relative font-['Outfit']">

      <h2
        className="text-3xl md:text-4xl lg:text-6xl uppercase text-center mb-3 font-bold"
        style={{ fontFamily: "DeaconTest, sans-serif", fontWeight: 600 }}
      >
        <span className="">Our </span>
        <span className="text-yellow-500">Clients</span>
      </h2>

      <p
        className="text-center text-white-400 text-sm md:text-lg px-4 sm:px-6 md:px-8 mb-8"
        style={{ fontFamily: "anta, sans-serif" }}
      >
        Creating impact alongside our valued clients.
      </p>

      {/* --------------------------- */}
      {/* TOP ROW — ONLY 14, 15, 16, 17 */}
      {/* --------------------------- */}
      <FinalCarousalRow slides={topSlides} duration={6} />

      {/* --------------------------- */}
      {/* BOTTOM ROW — All other logos */}
      {/* --------------------------- */}
      <div className="mt-5 scale-90 md:scale-80">
        <FinalCarousalRow slides={bottomSlides} reverse={true} duration={14} />
      </div>

      {/* Global styles for the carousel effect */}
      <style jsx global>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes reverseScroll {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        
        /* Enhanced effect using mask */
        .carousel-container {
          mask-image: linear-gradient(
            to right,
            transparent 0%,
            black 20%,
            black 80%,
            transparent 100%
          );
          -webkit-mask-image: linear-gradient(
            to right,
            transparent 0%,
            black 20%,
            black 80%,
            transparent 100%
          );
        }
        
        .carousel-container .logo-img {
          filter: none;
          opacity: 0.8;
        }
      `}</style>
    </div>
  );
}