import { useEffect, useRef } from "react";
import gsap from "gsap";

// Center
import big from "/src/assets/Logo_5.png";

// Orbit icons
import content from "/src/assets/digiicons/content marketing.png";
import social from "/src/assets/digiicons/social-media-marketing-3d-icon-png-download-12362907.png";
import influencer from "/src/assets/digiicons/influensermarketing.png";
import email from "/src/assets/digiicons/emailmarketing.png";
import you from "/src/assets/digiicons/youtube.webp";
import fac from "/src/assets/digiicons/facebook.webp";
import link from "/src/assets/digiicons/linkedin.webp";
import cro from "/src/assets/digiicons/cro.webp";
import twit from "/src/assets/digiicons/twiter.webp";
import insta from "/src/assets/digiicons/instagram.webp";

function Digiindus() {
  const orbit1 = useRef(null);
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
    gsap.to(orbit1.current, { 
      rotate: 360, 
      duration: 20, 
      repeat: -1, 
      ease: "linear",
      delay: -5
    });
    
    gsap.to(orbit2.current, { 
      rotate: -360, 
      duration: 22, 
      repeat: -1, 
      ease: "linear",
      delay: -8
    });
    
    gsap.to(orbit3.current, { 
      rotate: 360, 
      duration: 24, 
      repeat: -1, 
      ease: "linear",
      delay: -12
    });
    
    gsap.to(orbit4.current, { 
      rotate: -360, 
      duration: 26, 
      repeat: -1, 
      ease: "linear",
      delay: -3
    });
    
    gsap.to(orbit5.current, { 
      rotate: 360, 
      duration: 28, 
      repeat: -1, 
      ease: "linear",
      delay: -15
    });
    
    gsap.to(orbit6.current, { 
      rotate: -360, 
      duration: 30, 
      repeat: -1, 
      ease: "linear",
      delay: -10
    });
    
    gsap.to(orbit7.current, { 
      rotate: 360, 
      duration: 32, 
      repeat: -1, 
      ease: "linear",
      delay: -18
    });
    
    gsap.to(orbit8.current, { 
      rotate: -360, 
      duration: 34, 
      repeat: -1, 
      ease: "linear",
      delay: -6
    });
    
    gsap.to(orbit9.current, { 
      rotate: 360, 
      duration: 36, 
      repeat: -1, 
      ease: "linear",
      delay: -14
    });
    
    gsap.to(orbit10.current, { 
      rotate: -360, 
      duration: 38, 
      repeat: -1, 
      ease: "linear",
      delay: -20
    });
  }, []);

  return (
    <>
      <div className="galaxy-section">
        {/* Heading Section */}
        <div className="service-header">
          <h2 className="service-title" style={{ fontFamily: "DeaconTest, sans-serif", fontWeight: 600 }}>
            Our Digital <spam className="text-[#EF00F3]"> Marketing Services</spam>
  </h2>
          <p className="service-subtitle">
            Comprehensive solutions to elevate your brand across all digital platforms
          </p>
        </div>

        <div className="galaxy-container">
          {/* Center logo */}
          <div className="center-logo">
            <img src={big} alt="ThirdVizion Logo" />
          </div>

          {/* Orbit 1 - Content Marketing */}
          <div ref={orbit1} className="orbit orbit1">
            <div className="orbit-icon-wrapper">
              <img src={content} className="orbit-icon" alt="Content Marketing" />
              <span className="icon-label">Content Marketing</span>
            </div>
          </div>

          {/* Orbit 2 - Social Media Marketing */}
          <div ref={orbit2} className="orbit orbit2">
            <div className="orbit-icon-wrapper">
              <img src={social} className="orbit-icon" alt="Social Media Marketing" />
              <span className="icon-label">Social Media</span>
            </div>
          </div>

          {/* Orbit 3 - Influencer Marketing */}
          <div ref={orbit3} className="orbit orbit3">
            <div className="orbit-icon-wrapper">
              <img src={influencer} className="orbit-icon" alt="Influencer Marketing" />
              <span className="icon-label">Influencer Marketing</span>
            </div>
          </div>

          {/* Orbit 4 - Email Marketing */}
          <div ref={orbit4} className="orbit orbit4">
            <div className="orbit-icon-wrapper">
              <img src={email} className="orbit-icon" alt="Email Marketing" />
              <span className="icon-label">Email Marketing</span>
            </div>
          </div>

          {/* Orbit 5 - YouTube Marketing */}
          <div ref={orbit5} className="orbit orbit5">
            <div className="orbit-icon-wrapper">
              <img src={you} className="orbit-icon" alt="YouTube Marketing" />
              <span className="icon-label">YouTube</span>
            </div>
          </div>

          {/* Orbit 6 - Facebook Marketing */}
          <div ref={orbit6} className="orbit orbit6">
            <div className="orbit-icon-wrapper">
              <img src={fac} className="orbit-icon" alt="Facebook Marketing" />
              <span className="icon-label">Facebook</span>
            </div>
          </div>

          {/* Orbit 7 - LinkedIn Marketing */}
          <div ref={orbit7} className="orbit orbit7">
            <div className="orbit-icon-wrapper">
              <img src={link} className="orbit-icon" alt="LinkedIn Marketing" />
              <span className="icon-label">LinkedIn</span>
            </div>
          </div>

          {/* Orbit 8 - CRO */}
          <div ref={orbit8} className="orbit orbit8">
            <div className="orbit-icon-wrapper">
              <img src={cro} className="orbit-icon" alt="Conversion Rate Optimization" />
              <span className="icon-label">CRO</span>
            </div>
          </div>

          {/* Orbit 9 - Twitter Marketing */}
          <div ref={orbit9} className="orbit orbit9">
            <div className="orbit-icon-wrapper">
              <img src={twit} className="orbit-icon" alt="Twitter Marketing" />
              <span className="icon-label">Twitter</span>
            </div>
          </div>

          {/* Orbit 10 - Instagram Marketing */}
          <div ref={orbit10} className="orbit orbit10">
            <div className="orbit-icon-wrapper">
              <img src={insta} className="orbit-icon" alt="Instagram Marketing" />
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
          margin-bottom: 60px;
          max-width: 900px;
          margin-left: auto;
          margin-right: auto;
          position: relative;
          z-index: 20;
        }

        .service-title {
          font-size: 56px;
          color: #ffffff;
          margin-bottom: 16px;
          letter-spacing: -1px;
          line-height: 1.1;
        }

        .service-subtitle {
          font-size: 20px;
          color: #888888;
          line-height: 1.6;
          max-width: 700px;
          margin: 0 auto;
          font-weight: 400;
        }

        .galaxy-container {
          position: relative;
          width: 100%;
          height: 100vh;
          max-height: 900px;
          background: radial-gradient(circle at center, #1a0033 0%, #000000 100%);
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 20px;
        }

        .center-logo {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          z-index: 10;
          filter: drop-shadow(0 0 30px rgba(138, 43, 226, 0.8))
                  drop-shadow(0 0 60px rgba(138, 43, 226, 0.5));
          animation: pulse-glow 3s ease-in-out infinite;
        }

        @keyframes pulse-glow {
          0%, 100% {
            filter: drop-shadow(0 0 30px rgba(138, 43, 226, 0.8))
                    drop-shadow(0 0 60px rgba(138, 43, 226, 0.5));
          }
          50% {
            filter: drop-shadow(0 0 40px rgba(138, 43, 226, 1))
                    drop-shadow(0 0 80px rgba(138, 43, 226, 0.7));
          }
        }

        .center-logo img {
          width: 180px;
          height: 180px;
          object-fit: contain;
        }

        .orbit {
          position: absolute;
          top: 50%;
          left: 50%;
          transform-origin: center;
          border: 1px solid rgba(138, 43, 226, 0.3);
          border-radius: 50%;
          box-shadow: 0 0 15px rgba(138, 43, 226, 0.2),
                      inset 0 0 15px rgba(138, 43, 226, 0.1);
        }

        /* Equal spacing - 90px increments */
        .orbit1 { 
          width: 220px; 
          height: 220px; 
          margin-left: -110px; 
          margin-top: -110px; 
        }
        
        .orbit2 { 
          width: 310px; 
          height: 310px; 
          margin-left: -155px; 
          margin-top: -155px; 
        }
        
        .orbit3 { 
          width: 400px; 
          height: 400px; 
          margin-left: -200px; 
          margin-top: -200px; 
        }

        .orbit4 { 
          width: 490px; 
          height: 490px; 
          margin-left: -245px; 
          margin-top: -245px; 
        }

        .orbit5 { 
          width: 580px; 
          height: 580px; 
          margin-left: -290px; 
          margin-top: -290px; 
        }

        .orbit6 { 
          width: 670px; 
          height: 670px; 
          margin-left: -335px; 
          margin-top: -335px; 
        }

        .orbit7 { 
          width: 760px; 
          height: 760px; 
          margin-left: -380px; 
          margin-top: -380px; 
        }

        .orbit8 { 
          width: 850px; 
          height: 850px; 
          margin-left: -425px; 
          margin-top: -425px; 
        }

        .orbit9 { 
          width: 940px; 
          height: 940px; 
          margin-left: -470px; 
          margin-top: -470px; 
        }

        .orbit10 { 
          width: 1030px; 
          height: 1030px; 
          margin-left: -515px; 
          margin-top: -515px; 
        }

        .orbit-icon-wrapper {
          position: absolute;
          top: 0;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
        }

        .orbit-icon {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          object-fit: contain;
          filter: drop-shadow(0 0 10px rgba(138, 43, 226, 0.8))
                  drop-shadow(0 0 20px rgba(138, 43, 226, 0.6));
          transition: all 0.3s ease;
        }

        .icon-label {
          font-size: 12px;
          color: #ffffff;
          font-weight: 500;
          white-space: nowrap;
          background: rgba(0, 0, 0, 0.7);
          padding: 4px 10px;
          border-radius: 12px;
          border: 1px solid rgba(138, 43, 226, 0.4);
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .orbit-icon-wrapper:hover .orbit-icon {
          filter: drop-shadow(0 0 20px rgba(138, 43, 226, 1))
                  drop-shadow(0 0 40px rgba(138, 43, 226, 0.9));
          transform: scale(1.3);
        }

        .orbit-icon-wrapper:hover .icon-label {
          opacity: 1;
        }

        /* Varied icon sizes */
        .orbit1 .orbit-icon { width: 50px; height: 50px; }
        .orbit2 .orbit-icon { width: 48px; height: 48px; }
        .orbit3 .orbit-icon { width: 52px; height: 52px; }
        .orbit4 .orbit-icon { width: 46px; height: 46px; }
        .orbit5 .orbit-icon { width: 54px; height: 54px; }
        .orbit6 .orbit-icon { width: 47px; height: 47px; }
        .orbit7 .orbit-icon { width: 49px; height: 49px; }
        .orbit8 .orbit-icon { width: 51px; height: 51px; }
        .orbit9 .orbit-icon { width: 53px; height: 53px; }
        .orbit10 .orbit-icon { width: 55px; height: 55px; }

        /* Mobile Responsive */
        @media (max-width: 768px) {
          .galaxy-section {
            padding: 60px 16px 40px;
          }

          .service-title {
            font-size: 42px;
          }

          .service-subtitle {
            font-size: 18px;
          }

          .galaxy-container {
            max-height: 700px;
          }

          .orbit1 { width: 150px; height: 150px; margin-left: -75px; margin-top: -75px; }
          .orbit2 { width: 210px; height: 210px; margin-left: -105px; margin-top: -105px; }
          .orbit3 { width: 270px; height: 270px; margin-left: -135px; margin-top: -135px; }
          .orbit4 { width: 330px; height: 330px; margin-left: -165px; margin-top: -165px; }
          .orbit5 { width: 390px; height: 390px; margin-left: -195px; margin-top: -195px; }
          .orbit6 { width: 450px; height: 450px; margin-left: -225px; margin-top: -225px; }
          .orbit7 { width: 510px; height: 510px; margin-left: -255px; margin-top: -255px; }
          .orbit8 { width: 570px; height: 570px; margin-left: -285px; margin-top: -285px; }
          .orbit9 { width: 630px; height: 630px; margin-left: -315px; margin-top: -315px; }
          .orbit10 { width: 690px; height: 690px; margin-left: -345px; margin-top: -345px; }

          .orbit1 .orbit-icon { width: 40px; height: 40px; }
          .orbit2 .orbit-icon { width: 38px; height: 38px; }
          .orbit3 .orbit-icon { width: 42px; height: 42px; }
          .orbit4 .orbit-icon { width: 36px; height: 36px; }
          .orbit5 .orbit-icon { width: 44px; height: 44px; }
          .orbit6 .orbit-icon { width: 37px; height: 37px; }
          .orbit7 .orbit-icon { width: 39px; height: 39px; }
          .orbit8 .orbit-icon { width: 41px; height: 41px; }
          .orbit9 .orbit-icon { width: 43px; height: 43px; }
          .orbit10 .orbit-icon { width: 45px; height: 45px; }

          .center-logo img {
            width: 120px;
            height: 120px;
          }

          .icon-label {
            font-size: 10px;
            padding: 3px 8px;
          }
        }

        @media (max-width: 480px) {
          .service-title {
            font-size: 36px;
          }

          .service-subtitle {
            font-size: 16px;
          }

          .galaxy-container {
            max-height: 600px;
          }

          .orbit1 { width: 130px; height: 130px; margin-left: -65px; margin-top: -65px; }
          .orbit2 { width: 180px; height: 180px; margin-left: -90px; margin-top: -90px; }
          .orbit3 { width: 230px; height: 230px; margin-left: -115px; margin-top: -115px; }
          .orbit4 { width: 280px; height: 280px; margin-left: -140px; margin-top: -140px; }
          .orbit5 { width: 330px; height: 330px; margin-left: -165px; margin-top: -165px; }
          .orbit6 { width: 380px; height: 380px; margin-left: -190px; margin-top: -190px; }
          .orbit7 { width: 430px; height: 430px; margin-left: -215px; margin-top: -215px; }
          .orbit8 { width: 480px; height: 480px; margin-left: -240px; margin-top: -240px; }
          .orbit9 { width: 530px; height: 530px; margin-left: -265px; margin-top: -265px; }
          .orbit10 { width: 580px; height: 580px; margin-left: -290px; margin-top: -290px; }

          .orbit1 .orbit-icon { width: 35px; height: 35px; }
          .orbit2 .orbit-icon { width: 33px; height: 33px; }
          .orbit3 .orbit-icon { width: 37px; height: 37px; }
          .orbit4 .orbit-icon { width: 31px; height: 31px; }
          .orbit5 .orbit-icon { width: 39px; height: 39px; }
          .orbit6 .orbit-icon { width: 32px; height: 32px; }
          .orbit7 .orbit-icon { width: 34px; height: 34px; }
          .orbit8 .orbit-icon { width: 36px; height: 36px; }
          .orbit9 .orbit-icon { width: 38px; height: 38px; }
          .orbit10 .orbit-icon { width: 40px; height: 40px; }

          .center-logo img {
            width: 100px;
            height: 100px;
          }
        }
      `}</style>
    </>
  );
}

export default Digiindus;
