import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { useState, useRef, useEffect } from "react";

// ✅ Import images with clear names
import DesignTool from "/src/assets/newserviceehome/ar.png";
import Layout from "/src/assets/newserviceehome/3d.png";
import Component from "/src/assets/newserviceehome/vr.png";
import Por from "/src/assets/home/mobileapp.jpg";
import Portal from "/src/assets/newserviceehome/crm.png";
import Dashboard from "/src/assets/newserviceehome/server.png";
import Aws from "/src/assets/home/erp.png";
import Azure from "/src/assets/home/game.jpg";
import GoogleCloud from "/src/assets/home/web.jpg";
//icons
import air from "/src/assets/ourserviceicons/airicon.webp";
import crm from "/src/assets/ourserviceicons/crm.webp";
import iam from "/src/assets/ourserviceicons/iam.webp";
import vr from "/src/assets/ourserviceicons/vr.webp";

const capabilitiesData = [
  {
    id: "emerging-tech",
    title: "emerging tech",
    desc: "We deliver secure, scalable, and intelligent technology solutions that help businesses manage data efficiently, streamline operations, and enhance customer engagement.",
    children: [
      {
        name: "AR",
        img: DesignTool,
        emojis: [air],
        imageSettings: {
          position: { objectPosition: "center" },
          transform: "scale(1)",
          borderRadius: "18px"
        },
        size: "h-100",
        link: "/augmented_reality"
      },
      {
        name: "3D",
        img: Layout,
        emojis: ["📐"],
        imageSettings: {
          position: { objectPosition: "center" },
          transform: "scale(1)",
          borderRadius: "18px"
        },
        size: "h-100",
        link: "/3d_services"
      },
      {
        name: "VIRTUAL REALITY",
        img: Component,
        emojis: [vr],
        imageSettings: {
          position: { objectPosition: "center" },
          transform: "scale(1)",
          borderRadius: "18px"
        },
        size: "h-100",
        link: "/virtual_reality"
      },
    ],
  },
  {
    id: "data-cloud",
    title: "data and cloud",
    desc: "Empower your business with secure, scalable, and data-driven cloud solutions designed to boost performance and reliability. At ThirdVizion Labs, we create innovative digital applications that help brands manage data smarter, automate workflows, and drive growth.",
    children: [
      {
        name: "CRM",
        img: Portal,
        emojis: [crm],
        imageSettings: {
          position: { objectPosition: "center" },
          transform: "scale(1)",
          borderRadius: "18px"
        },
        size: "h-100",
        link: "/client_relationship_management"
      },
      {
        name: "IAM",
        img: Dashboard,
        emojis: [iam],
        imageSettings: {
          position: { objectPosition: "center" },
          transform: "scale(1)",
          borderRadius: "18px"
        },
        size: "h-100",
        link: "/identity_and_access_management"
      },
      {
        name: "ERP",
        img: Aws,
        emojis: ["📈"],
        imageSettings: {
          position: { objectPosition: "center" },
          transform: "scale(1)",
          borderRadius: "18px"
        },
        size: "h-100",
        link: "/enterprise_resource_planning"
      },
    ],
  },
  {
    id: "software-dev",
    title: "software development",
    desc: "We create innovative software solutions that help businesses grow in the digital era. From custom websites to mobile apps and interactive games, our team combines creativity, technology, and strategy to turn ideas into reality",
    children: [
      {
        name: "GAME DEVELOPMENT",
        img: Azure,
        emojis: ["🎮"],
        imageSettings: {
          position: { objectPosition: "center" },
          transform: "scale(1)",
          borderRadius: "18px"
        },
        size: "h-100",
        link: "/game_development"
      },
      {
        name: "WEBSITE",
        img: GoogleCloud,
        emojis: ["💻"],
        imageSettings: {
          position: { objectPosition: "center" },
          transform: "scale(1)",
          borderRadius: "18px"
        },
        size: "h-100",
        link: "/web_development"
      },
      {
        name: "MOBILE APP",
        img: Por,
        emojis: ["📱"],
        imageSettings: {
          position: { objectPosition: "center" },
          transform: "scale(1)",
          borderRadius: "18px"
        },
        size: "h-100",
        link: "/app_development"
      },
    ],
  },
];

