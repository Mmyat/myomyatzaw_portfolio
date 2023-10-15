import React from "react";
import me from "../assets/me.png";
import Typewriter from "typewriter-effect";
import { Link } from "react-scroll";
const Home = () => {
  return (
    <div
      className="md:px-10 px-7 py-4 my-12 md:h-screen bg-[#1a1a29]"
      id="home"
    >
      <div>
        <div className="flex flex-col md:flex-row items-center justify-between w-full">
          {/* image & content */}
          {/* text */}
          <div className="text-white">
            <h6 className='text-3xl mt-12'>Hello, I'm</h6>
            <h1 className="font-semibold md:text-5xl my-4 text-3xl">
              Myo Myat Zaw
            </h1>
            <p className="text-xl mt-12">
              <Typewriter
                options={{
                  strings: [
                    "I'm an enthusiast Full-Stack 🌐developer",
                    "I studied 4th yr EC 👨‍🎓 at TU(Monywa)",
                    "You can 📲 me through discord or ✉️",
                  ],
                  delay: 150,
                  pauseFor: 1500,
                  autoStart: true,
                  loop: true,
                }}
              />
            </p>
            {/* <p className="md:w-96">
              Freelance UI designer, Fullstack developer, & Data Miner. I create
              seamless web experiences for end-users.
            </p> */}
            <div className="mt-10">              
              <Link to="contact" smooth={true} spy={true}>
                <button className="btn mr-2 transition-all duration-500 bg-primary py-2 px-4 rounded text-white hover:bg-white hover:text-primary">
                  Contact Me
                </button>
              </Link>
              <a href="https://drive.google.com/drive/my-drive" target="_blank" rel="noreferrer">
                <button className="btn transition-all duration-500 bg-primary py-2 px-4 rounded text-white hover:bg-white hover:text-primary">
                  Download CV
                </button>
              </a>
            </div>
          </div>
          {/* img */}
          <div className="order-first md:order-last relative">
            <img src={me} className="w-60 h-60" alt="" />
          </div>
        </div>
      </div>
      {/* <div className='h-24 bg-[#181824] w-full mx-auto absolute left-0 hidden md:block'>
            </div> */}
    </div>
  );
};

export default Home;
