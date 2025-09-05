
// import React from "react";
// import { FaUserShield, FaLock, FaKey } from "react-icons/fa";
// import DownloadImage from "../../../assets/HeroImages/DownloadImage.jpg"; // ✅ Correct path
// import WhyChooseIAM from "./WhyChoose";

// const IAMLanding = () => {
//   return (
//     <>
//     <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
//       {/* Background Image */}
//       <div
//         className="absolute inset-0 bg-cover bg-center"
//         style={{
//           backgroundImage: `url(${DownloadImage})`,
//         }}
//       >
//         <div className="absolute inset-0 bg-black/70"></div>
//       </div>

//       {/* Hero Content */}
//       <div className="relative z-10 max-w-4xl px-6 text-center mt-20">
//         <div className="backdrop-blur-lg bg-white/10 border border-white/20 rounded-2xl p-10 shadow-xl">
//           <h1 className="text-5xl md:text-6xl font-extrabold text-teal-400 mb-6">
//             SECURE YOUR ACCESS TODAY
//           </h1>
//           <p className="text-gray-200 mb-8">
//             Identity and Access Management (IAM) ensures the right people
//             have the right access to the right resources — protecting your
//             business with intelligent, scalable security.
//           </p>
//           <button className="bg-teal-500 hover:bg-teal-600 text-black font-bold px-6 py-3 rounded-lg transition">
//             Get Started
//           </button>
//         </div>
//       </div>

//       {/* Feature Cards */}
//       <div className="relative z-10 w-full px-6 mt-16 mb-16">
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
//           {/* Card 1 */}
//           <div className="backdrop-blur-lg bg-white/10 border border-white/20 rounded-2xl p-6 shadow-lg text-center">
//             <FaUserShield className="text-4xl text-teal-400 mx-auto mb-4" />
//             <h3 className="text-xl font-semibold text-white">Identity Protection</h3>
//             <p className="text-gray-300 mt-2">
//               Safeguard digital identities with secure and scalable solutions.
//             </p>
//           </div>

//           {/* Card 2 */}
//           <div className="backdrop-blur-lg bg-white/10 border border-white/20 rounded-2xl p-6 shadow-lg text-center">
//             <FaLock className="text-4xl text-teal-400 mx-auto mb-4" />
//             <h3 className="text-xl font-semibold text-white">Access Control</h3>
//             <p className="text-gray-300 mt-2">
//               Ensure only authorized users access the right resources.
//             </p>
//           </div>

//           {/* Card 3 */}
//           <div className="backdrop-blur-lg bg-white/10 border border-white/20 rounded-2xl p-6 shadow-lg text-center">
//             <FaKey className="text-4xl text-teal-400 mx-auto mb-4" />
//             <h3 className="text-xl font-semibold text-white">Single Sign-On</h3>
//             <p className="text-gray-300 mt-2">
//               Streamline login with secure and seamless single sign-on.
//             </p>
//           </div>
//         </div>
//       </div>
//     </section>

//         <WhyChooseIAM />
//         </>
//   );
// };

// export default IAMLanding;
import React from "react";
import { FaUserShield, FaLock, FaKey } from "react-icons/fa";
import DownloadImage from "../../../assets/HeroImages/DownloadImage.jpg"; // ✅ Correct path
import WhyChooseIAM from "./WhyChoose";
import IAMBenefits from "./IAMBenefit";

const IAMLanding = () => {
  return (
    <>
      <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${DownloadImage})`,
          }}
        >
          <div className="absolute inset-0 bg-black/70"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-4xl px-6 text-center mt-20">
          <div className="backdrop-blur-lg bg-white/10 border border-white/20 rounded-2xl p-10 shadow-xl">
            <h1 className="text-5xl md:text-6xl font-extrabold text-teal-400 mb-6">
              Empower Your Business with Smarter Access
            </h1>
            <p className="text-gray-200 mb-8 text-lg">
              Our Identity and Access Management (IAM) solutions simplify how
              users connect to applications, data, and systems—while ensuring
              top-level security, compliance, and scalability for your growing
              business.
            </p>
            <button className="bg-teal-500 hover:bg-teal-600 text-black font-bold px-6 py-3 rounded-lg transition">
              Get Started
            </button>
          </div>
        </div>

        {/* Feature Cards */}
        <div className="relative z-10 w-full px-6 mt-16 mb-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {/* Card 1 */}
            <div className="backdrop-blur-lg bg-white/10 border border-white/20 rounded-2xl p-6 shadow-lg text-center">
              <FaUserShield className="text-4xl text-teal-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white">
                Identity Protection
              </h3>
              <p className="text-gray-300 mt-2">
                Safeguard digital identities with secure and scalable solutions.
              </p>
            </div>

            {/* Card 2 */}
            <div className="backdrop-blur-lg bg-white/10 border border-white/20 rounded-2xl p-6 shadow-lg text-center">
              <FaLock className="text-4xl text-teal-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white">Access Control</h3>
              <p className="text-gray-300 mt-2">
                Ensure only authorized users access the right resources.
              </p>
            </div>

            {/* Card 3 */}
            <div className="backdrop-blur-lg bg-white/10 border border-white/20 rounded-2xl p-6 shadow-lg text-center">
              <FaKey className="text-4xl text-teal-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white">Single Sign-On</h3>
              <p className="text-gray-300 mt-2">
                Streamline login with secure and seamless single sign-on.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose IAM Section */}
      <WhyChooseIAM />
      <IAMBenefits />
    </>
  );
};

export default IAMLanding;
