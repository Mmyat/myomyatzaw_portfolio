import ruler_pen from "../assets/ruler-pen.png";
import code from "../assets/code.png";
import { ThemeContext } from '../App'
import {useContext} from "react";
const About = () => {
  const skills = [
    { name: "UI & UX DESIGNING", image: ruler_pen },
    { name: "FRONTEND WEB DEVELOPMENT", image: code },
    { name: "BACKEND WEB DEVELOPMENT", image: code },
  ];
  const {theme} = useContext(ThemeContext);
  return (
    <div className="md:px-10 px-7 md:mt-4 py-2" id="about">
      <h1 className="text-[#2cb67d] font-semibold text-3xl mt-12">About me:</h1>
      <p className={`${theme === "light" ? "text-gray-700" : "text-white"} my-3 md:w-2/3 leading-[2]`}>
        Hi, my name is Myo Myat Zaw, i am a Fullstack web developer. I have honed my skills in Web
        Development. Here are the major skills I have.
      </p>
      {/* skills */}
      <div className="flex flex-col md:flex-row ">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="md:w-[256px] md:h-[254px] bg-cardbg hover:bg-primary flex flex-col items-baseline justify-end md:m-3 my-3 p-5 shadow-sm skills transition-all duration-500"
          >
            <img src={skill.image} alt={skill.name} />
            <p className="mt-3 text-2xl text-btntext font-semibold">
              {skill.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
