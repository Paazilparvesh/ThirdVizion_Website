// import { motion, AnimatePresence } from "framer-motion";
// import { Link } from "react-router-dom";
// import { useState, useRef, useEffect } from "react";
// import CRM_Video from "/src/assets/newserviceehome/Corporate_CRM_Video_Generation.mp4";
// import ERP_Video from "ThirdVizion_Website/src/assets/newserviceehome/ERP_Video_Generation_Request.mp4";
// import VR_Video from "ThirdVizion_Website/src/assets/newserviceehome/VR_Video_Generation_Request 1.mp4";
// // ✅ Import images with clear names
// import DesignTool from "/src/assets/newserviceehome/ar.png";
// import Layout from "/src/assets/newserviceehome/3d.png";
// import Component from "/src/assets/newserviceehome/vr.png";
// import Por from "/src/assets/home/mobileapp.jpg";
// import Portal from "/src/assets/newserviceehome/crm.png";
// import Dashboard from "/src/assets/newserviceehome/server.png";
// import Aws from "/src/assets/home/erp.png";
// import Azure from "/src/assets/home/game.jpg";
// import GoogleCloud from "/src/assets/home/web.jpg";

// //icons - updated with proper variable names
// import arIcon from "/src/assets/ourserviceicons/ar.png";
// import crmIcon from "/src/assets/ourserviceicons/crm.png";
// import iamIcon from "/src/assets/ourserviceicons/iam.png";
// import vrIcon from "/src/assets/ourserviceicons/vr.png";
// import threedIcon from "/src/assets/ourserviceicons/3d.png";
// import erpIcon from "/src/assets/ourserviceicons/erp.png";
// import gameIcon from "/src/assets/ourserviceicons/game.png";
// import webIcon from "/src/assets/ourserviceicons/website.png";
// import mobileIcon from "/src/assets/ourserviceicons/mobile.png";

// const capabilitiesData = [
//   // {
//   //   id: "emerging-tech",
//   //   title: "emerging tech",
//   //   desc: "We deliver secure, scalable, and intelligent technology solutions that help businesses manage data efficiently, streamline operations, and enhance customer engagement.",
//   //   children: [
//   //     {
//   //       name: "Augmented Reality",
//   //       subname: "AR",
//   //       img: DesignTool,
//   //       icon: arIcon,
//   //       imageSettings: {
//   //         position: { objectPosition: "center" },
//   //         transform: "scale(1)",
//   //         borderRadius: "18px"
//   //       },
//   //       size: "h-100",
//   //       link: "/augmented_reality"
//   //     },
//   //     {
//   //       name: "3D Modeling",
//   //       subname: "3D",
//   //       img: Layout,
//   //       icon: threedIcon,
//   //       imageSettings: {
//   //         position: { objectPosition: "center" },
//   //         transform: "scale(1)",
//   //         borderRadius: "18px"
//   //       },
//   //       size: "h-100",
//   //       link: "/3d_services"
//   //     },
//   //     {
//   //       name: "Virtual Reality",
//   //       subname: "VR",
//   //       img: Component,
//   //       icon: vrIcon,
//   //       imageSettings: {
//   //         position: { objectPosition: "center" },
//   //         transform: "scale(1)",
//   //         borderRadius: "18px"
//   //       },
//   //       size: "h-100",
//   //       link: "/virtual_reality"
//   //     },
//   //   ],
//   // },

//   {
//     id: "emerging-tech",
//     title: "emerging tech",
//     desc: "We deliver secure, scalable, and intelligent technology solutions that help businesses manage data efficiently, streamline operations, and enhance customer engagement.",
//     children: [
//       {
//         name: "Augmented Reality",
//         subname: "AR",
//         video: CRM_Video,       // <-- NEW
//         icon: arIcon,
//         imageSettings: {
//           position: { objectPosition: "center" },
//           transform: "scale(1)",
//           borderRadius: "18px"
//         },
//         size: "h-100",
//         link: "/augmented_reality"
//       },
//       {
//         name: "3D Modeling",
//         subname: "3D",
//         video: ERP_Video,     // <-- NEW
//         icon: threedIcon,
//         imageSettings: {
//           position: { objectPosition: "center" },
//           transform: "scale(1)",
//           borderRadius: "18px"
//         },
//         size: "h-100",
//         link: "/3d_services"
//       },
//       {
//         name: "Virtual Reality",
//         subname: "VR",
//         video: VR_Video,       // <-- NEW
//         icon: vrIcon,
//         imageSettings: {
//           position: { objectPosition: "center" },
//           transform: "scale(1)",
//           borderRadius: "18px"
//         },
//         size: "h-100",
//         link: "/virtual_reality"
//       },
//     ],
//   },
//   {
//     id: "data-cloud",
//     title: "data and cloud",
//     desc: "Empower your business with secure, scalable, and data-driven cloud solutions designed to boost performance and reliability. At ThirdVizion Labs, we create innovative digital applications that help brands manage data smarter, automate workflows, and drive growth.",
//     children: [
//       {
//         name: "Customer Relationship Management",
//         subname: "CRM",
//         img: Portal,
//         icon: crmIcon,
//         imageSettings: {
//           position: { objectPosition: "center" },
//           transform: "scale(1)",
//           borderRadius: "18px"
//         },
//         size: "h-100",
//         link: "/client_relationship_management"
//       },
//       {
//         name: "Identity & Access Management",
//         subname: "IAM",
//         img: Dashboard,
//         icon: iamIcon,
//         imageSettings: {
//           position: { objectPosition: "center" },
//           transform: "scale(1)",
//           borderRadius: "18px"
//         },
//         size: "h-100",
//         link: "/identity_and_access_management"
//       },
//       {
//         name: "Enterprises Resourse Planning",
//         subname: "ERP",
//         img: Aws,
//         icon: erpIcon,
//         imageSettings: {
//           position: { objectPosition: "center" },
//           transform: "scale(1)",
//           borderRadius: "18px"
//         },
//         size: "h-100",
//         link: "/enterprise_resource_planning"
//       },
//     ],
//   },
//   {
//     id: "software-dev",
//     title: "software development",
//     desc: "We create innovative software solutions that help businesses grow in the digital era. From custom websites to mobile apps and interactive games, our team combines creativity, technology, and strategy to turn ideas into reality",
//     children: [
//       {
//         name: "Game Development",
//         subname: "Game",
//         img: Azure,
//         icon: gameIcon,
//         imageSettings: {
//           position: { objectPosition: "center" },
//           transform: "scale(1)",
//           borderRadius: "18px"
//         },
//         size: "h-100",
//         link: "/game_development"
//       },
//       {
//         name: "Website Development",
//         subname: "Website",
//         img: GoogleCloud,
//         icon: webIcon,
//         imageSettings: {
//           position: { objectPosition: "center" },
//           transform: "scale(1)",
//           borderRadius: "18px"
//         },
//         size: "h-100",
//         link: "/web_development"
//       },
//       {
//         name: "App Development",
//         subname: "Mobile App",
//         img: Por,
//         icon: mobileIcon,
//         imageSettings: {
//           position: { objectPosition: "center" },
//           transform: "scale(1)",
//           borderRadius: "18px"
//         },
//         size: "h-100",
//         link: "/app_development"
//       },
//     ],
//   },
// ];

