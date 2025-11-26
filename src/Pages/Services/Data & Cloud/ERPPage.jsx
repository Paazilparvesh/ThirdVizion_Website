import { useEffect } from "react";


import ERPHero from "/src/Components/ServiceComponents/Data&Cloud/ERPPage/ERPHero.jsx";
import ERPcaption from "/src/Components/ServiceComponents/Data&Cloud/ERPPage/ERPcaption/";
import ERPBenefits from "/src/Components/ServiceComponents/Data&Cloud/ERPPage/ERPBenefits.jsx";
import ERPDashboard from "/src/Components/ServiceComponents/Data&Cloud/ERPPage/ERPDashboard";
import SparkleBg from "/src/Components/ReusableComponents/SparkleBG.jsx";
import Whaterp from "../../../Components/ServiceComponents/Data&Cloud/ERPPage/Whaterp";

export default function ERPPage() {
 
  return (
    <>
      <div className="bg-black">
        <SparkleBg speed={0.8} count={20} color="124, 134, 255" />
        <ERPHero />
        <Whaterp/>
        <ERPcaption/>
        <ERPDashboard />
        <ERPBenefits />
      </div>
    </>
  );
}
