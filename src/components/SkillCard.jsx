import { motion } from "framer-motion";

const colorStyles = {
  indigo: {
    badgeBg: "bg-indigo-50",
    badgeText: "text-indigo-700",
    badgeBorder: "border-indigo-200/80",
    badgeHover: "hover:bg-indigo-100/70 hover:border-indigo-300",
    dot: "bg-indigo-500",
    iconBg: "bg-indigo-50 border-indigo-200/80 text-indigo-600",
    cardHover: "hover:border-indigo-300/80 hover:shadow-indigo-500/5",
  },
  violet: {
    badgeBg: "bg-violet-50",
    badgeText: "text-violet-700",
    badgeBorder: "border-violet-200/80",
    badgeHover: "hover:bg-violet-100/70 hover:border-violet-300",
    dot: "bg-violet-500",
    iconBg: "bg-violet-50 border-violet-200/80 text-violet-600",
    cardHover: "hover:border-violet-300/80 hover:shadow-violet-500/5",
  },
  cyan: {
    badgeBg: "bg-cyan-50",
    badgeText: "text-cyan-800",
    badgeBorder: "border-cyan-200/80",
    badgeHover: "hover:bg-cyan-100/70 hover:border-cyan-300",
    dot: "bg-cyan-500",
    iconBg: "bg-cyan-50 border-cyan-200/80 text-cyan-600",
    cardHover: "hover:border-cyan-300/80 hover:shadow-cyan-500/5",
  },
  orange: {
    badgeBg: "bg-amber-50",
    badgeText: "text-amber-800",
    badgeBorder: "border-amber-200/80",
    badgeHover: "hover:bg-amber-100/70 hover:border-amber-300",
    dot: "bg-amber-500",
    iconBg: "bg-amber-50 border-amber-200/80 text-amber-600",
    cardHover: "hover:border-amber-300/80 hover:shadow-amber-500/5",
  },
  green: {
    badgeBg: "bg-emerald-50",
    badgeText: "text-emerald-800",
    badgeBorder: "border-emerald-200/80",
    badgeHover: "hover:bg-emerald-100/70 hover:border-emerald-300",
    dot: "bg-emerald-500",
    iconBg: "bg-emerald-50 border-emerald-200/80 text-emerald-600",
    cardHover: "hover:border-emerald-300/80 hover:shadow-emerald-500/5",
  },
  slate: {
    badgeBg: "bg-slate-100",
    badgeText: "text-slate-800",
    badgeBorder: "border-slate-200/90",
    badgeHover: "hover:bg-slate-200/70 hover:border-slate-300",
    dot: "bg-slate-500",
    iconBg: "bg-slate-100 border-slate-200/90 text-slate-700",
    cardHover: "hover:border-slate-300/90 hover:shadow-slate-500/5",
  },
};

export default function SkillCard({ skill, index = 0, icon: Icon }) {
  const style = colorStyles[skill.color] || colorStyles.indigo;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.45, delay: index * 0.07, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -3 }}
      className={`glass-card rounded-2xl p-6 transition-all duration-300 flex flex-col justify-between ${style.cardHover}`}
    >
      <div>
        {/* Category Header */}
        <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-100">
          <div className="flex items-center gap-3">
            {Icon && (
              <div
                className={`w-9 h-9 rounded-xl border flex items-center justify-center shadow-2xs ${style.iconBg}`}
              >
                <Icon size={17} />
              </div>
            )}
            <div>
              <h3 className="text-base font-bold text-slate-800">
                {skill.category}
              </h3>
              <p className="text-[11px] text-slate-400 font-medium">
                {skill.items.length} technologies
              </p>
            </div>
          </div>
          <span className={`w-2 h-2 rounded-full ${style.dot}`} />
        </div>

        {/* Skill Badges */}
        <div className="flex flex-wrap gap-2 pt-1">
          {skill.items.map((item) => (
            <span
              key={item}
              className={`text-xs px-3 py-1.5 rounded-xl border font-semibold transition-all duration-200 shadow-2xs ${style.badgeBg} ${style.badgeText} ${style.badgeBorder} ${style.badgeHover} cursor-default`}
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
