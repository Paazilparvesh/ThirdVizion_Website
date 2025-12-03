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

      // wrap UL and optional SVG below
      lists.push(
        <ul key={ulIndex} className="relative ml-55">
          {listItems}

          {/* ✅ Insert zigzag only between rows
          {ulIndex < totalULs - 1 && (
            <svg
              className="w-full absolute -top-30 left-0 rotate-29"
              viewBox="0 0 710 345"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.5 344.5L20.5 311L76.5 308.5L97 273L156 270L175 235L234.5 231.5L254.5 196.5L312.5 194L333 158L391 155L411.5 120L469.5 116.5L489.5 82.5L549.5 78.5L569 44L627.5 40L648 5L709 1"
                stroke="white"
                stroke-width="2"
              />
            </svg>
          )} */}
        </ul>
      );
    }

    return lists;
  };

  useEffect(() => {
    createDynamicLists(10, 10);
  });

  // useEffect(() => {
  //   const allHexagons = document.querySelectorAll(".pattern ul li");

  //   // STAGGER CONFIG
  //   const STAGGER_COUNT = 4;     // how many hexagons pop per wave
  //   const STAGGER_DELAY = 150;   // delay between each item in the wave
  //   const WAVE_INTERVAL = 2000;  // time between waves

  //   const startWave = () => {
  //     const usedIndexes = new Set();

  //     for (let i = 0; i < STAGGER_COUNT; i++) {
  //       setTimeout(() => {
  //         let randomIndex;

  //         // ensure unique hexagon per wave
  //         do {
  //           randomIndex = Math.floor(Math.random() * allHexagons.length);
  //         } while (usedIndexes.has(randomIndex));

  //         usedIndexes.add(randomIndex);

  //         const item = allHexagons[randomIndex];
  //         if (item) {
  //           item.classList.add("random-pop");

  //           setTimeout(() => {
  //             item.classList.remove("random-pop");
  //           }, 1600); // remove slower
  //         }
  //       }, i * STAGGER_DELAY); // stagger timing
  //     }
  //   };

  //   const interval = setInterval(startWave, WAVE_INTERVAL);
  //   startWave(); // run immediately on page load

  //   return () => clearInterval(interval);
  // }, []);

  useEffect(() => {
    const hexagons = Array.from(document.querySelectorAll(".pattern ul li"));

    if (hexagons.length < 4) {
      console.warn("Not enough hexagons found to pop 4 at once");
      return;
    }

    const POP_COUNT = 4;
    const POP_DURATION = 1600;
    const WAVE_INTERVAL = 2000;

    const startWave = () => {
      const used = new Set();

      while (used.size < POP_COUNT) {
        const idx = Math.floor(Math.random() * hexagons.length);
        used.add(idx);
      }

      // Trigger all 4 at EXACTLY the same time
      [...used].forEach((i) => {
        const el = hexagons[i];
        if (!el) return;

        el.classList.add("random-pop");

        setTimeout(() => {
          el.classList.remove("random-pop");
        }, POP_DURATION);
      });
    };

    const interval = setInterval(startWave, WAVE_INTERVAL);
    startWave();

    return () => clearInterval(interval);
  }, []);



  return (
    <div className="w-full h-full max-h-[80%] md:max-h-[100%] overflow-hidden bg-black relative">

      {/* ✅ Centered text + button */}
      <h2
        class="w-full absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 z-40 text-white leading-snug text-center text-4xl md:text-3xl md:scale-110 lg:text-4xl lg:scale-115 xl:text-6xl xl:scale-100 font-segoe-ui font-bold px-5 uppercase pointer-events-none"
      >
        Engineering the Future, Innovating <br className="hidden md:block" /> the Present
      </h2>

      <div
        id="pattern"
        className="pattern mt-0 md:-mt-[320px] pr-0 md:pr-[80px] mb-0 md:mb-[80px] flex flex-col justify-center items-center relative scale-135 md:scale-90 lg:scale-70 xl:scale-80"
      >
        {/* This section contains the background pattern */}
        {createDynamicLists(10, 15)}
      </div>
    </div>
  );
};

export default Landing;