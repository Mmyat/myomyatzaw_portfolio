import online_shop from "../assets/ecommerce_web.jpg";
import contact_note from "../assets/contact_web.jpg";
import { ThemeContext } from '../App';
import { useContext } from "react";
import ProjectCard from "../components/ProjectCard";

const Projects = () => {
  const { theme } = useContext(ThemeContext);

  const projects = [
    {
      title: "ONLINE SHOP",
      description: "Online shop website to buy clothes, jewelry, and electronic accessories.",
      image: online_shop,
      demoLink: "https://mmyat-online-shop.netlify.app/",
      codeLink: "https://github.com/Mmyat/ecommerce_app",
    },
    {
      title: "CONTACTLIST NOTE",
      description: "Contact note website to note our friends and family.",
      image: contact_note,
      demoLink: "https://mmyat-contactlist-note.netlify.app/",
      codeLink: "https://github.com/Mmyat/LocalContact-Web",
    },
  ];

  return (
    <div className="flex flex-col md:px-10 px-7 py-2" id="projects">
      <h1 className="text-[#2cb67d] font-semibold text-3xl mt-12">
        Created Projects:
      </h1>
      <p className={`${theme === "light" ? "text-gray-900" : "text-white"} my-3 md:w-3/4 leading-[2]`}>
        I have created many projects over the course of being a Web Developer
      </p>

      <div className="flex flex-wrap justify-center md:justify-start gap-6 mt-5">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            image={project.image}
            demoLink={project.demoLink}
            codeLink={project.codeLink}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;