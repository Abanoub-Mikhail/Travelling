'use client'
import { useState, useEffect } from 'react';

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Function to check if we're running in the browser
  const isBrowser = () => typeof window !== 'undefined';

  // Function to scroll to the top
  const scrollToTop = () => {
    if (!isBrowser()) return;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Event listener to toggle visibility of the button
  const handleScroll = () => {
    if (window.scrollY > 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <button
      className={`fixed bottom-3 right-3 z-50 md:right-10 md:bottom-10  bg-green-500 rounded-lg p-3 text-white shadow-sm shadow-slate-700 font-bold fade-in ${isVisible ? 'visible' : ''}`}
      onClick={scrollToTop}
    >
        Top
    </button>
  );
};

export default ScrollToTopButton;
