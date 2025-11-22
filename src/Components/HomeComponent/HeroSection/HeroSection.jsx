import { useEffect } from "react";
import "/src/Components/HomeComponent/HeroSection/Hero_Section.css";
import service from "/src/assets/HeroImages/1.png";
import service1 from "/src/assets/HeroImages/2.png";
import service2 from "/src/assets/HeroImages/3.png";
import service3 from "/src/assets/HeroImages/4.png";
import service4 from "/src/assets/HeroImages/5.png";
import service5 from "/src/assets/HeroImages/6.png";
import service6 from "/src/assets/HeroImages/7.png";
import service7 from "/src/assets/HeroImages/8.png";
import service8 from "/src/assets/HeroImages/9.png";
import service9 from "/src/assets/HeroImages/10.png";
import { Link } from "react-router-dom";

const Landing = () => {
  const icons = [
    { class: "twitter", src: service },
    { class: "reddit", src: service1 },
    { class: "whatsapp", src: service2 },
    { class: "facebook", src: service3 },
    { class: "instagram", src: service4 },
    { class: "twitter", src: service5 },
    { class: "reddit", src: service6 },
    { class: "whatsapp", src: service7 },
    { class: "facebook", src: service8 },
    { class: "instagram", src: service9 },
  ];

  const createDynamicLists = (totalULs, totalLIsPerUL) => {
    const shuffledIcons = [...icons].sort(() => Math.random() - 0.5);
    const lists = [];

    for (let ulIndex = 0; ulIndex < totalULs; ulIndex++) {
      const listItems = [];
      for (let liIndex = 1; liIndex < totalLIsPerUL; liIndex++) {
        const currentIcon =
          shuffledIcons[(liIndex + ulIndex) % shuffledIcons.length];
        listItems.push(
          <li className={currentIcon.class} key={liIndex}>
            <a>
              <div>
                {[...Array(4)].map((_, idx) => (
                  <span key={idx}></span>
                ))}
                <span>
                  <img
                    src={currentIcon.src}
                    alt={`${currentIcon.class} icon`}
                    style={{ width: "60px", height: "60px" }}
                  />
                </span>
              </div>
            </a>
            <span id="hexa"></span>
          </li>
        );
      }

      lists.push(
        <ul key={ulIndex} className="relative ml-55">
          {listItems}
        </ul>
      );
    }

    return lists;
  };

  useEffect(() => {
    createDynamicLists(10, 10);
  });

  return (
    <div
      id="pattern"
      className="pattern 2xl:h-[112vh] overflow-hidden relative z-0"
    >
      {/* This section contains the background pattern */}
      {createDynamicLists(10, 10)}

      {/* ✅ Centered text + button - Mobile Responsive */}
      <div className="flex flex-col items-center justify-center z-20 text-white pointer-events-none">
        {/* Main Heading - Mobile Responsive */}
        <h2 className="w-full absolute top-160 md:top-140 lg:top-128 xl:top-115 left-1/2 -translate-x-1/2 z-50 leading-tight text-center text-2xl sm:text-3xl md:text-3xl lg:text-3xl xl:text-4xl xl:max-w-4xl font-michroma font-extrabold px-4 sm:px-5 pt-[45px] pointer-events-none">
          Engineering the Future, Innovating the Present
        </h2>

        {/* Description Text - Mobile Responsive */}
        <p className="w-full absolute top-200 md:top-168 lg:top-155 xl:top-147 2xl:top-145 left-1/2 -translate-x-1/2 xl:max-w-4xl 2xl:max-w-2xl text-base sm:text-lg md:text-base lg:text-lg 2xl:text-xs text-center text-gray-200 px-4 sm:px-6 md:px-20 pointer-events-none max-w-[90%] mx-auto">
          We combine cutting-edge technology with visionary ideas to deliver
          solutions that shape tomorrow while empowering businesses today.
        </p>

        {/* Contact Button - Mobile Responsive */}
        {/* <Link
          to={"/contact"}
          className="absolute top-235 md:top-190 lg:top-175 xl:top-168 2xl:top-160 left-1/2 -translate-x-1/2 bg-violet-500 text-white px-6 py-2 sm:px-7 sm:py-2.5 md:px-8 md:py-3 text-lg sm:text-xl md:text-2xl rounded-full pointer-events-auto hover:scale-110 duration-300 whitespace-nowrap"
        >
          CONTACT US
        </Link> */}
      </div>
    </div>
  );
};

export default Landing;