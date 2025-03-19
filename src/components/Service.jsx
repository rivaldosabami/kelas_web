import React from "react";

const Service = () => {
  const skills = [
    { name: "Visual Studio Code", desc: "Editor kode yang fleksibel dan powerful." },
    { name: "Canva", desc: "Desain grafis cepat & sederhana." },
    { name: "Teamwork Gaming", desc: "Skill kerja sama dalam tim dengan strategi." }
  ];

  const hobbies = [
    { name: "Futsal", desc: "Olahraga favorit untuk kebugaran & teamwork." },
    { name: "Bernyanyi", desc: "Menyalurkan ekspresi melalui musik." },
    { name: "Mendengarkan Musik", desc: "Relaksasi dengan lagu favorit." }
  ];

  return (
    <div className="bg-[#0F3D17] text-white py-20" id="skills">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        
        <h2 
          className="text-4xl font-extrabold text-center mb-12 text-transparent bg-clip-text 
          bg-gradient-to-r from-green-400 to-green-600 tracking-wider animate-glitch">
          My Skills & Hobbies
        </h2>

        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-green-300 text-center uppercase tracking-wider">
            Skills
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-8">
            {skills.map((skill, index) => (
              <div 
                key={index} 
                className="relative bg-[#1B5E20] border border-green-600 rounded-lg p-6 shadow-xl 
                transform transition-transform duration-500 hover:scale-105 hover:shadow-green-400/50 group">
                

                <div className="absolute inset-0 w-full h-full rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-green-500 blur-lg"></div>

                <h4 className="text-xl font-bold text-green-300 relative z-10">{skill.name}</h4>
                <p className="mt-2 text-green-100 relative z-10 text-sm">{skill.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-semibold text-green-300 text-center uppercase tracking-wider">
            Hobbies
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-8">
            {hobbies.map((hobby, index) => (
              <div 
                key={index} 
                className="relative bg-[#1B5E20] border border-green-600 rounded-lg p-6 shadow-xl 
                transform transition-transform duration-500 hover:scale-105 hover:shadow-green-400/50 group">
                
                <div className="absolute inset-0 w-full h-full rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-green-500 blur-lg"></div>

                <h4 className="text-xl font-bold text-green-300 relative z-10">{hobby.name}</h4>
                <p className="mt-2 text-green-100 relative z-10 text-sm">{hobby.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes glitch {
          0% { text-shadow: 0px 0px 10px rgba(0, 255, 0, 0.8); }
          50% { text-shadow: -2px -2px 15px rgba(0, 255, 0, 0.5); }
          100% { text-shadow: 2px 2px 15px rgba(0, 255, 0, 0.8); }
        }
        .animate-glitch {
          animation: glitch 1.5s infinite alternate;
        }
      `}</style>
    </div>
  );
};

export default Service;