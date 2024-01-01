import me from "../assets/me.png";
import {useContext } from "react";
import { ThemeContext } from '../App'
import Typewriter from "typewriter-effect";
import { Link } from "react-scroll";
const Home = () => {
  const {theme} = useContext(ThemeContext)
  return (
    <div
      className="w-full md:px-10 px-7 mt-12 py-4 md:h-screen"
      id="home"
    >
      {/* style={{ backgroundImage: `url(${bg_img})` }} */}
      <div className="mt-12">
        <div className="flex flex-col md:flex-row items-center w-full">
          {/* image & content */}
          {/* img */}
          <div className="order-first md:order-first mr-10 relative">
            <img src={me} className="w-60 h-60" alt="" />
          </div>
          {/* text */}
          <div className={`${theme === "light" ? "text-primary" : "text-white"}`}>
            <h6 className='text-3xl mt-12'>Hello, I'm</h6>
            <h1 className="font-semibold md:text-4xl my-4 text-3xl">
              Myo Myat Zaw
            </h1>
            <p className="text-xl mt-12">
              <Typewriter
                options={{
                  strings: [
                    "I'm an enthusiast Full-Stack 🌐developer",
                    "I studied 4th yr EC 👨‍🎓 at TU(Monywa)",
                    "You can 📲 me through telegram or ✉️",
                  ],
                  delay: 150,
                  pauseFor: 1500,
                  autoStart: true,
                  loop: true,
                }}
              />
            </p>
            <div className="flex mt-10">              
              <Link to="contact" smooth={true} spy={true}>
                <button className="btn mr-2 transition-all duration-500 bg-primary py-2 px-1 md:px-4 rounded text-btntext hover:text-white shadow-primary shadow-sm">
                  Contact Me
                </button>
              </Link>
              <a href="https://drive.google.com/file/d/1AKrNUp-jB9gxuNKbJHX1EmzZMS__jKU_/view?usp=sharing" target="_blank" rel="noreferrer">
                <button className="btn transition-all duration-500 bg-primary py-2 px-1 md:px-4 rounded text-btntext hover:text-white shadow-primary shadow-sm">
                  Download CV
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
