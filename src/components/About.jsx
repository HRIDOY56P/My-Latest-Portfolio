import React from "react";
import { FaGraduationCap, FaBriefcase, FaLightbulb, FaCodeBranch, FaUsers, FaDownload } from "react-icons/fa";

const About = () => {
  return (
    <section id="about" className="py-20 px-6 bg-[#0f172a] text-gray-300">
      <h2 className="text-4xl font-bold text-center mb-12">
        About <span className="text-cyan-400">Me</span>
        <div className="h-1 w-28 bg-cyan-400 mx-auto mt-2 rounded"></div>
      </h2>

      <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
        {/* Left - Personal Bio */}
        <div className="bg-[#1e293b] rounded-xl shadow-lg p-8">
          <h3 className="text-xl font-semibold mb-4 text-white">Personal Bio</h3>
          <p className="mb-6">
            I am passionate about Data Science and love working on AI-based machine learning and deep learning solutions.
            My goal is to build intelligent systems that improve human lives.
          </p>

          <h4 className="text-lg font-semibold mb-2">Educational Background</h4>
          <div className="flex items-center gap-3 mb-4">
            <FaGraduationCap className="text-xl text-blue-400" />
            <div>
              <p className="font-semibold">B.Sc. in Computer Science and Information Technology</p>
              <p className="text-sm text-gray-400">Graduated 2024</p>
            </div>
          </div>

          <h4 className="text-lg font-semibold mb-2">Current Role</h4>
          <div className="flex items-center gap-3">
            <FaBriefcase className="text-xl text-green-400" />
            <div>
              <p className="font-semibold">COO at Golden Stitch</p>
              <p className="text-sm text-gray-400">2019–Present</p>
            </div>
          </div>
        </div>

        {/* Right - Why Work With Me */}
        <div>
          <h3 className="text-xl font-semibold mb-6 text-white">Why Work With Me?</h3>

          <div className="flex items-start gap-4 mb-6">
            <FaLightbulb className="text-xl text-blue-400 mt-1" />
            <div>
              <p className="font-semibold">Innovative Approach</p>
              <p className="text-sm text-gray-400">I combine cutting-edge AI techniques with practical business solutions.</p>
            </div>
          </div>

          <div className="flex items-start gap-4 mb-6">
            <FaCodeBranch className="text-xl text-green-400 mt-1" />
            <div>
              <p className="font-semibold">Technical Expertise</p>
              <p className="text-sm text-gray-400">Proficient in machine learning, deep learning, and web development.</p>
            </div>
          </div>

          <div className="flex items-start gap-4 mb-8">
            <FaUsers className="text-xl text-purple-400 mt-1" />
            <div>
              <p className="font-semibold">Leadership Experience</p>
              <p className="text-sm text-gray-400">As COO at Golden Stitch, I’ve developed strong project management skills.</p>
            </div>
          </div>

          <a
            href="/cv.pdf"
            className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition"
            download
          >
            <FaDownload className="mr-2" />
            Download CV
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
