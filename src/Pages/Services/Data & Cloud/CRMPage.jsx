import { useEffect } from "react";


import SparkleBg from "/src/Components/ReusableComponents/SparkleBG.jsx";
import CrmHero from "/src/Components/ServiceComponents/Data&Cloud/CRMPage/CRMHero.jsx";
import CRMChallenges from "/src/Components/ServiceComponents/Data&Cloud/CRMPage/CRMChallenges.jsx";
import CrmVideo from "/src/Components/ServiceComponents/Data&Cloud/CRMPage/Crmvideo.jsx";
import Whatcrm from "../../../Components/ServiceComponents/Data&Cloud/CRMPage/Whatcrm";
import { WholeWord } from "lucide-react";
import Whoneed from "../../../Components/ServiceComponents/Data&Cloud/CRMPage/whoneed";
import Willhelp from "../../../Components/ServiceComponents/Data&Cloud/CRMPage/Wilhelp";

const CRMPage = () => {
  
  return (
    <div className="bg-black relative overflow-hidden">
      <SparkleBg count={20} speed={0.8} color="255, 100, 103" />
      <CrmHero />
      <CrmVideo />
      <Whatcrm/>
   
      <CRMChallenges />
      <Whoneed/>
      <Willhelp/>
      
    </div>
  );
};

export default CRMPage;
