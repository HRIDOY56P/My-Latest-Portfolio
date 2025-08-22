import React from "react";
import cv from "../assets/cv.png";

const Footer = () => {
  return (
    <footer className="bg-[#1e293b] py-8 text-center text-gray-400">
      <p>© {new Date().getFullYear()} MD RAKIBUL ISLAM</p>
      <a href={cv} download className="inline-block mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
        Download CV
      </a>
    </footer>
  );
};

export default Footer;