// // Icon Animation Component - Updated with circular black background mask
// const RollingIcons = ({ icons, isInView }) => {
//   return (
//     <div className="flex space-x-3 mt-4 justify-start flex-wrap gap-2">
//       {icons.map((icon, index) => (
//         <motion.div
//           key={index}
//           className="relative flex items-center justify-center"
//           initial={{
//             opacity: 0,
//             x: -80,
//             rotate: -360,
//             scale: 0.3
//           }}
//           animate={isInView ? {
//             opacity: 1,
//             x: 0,
//             rotate: 0,
//             scale: 1
//           } : {
//             opacity: 0,
//             x: -80,
//             rotate: -360,
//             scale: 0.3
//           }}
//           transition={{
//             duration: 0.9,
//             delay: index * 0.2,
//             type: "spring",
//             stiffness: 100,
//             damping: 15
//           }}
//           whileHover={{
//             scale: 1.2,
//             rotate: 15,
//             transition: { duration: 0.3 }
//           }}
//         >
//           {/* Circular black background mask with gradient border effect */}
//           <div className="relative w-20 h-20 rounded-full bg-gradient-to-br from-gray-800 via-black to-gray-900 p-[2px] shadow-xl">
//             <div className="w-full h-full rounded-full bg-black flex items-center justify-center">
//               <img
//                 src={icon}
//                 alt="service icon"
//                 className="w-14 h-14 object-contain"
//               />
//             </div>
//           </div>
//         </motion.div>
//       ))}
//     </div>
//   );
// };

// // Slide Down Image Component (for first row - single image)
// const SlideDownImage = ({ src, alt, delay = 0, isInView }) => {
//   return (
//     <motion.div
//       initial={{
//         opacity: 0,
//         y: -100,
//         scale: 0.8
//       }}
//       animate={isInView ? {
//         opacity: 1,
//         y: 0,
//         scale: 1
//       } : {
//         opacity: 0,
//         y: -100,
//         scale: 0.8
//       }}
//       transition={{
//         duration: 0.8,
//         delay: delay,
//         type: "spring",
//         stiffness: 80,
//         damping: 15
//       }}
//       className="w-full h-full"
//     >
//       {/* <img
//         src={src}
//         alt={alt}
//         className="w-full h-full object-cover"
//         style={{ borderRadius: '18px' }}
//       /> */}
//       {src?.includes(".mp4") ? (
//   <video
//     src={src}
//     autoPlay
//     loop
//     muted
//     playsInline
//     className="w-full h-full object-cover"
//     style={{ borderRadius: "18px" }}
//   />
// ) : (
//   <img
//     src={src}
//     alt={alt}
//     className="w-full h-full object-cover"
//     style={{ borderRadius: "18px" }}
//   />
// )}

//     </motion.div>
//   );
// };

// // Slide Up Image Component (for second row - two images)
// const SlideUpImage = ({ src, alt, delay = 0, isInView }) => {
//   return (
//     <motion.div
//       initial={{
//         opacity: 0,
//         y: 100,
//         scale: 0.8
//       }}
//       animate={isInView ? {
//         opacity: 1,
//         y: 0,
//         scale: 1
//       } : {
//         opacity: 0,
//         y: 100,
//         scale: 0.8
//       }}
//       transition={{
//         duration: 0.8,
//         delay: delay,
//         type: "spring",
//         stiffness: 80,
//         damping: 15
//       }}
//       className="w-full h-full"
//     >
//       <img
//         src={src}
//         alt={alt}
//         className="w-full h-full object-cover"
//         style={{ borderRadius: '18px' }}
//       />
//     </motion.div>
//   );
// };

// // New Component for Structured Image Layout with Directional Animations
// const StructuredImageLayout = ({ category, inViewImages, imageRefs }) => {
//   const children = category.children;

//   return (
//     <div className="flex flex-col space-y-4">
//       {/* First row - single full width image - SLIDE DOWN */}
//       {children[0] && (
//         <div className="w-full">
//           <ImageCard
//             service={children[0]}
//             category={category}
//             index={0}
//             inViewImages={inViewImages}
//             imageRefs={imageRefs}
//             fullWidth={true}
//             animationType="slideDown"
//           />
//         </div>
//       )}

//       {/* Second row - two images side by side - SLIDE UP */}
//       {children.slice(1, 3).length > 0 && (
//         <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-4">
//           {children.slice(1, 3).map((service, index) => (
//             <ImageCard
//               key={index + 1}
//               service={service}
//               category={category}
//               index={index + 1}
//               inViewImages={inViewImages}
//               imageRefs={imageRefs}
//               fullWidth={false}
//               animationType="slideUp"
//             />
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// // Updated Image Card Component with Directional Animation
// const ImageCard = ({ service, category, index, inViewImages, imageRefs, fullWidth, animationType }) => {
//   const imageId = `${category.id}-${service.name}-image`;

