import { Link } from "react-router-dom";

function Digilast() {
  const features = [
    {
      number: "24/5",
      label: "Support Available",
      description: "Round-the-clock service to keep your campaigns running"
    },
    {
      number: "100+",
      label: "Clients Served",
      description: "Trusted by businesses across industries"
    },
    {
      number: "5X",
      label: "Average ROI",
      description: "Delivering measurable growth and results"
    }
  ];

  return (
    <>
      <div className="bg-black text-white py-20">
        <div className="container mx-auto px-6 lg:px-20">
          {/* Header Section */}
          <div className="text-center mb-16">
            <h2
              className="text-5xl mb-6"
              style={{ fontFamily: "DeaconTest, sans-serif", fontWeight: 600 }}
            >
              Why Choose{" "}
              <span className="bg-gradient-to-r from-violet-400 to-indigo-500 bg-clip-text text-transparent">
                ThirdVizion
              </span>
            </h2>
            <p
              className="text-gray-400 text-lg max-w-3xl mx-auto"
              style={{ fontFamily: "anta, sans-serif" }}
            >
              We provide comprehensive digital marketing solutions with 24/7 support
              to ensure your business stays ahead in the digital landscape
            </p>
          </div>

          {/* Features Section */}
          <div className="features-card">
            <div className="grid md:grid-cols-3 gap-10 text-center">
              {features.map((feature, index) => (
                <div key={index} className="feature-item">
                  <h3
                    className="feature-number"
                    style={{ fontFamily: "DeaconTest, sans-serif" }}
                  >
                    {feature.number}
                  </h3>
                  <p
                    className="feature-label"
                    style={{ fontFamily: "DeaconTest, sans-serif", fontWeight: 600 }}
                  >
                    {feature.label}
                  </p>
                  <p
                    className="feature-desc"
                    style={{ fontFamily: "anta, sans-serif" }}
                  >
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <h3
              className="text-3xl mb-6"
              style={{ fontFamily: "DeaconTest, sans-serif", fontWeight: 600 }}
            >
              Ready to Transform Your Digital Presence?
            </h3>
            <Link to="/contact">
              <button className="cta-button" style={{ fontFamily: "anta, sans-serif" }}>
                Get Started Today →
              </button>
            </Link>
          </div>
        </div>
      </div>

      <style jsx>{`
        /* Features Card */
        .features-card {
          background: linear-gradient(135deg, rgba(15, 15, 20, 0.9) 0%, rgba(0, 0, 0, 0.95) 100%);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(167, 139, 250, 0.2);
          border-radius: 28px;
          padding: 60px 50px;
          margin-bottom: 80px;
          position: relative;
          overflow: hidden;
          box-shadow: 0 25px 50px rgba(0, 0, 0, 0.5);
        }

        .features-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 3px;
          background: linear-gradient(90deg, #a78bfa, #6366f1);
          border-radius: 28px 28px 0 0;
        }

        .feature-item {
          padding: 20px;
          transition: transform 0.3s ease;
        }

        .feature-item:hover {
          transform: translateY(-8px);
        }

        .feature-number {
          font-size: 72px;
          font-weight: 800;
          background: linear-gradient(135deg, #a78bfa 0%, #6366f1 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin-bottom: 16px;
          filter: drop-shadow(0 0 20px rgba(99, 102, 241, 0.4));
        }

        .feature-label {
          font-size: 28px;
          color: #f9fafb;
          margin-bottom: 12px;
          line-height: 1.3;
        }

        .feature-desc {
          font-size: 16px;
          color: #9ca3af;
          line-height: 1.6;
        }

        /* CTA Button */
        .cta-button {
          background: linear-gradient(135deg, #a78bfa 0%, #6366f1 100%);
          color: #ffffff;
          padding: 18px 48px;
          border-radius: 12px;
          font-size: 18px;
          font-weight: 600;
          border: none;
          cursor: pointer;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          box-shadow: 0 10px 30px rgba(99, 102, 241, 0.4);
        }

        .cta-button:hover {
          background: linear-gradient(135deg, #8b5cf6 0%, #4f46e5 100%);
          transform: translateY(-4px) scale(1.02);
          box-shadow: 0 20px 40px rgba(99, 102, 241, 0.6);
        }

        /* Responsive */
        @media (max-width: 768px) {
          .features-card {
            padding: 40px 30px;
            margin-bottom: 60px;
          }

          .feature-number {
            font-size: 56px;
          }

          .feature-label {
            font-size: 24px;
          }

          .feature-desc {
            font-size: 15px;
          }

          .cta-button {
            padding: 16px 40px;
            font-size: 16px;
          }
        }

        @media (max-width: 480px) {
          .features-card {
            padding: 30px 20px;
          }

          .feature-number {
            font-size: 48px;
          }

          .feature-label {
            font-size: 20px;
          }

          .feature-desc {
            font-size: 14px;
          }

          .cta-button {
            padding: 14px 32px;
            font-size: 15px;
          }
        }
      `}</style>
    </>
  );
}

export default Digilast;
