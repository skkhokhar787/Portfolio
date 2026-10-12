import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Send, CheckCircle2, MessageSquare, MapPin } from "lucide-react";
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
      label: "Email Directly",
      value: personal.email,
      href: `mailto:${personal.email}`,
      colorCls: "bg-indigo-50 border-indigo-200/80 text-indigo-700 hover:border-indigo-300",
      iconCls: "text-indigo-600",
    },
    {
      icon: LinkedinIcon,
      label: "LinkedIn Profile",
      value: "Sameer Masih (sk-khokhar)",
      href: social.linkedin,
      colorCls: "bg-sky-50 border-sky-200/80 text-sky-700 hover:border-sky-300",
      iconCls: "text-sky-600",
    },
    {
      icon: GithubIcon,
      label: "GitHub Repositories",
      value: "github.com/skkhokhar787",
      href: social.github,
      colorCls: "bg-slate-50 border-slate-200/80 text-slate-800 hover:border-slate-300",
      iconCls: "text-slate-700",
    },
  ];

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-tr from-indigo-100/40 via-sky-100/30 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-gradient-to-br from-teal-100/35 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto">
        <SectionTitle
          tag="Let's Connect"
          title="Have an idea? Let's build something great."
          subtitle="I'm always open to discussing new frontend opportunities, creative projects, or internships. Drop me a line anytime!"
          align="center"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start max-w-5xl mx-auto">
          {/* Left Column: Direct channels */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 space-y-4"
          >
            <div className="p-6 rounded-2xl bg-white/85 backdrop-blur-md border border-slate-200/80 shadow-sm shadow-slate-200/40">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold mb-4 shadow-2xs">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                Open for Opportunities
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">
                Let's talk about frontend
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-6">
                Whether you have an interesting job opening, an open-source collaboration idea, or want to discuss React development, I'd love to hear from you.
              </p>

              {/* Location Badge */}
              {personal.location && (
                <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 pt-3 border-t border-slate-100">
                  <MapPin size={14} className="text-indigo-500" />
                  <span>Based in {personal.location} • Remote Friendly</span>
                </div>
              )}
            </div>

            {/* Direct Channel Cards */}
            <div className="space-y-3">
              {contactLinks.map(({ icon: Icon, label, value, href, colorCls, iconCls }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("mailto") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  className={`flex items-center gap-4 p-4 rounded-2xl bg-white/80 backdrop-blur-md border border-slate-200/80 hover:shadow-md hover:shadow-indigo-500/5 transition-all duration-200 group ${colorCls}`}
                >
                  <div
                    className={`w-11 h-11 rounded-xl bg-white border border-slate-200/80 shadow-2xs flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform`}
                  >
                    <Icon size={18} className={iconCls} />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-0.5">
                      {label}
                    </p>
                    <p className="text-xs sm:text-sm font-semibold text-slate-800 group-hover:text-indigo-600 transition-colors truncate">
                      {value}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </motion.div>

          {/* Right Column: Contact Message Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-7"
          >
            <div className="p-7 sm:p-9 rounded-2xl bg-white/90 backdrop-blur-xl border border-slate-200/90 shadow-xl shadow-slate-200/40">
              {submitted ? (
                <div className="flex flex-col items-center justify-center text-center py-12 px-4">
                  <div className="w-14 h-14 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-600 flex items-center justify-center mb-4 shadow-xs">
                    <CheckCircle2 size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">
                    Email Client Opened!
                  </h3>
                  <p className="text-slate-600 text-sm max-w-sm mb-6 leading-relaxed">
                    Your default email application has opened with your message pre-filled. Simply press send from your email app!
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-5 py-2.5 rounded-xl bg-indigo-50 text-indigo-700 text-xs font-bold hover:bg-indigo-100 transition-colors cursor-pointer"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="flex items-center gap-2 mb-2 pb-2 border-b border-slate-100">
                    <MessageSquare size={16} className="text-indigo-600" />
                    <h4 className="text-sm font-bold text-slate-800">
                      Send a Direct Message
                    </h4>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5 uppercase tracking-wide">
                      Your Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="e.g. Alex Smith"
                      className="w-full px-4 py-3 rounded-xl bg-slate-50/80 border border-slate-200/80 text-slate-900 text-sm placeholder:text-slate-400 focus:outline-none focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-100 transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5 uppercase tracking-wide">
                      Your Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="alex@example.com"
                      className="w-full px-4 py-3 rounded-xl bg-slate-50/80 border border-slate-200/80 text-slate-900 text-sm placeholder:text-slate-400 focus:outline-none focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-100 transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5 uppercase tracking-wide">
                      Your Message
                    </label>
                    <textarea
                      name="message"
                      required
                      rows={5}
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Tell me about your project, idea, or role..."
                      className="w-full px-4 py-3 rounded-xl bg-slate-50/80 border border-slate-200/80 text-slate-900 text-sm placeholder:text-slate-400 focus:outline-none focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-100 transition-all resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-gradient-to-r from-indigo-600 via-indigo-700 to-sky-600 hover:from-indigo-500 hover:to-sky-500 text-white font-bold text-sm shadow-md shadow-indigo-600/25 hover:shadow-lg hover:shadow-indigo-600/35 transition-all transform hover:-translate-y-0.5 cursor-pointer"
                  >
                    <Send size={15} />
                    <span>Send Message</span>
                  </button>

                  <p className="text-[11px] text-slate-400 text-center font-normal pt-1">
                    Opens your default email app with the subject and message pre-filled.
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
