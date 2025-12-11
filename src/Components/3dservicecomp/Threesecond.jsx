import React, { useState } from 'react';
import { FiGrid, FiChevronRight, FiX } from 'react-icons/fi';
import { GiMedicalPack } from 'react-icons/gi';
import { MdArchitecture, MdPrecisionManufacturing } from 'react-icons/md';
import { FaGamepad, FaFilm, FaCar } from 'react-icons/fa';

function ThreeDServicesIndustry() {
  const [selectedIndustry, setSelectedIndustry] = useState(null);

  const industries = [
    {
      id: 1,
      title: "Architecture & Real Estate",
      icon: <MdArchitecture className="text-3xl" />,
      description: "3D architectural visualization, virtual tours, property walkthroughs",
      services: ["3D Floor Plans", "Virtual Staging", "Exterior Rendering", "VR Walkthroughs", "3D Site Planning"],
      color: "from-pink-500 to-purple-500",
      bgColor: "bg-gradient-to-br from-pink-900/20 to-purple-900/10",
      accentColor: "text-pink-400"
    },
    {
      id: 2,
      title: "Gaming & Entertainment",
      icon: <FaGamepad className="text-3xl" />,
      description: "Character modeling, environment design, game asset creation",
      services: ["3D Character Design", "Environment Modeling", "Game Assets", "Animation", "VR Experiences"],
      color: "from-purple-500 to-violet-500",
      bgColor: "bg-gradient-to-br from-purple-900/20 to-violet-900/10",
      accentColor: "text-purple-400"
    },
    {
      id: 3,
      title: "Film & Animation",
      icon: <FaFilm className="text-3xl" />,
      description: "VFX, 3D animation, motion graphics, CGI",
      services: ["3D Animation", "Visual Effects", "Motion Graphics", "Character Rigging", "Cinematic Rendering"],
      color: "from-fuchsia-500 to-pink-500",
      bgColor: "bg-gradient-to-br from-fuchsia-900/20 to-pink-900/10",
      accentColor: "text-fuchsia-400"
    },
    {
      id: 4,
      title: "Manufacturing & Industrial",
      icon: <MdPrecisionManufacturing className="text-3xl" />,
      description: "Product design, prototyping, assembly simulation",
      services: ["Product Modeling", "Prototype Visualization", "Assembly Simulation", "3D Printing", "CAD Conversion"],
      color: "from-violet-500 to-purple-500",
      bgColor: "bg-gradient-to-br from-violet-900/20 to-purple-900/10",
      accentColor: "text-violet-400"
    },
    {
      id: 5,
      title: "Healthcare & Medical",
      icon: <GiMedicalPack className="text-3xl" />,
      description: "Medical visualization, surgical planning, educational models",
      services: ["Anatomical Models", "Surgical Planning", "Medical Device Design", "Educational Visuals", "Prosthetic Design"],
      color: "from-pink-500 to-rose-500",
      bgColor: "bg-gradient-to-br from-pink-900/20 to-rose-900/10",
      accentColor: "text-rose-400"
    },
    {
      id: 6,
      title: "Automotive & Aerospace",
      icon: <FaCar className="text-3xl" />,
      description: "Vehicle design, aerodynamics, interior visualization",
      services: ["Vehicle Modeling", "Aerodynamic Analysis", "Interior Design", "Assembly Simulation", "Concept Visualization"],
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-gradient-to-br from-purple-900/20 to-pink-900/10",
      accentColor: "text-purple-400"
    },
  ];

  const services = [
    {
      title: "3D Modeling & Design",
      description: "High-quality 3D models with precise detailing"
    },
    {
      title: "Animation & Motion Graphics",
      description: "Smooth animations and engaging motion content"
    },
    {
      title: "VR/AR Development",
      description: "Immersive virtual and augmented reality experiences"
    },
    {
      title: "3D Rendering & Visualization",
      description: "Photorealistic renders and visualizations"
    },
    {
      title: "3D Scanning & Digitization",
      description: "Accurate digitization of physical objects"
    },
    {
      title: "Interactive 3D Web",
      description: "Web-based interactive 3D experiences"
    },
    {
      title: "3D Printing Services",
      description: "From digital models to physical prototypes"
    },
    {
      title: "Virtual Production",
      description: "Studio-quality virtual production solutions"
    }
  ];

  const technologies = [
    { name: "Blender", category: "Modeling" },
    { name: "Maya", category: "Animation" },
    { name: "3ds Max", category: "Rendering" },
    { name: "Cinema 4D", category: "Motion Graphics" },
    { name: "ZBrush", category: "Sculpting" },
    { name: "Substance", category: "Texturing" },
    { name: "Unity", category: "Real-time" },
    { name: "Unreal Engine", category: "Real-time" },
    { name: "VRay", category: "Rendering" },
    { name: "Arnold", category: "Rendering" },
    { name: "KeyShot", category: "Rendering" },
    { name: "Houdini", category: "VFX" }
  ];

  return (
    <div className="min-h-screen bg-black text-gray-100">
      {/* Industries Section */}
      <section id="industries" className="py-12 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-3 text-white">Industries We Serve</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Delivering tailored 3D solutions across diverse business sectors
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {industries.map((industry) => (
              <div 
                key={industry.id}
                className="group relative bg-gradient-to-br from-gray-900/50 to-black backdrop-blur-sm border border-gray-800/70 rounded-xl p-6 hover:border-pink-500/50 transition-all duration-300 cursor-pointer hover:-translate-y-1"
                onClick={() => setSelectedIndustry(industry)}
              >
                {/* Icon Container */}
                <div className="flex items-start justify-between mb-4">
                  <div className={`p-3 rounded-lg bg-gradient-to-br ${industry.color} shadow-lg`}>
                    {industry.icon}
                  </div>
                  <span className={`text-xs font-semibold px-3 py-1 rounded-full ${industry.accentColor} bg-gray-900/70`}>
                    {industry.services.length} Services
                  </span>
                </div>
                
                {/* Content */}
                <h3 className="text-xl font-semibold mb-3 text-white">{industry.title}</h3>
                <p className="text-gray-300 text-sm mb-6 leading-relaxed">
                  {industry.description}
                </p>
                
                {/* Services Preview */}
                <div className="space-y-2 mb-4">
                  {industry.services.slice(0, 3).map((service, idx) => (
                    <div key={idx} className="flex items-center text-sm">
                      <div className={`w-2 h-2 rounded-full ${industry.accentColor} mr-3`}></div>
                      <span className="text-gray-200">{service}</span>
                    </div>
                  ))}
                </div>
                
                {/* View More */}
                <div className="flex items-center text-sm text-pink-400 font-medium mt-6 pt-4 border-t border-gray-800/70">
                  <span>View all services</span>
                  <FiChevronRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-pink-500/30 rounded-xl transition-all duration-300 pointer-events-none"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-12 px-4 bg-gradient-to-b from-gray-900/30 to-black">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-3 text-white">Our 3D Services</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Comprehensive 3D solutions delivered with precision and expertise
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {services.map((service, index) => (
              <div 
                key={index}
                className="group bg-gray-900/40 backdrop-blur-sm border border-gray-800/50 rounded-lg p-5 hover:border-pink-500/40 hover:bg-gray-900/60 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-pink-600/30 to-purple-600/30 flex items-center justify-center mb-4 group-hover:from-pink-600/40 group-hover:to-purple-600/40 transition-all duration-300">
                  <FiGrid className="text-pink-400 text-xl" />
                </div>
                <h3 className="text-lg font-semibold mb-2 group-hover:text-pink-300 transition-colors duration-300 text-white">
                  {service.title}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section id="technologies" className="py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-3 text-white">Technologies We Use</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Industry-leading software and tools for premium 3D solutions
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-3">
            {technologies.map((tech, index) => (
              <div 
                key={index}
                className="group bg-gray-900/50 backdrop-blur-sm border border-gray-800/50 rounded-lg p-4 hover:border-pink-500/40 hover:bg-gray-900/70 transition-all duration-300"
              >
                <div className="text-center">
                  <div className="text-lg font-medium text-gray-200 mb-1 group-hover:text-white transition-colors duration-300">
                    {tech.name}
                  </div>
                  <div className="text-xs text-pink-400 bg-black/50 px-2 py-1 rounded-full inline-block">
                    {tech.category}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Modal */}
      {selectedIndustry && (
        <div className="fixed inset-0 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-gradient-to-b from-gray-900 to-black rounded-xl border border-gray-800 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            {/* Modal Header */}
            <div className="sticky top-0 bg-black/95 backdrop-blur-sm border-b border-gray-800 p-6">
              <div className="flex justify-between items-start">
                <div className="flex items-center space-x-4">
                  <div className={`p-4 rounded-xl bg-gradient-to-br ${selectedIndustry.color} shadow-lg`}>
                    {selectedIndustry.icon}
                  </div>
                  <div className="max-w-md">
                    <h3 className="text-2xl font-bold mb-2 text-white">{selectedIndustry.title}</h3>
                    <p className="text-gray-300 text-sm">{selectedIndustry.description}</p>
                  </div>
                </div>
                <button 
                  onClick={() => setSelectedIndustry(null)}
                  className="p-2 hover:bg-gray-900 rounded-lg transition-colors duration-300"
                >
                  <FiX className="text-xl text-gray-400 hover:text-white" />
                </button>
              </div>
            </div>
            
            {/* Modal Content */}
            <div className="p-6">
              {/* Services Section */}
              <div className="mb-8">
                <h4 className="text-xl font-semibold mb-4 text-white">Available Services</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {selectedIndustry.services.map((service, idx) => (
                    <div 
                      key={idx}
                      className="flex items-center bg-gray-900/50 rounded-lg p-4 hover:bg-gray-900/70 transition-all duration-300"
                    >
                      <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${selectedIndustry.color} flex items-center justify-center mr-3`}>
                        <FiChevronRight className="text-white text-sm" />
                      </div>
                      <span className="text-gray-200">{service}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Key Benefits */}
              <div className="bg-gray-900/40 rounded-xl p-5 border border-gray-800/50">
                <h4 className="text-lg font-semibold mb-3 text-pink-400">Key Benefits</h4>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm text-gray-300">
                    <div className="w-2 h-2 rounded-full bg-pink-400 mr-3"></div>
                    Enhanced visualization and communication
                  </li>
                  <li className="flex items-center text-sm text-gray-300">
                    <div className="w-2 h-2 rounded-full bg-pink-400 mr-3"></div>
                    Reduced development time and costs
                  </li>
                  <li className="flex items-center text-sm text-gray-300">
                    <div className="w-2 h-2 rounded-full bg-pink-400 mr-3"></div>
                    Improved stakeholder engagement
                  </li>
                  <li className="flex items-center text-sm text-gray-300">
                    <div className="w-2 h-2 rounded-full bg-pink-400 mr-3"></div>
                    Higher accuracy and precision
                  </li>
                </ul>
              </div>
            </div>
            
            {/* Modal Footer */}
            <div className="sticky bottom-0 bg-black/95 backdrop-blur-sm border-t border-gray-800 p-6">
              <div className="flex justify-end space-x-4">
                <button 
                  onClick={() => setSelectedIndustry(null)}
                  className="px-5 py-2 border border-gray-800 rounded-lg hover:border-gray-700 transition-colors duration-300 text-gray-300 hover:text-white"
                >
                  Close
                </button>
                <button className="px-5 py-2 bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg font-semibold hover:from-pink-700 hover:to-purple-700 transition-all duration-300 text-white">
                  Request Proposal
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ThreeDServicesIndustry;