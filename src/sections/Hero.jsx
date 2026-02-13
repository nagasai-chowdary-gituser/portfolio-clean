import { motion } from "framer-motion";
import { personalInfo } from "../data/portfolio";
import { Icons } from "../components/Icons";

/**
 * Animated SVG mesh background for the hero section.
 * Pure SVG + CSS animation — no Three.js or heavy libraries.
 */
function HeroBackground() {
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
            {/* Gradient orbs */}
            <div className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-accent/[0.04] blur-3xl animate-pulse-soft" />
            <div className="absolute -bottom-40 -left-40 w-[600px] h-[600px] rounded-full bg-navy-600/[0.03] blur-3xl animate-pulse-soft" style={{ animationDelay: "2s" }} />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-accent-light/[0.03] blur-3xl animate-pulse-soft" style={{ animationDelay: "4s" }} />

            {/* SVG Grid Pattern */}
            <svg className="absolute inset-0 w-full h-full opacity-[0.04]" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <pattern id="hero-grid" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
                        <path d="M 60 0 L 0 0 0 60" fill="none" stroke="currentColor" strokeWidth="0.8" className="text-navy-600" />
                    </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#hero-grid)" />
            </svg>

            {/* Animated SVG floating nodes */}
            <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
                {[
                    { cx: "15%", cy: "25%", r: 3, delay: 0 },
                    { cx: "85%", cy: "20%", r: 2, delay: 1 },
                    { cx: "70%", cy: "75%", r: 3.5, delay: 2 },
                    { cx: "25%", cy: "70%", r: 2.5, delay: 3 },
                    { cx: "50%", cy: "40%", r: 2, delay: 1.5 },
                    { cx: "90%", cy: "50%", r: 1.5, delay: 0.5 },
                    { cx: "10%", cy: "55%", r: 2, delay: 2.5 },
                ].map((node, i) => (
                    <circle
                        key={i}
                        cx={node.cx}
                        cy={node.cy}
                        r={node.r}
                        fill="#2563eb"
                        opacity="0.12"
                        className="animate-float"
                        style={{ animationDelay: `${node.delay}s` }}
                    />
                ))}
                {/* Connecting lines */}
                <line x1="15%" y1="25%" x2="50%" y2="40%" stroke="#2563eb" strokeWidth="0.5" opacity="0.06" />
                <line x1="50%" y1="40%" x2="85%" y2="20%" stroke="#2563eb" strokeWidth="0.5" opacity="0.06" />
                <line x1="50%" y1="40%" x2="70%" y2="75%" stroke="#2563eb" strokeWidth="0.5" opacity="0.06" />
                <line x1="25%" y1="70%" x2="50%" y2="40%" stroke="#2563eb" strokeWidth="0.5" opacity="0.06" />
            </svg>
        </div>
    );
}

export default function Hero() {
    const containerVariants = {
        hidden: {},
        visible: {
            transition: { staggerChildren: 0.12, delayChildren: 0.2 },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] },
        },
    };

    return (
        <section
            id="hero"
            className="relative min-h-screen flex items-center justify-center overflow-hidden"
        >
            <HeroBackground />

            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="relative z-10 max-w-4xl mx-auto px-6 text-center py-32"
            >
                {/* Status badge */}
                <motion.div variants={itemVariants}>
                    <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-medium bg-accent-muted/60 text-accent border border-accent/10">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                        Available for opportunities
                    </span>
                </motion.div>

                {/* Name */}
                <motion.h1
                    variants={itemVariants}
                    className="mt-8 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-navy-800 leading-[1.08] tracking-tight"
                >
                    {personalInfo.name}
                </motion.h1>

                {/* Title */}
                <motion.p
                    variants={itemVariants}
                    className="mt-4 text-lg md:text-xl font-medium text-accent"
                >
                    {personalInfo.title}
                </motion.p>

                {/* Tagline */}
                <motion.p
                    variants={itemVariants}
                    className="mt-4 text-base md:text-lg text-navy-400 max-w-xl mx-auto leading-relaxed"
                >
                    {personalInfo.tagline}
                </motion.p>

                {/* CTAs */}
                <motion.div
                    variants={itemVariants}
                    className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
                >
                    <a
                        href="#projects"
                        className="inline-flex items-center gap-2.5 px-6 py-3 text-sm font-semibold text-white bg-navy-600 hover:bg-accent rounded-xl transition-all duration-200 shadow-md hover:shadow-lg"
                    >
                        View My Work
                        <Icons.arrowDown className="w-4 h-4" />
                    </a>
                    <a
                        href="#contact"
                        className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-navy-600 bg-white hover:bg-surface-100 rounded-xl border border-surface-300 transition-all duration-200 shadow-sm"
                    >
                        Get in Touch
                    </a>
                </motion.div>

                {/* Social Links */}
                <motion.div
                    variants={itemVariants}
                    className="mt-10 flex items-center justify-center gap-4"
                >
                    <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-xl text-navy-300 hover:text-navy-700 hover:bg-surface-100 transition-all" aria-label="GitHub">
                        <Icons.github className="w-5 h-5" />
                    </a>
                    <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-xl text-navy-300 hover:text-navy-700 hover:bg-surface-100 transition-all" aria-label="LinkedIn">
                        <Icons.linkedin className="w-5 h-5" />
                    </a>
                    <a href={`mailto:${personalInfo.email}`} className="p-2.5 rounded-xl text-navy-300 hover:text-navy-700 hover:bg-surface-100 transition-all" aria-label="Email">
                        <Icons.email className="w-5 h-5" />
                    </a>
                </motion.div>
            </motion.div>

            {/* Scroll indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 0.8 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2"
            >
                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                >
                    <Icons.arrowDown className="w-5 h-5 text-navy-300" />
                </motion.div>
            </motion.div>
        </section>
    );
}
