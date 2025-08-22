import React from "react";

const skillData = [
  { name: "Data Science", value: 95 },
  { name: "Machine Learning", value: 85 },
  { name: "C Programming", value: 75 },
  { name: "HTML/CSS", value: 80 },
  { name: "Python", value: 90 },
  { name: "Deep Learning", value: 80 },
  { name: "JavaScript", value: 70 },
  { name: "PHP", value: 65 },
];

const extraSkills = [
  { label: "Natural Language Processing", icon: "🧠" },
  { label: "Data Visualization", icon: "📊" },
  { label: "SQL & NoSQL", icon: "🗄️" },
  { label: "Cloud Computing", icon: "☁️" },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 px-6 bg-[#0f172a] text-gray-300">
      <h2 className="text-4xl font-bold text-center mb-12">
        Technical <span className="text-green-400">Skills</span>
        <div className="h-1 w-28 bg-green-400 mx-auto mt-2 rounded"></div>
      </h2>

      <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto mb-12">
        {skillData.map((skill) => (
          <div key={skill.name}>
            <div className="flex justify-between mb-1 text-white font-medium">
              <span>{skill.name}</span>
              <span>{skill.value}%</span>
            </div>
            <div className="w-full h-2 bg-gray-700 rounded-full">
              <div
                className="h-full bg-gradient-to-r from-blue-500 to-green-400 rounded-full"
                style={{ width: `${skill.value}%` }}
              />
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {extraSkills.map((skill) => (
          <div
            key={skill.label}
            className="flex flex-col items-center justify-center bg-[#1e293b] rounded-lg p-6 text-center shadow hover:shadow-lg transition"
          >
            <div className="text-4xl mb-3">{skill.icon}</div>
            <p className="font-semibold text-white">{skill.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
