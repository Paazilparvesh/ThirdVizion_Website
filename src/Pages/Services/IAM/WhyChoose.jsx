// import React from "react";
// import { FaChartBar, FaSearch, FaCogs, FaLock } from "react-icons/fa";

// const WhyChooseIAM = () => {
//   const steps = [
//     {
//       id: 1,
//       title: "Stronger Security",
//       description:
//         "Ensure only the right people have access to the right resources with intelligent authentication.",
//       icon: <FaChartBar className="text-4xl text-teal-400" />,
//     },
//     {
//       id: 2,
//       title: "Seamless Access",
//       description:
//         "Single sign-on and adaptive login provide users a smooth experience without compromising safety.",
//       icon: <FaSearch className="text-4xl text-teal-400" />,
//     },
//     {
//       id: 3,
//       title: "Scalability",
//       description:
//         "IAM grows with your organization, adapting to workforce and customer needs with ease.",
//       icon: <FaCogs className="text-4xl text-teal-400" />,
//     },
//     {
//       id: 4,
//       title: "Compliance Ready",
//       description:
//         "Meet regulations like GDPR, HIPAA, and ISO with automated audit trails and access controls.",
//       icon: <FaLock className="text-4xl text-teal-400" />,
//     },
//   ];

//   return (
//     <section className="relative min-h-screen bg-black text-white flex items-center justify-center px-6 py-16">
//       <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e')] bg-cover bg-center opacity-30"></div>
      
//       <div className="relative max-w-3xl w-full space-y-6">
//         {steps.map((step) => (
//           <div
//             key={step.id}
//             className="relative flex items-center bg-white/10 backdrop-blur-lg rounded-xl shadow-lg p-6 border border-white/20"
//           >
//             {/* Icon + Number */}
//             <div className="flex-shrink-0 flex flex-col items-center justify-center mr-4">
//               <div className="w-12 h-12 flex items-center justify-center rounded-full bg-white/10 border border-white/20">
//                 {step.icon}
//               </div>
//               <span className="mt-2 text-teal-400 font-bold text-xl">
//                 {String(step.id).padStart(2, "0")}
//               </span>
//             </div>

//             {/* Content */}
//             <div>
//               <h3 className="text-lg font-semibold text-teal-400">
//                 {step.title}
//               </h3>
//               <p className="text-sm text-gray-300 mt-1">{step.description}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default WhyChooseIAM;
import React from "react";
import { FaChartBar, FaSearch, FaCogs, FaLock } from "react-icons/fa";
import DownloadImage from "../../../assets/HeroImages/DownloadImage.jpg"; // ✅ fixed path

const WhyChooseIAM = () => {
  const steps = [
    {
      id: 1,
      title: "Stronger Security",
      description:
        "Ensure only the right people have access to the right resources with intelligent authentication.",
      icon: <FaChartBar className="text-4xl text-teal-400" />,
    },
    {
      id: 2,
      title: "Seamless Access",
      description:
        "Single sign-on and adaptive login provide users a smooth experience without compromising safety.",
      icon: <FaSearch className="text-4xl text-teal-400" />,
    },
    {
      id: 3,
      title: "Scalability",
      description:
        "IAM grows with your organization, adapting to workforce and customer needs with ease.",
      icon: <FaCogs className="text-4xl text-teal-400" />,
    },
    {
      id: 4,
      title: "Compliance Ready",
      description:
        "Meet regulations like GDPR, HIPAA, and ISO with automated audit trails and access controls.",
      icon: <FaLock className="text-4xl text-teal-400" />,
    },
  ];

  return (
    <section className="relative min-h-screen bg-black text-white flex items-center justify-center px-6 py-16">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{
          backgroundImage: `url(${DownloadImage})`,
        }}
      >
          <h2 className="text-4xl font-bold text-center text-teal-400 mb-12">CHALLENGES BEFORE CRM
     
      </h2>
      </div>
      

      {/* Timeline Steps */}
      <div className="relative max-w-3xl w-full space-y-6">
        {steps.map((step) => (
          <div
            key={step.id}
            className="relative flex items-center bg-white/10 backdrop-blur-lg rounded-xl shadow-lg p-6 border border-white/20"
          >
            {/* Icon + Number */}
            <div className="flex-shrink-0 flex flex-col items-center justify-center mr-4">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-white/10 border border-white/20">
                {step.icon}
              </div>
              <span className="mt-2 text-teal-400 font-bold text-xl">
                {String(step.id).padStart(2, "0")}
              </span>
            </div>

            {/* Content */}
            <div>
              <h3 className="text-lg font-semibold text-teal-400">
                {step.title}
              </h3>
              <p className="text-sm text-gray-300 mt-1">{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseIAM;
