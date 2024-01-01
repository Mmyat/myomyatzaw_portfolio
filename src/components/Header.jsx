import { useState,useContext } from "react";
import {
  Bars3BottomRightIcon,
  XMarkIcon,
} from "@heroicons/react/24/solid";
import { Link} from "react-scroll";
import { ThemeContext } from '../App'
import profileImage from "../assets/my_icon.jpg";
const Header = () => {
  let Links = [
    { name: "Home", link: "home" },
    { name: "About me", link: "about" },
    { name: "Services", link: "services" },
    { name: "Projects", link: "projects" },
    { name: "Contact", link: "contact" },
  ];
  let [open, setOpen] = useState(false);
  const {theme,switchTheme} = useContext(ThemeContext)
  return (
    <div className={`w-full ${theme === "light" ? "bg-gray-50": "bg-dark"} fixed top-0 left-0 right-0 z-10 shadow-md rounded-b-lg`}>
      <div className="flex md:flex items-center justify-between py-4 md:px-10 px-2">
        {/* logo section */}
        <div className="order-first font-bold text-2xl cursor-pointer flex items-center gap-1">
          <img src={profileImage} alt="Profile Picture" className="text-white rounded-full w-12 h-12 mr-1 border-1"/>
          <span className={`${theme === "light" ? "text-primary" : "text-white"}`}>Myo Myat Zaw</span>
        </div>
        {/* Menu icon */}
        <button onClick={switchTheme} className="order-2 md:order-last">
          { theme === "dark" ?
          (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#ffffff" className="w-6 h-6">
            <path d="M12 2.25a.75.75 0 0 1 .75.75v2.25a.75.75 0 0 1-1.5 0V3a.75.75 0 0 1 .75-.75ZM7.5 12a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM18.894 6.166a.75.75 0 0 0-1.06-1.06l-1.591 1.59a.75.75 0 1 0 1.06 1.061l1.591-1.59ZM21.75 12a.75.75 0 0 1-.75.75h-2.25a.75.75 0 0 1 0-1.5H21a.75.75 0 0 1 .75.75ZM17.834 18.894a.75.75 0 0 0 1.06-1.06l-1.59-1.591a.75.75 0 1 0-1.061 1.06l1.59 1.591ZM12 18a.75.75 0 0 1 .75.75V21a.75.75 0 0 1-1.5 0v-2.25A.75.75 0 0 1 12 18ZM7.758 17.303a.75.75 0 0 0-1.061-1.06l-1.591 1.59a.75.75 0 0 0 1.06 1.061l1.591-1.59ZM6 12a.75.75 0 0 1-.75.75H3a.75.75 0 0 1 0-1.5h2.25A.75.75 0 0 1 6 12ZM6.697 7.757a.75.75 0 0 0 1.06-1.06l-1.59-1.591a.75.75 0 0 0-1.061 1.06l1.59 1.591Z" />
          </svg>
          ) : 
          (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
              <path fillRule="evenodd" d="M9.528 1.718a.75.75 0 0 1 .162.819A8.97 8.97 0 0 0 9 6a9 9 0 0 0 9 9 8.97 8.97 0 0 0 3.463-.69.75.75 0 0 1 .981.98 10.503 10.503 0 0 1-9.694 6.46c-5.799 0-10.5-4.7-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 0 1 .818.162Z" clipRule="evenodd" />
            </svg>
          
          )}
        </button>
        <div
          onClick={() => setOpen(!open)}
          className={`absolute right-8 top-6 cursor-pointer md:hidden w-7 h-7 ${theme === "light" ? "text-dark": "text-white"} `}
        >
          {open ? <XMarkIcon /> : <Bars3BottomRightIcon />}
        </div>
        {/* linke items */}
        <ul
          className={`md:flex md:items-center md:pb-0 absolute md:static  md:z-auto z-10 left-0 w-full md:w-auto mt-4 md:mt-0 md:pl-0 pl-9 bg-slate-400 sm:bg-transparent transition-all duration-500 ease-in ${
            open ? "top-12" : "top-[-490px]"
          }`}
        >
          {Links.map((link) => (
            <li className="md:ml-8 md:my-0 my-7 font-semibold" key={link.name}>
              <Link
                to={link.link}
                activeClass="active"
                smooth={true}
                spy={true}
                className={`${theme === "light" ? "text-gray-900" : "text-white"} hover:text-primary cursor-pointer duration-500`}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
        
        {/* button */}
      </div>
    </div>
  );
};

export default Header;
