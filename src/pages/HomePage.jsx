import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { personalInfo, projects, capabilities, aboutText } from "../data/portfolio";
import { Icons } from "../components/Icons";
import ScrollReveal from "../components/ScrollReveal";
import profilePhoto from "../data/my profile.jpeg";

/* ───────── Typing Effect ───────── */
function useTypingEffect(texts, typingSpeed = 80, deletingSpeed = 40, pauseDuration = 2000) {
    const [displayText, setDisplayText] = useState("");
    const [textIndex, setTextIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const currentText = texts[textIndex];
        let timeout;
        if (!isDeleting && displayText === currentText) {
            timeout = setTimeout(() => setIsDeleting(true), pauseDuration);
        } else if (isDeleting && displayText === "") {
            setIsDeleting(false);
            setTextIndex((prev) => (prev + 1) % texts.length);
        } else {
            timeout = setTimeout(() => {
                setDisplayText(
                    isDeleting
                        ? currentText.substring(0, displayText.length - 1)
                        : currentText.substring(0, displayText.length + 1)
                );
            }, isDeleting ? deletingSpeed : typingSpeed);
        }
        return () => clearTimeout(timeout);
    }, [displayText, isDeleting, textIndex, texts, typingSpeed, deletingSpeed, pauseDuration]);

    return displayText;
}

/* ───────── Animated Counter ───────── */
function AnimatedCounter({ value, label, delay = 0 }) {
    const numericValue = parseInt(value);
    const suffix = value.replace(/[0-9]/g, "");
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const hasAnimated = useRef(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !hasAnimated.current) {
                    hasAnimated.current = true;
                    let start = 0;
                    const end = numericValue;
                    const duration = 2000;
                    const stepTime = Math.max(duration / end, 20);
                    const timer = setInterval(() => {
                        start += 1;
                        setCount(start);
                        if (start >= end) clearInterval(timer);
                    }, stepTime);
                }
            },
            { threshold: 0.5 }
        );
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, [numericValue]);

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay, duration: 0.5 }}
            className="text-center"
        >
            <div className="text-3xl md:text-4xl font-bold gradient-text-static stat-glow">
                {count}{suffix}
            </div>
            <div className="mt-1.5 text-xs font-medium text-dark-400 uppercase tracking-wider">{label}</div>
        </motion.div>
    );
}

