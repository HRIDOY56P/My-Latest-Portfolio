// import React, { useRef } from "react";
// import emailjs from "@emailjs/browser";
// import "./Contact.css";

// const Contact = () => {
//   const form = useRef();

//   const sendEmail = (e) => {
//     e.preventDefault();

//     emailjs.sendForm(
//       'service_y9hspx1',
//       'template_1b3956u',
//       form.current,
//       'tFF0hfPKAdglTE1kX'
//     ).then((result) => {
//       alert("Message sent!");
//       form.current.reset();
//     }, (error) => {
//       alert("Failed to send.");
//     });
//   };

//   return (
//     <section id="contact" className="py-16 bg-white text-center">
//       <h2 className="text-2xl font-bold mb-8">Contact</h2>
//       <form ref={form} onSubmit={sendEmail} className="max-w-md mx-auto space-y-4">
//         <input type="text" name="name" placeholder="Name" required className="w-full border p-2 rounded" />
//         <input type="email" name="email" placeholder="Email" required className="w-full border p-2 rounded" />
//         <textarea name="message" placeholder="Message" required className="w-full border p-2 rounded"></textarea>
//         <button type="submit" className="bg-purple-600 text-white px-6 py-2 rounded hover:bg-purple-700 transition">Send Message</button>
//       </form>
//       <div className="mt-8">
//         <p>Email: ridoym440@gmail.com</p>
//         <p>Phone: 01724094077, 01516530519</p>
//         <p>LinkedIn: <a href="https://linkedin.com/in/md-rakibul-islam-86b74b2bb" className="text-purple-600">Profile</a></p>
//       </div>
//     </section>
//   );
// };

// export default Contact;


// Contact.jsx
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";
import { FaEnvelope, FaPhoneAlt, FaLinkedin, FaGithub } from "react-icons/fa";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_y9hspx1',   
        'template_1b3956u',  
        form.current,
        'tFF0hfPKAdglTE1kX'    
      )
      .then(
        (result) => {
          alert("✅ Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          alert("❌ Failed to send message. Please try again.");
        }
      );
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <div className="contact-wrapper">
          
          {/* Left Side - Contact Info */}
          <div className="contact-info-box">
            <h3>Contact Information</h3>
            <div className="info-item">
              <FaEnvelope className="icon" />
              <div>
                <h4>Email</h4>
                <p>ridoym440@gmail.com</p>
              </div>
            </div>
            <div className="info-item">
              <FaPhoneAlt className="icon" />
              <div>
                <h4>Phone</h4>
                <p>01724094077, 01516530519</p>
              </div>
            </div>
            <div className="info-item">
              <FaLinkedin className="icon" />
              <div>
                <h4>LinkedIn</h4>
                <a
                  href="https://linkedin.com/in/md-rakibul-islam-86b74b2bb"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  linkedin.com/in/Rakibul
                </a>
              </div>
            </div>
            <div className="info-item">
              <FaGithub className="icon" />
              <div>
                <h4>GitHub</h4>
                <a
                  href="https://github.com/HRIDOY56P"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  github.com/HRIDOY
                </a>
              </div>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="contact-form-box">
            <h3 className="form-title">Send Me a Message</h3>
            <form ref={form} onSubmit={sendEmail}>
              <input type="text" name="user_name" placeholder="Your Name" required />
              <input type="email" name="user_email" placeholder="Your Email" required />
              <textarea name="message" rows="5" placeholder="Your Message" required></textarea>
              <button type="submit" className="send-btn">Send Message</button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
