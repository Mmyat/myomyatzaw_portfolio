import { FiGithub, FiExternalLink } from 'react-icons/fi';

const ProjectCard = ({ title, description, image, demoLink, codeLink, tags = [] }) => {
  return (
    <div className="glass-panel rounded-2xl overflow-hidden flex flex-col h-full border border-slate-200/50 dark:border-slate-800/50 hover:-translate-y-1.5 transition-all duration-300 hover:border-indigo-500/30 dark:hover:border-teal-400/30 group hover:shadow-lg">
      
      {/* Project Image */}
      <a 
        href={demoLink} 
        target="_blank" 
        rel="noreferrer" 
        aria-label={`View live demo of ${title}`}
        className="block aspect-video w-full overflow-hidden border-b border-slate-200/30 dark:border-slate-800/30 relative"
      >
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {/* Subtle Overlay Glow */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </a>

      {/* Card Content */}
      <div className="p-5 flex-grow flex flex-col">
        
        {/* Title */}
        <h3 className="font-bold text-lg sm:text-xl text-slate-800 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-teal-400 transition-colors duration-200">
          {title}
        </h3>

        {/* Description */}
        <p className="text-sm text-slate-600 dark:text-slate-400 mt-2 line-clamp-3 leading-relaxed flex-grow">
          {description}
        </p>

        {/* Tags */}
        {tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mt-4">
            {tags.map((tag, idx) => (
              <span 
                key={idx}
                className="text-[10px] sm:text-xs font-semibold px-2.5 py-0.5 rounded-full bg-slate-100 dark:bg-slate-900 border border-slate-200/40 dark:border-slate-800/40 text-slate-500 dark:text-slate-400 select-none"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* Footer Actions */}
        <div className="flex items-center justify-between border-t border-slate-200/40 dark:border-slate-800/40 pt-4 mt-5 text-sm font-semibold">
          <a 
            href={codeLink} 
            target="_blank" 
            rel="noreferrer" 
            className="inline-flex items-center gap-1.5 text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-teal-400 transition-colors"
          >
            <FiGithub className="text-base" />
            <span>Code</span>
          </a>
          <a 
            href={demoLink} 
            target="_blank" 
            rel="noreferrer" 
            className="inline-flex items-center gap-1 text-indigo-600 dark:text-teal-400 hover:underline"
          >
            <span>Live Demo</span>
            <FiExternalLink />
          </a>
        </div>

      </div>
    </div>
  );
};

export default ProjectCard;