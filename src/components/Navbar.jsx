import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./SocialIcons";
import usePortfolioStore from "../store/usePortfolioStore";
import portfolioData from "../data/portfolio.json";

const NAV_LINKS = [
  { label: "Home", id: "home" },
  { label: "About", id: "about" },
  { label: "Projects", id: "projects" },
  { label: "Contact", id: "contact" },
];

const SECTION_IDS = NAV_LINKS.map((l) => l.id);

// Scroll to a section with offset for the fixed navbar
function scrollToSection(id) {
  const el = document.getElementById(id);
  if (!el) return;
  const offset = 64;
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

  // Track which section is in view via IntersectionObserver
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
          rootMargin: "-20% 0px -70% 0px", // triggers when section crosses upper 30% of viewport
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
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-[#0a0a0f]/80 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">

          {/* Logo — scrolls to top */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, "home")}
            className="flex items-center group"
          >
            <span className="font-semibold text-white text-base hover:text-indigo-400 transition-colors">
              Sameer Masih
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map(({ label, id }) => (
              <a
                key={id}
                href={`#${id}`}
                onClick={(e) => handleNavClick(e, id)}
                className={`text-sm font-medium transition-colors duration-200 ${
                  activeSection === id
                    ? "text-indigo-400"
                    : "text-slate-300 hover:text-white"
                }`}
              >
                {label}
              </a>
            ))}
          </nav>

          {/* Desktop Social Icons */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href={social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-slate-400 hover:text-white transition-colors"
              aria-label="GitHub"
            >
              <GithubIcon size={18} />
            </a>
            <a
              href={social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-slate-400 hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <LinkedinIcon size={18} />
            </a>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden p-2 text-slate-400 hover:text-white transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden border-t border-white/5 bg-[#0a0a0f]/95 backdrop-blur-md overflow-hidden"
          >
            <nav className="flex flex-col px-4 py-4 gap-1">
              {NAV_LINKS.map(({ label, id }) => (
                <a
                  key={id}
                  href={`#${id}`}
                  onClick={(e) => handleNavClick(e, id)}
                  className={`px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                    activeSection === id
                      ? "bg-indigo-600/10 text-indigo-400"
                      : "text-slate-300 hover:bg-white/5 hover:text-white"
                  }`}
                >
                  {label}
                </a>
              ))}
              <div className="flex items-center gap-3 px-3 pt-3 mt-1 border-t border-white/5">
                <a
                  href={social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors"
                >
                  <GithubIcon size={16} />
                  GitHub
                </a>
                <a
                  href={social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors"
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
