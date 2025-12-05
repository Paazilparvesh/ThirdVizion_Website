import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer
      id="footer"
      className="flex flex-col bg-black text-white relative overflow-hidden  sm:pb-20 md:pb-0"
    >
      {/* Mobile Design - Hidden on md and above */}
      <div className="md:hidden px-6 py-8">
        {/* All sections stacked vertically as in the image */}
        
        {/* Links Section */}
        <div className="mb-8">
          <h3 className="font-semibold text-lg mb-4">Links</h3>
          <ul className="space-y-3 text-sm text-gray-300">
            <li>
              <Link
                to="/"
                onClick={() =>
                  window.scrollTo({ top: 0, behavior: "smooth" })
                }
                className="hover:text-white cursor-pointer block"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="hover:text-white cursor-pointer block"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                to="/blog"
                className="hover:text-white cursor-pointer block"
              >
                Blogs
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="hover:text-white cursor-pointer block"
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        {/* Services Section - Two columns side by side */}
        <div className="mb-8">
          <h3 className="font-semibold text-lg mb-4">Services</h3>
          <div className="grid grid-cols-2 gap-6">
            {/* Left Column - Web Development group */}
            <div className="space-y-3 text-sm text-gray-300">
              <div>
                <Link to="/web_development" className="hover:text-white cursor-pointer block">
                  Web Development
                </Link>
              </div>
              <div>
                <Link
                  to="/client_relationship_management"
                  className="hover:text-white cursor-pointer block"
                >
                  CRM Solutions
                </Link>
              </div>
              <div>
                <Link to="/virtual_reality" className="hover:text-white cursor-pointer block">
                  Virtual Reality
                </Link>
              </div>
              <div>
                <Link to="/augmented_reality" className="hover:text-white cursor-pointer block">
                  Augmented Reality
                </Link>
              </div>
              <div>
                <Link to="/3d_services" className="hover:text-white cursor-pointer block">
                  3D Visualization
                </Link>
              </div>
            </div>

            {/* Right Column - IAM Solutions group */}
            <div className="space-y-3 text-sm text-gray-300">
              <div>
                <Link to="/identity_and_access_management" className="hover:text-white cursor-pointer block">
                  IAM Solutions
                </Link>
              </div>
              <div>
                <Link
                  to="/enterprise_resource_planning"
                  className="hover:text-white cursor-pointer block"
                >
                  ERP Solutions
                </Link>
              </div>
              <div>
                <Link to="/server_management" className="hover:text-white cursor-pointer block">
                  Server Management
                </Link>
              </div>
              <div>
                <Link to="/app_development" className="hover:text-white cursor-pointer block">
                  Mobile Apps
                </Link>
              </div>
              <div>
                <Link to="/game_development" className="hover:text-white cursor-pointer block">
                  Game Development
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Contact and Social Section */}
        <div className="mb-8">
          <div className="flex justify-between mb-4">
            <h3 className="font-semibold text-lg">Contact Us</h3>
            <h3 className="font-semibold pr-15 text-lg">Social</h3>
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            {/* Left Column - Contact Info */}
            <div className="text-sm text-gray-300 space-y-3">
              <div>
                <span className="font-semibold">Phone: </span><br />
                +91 8925527548
              </div>
              <div>
                <div className="font-semibold mb-1">Address:</div>
                <div className="text-gray-400">
                  11.1st Floor, Ramdoss<br />
                  Nagar, Kolathur, Chennai -<br />
                  600099, Tamil Nadu, India
                </div>
              </div>
            </div>

            {/* Right Column - Social Icons - 2x2 GRID LAYOUT */}
            <div className="flex flex-col  items-end">
              <div className="grid grid-cols-2  pr-10  gap-2">
                <a
                  href="https://www.facebook.com/profile.php?id=61580211779605"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full bg-white flex items-center justify-center hover:bg-gray-200 transition-colors"
                >
                  <FaFacebookF className="text-black text-lg" />
                </a>
                <a
                  href="https://www.instagram.com/thirdvizionlabs/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full bg-white flex items-center justify-center hover:bg-gray-200 transition-colors"
                >
                  <FaInstagram className="text-black text-lg" />
                </a>
                <a
                  href="https://www.linkedin.com/company/106155239/admin/settings/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full bg-white flex items-center justify-center hover:bg-gray-200 transition-colors"
                >
                  <FaLinkedinIn className="text-black text-lg" />
                </a>
                <a
                  href="https://www.youtube.com/@ThirdVizion"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full bg-white flex items-center justify-center hover:bg-gray-200 transition-colors"
                >
                  <FaYoutube className="text-black text-lg" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Brand Text for mobile */}
        <div className="relative h-24 mt-8 overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center">
            <p
              className="bg-clip-text text-transparent font-normal tracking-wider 
                       text-[58px] leading-none pointer-events-none select-none"
              style={{
                backgroundImage:
                  "linear-gradient(to right, #FDB928 0%, #F38540 25%, #3EA9C1 50%, #5EBC58 75%, #EE3A5C 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              THIRDVIZION
            </p>
          </div>
        </div>
      </div>

      {/* Desktop Design - Hidden on mobile, shown on md and above */}
      <div className="hidden md:block">
        {/* Top Section */}
        <div
          className="mx-auto mb-16 sm:mb-20 md:mb-30 mt-15 bg-black ml-20 py-12 
          grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8
          md:text-left text-center relative z-10"
        >
          {/* --- Links --- */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Links</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <Link
                  to="/"
                  onClick={() =>
                    window.scrollTo({ top: 0, behavior: "smooth" })
                  }
                  className="hover:text-white cursor-pointer"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-white cursor-pointer">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/blog" className="hover:text-white cursor-pointer">
                  Blogs
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white cursor-pointer">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* --- Services --- */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Services</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <Link to="/web_development" className="hover:text-white cursor-pointer">
                  Web Development
                </Link>
              </li>
              <li>
                <Link
                  to="/client_relationship_management"
                  className="hover:text-white cursor-pointer"
                >
                  CRM Solutions
                </Link>
              </li>
              <li>
                <Link to="/virtual_reality" className="hover:text-white cursor-pointer">
                  Virtual Reality
                </Link>
              </li>
              <li>
                <Link to="/augmented_reality" className="hover:text-white cursor-pointer">
                  Augmented Reality
                </Link>
              </li>
              <li>
                <Link to="/3d_services" className="hover:text-white cursor-pointer">
                  3D Visualization
                </Link>
              </li>
            </ul>
          </div>

          {/* --- Services --- */}
          <div className="">
            <h3 className="font-semibold text-lg mb-4">Services</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <Link to="/identity_and_access_management" className="hover:text-white cursor-pointer">
                  IAM Solutions
                </Link>
              </li>
              <li>
                <Link
                  to="/enterprise_resource_planning"
                  className="hover:text-white cursor-pointer"
                >
                 ERP Solutions
                </Link>
              </li>
              <li>
                <Link to="/server_management" className="hover:text-white cursor-pointer">
                  Server Management
                </Link>
              </li>
              <li>
                <Link to="/app_development" className="hover:text-white cursor-pointer">
                  Mobile Apps
                </Link>
              </li>
              <li>
                <Link to="/game_development" className="hover:text-white cursor-pointer">
                 Game Development
                </Link>
              </li>
            </ul>
          </div>

          {/* --- Contact --- */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
            <p className="text-sm text-gray-300">
              <span className="font-semibold">Phone:</span> +91 8925527548
            </p>
            <p className="text-sm text-gray-300 mt-2">
              <span className="font-semibold">Address:</span> 11, 1st Floor,
              Ramdoss Nagar, Kolathur, Chennai - 600099, Tamil Nadu, India
            </p>
          </div>

          {/* --- Social --- */}
          <div className="ml-10">
            <h3 className="font-semibold text-lg mb-4">Social</h3>
            {/* Desktop social icons with white circular backgrounds - HORIZONTAL LAYOUT */}
            <div className="flex flex-wrap justify-center md:justify-start gap-4">
              <a
                href="https://www.facebook.com/profile.php?id=61580211779605"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white flex items-center justify-center hover:bg-gray-200 transition-colors"
              >
                <FaFacebookF className="text-black text-lg" />
              </a>
              <a
                href="https://www.instagram.com/thirdvizionlabs/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white flex items-center justify-center hover:bg-gray-200 transition-colors"
              >
                <FaInstagram className="text-black text-lg" />
              </a>
              <a
                href="https://www.linkedin.com/company/106155239/admin/settings/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white flex items-center justify-center hover:bg-gray-200 transition-colors"
              >
                <FaLinkedinIn className="text-black text-lg" />
              </a>
              <a
                href="https://www.youtube.com/@ThirdVizion"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white flex items-center justify-center hover:bg-gray-200 transition-colors"
              >
                <FaYoutube className="text-black text-lg" />
              </a>
            </div>
          </div>
        </div>

        {/* Brand Text */}
        <div className="absolute bottom-0 left-0 w-full text-center overflow-hidden">
          <p
            className="bg-clip-text text-transparent font-normal tracking-wider 
                       text-[40px] sm:text-[60px] md:text-[110px] lg:text-[150px] xl:text-[220px] 2xl:text-[225px]
                       leading-none mb-0 sm:mb-0 md:-mb-12 lg:-mb- pointer-events-none select-none"
            style={{
              backgroundImage:
                "linear-gradient(to right, #FDB928 0%, #F38540 25%, #3EA9C1 50%, #5EBC58 75%, #EE3A5C 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            THIRDVIZION
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;