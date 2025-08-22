// import React from "react";

// const services = [
//   {
//     title: "Data Analysis",
//     desc: "Analyzing data for insights and predictive analytics.",
//   },
//   {
//     title: "Web Development",
//     desc: "Building responsive websites and applications.",
//   },
// ];

// const Services = () => {
//   return (
//     <section id="services" className="py-20 px-4 bg-[#1e293b] text-center text-gray-300">
//       <h2 className="text-3xl font-bold mb-10 text-white">Services</h2>
//       <div className="grid sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
//         {services.map((service) => (
//           <div key={service.title} className="bg-[#0f172a] p-6 rounded shadow hover:bg-blue-600 transition">
//             <h3 className="text-xl font-semibold mb-2 text-white">{service.title}</h3>
//             <p>{service.desc}</p>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Services;

// Service.jsx
import React from "react";
import "./Service.css";
import { FaChartLine, FaLaptopCode, FaRobot } from "react-icons/fa";

const Service = () => {
  return (
    <section id="services" className="services-section">
      <div className="container">
        <h2 className="section-title">My Services</h2>
        <p className="services-intro">
          I offer specialized services that leverage my expertise in data science
          and web development to deliver impactful solutions.
        </p>

        <div className="service-cards">
          {/* Data Analysis */}
          <div className="service-card">
            <div className="service-header">
              <FaChartLine className="service-icon" />
              <h3>Data Analysis</h3>
            </div>
            <p>
              Analyzing data for insights and predictive analytics. Transform raw
              data into actionable business intelligence.
            </p>
            <ul>
              <li>Statistical Analysis</li>
              <li>Predictive Modeling</li>
              <li>Data Visualization</li>
            </ul>
          </div>

          {/* Web Development */}
          <div className="service-card">
            <div className="service-header">
              <FaLaptopCode className="service-icon" />
              <h3>Web Development</h3>
            </div>
            <p>
              Building responsive websites and applications. Create modern,
              user-friendly interfaces with the latest technologies.
            </p>
            <ul>
              <li>Responsive Design</li>
              <li>Frontend Development</li>
              <li>Backend Integration</li>
            </ul>
          </div>

          {/* AI Solutions */}
          <div className="service-card">
            <div className="service-header">
              <FaRobot className="service-icon" />
              <h3>AI Solutions</h3>
            </div>
            <p>
              Implementing machine learning and deep learning models to solve
              complex business problems.
            </p>
            <ul>
              <li>Custom ML Models</li>
              <li>NLP Applications</li>
              <li>AI Integration</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Service;