//   return (
//     <div className="block relative">
//       <Link to={service.link}>
//         <motion.div
//           className="group cursor-pointer relative"
//           whileHover={{
//             scale: 1.03,
//           }}
//           transition={{ type: "spring", stiffness: 200, damping: 15 }}
//         >
//           {/* IMAGE BOX */}
//           <div className="p-1 relative z-10">
//             <div
//               className={`${fullWidth ? 'h-72' : 'h-60'} overflow-hidden border border-gray-600/30 shadow-2xl relative group`}
//               style={{ borderRadius: service.imageSettings.borderRadius }}
//             >
//               <div
//                 className="w-full h-full"
//                 ref={el => imageRefs.current[imageId] = el}
//               >
//                 {animationType === "slideDown" ? (
//                   <SlideDownImage
//                     src={service.img}
//                     alt={service.name}
//                     delay={index * 0.2}
//                     isInView={inViewImages[imageId]}
//                   />
//                 ) : (
//                   <SlideUpImage
//                     src={service.img}
//                     alt={service.name}
//                     delay={index * 0.2}
//                     isInView={inViewImages[imageId]}
//                   />
//                 )}
//               </div>
//               {/* <div className="absolute inset-0 bg-black/40 opacity-70 group-hover:opacity-30 transition-all duration-500"></div> */}

//               {/* TITLE OVERLAY */}
//               {/* <div className="absolute bottom-3 left-3 right-3 bg-black">
//                 <div className="flex items-center justify-between  backlight-blur">
//                   <div className="flex-1">
//                     <h4 className="text-white text-2xl font-semibold mb-1">
//                       {service.name}
//                     </h4>
//                   </div>
//                   <div className="text-yellow-500 mr-2 transform group-hover:translate-x-1 transition-transform duration-300">
//                     <svg width="38" height="38" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//                       <path d="M5 12h14M12 5l7 7-7 7"/>
//                     </svg>
//                   </div>
//                 </div>
//               </div> */}


//               {/* TITLE OVERLAY */}
//               <div className="absolute bottom-0 h-auto w-full">

//                 {/* Background fade only behind title & arrow */}
//                 <div className="
//       absolute inset-0 
//       bg-black/60 
//       opacity-60 
//       group-hover:opacity-30 
//       backdrop-blur-md
//       transition-all 
//       duration-500 
//       rounded-lg
//     ">
//                 </div>

//                 {/* Foreground content */}
//                 <div className="relative flex items-center justify-between px-3 py-2">
//                   <div className="flex-1">
//                     <h4 className="text-white text-2xl font-semibold">
//                       {service.name}
//                     </h4>
//                   </div>

//                   <div className="text-yellow-500 transform group-hover:translate-x-1 transition-transform duration-300">
//                     <svg width="38" height="38" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//                       <path d="M5 12h14M12 5l7 7-7 7" />
//                     </svg>
//                   </div>
//                 </div>

//               </div>


//             </div>
//           </div>
//         </motion.div>
//       </Link>
//     </div>
//   );
// };

// export default function Categories() {
//   const [activeCategoryId, setActiveCategoryId] = useState(capabilitiesData[0].id);
//   const [isScrolling, setIsScrolling] = useState(false);
//   const [inViewItems, setInViewItems] = useState({});
//   const [inViewImages, setInViewImages] = useState({});
//   const scrollContainerRef = useRef(null);
//   const sectionRefs = useRef(capabilitiesData.map(() => useRef(null)));
//   const imageRefs = useRef({});
//   const itemRefs = useRef({});
//   const scrollTimeoutRef = useRef(null);

//   const activeCategory = capabilitiesData.find(cap => cap.id === activeCategoryId) || capabilitiesData[0];

//   // Handle scroll detection for the entire window
//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolling(true);

//       if (scrollTimeoutRef.current) {
//         clearTimeout(scrollTimeoutRef.current);
//       }

//       scrollTimeoutRef.current = setTimeout(() => {
//         setIsScrolling(false);
//       }, 100);
//     };

//     window.addEventListener('scroll', handleScroll, { passive: true });

//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//       if (scrollTimeoutRef.current) {
//         clearTimeout(scrollTimeoutRef.current);
//       }
//     };
//   }, []);

//   // Intersection Observer for categories
//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach(entry => {
//           if (entry.isIntersecting) {
//             setActiveCategoryId(entry.target.dataset.categoryId);
//           }
//         });
//       },
//       {
//         root: null,
//         rootMargin: '0px 0px -50% 0px',
//         threshold: 0.01
//       }
//     );

//     sectionRefs.current.forEach(ref => {
//       if (ref.current) observer.observe(ref.current);
//     });

//     return () => {
//       sectionRefs.current.forEach(ref => {
//         if (ref.current) observer.unobserve(ref.current);
//       });
//     };
//   }, []);

//   // Intersection Observer for individual items (icons)
//   useEffect(() => {
//     const itemObserver = new IntersectionObserver(
//       (entries) => {
//         const updates = {};
//         entries.forEach(entry => {
//           updates[entry.target.dataset.categoryId] = entry.isIntersecting;
//         });
//         setInViewItems(prev => ({ ...prev, ...updates }));
//       },
//       {
//         root: null,
//         rootMargin: '0px 0px -20% 0px',
//         threshold: 0.4
//       }
//     );

//     // Observe all category sections
//     capabilitiesData.forEach(category => {
//       const ref = sectionRefs.current[capabilitiesData.indexOf(category)];
//       if (ref.current) {
//         ref.current.dataset.categoryId = category.id;
//         itemObserver.observe(ref.current);
//       }
//     });

//     return () => {
//       capabilitiesData.forEach(category => {
//         const ref = sectionRefs.current[capabilitiesData.indexOf(category)];
//         if (ref.current) itemObserver.unobserve(ref.current);
//       });
//     };
//   }, []);

//   // Intersection Observer for images
//   useEffect(() => {
//     const imageObserver = new IntersectionObserver(
//       (entries) => {
//         const updates = {};
//         entries.forEach(entry => {
//           if (entry.isIntersecting) {
//             updates[entry.target.dataset.imageId] = true;
//           }
//         });
//         setInViewImages(prev => ({ ...prev, ...updates }));
//       },
//       {
//         root: null,
//         rootMargin: '0px 0px -10% 0px',
//         threshold: 0.3
//       }
//     );

//     // Observe all images
//     capabilitiesData.forEach(category => {
//       category.children.forEach((child, index) => {
//         const imageId = `${category.id}-${child.name}-image`;
//         const ref = imageRefs.current[imageId];
//         if (ref) {
//           ref.dataset.imageId = imageId;
//           imageObserver.observe(ref);
//         }
//       });
//     });

