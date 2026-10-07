import { motion } from "framer-motion";

export default function SectionTitle({ title, subtitle, align = "center" }) {
  const alignClass = {
    center: "text-center items-center",
    left: "text-left items-start",
  }[align];

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`flex flex-col gap-2 mb-12 ${alignClass}`}
    >
      <h2 className="text-2xl sm:text-3xl font-bold text-white">{title}</h2>
      {subtitle && (
        <p className="text-slate-400 text-sm sm:text-base max-w-xl">{subtitle}</p>
      )}
      <div className={`w-12 h-0.5 bg-indigo-500 rounded-full mt-1 ${align === "center" ? "mx-auto" : ""}`} />
    </motion.div>
  );
}
