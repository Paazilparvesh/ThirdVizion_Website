import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

// Icons
import { 
  FiHome, 
  FiBox, 
  FiTool, 
  FiGlobe, 
  FiShoppingBag,
  FiTrendingUp 
} from "react-icons/fi";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function IndustriesSection() {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {

      // Animate cards sequentially
      cardsRef.current.forEach((card, index) => {
        gsap.fromTo(
          card,
          { y: 50, opacity: 0, scale: 0.9 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 80%",
            },
            delay: index * 0.15,
          }
        );
      });

      // Title animation
      gsap.fromTo(
        ".section-title",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".section-title",
            start: "top 80%",
          },
        }
      );

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const addToCardsRef = (el) => {
    if (el && !cardsRef.current.includes(el)) {
      cardsRef.current.push(el);
    }
  };

  // Card Data (Icons + Text)
  const leftColumnCards = [
    {
      icon: <FiHome size={28} />,
      title: "Architecture",
      text: "Immersive 3D visualizations, virtual tours, and photorealistic renderings for architectural projects and presentations.",
    },
    {
      icon: <FiBox size={28} />,
      title: "Real Estate",
      text: "Interactive property showcases, virtual staging, and AR-powered home tours for modern real estate marketing.",
    },
    {
      icon: <FiTool size={28} />,
      title: "Manufacturing",
      text: "Digital twins, product configurators, and assembly line simulations for improved design and production processes.",
    },
  ];

  const rightColumnCards = [
    {
      icon: <FiGlobe size={28} />,
      title: "Gaming",
      text: "High-quality 3D assets, character models, and environmental designs for next-gen gaming experiences.",
    },
    {
      icon: <FiTrendingUp size={28} />,
      title: "Marketing & Advertising",
      text: "Engaging AR campaigns, interactive product demos, and cutting-edge visual content for digital marketing services.",
    },
    {
      icon: <FiShoppingBag size={28} />,
      title: "E-commerce",
      text: "3D product visualizations, virtual try-ons, and interactive shopping experiences for online retail stores.",
    },
  ];

  // FeatureCard component with exact colors from SectionTwo
  const FeatureCard = ({ icon, title, text }) => (
    <div
      ref={addToCardsRef}
      className="group p-5 rounded-xl bg-gradient-to-br from-gray-900/40 to-gray-800/20 border border-white/5 hover:border-pink-500/30 transition-all duration-300 hover:translate-y-[-2px] hover:shadow-2xl hover:shadow-pink-500/10"
    >
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br from-pink-600 to-purple-600 flex items-center justify-center shadow-lg shadow-pink-500/20 group-hover:scale-110 transition-transform duration-300">
          <div className="text-white"  style={{ fontFamily: "DeaconTest, sans-serif" }}>
            {icon}
          </div>
        </div>
        <div>
          <h3 className="text-white font-semibold text-lg mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-pink-300 group-hover:to-purple-300 group-hover:bg-clip-text transition-all">
            {title}
          </h3 >
          <p className="text-gray-400 text-sm leading-relaxed" style={{ fontFamily: "anta, sans-serif" }}>
            {text}
          </p>
        </div>
      </div>
    </div>
  );

  return (
    <section
      ref={sectionRef}
      className="w-full min-h-screen flex items-center px-6 sm:px-12 lg:px-24"
    >
      <div className="container mx-auto">
        {/* Section Title - matching SectionTwo styling */}
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <div className="mb-4">
            <span className="inline-block px-4 py-1.5 text-xs font-medium tracking-wider uppercase bg-gradient-to-r from-pink-500/10 via-purple-500/5 to-purple-500/10 text-pink-300 rounded-lg border border-white/5 backdrop-blur-sm" style={{ fontFamily: "DeaconTest, sans-serif" }}>
              Our Expertise
            </span>
          </div>
          
          <h1 className="section-title font-bold text-white text-4xl sm:text-5xl lg:text-6xl leading-tight mb-2" style={{ fontFamily: "DeaconTest, sans-serif" }}>
            Industries <span className="bg-gradient-to-r from-pink-400 to-purple-600 bg-clip-text text-transparent">We Serve</span>
          </h1>
          
          <p className="text-lg max-w-2xl mx-auto text-gray-400" style={{ fontFamily: "anta, sans-serif" }}>
            Transforming visions into immersive digital experiences across diverse sectors
          </p>
        </div>

        {/* 3-column layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          
          {/* LEFT COLUMN */}
          <div className="flex flex-col gap-5">
            {leftColumnCards.map((card, index) => (
              <FeatureCard
                key={index}
                icon={card.icon}
                title={card.title}
                text={card.text}
              />
            ))}
          </div>

          {/* EMPTY MIDDLE COLUMN */}
          <div className="hidden lg:flex items-center justify-center">
            <div className="relative w-full h-full flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-r from-pink-500/10 to-purple-500/10 blur-3xl rounded-full"></div>
              {/* Placeholder for future 3D model or animation */}
              <div className="relative z-10 w-48 h-48 flex items-center justify-center">
                
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="flex flex-col gap-5">
            {rightColumnCards.map((card, index) => (
              <FeatureCard
                key={index}
                icon={card.icon}
                title={card.title}
                text={card.text}
              />
            ))}
          </div>

        </div>

       
      </div>
    </section>
  );
}