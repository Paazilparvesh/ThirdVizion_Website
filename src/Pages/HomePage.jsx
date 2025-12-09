import { useEffect, useState } from "react";
import Hero from "/src/Components/HomeComponent/HeroSection/HeroSection.jsx";
import About from "../Components/HomeComponent/About";
import Industries from "/src/Components/HomeComponent/Industries.jsx";
import Newservice from "/src/Components/HomeComponent/Newservice.jsx";
import Partners from "/src/Components/AboutComponents/Partners.jsx";
import HorizontalSection from "../Components/HomeComponent/indhu";
import Testimonial from "/src/Components/HomeComponent/Testimonial.jsx";
import FAQ from "/src/Components/HomeComponent/FAQ.jsx";
import ContactSection from "/src/Components/HomeComponent/ContactSection.jsx";
import SparkleBg from "/src/Components/ReusableComponents/SparkleBG.jsx";
import Are from "../Components/HomeComponent/are";

export default function Home() {
  const [isMobile, setIsMobile] = useState(
    typeof window !== "undefined" ? window.innerWidth <= 768 : false
  );

  // ✅ Track resize to switch between mobile / desktop
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // ✅ Scroll effect only for DESKTOP
  useEffect(() => {
    if (isMobile) return; // no effect on mobile

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const hero = document.getElementById("hero-scroll-light");

      if (hero) {
        const moveValue = scrollY * 0.3; // desktop only
        hero.style.transform = `translateY(-${moveValue}px)`;
        hero.style.filter = `brightness(${100 + scrollY * 0.03}%)`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isMobile]);

  return (
    <>
      {/* ✅ Desktop: fixed hero with z-index */}
      {!isMobile && (
        <>
          <div
            id="hero-scroll-light"
            className="fixed top-0 left-0 w-full h-screen z-0 pointer-events-auto transition-transform duration-75 will-change-transform"
          >
            <Hero />
          </div>
          {/* Spacer for scroll under hero */}
          <div className="h-screen" />
        </>
      )}

      {/* ✅ Mobile: normal hero (no fixed, no z-index tricks) */}
      {isMobile && (
        <section className="bg-black">
          <Hero />
        </section>
      )}

      {/* Overlay / rest of page */}
      <div className="relative z-10 bg-black">
        <Are />
        <About />
        <Industries />
        <Newservice />
        <Partners />

        <div id="home-scroll-container" className="relative">
          <HorizontalSection />
        </div>

        <Testimonial />
        <FAQ />

        <div className="relative">
          <div className="relative z-20 -mt-10" />
          <ContactSection />
        </div>
      </div>
    </>
  );
}
