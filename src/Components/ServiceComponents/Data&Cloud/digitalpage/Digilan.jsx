import { Link } from "react-router-dom";
import digi from "/src/assets/digiservics/Digital_Marketing_Scene_Generation.mp4";

function Digilan() {
  return (
    <>
      {/* HERO SECTION */}
      <div className="bg-black text-white py-24">
        <div className="container mx-auto px-6 lg:px-20 grid lg:grid-cols-2 gap-16 items-center">
          {/* LEFT SIDE */}
          <div className="space-y-8">
            <h1
              className="text-5xl leading-tight"
              style={{ fontFamily: "DeaconTest, sans-serif", fontWeight: 600 }}
            >
              Bringing innovative <br />
              <span className="bg-gradient-to-r from-violet-400 to-indigo-500 bg-clip-text text-transparent">
                Digital Marketing
              </span>{" "}
              <br />
              <span className="bg-gradient-to-r from-violet-400 to-indigo-500 bg-clip-text text-transparent">
                solutions.
              </span>
            </h1>

            <p
              className="text-gray-400 text-sm max-w-md"
              style={{ fontFamily: "anta, sans-serif" }}
            >
              We specialize in turning businesses into digital success stories.
              From SEO to social media management, we provide strategies that
              deliver measurable growth.
            </p>

            {/* BUTTON AS LINK TO /contact */}
            <Link
              to="/contact"
              className="inline-flex"
            >
              <button
                className="custom-button px-6 py-3 rounded-md flex items-center gap-2 
                           text-white text-sm font-medium
                           bg-gradient-to-r from-violet-400 to-indigo-500
                           transition-all duration-300 ease-out"
                style={{ fontFamily: "anta, sans-serif" }}
              >
                Get Started <span className="text-xl">→</span>
              </button>
            </Link>
          </div>

          {/* RIGHT SIDE – VIDEO */}
          <div className="flex justify-center">
            <video
              src={digi}
              autoPlay
              loop
              muted
              playsInline
              className="video-box"
            />
          </div>
        </div>
      </div>

      {/* CSS */}
      <style jsx>{`
        /* MAIN CTA BUTTON */
        .custom-button {
          background-color: #ef00f3;
          border: none;
          cursor: pointer;
        }

        .custom-button:hover {
          background-color: #d000db;
          transform: translateY(-2px) scale(1.02);
          box-shadow: 0 10px 20px rgba(239, 0, 243, 0.35);
        }

        /* VIDEO SIZE CONTROL */
        .video-box {
          width: 100%;
          max-width: 600px;
          height: 450px;
          border-radius: 14px;
          object-fit: cover;
          display: block;
        }

        @media (max-width: 1024px) {
          .video-box {
            max-width: 500px;
            height: 380px;
          }
        }

        @media (max-width: 768px) {
          .video-box {
            max-width: 400px;
            height: 320px;
          }
        }

        @media (max-width: 480px) {
          .video-box {
            max-width: 340px;
            height: 280px;
          }
        }
      `}</style>
    </>
  );
}

export default Digilan;
