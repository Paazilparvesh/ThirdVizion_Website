import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaWordpress,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 border-b border-gray-700">
        {/* Links */}
        <div>
          <h3 className="font-semibold mb-4 text-lg sm:text-base">Links</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li className="hover:text-white cursor-pointer">Home</li>
            <li className="hover:text-white cursor-pointer">About Us</li>
            <li className="hover:text-white cursor-pointer">Services</li>
            <li className="hover:text-white cursor-pointer">Privacy Policy</li>
            <li className="hover:text-white cursor-pointer">Contact Us</li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="font-semibold mb-4 text-lg sm:text-base">Services</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li className="hover:text-white cursor-pointer">Web Development</li>
            <li className="hover:text-white cursor-pointer">AR/VR</li>
            <li className="hover:text-white cursor-pointer">3D Development</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-semibold mb-4 text-lg sm:text-base">
            Contact Us
          </h3>
          <p className="text-sm text-gray-300">
            <span className="font-semibold">Contact:</span> 123-456-7890
          </p>
          <p className="text-sm text-gray-300 mt-2">
            <span className="font-semibold">Address:</span> ADD
          </p>
        </div>

        {/* Social */}
        <div>
          <h3 className="font-semibold mb-4 text-lg sm:text-base">Social</h3>
          <div className="flex space-x-4 sm:space-x-5 text-xl sm:text-lg text-gray-300">
            <FaFacebookF className="hover:text-white cursor-pointer" />
            <FaInstagram className="hover:text-white cursor-pointer" />
            <FaTwitter className="hover:text-white cursor-pointer" />
            <FaYoutube className="hover:text-white cursor-pointer" />
            <FaWordpress className="hover:text-white cursor-pointer" />
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="text-center py-4 text-gray-400 text-xs border-t border-gray-700">
        © 2019 Lift Media | All Rights Reserved
      </div>

      {/* Brand Text */}
      <div className="text-center pb-10">
        <h1 className="text-4xl sm:text-6xl md:text-8xl lg:text-[12rem] tracking-wide bg-gradient-to-r from-yellow-400 via-blue-500 via-green-500 to-red-500 bg-clip-text text-transparent ">
          THIRDVIZION
        </h1>
      </div>
    </footer>
  );
};

export default Footer;
