import { useState, useEffect } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  Code2,
  Sparkles,
  Boxes,
} from "lucide-react";

export default function HeroWorkspace() {
  const shouldReduceMotion = useReducedMotion();
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    // Only bind mouse move on desktop without reduced motion
    if (shouldReduceMotion || window.innerWidth < 1024) return;

    const handleMouseMove = (e) => {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth - 0.5) * 16;
      const y = (e.clientY / innerHeight - 0.5) * 16;
      setMousePos({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [shouldReduceMotion]);

  // Framer-motion floating variants
  const floatEditor = shouldReduceMotion
    ? {}
    : {
        animate: {
          y: [-6, 6, -6],
          rotateX: [6, 4, 6],
          rotateY: [-8, -4, -8],
          transition: {
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          },
        },
      };

  const floatReactTile = shouldReduceMotion
    ? {}
    : {
        animate: {
          y: [8, -8, 8],
          rotateZ: [-6, 2, -6],
          transition: {
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          },
        },
      };

  const floatJsTile = shouldReduceMotion
    ? {}
    : {
        animate: {
          y: [-8, 8, -8],
          rotateZ: [8, -2, 8],
          transition: {
            duration: 5.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5,
          },
        },
      };

  const floatTorus = shouldReduceMotion
    ? {}
    : {
        animate: {
          y: [6, -10, 6],
          rotate: [0, 180, 360],
          transition: {
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          },
        },
      };

  const floatBadge = shouldReduceMotion
    ? {}
    : {
        animate: {
          y: [-5, 5, -5],
          transition: {
            duration: 4.2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.2,
          },
        },
      };

  return (
    <div
      className="relative w-full max-w-[540px] mx-auto h-[480px] sm:h-[520px] flex items-center justify-center select-none"
      style={{ perspective: "1200px" }}
    >
      {/* ── Background Glow & Radial Lighting ── */}
      <div className="absolute inset-0 -z-10 flex items-center justify-center pointer-events-none">
        <div className="w-80 sm:w-96 h-80 sm:h-96 rounded-full bg-gradient-to-tr from-indigo-300/30 via-sky-200/35 to-teal-200/25 blur-3xl transform -translate-y-4" />
        <div className="absolute w-64 h-64 rounded-full bg-violet-300/20 blur-2xl transform translate-x-12 translate-y-12" />
      </div>

      {/* ── Orbit Ring SVG ── */}
      <svg
        className="absolute w-[440px] sm:w-[500px] h-[440px] sm:h-[500px] -z-10 pointer-events-none opacity-40 text-indigo-300"
        viewBox="0 0 500 500"
        fill="none"
      >
        <ellipse
          cx="250"
          cy="250"
          rx="220"
          ry="110"
          transform="rotate(-22 250 250)"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeDasharray="6 8"
        />
        <ellipse
          cx="250"
          cy="250"
          rx="180"
          ry="90"
          transform="rotate(38 250 250)"
          stroke="currentColor"
          strokeWidth="1"
          strokeDasharray="4 6"
          className="opacity-60"
        />
      </svg>

      {/* ── Main Tilted Code Window ── */}
      <motion.div
        {...floatEditor}
        style={{
          transformStyle: "preserve-3d",
          x: mousePos.x * 0.6,
          y: mousePos.y * 0.6,
        }}
        className="relative z-10 w-[90%] sm:w-[410px] rounded-2xl bg-white/90 backdrop-blur-xl border border-slate-200/90 shadow-2xl shadow-indigo-950/10 p-4 transition-transform duration-200"
      >
        {/* Editor Top Bar */}
        <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-100">
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-full bg-rose-400 shadow-2xs" />
            <span className="w-3 h-3 rounded-full bg-amber-400 shadow-2xs" />
            <span className="w-3 h-3 rounded-full bg-emerald-400 shadow-2xs" />
          </div>
          <div className="flex items-center gap-1 px-2.5 py-0.5 rounded-md bg-slate-100/80 border border-slate-200/60 text-[11px] font-mono text-slate-600 font-medium">
            <Code2 size={12} className="text-indigo-600" />
            <span>Developer.jsx</span>
          </div>
          <span className="w-8 text-right text-[10px] font-mono text-slate-400">
            UTF-8
          </span>
        </div>

        {/* Code Content */}
        <div className="font-mono text-xs sm:text-[13px] leading-relaxed text-slate-700 space-y-1">
          <p className="text-slate-400">// Crafting modern web experiences</p>
          <p>
            <span className="text-violet-600 font-semibold">const</span>{" "}
            <span className="text-indigo-600 font-semibold">developer</span> ={" "}
            <span className="text-slate-500">&#123;</span>
          </p>
          <p className="pl-4">
            <span className="text-sky-600">name</span>:{" "}
            <span className="text-emerald-600 font-medium">"Sameer Masih"</span>,
          </p>
          <p className="pl-4">
            <span className="text-sky-600">role</span>:{" "}
            <span className="text-emerald-600 font-medium">"Frontend Dev & BSIT"</span>,
          </p>
          <p className="pl-4">
            <span className="text-sky-600">focus</span>: [
            <span className="text-amber-600">"React"</span>,{" "}
            <span className="text-amber-600">"Modern UI"</span>,{" "}
            <span className="text-amber-600">"Clean Code"</span>],
          </p>
          <p className="pl-4">
            <span className="text-sky-600">mission</span>:{" "}
            <span className="text-violet-600">()</span> =&gt;{" "}
            <span className="text-emerald-600 font-medium">"Turn ideas into reality"</span>,
          </p>
          <p className="text-slate-500">&#125;;</p>
          <p className="pt-1">
            <span className="text-indigo-600 font-semibold">export default</span>{" "}
            <span className="text-slate-800 font-medium">developer;</span>
          </p>
        </div>

        {/* Mini status bar inside editor */}
        <div className="mt-3 pt-2.5 border-t border-slate-100 flex items-center justify-between text-[10px] text-slate-400 font-mono">
          <span className="flex items-center gap-1 text-emerald-600 font-medium">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            Build: passing
          </span>
          <span className="text-indigo-600 font-medium">React 19 • Tailwind CSS</span>
        </div>
      </motion.div>

      {/* ── Floating React Tile (Top Right) ── */}
      <motion.div
        {...floatReactTile}
        style={{
          x: mousePos.x * -0.9,
          y: mousePos.y * -0.9,
        }}
        className="absolute top-2 right-2 sm:right-0 z-20 p-3 sm:p-3.5 rounded-2xl bg-white/95 backdrop-blur-xl border border-sky-200/80 shadow-lg shadow-sky-500/15 flex items-center gap-2.5"
      >
        <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-sky-500 to-cyan-400 flex items-center justify-center text-white shadow-sm shadow-sky-500/30">
          <svg className="w-6 h-6 animate-[spin_10s_linear_infinite]" viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="12" r="2" fill="currentColor" />
            <ellipse cx="12" cy="12" rx="9" ry="3.5" stroke="currentColor" strokeWidth="1.5" />
            <ellipse cx="12" cy="12" rx="9" ry="3.5" transform="rotate(60 12 12)" stroke="currentColor" strokeWidth="1.5" />
            <ellipse cx="12" cy="12" rx="9" ry="3.5" transform="rotate(120 12 12)" stroke="currentColor" strokeWidth="1.5" />
          </svg>
        </div>
        <div>
          <p className="text-[11px] font-bold text-slate-800">React Ecosystem</p>
          <p className="text-[9px] text-sky-600 font-semibold uppercase tracking-wider">Fast & Interactive</p>
        </div>
      </motion.div>

      {/* ── Floating JavaScript/TypeScript Accent Tile (Bottom Left) ── */}
      <motion.div
        {...floatJsTile}
        style={{
          x: mousePos.x * 0.8,
          y: mousePos.y * 0.8,
        }}
        className="absolute bottom-4 left-2 sm:left-0 z-20 p-3 rounded-2xl bg-white/95 backdrop-blur-xl border border-amber-200/80 shadow-lg shadow-amber-500/10 flex items-center gap-2.5"
      >
        <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-amber-400 to-yellow-300 flex items-center justify-center font-bold text-slate-900 text-sm shadow-sm">
          JS
        </div>
        <div>
          <p className="text-[11px] font-bold text-slate-800">Modern JavaScript</p>
          <p className="text-[9px] text-amber-600 font-semibold tracking-wider">ES6+ & Tooling</p>
        </div>
      </motion.div>

      {/* ── Glossy 3D Torus (Bottom Right) ── */}
      <motion.div
        {...floatTorus}
        style={{
          x: mousePos.x * -0.5,
          y: mousePos.y * -0.5,
        }}
        className="absolute -bottom-4 right-8 sm:right-6 z-15 pointer-events-none"
      >
        <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full border-[8px] sm:border-[10px] border-indigo-400/80 bg-gradient-to-tr from-indigo-200/40 via-sky-200/30 to-violet-300/40 shadow-xl shadow-indigo-500/20 backdrop-blur-xs transform rotate-45" />
      </motion.div>

      {/* ── Floating 3D Geometric Cube (Top Left) ── */}
      <motion.div
        style={{
          x: mousePos.x * 0.5,
          y: mousePos.y * 0.5,
        }}
        animate={
          shouldReduceMotion
            ? {}
            : {
                rotateY: [15, -15, 15],
                rotateX: [-10, 10, -10],
                y: [-6, 6, -6],
              }
        }
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -top-3 left-4 sm:left-8 z-15 pointer-events-none"
      >
        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-teal-400 to-emerald-500 shadow-lg shadow-teal-500/30 flex items-center justify-center text-white transform -rotate-12 border border-white/60">
          <Boxes size={22} />
        </div>
      </motion.div>

      {/* ── Handwritten Floating Note ("Code. Create. Improve.") ── */}
      <motion.div
        {...floatBadge}
        className="absolute -bottom-8 left-1/3 z-25 pointer-events-none"
      >
        <div className="px-3 py-1 rounded-full bg-white/90 backdrop-blur-md border border-indigo-100 shadow-md shadow-indigo-900/5 rotate-[-4deg]">
          <span className="font-handwriting text-lg sm:text-xl text-indigo-700 font-bold tracking-wide">
            Code. Create. Improve. ✨
          </span>
        </div>
      </motion.div>

      {/* ── Small Floating Spheres & Particles ── */}
      <motion.div
        animate={
          shouldReduceMotion
            ? {}
            : {
                y: [-12, 12, -12],
                x: [6, -6, 6],
              }
        }
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 -left-2 w-4 h-4 rounded-full bg-gradient-to-tr from-indigo-400 to-sky-300 shadow-md shadow-indigo-400/40"
      />

      <motion.div
        animate={
          shouldReduceMotion
            ? {}
            : {
                y: [10, -10, 10],
                x: [-4, 4, -4],
              }
        }
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute top-3/4 -right-2 w-3.5 h-3.5 rounded-full bg-gradient-to-tr from-pink-400 to-rose-300 shadow-md shadow-pink-400/40"
      />

      <motion.div
        animate={
          shouldReduceMotion
            ? {}
            : {
                scale: [0.9, 1.2, 0.9],
                opacity: [0.4, 0.9, 0.4],
              }
        }
        transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-12 right-28 text-indigo-400"
      >
        <Sparkles size={18} />
      </motion.div>
    </div>
  );
}
