import { AiFillCalendar } from "react-icons/ai";

const WorkExperience = () => {
  const workExpList = [
    {
      id: 1,
      dateRange: "1/6/2023 - 31/1/2024",
      position: "Junior Software Tester",
      companyName: "Innovative Global Wave Technology Co.,Ltd",
      description:
        "I worked with Testcafe Framework (JavaScript framework) for automation testing. I also worked on manual testing and writing test cases. I was familiar with web development and coding.",
    },
    {
      id: 2,
      dateRange: "1/2/2024 - Present",
      position: "Junior Full-Stack Developer",
      companyName: "Studio AMK Co.,Ltd",
      description:
        "I worked on developing APIs with Node.js, Express.js, and Moleculer Framework and frontend with React.js, Tailwind CSS, and Ant Design. Created chat applications utilizing Socket.io. Developed social login integration (Google, Facebook, Line), Game Admin Tool (Express.js & React.js), Patient Management System (Express.js & React.js), Game Promotion Quests (Cocos Creator game engine), MM Guitar App Backend and Dashboard (Express.js, Moleculer framework, and React JS with TypeScript).",
    },
  ];

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
              <time className="mb-1 text-sm font-normal leading-none text-gray-500 dark:text-gray-400">
                {work.dateRange}
              </time>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{work.position}</h3>
              <h4 className="text-md font-medium text-gray-800 dark:text-gray-300">{work.companyName}</h4>
              <p className="mb-4 text-base font-normal text-gray-600 dark:text-gray-200">{work.description}</p>
              <a
                href="#"
                className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 rounded-lg hover:text-blue-400 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-100 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700"
              >
                Learn more
                <svg
                  className="w-3 h-3 ms-2 rtl:rotate-180"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </a>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default WorkExperience;