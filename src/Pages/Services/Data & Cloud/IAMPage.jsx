import { useEffect } from "react";


import SparkleBg from "/src/Components/ReusableComponents/SparkleBG.jsx";
import IAMHero from "/src/Components/ServiceComponents/Data&Cloud/IAMPage/IAMHero.jsx";

import WhyChoose from "/src/Components/ServiceComponents/Data&Cloud/IAMPage/IAMChooseUs.jsx";
import IAMBenefits from "/src/Components/ServiceComponents/Data&Cloud/IAMPage/IAMBenefit.jsx";
import Whatiam from "./Components/ServiceComponents/Data&Cloud/IAMPage/whatiam.jsx";


const IAMPage = () => {
 

  return (
    <div className="bg-black relative overflow-hidden">
      <SparkleBg count={20} speed={0.8} color="253, 199, 0" />
      <IAMHero />
       <Whatiam/>    
      <WhyChoose />
      <IAMBenefits />
    </div>
  );
};

export default IAMPage;
