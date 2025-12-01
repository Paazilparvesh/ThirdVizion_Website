import React, { useState, useEffect } from "react";

// --- Testimonials Data ---
const testimonials = [
  {
    name: "Santhosh Kumar",
    role: "Kanakavali ",
    review:
    "Working with ThirdVizion transformed our hardware business’s online presence. The team delivered a sleek, high-performance website that showcases our products beautifully and elevates our brand identity. Their precision, creativity, and timely execution truly set them apart."
  },
  {
    name: "Rajesh",
    role: "Asmi ",
    review:
    "ThirdVizion did an excellent job building our NGO website. They captured our mission perfectly and delivered a clean, impactful, and easy-to-navigate platform. Their professionalism and understanding of our cause made the entire experience smooth and meaningful."
  },
  {
    name: "Sivaganga",
    role: "Madras Kitchen ",
    review:
    "ThirdVizion delivered a beautifully crafted website for our food business. The clean design, smooth user experience, and easy ordering flow have helped us attract more customers online. Their work truly elevated our brand’s digital presence."
  },
  {
    name: "Priya Nandakumar",
    role: "TourSup ",
    review:
    "ThirdVizion built a modern and engaging website for our travel company. The clean layouts, smooth navigation, and well-structured tour pages have significantly boosted customer inquiries. Their clarity, creativity, and professionalism made the entire process seamless."
  },
 
];

