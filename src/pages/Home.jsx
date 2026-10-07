import { motion } from "framer-motion";
import { ArrowRight, Terminal } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "../components/SocialIcons";
import portfolioData from "../data/portfolio.json";

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

function scrollToSection(id) {
  const el = document.getElementById(id);
  if (!el) return;
  const offset = 64;
  const top = el.getBoundingClientRect().top + window.scrollY - offset;
  window.scrollTo({ top, behavior: "smooth" });
}

export default function Home() {
  const { personal, social } = portfolioData;

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 overflow-hidden pt-16">
      {/* Background decorations */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-indigo-600/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-violet-600/5 rounded-full blur-3xl" />
      </div>

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 -z-10 opacity-[0.02]"
        style={{
          backgroundImage:
            "linear-gradient(#6366f1 1px, transparent 1px), linear-gradient(to right, #6366f1 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-3xl mx-auto text-center"
      >
        {/* Badge */}
        <motion.div variants={itemVariants} className="mb-6 flex justify-center">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-indigo-500/30 bg-indigo-600/10 text-indigo-300 text-xs font-medium">
            <Terminal size={12} />
            Available for opportunities
          </span>
        </motion.div>

        {/* Name */}
        <motion.h1
          variants={itemVariants}
          className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight tracking-tight"
        >
          {personal.name}
        </motion.h1>

        {/* Title */}
        <motion.p
          variants={itemVariants}
          className="text-lg sm:text-xl font-medium text-indigo-400 mb-5"
        >
          {personal.title}
        </motion.p>

        {/* Bio */}
        <motion.p
          variants={itemVariants}
          className="text-slate-400 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto mb-10"
        >
          {personal.bio}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10"
        >
          <a
            href="#projects"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("projects");
            }}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-medium text-sm transition-colors cursor-pointer"
          >
            View Projects
            <ArrowRight size={15} />
          </a>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("contact");
            }}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl border border-white/10 hover:border-white/20 bg-white/5 hover:bg-white/8 text-white font-medium text-sm transition-colors cursor-pointer"
          >
            Contact Me
          </a>
        </motion.div>

        {/* Social Links */}
        <motion.div
          variants={itemVariants}
          className="flex items-center justify-center gap-4"
        >
          <a
            href={social.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors"
          >
            <GithubIcon size={16} />
            GitHub
          </a>
          <span className="w-px h-4 bg-white/10" />
          <a
            href={social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors"
          >
            <LinkedinIcon size={16} />
            LinkedIn
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
