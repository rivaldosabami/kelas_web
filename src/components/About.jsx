import React from "react";
import AboutImage1 from "../assets/valdo.jpeg";
import AboutImage2 from "../assets/valdo4.jpeg";
import AboutImage3 from "../assets/valdo5.jpeg";

const About = () => {
  return (
    <div className="relative bg-[#020C08] text-white py-24 overflow-hidden" id="profile">
      <div className="absolute inset-0 bg-green-500 opacity-10 blur-[150px]"></div>

      <div className="container mx-auto px-6 md:px-16 lg:px-24 relative z-10">
        
        <h2 className="text-5xl font-extrabold text-center mb-12 text-transparent bg-clip-text 
          bg-gradient-to-r from-green-400 to-green-600 tracking-wider animate-glitch">
          About Me
        </h2>

        <div className="flex flex-col md:flex-row items-center justify-center gap-12">
          
          <div className="grid grid-cols-3 gap-4">
            {[AboutImage1, AboutImage2, AboutImage3].map((img, index) => (
              <div key={index} className="relative w-36 h-44 md:w-44 md:h-56 rounded-xl overflow-hidden border-4 border-green-500 shadow-lg shadow-green-500/50 transform transition-all duration-500 hover:scale-110 hover:-translate-y-2">
                <img src={img} alt={`Profile ${index + 1}`} className="w-full h-full object-cover" />
              </div>
            ))}
          </div>

          <div className="relative w-full max-w-md bg-[#0a1a13] bg-opacity-90 backdrop-blur-lg rounded-xl shadow-xl border border-green-600 p-6">
            
            <div className="grid grid-cols-1 gap-4 text-lg">
              {[
                ["Nama", "Rivaldo Otniel Moreno Samber Sabami"],
                ["TTL", "Manokwari, 14 Agustus 2003"],
                ["Jurusan", "Teknik Informatika"],
                ["Alamat", "Jln. Yos Sudarso (Sanggeng)"],
                ["Hobi", "Futsal, Bernyanyi, Mendengarkan Musik"]
              ].map(([label, value], index) => (
                <div key={index} className="flex justify-between border-b border-green-700 pb-2 last:border-none neon-hover">
                  <div className="text-green-300 font-semibold">{label}</div>
                  <div className="text-green-100 shimmer">{value}</div>
                </div>
              ))}
            </div>

            <div className="mt-6 text-center text-green-200 text-lg italic neon-text">
              "Jangan pernah berhenti mencoba. Setiap kegagalan adalah langkah menuju sukses."
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        /* Animasi Glitch untuk Judul */
        @keyframes glitch {
          0% { text-shadow: 0px 0px 5px rgba(0, 255, 0, 0.5); }
          25% { text-shadow: -2px -2px 5px rgba(0, 255, 0, 0.8), 2px 2px 5px rgba(0, 255, 0, 0.3); }
          50% { text-shadow: 0px 0px 10px rgba(0, 255, 0, 1); }
          75% { text-shadow: 2px 2px 5px rgba(0, 255, 0, 0.8), -2px -2px 5px rgba(0, 255, 0, 0.3); }
          100% { text-shadow: 0px 0px 5px rgba(0, 255, 0, 0.5); }
        }
        .animate-glitch {
          animation: glitch 1.5s infinite alternate;
        }

        /* Efek Hover Neon */
        .neon-hover {
          transition: all 0.3s ease-in-out;
        }
        .neon-hover:hover {
          text-shadow: 0px 0px 10px rgba(0, 255, 0, 0.8);
          transform: scale(1.05);
        }

        /* Efek Shimmer */
        .shimmer {
          background: linear-gradient(to right, #ffffff 10%, #00ff00 50%, #ffffff 90%);
          background-size: 200% auto;
          color: transparent;
          background-clip: text;
          animation: shimmer 2s infinite linear;
        }
        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }

        /* Efek Neon Typographic */
        @keyframes neon {
          0% { text-shadow: 0px 0px 5px rgba(0, 255, 0, 0.5); }
          50% { text-shadow: 0px 0px 15px rgba(0, 255, 0, 1); }
          100% { text-shadow: 0px 0px 5px rgba(0, 255, 0, 0.5); }
        }
        .neon-text {
          animation: neon 2s infinite alternate;
        }
      `}</style>
    </div>
  );
};

export default About;