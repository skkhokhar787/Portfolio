const colorMap = {
  indigo: {
    bg: "bg-indigo-600/10",
    text: "text-indigo-300",
    border: "border-indigo-500/20",
    dot: "bg-indigo-500",
  },
  violet: {
    bg: "bg-violet-600/10",
    text: "text-violet-300",
    border: "border-violet-500/20",
    dot: "bg-violet-500",
  },
  cyan: {
    bg: "bg-cyan-600/10",
    text: "text-cyan-300",
    border: "border-cyan-500/20",
    dot: "bg-cyan-500",
  },
  orange: {
    bg: "bg-orange-600/10",
    text: "text-orange-300",
    border: "border-orange-500/20",
    dot: "bg-orange-500",
  },
  green: {
    bg: "bg-green-600/10",
    text: "text-green-300",
    border: "border-green-500/20",
    dot: "bg-green-500",
  },
  slate: {
    bg: "bg-slate-600/10",
    text: "text-slate-300",
    border: "border-slate-500/20",
    dot: "bg-slate-400",
  },
};

export default function SkillCard({ skill }) {
  const colors = colorMap[skill.color] || colorMap.indigo;

  return (
    <div className="bg-[#111118] border border-white/8 rounded-xl p-5 hover:border-white/15 transition-colors duration-200">
      {/* Category header */}
      <div className="flex items-center gap-2 mb-4">
        <span className={`w-2 h-2 rounded-full ${colors.dot}`} />
        <h3 className="text-sm font-semibold text-white">{skill.category}</h3>
      </div>

      {/* Skill badges */}
      <div className="flex flex-wrap gap-2">
        {skill.items.map((item) => (
          <span
            key={item}
            className={`text-xs px-2.5 py-1 rounded-full border font-medium ${colors.bg} ${colors.text} ${colors.border}`}
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