//     return () => {
//       Object.values(imageRefs.current).forEach(ref => {
//         if (ref) imageObserver.unobserve(ref);
//       });
//     };
//   }, []);

//   const getCategoryTags = (category) => {
//     if (category.id === "data-cloud") {
//       return [
//         ...category.children.map(child => child.name),
//         "Server Management"
//       ];
//     }
//     return category.children.map(child => child.name);
//   };

//   const getTagStyle = (tag) => {
//     const specialTags = [""];

//     if (specialTags.includes(tag)) {
//       return "px-4 py-2 border border-yellow-500 bg-yellow-500 rounded-full text-black text-sm font-medium hover:bg-black hover:text-yellow-500 transition-all duration-300";
//     }

//     return "px-4 py-2 border border-white/40 rounded-full text-white text-sm font-medium hover:bg-yellow-500 hover:text-black hover:border-yellow-500 transition-all duration-300";
//   };

//   const getTagLink = (tag, category) => {
//     const childItem = category.children.find(child =>
//       child.name.toUpperCase() === tag.toUpperCase()
//     );

//     // Special case for SERVER MANAGEMENT in data-cloud section
//     if (tag === "Server Management" && category.id === "data-cloud") {
//       return "/server_management";
//     }

//     return childItem?.link || "#";
//   };

//   // Get icons for the active category
//   const getCategoryIcons = (category) => {
//     return category.children.map(child => child.icon).filter(icon => icon);
//   };

//   return (
//     <>
//       <h1
//         className="text-3xl md:text-4xl lg:text-6xl bg-[#000000] text-center uppercase py-8 font-bold border-none"
//         style={{ fontFamily: "DeaconTest, sans-serif" }}
//       >
//         <span className="text-white">OUR</span>{" "}
//         <span className="text-yellow-500">SERVICE</span>
//       </h1>

//       <section className="bg-black text-white min-h-screen px-4 xl:px-14 py-6 md:py-12" ref={scrollContainerRef}>
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-4">

//           {/* MOBILE VIEW */}
//           <div className="block md:hidden">
//             {capabilitiesData.map((category, index) => (
//               <div key={category.id} className="mb-8">
//                 {/* Category Header */}
//                 <div className="text-left mb-4 px-2">
//                   <h3
//                     className="text-xl font-semibold tracking-wide text-yellow-500 mb-2 uppercase"
//                     style={{ fontFamily: "Outfit, sans-serif" }}
//                   >
//                     {category.title}
//                   </h3>

//                   <div className="h-px w-12 bg-gradient-to-r from-yellow-600 via-yellow-500 to-yellow-600 mb-2"></div>

//                   <p
//                     className="text-white/80 text-sm leading-relaxed font-light tracking-wide max-w-md mx-auto"
//                     style={{ fontFamily: "Work Sans, sans-serif" }}
//                   >
//                     {category.desc.split('. ')[0]}.
//                   </p>
//                 </div>

//                 {/* Service Cards */}
//                 <div className="space-y-3">
//                   {category.children.map((service, serviceIndex) => (
//                     <Link
//                       key={serviceIndex}
//                       to={service.link}
//                       className="block"
//                     >
//                       <div className="group cursor-pointer relative border border-gray-700 rounded-xl p-3 hover:bg-gray-800/80 hover:border-yellow-500/40 transition-all duration-300">
//                         <div className="flex items-center space-x-3">
//                           {/* Service Icon with circular black mask */}
//                           <div className="flex-shrink-0 w-12 h-12">
//                             <div className="w-full h-full  bg-black flex items-center justify-center">
//                               <img
//                                 src={service.icon}
//                                 alt={service.name}
//                                 className="w-12 h-12 object-contain"
//                               />
//                             </div>
//                           </div>

//                           {/* Service Info */}
//                           <div className="flex-1">
//                             <h4
//                               className="text-white text-sm font-semibold tracking-wide mb-1"
//                               style={{ fontFamily: "Outfit, sans-serif" }}
//                             >
//                               {service.name}
//                             </h4>
//                             <div className="h-px w-8 bg-gradient-to-r from-yellow-500 to-transparent mb-1"></div>
//                             <p className="text-white/60 text-xs font-light">
//                               Explore {service.subname} services
//                             </p>
//                           </div>

//                           {/* Arrow Indicator */}
//                           <div className="text-yellow-500 mr-2 transform group-hover:translate-x-1 transition-transform duration-300">
//                             <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//                               <path d="M5 12h14M12 5l7 7-7 7" />
//                             </svg>
//                           </div>
//                         </div>
//                       </div>
//                     </Link>
//                   ))}
//                 </div>

//                 {/* Category Tags */}
//                 {/* <div className="mt-4 flex flex-wrap gap-1 justify-center">
//                   {getCategoryTags(category).map((tag, tagIndex) => (
//                     <Link
//                       to={getTagLink(tag, category)}
//                       key={tagIndex}
//                     >
//                       <span
//                         className="px-3 py-1 border border-white/40 rounded-full text-white text-xs font-medium hover:bg-yellow-500 hover:text-black hover:border-yellow-500 transition-all duration-300"
//                         style={{ fontFamily: "Outfit, sans-serif" }}
//                       >
//                         {tag}
//                       </span>
//                     </Link>
//                   ))}
//                 </div> */}

//                 {/* Section Divider */}
//                 {index < capabilitiesData.length - 1 && (
//                   <div className="h-px w-full bg-gray-800 mt-6"></div>
//                 )}
//               </div>
//             ))}
//           </div>

//           {/* DESKTOP VIEW */}
//           <div className="hidden md:block md:sticky md:top-40 h-fit  mt-6 md:mt-12">
//             <motion.div
//               key={activeCategory.id}
//               initial={{ opacity: 0, y: 50 }}
//               animate={{ opacity: 1, y: 0 }}
//               exit={{ opacity: 0, y: -50 }}
//               transition={{ duration: 0.5 }}
//             >
//               <div className="flex flex-col">
//                 <div>
//                   <h3
//                     className="text-2xl md:text-3xl lg:text-5xl font-medium tracking-wider text-yellow-500 uppercase text-center md:text-left"
//                     style={{ fontFamily: "anta, sans-serif" }}
//                   >
//                     {activeCategory.title}
//                   </h3>

