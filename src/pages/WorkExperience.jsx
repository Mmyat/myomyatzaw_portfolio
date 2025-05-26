import { AiFillCalendar } from "react-icons/ai";
import { FiArrowUpRight } from "react-icons/fi";
import { ThemeContext } from '../App'
import {useContext} from "react";
const WorkExperience = () => {
  const workExpList = [
    {
      id: 1,
      dateRange: "1/6/2023 - 31/1/2024",
      position: "Junior Software Tester",
      companyName: "Innovative Global Wave Technology Co.,Ltd",
      companySite: "https://globalwave.com.mm/",
      description:
        "I worked with Testcafe Framework (JavaScript framework) for automation testing. I also worked on manual testing and writing test cases. I was familiar with web development and coding.",
    },
    {
      id: 2,
      dateRange: "1/2/2024 - Present",
      position: "Junior Full-Stack Developer",
      companyName: "Studio AMK Co.,Ltd",
      companySite: "https://www.studioamk.com/",
      description:
        "I worked on developing APIs with Node.js, Express.js, and Moleculer Framework and frontend with React.js, Tailwind CSS, and Ant Design. Created chat applications utilizing Socket.io. Developed social login integration (Google, Facebook, Line), Game Admin Tool (Express.js & React.js), Patient Management System (Express.js & React.js), Game Promotion Quests (Cocos Creator game engine), MM Guitar App Backend and Dashboard (Express.js, Moleculer framework, and React JS with TypeScript).",
    },
  ];
  const {theme} = useContext(ThemeContext);
  return (
    <div className="w-full md:px-10 px-7 mt-12 py-4 md:h-screen" id="work-experience">
      <h1 className="text-[#2cb67d] font-semibold text-3xl mt-12">Work Experience</h1>
      <p className="mb-8 text-gray-500 dark:text-gray-400">
        Here are some of my work experiences and projects that I have worked on.
      </p>
      <ol className="relative border-s border-gray-200 dark:border-gray-700">
        {workExpList.map((work) => (
          <li className="mb-10 ms-4" key={work.id}>
            <div className="absolute flex items-center justify-center bg-green-200 dark:bg-[#8892af1a] w-8 h-8 text-gray-700 rounded-full mt-1.5 -start-3.5 border dark:border-4 dark:border-gray-900 dark:bg-gray-700">
              <AiFillCalendar />
            </div>
            <div className="flex flex-col bg-[#8892af1a] dark:bg-green-800 mt-2 p-4 ml-2 rounded-lg">
              <div className={`w-full flex items-center justify-between mb-2 ${theme == "light" ? "text-gray-900" : "text-white"} hover:text-blue-400 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-100 focus:text-blue-700`}>
                <time className="text-sm font-normal leading-none text-gray-500 dark:text-gray-400">
                  {work.dateRange}
                </time>
                <a href={work.companySite} target="_blank" rel="noreferrer">
                  <FiArrowUpRight className="text-2xl"/>
                </a>
              </div>
              <h3 className={`text-lg font-semibold ${theme == "light" ? "text-gray-900" : "text-[#ccd6f6]"}`}>{work.position}</h3>
              <h4 className={`text-md font-medium ${theme == "light" ? "text-gray-900" : "text-[#ccd6f6]"}`}>{work.companyName}</h4>
              <p className={`mb-4 text-base font-normal ${theme == "light" ? "text-gray-900" : "text-[#e5e7eb]"}`}>{work.description}</p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default WorkExperience;