const Projects = () => {
  const projects = [
    {
      title: "ONLINE SHOP",
      description:
        "A live Geolocation app for finding tweets and twitter users around you.",
      photo: "/src/assets/projects/ecommerce_web.PNG",
      link: "https://mmyat-online-shop.netlify.app/",
      source_code: "https://github.com/Mmyat/ecommerce_app",
    },
    {
      title: "CONTACTLIST NOTE",
      description:
        "A video streaming app with live Geolocation, for streaming events.",
      photo: "/src/assets/projects/contact_web.PNG",
      link: "https://mmyat-contactlist-note.netlify.app/",
      source_code: "https://github.com/Mmyat/LocalContact-Web",
    },
  ];
  return (
    <div className="md:px-10 px-7 my-8" id="projects">
      <h1 className="text-primary font-semibold text-3xl mt-28">
        Created Projects:
      </h1>
      <p className="my-3 text-white md:w-3/4 leading-[2]">
        I have created many projects over the course of being a Web Developer
      </p>
      {/* featured projects */}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-5 my-6 items-center justify-center">
        {projects.map((project, index) => {
          return (
            <div
              key={index}
              className="flex flex-col shadow-sm md:w-[343px] bg-[#31313F] p-4 rounded"
            >
              <a
                href={project.photo}
                target="_blank"
                rel="noreferrer"
                className="mb-4"
              >
                <img src={project.photo} alt={project.title} />
              </a>
              <h3 className="text-primary font-semibold text-lg">
                {project.title}
              </h3>
              <p className=" text-white mt-1">{project.description}</p>
              <div className="flex mt-5">
                <a href={project.link} target="_blank" rel="noreferrer">
                  <button className="btn transition-all duration-500 text-sm md:text-lg bg-primary py-2 px-6 rounded text-white hover:bg-white hover:text-primary">
                    Demo
                  </button>
                </a>
                <a href={project.source_code} target="_blank" rel="noreferrer">
                  <button className="btn outline text-sm md:text-lg py-1 px-6 rounded border-none ml-5 text-white ">
                    Source Code
                  </button>
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
