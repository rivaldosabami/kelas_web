import React from "react";
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="relative bg-[#0A2E15] text-white py-12 overflow-hidden">

      <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-[#0F3D17] to-[#1B5E20] opacity-10 blur-3xl"></div>

      <div className="container mx-auto px-8 md:px-16 lg:px-24 relative z-10">
 
        <div className="flex flex-col md:flex-row md:justify-between items-center mb-8">
 
          <div className="text-center md:text-left mb-6 md:mb-0">
            <h3 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-teal-300">
              RivaldoMoreno
            </h3>
            <p className="text-gray-300">Mahasiswa Teknik Informatika, Universitas Papua</p>
          </div>

          <div className="w-full md:w-auto">
            <form className="flex items-center bg-gray-900 rounded-full overflow-hidden border border-green-700 shadow-lg">
              <input
                type="email"
                placeholder="Your email"
                className="w-full p-3 bg-transparent text-white placeholder-gray-400 
                focus:outline-none focus:ring-2 focus:ring-green-500 transition-all"
              />
              <button
                type="submit"
                className="relative bg-gradient-to-r from-green-600 to-green-400 text-white px-6 py-3 
                font-semibold tracking-wide transition-transform transform hover:scale-105 hover:shadow-green-500/50"
              >
                Subscribe

                <span className="absolute inset-0 bg-green-300 opacity-0 rounded-full transition duration-300 hover:opacity-20"></span>
              </button>
            </form>
          </div>
        </div>

        <div className="relative border-t border-green-700 pt-6 flex flex-col md:flex-row justify-between items-center">

          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()}RivaldoMoreno. All rights reserved.
          </p>

          <div className="flex space-x-5 my-4 md:my-0">
            {[
              { icon: <FaFacebook />, link: "#" },
              { icon: <FaTwitter />, link: "#" },
              { icon: <FaLinkedin />, link: "#" },
              { icon: <FaGithub />, link: "#" },
              { icon: <FaInstagram />, link: "#" },
            ].map((social, index) => (
              <a
                key={index}
                href={social.link}
                className="text-green-300 text-xl transition transform hover:scale-110 
                hover:text-white hover:shadow-green-400/50"
              >
                {social.icon}
              </a>
            ))}
          </div>

          <div className="flex space-x-6">
            <a href="#" className="text-green-300 hover:text-white transition duration-300">
              Privacy
            </a>
            <a href="#" className="text-green-300 hover:text-white transition duration-300">
              Terms of Service
            </a>
          </div>
        </div>
      </div>


      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-green-500 to-transparent opacity-30 animate-pulse"></div>
    </footer>
  );
};

export default Footer;