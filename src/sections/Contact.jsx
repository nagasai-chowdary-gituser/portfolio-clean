import { useState } from "react";
import { motion } from "framer-motion";
import { personalInfo, socialLinks } from "../data/portfolio";
import { Icons } from "../components/Icons";
import SectionHeading from "../components/SectionHeading";
import ScrollReveal from "../components/ScrollReveal";

export default function Contact() {
    const [formState, setFormState] = useState({
        name: "",
        email: "",
        message: "",
    });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        setFormState((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // In production, integrate with a service like Formspree, EmailJS, etc.
        // For now, open mailto as fallback
        const subject = encodeURIComponent(`Portfolio Contact from ${formState.name}`);
        const body = encodeURIComponent(
            `Name: ${formState.name}\nEmail: ${formState.email}\n\n${formState.message}`
        );
        window.open(`mailto:${personalInfo.email}?subject=${subject}&body=${body}`);
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 3000);
    };

    return (
        <section id="contact" className="section-padding bg-surface-100/50">
            <div className="max-w-6xl mx-auto px-6">
                <SectionHeading
                    label="Contact"
                    title="Let's Build Something Great"
                    subtitle="Have a project in mind or want to collaborate? I'd love to hear from you."
                />

                <div className="grid lg:grid-cols-5 gap-10 lg:gap-16">
                    {/* Contact Form */}
                    <ScrollReveal className="lg:col-span-3">
                        <form onSubmit={handleSubmit} className="glass rounded-2xl p-6 md:p-8 shadow-card">
                            <div className="grid sm:grid-cols-2 gap-5 mb-5">
                                <div>
                                    <label htmlFor="contact-name" className="block text-sm font-medium text-navy-600 mb-1.5">
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        id="contact-name"
                                        name="name"
                                        value={formState.name}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-2.5 text-sm rounded-xl border border-surface-300 bg-white text-navy-800 placeholder:text-navy-300 focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-all"
                                        placeholder="Your name"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="contact-email" className="block text-sm font-medium text-navy-600 mb-1.5">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        id="contact-email"
                                        name="email"
                                        value={formState.email}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-2.5 text-sm rounded-xl border border-surface-300 bg-white text-navy-800 placeholder:text-navy-300 focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-all"
                                        placeholder="you@example.com"
                                    />
                                </div>
                            </div>
                            <div className="mb-5">
                                <label htmlFor="contact-message" className="block text-sm font-medium text-navy-600 mb-1.5">
                                    Message
                                </label>
                                <textarea
                                    id="contact-message"
                                    name="message"
                                    value={formState.message}
                                    onChange={handleChange}
                                    required
                                    rows={5}
                                    className="w-full px-4 py-2.5 text-sm rounded-xl border border-surface-300 bg-white text-navy-800 placeholder:text-navy-300 focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-all resize-none"
                                    placeholder="Tell me about your project or idea..."
                                />
                            </div>
                            <motion.button
                                type="submit"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-navy-600 hover:bg-accent rounded-xl transition-colors duration-200 shadow-md"
                            >
                                {submitted ? (
                                    <>
                                        <Icons.check className="w-4 h-4" />
                                        Message Sent!
                                    </>
                                ) : (
                                    <>
                                        <Icons.send className="w-4 h-4" />
                                        Send Message
                                    </>
                                )}
                            </motion.button>
                        </form>
                    </ScrollReveal>

                    {/* Contact Info Sidebar */}
                    <ScrollReveal className="lg:col-span-2" delay={0.15}>
                        <div className="space-y-6">
                            {/* Email Card */}
                            <div className="glass rounded-2xl p-6 shadow-card">
                                <h3 className="text-sm font-semibold text-navy-700 uppercase tracking-wider mb-4">
                                    Reach Out Directly
                                </h3>
                                <a
                                    href={`mailto:${personalInfo.email}`}
                                    className="flex items-center gap-3 text-navy-600 hover:text-accent transition-colors group"
                                >
                                    <div className="p-2.5 rounded-xl bg-accent-muted group-hover:bg-accent group-hover:text-white text-accent transition-all">
                                        <Icons.email className="w-5 h-5" />
                                    </div>
                                    <span className="text-sm font-medium">{personalInfo.email}</span>
                                </a>
                            </div>

                            {/* Social Links Card */}
                            <div className="glass rounded-2xl p-6 shadow-card">
                                <h3 className="text-sm font-semibold text-navy-700 uppercase tracking-wider mb-4">
                                    Connect With Me
                                </h3>
                                <div className="space-y-3">
                                    {socialLinks.map((link) => {
                                        const IconComponent = Icons[link.icon];
                                        return (
                                            <a
                                                key={link.name}
                                                href={link.url}
                                                target={link.icon !== "email" ? "_blank" : undefined}
                                                rel={link.icon !== "email" ? "noopener noreferrer" : undefined}
                                                className="flex items-center gap-3 text-navy-500 hover:text-accent transition-colors group"
                                            >
                                                <div className="p-2 rounded-lg bg-surface-100 group-hover:bg-accent-muted transition-colors">
                                                    {IconComponent && <IconComponent className="w-4 h-4" />}
                                                </div>
                                                <span className="text-sm font-medium">{link.name}</span>
                                                <Icons.externalLink className="w-3 h-3 ml-auto opacity-0 group-hover:opacity-50 transition-opacity" />
                                            </a>
                                        );
                                    })}
                                </div>
                            </div>

                            {/* Resume CTA */}
                            {personalInfo.resumeLink && personalInfo.resumeLink !== "#" && (
                                <a
                                    href={personalInfo.resumeLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-3 glass rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-shadow group"
                                >
                                    <div className="p-2.5 rounded-xl bg-accent-muted group-hover:bg-accent group-hover:text-white text-accent transition-all">
                                        <Icons.externalLink className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <div className="text-sm font-semibold text-navy-700">Download Resume</div>
                                        <div className="text-xs text-navy-400">View my full CV</div>
                                    </div>
                                </a>
                            )}
                        </div>
                    </ScrollReveal>
                </div>
            </div>
        </section>
    );
}
