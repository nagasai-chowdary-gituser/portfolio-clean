import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { skills } from "../data/portfolio";
import { Icons } from "../components/Icons";
import SectionHeading from "../components/SectionHeading";
import ScrollReveal from "../components/ScrollReveal";

/* ───────── Tech category data with neon gradient colors ───────── */
const techCategories = [
    {
        title: "Languages",
        items: skills.languages,
        gradient: "from-[#6dbfb8] to-[#5a8cc8]",
        glowColor: "#6dbfb8",
        description: "Core programming languages for building robust systems.",
    },
    {
        title: "Frameworks",
        items: skills.frameworks,
        gradient: "from-[#5a8cc8] to-[#9b7ec8]",
        glowColor: "#5a8cc8",
        description: "Modern frameworks for efficient full-stack development.",
    },
    {
        title: "AI / Machine Learning",
        items: skills.aiml,
        gradient: "from-[#9b7ec8] to-[#d9718f]",
        glowColor: "#9b7ec8",
        description: "AI/ML tools for building intelligent, production-grade systems.",
    },
    {
        title: "Backend & Databases",
        items: skills.backend,
        gradient: "from-[#d4956a] to-[#d9718f]",
        glowColor: "#d4956a",
        description: "Backend services, databases, and API infrastructure.",
    },
    {
        title: "DevOps & Cloud",
        items: skills.devops,
        gradient: "from-[#d9718f] to-[#6dbfb8]",
        glowColor: "#d9718f",
        description: "Cloud, CI/CD, and infrastructure automation.",
    },
];

function TechCategory({ category, index }) {
    return (
        <ScrollReveal delay={index * 0.1}>
            <motion.div
                whileHover={{ y: -6 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className="glass rounded-2xl p-6 md:p-8 card-3d h-full glass-hover relative overflow-hidden"
            >
                {/* Subtle glow in corner */}
                <div
                    className="absolute -top-10 -right-10 w-32 h-32 rounded-full blur-[60px] opacity-20"
                    style={{ background: category.glowColor }}
                />

                <div className="relative">
                    <div className="flex items-center gap-3 mb-3">
                        <div className={`w-3 h-3 rounded-full bg-linear-to-br ${category.gradient}`} />
                        <h3 className="text-base font-semibold text-dark-50">{category.title}</h3>
                    </div>
                    <p className="text-xs text-dark-400 mb-6 leading-relaxed">{category.description}</p>
                    <div className="flex flex-wrap gap-2">
                        {category.items.map((tech) => (
                            <span key={tech} className="tech-badge text-sm py-2 px-3.5">
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>
            </motion.div>
        </ScrollReveal>
    );
}

/* ═══════════════ TECH STACK PAGE ═══════════════ */
export default function TechPage() {
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
                        label="Tech Stack"
                        title="Tools I Work With"
                        subtitle="The technologies and frameworks I rely on to build production-grade systems."
                        center={false}
                    />
                </div>
            </section>

            {/* Tech Grid */}
            <section className="section-padding pt-2 relative">
                <div className="absolute inset-0 dot-pattern opacity-20 pointer-events-none" aria-hidden="true" />
                <div className="relative max-w-6xl mx-auto px-6">
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                        {techCategories.map((category, index) => (
                            <TechCategory key={category.title} category={category} index={index} />
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <div className="section-divider" />
            <section className="section-padding">
                <div className="max-w-3xl mx-auto px-6 text-center">
                    <ScrollReveal>
                        <h2 className="text-2xl md:text-3xl font-bold text-dark-50">
                            See these tools in <span className="gradient-text-static">action</span>
                        </h2>
                        <p className="mt-3 text-dark-300 text-sm md:text-base">
                            Browse my projects to see how I combine these technologies to solve real-world problems.
                        </p>
                        <div className="mt-8 flex items-center justify-center gap-4">
                            <Link to="/projects" className="btn-neon">
                                <span className="relative z-10 flex items-center gap-2">
                                    View Projects
                                    <Icons.arrowDown className="w-4 h-4 -rotate-90" />
                                </span>
                            </Link>
                            <Link to="/about" className="btn-outline">
                                About Me
                            </Link>
                        </div>
                    </ScrollReveal>
                </div>
            </section>
        </div>
    );
}
