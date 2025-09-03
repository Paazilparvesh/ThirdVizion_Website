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
            <a href="#">
              <div className="span-wrapper">
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
      lists.push(<ul key={ulIndex}>{listItems}</ul>);
    }
    return lists;
  };

  useEffect(() => {
    createDynamicLists(10, 10);
  }, []);

  return (
    <div id="pattern" className="pattern h-[100vh] overflow-hidden relative z-0">
      {/* This section contains the background pattern */}
      {createDynamicLists(10, 10)}

      {/* ✅ Centered text + button */}
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-5 z-20 text-white pointer-events-none">
        <h2 className="lg:leading-relaxed leading-snug px-6  pt-[220px] text-center text-[28px] md:text-[36px] lg:text-4xl font-michroma font-extrabold">
          ENGINEERING THE FUTURE <br /> INNOVATING THE PRESENT
        </h2>
        <button className="bg-violet-500 text-white px-6 py-4 w-fit text-[14px] rounded-full">
          Know more
        </button>
      </div>
    </div>
  );
};

export default Landing;
