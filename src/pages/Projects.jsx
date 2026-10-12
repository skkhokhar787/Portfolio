import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gradient-to-b from-indigo-100/30 to-sky-100/20 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto">
        <SectionTitle
          tag="Featured Work"
          title={
            <span>
              Crafted With Passion &{" "}
              <span className="text-gradient-primary">Modern Code</span>
            </span>
          }
          subtitle="Explore 10 real-world React applications featuring AI integrations, third-party APIs, responsive UIs, and state management."
          align="center"
        />

        {/* Filter Pills */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {FILTERS.map((filter) => {
            const isActive = activeFilter === filter;
            return (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`relative px-5 py-2 rounded-full text-xs font-bold transition-all duration-200 cursor-pointer ${
                  isActive
                    ? "text-white shadow-md shadow-indigo-600/20 bg-indigo-600"
                    : "text-slate-600 hover:text-slate-900 bg-white/80 hover:bg-white border border-slate-200/80 shadow-2xs"
                }`}
              >
                {filter}
                {isActive && (
                  <motion.div
                    layoutId="activeFilterPill"
                    className="absolute inset-0 bg-indigo-600 rounded-full -z-10"
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* Projects Count Summary */}
        <div className="flex items-center justify-center gap-2 mb-10 text-xs font-semibold text-slate-500">
          <span className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
          <span>
            Showing <strong className="text-slate-800">{filteredProjects.length}</strong> of{" "}
            {projects.length} curated projects
          </span>
        </div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7"
        >
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
              />
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-20 bg-white/70 rounded-2xl border border-slate-200">
            <p className="text-slate-500 font-medium text-sm">
              No projects found for the selected category.
            </p>
            <button
              onClick={() => setActiveFilter("All")}
              className="mt-4 px-4 py-2 rounded-xl bg-indigo-50 text-indigo-600 text-xs font-bold hover:bg-indigo-100 transition-colors cursor-pointer"
            >
              View all projects
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
