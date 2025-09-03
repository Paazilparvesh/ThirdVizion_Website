// // import React from "react";
// // import { motion } from "framer-motion";

// // // Your project data
// // const projects = [
// //   {
// //     title: "Madras Kitchen",
// //     screenshot: "/images/madraskitchen.png", // replace with real screenshot
// //     description: "Authentic Indian restaurant website with modern design.",
// //     tech: ["WordPress", "WooCommerce", "Custom Theme"],
// //     live: "https://madraskitchen.ca/",
// //     github: "" // if available
// //   },
// //   {
// //     title: "Kumaran Yoga Studio",
// //     screenshot: "/images/yoga.png",
// //     description: "Yoga studio website for classes, schedules, and memberships.",
// //     tech: ["WordPress", "Elementor"],
// //     live: "https://kumaranyogastudio.com/",
// //     github: ""
// //   },
// //   {
// //     title: "AMSI NGO",
// //     screenshot: "/images/amsi.png",
// //     description: "Non-profit organization website showcasing mission and projects.",
// //     tech: ["WordPress", "PHP"],
// //     live: "https://amsi-ngo.com/",
// //     github: ""
// //   },
// //   {
// //     title: "LMS Platform Demo",
// //     screenshot: "/images/lms.png",
// //     description: "Interactive learning management system for online education.",
// //     tech: ["React", "Node.js", "Tailwind CSS"],
// //     live: "https://lmsdemo.thirdvizion.com/",
// //     github: "https://github.com/yourname/lms"
// //   },
// //   {
// //     title: "Spinz Reward",
// //     screenshot: "/images/spinz.png",
// //     description: "Rewards and loyalty portal encouraging user engagement.",
// //     tech: ["Next.js", "NextAuth", "Stripe"],
// //     live: "https://spinzreward.site/",
// //     github: "https://github.com/yourname/spinz"
// //   }
// // ];

// // export default function ProjectGallery() {
// //   return (
// //     <div className="p-8 bg-gray-50 min-h-screen">
// //       <h2 className="text-3xl font-bold text-center mb-10">My Projects</h2>

// //       {/* Grid Layout */}
// //       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
// //         {projects.map((p, i) => (
// //           <motion.div
// //             key={i}
// //             whileHover={{ scale: 1.05 }}
// //             className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition"
// //           >
// //             {/* Project Image */}
// //             <img
// //               src={p.screenshot}
// //               alt={p.title}
// //               className="w-full h-48 object-cover"
// //             />

// //             {/* Card Content */}
// //             <div className="p-5">
// //               <h3 className="text-xl font-semibold">{p.title}</h3>
// //               <p className="text-gray-600 mt-2">{p.description}</p>

// //               {/* Tech badges */}
// //               <div className="flex flex-wrap gap-2 mt-3">
// //                 {p.tech.map((t, idx) => (
// //                   <span
// //                     key={idx}
// //                     className="text-xs bg-gray-200 px-2 py-1 rounded"
// //                   >
// //                     {t}
// //                   </span>
// //                 ))}
// //               </div>

// //               {/* Links */}
// //               <div className="flex space-x-4 mt-4">
// //                 <a
// //                   href={p.live}
// //                   target="_blank"
// //                   rel="noopener noreferrer"
// //                   className="text-blue-600 hover:underline"
// //                 >
// //                   Live Demo
// //                 </a>
// //                 {p.github && (
// //                   <a
// //                     href={p.github}
// //                     target="_blank"
// //                     rel="noopener noreferrer"
// //                     className="text-gray-700 hover:underline"
// //                   >
// //                     GitHub
// //                   </a>
// //                 )}
// //               </div>
// //             </div>
// //           </motion.div>
// //         ))}
// //       </div>
// //     </div>
// //   );
// // }
// import React from "react";
// import { motion } from "framer-motion";
// import { FaArrowRight } from "react-icons/fa";