export default function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  // Auto change every 3s
  useEffect(() => {
    if (paused) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [paused]);

  const next = () => setActiveIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () =>
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="relative bg-black text-white py-16 md:py-24 overflow-hidden">
      <div className="relative z-10 container mx-auto px-4 md:px-6 text-center">
        <h2 className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-bold uppercase mb-4 text-white"    style={{ fontFamily: "DeaconTest, sans-serif", fontWeight: 600 }}
>
          What People Say <span className="text-[#FFC016]"    style={{ fontFamily: "DeaconTest, sans-serif", fontWeight: 600 }}
> About Us</span>
        </h2>

        <p className="text-white text-sm md:text-lg mb-12 md:mb-16 max-w-2xl mx-auto px-4" style={{ fontFamily: "anta, sans-serif" }}>
          Hear from companies and developers who trust ThirdVizion for premium digital solutions.
        </p>

        {/* --- Mobile View --- */}
        <div className="block md:hidden">
          <div 
            className="max-w-md mx-auto"
            onTouchStart={() => setPaused(true)}
            onTouchEnd={() => setPaused(false)}
          >
            {/* Main Testimonial Card */}
            <div className=" border border-gray-800 rounded-2xl shadow-lg p-6 mb-8">
              <div className="flex flex-col items-center text-center">
                {/* Rating Stars */}
                <div className="flex space-x-1 mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg key={star} className="w-5 h-5 text-[#FFC016]" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                    </svg>
                  ))}
                </div>
                
                {/* Review Text */}
                <p className="text-gray-300 leading-relaxed text-base mb-6 px-2" style={{ fontFamily: "anta, sans-serif" }}>
                  "{testimonials[activeIndex].review}"
                </p>
                
                {/* Client Info */}
                <div className="mb-4">
                  <h4 className="text-lg font-semibold text-white mb-1" style={{ fontFamily: "anta, sans-serif" }}>
                    {testimonials[activeIndex].name}
                  </h4>
                  <p className="text-[#FFC016] text-sm font-medium" style={{ fontFamily: "anta, sans-serif" }}>
                    {testimonials[activeIndex].role}
                  </p>
                </div>
              </div>
            </div>

            {/* Navigation Dots */}
            <div className="flex justify-center space-x-3 mb-8">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveIndex(i)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    i === activeIndex ? "bg-[#FFC016] w-6" : "bg-gray-600"
                  }`}
                />
              ))}
            </div>

            {/* Navigation Buttons */}
            <div className="flex justify-center items-center space-x-6">
              <button
                onClick={prev}
                className="w-12 h-12 rounded-full bg-black border border-gray-700 flex items-center justify-center text-white text-xl transition-all duration-300 hover:border-[#FFC016] hover:bg-[#FFC016] group"
              >
                <span className="group-hover:text-black">‹</span>
              </button>

              <button
                onClick={next}
                className="w-12 h-12 rounded-full bg-black border border-gray-700 flex items-center justify-center text-white text-xl transition-all duration-300 hover:border-[#FFC016] hover:bg-[#FFC016] group"
              >
                <span className="group-hover:text-black">›</span>
              </button>
            </div>
          </div>
        </div>

        {/* --- Desktop View --- */}
        <div className="hidden md:block relative max-w-6xl mx-auto">
          <div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
            {/* Main Featured Card */}
            <div className="lg:col-span-2">
              <div
                key={activeIndex}
                className="w-full border border-gray-800 rounded-2xl shadow-2xl p-10 h-full relative"
              >
                {/* Quote Icon */}
                <div className="flex flex-col items-center text-center relative z-10">
                  <div className="mb-8">
                    <h4 className="text-2xl font-semibold text-white mb-2" style={{ fontFamily: "anta, sans-serif" }}>
                      {testimonials[activeIndex].name}
                    </h4>
                    <p className="text-[#FFC016] text-base font-medium" style={{ fontFamily: "anta, sans-serif" }}>
                      {testimonials[activeIndex].role}
                    </p>
                  </div>
                  <p className="text-gray-300 leading-relaxed text-xl max-w-2xl" style={{ fontFamily: "anta, sans-serif" }}>
                    "{testimonials[activeIndex].review}"
                  </p>
                  
                  {/* Rating Stars */}
                  <div className="flex space-x-1 mt-8">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg key={star} className="w-6 h-6 text-[#FFC016]" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Side Cards */}
            <div className="space-y-6">
              {testimonials
                .filter((_, index) => index !== activeIndex)
                .slice(0, 2)
                .map((testimonial, index) => (
                  <div
                    key={testimonial.name}
                    className="border border-gray-800 rounded-xl shadow-lg p-6 hover:border-[#FFC016] transition-all duration-300 cursor-pointer group"
                    onClick={() => setActiveIndex(testimonials.indexOf(testimonial))}
                  >
                    <div className="text-left">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h5 className="font-semibold text-white text-lg group-hover:text-[#FFC016] transition-colors" style={{ fontFamily: "anta, sans-serif" }}>
                            {testimonial.name}
                          </h5>
                          <p className="text-gray-400 text-sm" style={{ fontFamily: "anta, sans-serif" }}>
                            {testimonial.role}
                          </p>
                        </div>
                        <div className="flex space-x-1">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <svg key={star} className="w-4 h-4 text-[#FFC016]" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                            </svg>
                          ))}
                        </div>
                      </div>
                      <p className="text-gray-300 text-sm leading-relaxed line-clamp-4" style={{ fontFamily: "anta, sans-serif" }}>
                        "{testimonial.review}"
                      </p>
                    </div>
                  </div>
                ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-center items-center mt-16 space-x-8">
            <button
              onClick={prev}
              className="w-14 h-14 rounded-full bg-black border border-gray-700 flex items-center justify-center text-white text-2xl transition-all duration-300 hover:scale-110 hover:border-[#FFC016] hover:bg-[#FFC016] group"
            >
              <span className="group-hover:text-black">‹</span>
            </button>

            {/* Dots */}
            <div className="flex space-x-4">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveIndex(i)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    i === activeIndex ? "bg-[#FFC016] w-8" : "bg-gray-600 hover:bg-gray-400"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-14 h-14 rounded-full bg-black border border-gray-700 flex items-center justify-center text-white text-2xl transition-all duration-300 hover:scale-110 hover:border-[#FFC016] hover:bg-[#FFC016] group"
            >
              <span className="group-hover:text-black">›</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}