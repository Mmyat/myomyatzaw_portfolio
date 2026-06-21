import profilePhoto from "../assets/my_profile.png";
import { useContext } from "react";
import { ThemeContext } from '../App';
import Typewriter from "typewriter-effect";
import { Link } from "react-scroll";
import { FiSend, FiDownload, FiMapPin } from 'react-icons/fi';

const Home = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <section id="home" className="w-full min-h-[85vh] flex items-center pt-8 md:pt-16 pb-12">
      <div className="flex flex-col md:flex-row items-center justify-between w-full gap-12 md:gap-8">
        
        {/* Left Side: Text and Intro */}
        <div className="flex-1 text-center md:text-left order-2 md:order-1 select-none">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-500/10 dark:bg-teal-500/10 text-indigo-600 dark:text-teal-400 font-semibold text-sm mb-6 border border-indigo-500/20 dark:border-teal-500/30">
            <FiMapPin className="animate-bounce" />
            <span>Yangon, Myanmar</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-4 text-slate-900 dark:text-white leading-none">
            Hi, I'm <span className="gradient-text block tracking-wider">Myo Myat Zaw</span>
          </h1>

          <h2 className="text-xl sm:text-2xl font-bold text-slate-700 dark:text-slate-300 min-h-[40px] mb-6">
            <Typewriter
              options={{
                strings: [
                  "Full-Stack Software Developer 🌐",
                  "Microservices & API Developer ⚡",
                  "Go & TypeScript Enthusiast 🚀",
                  "Backend & System Optimizer ⚙️",
                ],
                delay: 70,
                pauseFor: 1800,
                autoStart: true,
                loop: true,
              }}
            />
          </h2>

          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 mb-8 max-w-xl leading-relaxed">
            Passionate and highly adaptable developer with proven experience building scalable web and desktop applications, designing robust backend microservices, and developing backend solutions.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
            <Link to="contact" smooth={true} spy={true} offset={-80}>
              <button className="w-full sm:w-auto flex items-center justify-center gap-2 px-7 py-3.5 bg-gradient-to-r from-indigo-600 to-indigo-500 hover:from-indigo-500 hover:to-teal-500 text-white font-semibold rounded-2xl shadow-lg shadow-indigo-500/20 dark:shadow-indigo-500/5 hover:shadow-teal-500/20 hover:scale-[1.03] active:scale-[0.98] transition-all duration-300">
                <FiSend />
                <span>Contact Me</span>
              </button>
            </Link>
            
            <a href="/Myo Myat Zaw.pdf" target="_blank" rel="noreferrer" className="w-full sm:w-auto">
              <button className="w-full sm:w-auto flex items-center justify-center gap-2 px-7 py-3.5 bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-800 hover:border-indigo-500 dark:hover:border-teal-400 font-semibold rounded-2xl hover:scale-[1.03] active:scale-[0.98] transition-all duration-300">
                <FiDownload />
                <span>Download CV</span>
              </button>
            </a>
          </div>
        </div>

        {/* Right Side: Profile Photo */}
        <div className="flex-1 flex justify-center order-1 md:order-2">
          <div className="relative group w-64 h-64 sm:w-80 sm:h-80 flex items-center justify-center">
            {/* Spinning/Pulsing Outer Rings */}
            <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500 via-purple-500 to-teal-400 rounded-3xl opacity-75 blur-xl group-hover:opacity-100 group-hover:scale-105 transition-all duration-500 animate-pulse-glow"></div>
            
            <div className="absolute inset-2 bg-gradient-to-bl from-teal-400 to-indigo-500 rounded-3xl opacity-30 animate-spin [animation-duration:15s] group-hover:opacity-60 transition-opacity duration-300"></div>

            {/* Profile Frame */}
            <div className="relative w-[calc(100%-12px)] h-[calc(100%-12px)] bg-white dark:bg-slate-900 rounded-3xl overflow-hidden border border-slate-200 dark:border-white/10 p-1.5 flex items-center justify-center">
              <img 
                src={profilePhoto} 
                className="w-full h-full object-cover rounded-2xl filter transition-all duration-500 group-hover:scale-102" 
                alt="Myo Myat Zaw Profile" 
              />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Home;