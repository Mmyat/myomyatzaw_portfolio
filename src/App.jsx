import All from "./All";
import { useState, useEffect, createContext } from 'react';
import useLocalStorage from 'use-local-storage';

export const ThemeContext = createContext(null);

const App = () => {
  const [loading, setLoading] = useState(true);
  const [theme, setTheme] = useLocalStorage('theme', 'dark');

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const switchTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <ThemeContext.Provider value={{ theme, switchTheme }}>
      <div className={theme === 'light' ? 'light' : 'dark'}>
        {loading ? (
          <div className="flex h-screen items-center justify-center text-center bg-slate-950">
            <div className="relative flex items-center justify-center">
              {/* Premium Ring Loader */}
              <div className="w-16 h-16 border-4 border-indigo-500/20 border-t-indigo-500 rounded-full animate-spin"></div>
              <div className="absolute w-10 h-10 border-4 border-teal-500/20 border-b-teal-500 rounded-full animate-spin [animation-direction:reverse]"></div>
            </div>
          </div>
        ) : (
          <div className="bg-slate-50 dark:bg-[#030712] text-slate-800 dark:text-slate-200 min-h-screen transition-colors duration-300 relative overflow-hidden">
            {/* Ambient Background Glows */}
            <div className="absolute top-[10%] left-[-10%] w-[500px] h-[500px] bg-glow-indigo pointer-events-none rounded-full"></div>
            <div className="absolute bottom-[20%] right-[-10%] w-[500px] h-[500px] bg-glow-teal pointer-events-none rounded-full"></div>
            <All />
          </div>
        )}
      </div>
    </ThemeContext.Provider>
  );
};

export default App;
