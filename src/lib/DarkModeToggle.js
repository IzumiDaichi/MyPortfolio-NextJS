import { useEffect, useState } from 'react';

const DarkMode = () => {
  const [DarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Check if dark mode is already set in localStorage
    const savedMode = localStorage.getItem('dark-mode');
    if (savedMode === 'true') {
      document.documentElement.classList.add('dark'); // Apply Tailwind's dark class
      setIsDarkMode(true);
    }
  }, []);

  const toggleDarkMode = () => {
    if (DarkMode) {
      document.documentElement.classList.remove('dark'); // Remove dark class
      localStorage.setItem('dark-mode', 'false');
    } else {
      document.documentElement.classList.add('dark'); // Add dark class
      localStorage.setItem('dark-mode', 'true');
    }
    setIsDarkMode(!DarkMode);
  };

  return [DarkMode, toggleDarkMode];
};

export default DarkMode;
