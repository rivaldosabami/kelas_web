import React, { useState, useEffect } from "react";
import HeroImage from "../assets/moreno.jpeg";
import BackgroundImage from "../assets/bg.jpeg";

const texts = ["Web Developer", "UI/UX Enthusiast", "Tech Explorer"];

const Hero = () => {
  const [textIndex, setTextIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const speed = isDeleting ? 50 : 100;

  useEffect(() => {
    const handleTyping = () => {
      let currentText = texts[textIndex];
      setDisplayedText((prev) =>
        isDeleting ? prev.slice(0, -1) : currentText.slice(0, prev.length + 1)
      );

      if (!isDeleting && displayedText === currentText) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && displayedText === "") {
        setIsDeleting(false);
        setTextIndex((prev) => (prev + 1) % texts.length);
      }
    };

    const typingInterval = setTimeout(handleTyping, speed);
    return () => clearTimeout(typingInterval);
  }, [displayedText, isDeleting, textIndex]);

  return (
    <div className="relative text-white py-32 flex flex-col md:flex-row items-center justify-center gap-12 px-8 overflow-hidden bg-[#04140D]">

      <div
        className="absolute inset-0 bg-cover bg-center opacity-50"
        style={{
          backgroundImage: `url(${BackgroundImage})`,
          filter: "blur(12px) brightness(70%)",
        }}
      ></div>


      <div className="absolute inset-0 bg-gradient-to-r from-[#031008] via-[#0A2E15] to-[#166534] opacity-70"></div>

      <div className="relative group">
        <div className="absolute inset-0 w-80 h-80 bg-green-600 opacity-25 rounded-full blur-3xl"></div>
        <img
          src={HeroImage}
          alt="Profile"
          className="relative w-60 h-60 md:w-72 md:h-72 rounded-full object-cover border-4 border-green-700 
          shadow-2xl transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 
          group-hover:shadow-green-500/90"
        />
      </div>

      <div className="text-center md:text-left max-w-lg relative z-10">
        <h1 className="text-6xl font-extrabold leading-tight tracking-wide text-shadow">
          Holla, saya{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-green-500">
            Rivaldo Otniel Moreno Samber Sabami
          </span>
        </h1>
        <p className="mt-4 text-lg text-gray-300">
          Mahasiswa Teknik Informatika Universitas Papua.
        </p>
        <p className="mt-2 text-lg text-gray-400 italic">
          Saya ingin mengembangkan web & UI/UX Design.
        </p>

        <div className="relative mt-4 h-10 text-2xl font-mono text-green-300 neon-text">
          <span className="transition-opacity duration-500 ease-in-out">{displayedText}</span>
          <span className="inline-block w-1 h-6 bg-green-300 ml-1 animate-blink"></span>
        </div>

        <div className="mt-8 flex flex-col md:flex-row gap-4">
          {[{ text: "Contact Me", link: "#" }, { text: "Resume", link: "#" }].map((btn, index) => (
            <a
              key={index}
              href={btn.link}
              className="relative inline-block bg-gradient-to-r from-green-600 to-green-500 text-white px-8 py-3 rounded-lg 
              shadow-lg transform transition-transform duration-300 hover:scale-110 hover:shadow-green-400/80 
              hover:neon-glow hover:rotate-2"
            >
              {btn.text}
            </a>
          ))}
        </div>
      </div>

      <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 w-[120%] h-32 bg-gradient-to-r from-green-500 to-transparent opacity-20 blur-3xl"></div>

      <style jsx>{`
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        .animate-blink {
          animation: blink 0.8s infinite;
        }
        .neon-text {
          text-shadow: 0px 0px 10px rgba(0, 255, 0, 0.7);
        }
        .neon-glow {
          box-shadow: 0px 0px 20px rgba(0, 255, 0, 0.8);
        }
        .text-shadow {
          text-shadow: 2px 2px 10px rgba(0, 255, 0, 0.6);
        }
      `}</style>
    </div>
  );
};

export default Hero;