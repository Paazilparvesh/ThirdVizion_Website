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


export default function Home() {
  return (
    <>
      <SparkleBg count={25} color="255, 255, 255" speed={0.8} />

      <Hero />

      <About />

      <Industries />

      <Newservice />

      <Partners />

      <div id="home-scroll-container">
        <HorizontalSection />
      </div>

      <Testimonial />

      <FAQ />

      <ContactSection />
    </>
  );
}
