import about1 from "/src/assets/home/about1.jpg";
import about2 from "/src/assets/home/about2.png";

const About = () => {
  return (
    <section className="bg-black text-white relative">
      <div className="py-16">
        {/* About + Statistics Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-7xl mx-auto mb-12">
          {/* About Text */}
          <div className="space-y-6 text-left">
            <h2 className="text-yellow-400 text-2xl md:text-4xl font-bold">
              ABOUT
            </h2>
            <p className="text-white text-base md:text-lg leading-relaxed max-w-xl">
              At ThirdVizion, we're more than just a technology company. Our
              mission is to deliver cutting-edge solutions that not only solve
              challenges but also create new opportunities across industries.
              With a dedicated team of experts, we bring ideas to life with
              seamless technology that transforms businesses.
            </p>
          </div>

          {/* Statistics */}
          <div className="grid grid-cols-3 gap-6 text-center">
            {/* Statistic Item */}
            <div>
              <p className="text-yellow-400 text-5xl md:text-7xl font-bold">
                12
              </p>
              <div
                className="h-1 my-2 w-full"
                style={{
                  background:
                    "linear-gradient(to right, rgba(255,255,255,0) 0%, white 20%, white 80%, rgba(255,255,255,0) 100%)",
                }}
              />
              <p className="text-sm md:text-base">Clients Served</p>
            </div>
            <div>
              <p className="text-yellow-400 text-5xl md:text-7xl font-bold">
                18
              </p>
              <div
                className="h-1 my-2 w-full"
                style={{
                  background:
                    "linear-gradient(to right, rgba(255,255,255,0) 0%, white 20%, white 80%, rgba(255,255,255,0) 100%)",
                }}
              />
              <p className="text-sm md:text-base">Employees Working</p>
            </div>
            <div>
              <p className="text-yellow-400 text-5xl md:text-7xl font-bold">
                23
              </p>
              <div
                className="h-1 my-2 w-full"
                style={{
                  background:
                    "linear-gradient(to right, rgba(255,255,255,0) 0%, white 20%, white 80%, rgba(255,255,255,0) 100%)",
                }}
              />
              <p className="text-sm md:text-base">Projects Launched</p>
            </div>
          </div>
        </div>

        {/* Image Section */}
        <div className="w-full flex ">
          <img
            src={about1}
            alt="Abstract Red"
            className="w-full object-cover"
          />
          <img
            src={about2}
            alt="Abstract Red"
            className="w-full  object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