//                   <div className="mt-2 h-px w-full bg-gradient-to-r from-yellow-600 via-yellow-500/80 to-transparent"></div>
//                   <div className="relative">
//                     <p
//                       className="text-white/90 mt-3  md:mt-4 max-w-md leading-relaxed text-sm md:text-lg lg:text-[19px] font-light tracking-wide text-center md:text-left"
//                       style={{ fontFamily: "anta, sans-serif" }}
//                     >
//                       {activeCategory.desc.split('. ')[0]}.
//                     </p>

//                     {/* BUTTONS SECTION */}
//                     <div className="mt-4 md:mt-5 flex flex-wrap gap-2 md:gap-2 justify-center md:justify-start">
//                       {getCategoryTags(activeCategory).map((tag, index) => (
//                         <Link
//                           to={getTagLink(tag, activeCategory)}
//                           key={index}
//                         >
//                           <span
//                             className={`${getTagStyle(tag)} cursor-pointer px-[18px] py-[8px] text-[20px] md:text-lg lg:text-[15px] inline-block text-xs`}
//                             style={{ fontFamily: "anta, sans-serif" }}
//                           >
//                             {tag}
//                           </span>
//                         </Link>
//                       ))}
//                     </div>

//                     {/* ICONS BELOW BUTTONS on LEFT SIDE - Updated with circular black mask */}
//                     <div className="mt-4 md:mt-5">
//                       <RollingIcons
//                         icons={getCategoryIcons(activeCategory)}
//                         isInView={inViewItems[activeCategory.id]}
//                       />
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </motion.div>
//           </div>

//           {/* RIGHT SCROLLING SECTION - Desktop only with NEW STRUCTURE */}
//           <div className="hidden md:flex flex-col">
//             {capabilitiesData.map((cap, index) => (
//               <div
//                 key={cap.id}
//                 ref={sectionRefs.current[index]}
//                 data-category-id={cap.id}
//                 className={`relative ${index < capabilitiesData.length - 1 ? 'mb-40' : ''}`}
//               >
//                 <div className="relative">
//                   <StructuredImageLayout
//                     category={cap}
//                     inViewImages={inViewImages}
//                     imageRefs={imageRefs}
//                   />
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* <div className="text-center mt-16 md:mt-32">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//             className="max-w-4xl mx-auto"
//           >
//             {/* Additional content if needed 
//           </motion.div>
//         </div> */}
//       </section>
//     </>
//   );
// }
import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

// Video imports (your provided imports)
import CRM_Video from "/src/assets/newserviceehome/Corporate_CRM_Video_Generation.mp4";
import ERP_Video from "/src/assets/newserviceehome/ERP_Video_Generation_Request.mp4";
import VR_Video from "/src/assets/newserviceehome/VR_Video_Generation_Request 1.mp4";
import D_Modeling from "/src/assets/ar/D_Modeling_and_Rendering_Video.mp4";
import AR_Vedio from "/src/assets/ar/Futuristic_AR_Video_Generation2.mp4";
import Game_dev from "/src/assets/ar/Futuristic_Game_Dev_Workspace_POV.mp4";
import Web_dev from "/src/assets/newserviceehome/Web_Development_Video_Generation 1.mp4"
// import Tech_Vedio from "/src/assets/ar/Futuristic_Tech_Video_Generation1.mp4"


// Image imports (unchanged)
import DesignTool from "/src/assets/newserviceehome/ar.png";
import Layout from "/src/assets/newserviceehome/3d.png";
import ComponentImg from "/src/assets/newserviceehome/vr.png";
import Por from "/src/assets/home/mobileapp.jpg";
import Portal from "/src/assets/newserviceehome/crm.png";
import Dashboard from "/src/assets/newserviceehome/server.png";
import Aws from "/src/assets/home/erp.png";
import Azure from "/src/assets/home/game.jpg";
import GoogleCloud from "/src/assets/home/web.jpg";

// icons
import arIcon from "/src/assets/ourserviceicons/ar.png";
import crmIcon from "/src/assets/ourserviceicons/crm.png";
import iamIcon from "/src/assets/ourserviceicons/iam.png";
import vrIcon from "/src/assets/ourserviceicons/vr.png";
// import threedIcon from "/src/assets/ourserviceicons/3d.png";
import erpIcon from "/src/assets/ourserviceicons/erp.png";
import gameIcon from "/src/assets/ourserviceicons/game.png";
import webIcon from "/src/assets/ourserviceicons/website.png";
import mobileIcon from "/src/assets/ourserviceicons/mobile.png";
import Aricon1 from "/src/assets/newserviceehome/Gemini_Generated_Image_4wcpq64wcpq64wcp.png";
import threedIcon from "/src/assets/newserviceehome/Gemini_Generated_Image_ps0yl0ps0yl0ps0y.png";

/* =========================
   Data: capabilitiesData
   - Emerging tech children use video: <import>
   ========================= */
