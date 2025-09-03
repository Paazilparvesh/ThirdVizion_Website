import React from "react";
import { ArrowUpRight } from "lucide-react";

const Capabilities = () => {
  return (
    <section className="bg-black text-white min-h-screen flex items-center  px-70">
      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        {/* Left Section */}
        <div className="space-y-6">
          <p className="text-gray-300 text-5xl">Our</p>
          <h2 className="text-7xl font-bold">Capabilities</h2>
          <p className="text-[120px] font-bold text-white/10 leading-none">
            01<span className="text-white/30 text-5xl"></span>
          </p>
        </div>

        {/* Right Section */}
        <div className="bg-[#111] rounded-2xl shadow-lg overflow-hidden relative">
          {/* Header */}
          <div className="flex justify-between items-start p-6">
            <div>
              <h3 className="text-xl font-semibold">UI/UX EXCELLENCE</h3>
              <p className="text-gray-300 mt-1">
                Intuitive designs for seamless digital journeys.
              </p>
            </div>
            <button className="bg-purple-600 p-2 rounded-full">
              <ArrowUpRight className="w-5 h-5 text-white" />
            </button>
          </div>

          {/* Images Grid */}
          <div className="grid grid-cols-4 gap-0">
            {/* SVG Image 1: Design Tools */}
            <div className="w-full h-40 bg-purple-900 flex items-center justify-center">
              <svg className="w-16 h-16 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M12 2l9 5v10l-9 5-9-5V7l9-5z" />
                <path d="M12 22l9-5" />
                <path d="M12 2v20" />
                <path d="M3 7l9 5 9-5" />
              </svg>
            </div>
            
            {/* SVG Image 2: Layout */}
            <div className="w-full h-40 bg-blue-900 flex items-center justify-center">
              <svg className="w-16 h-16 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <rect x="3" y="3" width="18" height="18" rx="2" />
                <path d="M3 9h18" />
                <path d="M9 21V9" />
              </svg>
            </div>
            
            {/* SVG Image 3: Components */}
            <div className="w-full h-40 bg-green-900 flex items-center justify-center">
              <svg className="w-16 h-16 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <rect x="3" y="3" width="7" height="7" />
                <rect x="14" y="3" width="7" height="7" />
                <rect x="14" y="14" width="7" height="7" />
                <rect x="3" y="14" width="7" height="7" />
              </svg>
            </div>
            
            {/* SVG Image 4: User Focus */}
            <div className="w-full h-40 bg-orange-900 flex items-center justify-center">
              <svg className="w-16 h-16 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <circle cx="12" cy="8" r="5" />
                <path d="M20 21v-2a8 8 0 0 0-16 0v2" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Capabilities;