import React, { useState, useEffect } from "react";
import { FaEnvelope, FaMapMarkedAlt, FaPhone, FaPaperPlane } from "react-icons/fa";

const Contact = () => {
  const [title, setTitle] = useState("");
  const fullText = "Let's Connect!";
  let i = 0;

  useEffect(() => {
    const interval = setInterval(() => {
      if (i < fullText.length) {
        setTitle(fullText.substring(0, i + 1));
        i++;
      } else {
        clearInterval(interval);
      }
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative bg-[#0F3D17] text-white py-20 overflow-hidden" id="contact">
      
      <div className="absolute inset-0 w-full h-full pointer-events-none">
        <div className="absolute w-[200px] h-[200px] bg-green-500 opacity-20 blur-3xl rounded-full top-10 left-10 animate-float"></div>
        <div className="absolute w-[150px] h-[150px] bg-green-400 opacity-20 blur-3xl rounded-full bottom-20 right-20 animate-float"></div>
      </div>

      <div className="container mx-auto px-8 md:px-16 lg:px-24 relative z-10">
        
        <h2 className="text-4xl font-extrabold text-center mb-12 text-transparent bg-clip-text 
          bg-gradient-to-r from-green-400 to-green-600 tracking-wider glitch">
          {title}
        </h2>

        <div className="flex flex-col md:flex-row items-center md:space-x-12">
          
          <div className="relative flex-1 w-full bg-[#1B5E20] p-8 rounded-xl shadow-lg overflow-hidden">
            
            <div className="absolute inset-0 w-full h-full bg-green-500 opacity-10 blur-2xl animate-pulse"></div>

            <h3 className="text-3xl font-bold text-center md:text-left text-green-300 mb-6">
              Kirim Pesan 📩
            </h3>

            <form className="space-y-6 relative z-10">
              <div>
                <label htmlFor="name" className="block mb-2 font-semibold text-green-200">
                  Nama Anda
                </label>
                <input
                  type="text"
                  className="w-full p-3 rounded-lg bg-gray-900 border border-green-500 
                  focus:outline-none focus:ring-4 focus:ring-green-400 focus:border-green-400 transition-all duration-300 
                  shadow-md hover:shadow-green-400/50 neon-glow"
                  placeholder="Masukkan Nama Anda"
                />
              </div>
              <div>
                <label htmlFor="email" className="block mb-2 font-semibold text-green-200">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full p-3 rounded-lg bg-gray-900 border border-green-500 
                  focus:outline-none focus:ring-4 focus:ring-green-400 focus:border-green-400 transition-all duration-300 
                  shadow-md hover:shadow-green-400/50 neon-glow"
                  placeholder="Masukkan Email Anda"
                />
              </div>
              <div>
                <label htmlFor="message" className="block mb-2 font-semibold text-green-200">
                  Pesan
                </label>
                <textarea
                  className="w-full p-3 rounded-lg bg-gray-900 border border-green-500 
                  focus:outline-none focus:ring-4 focus:ring-green-400 focus:border-green-400 transition-all duration-300 
                  shadow-md hover:shadow-green-400/50 neon-glow"
                  rows="5"
                  placeholder="Tulis pesan Anda..."
                />
              </div>

              <button 
                className="w-full bg-gradient-to-r from-green-500 to-green-700 text-white flex items-center 
                justify-center space-x-2 px-6 py-3 rounded-lg font-semibold transform transition-transform duration-300 
                hover:scale-110 hover:shadow-green-400/50 relative overflow-hidden ripple">
                
                <FaPaperPlane className="text-lg" />
                <span>Kirim Pesan</span>
              </button>
            </form>
          </div>

          <div className="flex-1 mt-12 md:mt-0 text-center md:text-left">
            <h3 className="text-3xl font-bold text-green-300 mb-6">Hubungi Saya 📞</h3>
            <p className="text-gray-300">Saya siap berdiskusi dan berkolaborasi!</p>

            <div className="mt-6 space-y-4">
              {[
                { icon: <FaEnvelope />, text: "valdosabami@gmail.com", link: "mailto:valdosabami@gmail.com" },
                { icon: <FaPhone />, text: "0812-4849-0255", link: "tel:081248490255" },
                { icon: <FaMapMarkedAlt />, text: "Jln. Yos Sudarso (Sanggeng)", link: "#" }
              ].map((item, index) => (
                <a
                  key={index}
                  href={item.link}
                  className="flex items-center justify-center md:justify-start space-x-3 text-green-200 transition-all 
                  duration-300 hover:text-green-400 hover:scale-105 floating-card">
                  
                  <span className="text-green-400 text-xl">{item.icon}</span>
                  <span>{item.text}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>


      <style jsx>{`
        @keyframes glitch {
          0% { text-shadow: 2px 2px green; }
          50% { text-shadow: -2px -2px lime; }
          100% { text-shadow: 2px 2px green; }
        }
        .glitch {
          animation: glitch 0.5s infinite alternate;
        }

        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
          100% { transform: translateY(0px); }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .floating-card {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .floating-card:hover {
          transform: translateY(-5px);
          box-shadow: 0px 10px 20px rgba(0, 255, 0, 0.3);
        }

        .neon-glow {
          transition: box-shadow 0.3s ease-in-out;
        }
        .neon-glow:focus {
          box-shadow: 0px 0px 15px rgba(0, 255, 0, 0.7);
        }
      `}</style>
    </div>
  );
};

export default Contact;