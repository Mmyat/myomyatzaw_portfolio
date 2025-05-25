import { ThemeContext } from '../App'
import {useContext} from "react";
const Footer = () => {
  const {theme} = useContext(ThemeContext);
  return (
    <div className="md:px-10 px-7 mt-12">
      <hr className='w-full text-xl text-gray-700'></hr>
      <div className={`${theme === "light" ? "text-gray-900" : "text-white"} flex flex-col md:flex-row justify-between items-center py-8`}>
        <p>@ Copyright 2023 | MyoMyatZaw</p>
        <p className="hidden sm:block">Fullstack Developer</p>
      </div>
    </div>
  );
};

export default Footer;
