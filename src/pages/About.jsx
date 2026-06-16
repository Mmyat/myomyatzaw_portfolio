import { useContext } from "react";
import { ThemeContext } from '../App';
import { FiUser, FiMail, FiPhone, FiMapPin, FiBookOpen, FiGlobe } from 'react-icons/fi';

const About = () => {
  const { theme } = useContext(ThemeContext);

  const personalInfo = [
    { icon: <FiMail className="text-indigo-500" />, label: "Email", value: "mmyathaha@gmail.com", href: "mailto:mmyathaha@gmail.com" },
    { icon: <FiPhone className="text-indigo-500" />, label: "Phone", value: "09979075753, 09770694443", href: "tel:09979075753" },
    { icon: <FiMapPin className="text-indigo-500" />, label: "Location", value: "Yangon, Myanmar" },
  ];

  return (
    <section id="about" className="w-full py-4 select-none">
      <div className="flex flex-col gap-3 mb-10 text-center md:text-left">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white flex items-center justify-center md:justify-start gap-3">
          <FiUser className="text-indigo-600 dark:text-teal-400" />
          <span>About Me</span>
        </h2>
        <div className="h-1 w-20 bg-indigo-600 dark:bg-teal-400 rounded-full mx-auto md:mx-0"></div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        {/* Left Side: Biography paragraphs */}
        <div className="lg:col-span-7 space-y-6 text-slate-700 dark:text-slate-300 text-base sm:text-lg leading-relaxed">
          <p className="font-medium text-slate-900 dark:text-white">
            I am a passionate and highly adaptable Full-Stack Software Developer with proven experience building scalable web and desktop applications, designing robust backend microservices, and implementing automated testing frameworks.
          </p>
          <p>
            Proficient across a modern JavaScript/TypeScript ecosystem with growing technical expertise in high-performance languages like Go. I'm a dedicated self-starter adept at database optimization, secure input handling, and rapid feature delivery within fast-paced development environments.
          </p>
          <p>
            From engineering specialized Donation Management Modules featuring strict multi-currency conversion logic to architecting real-time chat applications using Socket.io, I enjoy bridging user-centric frontends with stable, high-performance backends.
          </p>
        </div>

        {/* Right Side: Quick facts and Education */}
        <div className="lg:col-span-5 space-y-6">
          {/* Quick Info Card */}
          <div className="glass-panel rounded-2xl p-6 hover:shadow-md transition-shadow duration-300">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
              <FiGlobe className="text-teal-500" />
              <span>Personal Info</span>
            </h3>
            <div className="space-y-4">
              {personalInfo.map((info, i) => (
                <div key={i} className="flex items-center gap-4 text-sm sm:text-base">
                  <div className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200/50 dark:border-slate-800/50">
                    {info.icon}
                  </div>
                  <div>
                    <span className="block text-xs text-slate-500 dark:text-slate-400">{info.label}</span>
                    {info.href ? (
                      <a href={info.href} className="font-semibold text-slate-800 dark:text-slate-200 hover:text-indigo-600 dark:hover:text-teal-400 transition-colors">
                        {info.value}
                      </a>
                    ) : (
                      <span className="font-semibold text-slate-800 dark:text-slate-200">{info.value}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education Card */}
          <div className="glass-panel rounded-2xl p-6 hover:shadow-md transition-shadow duration-300">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
              <FiBookOpen className="text-indigo-500" />
              <span>Education & Languages</span>
            </h3>
            <div className="space-y-4 border-b border-slate-200/50 dark:border-slate-800/50 pb-4 mb-4">
              <div>
                <span className="block text-xs text-slate-500 dark:text-slate-400">2017 – 2020</span>
                <span className="font-semibold block text-slate-800 dark:text-slate-200">B.E. in Electronic Engineering</span>
                <span className="text-sm text-slate-600 dark:text-slate-400 block">Technological University (Monywa)</span>
                <span className="inline-block mt-1 text-xs px-2.5 py-0.5 rounded-full bg-slate-200 dark:bg-slate-800 font-medium text-slate-600 dark:text-slate-400">4th Year Completed</span>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div>
                <span className="block text-xs text-slate-500 dark:text-slate-400">Burmese</span>
                <span className="font-semibold text-slate-800 dark:text-slate-200">Native Speaker</span>
              </div>
              <div>
                <span className="block text-xs text-slate-500 dark:text-slate-400">English</span>
                <span className="font-semibold text-slate-800 dark:text-slate-200">Conversational</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
