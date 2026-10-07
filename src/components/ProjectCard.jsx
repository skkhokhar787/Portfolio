import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { GithubIcon } from "./SocialIcons";

export default function ProjectCard({ project }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      whileHover={{ y: -4 }}
      className="group relative flex flex-col bg-[#111118] border border-white/8 rounded-xl p-6 hover:border-indigo-500/30 transition-colors duration-300"
    >
      {/* Subtle top gradient line on hover */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-500/0 to-transparent group-hover:via-indigo-500/40 transition-all duration-500 rounded-t-xl" />

      {/* Project Name */}
      <h3 className="text-base font-semibold text-white mb-2 group-hover:text-indigo-300 transition-colors">
        {project.name}
      </h3>

      {/* Description */}
      <p className="text-sm text-slate-400 leading-relaxed flex-1 mb-4">
        {project.description}
      </p>

      {/* Technology Badges */}
      <div className="flex flex-wrap gap-2 mb-5">
        {project.technologies.map((tech) => (
          <span
            key={tech}
            className="text-xs px-2.5 py-1 rounded-full bg-indigo-600/10 text-indigo-300 border border-indigo-500/20 font-medium"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Actions */}
      <div className="flex items-center gap-3 pt-2">
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs font-medium px-3.5 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white transition-colors"
          >
            <ExternalLink size={13} />
            Live Demo
          </a>
        )}

        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs font-medium px-3.5 py-2 rounded-lg border border-white/10 hover:border-white/20 bg-white/5 hover:bg-white/10 text-slate-200 hover:text-white transition-colors"
          >
            <GithubIcon size={14} />
            GitHub
          </a>
        )}
      </div>
    </motion.div>
  );
}