// const projects = [
//   {
//     title: "Madras Kitchen",
//     screenshot: "https://via.placeholder.com/600x400?text=Madras+Kitchen",
//     live: "https://madraskitchen.ca/",
//   },
//   {
//     title: "Kumaran Yoga Studio",
//     screenshot: "https://via.placeholder.com/600x400?text=Yoga+Studio",
//     live: "https://kumaranyogastudio.com/",
//   },
//   {
//     title: "AMSI NGO",
//     screenshot: "https://via.placeholder.com/600x400?text=AMSI+NGO",
//     live: "https://amsi-ngo.com/",
//   },
//   {
//     title: "LMS Platform Demo",
//     screenshot: "https://via.placeholder.com/600x400?text=LMS+Platform",
//     live: "https://lmsdemo.thirdvizion.com/",
//   },
//   {
//     title: "Spinz Reward",
//     screenshot: "https://via.placeholder.com/600x400?text=Spinz+Reward",
//     live: "https://spinzreward.site/",
//   },
// ];

// export default function ProjectScrollGallery() {
//   return (
//     <section className="bg-black py-16 px-6">
//       <div className="max-w-7xl mx-auto">
//         {/* Title */}
//         <h2 className="text-4xl font-bold text-white mb-8">PROJECTS</h2>

//         {/* Horizontal Scroll */}
//         <div className="flex space-x-6 overflow-x-auto scrollbar-hide pb-4">
//           {projects.map((p, i) => (
//             <motion.a
//               key={i}
//               href={p.live}
//               target="_blank"
//               rel="noopener noreferrer"
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5, delay: i * 0.2 }}
//               className="relative flex-shrink-0 w-72 h-96 rounded-xl overflow-hidden group"
//             >
//               {/* Image */}
//               <img
//                 src={p.screenshot}
//                 alt={p.title}
//                 className="w-full h-full object-cover"
//               />

//               {/* Overlay */}
//               <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent flex flex-col justify-end p-4">
//                 <h3 className="text-lg font-semibold text-white mb-2">
//                   {p.title}
//                 </h3>
//                 <div className="text-blue-400 flex items-center space-x-2 group-hover:translate-x-1 transition">
//                   <span className="text-sm font-medium">View</span>
//                   <FaArrowRight />
//                 </div>
//               </div>
//             </motion.a>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }
// import React from "react";
// import { motion } from "framer-motion";
// import { FaArrowRight } from "react-icons/fa";

// const projects = [
//   {
//     title: "Madras Kitchen",
//     screenshot: "https://via.placeholder.com/600x400?text=Madras+Kitchen",
//     live: "https://madraskitchen.ca/",
//     tools: ["React", "Tailwind", "Firebase"],
//   },
//   {
//     title: "Kumaran Yoga Studio",
//     screenshot: "https://via.placeholder.com/600x400?text=Yoga+Studio",
//     live: "https://kumaranyogastudio.com/",
//     tools: ["WordPress", "Elementor", "PHP"],
//   },
//   {
//     title: "AMSI NGO",
//     screenshot: "https://via.placeholder.com/600x400?text=AMSI+NGO",
//     live: "https://amsi-ngo.com/",
//     tools: ["HTML", "CSS", "JavaScript"],
//   },
//   {
//     title: "LMS Platform Demo",
//     screenshot: "https://via.placeholder.com/600x400?text=LMS+Platform",
//     live: "https://lmsdemo.thirdvizion.com/",
//     tools: ["React", "Node.js", "Express", "MongoDB"],
//   },
//   {
//     title: "Spinz Reward",
//     screenshot: "https://via.placeholder.com/600x400?text=Spinz+Reward",
//     live: "https://spinzreward.site/",
//     tools: ["Next.js", "Tailwind", "Supabase"],
//   },
// ];

// export default function ProjectScrollGallery() {
//   return (
//     <section className="bg-black py-16 px-6 overflow-hidden">
//       <div className="max-w-7xl mx-auto">
//         {/* Title */}
//         <h2 className="text-4xl font-bold TEXT-gradient-to-r from-yellow-400 to-red-400 text-black mb-8">OUR PROJECTS</h2>