const capabilitiesData = [
    {
    id: "software-dev",
    title: "software development",
    desc:
      "We create innovative software solutions that help businesses grow in the digital era. From custom websites to mobile apps and interactive games, our team combines creativity, technology, and strategy to turn ideas into reality",
    children: [
      {
        name: "Game Development",
        subname: "Game",
        img: Azure,
        icon: gameIcon,
        imageSettings: {
          position: { objectPosition: "center" },
          transform: "scale(1)",
          borderRadius: "18px",
        },
        size: "h-100",
        link: "/game_development",
      },
      {
        name: "Website Development",
        subname: "Website",
        video:Web_dev,
        icon: webIcon,
        imageSettings: {
          position: { objectPosition: "center" },
          transform: "scale(1)",
          borderRadius: "18px",
        },
        size: "h-100",
        link: "/web_development",
      },
      {
        name: "App Development",
        subname: "Mobile App",
        img: Por,
        icon: mobileIcon,
        imageSettings: {
          position: { objectPosition: "center" },
          transform: "scale(1)",
          borderRadius: "18px",
        },
        size: "h-100",
        link: "/app_development",
      },
    ],
  },

  {
    id: "data-cloud",
    title: "data and cloud",
    desc:
      "Empower your business with secure, scalable, and data-driven cloud solutions designed to boost performance and reliability. At ThirdVizion Labs, we create innovative digital applications that help brands manage data smarter, automate workflows, and drive growth.",
    children: [
      {
        name: "Customer Relationship Management",
        subname: "CRM",
        video:CRM_Video,
        icon: crmIcon,
        imageSettings: {
          position: { objectPosition: "center" },
          transform: "scale(1)",
          borderRadius: "18px",
        },
        size: "h-100",
        link: "/client_relationship_management",
      },
      {
        name: "Identity & Access Management",
        subname: "IAM",
        img: Dashboard,
        icon: iamIcon,
        imageSettings: {
          position: { objectPosition: "center" },
          transform: "scale(1)",
          borderRadius: "18px",
        },
        size: "h-100",
        link: "/identity_and_access_management",
      },
    {
  name: "Enterprise Resource Planning",
  subname: "ERP",
  video: ERP_Video,
  icon: erpIcon,

        imageSettings: {
          position: { objectPosition: "center" },
          transform: "scale(1)",
          borderRadius: "18px",
        },
        size: "h-100",
        link: "/enterprise_resource_planning",
      },
    ],
  },

    {
    id: "emerging-tech",
    title: "emerging tech",
    desc:
      "We deliver secure, scalable, and intelligent technology solutions that help businesses manage data efficiently, streamline operations, and enhance customer engagement.",
    children: [
      {
        name: "Augmented Reality",
        subname: "AR",
        video: AR_Vedio, // <-- video used here
        icon: Aricon1,
        imageSettings: {
          position: { objectPosition: "center" },
          transform: "scale(1)",
          borderRadius: "18px",
        },
        size: "h-100",
        link: "/augmented_reality",
      },
      {
        name: "3D Modeling",
        subname: "3D",
        video: D_Modeling, // <-- video used here
        icon: threedIcon,
        imageSettings: {
          position: { objectPosition: "center" },
          transform: "scale(1)",
          borderRadius: "18px",
        },
        size: "h-100",
        link: "/3d_services",
      },
      {
        name: "Virtual Reality",
        subname: "VR",
        video: VR_Video, // <-- video used here
        icon: vrIcon,
        imageSettings: {
          position: { objectPosition: "center" },
          transform: "scale(1)",
          borderRadius: "18px",
        },
        size: "h-100",
        link: "/virtual_reality",
      },
    ],
  },
];

/* =========================
   RollingIcons component
   - unchanged visual behavior, circular black mask
   ========================= */
const RollingIcons = ({ icons, isInView }) => {
  return (
    <div className="flex space-x-3 mt-4 justify-start flex-wrap gap-2">
      {icons.map((icon, index) => (
        <motion.div
          key={index}
          className="relative flex items-center justify-center"
          initial={{
            opacity: 0,
            x: -80,
            rotate: -360,
            scale: 0.3,
          }}
          animate={
            isInView
              ? { opacity: 1, x: 0, rotate: 0, scale: 1 }
              : { opacity: 0, x: -80, rotate: -360, scale: 0.3 }
          }
          transition={{
            duration: 0.9,
            delay: index * 0.2,
            type: "spring",
            stiffness: 100,
            damping: 15,
          }}
          whileHover={{
            scale: 1.2,
            rotate: 15,
            transition: { duration: 0.3 },
          }}
        >
          <div className="relative w-20 h-20 rounded-full bg-gradient-to-br from-gray-800 via-black to-gray-900 p-[2px] shadow-xl">
            <div className="w-full h-full rounded-full bg-black flex items-center justify-center">
              <img src={icon} alt="service icon" className="w-14 h-14 object-contain" />
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

/* =========================
   SlideDownImage component (supports video + image)
   - accepts src and borderRadius
   ========================= */
const SlideDownImage = ({ src, alt, delay = 0, isInView, borderRadius = "18px" }) => {
  const isVideo = typeof src === "string" && src.toLowerCase().endsWith(".mp4");

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: -100,
        scale: 0.8,
      }}
      animate={
        isInView
          ? { opacity: 1, y: 0, scale: 1 }
          : { opacity: 0, y: -100, scale: 0.8 }
      }
      transition={{
        duration: 0.8,
        delay: delay,
        type: "spring",
        stiffness: 80,
        damping: 15,
      }}
      className="w-full h-full"
    >
      {isVideo ? (
        <video
          src={src}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
          style={{ borderRadius: borderRadius }}
        />
      ) : (
        <img src={src} alt={alt} className="w-full h-full object-cover" style={{ borderRadius: borderRadius }} />
      )}
    </motion.div>
  );
};

/* =========================
   SlideUpImage component (supports video + image)
   - accepts src and borderRadius
   ========================= */
const SlideUpImage = ({ src, alt, delay = 0, isInView, borderRadius = "18px" }) => {
  const isVideo = typeof src === "string" && src.toLowerCase().endsWith(".mp4");

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 100,
        scale: 0.8,
      }}
      animate={
        isInView
          ? { opacity: 1, y: 0, scale: 1 }
          : { opacity: 0, y: 100, scale: 0.8 }
      }
      transition={{
        duration: 0.8,
        delay: delay,
        type: "spring",
        stiffness: 80,
        damping: 15,
      }}
      className="w-full h-full"
    >
      {isVideo ? (
        <video
          src={src}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
          style={{ borderRadius: borderRadius }}
        />
      ) : (
        <img src={src} alt={alt} className="w-full h-full object-cover" style={{ borderRadius: borderRadius }} />
      )}
    </motion.div>
  );
};

/* =========================
   ImageCard
   - passes service.video || service.img as src to slides
   - keeps overlay, title, hover scale etc.
   - stores ref in imageRefs for IntersectionObserver
   ========================= */
