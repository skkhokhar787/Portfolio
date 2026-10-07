import { motion } from "framer-motion";
import { User, Zap, Target } from "lucide-react";
import portfolioData from "../data/portfolio.json";
import SkillCard from "../components/SkillCard";
import SectionTitle from "../components/SectionTitle";

const sectionVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function About() {
  const { about, skills } = portfolioData;

  return (
    <section id="about" className="py-24 px-4 sm:px-6 border-t border-white/5">
      <div className="max-w-6xl mx-auto">

        {/* ── Who I Am ───────────────────────────────────── */}
        <div className="mb-20">
          <SectionTitle
            title="About Me"
            subtitle="A little about who I am and what I do."
            align="left"
          />

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
            {/* Text block */}
            <motion.div
              variants={sectionVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="lg:col-span-3 space-y-4"
            >
              <p className="text-slate-300 leading-relaxed">{about.intro}</p>
              {about.paragraphs.map((para, i) => (
                <p key={i} className="text-slate-400 leading-relaxed text-sm sm:text-base">
                  {para}
                </p>
              ))}
            </motion.div>

            {/* Highlights */}
            <motion.div
              variants={sectionVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              className="lg:col-span-2 space-y-4"
            >
              <div className="bg-[#111118] border border-white/8 rounded-xl p-5 flex gap-4">
                <div className="w-9 h-9 rounded-lg bg-indigo-600/15 border border-indigo-500/20 flex items-center justify-center shrink-0">
                  <User size={16} className="text-indigo-400" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white mb-1">Who I Am</h4>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Frontend developer and BSIT student passionate about building real-world web apps.
                  </p>
                </div>
              </div>

              <div className="bg-[#111118] border border-white/8 rounded-xl p-5 flex gap-4">
                <div className="w-9 h-9 rounded-lg bg-violet-600/15 border border-violet-500/20 flex items-center justify-center shrink-0">
                  <Zap size={16} className="text-violet-400" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white mb-1">What I Build</h4>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Modern React applications — from AI chatbots to movie discovery and note-taking tools.
                  </p>
                </div>
              </div>

              <div className="bg-[#111118] border border-white/8 rounded-xl p-5 flex gap-4">
                <div className="w-9 h-9 rounded-lg bg-cyan-600/15 border border-cyan-500/20 flex items-center justify-center shrink-0">
                  <Target size={16} className="text-cyan-400" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white mb-1">Current Focus</h4>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {about.currentFocus}
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* ── Skills ─────────────────────────────────────── */}
        <div>
          <SectionTitle
            title="Skills & Technologies"
            subtitle="Technologies I've learned and worked with across real-world projects."
            align="left"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {skills.map((skill) => (
              <SkillCard key={skill.category} skill={skill} />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