//         {/* Auto-Scroll Container */}
//         <div className="relative w-full overflow-hidden">
//           <div className="flex space-x-6 animate-marquee">
//             {/* Duplicate list for seamless loop */}
//             {[...projects, ...projects].map((p, i) => (
//               <motion.div
//                 key={i}
//                 className="relative flex-shrink-0 w-72 h-96 rounded-xl overflow-hidden group cursor-pointer"
//               >
//                 {/* Image */}
//                 <img
//                   src={p.screenshot}
//                   alt={p.title}
//                   className="w-full h-full object-cover"
//                 />

//                 {/* Default Overlay */}
//                 <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent flex flex-col justify-end p-4 transition duration-500">
//                   <h3 className="text-lg font-semibold text-yellow-400 mb-2">
//                     {p.title}
//                   </h3>
//                   <div className="text-yellow-400 flex items-center space-x-2 group-hover:translate-x-1 transition">
//                     <span className="text-sm font-medium">View</span>
//                     <FaArrowRight />
//                   </div>
//                 </div>

//                 {/* Hover Overlay */}
//                 <div className="absolute inset-0 bg-black bg-opacity-95 opacity-0 group-hover:opacity-100 transition duration-500 flex flex-col items-center justify-center text-center p-6">
//                   <h3 className="text-xl font-semibold text-yellow-400 mb-4">
//                     {p.title}
//                   </h3>
//                   <p className="text-sm text-yellow-400 mb-2">
//                     Tools & Technologies:
//                   </p>
//                   <ul className="text-sm text-yellow-400 space-y-1">
//                     {p.tools.map((tool, idx) => (
//                       <li key={idx}>• {tool}</li>
//                     ))}
//                   </ul>
//                   <a
//                     href={p.live}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="mt-4 px-4 py-2 bg-yellow-400 text-black font-semibold rounded-full shadow-md hover:scale-105 transition"
//                   >
//                     Visit Project
//                   </a>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Custom CSS for scrolling */}
//       <style>{`
//         .animate-marquee {
//           display: flex;
//           width: max-content;
//           animation: marquee 30s linear infinite;
//         }
//         @keyframes marquee {
//           from { transform: translateX(0%); }
//           to { transform: translateX(-50%); }
//         }
//       `}</style>
//     </section>
//   );
// }
// import React from "react";
// import { motion } from "framer-motion";
// import { FaArrowRight } from "react-icons/fa";

// const projects = [
//   {
//     title: "Madras Kitchen",
//     screenshot: "https://via.placeholder.com/600x400?text=Madras+Kitchen",
//     live: "https://madraskitchen.ca/",
//     tools: ["React", "Tailwind", "Firebase"],
//   },
//   {
//     title: "Kumaran Yoga Studio",
//     screenshot: "https://via.placeholder.com/600x400?text=Yoga+Studio",
//     live: "https://kumaranyogastudio.com/",
//     tools: ["WordPress", "Elementor", "PHP"],
//   },
//   {
//     title: "AMSI NGO",
//     screenshot: "https://via.placeholder.com/600x400?text=AMSI+NGO",
//     live: "https://amsi-ngo.com/",
//     tools: ["HTML", "CSS", "JavaScript"],
//   },
//   {
//     title: "LMS Platform Demo",
//     screenshot: "https://via.placeholder.com/600x400?text=LMS+Platform",
//     live: "https://lmsdemo.thirdvizion.com/",
//     tools: ["React", "Node.js", "Express", "MongoDB"],
//   },
//   {
//     title: "Spinz Reward",
//     screenshot: "https://via.placeholder.com/600x400?text=Spinz+Reward",
//     live: "https://spinzreward.site/",
//     tools: ["Next.js", "Tailwind", "Supabase"],
//   },
// ];

// export default function ProjectGallery() {
//   return (
//     <section className="bg-black py-16 px-6">
//       <div className="max-w-7xl mx-auto">
//         {/* Title */}
//         <h2 className="text-4xl font-bold bg-gradient-to-r from-yellow-400 to-red-400 bg-clip-text text-transparent mb-12">
//           OUR PROJECTS
//         </h2>

