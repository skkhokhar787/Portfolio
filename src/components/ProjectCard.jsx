import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Film,
  Bot,
  Globe2,
  Tv,
  Sword,
  Layers,
  Coins,
  Clapperboard,
  CloudSun,
  StickyNote,
  Code2,
} from "lucide-react";
import { GithubIcon } from "./SocialIcons";

// Custom thematic gradient and icon matching for each real project
const projectMetaMap = {
  1: {
    // FilmPad
    icon: Film,
    accentGradient: "from-sky-500 via-indigo-500 to-purple-500",
    headerBg: "bg-gradient-to-br from-indigo-50 via-sky-50 to-blue-50",
    badgeColor: "bg-indigo-50 text-indigo-700 border-indigo-200/70",
    pattern: "movies",
  },
  2: {
    // Nexora AI
    icon: Bot,
    accentGradient: "from-purple-500 via-violet-600 to-indigo-600",
    headerBg: "bg-gradient-to-br from-purple-50 via-violet-50 to-indigo-50",
    badgeColor: "bg-purple-50 text-purple-700 border-purple-200/70",
    pattern: "ai",
  },
  3: {
    // GeoSphare
    icon: Globe2,
    accentGradient: "from-teal-500 via-emerald-500 to-cyan-500",
    headerBg: "bg-gradient-to-br from-teal-50 via-emerald-50 to-cyan-50",
    badgeColor: "bg-teal-50 text-teal-700 border-teal-200/70",
    pattern: "globe",
  },
  4: {
    // Vidify
    icon: Tv,
    accentGradient: "from-rose-500 via-pink-500 to-purple-500",
    headerBg: "bg-gradient-to-br from-rose-50 via-pink-50 to-purple-50",
    badgeColor: "bg-rose-50 text-rose-700 border-rose-200/70",
    pattern: "video",
  },
  5: {
    // Dragon Z Verse
    icon: Sword,
    accentGradient: "from-amber-500 via-orange-500 to-red-500",
    headerBg: "bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50",
    badgeColor: "bg-amber-50 text-amber-700 border-amber-200/70",
    pattern: "dragon",
  },
  6: {
    // MDST
    icon: Layers,
    accentGradient: "from-indigo-600 via-blue-600 to-teal-500",
    headerBg: "bg-gradient-to-br from-indigo-50 via-blue-50 to-slate-50",
    badgeColor: "bg-blue-50 text-blue-700 border-blue-200/70",
    pattern: "code",
  },
  7: {
    // Currency Converter
    icon: Coins,
    accentGradient: "from-emerald-500 via-teal-500 to-cyan-600",
    headerBg: "bg-gradient-to-br from-emerald-50 via-teal-50 to-green-50",
    badgeColor: "bg-emerald-50 text-emerald-700 border-emerald-200/70",
    pattern: "currency",
  },
  8: {
    // Cine Premium YTS
    icon: Clapperboard,
    accentGradient: "from-indigo-700 via-purple-600 to-pink-600",
    headerBg: "bg-gradient-to-br from-purple-50 via-indigo-50 to-slate-50",
    badgeColor: "bg-indigo-50 text-indigo-700 border-indigo-200/70",
    pattern: "cinema",
  },
  9: {
    // Weather App
    icon: CloudSun,
    accentGradient: "from-sky-400 via-blue-500 to-indigo-500",
    headerBg: "bg-gradient-to-br from-sky-50 via-blue-50 to-cyan-50",
    badgeColor: "bg-sky-50 text-sky-700 border-sky-200/70",
    pattern: "weather",
  },
  10: {
    // Keep Notes
    icon: StickyNote,
    accentGradient: "from-amber-500 via-yellow-500 to-orange-500",
    headerBg: "bg-gradient-to-br from-yellow-50 via-amber-50 to-orange-50",
    badgeColor: "bg-amber-50 text-amber-700 border-amber-200/70",
    pattern: "notes",
  },
};

