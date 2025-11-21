// // Project.jsx
// import React from "react";
// import "./Project.css";

// const Project = () => {
//   return (
//     <section id="projects" className="projects-section">
//       <div className="container">
//         <h2 className="section-title">My Projects</h2>
//         <div className="project-grid">
//           <div className="project-card">
//             <h3>Asthma Prediction</h3>
//             <p>ML-based asthma prediction system using multiple classifiers and medical data insights.</p>
//           </div>
//           <div className="project-card">
//             <h3>Clinical Decision Support</h3>
//             <p>AI system for predicting diseases using clinical notes and suggesting treatments/tests.</p>
//           </div>
//           <div className="project-card">
//             <h3>ERS Recommendation Engine</h3>
//             <p>Smart engine for employee recognition using role-based logic and Flask backend.</p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Project;

// Project.jsx
import React from "react";
import "./Project.css";
import { FaGithub } from "react-icons/fa";

const Project = () => {
  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <h2 className="section-title">My Projects</h2>
        <p className="projects-intro">
          Explore my latest work and see how I've applied my skills to solve
          real-world problems.
        </p>

        <div className="project-cards">
          {/* Asthma Prediction */}
          <div className="project-card">
            <h3>Asthma Prediction</h3>
            <p>
              Built a machine learning model to predict asthma risk using
              classifiers like Logistic Regression, XGBoost, SVC, KNN, MLP, and
              GradientBoosting.
            </p>
            <div className="tech-stack">
              <span>Python</span>
              <span>Scikit-learn</span>
              <span>XGBoost</span>
              <span>Pandas</span>
              <span>Flask</span>
            </div>
            <a
              href="https://github.com/yourusername/asthma-prediction"
              className="github-btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub /> View on GitHub
            </a>
          </div>

          {/* Clinical Decision Support */}
          <div className="project-card">
            <h3>Clinical Decision Support System</h3>
            <p>
              Developed a system that leverages NLP, ML, and LSTM deep learning
              models to analyze clinical notes and assist doctors with disease
              prediction and treatment recommendations.
            </p>
            <div className="tech-stack">
              <span>Python</span>
              <span>TensorFlow/Keras</span>
              <span>NLTK</span>
              <span>Scikit-learn</span>
              <span>Flask</span>
            </div>
            <a
              href="https://github.com/HRIDOY56P/Predicting-Diseases-and-Guiding-Treatment-from-Clinical-Note-with-NLP"
              className="github-btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub /> View on GitHub
            </a>
          </div>

          {/* Career Aspiration Project */}
          <div className="project-card">
            <h3>Career Aspiration Project</h3>
            <p>
              Designed a recommendation system to guide individuals in choosing
              career paths based on their skills, interests, and learning
              progress.
            </p>
            <div className="tech-stack">
              <span>Python</span>
              <span>Machine Learning</span>
              <span>Flask</span>
              <span>Pandas</span>
            </div>
            <a
              href="https://github.com/yourusername/career-aspiration"
              className="github-btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub /> View on GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;