/* ───────── Featured Project Card ───────── */
function FeaturedProjectCard({ project, index }) {
    return (
        <ScrollReveal delay={index * 0.12}>
            <Link to="/projects" className="block h-full">
                <motion.div
                    whileHover={{ y: -8, scale: 1.02 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className="group relative glass rounded-2xl overflow-hidden card-3d h-full"
                >
                    <div className="h-1 w-full" style={{
                        background: `linear-gradient(90deg, ${project.color}, ${project.color}44, transparent)`
                    }} />
                    <div
                        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"
                        style={{ background: `radial-gradient(circle at 50% 0%, ${project.color}12, transparent 70%)` }}
                    />
                    <div className="relative p-6">
                        <span className="absolute top-4 right-4 text-[10px] font-mono text-dark-500 bg-dark-800/50 px-2 py-0.5 rounded-md">
                            0{project.id}
                        </span>
                        <h3 className="text-lg font-bold text-dark-50 group-hover:text-accent transition-colors duration-300 pr-12">
                            {project.name}
                        </h3>
                        <p className="text-sm text-dark-300 mt-2 leading-relaxed line-clamp-2">{project.subtitle}</p>
                        <div className="flex flex-wrap gap-1.5 mt-4">
                            {project.stack.slice(0, 4).map((tech) => (
                                <span key={tech} className="tech-badge text-[11px]">{tech}</span>
                            ))}
                        </div>
                        <div className="mt-4 flex items-center gap-2 text-xs font-medium text-dark-400 group-hover:text-accent transition-colors">
                            <span>View Details</span>
                            <Icons.arrowDown className="w-3 h-3 -rotate-90 group-hover:translate-x-1 transition-transform" />
                        </div>
                    </div>
                </motion.div>
            </Link>
        </ScrollReveal>
    );
}

/* ───────── Capability Mini Card ───────── */
function CapabilityMini({ capability, index }) {
    const IconComponent = Icons[capability.icon];
    const colors = [
        { bg: "rgba(109,191,184,0.10)", text: "#6dbfb8", border: "rgba(109,191,184,0.20)" },
        { bg: "rgba(90,140,200,0.10)", text: "#5a8cc8", border: "rgba(90,140,200,0.20)" },
        { bg: "rgba(155,126,200,0.10)", text: "#9b7ec8", border: "rgba(155,126,200,0.20)" },
        { bg: "rgba(217,113,143,0.10)", text: "#d9718f", border: "rgba(217,113,143,0.20)" },
        { bg: "rgba(212,149,106,0.10)", text: "#d4956a", border: "rgba(212,149,106,0.20)" },
        { bg: "rgba(109,191,184,0.10)", text: "#6dbfb8", border: "rgba(109,191,184,0.20)" },
    ];
    const color = colors[index % colors.length];

    return (
        <ScrollReveal delay={index * 0.08}>
            <motion.div whileHover={{ y: -4 }} className="flex items-start gap-4 p-5 rounded-xl glass glass-hover transition-all duration-300">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                    style={{ background: color.bg, border: `1px solid ${color.border}` }}>
                    {IconComponent && <IconComponent className="w-5 h-5" style={{ color: color.text }} />}
                </div>
                <div>
                    <h4 className="text-sm font-semibold text-dark-50">{capability.title}</h4>
                    <p className="text-xs text-dark-300 mt-1 leading-relaxed">{capability.description}</p>
                </div>
            </motion.div>
        </ScrollReveal>
    );
}

/* ═══════════════ HOME PAGE ═══════════════ */
export default function HomePage() {
    const typingText = useTypingEffect([
        "AI Engineer",
        "Full-Stack Developer",
        "System Architect",
        "ML Engineer",
        "Problem Solver",
    ]);

    const containerVariants = {
        hidden: {},
        visible: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
    };
    const itemVariants = {
        hidden: { opacity: 0, y: 25 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] } },
    };

    return (
        <>
            {/* ── HERO ── */}
            <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
                {/* Ambient glow orbs */}
                <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
                    <div className="absolute top-[10%] left-[15%] w-125 h-125 rounded-full bg-neon-cyan/6 blur-[120px] animate-pulse-soft" />
                    <div className="absolute bottom-[10%] right-[10%] w-150 h-150 rounded-full bg-neon-blue/7 blur-[120px] animate-pulse-soft" style={{ animationDelay: "2s" }} />
                    <div className="absolute top-[40%] right-[30%] w-100 h-100 rounded-full bg-neon-purple/4 blur-[100px] animate-pulse-soft" style={{ animationDelay: "4s" }} />
                </div>

                {/* Content */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="relative z-10 max-w-4xl mx-auto px-6 text-center py-20"
                >
                    {/* Status badge */}
                    <motion.div variants={itemVariants}>
                        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-medium glass border border-neon-cyan/20 text-neon-cyan">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-neon-cyan opacity-75" />
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-neon-cyan" />
                            </span>
                            Available for opportunities
                        </span>
                    </motion.div>

                    {/* Photo with spinning conic-gradient ring */}
                    <motion.div variants={itemVariants} className="mt-8 flex justify-center">
                        <div className="photo-ring">
                            <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden z-10">
                                <img src={profilePhoto} alt={personalInfo.name} className="w-full h-full object-cover" />
                            </div>
                        </div>
                    </motion.div>

                    {/* Name — clean white with subtle glow */}
                    <motion.h1 variants={itemVariants} className="mt-6 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.08] tracking-tight hero-name">
                        {personalInfo.name}
                    </motion.h1>

                    {/* Typing role — accent colored */}
                    <motion.div variants={itemVariants} className="mt-4 h-8 flex items-center justify-center">
                        <span className="text-lg md:text-xl font-semibold hero-subtitle">
                            {typingText}
                        </span>
                        <span className="animate-typing-blink text-accent ml-0.5 text-lg md:text-xl font-light">|</span>
                    </motion.div>

                    {/* Tagline */}
                    <motion.p variants={itemVariants} className="mt-3 text-sm md:text-base text-dark-300 max-w-lg mx-auto leading-relaxed">
                        {personalInfo.tagline}
                    </motion.p>

                    {/* CTAs */}
                    <motion.div variants={itemVariants} className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
                        <Link to="/projects" className="btn-neon">
                            <span className="relative z-10 flex items-center gap-2">
                                View My Work
                                <Icons.arrowDown className="w-4 h-4 -rotate-90" />
                            </span>
                        </Link>
                        <Link to="/contact" className="btn-outline">
                            Get in Touch
                        </Link>
                    </motion.div>

                    {/* Social Links */}
                    <motion.div variants={itemVariants} className="mt-6 flex items-center justify-center gap-3">
                        {[
                            { href: personalInfo.github, icon: Icons.github, label: "GitHub" },
                            { href: personalInfo.linkedin, icon: Icons.linkedin, label: "LinkedIn" },
                            { href: `mailto:${personalInfo.email}`, icon: Icons.email, label: "Email" },
                        ].map(({ href, icon: Icon, label }) => (
                            <a key={label} href={href}
                                target={label !== "Email" ? "_blank" : undefined}
                                rel={label !== "Email" ? "noopener noreferrer" : undefined}
                                className="p-3 rounded-xl text-dark-400 hover:text-accent glass glass-hover transition-all duration-300"
                                aria-label={label}
                            >
                                <Icon className="w-5 h-5" />
                            </a>
                        ))}
                    </motion.div>
                </motion.div>

                {/* Scroll indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2, duration: 0.8 }}
                    className="absolute bottom-8 left-1/2 -translate-x-1/2"
                >
                    <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}>
                        <div className="w-5 h-8 rounded-full border border-dark-500 flex justify-center pt-1.5">
                            <motion.div
                                animate={{ y: [0, 10, 0], opacity: [1, 0, 1] }}
                                transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                                className="w-1 h-1 rounded-full bg-accent"
                            />
                        </div>
                    </motion.div>
                </motion.div>
            </section>

            {/* ── STATS BAR ── */}
            <div className="section-divider" />
            <section className="py-16 relative">
                <div className="max-w-5xl mx-auto px-6">
                    <div className="glass rounded-2xl p-8 md:p-10">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                            {aboutText.highlights.map((stat, i) => (
                                <AnimatedCounter key={stat.label} value={stat.value} label={stat.label} delay={i * 0.1} />
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ── FEATURED PROJECTS ── */}
            <div className="section-divider" />
            <section className="section-padding relative">
                <div className="relative max-w-6xl mx-auto px-6">
                    <ScrollReveal>
                        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 mb-12">
                            <div>
                                <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-accent mb-2 px-3 py-1 rounded-full bg-accent-dim border border-accent/10">
                                    Featured Work
                                </span>
                                <h2 className="text-3xl md:text-4xl font-bold text-dark-50 leading-tight mt-3">
                                    Recent <span className="gradient-text-static">Projects</span>
                                </h2>
                            </div>
                            <Link to="/projects" className="text-sm font-semibold text-accent hover:text-neon-blue transition-colors inline-flex items-center gap-1.5 group">
                                View all projects
                                <Icons.arrowDown className="w-3.5 h-3.5 -rotate-90 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </div>
                    </ScrollReveal>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {projects.slice(0, 3).map((project, index) => (
                            <FeaturedProjectCard key={project.id} project={project} index={index} />
                        ))}
                    </div>
                </div>
            </section>

            {/* ── CAPABILITIES ── */}
            <div className="section-divider" />
            <section className="section-padding relative">
                <div className="max-w-6xl mx-auto px-6">
                    <ScrollReveal>
                        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 mb-12">
                            <div>
                                <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-accent mb-2 px-3 py-1 rounded-full bg-accent-dim border border-accent/10">
                                    What I Do
                                </span>
                                <h2 className="text-3xl md:text-4xl font-bold text-dark-50 leading-tight mt-3">
                                    Core <span className="gradient-text-static">Capabilities</span>
                                </h2>
                            </div>
                            <Link to="/about" className="text-sm font-semibold text-accent hover:text-neon-blue transition-colors inline-flex items-center gap-1.5 group">
                                Learn more about me
                                <Icons.arrowDown className="w-3.5 h-3.5 -rotate-90 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </div>
                    </ScrollReveal>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {capabilities.map((cap, index) => (
                            <CapabilityMini key={cap.title} capability={cap} index={index} />
                        ))}
                    </div>
                </div>
            </section>

            {/* ── CTA BANNER ── */}
            <div className="section-divider" />
            <section className="section-padding">
                <div className="max-w-4xl mx-auto px-6">
                    <ScrollReveal>
                        <div className="relative glass rounded-3xl p-8 md:p-14 text-center overflow-hidden">
                            <div className="absolute -top-20 -right-20 w-60 h-60 rounded-full bg-neon-cyan/6 blur-[80px]" aria-hidden="true" />
                            <div className="absolute -bottom-20 -left-20 w-60 h-60 rounded-full bg-neon-blue/6 blur-[80px]" aria-hidden="true" />
                            <h2 className="text-2xl md:text-4xl font-bold text-dark-50 relative">
                                Ready to build something{" "}
                                <span className="gradient-text-static">extraordinary</span>?
                            </h2>
                            <p className="mt-4 text-dark-300 max-w-lg mx-auto text-sm md:text-base relative">
                                I'm always looking for exciting projects and collaborations. Let's turn your ideas into production-ready solutions.
                            </p>
                            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 relative">
                                <Link to="/contact" className="btn-neon">
                                    <span className="relative z-10 flex items-center gap-2">
                                        <Icons.send className="w-4 h-4" />
                                        Start a Conversation
                                    </span>
                                </Link>
                                <Link to="/about" className="btn-outline">
                                    Learn More About Me
                                </Link>
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
            </section>
        </>
    );
}