const ImageCard = ({ service, category, index, inViewImages, imageRefs, fullWidth, animationType }) => {
  const imageId = `${category.id}-${service.name}-image`;

  return (
    <div className="block relative">
      <Link to={service.link}>
        <motion.div
          className="group cursor-pointer relative"
          whileHover={{
            scale: 1.03,
          }}
          transition={{ type: "spring", stiffness: 200, damping: 15 }}
        >
          <div className="p-1 relative z-10">
            <div
              className={`${fullWidth ? "h-72" : "h-60"} overflow-hidden border border-gray-600/30 shadow-2xl relative group`}
              style={{ borderRadius: service.imageSettings?.borderRadius || "18px" }}
            >
              <div
                className="w-full h-full"
                ref={(el) => {
                  // attach element reference for IntersectionObserver
                  if (el) {
                    imageRefs.current[imageId] = el;
                  } else {
                    delete imageRefs.current[imageId];
                  }
                }}
              >
                {animationType === "slideDown" ? (
                  <SlideDownImage
                    src={service.video || service.img}
                    alt={service.name}
                    delay={index * 0.2}
                    isInView={!!inViewImages[imageId]}
                    borderRadius={service.imageSettings?.borderRadius || "18px"}
                  />
                ) : (
                  <SlideUpImage
                    src={service.video || service.img}
                    alt={service.name}
                    delay={index * 0.2}
                    isInView={!!inViewImages[imageId]}
                    borderRadius={service.imageSettings?.borderRadius || "18px"}
                  />
                )}
              </div>

              {/* Title overlay area */}
              <div className="absolute bottom-0 h-auto w-full">
                <div
                  className="
                    absolute inset-0 
                    bg-black/60 
                    opacity-60 
                    group-hover:opacity-30 
                    backdrop-blur-md
                    transition-all 
                    duration-500 
                    rounded-lg
                  "
                />
                <div className="relative flex items-center justify-between px-3 py-2">
                  <div className="flex-1">
                    <h4 className="text-white text-2xl font-semibold">{service.name}</h4>
                  </div>

                  <div className="text-yellow-500 transform group-hover:translate-x-1 transition-transform duration-300">
                    <svg width="38" height="38" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </motion.div>
      </Link>
    </div>
  );
};

/* =========================
   StructuredImageLayout
   - uses ImageCard and preserves layout: first full-width, then two side-by-side
   ========================= */
const StructuredImageLayout = ({ category, inViewImages, imageRefs }) => {
  const children = category.children;

  return (
    <div className="flex flex-col space-y-4">
      {/* First row - single full width image - SLIDE DOWN */}
      {children[0] && (
        <div className="w-full">
          <ImageCard
            service={children[0]}
            category={category}
            index={0}
            inViewImages={inViewImages}
            imageRefs={imageRefs}
            fullWidth={true}
            animationType="slideDown"
          />
        </div>
      )}

      {/* Second row - two images side by side - SLIDE UP */}
      {children.slice(1, 3).length > 0 && (
        <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-4">
          {children.slice(1, 3).map((service, index) => (
            <ImageCard
              key={index + 1}
              service={service}
              category={category}
              index={index + 1}
              inViewImages={inViewImages}
              imageRefs={imageRefs}
              fullWidth={false}
              animationType="slideUp"
            />
          ))}
        </div>
      )}
    </div>
  );
};

/* =========================
   Main Exported Component: Categories
   - includes observers for categories, items, images
   - sticky left info panel on desktop, scroll-right layout for images
   ========================= */