export default function ProjectCard({ project, index = 0 }) {
  const meta = projectMetaMap[project.id] || {
    icon: Code2,
    accentGradient: "from-indigo-500 to-sky-500",
    headerBg: "bg-gradient-to-br from-indigo-50 to-sky-50",
    badgeColor: "bg-indigo-50 text-indigo-700 border-indigo-200/70",
  };

  const IconComponent = meta.icon;

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 24, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.45,
        delay: (index % 6) * 0.08,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{ y: -5 }}
      className="group relative flex flex-col rounded-2xl bg-white/90 backdrop-blur-md border border-slate-200/80 shadow-sm shadow-slate-200/50 hover:shadow-xl hover:shadow-indigo-500/10 hover:border-indigo-300/80 transition-all duration-300 overflow-hidden"
    >
      {/* ── Visual CSS-Based Project Showcase Banner ── */}
      <div
        className={`relative h-44 w-full ${meta.headerBg} p-5 flex flex-col justify-between overflow-hidden border-b border-slate-100 select-none`}
      >
        {/* Subtle geometric dot pattern */}
        <div className="absolute inset-0 bg-dot-pattern opacity-40 pointer-events-none" />

        {/* Ambient color bloom */}
        <div
          className={`absolute -right-10 -bottom-10 w-36 h-36 rounded-full bg-gradient-to-tr ${meta.accentGradient} opacity-20 blur-2xl group-hover:scale-125 transition-transform duration-500`}
        />

        {/* Top bar inside mockup preview */}
        <div className="relative z-10 flex items-center justify-between">
          <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/80 backdrop-blur-md border border-slate-200/70 shadow-2xs">
            <span className="w-2 h-2 rounded-full bg-rose-400" />
            <span className="w-2 h-2 rounded-full bg-amber-400" />
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            <span className="text-[10px] font-mono text-slate-500 font-medium pl-1">
              app.dev
            </span>
          </div>

          <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-white/90 border border-slate-200/70 text-slate-600 shadow-2xs">
            #{String(project.id).padStart(2, "0")}
          </span>
        </div>

        {/* Center Project Brand / Icon Graphic */}
        <div className="relative z-10 flex items-center gap-3">
          <div
            className={`w-12 h-12 rounded-xl bg-gradient-to-tr ${meta.accentGradient} text-white flex items-center justify-center shadow-md shadow-indigo-900/10 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300`}
          >
            <IconComponent size={24} />
          </div>
          <div>
            <span className="text-xs font-semibold text-slate-500 block uppercase tracking-wider">
              Web Application
            </span>
            <span className="text-base font-extrabold text-slate-900 leading-tight block group-hover:text-indigo-600 transition-colors">
              {project.name}
            </span>
          </div>
        </div>

        {/* Bottom subtle code/interactive bar */}
        <div className="relative z-10 flex items-center justify-between text-[10px] font-mono text-slate-400 border-t border-slate-200/40 pt-2">
          <span>React • Production Ready</span>
          <span className="flex items-center gap-1 text-emerald-600 font-semibold">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            Live
          </span>
        </div>
      </div>

      {/* ── Card Body ── */}
      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          {/* Project Title */}
          <div className="flex items-start justify-between gap-2 mb-2">
            <h3 className="text-base font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">
              {project.name}
            </h3>
          </div>

          {/* Project Description */}
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4 line-clamp-3">
            {project.description}
          </p>
        </div>

        <div>
          {/* Technology Badges */}
          <div className="flex flex-wrap gap-1.5 mb-5">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-50 text-slate-700 border border-slate-200/80 font-semibold shadow-2xs hover:bg-slate-100 transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Action Links */}
          <div className="flex items-center gap-2.5 pt-3 border-t border-slate-100">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-1.5 text-xs font-bold px-3.5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white shadow-xs shadow-indigo-600/20 hover:shadow-md hover:shadow-indigo-600/30 transition-all cursor-pointer group/btn"
                aria-label={`Live Demo of ${project.name}`}
              >
                <span>Live Demo</span>
                <ArrowUpRight
                  size={14}
                  className="transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5"
                />
              </a>
            )}

            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-1.5 text-xs font-semibold px-3 py-2.5 rounded-xl bg-white hover:bg-slate-50 border border-slate-200/80 hover:border-slate-300 text-slate-700 hover:text-slate-900 shadow-2xs transition-colors cursor-pointer"
                aria-label={`GitHub Repository for ${project.name}`}
              >
                <GithubIcon size={14} />
                <span>Code</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
