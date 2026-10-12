import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./SocialIcons";
import usePortfolioStore from "../store/usePortfolioStore";
import portfolioData from "../data/portfolio.json";

const NAV_LINKS = [
  { label: "Home", id: "home" },
  { label: "About", id: "about" },
  { label: "Projects", id: "projects" },
  { label: "Skills", id: "skills" },
  { label: "Contact", id: "contact" },
];

const SECTION_IDS = NAV_LINKS.map((l) => l.id);

function scrollToSection(id) {
  const el = document.getElementById(id);
  if (!el) return;
  const offset = 80;
  const top = el.getBoundingClientRect().top + window.scrollY - offset;
  window.scrollTo({ top, behavior: "smooth" });
}

export default function Navbar() {
  const {
    mobileMenuOpen,
    toggleMobileMenu,
    setMobileMenuOpen,
    activeSection,
    setActiveSection,
  } = usePortfolioStore();

  const { social } = portfolioData;
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observers = [];

    SECTION_IDS.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(id);
          }
        },
        {
          rootMargin: "-20% 0px -65% 0px",
        }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, [setActiveSection]);

  const handleNavClick = (e, id) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    scrollToSection(id);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "py-3 bg-white/80 backdrop-blur-md shadow-sm shadow-slate-200/50 border-b border-slate-200/60"
          : "py-5 bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between">
          {/* Brand */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, "home")}
            className="flex items-center gap-2.5 group cursor-pointer"
            aria-label="Sameer Masih Portfolio Home"
          >
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-indigo-600 via-sky-500 to-teal-400 p-[1.5px] shadow-sm shadow-indigo-500/20 group-hover:shadow-indigo-500/30 transition-shadow">
              <div className="w-full h-full bg-white rounded-[10px] flex items-center justify-center">
                <span className="font-extrabold text-xs tracking-wider bg-gradient-to-r from-indigo-600 to-sky-600 bg-clip-text text-transparent">
                  SM
                </span>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-slate-800 text-sm tracking-tight group-hover:text-indigo-600 transition-colors">
                Sameer Masih
              </span>
              <span className="text-[10px] text-slate-400 font-medium tracking-wide">
                Frontend Developer
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1.5 p-1 rounded-full bg-white/85 backdrop-blur-md border border-slate-200/80 shadow-sm shadow-slate-200/40">
            {NAV_LINKS.map(({ label, id }) => {
              const isActive = activeSection === id;
              return (
                <a
                  key={id}
                  href={`#${id}`}
                  onClick={(e) => handleNavClick(e, id)}
                  className={`relative px-4 py-1.5 text-xs font-semibold rounded-full transition-all duration-200 cursor-pointer ${
                    isActive
                      ? "text-indigo-700"
                      : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeNavPill"
                      className="absolute inset-0 bg-indigo-50 border border-indigo-200/70 rounded-full -z-10 shadow-xs"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  {label}
                </a>
              );
            })}
          </nav>

          {/* Desktop Socials */}
          <div className="hidden md:flex items-center gap-2">
            <a
              href={social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-xl text-slate-500 hover:text-slate-900 hover:bg-slate-100/80 border border-transparent hover:border-slate-200/60 transition-all"
              aria-label="GitHub Profile"
            >
              <GithubIcon size={18} />
            </a>
            <a
              href={social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-xl text-slate-500 hover:text-indigo-600 hover:bg-indigo-50/70 border border-transparent hover:border-indigo-100 transition-all"
              aria-label="LinkedIn Profile"
            >
              <LinkedinIcon size={18} />
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden p-2.5 rounded-xl bg-white border border-slate-200/80 text-slate-700 hover:text-slate-900 shadow-xs transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.98 }}
            transition={{ duration: 0.2 }}
            className="md:hidden mt-3 mx-4 rounded-2xl bg-white/95 backdrop-blur-xl border border-slate-200/80 shadow-xl shadow-slate-900/5 p-4 overflow-hidden"
          >
            <nav className="flex flex-col gap-1">
              {NAV_LINKS.map(({ label, id }) => {
                const isActive = activeSection === id;
                return (
                  <a
                    key={id}
                    href={`#${id}`}
                    onClick={(e) => handleNavClick(e, id)}
                    className={`flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm font-semibold transition-colors ${
                      isActive
                        ? "bg-indigo-50 text-indigo-700 border border-indigo-200/60"
                        : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                    }`}
                  >
                    <span>{label}</span>
                    {isActive && (
                      <span className="w-1.5 h-1.5 rounded-full bg-indigo-600" />
                    )}
                  </a>
                );
              })}

              <div className="flex items-center gap-3 px-3 pt-3 mt-2 border-t border-slate-100">
                <a
                  href={social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-2 px-3 rounded-xl bg-slate-50 border border-slate-200/60 text-xs font-semibold text-slate-700 hover:bg-slate-100 transition-colors"
                  aria-label="GitHub Profile"
                >
                  <GithubIcon size={16} />
                  GitHub
                </a>
                <a
                  href={social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-2 px-3 rounded-xl bg-indigo-50 border border-indigo-200/60 text-xs font-semibold text-indigo-700 hover:bg-indigo-100 transition-colors"
                  aria-label="LinkedIn Profile"
                >
                  <LinkedinIcon size={16} />
                  LinkedIn
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
