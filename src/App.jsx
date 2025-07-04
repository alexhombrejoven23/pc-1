import React, { useState } from 'react';

const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  
  const teamMembers = [
    {
      id: 1,
      name: "Bill Mahoney",
      role: "PRODUCT OWNER",
      photo: "/public/photo1.png", 
      position: "top"
    },
    {
      id: 2,
      name: "Saba Cabrera",
      role: "ART DIRECTOR",
      photo: "/public/photo2.png",
      position: "bottom"
    },
    {
      id: 3,
      name: "Shae Le",
      role: "TECH LEAD",
      photo: "/public/photo3.png",
      position: "top"
    },
    {
      id: 4,
      name: "Skylah Lu",
      role: "UX DESIGNER",
      photo: "/public/photo4.png",
      position: "bottom"
    },
    {
      id: 5,
      name: "Griff Richards",
      role: "DEVELOPER",
      photo: "/public/photo5.png",
      position: "top"
    },
    {
      id: 6,
      name: "Stan John",
      role: "DEVELOPER",
      photo: "/public/photo6.png",
      position: "bottom"
    }
  ];

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'} py-8 px-4 md:py-12 md:px-8 font-sans transition-colors duration-300`}>
      <div className="max-w-6xl mx-auto">
        {/* Dark Mode Toggle */}
        <div className="flex justify-end mb-6">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className={`px-4 py-2 rounded-full ${darkMode ? 'bg-gray-700 text-yellow-300' : 'bg-gray-200 text-gray-800'}`}
          >
            {darkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
          </button>
        </div>

        {/* Header  */}
        <div className="mb-12 md:mb-20 md:flex md:justify-between">
          <div className="mb-6 md:mb-0 md:w-5/12">
            <h1 className="text-3xl md:text-5xl font-bold">The creative crew</h1>
          </div>
          <div className="md:w-5/12">
            <h2 className="text-lg md:text-xl font-bold mb-2">WHO WE ARE.</h2>
            <p className="text-base md:text-lg">
              We are team of creatively diverse, driven, innovative individuals working in various locations from the world.
            </p>
          </div>
        </div>

        {/* Team Grid  */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
          {teamMembers.map((member) => (
            <div 
              key={member.id} 
              className={`flex flex-col ${member.position === 'top' ? 'md:mt-0' : 'md:mt-20'}`}
            >
              <div className="relative mb-2">
                <img 
                  src={member.photo} 
                  alt={member.name} 
                  className="w-full h-auto rounded-sm"
                  loading="lazy"
                />
                <span className={`absolute top-2 -left-2 ${darkMode ? 'bg-yellow-500 text-gray-900' : 'bg-black text-white'} text-xs md:text-sm font-bold px-2 py-1 uppercase`}>
                  {member.role}
                </span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold">{member.name}</h3>
            </div>
          ))}
        </div>

        {/* Footer */}
        <footer className={`mt-12 md:mt-20 text-center ${darkMode ? 'text-gray-400' : 'text-gray-500'} text-sm md:text-base`}>
          created by joregessa - devChallenges.io
        </footer>
      </div>
    </div>
  );
};

export default App;