import { Mail, Heart } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./SocialIcons";
import portfolioData from "../data/portfolio.json";

function scrollToSection(id) {
  const el = document.getElementById(id);
  if (!el) return;
  const offset = 64;
  const top = el.getBoundingClientRect().top + window.scrollY - offset;
  window.scrollTo({ top, behavior: "smooth" });
}

export default function Footer() {
  const { personal, social } = portfolioData;
  const year = new Date().getFullYear();

  const handleNavClick = (e, id) => {
    e.preventDefault();
    scrollToSection(id);
  };

  return (
    <footer className="border-t border-white/5 bg-[#0a0a0f]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, "home")}
            className="flex items-center group"
          >
            <span className="font-semibold text-white text-base hover:text-indigo-400 transition-colors">
              {personal.name}
            </span>
          </a>

          {/* Nav Links */}
          <nav className="flex items-center gap-6">
            <a
              href="#home"
              onClick={(e) => handleNavClick(e, "home")}
              className="text-sm text-slate-400 hover:text-white transition-colors cursor-pointer"
            >
              Home
            </a>
            <a
              href="#about"
              onClick={(e) => handleNavClick(e, "about")}
              className="text-sm text-slate-400 hover:text-white transition-colors cursor-pointer"
            >
              About
            </a>
            <a
              href="#projects"
              onClick={(e) => handleNavClick(e, "projects")}
              className="text-sm text-slate-400 hover:text-white transition-colors cursor-pointer"
            >
              Projects
            </a>
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, "contact")}
              className="text-sm text-slate-400 hover:text-white transition-colors cursor-pointer"
            >
              Contact
            </a>
          </nav>

          {/* Social Icons */}
          <div className="flex items-center gap-3">
            <a
              href={social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-slate-400 hover:text-white transition-colors"
              aria-label="GitHub"
            >
              <GithubIcon size={17} />
            </a>
            <a
              href={social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-slate-400 hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <LinkedinIcon size={17} />
            </a>
            <a
              href={`mailto:${personal.email}`}
              className="p-2 text-slate-400 hover:text-white transition-colors"
              aria-label="Email"
            >
              <Mail size={17} />
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-xs text-slate-500">
            © {year} {personal.name}. All rights reserved.
          </p>
          <p className="text-xs text-slate-600 flex items-center gap-1">
            Built with <Heart size={11} className="text-indigo-500 fill-indigo-500" /> using React & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
