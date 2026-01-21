import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 p-4 bg-purple-600 text-black border-2 border-purple-600 transition-all duration-400 hover:bg-purple-500 hover:scale-110 hover:shadow-[0_0_20px_rgba(139,92,246,0.5)] group"
          aria-label="Back to top"
        >
          <ArrowUp size={24} strokeWidth={2} className="group-hover:translate-y-[-2px] transition-transform duration-300" />
        </button>
      )}
    </>
  );
};

export default BackToTop;