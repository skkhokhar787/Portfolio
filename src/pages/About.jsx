import { motion } from "framer-motion";
import {
  GraduationCap,
  Code2,
  Compass,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import portfolioData from "../data/portfolio.json";
import SectionTitle from "../components/SectionTitle";

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: i * 0.1,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

export default function About() {
  const { about } = portfolioData;

  const highlightCards = [
    {
      icon: GraduationCap,
      title: "BSIT Student & Developer",
      description:
        "Building strong foundations in computer science, software design, and modern frontend technologies.",
      color: "from-indigo-500 to-sky-500",
      accentBg: "bg-indigo-50 text-indigo-700 border-indigo-200/80",
    },
    {
      icon: Code2,
      title: "10+ Real-World React Apps",
      description:
        "Practical experience crafting AI assistants, movie discovery platforms, weather tools, and interactive dashboards.",
      color: "from-sky-500 to-teal-500",
      accentBg: "bg-sky-50 text-sky-700 border-sky-200/80",
    },
    {
      icon: Compass,
      title: "Current Focus & Growth",
      description:
        about.currentFocus ||
        "Continuously sharpening React skills, state management, and modern responsive UI architectures.",
      color: "from-teal-500 to-emerald-500",
      accentBg: "bg-teal-50 text-teal-700 border-teal-200/80",
    },
  ];

  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background soft ambient orbs */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-gradient-to-b from-sky-100/40 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-gradient-to-tr from-indigo-100/30 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto">
        <SectionTitle
          tag="About Me"
          title={
            <span>
              Turning Ideas Into{" "}
              <span className="text-gradient-primary">Real Web Experiences</span>
            </span>
          }
          subtitle="A passionate frontend developer committed to clean code, responsive layouts, and intuitive user experiences."
          align="left"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/* ── Left Column: Story & Narrative ── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7 space-y-5"
          >
            {/* Intro Lead Paragraph */}
            <div className="p-6 rounded-2xl bg-white/80 backdrop-blur-md border border-slate-200/80 shadow-sm shadow-slate-200/50">
              <p className="text-base sm:text-lg font-medium text-slate-800 leading-relaxed">
                {about.intro}
              </p>
            </div>

            {/* Narrative Paragraphs */}
            <div className="space-y-4 px-2">
              {about.paragraphs.map((para, i) => (
                <p
                  key={i}
                  className="text-slate-600 text-sm sm:text-base leading-relaxed"
                >
                  {para}
                </p>
              ))}
            </div>

            {/* Core Values checklist */}
            <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                "Clean Component Architecture",
                "Responsive Mobile-First UI",
                "Fast & Accessible Interfaces",
                "Continuous Skill Growth",
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-50/80 border border-slate-200/70"
                >
                  <CheckCircle2 size={16} className="text-teal-600 shrink-0" />
                  <span className="text-xs font-semibold text-slate-700">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* ── Right Column: Asymmetric Highlights & Geometric 3D Accent ── */}
          <div className="lg:col-span-5 space-y-4">
            {highlightCards.map((card, i) => {
              const Icon = card.icon;
              return (
                <motion.div
                  key={card.title}
                  custom={i}
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  whileHover={{ y: -3 }}
                  className="p-5 rounded-2xl bg-white/85 backdrop-blur-md border border-slate-200/80 shadow-sm shadow-slate-200/40 hover:border-indigo-200 transition-all duration-300 group"
                >
                  <div className="flex items-start gap-4">
                    <div
                      className={`w-11 h-11 rounded-xl border flex items-center justify-center shrink-0 shadow-2xs ${card.accentBg}`}
                    >
                      <Icon size={20} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-sm sm:text-base font-bold text-slate-800 mb-1 group-hover:text-indigo-600 transition-colors">
                        {card.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-slate-500 leading-relaxed font-normal">
                        {card.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}

            {/* Interactive Decorative Badge Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="p-6 rounded-2xl bg-gradient-to-br from-indigo-600 via-indigo-700 to-sky-600 text-white shadow-xl shadow-indigo-600/15 relative overflow-hidden"
            >
              <div className="absolute -right-6 -bottom-6 w-32 h-32 rounded-full bg-white/10 blur-xl pointer-events-none" />
              <div className="relative z-10">
                <span className="font-handwriting text-2xl text-amber-200 font-bold block mb-1">
                  Ready to collaborate!
                </span>
                <p className="text-xs sm:text-sm text-indigo-100 leading-relaxed">
                  Looking for opportunities to build impactful web products and contribute to collaborative teams.
                </p>
                <div className="mt-4 flex items-center gap-3">
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-white text-indigo-700 text-xs font-bold shadow-xs hover:bg-indigo-50 transition-colors"
                  >
                    <span>Get in touch</span>
                    <ArrowRight size={13} />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
