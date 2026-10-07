import { useState } from "react";
import { motion } from "framer-motion";
import portfolioData from "../data/portfolio.json";
import ProjectCard from "../components/ProjectCard";
import SectionTitle from "../components/SectionTitle";

const FILTERS = ["All", "React", "Firebase", "API", "AI"];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");
  const { projects } = portfolioData;

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.category.includes(activeFilter));

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 border-t border-white/5">
      <div className="max-w-6xl mx-auto">
        <SectionTitle
          title="Projects"
          subtitle="10 real-world projects built while learning and growing as a developer."
        />

        {/* Filter Bar */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {FILTERS.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium border transition-colors duration-200 cursor-pointer ${
                activeFilter === filter
                  ? "bg-indigo-600 border-indigo-600 text-white"
                  : "border-white/10 text-slate-400 hover:border-white/20 hover:text-white bg-transparent"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Projects Count */}
        <p className="text-center text-xs text-slate-500 mb-8">
          Showing {filteredProjects.length} of {projects.length} projects
        </p>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </motion.div>

        {filteredProjects.length === 0 && (
          <p className="text-center text-slate-500 py-16">
            No projects found for this filter.
          </p>
        )}
      </div>
    </section>
  );
}
