function Digicon() {
  const processes = [
    {
      number: "01",
      title: "Competitor Analysis",
      description: "A comprehensive research of your competitors offers insights on what we are up against. This includes identifying targeted keywords, analyzing their marketing strategies, and understanding the different marketing channels they use. The data from competitor analysis allows us to devise a strategy that pushes you to the top."
    },
    {
      number: "02",
      title: "Fully-Customized Marketing Strategy",
      description: "With the data from our research, our experts will devise a detailed strategy to meet your business objectives. From using the power of SEO to push your website to the top of Google rankings to leveraging paid advertisements and email marketing campaigns, ThirdVizion meticulously plans each step to meet your business goals."
    },
    {
      number: "03",
      title: "Execution",
      description: "With everything in place, it's time to put things into action. The specialists at ThirdVizion see to it that everything goes as planned, dealing with any challenges that may arise. As a results-driven digital marketing agency, our goal is to ensure that all marketing campaigns are efficiently executed."
    },
    {
      number: "04",
      title: "Reporting",
      description: "Post execution, the next step is to monitor the progress. ThirdVizion is transparent when it comes to reports. At the end of each month, we share a comprehensive report that contains all relevant information about the work we've done and the results achieved."
    },
    {
      number: "05",
      title: "Regular Optimization & Review",
      description: "Digital marketing is an ongoing process. A single algorithm update may impact months of progress. To avoid this, our experts regularly assess the campaigns to ensure they align with changing trends and objectives. If something isn't producing expected results, we'll quickly make the necessary changes to meet your ROI and business goals."
    },
    {
      number: "06",
      title: "Performance Analysis & Scaling",
      description: "After optimizing campaigns, we analyze the overall performance metrics and identify successful strategies. ThirdVizion then scales these winning tactics across multiple channels to maximize your reach and ROI. We continuously test new approaches while maintaining what works, ensuring sustainable growth for your business."
    }
  ];

  return (
    <>
      <div className="digicon-container">
        <div className="digicon-header">
          <h2 className="digicon-title" style={{ fontFamily: "DeaconTest, sans-serif", fontWeight: 600 }}>
            <span className="title-our">Our</span> <span className="title-process">Process</span>
          </h2>
          <p className="digicon-subtitle">
            A systematic approach to drive your digital success
          </p>
        </div>

        <div className="process-grid">
          {processes.map((process, index) => (
            <div key={index} className="process-card">
              <div className="card-header">
                <div className="card-number">{process.number}</div>
                <h3 className="card-title" style={{ fontFamily: "DeaconTest, sans-serif", fontWeight: 600 }}>
                  {process.title}
                </h3>
              </div>
              <div className="card-content">
                <p className="card-description">{process.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="digicon-footer">
          <div className="footer-content">
            <h3 className="footer-title" style={{ fontFamily: "DeaconTest, sans-serif", fontWeight: 600 }}>
              ThirdVizion: Excellence in Digital Marketing
            </h3>
            <p className="footer-description">
              Our ever-growing list of clients proves that we are the best at what we do. 
              Our expertise and experience in all areas of digital marketing, from organic SEO 
              to PPC and social media marketing to web development, allow us to achieve any goal, 
              no matter how challenging it may be.
            </p>
          </div>
        </div>
      </div>

      <style jsx>{`
        .digicon-container {
          background: #000000;
          padding: 100px 20px;
          min-height: 100vh;
          position: relative;
        }

        .digicon-header {
          text-align: center;
          margin-bottom: 80px;
          max-width: 800px;
          margin-left: auto;
          margin-right: auto;
        }

        .digicon-title {
          font-size: 56px;
          margin-bottom: 20px;
          letter-spacing: -0.5px;
          line-height: 1.1;
        }

        .title-our {
          color: #ffffff;
        }

        .title-process {
          color: #FFD700;
          text-shadow: 0 0 30px rgba(255, 215, 0, 0.3);
        }

        .digicon-subtitle {
          font-size: 20px;
          color: #ffffff;
          line-height: 1.6;
          max-width: 600px;
          margin: 0 auto;
          font-weight: 400;
        }

        .process-grid {
          max-width: 1200px;
          margin: 0 auto 80px;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 30px;
        }

        .process-card {
          background: #0a0a0a;
          border: 1px solid #1a1a1a;
          border-radius: 16px;
          padding: 35px;
          position: relative;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          overflow: hidden;
        }

        .process-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 2px;
          background: linear-gradient(90deg, #FFD700, #FFA500);
          opacity: 0;
          transition: opacity 0.4s ease;
        }

        .process-card:hover {
          transform: translateY(-8px);
          border-color: #2a2a2a;
          box-shadow: 0 20px 40px rgba(255, 215, 0, 0.1);
        }

        .process-card:hover::before {
          opacity: 1;
        }

        .card-header {
          display: flex;
          align-items: center;
          gap: 20px;
          margin-bottom: 25px;
        }

        .card-number {
          width: 60px;
          height: 60px;
          border-radius: 12px;
          background: linear-gradient(135deg, #FFD700 0%, #FFA500 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 24px;
          font-weight: 700;
          color: #000000;
          flex-shrink: 0;
          box-shadow: 0 10px 20px rgba(255, 215, 0, 0.3);
          transition: all 0.3s ease;
        }

        .process-card:hover .card-number {
          transform: scale(1.1);
          box-shadow: 0 15px 30px rgba(255, 215, 0, 0.4);
        }

        .card-title {
          font-size: 24px;
          color: #ffffff;
          margin: 0;
          line-height: 1.3;
        }

        .card-content {
          position: relative;
        }

        .card-description {
          font-size: 16px;
          line-height: 1.8;
          color: #ffffff;
          margin: 0;
          font-weight: 400;
        }

        .digicon-footer {
          max-width: 1000px;
          margin: 0 auto;
        }

        .footer-content {
          background: #0a0a0a;
          border: 1px solid #1a1a1a;
          border-radius: 20px;
          padding: 60px 50px;
          text-align: center;
          position: relative;
        }

        .footer-content::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 3px;
          background: linear-gradient(90deg, #FFD700, #FFA500);
          border-radius: 20px 20px 0 0;
        }

        .footer-title {
          font-size: 40px;
          color: #FFD700;
          margin-bottom: 25px;
          line-height: 1.2;
          text-shadow: 0 0 20px rgba(255, 215, 0, 0.2);
        }

        .footer-description {
          font-size: 18px;
          line-height: 1.8;
          color: #ffffff;
          max-width: 800px;
          margin: 0 auto;
          font-weight: 400;
        }

        /* Responsive Design */
        @media (max-width: 1200px) {
          .process-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 768px) {
          .digicon-container {
            padding: 60px 16px;
          }

          .digicon-title {
            font-size: 42px;
          }

          .digicon-subtitle {
            font-size: 18px;
          }

          .process-grid {
            grid-template-columns: 1fr;
            gap: 25px;
          }

          .process-card {
            padding: 30px;
          }

          .card-header {
            flex-direction: column;
            align-items: flex-start;
            gap: 15px;
          }

          .card-number {
            width: 50px;
            height: 50px;
            font-size: 20px;
          }

          .card-title {
            font-size: 22px;
          }

          .card-description {
            font-size: 15px;
          }

          .footer-content {
            padding: 40px 25px;
          }

          .footer-title {
            font-size: 32px;
          }

          .footer-description {
            font-size: 16px;
          }
        }

        @media (max-width: 480px) {
          .digicon-title {
            font-size: 36px;
          }

          .digicon-subtitle {
            font-size: 16px;
          }

          .process-card {
            padding: 25px;
          }

          .card-title {
            font-size: 20px;
          }

          .card-description {
            font-size: 14px;
            line-height: 1.7;
          }

          .footer-title {
            font-size: 28px;
          }
        }
      `}</style>
    </>
  );
}

export default Digicon;
