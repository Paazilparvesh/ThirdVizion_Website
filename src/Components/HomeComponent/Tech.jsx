import air from "/src/assets/home/ar.png";
import vir from "/src/assets/home/vr.png";
import threed from "/src/assets/home/3d.png";

function Tech() {
  return (
    <div className="bg- text-white py-12 px-6 mt-10">
      {/* Title */}
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-10 tracking-wide">
        EMERGING TECH
      </h1>

      {/* Grid */}
      <div className="w-full h-full gap-6">
        {/* AR Card */}
        <div
          className="relative rounded-2xl overflow-hidden shadow-lg bg-white w-full h-full "
          style={{
            backgroundImage: `url(${air})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-end p-6">
            <h2 className="text-5xl font-bold mb-3">AR</h2>
            <p className="text-sm md:text-base leading-relaxed">
              Augmented Reality blends the digital and physical worlds, overlaying interactive 3D elements onto real environments.
            </p>
          </div>
        </div>

        {/* VR Card */}
        <div
          className="relative rounded-2xl overflow-hidden shadow-lg"
          style={{
            backgroundImage: `url(${vir})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-end p-6">
            <h2 className="text-5xl font-bold mb-3">VR</h2>
            <p className="text-sm md:text-base leading-relaxed">
              Virtual Reality transports users into fully immersive, computer-generated environments, enabling realistic simulations
              and interactive experiences. From training and education to entertainment and product visualization, VR opens new
              dimensions for storytelling, learning, and engagement.
            </p>
          </div>
        </div>

        {/* 3D Services Card */}
        <div
          className="relative rounded-2xl overflow-hidden shadow-lg md:col-span-2"
          style={{
            backgroundImage: `url(${threed})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center p-6 md:p-12">
            <h2 className="text-5xl font-bold mb-6">3D SERVICES</h2>
            <p className="text-sm md:text-base leading-relaxed max-w-3xl">
              Our 3D solutions bring ideas to life with precision and detail, creating realistic models, animations, and
              visualizations. From product prototypes and architectural renders to interactive design elements, we deliver
              high-quality 3D assets that enhance presentation, storytelling, and user engagement.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tech;
