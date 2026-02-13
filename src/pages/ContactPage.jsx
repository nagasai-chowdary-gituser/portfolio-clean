import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { personalInfo, socialLinks } from "../data/portfolio";
import { Icons } from "../components/Icons";
import SectionHeading from "../components/SectionHeading";
import ScrollReveal from "../components/ScrollReveal";

/* ═══════════════ CONTACT PAGE ═══════════════ */
export default function ContactPage() {
    const [formState, setFormState] = useState({ name: "", email: "", message: "" });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        setFormState((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const subject = encodeURIComponent(`Portfolio Contact from ${formState.name}`);
        const body = encodeURIComponent(`Name: ${formState.name}\nEmail: ${formState.email}\n\n${formState.message}`);
        window.open(`mailto:${personalInfo.email}?subject=${subject}&body=${body}`);
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 3000);
    };

    const inputClasses = "w-full px-4 py-3 text-sm rounded-xl bg-dark-800/50 border border-border text-dark-100 placeholder:text-dark-500 focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent/40 transition-all duration-300";

    return (
        <div className="pt-24">
            {/* Page Header */}
            <section className="section-padding pb-0">
                <div className="max-w-6xl mx-auto px-6">
                    <ScrollReveal>
                        <Link to="/" className="inline-flex items-center gap-1.5 text-sm text-dark-400 hover:text-accent transition-colors mb-6">
                            <Icons.arrowDown className="w-3.5 h-3.5 rotate-90" />
                            Home
                        </Link>
                    </ScrollReveal>
                    <SectionHeading
                        label="Contact"
                        title="Let's Build Something Great"
                        subtitle="Have a project in mind or want to collaborate? I'd love to hear from you."
                        center={false}
                    />
                </div>
            </section>

            {/* Contact Content */}
            <section className="section-padding pt-2">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="grid lg:grid-cols-5 gap-10 lg:gap-16">
                        {/* Form */}
                        <ScrollReveal className="lg:col-span-3">
                            <form onSubmit={handleSubmit} className="glass rounded-2xl p-6 md:p-8 relative overflow-hidden">
                                {/* Corner glow */}
                                <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-neon-cyan/6 blur-[60px]" />

                                <h3 className="text-lg font-semibold text-dark-50 mb-6 relative">Send a Message</h3>
                                <div className="grid sm:grid-cols-2 gap-5 mb-5 relative">
                                    <div>
                                        <label htmlFor="contact-name" className="block text-sm font-medium text-dark-200 mb-2">Name</label>
                                        <input
                                            type="text" id="contact-name" name="name" value={formState.name} onChange={handleChange} required
                                            className={inputClasses}
                                            placeholder="Your name"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="contact-email" className="block text-sm font-medium text-dark-200 mb-2">Email</label>
                                        <input
                                            type="email" id="contact-email" name="email" value={formState.email} onChange={handleChange} required
                                            className={inputClasses}
                                            placeholder="you@example.com"
                                        />
                                    </div>
                                </div>
                                <div className="mb-6 relative">
                                    <label htmlFor="contact-message" className="block text-sm font-medium text-dark-200 mb-2">Message</label>
                                    <textarea
                                        id="contact-message" name="message" value={formState.message} onChange={handleChange} required rows={6}
                                        className={`${inputClasses} resize-none`}
                                        placeholder="Tell me about your project or idea..."
                                    />
                                </div>
                                <motion.button
                                    type="submit" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
                                    className="btn-neon relative"
                                >
                                    <span className="relative z-10 flex items-center gap-2">
                                        {submitted ? (
                                            <><Icons.check className="w-4 h-4" /> Message Sent!</>
                                        ) : (
                                            <><Icons.send className="w-4 h-4" /> Send Message</>
                                        )}
                                    </span>
                                </motion.button>
                            </form>
                        </ScrollReveal>

                        {/* Sidebar */}
                        <ScrollReveal className="lg:col-span-2" delay={0.15}>
                            <div className="space-y-5">
                                {/* Direct Contact */}
                                <div className="glass rounded-2xl p-6 glass-hover">
                                    <h3 className="text-sm font-semibold text-dark-200 uppercase tracking-wider mb-4">Reach Out Directly</h3>
                                    <a href={`mailto:${personalInfo.email}`} className="flex items-center gap-3 text-dark-200 hover:text-accent transition-colors group">
                                        <div className="p-2.5 rounded-xl bg-accent-dim border border-accent/10 group-hover:bg-accent group-hover:text-dark-950 text-accent transition-all duration-300">
                                            <Icons.email className="w-5 h-5" />
                                        </div>
                                        <span className="text-sm font-medium">{personalInfo.email}</span>
                                    </a>
                                    {personalInfo.phone && (
                                        <a href={`tel:${personalInfo.phone}`} className="flex items-center gap-3 text-dark-200 hover:text-accent transition-colors group mt-4">
                                            <div className="p-2.5 rounded-xl bg-accent-dim border border-accent/10 group-hover:bg-accent group-hover:text-dark-950 text-accent transition-all duration-300">
                                                <Icons.send className="w-5 h-5" />
                                            </div>
                                            <span className="text-sm font-medium">{personalInfo.phone}</span>
                                        </a>
                                    )}
                                </div>

                                {/* Social Links */}
                                <div className="glass rounded-2xl p-6 glass-hover">
                                    <h3 className="text-sm font-semibold text-dark-200 uppercase tracking-wider mb-4">Connect With Me</h3>
                                    <div className="space-y-3">
                                        {socialLinks.map((link) => {
                                            const IconComponent = Icons[link.icon];
                                            return (
                                                <a key={link.name} href={link.url} target={link.icon !== "email" ? "_blank" : undefined} rel={link.icon !== "email" ? "noopener noreferrer" : undefined}
                                                    className="flex items-center gap-3 text-dark-300 hover:text-accent transition-colors group"
                                                >
                                                    <div className="p-2 rounded-lg bg-dark-800/50 border border-border group-hover:border-accent/20 transition-colors">
                                                        {IconComponent && <IconComponent className="w-4 h-4" />}
                                                    </div>
                                                    <span className="text-sm font-medium">{link.name}</span>
                                                    <Icons.externalLink className="w-3 h-3 ml-auto opacity-0 group-hover:opacity-50 transition-opacity" />
                                                </a>
                                            );
                                        })}
                                    </div>
                                </div>

                                {/* Availability */}
                                <div className="glass rounded-2xl p-6 glass-hover">
                                    <div className="flex items-center gap-2 mb-2">
                                        <span className="relative flex h-2.5 w-2.5">
                                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-neon-cyan opacity-75" />
                                            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-neon-cyan" />
                                        </span>
                                        <h3 className="text-sm font-semibold text-dark-50">Currently Available</h3>
                                    </div>
                                    <p className="text-xs text-dark-400 leading-relaxed">
                                        Open to full-time roles, freelance projects, and collaboration opportunities.
                                    </p>
                                </div>
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </section>
        </div>
    );
}
