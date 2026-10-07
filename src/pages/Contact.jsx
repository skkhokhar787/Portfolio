import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Send, CheckCircle } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "../components/SocialIcons";
import portfolioData from "../data/portfolio.json";
import SectionTitle from "../components/SectionTitle";

export default function Contact() {
  const { personal, social } = portfolioData;

  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio Contact from ${form.name}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`
    );
    window.location.href = `mailto:${personal.email}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  const contactLinks = [
    {
      icon: Mail,
      label: "Email",
      value: personal.email,
      href: `mailto:${personal.email}`,
      color: "indigo",
    },
    {
      icon: GithubIcon,
      label: "GitHub",
      value: "skkhokhar787",
      href: social.github,
      color: "slate",
    },
    {
      icon: LinkedinIcon,
      label: "LinkedIn",
      value: "sk-khokhar",
      href: social.linkedin,
      color: "cyan",
    },
  ];

  const colorClasses = {
    indigo: {
      icon: "text-indigo-400",
      bg: "bg-indigo-600/10",
      border: "border-indigo-500/20",
    },
    slate: {
      icon: "text-slate-400",
      bg: "bg-slate-600/10",
      border: "border-slate-500/20",
    },
    cyan: {
      icon: "text-cyan-400",
      bg: "bg-cyan-600/10",
      border: "border-cyan-500/20",
    },
  };

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 border-t border-white/5">
      <div className="max-w-5xl mx-auto">
        <SectionTitle
          title="Get In Touch"
          subtitle="Have a question, opportunity, or just want to say hi? Feel free to reach out."
        />

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Contact Links */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2 space-y-4"
          >
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              I'm open to frontend development opportunities, collaborations,
              and project discussions. The best way to reach me is via email or
              LinkedIn.
            </p>

            {contactLinks.map(({ icon: Icon, label, value, href, color }) => {
              const cls = colorClasses[color];
              return (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("mailto") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-[#111118] border border-white/8 rounded-xl hover:border-white/15 transition-colors group"
                >
                  <div
                    className={`w-10 h-10 rounded-lg border flex items-center justify-center shrink-0 ${cls.bg} ${cls.border}`}
                  >
                    <Icon size={17} className={cls.icon} />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs text-slate-500 mb-0.5">{label}</p>
                    <p className="text-sm text-slate-200 group-hover:text-white transition-colors truncate font-medium">
                      {value}
                    </p>
                  </div>
                </a>
              );
            })}
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-3"
          >
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-16 px-8 bg-[#111118] border border-white/8 rounded-xl">
                <CheckCircle size={40} className="text-green-400 mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">
                  Email Client Opened!
                </h3>
                <p className="text-slate-400 text-sm">
                  Your default email app should have opened with the message
                  pre-filled. Send it from there!
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-6 text-sm text-indigo-400 hover:text-indigo-300 transition-colors cursor-pointer"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-[#111118] border border-white/8 rounded-xl p-6 sm:p-8 space-y-5"
              >
                <div>
                  <label className="block text-xs font-medium text-slate-400 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className="w-full px-4 py-2.5 rounded-lg bg-white/5 border border-white/10 text-white text-sm placeholder:text-slate-600 focus:outline-none focus:border-indigo-500/50 focus:bg-white/8 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-400 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    className="w-full px-4 py-2.5 rounded-lg bg-white/5 border border-white/10 text-white text-sm placeholder:text-slate-600 focus:outline-none focus:border-indigo-500/50 focus:bg-white/8 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-400 mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="What would you like to talk about?"
                    className="w-full px-4 py-2.5 rounded-lg bg-white/5 border border-white/10 text-white text-sm placeholder:text-slate-600 focus:outline-none focus:border-indigo-500/50 focus:bg-white/8 transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-medium text-sm transition-colors cursor-pointer"
                >
                  <Send size={14} />
                  Send Message
                </button>

                <p className="text-xs text-slate-600 text-center">
                  This will open your default email client with the message
                  pre-filled.
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
