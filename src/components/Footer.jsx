import { Mail, Heart } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./SocialIcons";
import portfolioData from "../data/portfolio.json";

function scrollToSection(id) {
  const el = document.getElementById(id);
  if (!el) return;
  const offset = 80;
  const top = el.getBoundingClientRect().top + window.scrollY - offset;
  window.scrollTo({ top, behavior: "smooth" });
}

const CURRENT_YEAR = new Date().getFullYear();

export default function Footer() {
  const { personal, social } = portfolioData;

  const handleNavClick = (e, id) => {
    e.preventDefault();
    scrollToSection(id);
  };

  return (
    <footer className="border-t border-slate-200/80 bg-white/70 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, "home")}
            className="flex items-center gap-2.5 group cursor-pointer"
            aria-label="Back to top"
          >
            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-indigo-600 via-sky-500 to-teal-400 p-[1.5px] shadow-xs">
              <div className="w-full h-full bg-white rounded-[7px] flex items-center justify-center">
                <span className="font-extrabold text-[11px] bg-gradient-to-r from-indigo-600 to-sky-600 bg-clip-text text-transparent">
                  SM
                </span>
              </div>
            </div>
            <div>
              <span className="font-bold text-slate-800 text-sm group-hover:text-indigo-600 transition-colors">
                {personal.name}
              </span>
              <p className="text-[11px] text-slate-400 font-medium">
                {personal.title}
              </p>
            </div>
          </a>

          {/* Navigation Links */}
          <nav className="flex flex-wrap justify-center items-center gap-6">
            {["home", "about", "projects", "skills", "contact"].map((id) => (
              <a
                key={id}
                href={`#${id}`}
                onClick={(e) => handleNavClick(e, id)}
                className="text-xs font-semibold uppercase tracking-wider text-slate-500 hover:text-indigo-600 transition-colors cursor-pointer"
              >
                {id}
              </a>
            ))}
          </nav>

          {/* Social Icons */}
          <div className="flex items-center gap-2">
            <a
              href={social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-xl text-slate-500 hover:text-slate-900 hover:bg-slate-100 border border-transparent hover:border-slate-200 transition-all"
              aria-label="GitHub Profile"
            >
              <GithubIcon size={17} />
            </a>
            <a
              href={social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-xl text-slate-500 hover:text-indigo-600 hover:bg-indigo-50 border border-transparent hover:border-indigo-100 transition-all"
              aria-label="LinkedIn Profile"
            >
              <LinkedinIcon size={17} />
            </a>
            <a
              href={`mailto:${personal.email}`}
              className="p-2 rounded-xl text-slate-500 hover:text-teal-600 hover:bg-teal-50 border border-transparent hover:border-teal-100 transition-all"
              aria-label="Email Sameer"
            >
              <Mail size={17} />
            </a>
          </div>
        </div>

        {/* Copyright & credit line */}
        <div className="mt-10 pt-6 border-t border-slate-200/60 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-400">
          <p>© {CURRENT_YEAR} {personal.name}. All rights reserved.</p>
          <p className="flex items-center gap-1.5 font-medium text-slate-500">
            <span>Crafted with</span>
            <Heart size={13} className="text-rose-500 fill-rose-500 animate-pulse" />
            <span>using React, Tailwind CSS & Framer Motion</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
