import iconone from "/src/assets/erpasseet/supply chain.png";
import icontwo from "/src/assets/erpasseet/financial.png";
import iconthree from "/src/assets/erpasseet/human resourse.png";
import iconfour from "/src/assets/erpasseet/sales.png";

function Whaterp() {
    return (
        <div className="bg-transparent py-16 px-4 min-h-screen relative overflow-hidden">
            <div className="max-w-7xl mx-auto relative z-10">
                {/* Main Heading */}
                <h1 
                    className="text-5xl md:text-6xl  text-center mb-6 bg-gradient-to-r from-white via-[#dfe1ff] to-[#a9afff] bg-clip-text text-transparent"
                    style={{ fontFamily: 'DeaconTest, sans-serif' }}
                >
                   ERP Explained
                </h1>

        {/* Subheading */}
        <p
          className="text-xl md:text-2xl text-[#c7cbff] text-center mb-12 max-w-4xl mx-auto"
          style={{ fontFamily: "anta, sans-serif" }}
        >
          Enterprise Resource Planning connects all your business processes in
          one intelligent system for seamless operations
        </p>

        {/* Main Content Card */}
        <div className="bg-[#7C86FF10] backdrop-blur-lg rounded-2xl shadow-[0_0_20px_rgba(124,134,255,0.15)] border border-[#7C86FF30] p-8 md:p-12 hover:border-[#7C86FF40] hover:shadow-[0_0_40px_rgba(124,134,255,0.35)] transition-all duration-300">
          {/* Main Definition */}
          <div className="text-center mb-10">
            <p
              className="text-xl md:text-2xl text-gray-200 leading-relaxed"
              style={{ fontFamily: "anta, sans-serif" }}
            >
              <span className="font-bold bg-gradient-to-r from-white via-[#dfe1ff] to-[#a9afff] bg-clip-text text-transparent">
                Enterprise Resource Planning (ERP)
              </span>{" "}
              is an integrated software platform that manages and automates core
              business processes across finance, HR, supply chain,
              manufacturing, and operations
            </p>
          </div>

          {/* Core Modules Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {/* Module 1 - Financial (icon2) */}
            <div className="group bg-gradient-to-br from-[#7C86FF]/10 to-[#7C86FF]/5 border border-[#7C86FF]/20 p-6 rounded-xl hover:border-[#7C86FF]/40 hover:scale-105 transition-all duration-300 backdrop-blur-sm">
              <img src={icontwo} alt="Financial" className="w-16 h-16 mb-4 object-contain" />
              <h3
                className="text-xl font-bold mb-3 text-white"
                style={{ fontFamily: "DeaconTest, sans-serif" }}
              >
                Financial Management
              </h3>
              <p
                className="text-[#c7cbff] text-sm"
                style={{ fontFamily: "anta, sans-serif" }}
              >
                Handle accounting, budgeting, invoicing, and financial reporting
                in real-time
              </p>
            </div>

            {/* Module 2 - Human Resources (icon3) */}
            <div className="group bg-gradient-to-br from-[#7C86FF]/10 to-[#7C86FF]/5 border border-[#7C86FF]/20 p-6 rounded-xl hover:border-[#7C86FF]/40 hover:scale-105 transition-all duration-300 backdrop-blur-sm">
              <img src={iconthree} alt="HR" className="w-16 h-16 mb-4 object-contain" />
              <h3
                className="text-xl font-bold mb-3 text-white"
                style={{ fontFamily: "DeaconTest, sans-serif" }}
              >
                Human Resources
              </h3>
              <p
                className="text-[#c7cbff] text-sm"
                style={{ fontFamily: "anta, sans-serif" }}
              >
                Manage payroll, recruitment, attendance, performance reviews,
                and employee data
              </p>
            </div>

            {/* Module 3 - Supply Chain (icon1) */}
            <div className="group bg-gradient-to-br from-[#7C86FF]/10 to-[#7C86FF]/5 border border-[#7C86FF]/20 p-6 rounded-xl hover:border-[#7C86FF]/40 hover:scale-105 transition-all duration-300 backdrop-blur-sm">
              <img src={iconone} alt="Supply Chain" className="w-16 h-16 mb-4 object-contain" />
              <h3
                className="text-xl font-bold mb-3 text-white"
                style={{ fontFamily: "DeaconTest, sans-serif" }}
              >
                Supply Chain
              </h3>
              <p
                className="text-[#c7cbff] text-sm"
                style={{ fontFamily: "anta, sans-serif" }}
              >
                Track inventory, procurement, warehousing, and logistics across
                locations
              </p>
            </div>

            {/* Module 4 - Manufacturing */}
            <div className="group bg-gradient-to-br from-[#7C86FF]/10 to-[#7C86FF]/5 border border-[#7C86FF]/20 p-6 rounded-xl hover:border-[#7C86FF]/40 hover:scale-105 transition-all duration-300 backdrop-blur-sm">
              <div className="text-5xl mb-4">🏭</div>
              <h3
                className="text-xl font-bold mb-3 text-white"
                style={{ fontFamily: "DeaconTest, sans-serif" }}
              >
                Manufacturing
              </h3>
              <p
                className="text-[#c7cbff] text-sm"
                style={{ fontFamily: "anta, sans-serif" }}
              >
                Plan production, manage workflows, quality control, and
                equipment maintenance
              </p>
            </div>

            {/* Module 5 - Sales & CRM (icon4) */}
            <div className="group bg-gradient-to-br from-[#7C86FF]/10 to-[#7C86FF]/5 border border-[#7C86FF]/20 p-6 rounded-xl hover:border-[#7C86FF]/40 hover:scale-105 transition-all duration-300 backdrop-blur-sm">
              <img src={iconfour} alt="Sales" className="w-16 h-16 mb-4 object-contain" />
              <h3
                className="text-xl font-bold mb-3 text-white"
                style={{ fontFamily: "DeaconTest, sans-serif" }}
              >
                Sales & CRM
              </h3>
              <p
                className="text-[#c7cbff] text-sm"
                style={{ fontFamily: "anta, sans-serif" }}
              >
                Monitor sales pipelines, customer relationships, and order
                fulfillment
              </p>
            </div>

            {/* Module 6 - Analytics */}
            <div className="group bg-gradient-to-br from-[#7C86FF]/10 to-[#7C86FF]/5 border border-[#7C86FF]/20 p-6 rounded-xl hover:border-[#7C86FF]/40 hover:scale-105 transition-all duration-300 backdrop-blur-sm">
              <div className="text-5xl mb-4">📊</div>
              <h3
                className="text-xl font-bold mb-3 text-white"
                style={{ fontFamily: "DeaconTest, sans-serif" }}
              >
                Analytics & BI
              </h3>
              <p
                className="text-[#c7cbff] text-sm"
                style={{ fontFamily: "anta, sans-serif" }}
              >
                Generate insights with real-time dashboards, reports, and
                predictive analytics
              </p>
            </div>
          </div>

          {/* How ERP Works Section */}
          <div className="mt-16">
            <h2
              className="text-3xl md:text-4xl font-bold text-center mb-8 bg-gradient-to-r from-white via-[#dfe1ff] to-[#a9afff] bg-clip-text text-transparent"
              style={{ fontFamily: "DeaconTest, sans-serif" }}
            >
              How ERP Works
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Step 1 */}
              <div className="relative">
                <div className="flex items-start space-x-4">
                  <div
                    className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-[#7C86FF] to-[#a9afff] rounded-full flex items-center justify-center text-white font-bold text-xl"
                    style={{ fontFamily: "DeaconTest, sans-serif" }}
                  >
                    1
                  </div>
                  <div>
                    <h3
                      className="text-xl font-bold text-white mb-2"
                      style={{ fontFamily: "DeaconTest, sans-serif" }}
                    >
                      Centralized Database
                    </h3>
                    <p
                      className="text-[#c7cbff] text-sm"
                      style={{ fontFamily: "anta, sans-serif" }}
                    >
                      All departments input data into a single unified system,
                      eliminating data silos
                    </p>
                  </div>
                </div>
              </div>

              {/* Step 2 */}
              <div className="relative">
                <div className="flex items-start space-x-4">
                  <div
                    className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-[#7C86FF] to-[#a9afff] rounded-full flex items-center justify-center text-white font-bold text-xl"
                    style={{ fontFamily: "DeaconTest, sans-serif" }}
                  >
                    2
                  </div>
                  <div>
                    <h3
                      className="text-xl font-bold text-white mb-2"
                      style={{ fontFamily: "DeaconTest, sans-serif" }}
                    >
                      Real-Time Processing
                    </h3>
                    <p
                      className="text-[#c7cbff] text-sm"
                      style={{ fontFamily: "anta, sans-serif" }}
                    >
                      System processes transactions instantly and updates all
                      connected modules automatically
                    </p>
                  </div>
                </div>
              </div>

              {/* Step 3 */}
              <div className="relative">
                <div className="flex items-start space-x-4">
                  <div
                    className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-[#7C86FF] to-[#a9afff] rounded-full flex items-center justify-center text-white font-bold text-xl"
                    style={{ fontFamily: "DeaconTest, sans-serif" }}
                  >
                    3
                  </div>
                  <div>
                    <h3
                      className="text-xl font-bold text-white mb-2"
                      style={{ fontFamily: "DeaconTest, sans-serif" }}
                    >
                      Insights & Actions
                    </h3>
                    <p
                      className="text-[#c7cbff] text-sm"
                      style={{ fontFamily: "anta, sans-serif" }}
                    >
                      Analytics tools generate reports enabling data-driven
                      decisions across your organization
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Key Benefits */}
          <div className="mt-16 pt-8 border-t border-[#7C86FF]/20">
            <h2
              className="text-3xl md:text-4xl font-bold text-center mb-8 bg-gradient-to-r from-white via-[#dfe1ff] to-[#a9afff] bg-clip-text text-transparent"
              style={{ fontFamily: "DeaconTest, sans-serif" }}
            >
              Why Businesses Need ERP
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start space-x-4 bg-gradient-to-r from-[#7C86FF]/5 to-transparent border border-[#7C86FF]/20 p-5 rounded-lg hover:border-[#7C86FF]/40 transition-all">
                <span className="text-3xl">🔗</span>
                <div>
                  <h4
                    className="font-bold text-white mb-2 text-lg"
                    style={{ fontFamily: "DeaconTest, sans-serif" }}
                  >
                    Eliminate Data Silos
                  </h4>
                  <p
                    className="text-[#c7cbff] text-sm"
                    style={{ fontFamily: "anta, sans-serif" }}
                  >
                    Break down departmental barriers with integrated data
                    accessible across your organization
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 bg-gradient-to-r from-[#7C86FF]/5 to-transparent border border-[#7C86FF]/20 p-5 rounded-lg hover:border-[#7C86FF]/40 transition-all">
                <span className="text-3xl">⚡</span>
                <div>
                  <h4
                    className="font-bold text-white mb-2 text-lg"
                    style={{ fontFamily: "DeaconTest, sans-serif" }}
                  >
                    Boost Efficiency
                  </h4>
                  <p
                    className="text-[#c7cbff] text-sm"
                    style={{ fontFamily: "anta, sans-serif" }}
                  >
                    Automate repetitive tasks and streamline workflows to save
                    time and reduce errors
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 bg-gradient-to-r from-[#7C86FF]/5 to-transparent border border-[#7C86FF]/20 p-5 rounded-lg hover:border-[#7C86FF]/40 transition-all">
                <span className="text-3xl">📈</span>
                <div>
                  <h4
                    className="font-bold text-white mb-2 text-lg"
                    style={{ fontFamily: "DeaconTest, sans-serif" }}
                  >
                    Better Decision Making
                  </h4>
                  <p
                    className="text-[#c7cbff] text-sm"
                    style={{ fontFamily: "anta, sans-serif" }}
                  >
                    Access accurate, real-time data to make informed strategic
                    business decisions
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 bg-gradient-to-r from-[#7C86FF]/5 to-transparent border border-[#7C86FF]/20 p-5 rounded-lg hover:border-[#7C86FF]/40 transition-all">
                <span className="text-3xl">🚀</span>
                <div>
                  <h4
                    className="font-bold text-white mb-2 text-lg"
                    style={{ fontFamily: "DeaconTest, sans-serif" }}
                  >
                    Scale with Confidence
                  </h4>
                  <p
                    className="text-[#c7cbff] text-sm"
                    style={{ fontFamily: "anta, sans-serif" }}
                  >
                    ERP systems grow with your business, supporting expansion
                    without system changes
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Whaterp;
