import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { aboutText, skills, capabilities, personalInfo } from "../data/portfolio";
import { Icons } from "../components/Icons";
import SectionHeading from "../components/SectionHeading";
import ScrollReveal from "../components/ScrollReveal";

/* ───────── Skill Badge ───────── */
function SkillBadge({ name, delay = 0 }) {
    return (
        <ScrollReveal delay={delay}>
            <span className="tech-badge text-sm py-2 px-4 hover:scale-105 transition-transform duration-200 cursor-default">
                {name}
            </span>
        </ScrollReveal>
    );
}

/* ───────── Stat Card ───────── */
function StatCard({ label, value, delay = 0 }) {
    return (
        <ScrollReveal delay={delay}>
            <div className="glass glass-hover rounded-2xl p-6 text-center card-3d">
                <div className="text-3xl md:text-4xl font-bold gradient-text-static stat-glow">{value}</div>
                <div className="mt-2 text-xs font-medium text-dark-400 uppercase tracking-wider">{label}</div>
            </div>
        </ScrollReveal>
    );
}

/* ───────── Capability Card ───────── */
function CapabilityCard({ capability, index }) {
    const IconComponent = Icons[capability.icon];
    const colors = [
        { from: "#6dbfb8", to: "#5a8cc8" },
        { from: "#5a8cc8", to: "#9b7ec8" },
        { from: "#9b7ec8", to: "#d9718f" },
        { from: "#d9718f", to: "#d4956a" },
        { from: "#d4956a", to: "#6dbfb8" },
        { from: "#6dbfb8", to: "#9b7ec8" },
    ];
    const color = colors[index % colors.length];

    return (
        <ScrollReveal delay={index * 0.08}>
            <motion.div
                whileHover={{ y: -6 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className="group glass rounded-2xl p-6 card-3d h-full glass-hover"
            >
                <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 text-white transition-all duration-300"
                    style={{ background: `linear-gradient(135deg, ${color.from}, ${color.to})` }}
                >
                    {IconComponent && <IconComponent className="w-5 h-5" />}
                </div>
                <h3 className="text-base font-semibold text-dark-50 mb-2 group-hover:text-accent transition-colors">{capability.title}</h3>
                <p className="text-sm text-dark-300 leading-relaxed">{capability.description}</p>
            </motion.div>
        </ScrollReveal>
    );
}

/* ═══════════════ ABOUT PAGE ═══════════════ */
export default function AboutPage() {
    const skillCategories = [
        { label: "Languages", items: skills.languages, color: "#6dbfb8" },
        { label: "Frameworks", items: skills.frameworks, color: "#5a8cc8" },
        { label: "AI / ML", items: skills.aiml, color: "#9b7ec8" },
        { label: "Backend", items: skills.backend, color: "#d4956a" },
        { label: "DevOps", items: skills.devops, color: "#d9718f" },
    ];

    return (
        <div className="pt-24">
            {/* ── Page Header ── */}
            <section className="section-padding pb-0">
                <div className="max-w-6xl mx-auto px-6">
                    <ScrollReveal>
                        <Link to="/" className="inline-flex items-center gap-1.5 text-sm text-dark-400 hover:text-accent transition-colors mb-6">
                            <Icons.arrowDown className="w-3.5 h-3.5 rotate-90" />
                            Home
                        </Link>
                    </ScrollReveal>
                    <SectionHeading
                        label="About Me"
                        title="The Engineer Behind the Code"
                        subtitle="A blend of deep technical expertise, product thinking, and relentless drive to ship."
                        center={false}
                    />
                </div>
            </section>

            {/* ── Bio + Stats ── */}
            <section className="section-padding pt-4">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="grid lg:grid-cols-5 gap-10 lg:gap-16 items-start">
                        <ScrollReveal className="lg:col-span-3">
                            <div className="glass rounded-2xl p-6 md:p-8 relative overflow-hidden">
                                {/* Decorative gradient */}
                                <div className="absolute -top-20 -left-20 w-40 h-40 rounded-full bg-neon-cyan/6 blur-[60px]" />
                                {aboutText.story.split("\n\n").map((paragraph, i) => (
                                    <p key={i} className="relative text-dark-200 leading-relaxed text-[0.95rem] mb-4 last:mb-0">
                                        {paragraph.trim()}
                                    </p>
                                ))}
                            </div>
                        </ScrollReveal>

                        <div className="lg:col-span-2 grid grid-cols-2 gap-4">
                            {aboutText.highlights.map((stat, i) => (
                                <StatCard key={stat.label} label={stat.label} value={stat.value} delay={i * 0.08} />
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ── Skills ── */}
            <div className="section-divider" />
            <section className="section-padding">
                <div className="max-w-6xl mx-auto px-6">
                    <SectionHeading
                        label="Skills"
                        title="Technologies & Tools"
                        subtitle="The toolkit I use to turn ideas into production systems."
                    />
                    <div className="space-y-10">
                        {skillCategories.map((category) => (
                            <div key={category.label}>
                                <ScrollReveal>
                                    <div className="flex items-center gap-2 mb-4">
                                        <div className="w-2 h-2 rounded-full" style={{ background: category.color }} />
                                        <span className="text-xs font-semibold uppercase tracking-[0.15em] text-dark-300">
                                            {category.label}
                                        </span>
                                    </div>
                                </ScrollReveal>
                                <div className="flex flex-wrap gap-2.5">
                                    {category.items.map((skill, i) => (
                                        <SkillBadge key={skill} name={skill} delay={i * 0.03} />
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Capabilities ── */}
            <div className="section-divider" />
            <section className="section-padding">
                <div className="max-w-6xl mx-auto px-6">
                    <SectionHeading
                        label="Capabilities"
                        title="What I Bring to the Table"
                        subtitle="Business-focused engineering that delivers measurable outcomes."
                    />
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
                        {capabilities.map((cap, index) => (
                            <CapabilityCard key={cap.title} capability={cap} index={index} />
                        ))}
                    </div>
                </div>
            </section>

            {/* ── CTA ── */}
            <div className="section-divider" />
            <section className="section-padding">
                <div className="max-w-3xl mx-auto px-6 text-center">
                    <ScrollReveal>
                        <h2 className="text-2xl md:text-3xl font-bold text-dark-50">
                            Want to see my <span className="gradient-text-static">work</span>?
                        </h2>
                        <p className="mt-3 text-dark-300 text-sm md:text-base">
                            Check out my projects to see how I apply these skills to solve real problems.
                        </p>
                        <div className="mt-8 flex items-center justify-center gap-4">
                            <Link to="/projects" className="btn-neon">
                                <span className="relative z-10 flex items-center gap-2">
                                    View Projects
                                    <Icons.arrowDown className="w-4 h-4 -rotate-90" />
                                </span>
                            </Link>
                            <Link to="/contact" className="btn-outline">
                                Contact Me
                            </Link>
                        </div>
                    </ScrollReveal>
                </div>
            </section>
        </div>
    );
}
