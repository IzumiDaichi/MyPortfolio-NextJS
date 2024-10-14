import { useEffect, useState } from 'react';

const DarkMode = () => {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') { // Ensure window is defined
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
      const handleChange = () => setDark(mediaQuery.matches);

      // Set initial state based on the current preference
      setDark(mediaQuery.matches);
      mediaQuery.addEventListener('change', handleChange);

      // Cleanup function to remove the event listener
      return () => {
        mediaQuery.removeEventListener('change', handleChange);
      };
    }
  }, []);

  return [dark];
};

export default DarkMode;
