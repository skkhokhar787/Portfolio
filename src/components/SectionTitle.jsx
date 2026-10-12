import { motion } from "framer-motion";

export default function SectionTitle({
  tag = "SECTION",
  title,
  subtitle,
  align = "center",
}) {
  const isCenter = align === "center";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className={`flex flex-col mb-12 sm:mb-16 ${
        isCenter ? "text-center items-center" : "text-left items-start"
      }`}
    >
      {/* Small badge / tag */}
      {tag && (
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-200/60 text-indigo-700 text-[11px] font-bold tracking-wider uppercase mb-3 shadow-2xs">
          <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-pulse" />
          {tag}
        </div>
      )}

      {/* Main Title */}
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.15]">
        {title}
      </h2>

      {/* Subtitle */}
      {subtitle && (
        <p className="text-slate-600 text-sm sm:text-base lg:text-lg max-w-2xl mt-3 font-normal leading-relaxed">
          {subtitle}
        </p>
      )}

      {/* Decorative accent underline */}
      <div
        className={`mt-4 h-1 rounded-full bg-gradient-to-r from-indigo-500 via-sky-400 to-teal-400 w-16 ${
          isCenter ? "mx-auto" : ""
        }`}
      />
    </motion.div>
  );
}