export default function Categories() {
  const [activeCategoryId, setActiveCategoryId] = useState(capabilitiesData[0].id);
  const [isScrolling, setIsScrolling] = useState(false);
  const [inViewItems, setInViewItems] = useState({});
  const [inViewImages, setInViewImages] = useState({});
  const scrollContainerRef = useRef(null);
  const sectionRefs = useRef(capabilitiesData.map(() => React.createRef()));
  const imageRefs = useRef({});
  const itemRefs = useRef({});
  const scrollTimeoutRef = useRef(null);

  const activeCategory = capabilitiesData.find((cap) => cap.id === activeCategoryId) || capabilitiesData[0];

  /* Handle scroll detection (window) to track quick scrolls */
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolling(true);
      if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
      scrollTimeoutRef.current = setTimeout(() => setIsScrolling(false), 100);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
    };
  }, []);

  /* IntersectionObserver: active category section detection (sets left panel) */
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const catId = entry.target.dataset.categoryId;
            if (catId) setActiveCategoryId(catId);
          }
        });
      },
      {
        root: null,
        rootMargin: "0px 0px -50% 0px",
        threshold: 0.01,
      }
    );

    sectionRefs.current.forEach((ref) => {
      if (ref && ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => {
      sectionRefs.current.forEach((ref) => {
        if (ref && ref.current) observer.unobserve(ref.current);
      });
    };
  }, []);

  /* IntersectionObserver: items (for RollingIcons reveal) */
  useEffect(() => {
    const itemObserver = new IntersectionObserver(
      (entries) => {
        const updates = {};
        entries.forEach((entry) => {
          const catId = entry.target.dataset.categoryId;
          if (catId) updates[catId] = entry.isIntersecting;
        });
        setInViewItems((prev) => ({ ...prev, ...updates }));
      },
      {
        root: null,
        rootMargin: "0px 0px -20% 0px",
        threshold: 0.4,
      }
    );

    capabilitiesData.forEach((category, idx) => {
      const ref = sectionRefs.current[idx];
      if (ref && ref.current) {
        ref.current.dataset.categoryId = category.id;
        itemObserver.observe(ref.current);
      }
    });

    return () => {
      capabilitiesData.forEach((category, idx) => {
        const ref = sectionRefs.current[idx];
        if (ref && ref.current) itemObserver.unobserve(ref.current);
      });
    };
  }, []);

  /* IntersectionObserver: images (so SlideUp/SlideDown animate when visible) */
  useEffect(() => {
    const imageObserver = new IntersectionObserver(
      (entries) => {
        const updates = {};
        entries.forEach((entry) => {
          const imageId = entry.target.dataset.imageId;
          if (imageId && entry.isIntersecting) {
            updates[imageId] = true;
          }
        });
        setInViewImages((prev) => ({ ...prev, ...updates }));
      },
      {
        root: null,
        rootMargin: "0px 0px -10% 0px",
        threshold: 0.3,
      }
    );

    // Observe all image refs that are currently present
    Object.keys(imageRefs.current).forEach((imageId) => {
      const ref = imageRefs.current[imageId];
      if (ref) {
        ref.dataset.imageId = imageId;
        imageObserver.observe(ref);
      }
    });

    return () => {
      Object.values(imageRefs.current).forEach((ref) => {
        if (ref) imageObserver.unobserve(ref);
      });
    };
  }, [/* We intentionally don't list imageRefs; refs update in-place */]);

  const getCategoryTags = (category) => {
    if (category.id === "data-cloud") {
      return [...category.children.map((child) => child.name), "Server Management"];
    }
    return category.children.map((child) => child.name);
  };

  const getTagStyle = (tag) => {
    const specialTags = [""];
    if (specialTags.includes(tag)) {
      return "px-4 py-2 border border-yellow-500 bg-yellow-500 rounded-full text-black text-sm font-medium hover:bg-black hover:text-yellow-500 transition-all duration-300";
    }
    return "px-4 py-2 border border-white/40 rounded-full text-white text-sm font-medium hover:bg-yellow-500 hover:text-black hover:border-yellow-500 transition-all duration-300";
  };

  const getTagLink = (tag, category) => {
    const childItem = category.children.find((child) => child.name.toUpperCase() === tag.toUpperCase());
    if (tag === "Server Management" && category.id === "data-cloud") return "/server_management";
    return childItem?.link || "#";
  };

  const getCategoryIcons = (category) => {
    return category.children.map((child) => child.icon).filter((icon) => icon);
  };

  return (
    <>
      <h1 className="text-3xl md:text-4xl lg:text-6xl bg-[#000000] text-center uppercase py-8 font-bold border-none" style={{ fontFamily: "DeaconTest, sans-serif" }}>
        <span className="text-white">OUR</span> <span className="text-yellow-500">SERVICE</span>
      </h1>

      <section className="bg-black text-white min-h-screen px-4 xl:px-14 py-6 md:py-12" ref={scrollContainerRef}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-4">
          {/* MOBILE VIEW */}
          <div className="block md:hidden">
            {capabilitiesData.map((category, index) => (
              <div key={category.id} className="mb-8">
                <div className="text-left mb-4 px-2">
                  <h3 className="text-xl font-semibold tracking-wide text-yellow-500 mb-2 uppercase" style={{ fontFamily: "Outfit, sans-serif" }}>
                    {category.title}
                  </h3>

                  <div className="h-px w-12 bg-gradient-to-r from-yellow-600 via-yellow-500 to-yellow-600 mb-2" />

                  <p className="text-white/80 text-sm leading-relaxed font-light tracking-wide max-w-md mx-auto" style={{ fontFamily: "Work Sans, sans-serif" }}>
                    {category.desc.split(". ")[0]}.
                  </p>
                </div>

                {/* Service Cards */}
                <div className="space-y-3">
                  {category.children.map((service, serviceIndex) => (
                    <Link key={serviceIndex} to={service.link} className="block">
                      <div className="group cursor-pointer relative border border-gray-700 rounded-xl p-3 hover:bg-gray-800/80 hover:border-yellow-500/40 transition-all duration-300">
                        <div className="flex items-center space-x-3">
                          <div className="flex-shrink-0 w-12 h-12">
                            <div className="w-full h-full bg-black flex items-center justify-center">
                              <img src={service.icon} alt={service.name} className="w-12 h-12 object-contain" />
                            </div>
                          </div>

                          <div className="flex-1">
                            <h4 className="text-white text-sm font-semibold tracking-wide mb-1" style={{ fontFamily: "Outfit, sans-serif" }}>
                              {service.name}
                            </h4>
                            <div className="h-px w-8 bg-gradient-to-r from-yellow-500 to-transparent mb-1" />
                            <p className="text-white/60 text-xs font-light">Explore {service.subname} services</p>
                          </div>

                          <div className="text-yellow-500 mr-2 transform group-hover:translate-x-1 transition-transform duration-300">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                              <path d="M5 12h14M12 5l7 7-7 7" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>

                {index < capabilitiesData.length - 1 && <div className="h-px w-full bg-gray-800 mt-6" />}
              </div>
            ))}
          </div>

          {/* DESKTOP LEFT STICKY PANEL */}
          <div className="hidden md:block md:sticky md:top-40 h-fit mt-6 md:mt-12">
            <motion.div key={activeCategory.id} initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -50 }} transition={{ duration: 0.5 }}>
              <div className="flex flex-col">
                <div>
                  <h3 className="text-2xl md:text-3xl lg:text-5xl font-medium tracking-wider text-yellow-500 uppercase text-center md:text-left" style={{ fontFamily: "anta, sans-serif" }}>
                    {activeCategory.title}
                  </h3>

                  <div className="mt-2 h-px w-full bg-gradient-to-r from-yellow-600 via-yellow-500/80 to-transparent" />
                  <div className="relative">
                    <p className="text-white/90 mt-3 md:mt-4 max-w-md leading-relaxed text-sm md:text-lg lg:text-[19px] font-light tracking-wide text-center md:text-left" style={{ fontFamily: "anta, sans-serif" }}>
                      {activeCategory.desc.split(". ")[0]}.
                    </p>

                    <div className="mt-4 md:mt-5 flex flex-wrap gap-2 md:gap-2 justify-center md:justify-start">
                      {getCategoryTags(activeCategory).map((tag, index) => (
                        <Link to={getTagLink(tag, activeCategory)} key={index}>
                          <span className={`${getTagStyle(tag)} cursor-pointer px-[18px] py-[8px] text-[20px] md:text-lg lg:text-[15px] inline-block text-xs`} style={{ fontFamily: "anta, sans-serif" }}>
                            {tag}
                          </span>
                        </Link>
                      ))}
                    </div>

                    <div className="mt-4 md:mt-5">
                      <RollingIcons icons={getCategoryIcons(activeCategory)} isInView={inViewItems[activeCategory.id]} />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* RIGHT SCROLLING SECTION - Desktop */}
          <div className="hidden md:flex flex-col">
            {capabilitiesData.map((cap, index) => (
              <div key={cap.id} ref={sectionRefs.current[index]} data-category-id={cap.id} className={`relative ${index < capabilitiesData.length - 1 ? "mb-40" : ""}`}>
                <div className="relative">
                  <StructuredImageLayout category={cap} inViewImages={inViewImages} imageRefs={imageRefs} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
