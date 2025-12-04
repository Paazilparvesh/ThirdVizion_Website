// import { useEffect } from "react";


// import ARone from "/src/Components/ServiceComponents/ImmersiveTech/ARPage/ARone";
// import ARtwo from "/src/Components/ServiceComponents/ImmersiveTech/ARPage/ARtwo";
// import ARthree from "/src/Components/ServiceComponents/ImmersiveTech/ARPage/ARthree";
// import Whatar from "../../../Components/ServiceComponents/ImmersiveTech/ARPage/Whatar";

// function VirtualReality() {
 

//   return (
//     <div className="bg-black">
//       <ARone />
//       <Whatar/>
//       <ARtwo />
//       <ARthree />
//     </div>
//   );
// }

// export default VirtualReality;
import ARBackgroundWrapper from "/src/Components/ServiceComponents/ImmersiveTech/ARPage/ARBackgroundWrapper.jsx";



import ARone from "/src/Components/ServiceComponents/ImmersiveTech/ARPage/ARone";
import ARtwo from "/src/Components/ServiceComponents/ImmersiveTech/ARPage/ARtwo";
import ARthree from "/src/Components/ServiceComponents/ImmersiveTech/ARPage/ARthree";
import Whatar from "../../../Components/ServiceComponents/ImmersiveTech/ARPage/Whatar";

function VirtualReality() {
  return (
    <ARBackgroundWrapper>
      <ARone />
      <Whatar />
      <ARtwo />
      <ARthree />
    </ARBackgroundWrapper>
  );
}

export default VirtualReality;
