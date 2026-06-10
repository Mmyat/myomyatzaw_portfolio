import { useState, useContext } from "react";
import { Bars3Icon, XMarkIcon, SunIcon, MoonIcon } from "@heroicons/react/24/outline";
import { Link } from "react-scroll";
import { ThemeContext } from '../App';
import profileImage from "../assets/my_icon.jpg";

const Header = () => {
  const links = [
    { name: "Home", link: "home" },
    { name: "About", link: "about" },
    { name: "Skills", link: "skills" },
    { name: "Experience", link: "work-experience" },
    { name: "Projects", link: "projects" },
    { name: "Contact", link: "contact" },
  ];
  
  const [open, setOpen] = useState(false);
  const { theme, switchTheme } = useContext(ThemeContext);

  return (
    <header className="w-full glass-nav fixed top-0 left-0 right-0 z-50 border-b border-slate-200/40 dark:border-slate-800/40 shadow-sm transition-all duration-300">
      <div className="max-w-6xl mx-auto flex items-center justify-between py-4 px-4 sm:px-6 lg:px-8">
        
        {/* Logo Section */}
        <Link to="home" smooth={true} spy={true} offset={-80} className="font-bold text-xl cursor-pointer flex items-center gap-3 group">
          <div className="relative">
            <img 
              src={profileImage} 
              alt="Myo Myat Zaw" 
              className="rounded-full w-10 h-10 object-cover border-2 border-indigo-500 group-hover:border-teal-400 transition-all duration-300"
            />
            <div className="absolute inset-0 rounded-full bg-indigo-500/20 animate-ping opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
          </div>
          <span className="bg-gradient-to-r from-slate-900 to-slate-700 dark:from-slate-100 dark:to-slate-300 font-extrabold tracking-tight bg-clip-text text-transparent group-hover:from-indigo-500 group-hover:to-teal-400 transition-all duration-300">
            Myo Myat Zaw
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 font-medium">
          {links.map((link) => (
            <Link
              key={link.name}
              to={link.link}
              activeClass="text-indigo-600 dark:text-teal-400 font-semibold"
              smooth={true}
              spy={true}
              offset={-80}
              className="text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-teal-400 cursor-pointer transition-colors duration-200 text-sm relative py-1 group"
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-indigo-600 dark:bg-teal-400 group-hover:w-full transition-all duration-200"></span>
            </Link>
          ))}
        </nav>

        {/* Theme and Mobile Menu Actions */}
        <div className="flex items-center gap-3">
          {/* Theme Toggle */}
          <button 
            onClick={switchTheme} 
            aria-label="Toggle Theme"
            className="p-2.5 rounded-xl bg-slate-200/50 hover:bg-slate-200 dark:bg-slate-800/50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-300/30 dark:border-slate-700/30 transition-all duration-300"
          >
            {theme === "dark" ? (
              <SunIcon className="w-5 h-5 text-amber-400 animate-pulse" />
            ) : (
              <MoonIcon className="w-5 h-5 text-indigo-600" />
            )}
          </button>

          {/* Mobile Menu Icon */}
          <button
            onClick={() => setOpen(!open)}
            aria-label="Toggle Menu"
            className="p-2.5 rounded-xl md:hidden text-slate-700 dark:text-slate-300 bg-slate-200/50 hover:bg-slate-200 dark:bg-slate-800/50 dark:hover:bg-slate-800 border border-slate-300/30 dark:border-slate-700/30 transition-all duration-300"
          >
            {open ? <XMarkIcon className="w-5 h-5" /> : <Bars3Icon className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        <div 
          className={`md:hidden absolute top-[72px] left-0 w-full glass-nav border-b border-slate-200/40 dark:border-slate-800/40 px-6 py-8 flex flex-col gap-6 shadow-xl transition-all duration-350 ease-in-out ${
            open ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-4 pointer-events-none"
          }`}
        >
          {links.map((link) => (
            <Link
              key={link.name}
              to={link.link}
              activeClass="text-indigo-600 dark:text-teal-400 font-semibold pl-2 border-l-2 border-indigo-600 dark:border-teal-400"
              smooth={true}
              spy={true}
              offset={-80}
              onClick={() => setOpen(false)}
              className="text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-teal-400 cursor-pointer font-semibold text-lg transition-all"
            >
              {link.name}
            </Link>
          ))}
        </div>
        
      </div>
    </header>
  );
};

export default Header;
