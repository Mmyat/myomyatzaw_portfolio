import { useState, useContext } from "react";
import { ThemeContext } from '../App';
import SkillCard from '../components/SkillCard';
import { 
  SiJavascript, SiTypescript, SiHtml5, SiCss3, SiGo,
  SiReact, SiNextdotjs, SiRedux, SiTauri, SiTailwindcss, SiAntdesign, SiBootstrap,
  SiBun, SiExpress, SiNestjs,
  SiPostgresql, SiMysql, SiMongodb, SiRedis,
  SiGithub, SiDocker, SiSocketdotio, SiGithubactions, SiGit
} from "react-icons/si";
import { FaGamepad, FaNodeJs } from "react-icons/fa";
import { FiZap, FiLayers, FiActivity, FiCpu, FiLayout } from "react-icons/fi";
import { TbDatabase } from "react-icons/tb";

const Skill = () => {
  const { theme } = useContext(ThemeContext);
  const [activeTab, setActiveTab] = useState('all');

  const categories = [
    { id: 'all', name: 'All' },
    { id: 'languages', name: 'Languages' },
    { id: 'frontend', name: 'Frontend & Desktop' },
    { id: 'backend', name: 'Backend & Runtimes' },
    { id: 'databases', name: 'Databases & Caching' },
    { id: 'tools', name: 'Tools & DevOps' }
  ];

  const skillsList = [
    // Languages
    { name: "JavaScript (ES6+)", category: "languages", icon: <SiJavascript className="text-yellow-400" />, level: "Advanced" },
    { name: "TypeScript", category: "languages", icon: <SiTypescript className="text-blue-500" />, level: "Advanced" },
    { name: "HTML5", category: "languages", icon: <SiHtml5 className="text-orange-500" />, level: "Advanced" },
    { name: "CSS3", category: "languages", icon: <SiCss3 className="text-blue-400" />, level: "Advanced" },
    { name: "Go (Gin)", category: "languages", icon: <SiGo className="text-cyan-400" />, level: "Growing" },

    // Frontend & Desktop
    { name: "React.js", category: "frontend", icon: <SiReact className="text-sky-400" />, level: "Advanced" },
    { name: "Next.js", category: "frontend", icon: <SiNextdotjs className="text-slate-800 dark:text-white" />, level: "Advanced" },
    { name: "Redux", category: "frontend", icon: <SiRedux className="text-purple-500" />, level: "Advanced" },
    { name: "Tauri", category: "frontend", icon: <SiTauri className="text-blue-400" />, level: "Intermediate" },
    { name: "Tailwind CSS", category: "frontend", icon: <SiTailwindcss className="text-cyan-400" />, level: "Advanced" },
    { name: "Shadcn UI", category: "frontend", icon: <FiLayout className="text-slate-900 dark:text-slate-100" />, level: "Advanced" },
    { name: "Ant Design", category: "frontend", icon: <SiAntdesign className="text-red-500" />, level: "Advanced" },
    { name: "Bootstrap", category: "frontend", icon: <SiBootstrap className="text-purple-600" />, level: "Intermediate" },

    // Backend & Runtimes
    { name: "Node.js", category: "backend", icon: <FaNodeJs className="text-green-500" />, level: "Advanced" },
    { name: "Bun", category: "backend", icon: <SiBun className="text-amber-300 dark:text-amber-200" />, level: "Advanced" },
    { name: "Elysia", category: "backend", icon: <FiZap className="text-yellow-400" />, level: "Intermediate" },
    { name: "Express.js", category: "backend", icon: <SiExpress className="text-slate-700 dark:text-slate-300" />, level: "Advanced" },
    { name: "Nest.js", category: "backend", icon: <SiNestjs className="text-red-500" />, level: "Advanced" },
    { name: "Moleculer", category: "backend", icon: <FiLayers className="text-purple-400" />, level: "Advanced" },

    // Databases & Caching
    { name: "PostgreSQL", category: "databases", icon: <SiPostgresql className="text-blue-400" />, level: "Advanced" },
    { name: "MySQL", category: "databases", icon: <SiMysql className="text-blue-500" />, level: "Advanced" },
    { name: "MongoDB", category: "databases", icon: <SiMongodb className="text-green-500" />, level: "Advanced" },
    { name: "Redis", category: "databases", icon: <SiRedis className="text-red-500" />, level: "Advanced" },
    { name: "Drizzle ORM", category: "databases", icon: <TbDatabase className="text-lime-500" />, level: "Advanced" },

    // Tools & DevOps
    { name: "Git / GitHub", category: "tools", icon: <SiGithub className="text-slate-800 dark:text-slate-200" />, level: "Advanced" },
    { name: "CI/CD Pipeline", category: "tools", icon: <SiGithubactions className="text-indigo-400" />, level: "Intermediate" },
    { name: "Docker", category: "tools", icon: <SiDocker className="text-blue-400" />, level: "Intermediate" },
    { name: "Apache Bench", category: "tools", icon: <FiActivity className="text-rose-500" />, level: "Intermediate" },
    { name: "Socket.io", category: "tools", icon: <SiSocketdotio className="text-slate-800 dark:text-slate-100" />, level: "Advanced" },
  ];

  const filteredSkills = activeTab === 'all'
    ? skillsList
    : skillsList.filter(skill => skill.category === activeTab);

  return (
    <section id="skills" className="w-full py-4 select-none">
      
      {/* Title */}
      <div className="flex flex-col gap-3 mb-8 text-center md:text-left">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white flex items-center justify-center md:justify-start gap-3">
          <FiCpu className="text-indigo-600 dark:text-teal-400" />
          <span>My Technical Stack</span>
        </h2>
        <div className="h-1 w-20 bg-indigo-600 dark:bg-teal-400 rounded-full mx-auto md:mx-0"></div>
        <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg max-w-xl mt-2">
          A collection of technologies, tools, and runtimes I utilize to bring scalable platforms to life.
        </p>
      </div>

      {/* Tabs */}
      <div className="flex flex-wrap items-center justify-center md:justify-start gap-2 mb-10 pb-2 border-b border-slate-200/50 dark:border-slate-800/50">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveTab(cat.id)}
            className={`px-4 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 ${
              activeTab === cat.id
                ? "bg-indigo-600 dark:bg-teal-500 text-white shadow-md shadow-indigo-600/20 dark:shadow-teal-500/20"
                : "text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-teal-400 hover:bg-slate-100 dark:hover:bg-slate-900/50"
            }`}
          >
            {cat.name}
          </button>
        ))}
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
        {filteredSkills.map((skill, index) => (
          <SkillCard
            key={index}
            name={skill.name}
            icon={skill.icon}
            level={skill.level}
          />
        ))}
      </div>
      
    </section>
  );
};

export default Skill;