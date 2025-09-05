import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "/src/Pages/Home.jsx";
import About from "/src/Pages/About.jsx";
import Contact from "/src/Pages/Contact.jsx";
import Blogs from "./Pages/Blogs";

import Header from "/src/Layout/Header.jsx";
import Footer from "/src/Layout/Footer.jsx";

import MainImmersive from "/src/Pages/Services/Immersive/MainImmersive";
import MainData from "./Pages/Services/Data & Cloud/MainData";
import MainSoftware from "./Pages/Services/Software/MainSoftware";
// import WebDev from "/src/Pages/Services/Software/WebDev.jsx"
import ProjectGallery from "./Pages/Services/Software/ProjectGallery";
import CRM from "./Pages/Services/crm/CRM";
import IAMHero from "./Pages/Services/IAM/IAMHero";
import ITServices from "/src/Pages/Services/ITServices.jsx/IT.jsx";
function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blogs />} />

          <Route path="/immersive" element={<MainImmersive />} />
          <Route path="/data" element={<MainData />} />
          <Route path="/software" element={<MainSoftware />} />
          
           <Route path="/ProjectGallery" element={<ProjectGallery />} />
                 <Route path="/crm" element={<CRM />} />
                 <Route path="/iam" element={<IAMHero />} />
         
                 <Route path="/itservices" element={<ITServices />} />
         
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
