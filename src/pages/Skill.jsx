import { Player } from '@lottiefiles/react-lottie-player';
import animationData from '../assets/Animation.json';
import tailWind from '../assets/tailwind.svg';
import SkillCard from '../components/SkillCard';

const Skill = () => {
  const webSkills = [
    { name: "HTML", imageSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",rating: 3 },
    { name: "CSS", imageSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",rating: 3 },
    { name: "JavaScript", imageSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",rating: 4 },
    { name: "Node.js", imageSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",rating: 4 },
    { name: "Express.js", imageSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",rating: 4 },
    { name: "MongoDB", imageSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",rating: 4 },
    { name: "MySQL", imageSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",rating: 4 },
    { name: "Git", imageSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",rating: 3 },
    { name: "GitHub", imageSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",rating: 3 },
    { name: "TypeScript", imageSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",rating: 3 },
    { name: "React", imageSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "Tailwind CSS", imageSrc: tailWind,rating: 4 },
    { name: "Bootstrap", imageSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",rating: 3 },
  ];
  return (
    <div id='skills' className="flex flex-col md:px-10 px-7 py-2">
      <div className="flex flex-col md:justify-between items-start mt-12">
        <h1 className="text-[#2cb67d] font-semibold text-3xl">Skills</h1>
        <Player
          autoplay
          loop
          src={animationData}
          style={{ height: '400px', width: '400px' }}
        />
      </div>
      <p className="text-gray-500 dark:text-gray-400 my-3 md:w-3/4 leading-[2]">
        Here are some of the skills I have acquired as a Web Developer.
      </p>
      <div className="flex flex-wrap justify-center md:justify-start gap-6 mt-5">
        {webSkills.map((skill, index) => (
          <SkillCard
            key={index}
            name={skill.name}
            imageSrc={skill.imageSrc}
            rating={skill.rating} 
            maxRating={5}
          />
        ))}
      </div>
    </div>
  )
}

export default Skill;