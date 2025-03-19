import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolling(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full top-0 z-50 transition-all duration-300 ease-in-out 
      ${scrolling ? "bg-[#051D10] shadow-lg backdrop-blur-lg border-b border-green-500" : "bg-transparent"}`}>
      
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        
        <h1 className="text-2xl font-extrabold tracking-wide text-green-300 transition-all 
          hover:text-green-400 hover:scale-110 hover:rotate-1">
          Moreno<span className="text-green-500">.</span>Portfolio
        </h1>

        <ul className="hidden md:flex space-x-8 text-lg font-semibold">
          {[
            { name: "Profile", link: "#profile" },
            { name: "Skills & Hobbies", link: "#skills" },
            { name: "Contact", link: "#contact" }
          ].map((item, index) => (
            <li key={index}>
              <a 
                href={item.link} 
                className="relative group transition duration-300 text-white hover:text-green-300"
              >
                {item.name}

                <span className="absolute left-1/2 bottom-[-4px] w-0 h-1 bg-green-400 
                  transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
              </a>
            </li>
          ))}
        </ul>

        <button 
          className="md:hidden text-2xl text-white focus:outline-none transition-transform 
            duration-300 transform hover:rotate-180"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      <div className={`md:hidden bg-[#051D10] bg-opacity-95 absolute w-full left-0 py-6 shadow-lg transition-all 
        duration-500 ${isOpen ? "top-16 opacity-100 visible" : "top-[-400px] opacity-0 invisible"}`}>
        
        <ul className="text-center text-lg space-y-6">
          {[
            { name: "Profile", link: "#profile" },
            { name: "Skills & Hobbies", link: "#skills" },
            { name: "Contact", link: "#contact" }
          ].map((item, index) => (
            <li key={index}>
              <a 
                href={item.link} 
                className="block py-3 text-white text-xl font-medium hover:text-green-300 
                  transition duration-300"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;