// Floating Particles Component
const FloatingParticles = ({ isScrolling }) => {
  const particles = Array.from({ length: 8 }, (_, i) => ({
    id: i,
    size: Math.random() * 4 + 2,
    left: Math.random() * 80 + 10,
    delay: Math.random() * 0.5,
    duration: Math.random() * 1 + 2,
    opacity: Math.random() * 0.7 + 0.3,
  }));

  return (
    <div className="absolute -bottom-4 left-0 right-0 h-20 pointer-events-none z-0">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full bg-yellow-400"
          style={{
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            left: `${particle.left}%`,
            bottom: '0%',
            opacity: 0,
            filter: 'blur(0.5px)',
            boxShadow: '0 0 8px 2px rgba(255, 255, 0, 0.6)',
          }}
          animate={isScrolling ? {
            y: [0, -40, 0],
            opacity: [0, particle.opacity, 0],
            scale: [0.8, 1.2, 0.8],
          } : {
            opacity: 0,
            scale: 0
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: isScrolling ? Infinity : 0,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

// Emoji Animation Component
const RollingEmojis = ({ emojis, isInView }) => {
  return (
    <div className="flex space-x-3 mt-4 justify-start flex-wrap">
      {emojis.map((emoji, index) => (
        <motion.span
          key={index}
          className="text-[40px]"
          initial={{ 
            opacity: 0, 
            x: -80,
            rotate: -360,
            scale: 0.3
          }}
          animate={isInView ? { 
            opacity: 1, 
            x: 0,
            rotate: 0,
            scale: 1
          } : {
            opacity: 0,
            x: -80,
            rotate: -360,
            scale: 0.3
          }}
          transition={{
            duration: 0.9,
            delay: index * 0.2,
            type: "spring",
            stiffness: 100,
            damping: 15
          }}
          whileHover={{
            scale: 1.4,
            rotate: 15,
            transition: { duration: 0.3 }
          }}
        >
          {typeof emoji === 'string' ? emoji : <img src={emoji} alt="" className="w-10 h-10" />}
        </motion.span>
      ))}
    </div>
  );
};

// Slide Down Image Component (for first row - single image)
const SlideDownImage = ({ src, alt, delay = 0, isInView }) => {
  return (
    <motion.div
      initial={{ 
        opacity: 0, 
        y: -100,
        scale: 0.8
      }}
      animate={isInView ? { 
        opacity: 1, 
        y: 0,
        scale: 1
      } : {
        opacity: 0,
        y: -100,
        scale: 0.8
      }}
      transition={{
        duration: 0.8,
        delay: delay,
        type: "spring",
        stiffness: 80,
        damping: 15
      }}
      className="w-full h-full"
    >
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover"
        style={{ borderRadius: '18px' }}
      />
    </motion.div>
  );
};

// Slide Up Image Component (for second row - two images)
const SlideUpImage = ({ src, alt, delay = 0, isInView }) => {
  return (
    <motion.div
      initial={{ 
        opacity: 0, 
        y: 100,
        scale: 0.8
      }}
      animate={isInView ? { 
        opacity: 1, 
        y: 0,
        scale: 1
      } : {
        opacity: 0,
        y: 100,
        scale: 0.8
      }}
      transition={{
        duration: 0.8,
        delay: delay,
        type: "spring",
        stiffness: 80,
        damping: 15
      }}
      className="w-full h-full"
    >
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover"
        style={{ borderRadius: '18px' }}
      />
    </motion.div>
  );
};

// New Component for Structured Image Layout with Directional Animations
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
        <div className="grid grid-cols-2 gap-4">
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

// Updated Image Card Component with Directional Animation
const ImageCard = ({ service, category, index, inViewImages, imageRefs, fullWidth, animationType }) => {
  const imageId = `${category.id}-${service.name}-image`;
  
  return (
    <div className={`block relative ${getPositionClass(category.id, index)}`}>
      <Link to={service.link}>
        <motion.div
          className="group cursor-pointer relative"
          whileHover={{
            scale: 1.03,
          }}
          transition={{ type: "spring", stiffness: 200, damping: 15 }}
        >
          {/* IMAGE BOX */}
          <div className="p-1 relative z-10">
            <div
              className={`${fullWidth ? 'h-72' : 'h-60'} overflow-hidden border border-gray-600/30 shadow-2xl relative group`}
              style={{ borderRadius: service.imageSettings.borderRadius }}
            >
              <div 
                className="w-full h-full"
                ref={el => imageRefs.current[imageId] = el}
              >
                {animationType === "slideDown" ? (
                  <SlideDownImage 
                    src={service.img}
                    alt={service.name}
                    delay={index * 0.2}
                    isInView={inViewImages[imageId]}
                  />
                ) : (
                  <SlideUpImage 
                    src={service.img}
                    alt={service.name}
                    delay={index * 0.2}
                    isInView={inViewImages[imageId]}
                  />
                )}
              </div>
              <div className="absolute inset-0 bg-black/40 opacity-70 group-hover:opacity-30 transition-all duration-500"></div>

              {/* TITLE OVERLAY */}
              <div className="absolute bottom-3 left-3 right-3">
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <h4 className="text-white text-base font-semibold mb-1">
                      {service.name}
                    </h4>
                  </div>
                  <div className="text-yellow-500 transform group-hover:translate-x-1 transition-transform duration-300">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M5 12h14M12 5l7 7-7 7"/>
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

// Helper function for positioning with reduced margins
const getPositionClass = (categoryId, index) => {
  const positions = {
    "emerging-tech": ["mt-12", "mt-6", "mt-6"],
    "data-cloud": ["mt-16", "mt-8", "mt-8"],
    "software-dev": ["mt-10", "mt-4", "mt-4"]
  };
  
  return positions[categoryId]?.[index] || "";
};

export default function Categories() {
  const [activeCategoryId, setActiveCategoryId] = useState(capabilitiesData[0].id);
  const [isScrolling, setIsScrolling] = useState(false);
  const [inViewItems, setInViewItems] = useState({});
  const [inViewImages, setInViewImages] = useState({});
  const scrollContainerRef = useRef(null);
  const sectionRefs = useRef(capabilitiesData.map(() => useRef(null)));
  const imageRefs = useRef({});
  const itemRefs = useRef({});
  const scrollTimeoutRef = useRef(null);

  const activeCategory = capabilitiesData.find(cap => cap.id === activeCategoryId) || capabilitiesData[0];

  // Handle scroll detection for the entire window
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolling(true);

      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }

      scrollTimeoutRef.current = setTimeout(() => {
        setIsScrolling(false);
      }, 100);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, []);

  // Intersection Observer for categories
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActiveCategoryId(entry.target.dataset.categoryId);
          }
        });
      },
      {
        root: null,
        rootMargin: '0px 0px -50% 0px',
        threshold: 0.01
      }
    );

    sectionRefs.current.forEach(ref => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => {
      sectionRefs.current.forEach(ref => {
        if (ref.current) observer.unobserve(ref.current);
      });
    };
  }, []);

  // Intersection Observer for individual items (emojis)
  useEffect(() => {
    const itemObserver = new IntersectionObserver(
      (entries) => {
        const updates = {};
        entries.forEach(entry => {
          updates[entry.target.dataset.categoryId] = entry.isIntersecting;
        });
        setInViewItems(prev => ({ ...prev, ...updates }));
      },
      {
        root: null,
        rootMargin: '0px 0px -20% 0px',
        threshold: 0.4
      }
    );

    // Observe all category sections
    capabilitiesData.forEach(category => {
      const ref = sectionRefs.current[capabilitiesData.indexOf(category)];
      if (ref.current) {
        ref.current.dataset.categoryId = category.id;
        itemObserver.observe(ref.current);
      }
    });

    return () => {
      capabilitiesData.forEach(category => {
        const ref = sectionRefs.current[capabilitiesData.indexOf(category)];
        if (ref.current) itemObserver.unobserve(ref.current);
      });
    };
  }, []);

  // Intersection Observer for images
  useEffect(() => {
    const imageObserver = new IntersectionObserver(
      (entries) => {
        const updates = {};
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            updates[entry.target.dataset.imageId] = true;
          }
        });
        setInViewImages(prev => ({ ...prev, ...updates }));
      },
      {
        root: null,
        rootMargin: '0px 0px -10% 0px',
        threshold: 0.3
      }
    );

    // Observe all images
    capabilitiesData.forEach(category => {
      category.children.forEach((child, index) => {
        const imageId = `${category.id}-${child.name}-image`;
        const ref = imageRefs.current[imageId];
        if (ref) {
          ref.dataset.imageId = imageId;
          imageObserver.observe(ref);
        }
      });
    });

    return () => {
      Object.values(imageRefs.current).forEach(ref => {
        if (ref) imageObserver.unobserve(ref);
      });
    };
  }, []);

  const getCategoryTags = (category) => {
    if (category.id === "data-cloud") {
      return [
        ...category.children.map(child => child.name),
        "SERVER MANAGEMENT"
      ];
    }
    return category.children.map(child => child.name);
  };

  const getTagStyle = (tag) => {
    const specialTags = [""];

    if (specialTags.includes(tag)) {
      return "px-4 py-2 border border-yellow-500 bg-yellow-500 rounded-full text-black text-sm font-medium hover:bg-black hover:text-yellow-500 transition-all duration-300";
    }

    return "px-4 py-2 border border-white/40 rounded-full text-white text-sm font-medium hover:bg-yellow-500 hover:text-black hover:border-yellow-500 transition-all duration-300";
  };

  const getTagLink = (tag, category) => {
    const childItem = category.children.find(child =>
      child.name.toUpperCase() === tag.toUpperCase()
    );

    // Special case for SERVER MANAGEMENT in data-cloud section
    if (tag === "SERVER MANAGEMENT" && category.id === "data-cloud") {
      return "/server_management";
    }

    return childItem?.link || "#";
  };

  return (
    <>
      <h1
        className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl bg-[#000000] text-center uppercase pt-8"
        style={{ fontFamily: "Outfit, sans-serif" }}
      >
        <span className="text-white">OUR</span>{" "}
        <span className="text-yellow-500">SERVICE</span>
      </h1>
      
      <section className="bg-black text-white min-h-screen px-4 py-6 md:px-12 md:py-12" ref={scrollContainerRef}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">

          {/* MOBILE VIEW */}
          <div className="block md:hidden">
            {capabilitiesData.map((category, index) => (
              <div key={category.id} className="mb-8">
                {/* Category Header */}
                <div className="text-center mb-4">
                  <h3 
                    className="text-xl font-semibold tracking-wide text-yellow-500 mb-2 uppercase"
                    style={{ fontFamily: "Outfit, sans-serif" }}
                  >
                    {category.title}
                  </h3>
                  
                  <div className="h-px w-12 mx-auto bg-gradient-to-r from-yellow-600 via-yellow-500 to-yellow-600 mb-2"></div>
                  
                  <p
                    className="text-white/80 text-xs leading-relaxed font-light tracking-wide max-w-md mx-auto px-2"
                    style={{ fontFamily: "Work Sans, sans-serif" }}
                  >
                    {category.desc.split('. ')[0]}.
                  </p>
                </div>

                {/* Service Cards */}
                <div className="space-y-3">
                  {category.children.map((service, serviceIndex) => (
                    <Link
                      key={serviceIndex}
                      to={service.link}
                      className="block"
                    >
                      <div className="group cursor-pointer relative border border-gray-700 rounded-xl p-3 hover:bg-gray-800/80 hover:border-yellow-500/40 transition-all duration-300">
                        <div className="flex items-center space-x-3">
                          {/* Service Image */}
                          <div className="flex-shrink-0 w-12 h-12 rounded-lg overflow-hidden border border-gray-600">
                            <img
                              src={service.img}
                              alt={service.name}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          
                          {/* Service Info */}
                          <div className="flex-1">
                            <h4 
                              className="text-white text-sm font-semibold tracking-wide mb-1"
                              style={{ fontFamily: "Outfit, sans-serif" }}
                            >
                              {service.name}
                            </h4>
                            <div className="h-px w-8 bg-gradient-to-r from-yellow-500 to-transparent mb-1"></div>
                            <p className="text-white/60 text-xs font-light">
                              Explore {service.name.toLowerCase()} services
                            </p>
                          </div>
                          
                          {/* Arrow Indicator */}
                          <div className="text-yellow-500 transform group-hover:translate-x-1 transition-transform duration-300">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                              <path d="M5 12h14M12 5l7 7-7 7"/>
                            </svg>
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>

                {/* Category Tags */}
                <div className="mt-4 flex flex-wrap gap-1 justify-center">
                  {getCategoryTags(category).map((tag, tagIndex) => (
                    <Link
                      to={getTagLink(tag, category)}
                      key={tagIndex}
                    >
                      <span
                        className="px-3 py-1 border border-white/40 rounded-full text-white text-xs font-medium hover:bg-yellow-500 hover:text-black hover:border-yellow-500 transition-all duration-300"
                        style={{ fontFamily: "Outfit, sans-serif" }}
                      >
                        {tag}
                      </span>
                    </Link>
                  ))}
                </div>

                {/* Section Divider */}
                {index < capabilitiesData.length - 1 && (
                  <div className="h-px w-full bg-gray-800 mt-6"></div>
                )}
              </div>
            ))}
          </div>

          {/* DESKTOP VIEW */}
          <div className="hidden md:block md:sticky md:top-40 h-fit mt-6 md:mt-12">
            <motion.div
              key={activeCategory.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex flex-col">
                <div>
                  <h3 
                    className="text-2xl md:text-3xl lg:text-3xl font-medium tracking-wider text-yellow-500 mb-3 md:mb-4 uppercase text-center md:text-left"
                    style={{ fontFamily: "Outfit, sans-serif" }}
                  >
                    {activeCategory.title}
                  </h3>
                  
                  <div className="mt-3 md:mt-4 h-px w-full bg-gradient-to-r from-yellow-600 via-yellow-500/80 to-transparent"></div>
                  <div className="relative">
                    <p
                      className="text-white/90 mt-3 md:mt-4 max-w-md leading-relaxed text-sm md:text-base font-light tracking-wide text-center md:text-left"
                      style={{ fontFamily: "Work Sans, sans-serif" }}
                    >
                      {activeCategory.desc.split('. ')[0]}.
                    </p>
                    
                    {/* BUTTONS SECTION */}
                    <div className="mt-4 md:mt-5 flex flex-wrap gap-2 md:gap-2 justify-center md:justify-start">
                      {getCategoryTags(activeCategory).map((tag, index) => (
                        <Link
                          to={getTagLink(tag, activeCategory)}
                          key={index}
                        >
                          <span
                            className={`${getTagStyle(tag)} cursor-pointer inline-block text-xs`}
                            style={{ fontFamily: "Outfit, sans-serif" }}
                          >
                            {tag}
                          </span>
                        </Link>
                      ))}
                    </div>

                    {/* EMOJIS BELOW BUTTONS on LEFT SIDE */}
                    <div className="mt-4 md:mt-5">
                      <RollingEmojis 
                        emojis={activeCategory.children.flatMap(child => child.emojis).slice(0, 6)} 
                        isInView={inViewItems[activeCategory.id]} 
                      />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* RIGHT SCROLLING SECTION - Desktop only with NEW STRUCTURE */}
          <div className="hidden md:flex flex-col">
            {capabilitiesData.map((cap, index) => (
              <div
                key={cap.id}
                ref={sectionRefs.current[index]}
                data-category-id={cap.id}
                className={`relative ${index < capabilitiesData.length - 1 ? 'mb-40' : ''}`}
              >
                <div className="relative">
                  <StructuredImageLayout 
                    category={cap}
                    inViewImages={inViewImages}
                    imageRefs={imageRefs}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Floating Particles for Desktop */}
        <div className="hidden md:block">
          <FloatingParticles isScrolling={isScrolling} />
        </div>

        <div className="text-center mt-16 md:mt-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            {/* Additional content if needed */}
          </motion.div>
        </div>
      </section>
    </>
  );
}