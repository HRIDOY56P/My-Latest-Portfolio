import React from "react";

const Navbar = () => {
  return (
    <nav className="fixed w-full bg-[#0f172a] text-white shadow z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-blue-400">Rakibul</h1>
        <ul className="flex space-x-6">
          {["Home", "About", "Skills", "Services", "Projects", "Contact"].map((item) => (
            <li key={item}>
              <a href={`#${item.toLowerCase()}`} className="hover:text-blue-400">
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
