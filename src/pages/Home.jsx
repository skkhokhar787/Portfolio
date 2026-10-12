import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Send, ChevronDown } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "../components/SocialIcons";
import HeroWorkspace from "../components/HeroWorkspace";
import portfolioData from "../data/portfolio.json";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

function scrollToSection(id) {
  const el = document.getElementById(id);
  if (!el) return;
  const offset = 80;
  const top = el.getBoundingClientRect().top + window.scrollY - offset;
  window.scrollTo({ top, behavior: "smooth" });
}

export default function Home() {
  const { personal, social } = portfolioData;

  return (
    <section
      id="home"
      className="relative min-h-[92vh] flex flex-col justify-center px-4 sm:px-6 lg:px-8 pt-28 pb-16 overflow-hidden"
    >
      {/* ── Background Subtle Glow & Dots ── */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-gradient-to-tr from-indigo-200/30 via-sky-100/40 to-transparent rounded-full blur-3xl" />
        <div className="absolute top-1/3 right-10 w-[450px] h-[450px] bg-gradient-to-br from-teal-100/30 via-cyan-100/25 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-1/3 w-[400px] h-[400px] bg-gradient-to-tr from-violet-100/30 to-transparent rounded-full blur-3xl" />
        <div className="absolute inset-0 bg-dot-pattern opacity-60" />
      </div>

      <div className="max-w-6xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* ── Left Column: Content ── */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 flex flex-col items-start text-left"
          >
            {/* Availability Badge */}
            <motion.div variants={itemVariants} className="mb-5">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-emerald-200 bg-emerald-50/80 text-emerald-800 text-xs font-semibold shadow-xs">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                </span>
                Available for opportunities
              </span>
            </motion.div>

            {/* Greeting */}
            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg font-semibold text-indigo-600 tracking-wide uppercase flex items-center gap-2 mb-1"
            >
              <span>Hi, I'm</span>
              <Sparkles size={16} className="text-amber-400" />
            </motion.p>

            {/* Large Name */}
            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-900 leading-[1.08] mb-3"
            >
              <span className="text-gradient-hero">
                {personal.name}
              </span>
            </motion.h1>

            {/* Professional Title */}
            <motion.div variants={itemVariants} className="mb-5">
              <p className="text-lg sm:text-xl lg:text-2xl font-bold text-slate-700">
                {personal.title}
              </p>
            </motion.div>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-xl mb-8"
            >
              {personal.bio ||
                "I build modern, responsive, and user-friendly web applications with React and modern frontend technologies. I love turning ideas into beautiful and functional digital experiences."}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full sm:w-auto mb-9"
            >
              <a
                href="#projects"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("projects");
                }}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-indigo-600 via-indigo-700 to-sky-600 hover:from-indigo-500 hover:to-sky-500 text-white font-semibold text-sm shadow-md shadow-indigo-600/25 hover:shadow-lg hover:shadow-indigo-600/35 transition-all transform hover:-translate-y-0.5 cursor-pointer"
              >
                <span>View Projects</span>
                <ArrowRight size={16} />
              </a>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("contact");
                }}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white hover:bg-slate-50 border border-slate-200/90 hover:border-slate-300 text-slate-700 font-semibold text-sm shadow-xs hover:shadow-sm transition-all transform hover:-translate-y-0.5 cursor-pointer"
              >
                <span>Contact Me</span>
                <Send size={15} className="text-indigo-600" />
              </a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              variants={itemVariants}
              className="flex items-center gap-4 pt-2 border-t border-slate-200/60 w-full sm:w-auto"
            >
              <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                Connect
              </span>
              <a
                href={social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-semibold text-slate-600 hover:text-slate-900 bg-white hover:bg-slate-50 border border-slate-200/70 px-3 py-1.5 rounded-lg shadow-2xs transition-colors"
                aria-label="GitHub Profile"
              >
                <GithubIcon size={15} />
                GitHub
              </a>
              <a
                href={social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-semibold text-slate-600 hover:text-indigo-600 bg-white hover:bg-indigo-50/50 border border-slate-200/70 hover:border-indigo-200 px-3 py-1.5 rounded-lg shadow-2xs transition-colors"
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon size={15} />
                LinkedIn
              </a>
            </motion.div>
          </motion.div>

          {/* ── Right Column: 3D Developer Workspace ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 flex items-center justify-center"
          >
            <HeroWorkspace />
          </motion.div>
        </div>
      </div>

      {/* ── Scroll Indicator ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="hidden lg:flex justify-center mt-8"
      >
        <button
          onClick={() => scrollToSection("about")}
          className="flex flex-col items-center gap-1.5 text-xs text-slate-400 hover:text-indigo-600 transition-colors cursor-pointer"
          aria-label="Scroll to About section"
        >
          <span className="font-medium">Scroll down</span>
          <ChevronDown size={16} className="animate-bounce" />
        </button>
      </motion.div>
    </section>
  );
}
