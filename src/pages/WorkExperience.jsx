import { useContext } from "react";
import { ThemeContext } from '../App';
import { FiBriefcase, FiCalendar, FiCode, FiCpu, FiCheckSquare, FiArrowUpRight } from 'react-icons/fi';

const WorkExperience = () => {
  const { theme } = useContext(ThemeContext);

  const workExpList = [
    {
      id: 1,
      dateRange: "Aug 2025 – Present",
      position: "Full-Stack Software Developer",
      companyName: "Intellivale",
      companySite: "https://intellivale.com/", // Placeholder or general link
      icon: <FiCode className="text-indigo-500" />,
      bullets: [
        "Full-Stack Development: Architecting and maintaining high-performance web applications, managing fluid data flow between front-end user interfaces and back-end server components.",
        "Donation Management System: Engineered a specialized application module featuring strict numerical input sanitization and complex multi-currency exchange handling logic using a modern React.js and TypeScript workflow.",
        "Technical Problem Solving: Debugging complex software application ecosystems, refactoring legacy components, and implementing modern codebase optimization strategies.",
        "Collaborative Delivery: Partnering with cross-functional teams to translate strict product layout and software specifications into feature-rich, user-centric production solutions."
      ],
      tags: ["React.js", "TypeScript", "Code Optimization", "Input Sanitization", "Multi-Currency Handling"]
    },
    {
      id: 2,
      dateRange: "Feb 2024 – Jul 2025",
      position: "Full Stack Developer",
      companyName: "Studio AMK Pte. Ltd.",
      companySite: "https://www.studioamk.com/",
      icon: <FiCpu className="text-teal-500" />,
      bullets: [
        "Microservices & API Architecture: Designed and maintained highly available RESTful APIs and backend services using Node.js, Express.js, and the Moleculer microservices framework.",
        "Real-Time & Identity Integration: Architected real-time chat applications utilizing Socket.io and securely integrated multi-provider social authentication (Google, Facebook, Line).",
        "AI & Feature Innovation: Spearheaded the technical architecture and development of an AI-integrated chatbot system to enhance interactive platform capabilities.",
        "Application Dashboards & Automation: Built and maintained complex frontend interfaces and internal systems, including a Patient Management System, Game Admin Tools, the MM Guitar App dashboard, and the Akarizan AI automation multi-platform chatbot.",
        "Game Systems Development: Programmed game-based logic and system architectures, delivering operational features for Game Promotion Quests."
      ],
      tags: ["Node.js", "Express.js", "Moleculer Framework", "Socket.io", "AI Integration", "React.js"]
    },
    {
      id: 3,
      dateRange: "Jun 2023 – Jan 2024",
      position: "Junior Software Tester",
      companyName: "Innovative Global Wave Technology Co., Ltd",
      companySite: "https://globalwave.com.mm/",
      icon: <FiCheckSquare className="text-purple-500" />,
      bullets: [
        "Automation Engineering: Developed and executed automated end-to-end web testing suites using the TestCafe JavaScript framework, accelerating regression testing cycles.",
        "Quality Assurance: Authored comprehensive test cases, managed defect logging tracking, and conducted thorough manual testing across web platforms to ensure production stability.",
        "Cross-Functional Collaboration: Leveraged deep familiarity with web development and coding principles to bridge critical technical communication between quality assurance and core software engineering teams."
      ],
      tags: ["TestCafe", "JavaScript", "Automation Testing", "Quality Assurance", "Test Case Authoring"]
    }
  ];

  return (
    <section id="work-experience" className="w-full py-4 select-none">
      
      {/* Title */}
      <div className="flex flex-col gap-3 mb-12 text-center md:text-left">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white flex items-center justify-center md:justify-start gap-3">
          <FiBriefcase className="text-indigo-600 dark:text-teal-400" />
          <span>Professional Experience</span>
        </h2>
        <div className="h-1 w-20 bg-indigo-600 dark:bg-teal-400 rounded-full mx-auto md:mx-0"></div>
        <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg max-w-xl mt-2">
          A timeline of my professional experience building software, managing products, and asserting software quality.
        </p>
      </div>

      {/* Timeline Layout */}
      <div className="relative border-l-2 border-slate-200 dark:border-slate-800 ml-4 md:ml-6 pl-6 sm:pl-8 space-y-12">
        {workExpList.map((work) => (
          <div key={work.id} className="relative group">
            
            {/* Timeline Icon Node */}
            <div className="absolute -left-[43px] sm:-left-[51px] top-1.5 w-8 h-8 sm:w-10 sm:h-10 rounded-2xl bg-slate-50 dark:bg-[#030712] border-2 border-slate-200 dark:border-slate-800 flex items-center justify-center text-sm sm:text-base group-hover:border-indigo-600 dark:group-hover:border-teal-400 transition-colors duration-300">
              {work.icon}
            </div>

            {/* Timeline Card */}
            <div className="glass-panel rounded-2xl p-6 hover:shadow-md transition-all duration-300 border border-slate-200/50 dark:border-slate-800/50">
              
              {/* Header Info */}
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4 border-b border-slate-200/40 dark:border-slate-800/40 pb-4">
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-teal-400 transition-colors duration-200">
                    {work.position}
                  </h3>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="font-semibold text-slate-700 dark:text-slate-300 text-sm sm:text-base">
                      {work.companyName}
                    </span>
                    <a 
                      href={work.companySite} 
                      target="_blank" 
                      rel="noreferrer"
                      aria-label={`Visit ${work.companyName} website`}
                      className="text-slate-400 hover:text-indigo-600 dark:hover:text-teal-400 transition-colors"
                    >
                      <FiArrowUpRight className="text-base" />
                    </a>
                  </div>
                </div>

                <div className="inline-flex items-center gap-2 self-start md:self-center px-3 py-1 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200/50 dark:border-slate-800/50 text-xs sm:text-sm text-slate-600 dark:text-slate-400 font-semibold select-none">
                  <FiCalendar />
                  <span>{work.dateRange}</span>
                </div>
              </div>

              {/* Responsibilities */}
              <ul className="space-y-3 mb-6 text-slate-600 dark:text-slate-400 text-sm sm:text-base">
                {work.bullets.map((bullet, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 dark:bg-teal-400 mt-2 shrink-0"></span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>

              {/* Technology Tags */}
              <div className="flex flex-wrap gap-2 mt-4">
                {work.tags.map((tag, idx) => (
                  <span 
                    key={idx}
                    className="text-xs font-semibold px-3 py-1 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200/50 dark:border-slate-800/50 text-slate-600 dark:text-slate-300 select-none hover:border-indigo-500/30 dark:hover:border-teal-400/30 transition-colors"
                  >
                    {tag}
                  </span>
                ))}
              </div>

            </div>
          </div>
        ))}
      </div>
      
    </section>
  );
};

export default WorkExperience;