import online_shop from "../assets/ecommerce_web.jpg";
import contact_note from "../assets/contact_web.jpg";
import movie_show from "../assets/movie_show.jpg";
import ProjectCard from "../components/ProjectCard";
import { FiFolder } from 'react-icons/fi';

const Projects = () => {
  const projects = [
    {
      title: "ONLINE SHOP",
      description: "Online shop website to buy clothes, jewelry, and electronic accessories.",
      image: online_shop,
      demoLink: "https://mmyat-online-shop.netlify.app/",
      codeLink: "https://github.com/Mmyat/ecommerce_app",
      tags: ["React", "Redux", "Tailwind CSS", "FakeStore API"]
    },
    {
      title: "CONTACTLIST NOTE",
      description: "Contact note website to note details of friends and family, stored locally.",
      image: contact_note,
      demoLink: "https://mmyat-contactlist-note.netlify.app/",
      codeLink: "https://github.com/Mmyat/LocalContact-Web",
      tags: ["React", "Local Storage", "CSS Modules", "Context API"]
    },
    {
      title: "Movie Show",
      description: "Movie show website to search movies, view descriptions, and explore trending series.",
      image: movie_show,
      demoLink: "https://movie-show-mm.vercel.app/",
      codeLink: "https://github.com/Mmyat/movie-show",
      tags: ["React", "Tailwind CSS", "TMDB API", "Framer Motion"]
    },
  ];

  return (
    <section id="projects" className="w-full py-4 select-none">
      
      {/* Title */}
      <div className="flex flex-col gap-3 mb-10 text-center md:text-left">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white flex items-center justify-center md:justify-start gap-3">
          <FiFolder className="text-indigo-600 dark:text-teal-400" />
          <span>Featured Projects</span>
        </h2>
        <div className="h-1 w-20 bg-indigo-600 dark:bg-teal-400 rounded-full mx-auto md:mx-0"></div>
        <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg max-w-xl mt-2">
          Here is a selection of projects I've built independently to hone my engineering skills.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            image={project.image}
            demoLink={project.demoLink}
            codeLink={project.codeLink}
            tags={project.tags}
          />
        ))}
      </div>
      
    </section>
  );
};

export default Projects;