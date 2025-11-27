import { useEffect } from "react";


import ContactHero from "/src/Components/ContactComponents/ContactHero.jsx";

import Map from "/src/Components/ContactComponents/Map.jsx";

const ContactPage = () => {


  return (
    <div className="bg-black">
      <ContactHero />
      
      <Map />
    </div>
  );
};

export default ContactPage;
