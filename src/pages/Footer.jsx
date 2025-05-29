import { ThemeContext } from '../App'
import {useContext} from "react";
const Footer = () => {
  const {theme} = useContext(ThemeContext);
  return (
    <>
      <hr className={`w-full border-1 ${theme === "light" ? "border-gray-700" : "border-[#8892af1a]"} mt-8`} />
      <div className="flex flex-col w-full md:px-10 px-7">
        <div className={`${theme === "light" ? "text-gray-900" : "text-white"} flex flex-col md:flex-row justify-around items-center py-8`}>
          <p>@ Copyright 2023 | MyoMyatZaw</p>
          <p className="hidden sm:block">Fullstack Developer</p>
        </div>
      </div>
    </>
  );
};
export default Footer;