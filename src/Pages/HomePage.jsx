import { useEffect } from "react";


import Hero from "/src/Components/HomeComponent/HeroSection/HeroSection.jsx";
// import VisionMission from "/src/Components/HomeComponent/VissionSection.jsx";
import Industries from "/src/Components/HomeComponent/Industries.jsx";
import Newservice from "/src/Components/HomeComponent/Newservice.jsx";
import Partners from "/src/Components/AboutComponents/Partners.jsx";
import Testimonial from "/src/Components/HomeComponent/Testimonial.jsx";
import FAQ from "/src/Components/HomeComponent/FAQ.jsx";
import ContactSection from "/src/Components/HomeComponent/ContactSection.jsx";
import Indhu from "../Components/HomeComponent/indhu";
import About from "../Components/HomeComponent/About";
import SparkleBg from "/src/Components/ReusableComponents/SparkleBG.jsx";


export default function Home() {


  return (
    <div id="home-scroll-container">
      <SparkleBg count={25} color="455, 237, 4" speed={0.8} />
      <Hero />
      <About />
      {/* <VisionMission /> */}
      <Industries />
      <div className="hidden sm:block">
        <Newservice /> 
      <Partners className="bg-black" />
      <Indhu />
      <Testimonial />

      <FAQ />
      <div className="relative">
        <div className="relative z-20 -mt-10">
                  </div>

        </div>
      </div>
    </div>
  );
}
