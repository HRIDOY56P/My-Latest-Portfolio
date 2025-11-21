import React from "react";
import profile from "../assets/DSC05959 (1).jpg";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col md:flex-row justify-center items-center text-center md:text-left bg-[#0f172a] pt-30 px-6"
    >
      <div className="flex-1">
        <h1 className="text-6xl extra large:text-5xl font-bold mb-6 text-white">
          <span className="bg-gradient-to-r from-blue-500 to-green-400 bg-clip-text text-transparent">
            AI-Powered Solutions
          </span>
          <br /> for a Smarter Tomorrow
        </h1>
        <p className="text-gray-300 mb-6">
          Hi, I'm MD RAKIBUL ISLAM – Data Science Enthusiast & COO at Golden Stitch.
        </p>
        <div className="flex justify-center md:justify-start space-x-4">
          <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition">
            Explore My Work →
          </button>
          <button className="border border-blue-600 text-blue-600 px-6 py-2 rounded hover:bg-blue-600 hover:text-white transition">
            Get In Touch
          </button>
        </div>
      </div>
      <div className="flex-1 mt-8 md:mt-0 md:ml-12 flex justify-center">
        <div className="relative">
          <img
            src={profile}
            alt="Profile"
            className="w-80 h-80 rounded-full border-4 border-blue-600 shadow-lg"
          />
          <span className="absolute bottom-0 left-2 transform -translate-x-1/3 bg-gray-800 text-green-400 px-3 py-1 rounded-full text-large mt-4">
            Data Scientist
          </span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
