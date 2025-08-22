import React from "react";

const BackToTop = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <button onClick={scrollToTop} className="fixed bottom-5 right-5 bg-purple-600 text-white p-3 rounded-full shadow hover:bg-purple-700">
      ↑
    </button>
  );
};

export default BackToTop;
