const VisionMission = () => {
  return (
    <div className="bg-black min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-12">
      <div className="text-center text-white max-w-6xl space-y-6">
        {/* Heading */}
        <h2 className="text-xs sm:text-sm md:text-base text-yellow-400 autoBlur">
          Vision & Mission
        </h2>
        <h1 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-normal mb-6 autoBlur">
          Driving Innovation Beyond Boundaries
        </h1>

        {/* Lines with animation */}
        <p className="text-base sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-light leading-relaxed sm:leading-snug space-y-6">
          <span className="block autoBlur">
            WE’RE NOT JUST{" "}
            <span className="inline-block align-middle">
              <img
                src="https://images.unsplash.com/photo-1581090464764-1c1ef6a60640?q=80&w=200&h=100&fit=crop"
                alt="technology"
                className="inline-block w-16 h-10 sm:w-20 sm:h-12 md:w-24 md:h-14 lg:w-28 lg:h-16 object-cover rounded-full"
              />
            </span>{" "}
            TECHNOLOGY—WE’RE
          </span>

          <span className="block autoBlur">
            REDEFINING HOW BUSINESSES AND{" "}
            <span className="inline-block align-middle">
              <img
                src="https://images.unsplash.com/photo-1603791452906-bc3c37e62c5a?q=80&w=200&h=100&fit=crop"
                alt="interact"
                className="inline-block w-16 h-10 sm:w-20 sm:h-12 md:w-24 md:h-14 lg:w-28 lg:h-16 object-cover rounded-full"
              />
            </span>{" "}
            INTERACT
          </span>

          <span className="block autoBlur">
            IN A DIGITAL-FIRST{" "}
            <span className="inline-block align-middle">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/9/97/The_Earth_seen_from_Apollo_17.jpg"
                alt="earth"
                className="inline-block w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 object-cover rounded-full"
              />
            </span>
            . EVERY SOLUTION WE
          </span>

          <span className="block autoBlur">
            <span className="inline-block align-middle">
              <img
                src="https://cdn-icons-png.flaticon.com/512/1995/1995574.png"
                alt="delivery"
                className="inline-block w-14 h-10 sm:w-16 sm:h-12 md:w-18 md:h-14 lg:w-20 lg:h-16 object-contain bg-green-500 rounded-full p-2"
              />
            </span>{" "}
            MERGES CREATIVITY, STRATEGY, AND
          </span>

          <span className="block autoBlur">
            INNOVATION TO CREATE MEANINGFUL{" "}
            <span className="inline-block align-middle">
              <img
                src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=200&h=100&fit=crop"
                alt="impact"
                className="inline-block w-16 h-10 sm:w-20 sm:h-12 md:w-24 md:h-14 lg:w-28 lg:h-16 object-cover rounded-full"
              />
            </span>
          </span>
        </p>
      </div>
    </div>
  );
};

export default VisionMission;
