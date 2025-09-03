import { useState } from "react";
import { ChevronDown } from "lucide-react"; // arrow icon

const FAQSection = () => {
  const faqs = [
    {
      question: "What services do you provide?",
      answer:
        "We offer website development, 3D web experiences, AR (Augmented Reality), and VR (Virtual Reality) solutions to create immersive digital platforms.",
    },
    {
      question: "Can you build 3D and interactive websites?",
      answer:
        "Yes! We specialize in 3D web development using WebGL, Three.js, and React frameworks to bring products and ideas to life online.",
    },
    {
      question: "Do you provide AR and VR solutions for businesses?",
      answer:
        "Absolutely. We develop AR apps, VR environments, and interactive experiences that help brands engage customers in new and innovative ways.",
    },
    {
      question: "How long does a project usually take?",
      answer:
        "It depends on complexity. A standard website can take 2–4 weeks, while advanced 3D/AR/VR solutions may require 6–12 weeks.",
    },
    {
      question: "Do you provide ongoing support?",
      answer:
        "Yes, we provide post-launch support, maintenance, and scalability updates to ensure your website or immersive experience runs smoothly.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4 sm:px-6 lg:px-12 py-12 md:py-20">
      <div className="w-full max-w-[1300px]">
        {/* Heading + Description */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12 lg:mb-20">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl 2xl:text-7xl text-white font-bold mb-6 md:mb-0 text-left">
            FAQs
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed text-left md:text-right max-w-xl md:ml-auto md:mr-[20px]">
            From stunning websites to immersive AR and VR experiences, we bring
            technology and creativity together to build the future of digital.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4 sm:space-y-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="w-full bg-white/5 border border-gray-700 rounded-xl sm:rounded-2xl px-4 sm:px-6 py-3 sm:py-5 text-white cursor-pointer transition-all duration-300 hover:bg-white/10"
              onClick={() => toggleFAQ(index)}
            >
              {/* Question + Arrow */}
              <div className="flex justify-between items-center">
                <div className="text-base sm:text-lg md:text-xl font-medium">
                  {faq.question}
                </div>
                <ChevronDown
                  className={`w-5 h-5 sm:w-6 sm:h-6 transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </div>

              {/* Answer */}
              <div
                className={`mt-2 text-sm sm:text-base text-gray-400 transition-all duration-500 ease-in-out overflow-hidden ${
                  openIndex === index
                    ? "max-h-40 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                {faq.answer}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQSection;
