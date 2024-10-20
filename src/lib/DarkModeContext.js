// lib/DarkModeContext.js
"use client"
import { createContext, useContext, useState, useEffect } from 'react';

const DarkModeContext = createContext();  // Make sure this is not an array but an object context

export const useDarkMode = () => useContext(DarkModeContext);

export const DarkModeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const savedMode = localStorage.getItem('dark-mode');
    if (savedMode === 'true') {
      document.documentElement.classList.add('dark');
      setIsDarkMode(true);
    }
  }, []);

  const toggleDarkMode = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('dark-mode', 'false');
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('dark-mode', 'true');
    }
    setIsDarkMode(!isDarkMode);
  };

  return (
    <DarkModeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
};
