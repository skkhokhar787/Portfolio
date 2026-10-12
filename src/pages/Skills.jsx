import { motion } from "framer-motion";
import {
  Code,
  Sparkles,
  Layout,
  Database,
  Terminal,
  Cpu,
  Layers,
  CheckCircle2,
} from "lucide-react";
import portfolioData from "../data/portfolio.json";
import SectionTitle from "../components/SectionTitle";
import SkillCard from "../components/SkillCard";

const categoryIconMap = {
  Frontend: Layout,
  "State Management": Layers,
  "Data & APIs": Database,
  "Backend & Services": Cpu,
  Programming: Terminal,
  Tools: Code,
};

export default function Skills() {
  const { skills } = portfolioData;

  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-white/40">
      {/* Decorative gradient accents */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-indigo-100/40 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-0 right-10 w-80 h-80 bg-teal-100/35 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto">
        <SectionTitle
          tag="Expertise & Stack"
          title="Skills & Technologies"
          subtitle="A comprehensive overview of technologies and modern frontend tools I work with to build high-performance web applications."
          align="center"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => {
            const Icon = categoryIconMap[skill.category] || Sparkles;
            return (
              <SkillCard
                key={skill.category}
                skill={skill}
                index={index}
                icon={Icon}
              />
            );
          })}
        </div>

        {/* Learning & Quality statement banner */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-12 p-5 sm:p-6 rounded-2xl bg-gradient-to-r from-indigo-50/80 via-sky-50/70 to-teal-50/80 border border-indigo-100/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left"
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-white border border-indigo-200/80 flex items-center justify-center text-indigo-600 shadow-xs shrink-0">
              <CheckCircle2 size={20} />
            </div>
            <div>
              <h4 className="text-sm font-bold text-slate-800">
                Continuous Learning & Best Practices
              </h4>
              <p className="text-xs text-slate-600 mt-0.5">
                Always writing clean, semantic code with a strong focus on responsiveness, accessibility, and modern UI/UX design.
              </p>
            </div>
          </div>
          <span className="text-xs font-semibold px-3 py-1.5 rounded-lg bg-white border border-indigo-200/60 text-indigo-700 shadow-2xs whitespace-nowrap">
            10+ Built Projects
          </span>
        </motion.div>
      </div>
    </section>
  );
}