//         {/* Grid Gallery */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//           {projects.map((p, i) => (
//             <motion.div
//               key={i}
//               whileHover={{ scale: 1.05 }}
//               className="relative rounded-xl overflow-hidden group shadow-lg"
//             >
//               {/* Image */}
//               <img
//                 src={p.screenshot}
//                 alt={p.title}
//                 className="w-full h-64 object-cover"
//               />

//               {/* Overlay (Default) */}
//               <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent flex flex-col justify-end p-4 transition duration-500">
//                 <h3 className="text-lg font-semibold text-yellow-400 mb-2">
//                   {p.title}
//                 </h3>
//                 <div className="text-yellow-400 flex items-center space-x-2 group-hover:translate-x-1 transition">
//                   <span className="text-sm font-medium">View</span>
//                   <FaArrowRight />
//                 </div>
//               </div>

//               {/* Hover Overlay */}
//               <div className="absolute inset-0 bg-black bg-opacity-95 opacity-0 group-hover:opacity-100 transition duration-500 flex flex-col items-center justify-center text-center p-6">
//                 <h3 className="text-xl font-semibold text-yellow-400 mb-4">
//                   {p.title}
//                 </h3>
//                 <p className="text-sm text-yellow-400 mb-2">
//                   Tools & Technologies:
//                 </p>
//                 <ul className="text-sm text-yellow-400 space-y-1">
//                   {p.tools.map((tool, idx) => (
//                     <li key={idx}>• {tool}</li>
//                   ))}
//                 </ul>
//                 <a
//                   href={p.live}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="mt-4 px-4 py-2 bg-yellow-400 text-black font-semibold rounded-full shadow-md hover:scale-105 transition"
//                 >
//                   Visit Project
//                 </a>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }
import React from "react";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

// ✅ Clean imports using alias
import amsi from "@/assets/HeroImages/amsi-go.png";
import madras from "@/assets/HeroImages/madraskitchen.png";
import scopik from "@/assets/HeroImages/scopik.png";
import spinz from "@/assets/HeroImages/spinz.png";

// ✅ Projects Array
const projects = [
  {
    title: "AMSI NGO",
    screenshot: amsi,
    live: "https://amsi-ngo.com/",
    tools: ["HTML", "CSS", "JavaScript"],
  },
  {
    title: "Madras Kitchen",
    screenshot: madras,
    live: "https://madraskitchen.ca/",
    tools: ["React", "Tailwind", "Firebase"],
  },
  {
    title: "Scopik",
    screenshot: scopik,
    live: "https://scopik.com/",
    tools: ["Next.js", "Tailwind", "Supabase"],
  },
  {
    title: "Spinz Reward",
    screenshot: spinz,
    live: "https://spinzreward.site/",
    tools: ["Next.js", "Tailwind", "Supabase"],
  },
];

export default function ProjectGallery() {
  return (
    <section className="bg-black py-16 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        {/* <h2 className="text-4xl font-bold bg-gradient-to-r from-yellow-400 to-red-400 bg-clip-text text-transparent mb-8">
          OUR PROJECTS
        </h2> */}
        <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-yellow-400 via-blue-500 to-red-500 bg-clip-text text-transparent mb-6">
OUR PROJECTS          </h1>


        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((p, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="relative w-full h-80 rounded-xl overflow-hidden group cursor-pointer border-2 border-yellow-400"
            >
              {/* Image */}
              <img
                src={p.screenshot}
                alt={p.title}
                className="w-full h-full object-cover"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition duration-500 flex flex-col items-center justify-center text-center p-6">
                <h3 className="text-xl font-semibold text-yellow-400 mb-4">
                  {p.title}
                </h3>
                <p className="text-sm text-yellow-400 mb-2">
                  Tools & Technologies:
                </p>
                <ul className="text-sm text-yellow-400 space-y-1">
                  {p.tools.map((tool, idx) => (
                    <li key={idx}>• {tool}</li>
                  ))}
                </ul>
                <a
                  href={p.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 px-4 py-2 bg-yellow-400 text-black font-semibold rounded-full shadow-md hover:scale-105 transition"
                >
                  Visit Project
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
