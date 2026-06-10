import { useContext } from "react";
import { ThemeContext } from '../App';
import { Link } from "react-scroll";

const Footer = () => {
  const { theme } = useContext(ThemeContext);
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full select-none border-t border-slate-200/40 dark:border-slate-800/40 mt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-slate-500 dark:text-slate-400">
          
          {/* Copyright info */}
          <div className="flex items-center gap-1.5">
            <span>&copy; {currentYear}</span>
            <Link 
              to="home" 
              smooth={true} 
              spy={true} 
              offset={-80}
              className="font-bold text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-teal-400 cursor-pointer transition-colors duration-200"
            >
              Myo Myat Zaw
            </Link>
            <span>| All rights reserved.</span>
          </div>

          {/* Role subtitle */}
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
            <span className="font-semibold text-slate-600 dark:text-slate-300">
              Full-Stack Software Developer
            </span>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;