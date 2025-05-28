import { FaGithub } from 'react-icons/fa';
import { TbArrowUpRight } from 'react-icons/tb';
import { ThemeContext } from '../App'
import {useContext} from "react";
const ProjectCard = ({ title, description, image, demoLink, codeLink }) => {
    const {theme} = useContext(ThemeContext);
    return (
    <div className="relative flex flex-col shadow-md w-full md:w-[343px] bg-[#8892af1a] p-4 rounded group transition duration-300">
        {/* Project image */}
        <a href={demoLink} target="_blank" rel="noreferrer" className="mb-4 block overflow-hidden rounded">
        <img
            src={image}
            alt={title}
            className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
        />
        </a>

        {/* Title */}
        <h3 className={`font-bold ${theme == "light" ? "text-gray-900" : "text-[#ccd6f6]"} text-lg`}>
            {title}
        </h3>

        {/* Description */}
        <p className={`${theme == "light" ? "text-gray-900" : "text-[#ccd6f6]"} mt-1`}>
        {description}
        </p>

        {/* Buttons */}
        <div className="absolute bottom-32 right-8 bg-gray-300 p-2 rounded-md flex gap-4 opacity-0 translate-x-20 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500">          
            <a href={codeLink} target="_blank" rel="noreferrer" className="text-gray-500 text-xl hover:text-[#2cb67d]">
                <FaGithub />
            </a>
            <a href={demoLink} target="_blank" rel="noreferrer" className="text-gray-500 text-xl hover:text-[#2cb67d]">
                <TbArrowUpRight />
            </a>
        </div>
    </div>
    );
};

export default ProjectCard;