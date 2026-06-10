const SkillCard = ({ name, icon, level }) => {
  return (
    <div className="glass-panel rounded-2xl p-5 flex flex-col items-center justify-center text-center transition-all duration-300 hover:-translate-y-1.5 hover:border-indigo-500/40 dark:hover:border-teal-400/40 skill-card-glow group cursor-default border border-slate-200/50 dark:border-slate-800/50">
      
      {/* Icon Wrapper */}
      <div className="w-14 h-14 rounded-2xl bg-slate-100 dark:bg-slate-900 flex items-center justify-center mb-3.5 border border-slate-200/50 dark:border-slate-800/50 text-slate-700 dark:text-slate-300 group-hover:text-indigo-600 dark:group-hover:text-teal-400 group-hover:scale-110 group-hover:bg-white dark:group-hover:bg-slate-950 transition-all duration-300">
        <span className="text-3xl">{icon}</span>
      </div>

      {/* Name */}
      <h3 className="font-bold text-sm sm:text-base text-slate-800 dark:text-slate-200 group-hover:text-slate-950 dark:group-hover:text-white transition-colors duration-200">
        {name}
      </h3>

      {/* Skill Level Badge */}
      {level && (
        <span className="text-[10px] sm:text-xs text-slate-500 dark:text-slate-400 mt-2 px-2.5 py-0.5 rounded-full bg-slate-100 dark:bg-slate-900 border border-slate-200/40 dark:border-slate-800/40 font-semibold tracking-wide">
          {level}
        </span>
      )}
    </div>
  );
};

export default SkillCard;