import React, { useState } from 'react';

const ARServices = () => {
  const [prompt, setPrompt] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [activeCard, setActiveCard] = useState(1);

  const arServicesData = [
    {
      title: 'AR with Smartphone',
      content: 'We create mobile AR experiences using camera and motion sensors to deliver immersive apps and campaigns for iOS and Android.',
      details: [
        'Seamless iOS & Android AR integration',
        'Camera-based and motion-activated experiences',
        'User-friendly mobile interface'
      ],
      isGlowing: false,
      icon: '📱'
    },
    {
      title: 'AR with Smart Glasses',
      content: 'We build AR solutions for smart glasses and wearables, enabling hands-free augmented reality experiences for enterprise, education, and entertainment.',
      details: [
        'Hands-Free AR Operations',
        'Optimized for wearable devices',
        'Real-time data overlays',
        'Enterprise-ready solutions'
      ],
      isGlowing: true,
      icon: '👓'
    },
    {
      title: 'Web-Based AR',
      content: 'We create browser-based AR experiences using WebXR technology, allowing users to enjoy augmented reality instantly—no app required.',
      details: [
        'No app download needed',
        'WebXR technology integration',
        'Cross-browser compatibility',
        'Instant AR access via URL'
      ],
      isGlowing: false,
      icon: '🌐'
    },
  ];

  const ARServiceCard = ({ title, content, details, isGlowing, icon, index }) => {
    const isActive = activeCard === index;

    const baseStyles =
      'p-8 rounded-2xl border border-pink-500/30 shadow-2xl transition-all duration-500 transform hover:scale-105 cursor-pointer';

    const glowStyles =
      isGlowing || isActive
        ? 'bg-gradient-to-br from-pink-900/40 to-purple-900/40 backdrop-blur-lg shadow-pink-500/50'
        : 'bg-gray-900/40 hover:bg-gray-900/60 hover:shadow-pink-400/30';

    return (
      <div
        className={`${baseStyles} ${glowStyles} flex flex-col h-full relative overflow-hidden group`}
        style={{
          boxShadow: isGlowing || isActive ? '0 0 60px rgba(236,72,153,0.6)' : undefined,
        }}
        onMouseEnter={() => setActiveCard(index)}
        onMouseLeave={() => setActiveCard(1)}
      >
        {/* Glowing Hover BG */}
        <div className="absolute inset-0 bg-gradient-to-r from-pink-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

        <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
          {icon}
        </div>

        <h3
          className="text-2xl font-bold mb-4 text-pink-300 border-b border-pink-700/50 pb-3"
          style={{ fontFamily: 'DeaconTest, sans-serif', fontWeight: 600 }}
        >
          {title}
        </h3>

        <p
          className="text-gray-300 mb-6 text-sm flex-grow leading-relaxed"
          style={{ fontFamily: 'anta, sans-serif' }}
        >
          {content}
        </p>

        <div className="mt-3">
          <p className="text-pink-400 font-semibold mb-3 flex items-center">
            <span className="w-2 h-2 bg-pink-400 rounded-full mr-2 animate-pulse"></span>
            Key Features:
          </p>

          <ul className="space-y-3">
            {details.map((item, detailIndex) => (
              <li
                key={detailIndex}
                className="flex items-center text-gray-300 text-sm group/item hover:text-pink-200 transition-colors duration-200"
              >
                <svg
                  className="w-4 h-4 mr-3 text-pink-400 group-hover/item:scale-110 transition-transform duration-200"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="absolute inset-0 border-2 border-transparent group-hover:border-pink-400/30 rounded-2xl transition-all duration-300 pointer-events-none"></div>
      </div>
    );
  };

  return (
    <div className="text-white min-h-screen flex p-4 relative">
      <div className="relative z-10 max-w-7xl mx-auto w-full mt-10 font-font-semibold">
        {/* HEADER */}
        <header className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold mb-6 leading-tight">
            We Do{' '}
            <span
              className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent"
              style={{ fontFamily: 'DeaconTest, sans-serif', fontWeight: 600 }}
            >
              AR Solutions
            </span>{' '}
            For All Platforms
          </h1>

          <div className="mt-8 flex justify-center">
            <div className="w-48 h-1 bg-gradient-to-r from-transparent via-pink-500 to-transparent rounded-full animate-pulse"></div>
          </div>
        </header>

        {/* 3-COLUMN SERVICES */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {arServicesData.map((service, index) => (
            <ARServiceCard key={index} {...service} index={index} />
          ))}
        </div>
      </div>

      {/* Animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) scale(1); }
          50% { transform: translateY(-20px) scale(1.05); }
        }
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px) scale(1); }
          50% { transform: translateY(10px) scale(1.02); }
        }
        @keyframes pulse-slow {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.8; }
        }
        .animate-float {
          animation: float 8s ease-in-out infinite;
        }
        .animate-float-slow {
          animation: float-slow 12s ease-in-out infinite;
        }
        .animate-pulse-slow {
          animation: pulse-slow 6s infinite;
        }
      `}</style>
    </div>
  );
};

export default ARServices;
