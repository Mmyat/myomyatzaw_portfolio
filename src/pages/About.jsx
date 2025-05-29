import { ThemeContext } from '../App'
import {useContext} from "react";
const About = () => {
  const {theme} = useContext(ThemeContext);
  return (
    <div className="w-full md:px-10 px-7 md:mt-4 py-2" id="about">
      <h1 className="text-[#2cb67d] font-semibold text-3xl mt-12">About me:</h1>
      <p className={`${theme === "light" ? "text-gray-700" : "text-white"} text-lg my-3 md:w-2/3 leading-[2]`}>
        I am <strong>Myo Myat Zaw</strong>, a passionate self-taught web developer. Currently, I’m focused on building practical, high-performance web applications. 
        I have hands-on experience working across both frontend and backend technologies, primarily using React.js, Next.js, Tailwind CSS, Node.js,Express.js and Nest.js. My work often involves designing responsive user interfaces, implementing drag-and-drop functionality, managing dynamic data, and building secure, scalable APIs with MySQL, Mongoose, and Express.
        <br /><br />
        I’ve developed and maintained a range of features for admin dashboards, patient management system, guitar chord management platforms and integrating survey tools. I’m particularly skilled in enhancing UX through mobile-friendly components, optimizing API requests, and handling real-time data updates. I follow clean coding practices and consistently work on improving performance and maintainability in every project I touch.
        <br /><br />
        I'm always excited to take on new challenges that allow me to combine technical problem-solving with meaningful user experiences.
      </p>
    </div>
  );
};

export default About;
