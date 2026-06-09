import { useState, useEffect } from 'react';
import Home from './pages/Home';

const App = () => {
  const [darkMode, setDarkMode] = useState(() => {
    const stored = localStorage.getItem('theme');
    if (stored) return stored === 'dark';
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
    localStorage.setItem('theme', darkMode ? 'dark' : 'light');
  }, [darkMode]);

  return (
    <Home
      darkMode={darkMode}
      toggleDark={() => setDarkMode(d => !d)}
    />
  );
};

export default App;
