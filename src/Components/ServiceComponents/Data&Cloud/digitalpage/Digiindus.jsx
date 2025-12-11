import { useEffect, useRef } from "react";
import gsap from "gsap";

// Center
import big from "/src/assets/Logo_5.png";

// Orbit icons
import content from "/src/assets/digiicons/content marketing.png";
import social from "/src/assets/digiicons/social-media-marketing-3d-icon-png-download-12362907.png";
import influencer from "/src/assets/digiicons/influensermarketing.png";
import email from "/src/assets/digiicons/emailmarketing.png";
import you from "/src/assets/digiicons/youtubea.webp";
import fac from "/src/assets/digiicons/facebook.webp";
import link from "/src/assets/digiicons/linkedin.webp";
import cro from "/src/assets/digiicons/cro.webp";
import twit from "/src/assets/digiicons/twiter.webp";
import insta from "/src/assets/digiicons/instagram.webp";

function Digiindus() {
  const orbit2 = useRef(null);
  const orbit3 = useRef(null);
  const orbit4 = useRef(null);
  const orbit5 = useRef(null);
  const orbit6 = useRef(null);
  const orbit7 = useRef(null);
  const orbit8 = useRef(null);
  const orbit9 = useRef(null);
  const orbit10 = useRef(null);

  useEffect(() => {
    const makeOrbit = (ref, rotate, duration, delay) => {
      if (!ref.current) return;
      gsap.to(ref.current, {
        rotate,
        duration,
        repeat: -1,
        ease: "linear",
        delay,
      });
    };

    makeOrbit(orbit2, -360, 22, -8);
    makeOrbit(orbit3, 360, 24, -12);
    makeOrbit(orbit4, -360, 26, -3);
    makeOrbit(orbit5, 360, 28, -15);
    makeOrbit(orbit6, -360, 30, -10);
    makeOrbit(orbit7, 360, 32, -18);
    makeOrbit(orbit8, -360, 34, -6);
    makeOrbit(orbit9, 360, 36, -14);
    makeOrbit(orbit10, -360, 38, -20);
  }, []);

  return (
    <>
      <div className="galaxy-section">
        <div className="service-header">
          <h2
            className="service-title"
            style={{ fontFamily: "DeaconTest, sans-serif", fontWeight: 600 }}
          >
            Our Digital{" "}
            <span className="text-gradient">Marketing Services</span>
          </h2>
          <p className="service-subtitle">
            Comprehensive solutions to elevate your brand across all digital
            platforms
          </p>
        </div>

        <div className="galaxy-container">
          {/* soft star background overlay */}
          <div className="star-layer" />

          {/* Center logo */}
          <div className="center-logo">
            <img src={big} alt="ThirdVizion Logo" />
          </div>

          {/* Orbit 2 - Social Media */}
          <div ref={orbit2} className="orbit orbit2">
            <div className="orbit-icon-wrapper">
              <img
                src={social}
                className="orbit-icon"
                alt="Social Media Marketing"
              />
              <span className="icon-label">Social Media</span>
            </div>
          </div>

          {/* Orbit 3 - Influencer */}
          <div ref={orbit3} className="orbit orbit3">
            <div className="orbit-icon-wrapper">
              <img
                src={influencer}
                className="orbit-icon"
                alt="Influencer Marketing"
              />
              <span className="icon-label">Influencer Marketing</span>
            </div>
          </div>

          {/* Orbit 4 - Email */}
          <div ref={orbit4} className="orbit orbit4">
            <div className="orbit-icon-wrapper">
              <img
                src={email}
                className="orbit-icon"
                alt="Email Marketing"
              />
              <span className="icon-label">Email Marketing</span>
            </div>
          </div>

          {/* Orbit 5 - YouTube */}
          <div ref={orbit5} className="orbit orbit5">
            <div className="orbit-icon-wrapper">
              <img src={you} className="orbit-icon" alt="YouTube Marketing" />
              <span className="icon-label">YouTube</span>
            </div>
          </div>

          {/* Orbit 6 - Facebook */}
          <div ref={orbit6} className="orbit orbit6">
            <div className="orbit-icon-wrapper">
              <img src={fac} className="orbit-icon" alt="Facebook Marketing" />
              <span className="icon-label">Facebook</span>
            </div>
          </div>

          {/* Orbit 7 - LinkedIn */}
          <div ref={orbit7} className="orbit orbit7">
            <div className="orbit-icon-wrapper">
              <img src={link} className="orbit-icon" alt="LinkedIn Marketing" />
              <span className="icon-label">LinkedIn</span>
            </div>
          </div>

          {/* Orbit 8 - CRO */}
          <div ref={orbit8} className="orbit orbit8">
            <div className="orbit-icon-wrapper">
              <img
                src={cro}
                className="orbit-icon"
                alt="Conversion Rate Optimization"
              />
              <span className="icon-label">CRO</span>
            </div>
          </div>

          {/* Orbit 9 - Twitter */}
          <div ref={orbit9} className="orbit orbit9">
            <div className="orbit-icon-wrapper">
              <img
                src={twit}
                className="orbit-icon"
                alt="Twitter Marketing"
              />
              <span className="icon-label">Twitter</span>
            </div>
          </div>

          {/* Orbit 10 - Instagram */}
          <div ref={orbit10} className="orbit orbit10">
            <div className="orbit-icon-wrapper">
              <img
                src={insta}
                className="orbit-icon"
                alt="Instagram Marketing"
              />
              <span className="icon-label">Instagram</span>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .galaxy-section {
          position: relative;
          width: 100%;
          background: #000000;
          padding: 80px 20px 60px;
        }

        .service-header {
          text-align: center;
          margin-bottom: 40px;
          max-width: 900px;
          margin-left: auto;
          margin-right: auto;
          position: relative;
          z-index: 20;
        }

        .service-title {
          font-size: 48px;
          color: #ffffff;
          margin-bottom: 12px;
          letter-spacing: -1px;
          line-height: 1.1;
        }

        .text-gradient {
          background: linear-gradient(to right, #a855f7, #6366f1);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .service-subtitle {
          font-size: 18px;
          color: #9b9b9b;
          line-height: 1.5;
          max-width: 650px;
          margin: 0 auto;
          font-weight: 400;
        }

        .galaxy-container {
          position: relative;
          width: 100%;
          height: 90vh;
          max-height: 820px;
          background: radial-gradient(circle at center, #05070f 0%, #000000 60%);
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 20px;
        }

        /* soft star field */
        .star-layer {
          position: absolute;
          inset: 0;
          background-image: radial-gradient(
              rgba(255, 255, 255, 0.18) 1px,
              transparent 1px
            );
          background-size: 3px 3px;
          opacity: 0.22;
          mix-blend-mode: screen;
          pointer-events: none;
        }

        .center-logo {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          z-index: 10;
          filter: drop-shadow(0 0 28px rgba(168, 85, 247, 0.8))
            drop-shadow(0 0 60px rgba(99, 102, 241, 0.5));
          animation: pulse-glow 3s ease-in-out infinite;
        }

        @keyframes pulse-glow {
          0%,
          100% {
            filter: drop-shadow(0 0 24px rgba(168, 85, 247, 0.7))
              drop-shadow(0 0 55px rgba(99, 102, 241, 0.4));
          }
          50% {
            filter: drop-shadow(0 0 34px rgba(168, 85, 247, 1))
              drop-shadow(0 0 80px rgba(99, 102, 241, 0.7));
          }
        }

        .center-logo img {
          width: 150px;
          height: 150px;
          object-fit: contain;
        }

        .orbit {
          position: absolute;
          top: 50%;
          left: 50%;
          transform-origin: center;
          border-radius: 50%;
          border: 1px solid rgba(255, 255, 255, 0.14);
          box-shadow: 0 0 12px rgba(255, 255, 255, 0.08);
          background: radial-gradient(
            circle at center,
            rgba(255, 255, 255, 0.03) 0%,
            transparent 60%
          );
        }

        /* spacing between rings */
        .orbit2 {
          width: 300px;
          height: 300px;
          margin-left: -150px;
          margin-top: -150px;
        }
        .orbit3 {
          width: 380px;
          height: 380px;
          margin-left: -190px;
          margin-top: -190px;
        }
        .orbit4 {
          width: 460px;
          height: 460px;
          margin-left: -230px;
          margin-top: -230px;
        }
        .orbit5 {
          width: 540px;
          height: 540px;
          margin-left: -270px;
          margin-top: -270px;
        }
        .orbit6 {
          width: 620px;
          height: 620px;
          margin-left: -310px;
          margin-top: -310px;
        }
        .orbit7 {
          width: 700px;
          height: 700px;
          margin-left: -350px;
          margin-top: -350px;
        }
        .orbit8 {
          width: 780px;
          height: 780px;
          margin-left: -390px;
          margin-top: -390px;
        }
        .orbit9 {
          width: 860px;
          height: 860px;
          margin-left: -430px;
          margin-top: -430px;
        }
        .orbit10 {
          width: 940px;
          height: 940px;
          margin-left: -470px;
          margin-top: -470px;
        }

        .orbit-icon-wrapper {
          position: absolute;
          top: 0;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 6px;
        }

        .orbit-icon {
          width: 28px;
          height: 28px;
          border-radius: 999px;
          object-fit: contain;
          background: radial-gradient(
            circle at center,
            rgba(255, 255, 255, 0.12),
            rgba(0, 0, 0, 1)
          );
          box-shadow: 0 0 18px rgba(0, 0, 0, 0.9),
            0 0 14px rgba(168, 85, 247, 0.6);
          transition: transform 0.25s ease, box-shadow 0.25s ease,
            filter 0.25s ease;
          filter: saturate(1.1);
        }

        .icon-label {
          font-size: 10px;
          color: #a855f7;
          font-weight: 600;
          letter-spacing: 0.03em;
          text-transform: uppercase;
          white-space: nowrap;
          background: rgba(0, 0, 0, 0.8);
          padding: 3px 8px;
          border-radius: 999px;
          border: 1px solid rgba(168, 85, 247, 0.4);
          opacity: 0;
          transform: translateY(4px);
          transition: opacity 0.25s ease, transform 0.25s ease;
          text-shadow: 0 0 8px rgba(168, 85, 247, 0.6);
        }

        .orbit-icon-wrapper:hover .orbit-icon {
          box-shadow: 0 0 28px rgba(168, 85, 247, 1),
            0 0 45px rgba(99, 102, 241, 0.9);
          transform: scale(1.15);
          filter: saturate(1.4);
        }

        .orbit-icon-wrapper:hover .icon-label {
          opacity: 1;
          transform: translateY(0);
        }

        /* responsive */
        @media (max-width: 768px) {
          .galaxy-section {
            padding: 60px 16px 40px;
          }

          .service-title {
            font-size: 36px;
          }

          .service-subtitle {
            font-size: 16px;
          }

          .galaxy-container {
            max-height: 640px;
          }

          .center-logo img {
            width: 115px;
            height: 115px;
          }

          .orbit2 {
            width: 210px;
            height: 210px;
            margin-left: -105px;
            margin-top: -105px;
          }
          .orbit3 {
            width: 270px;
            height: 270px;
            margin-left: -135px;
            margin-top: -135px;
          }
          .orbit4 {
            width: 330px;
            height: 330px;
            margin-left: -165px;
            margin-top: -165px;
          }
          .orbit5 {
            width: 390px;
            height: 390px;
            margin-left: -195px;
            margin-top: -195px;
          }
          .orbit6 {
            width: 450px;
            height: 450px;
            margin-left: -225px;
            margin-top: -225px;
          }
          .orbit7 {
            width: 510px;
            height: 510px;
            margin-left: -255px;
            margin-top: -255px;
          }
          .orbit8 {
            width: 570px;
            height: 570px;
            margin-left: -285px;
            margin-top: -285px;
          }
          .orbit9 {
            width: 630px;
            height: 630px;
            margin-left: -315px;
            margin-top: -315px;
          }
          .orbit10 {
            width: 690px;
            height: 690px;
            margin-left: -345px;
            margin-top: -345px;
          }

          .orbit-icon {
            width: 24px;
            height: 24px;
          }

          .icon-label {
            font-size: 8px;
          }
        }

        @media (max-width: 480px) {
          .service-title {
            font-size: 30px;
          }

          .service-subtitle {
            font-size: 14px;
          }

          .galaxy-container {
            max-height: 560px;
          }

          .center-logo img {
            width: 95px;
            height: 95px;
          }

          .orbit2 {
            width: 180px;
            height: 180px;
            margin-left: -90px;
            margin-top: -90px;
          }
          .orbit3 {
            width: 230px;
            height: 230px;
            margin-left: -115px;
            margin-top: -115px;
          }
          .orbit4 {
            width: 280px;
            height: 280px;
            margin-left: -140px;
            margin-top: -140px;
          }
          .orbit5 {
            width: 330px;
            height: 330px;
            margin-left: -165px;
            margin-top: -165px;
          }
          .orbit6 {
            width: 380px;
            height: 380px;
            margin-left: -190px;
            margin-top: -190px;
          }
          .orbit7 {
            width: 430px;
            height: 430px;
            margin-left: -215px;
            margin-top: -215px;
          }
          .orbit8 {
            width: 480px;
            height: 480px;
            margin-left: -240px;
            margin-top: -240px;
          }
          .orbit9 {
            width: 530px;
            height: 530px;
            margin-left: -265px;
            margin-top: -265px;
          }
          .orbit10 {
            width: 580px;
            height: 580px;
            margin-left: -290px;
            margin-top: -290px;
          }

          .orbit-icon {
            width: 22px;
            height: 22px;
          }
        }
      `}</style>
    </>
  );
}

export default Digiindus;
