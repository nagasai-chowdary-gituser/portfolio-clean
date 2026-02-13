import { aboutText, skills, personalInfo } from "../data/portfolio";
import SectionHeading from "../components/SectionHeading";
import ScrollReveal from "../components/ScrollReveal";

/**
 * Skill badge component with subtle hover effect
 */
function SkillBadge({ name, delay = 0 }) {
    return (
        <ScrollReveal delay={delay}>
            <span className="inline-flex items-center px-3.5 py-2 text-sm font-medium rounded-xl bg-white text-navy-600 border border-surface-200/80 shadow-soft hover:shadow-card hover:border-accent/20 hover:text-accent transition-all duration-200 cursor-default">
                {name}
            </span>
        </ScrollReveal>
    );
}

/**
 * Stat counter card
 */
function StatCard({ label, value, delay = 0 }) {
    return (
        <ScrollReveal delay={delay}>
            <div className="glass rounded-2xl p-5 text-center shadow-card hover:shadow-card-hover transition-shadow duration-300">
                <div className="text-2xl md:text-3xl font-bold text-navy-800">{value}</div>
                <div className="mt-1 text-xs font-medium text-navy-400 uppercase tracking-wider">{label}</div>
            </div>
        </ScrollReveal>
    );
}

export default function About() {
    const skillCategories = [
        { label: "Languages", items: skills.languages },
        { label: "Frameworks", items: skills.frameworks },
        { label: "AI / ML", items: skills.aiml },
        { label: "Backend", items: skills.backend },
        { label: "DevOps", items: skills.devops },
    ];

    return (
        <section id="about" className="section-padding relative">
            <div className="max-w-6xl mx-auto px-6">
                <SectionHeading
                    label="About"
                    title="Engineering AI-Powered Solutions"
                    subtitle="A blend of deep technical expertise and product-minded engineering."
                />

                {/* Bio + Stats Grid */}
                <div className="grid lg:grid-cols-5 gap-10 lg:gap-16 items-start">
                    {/* Bio */}
                    <ScrollReveal className="lg:col-span-3">
                        <div className="glass rounded-2xl p-6 md:p-8 shadow-card">
                            <div className="prose prose-navy max-w-none">
                                {aboutText.story.split("\n\n").map((paragraph, i) => (
                                    <p key={i} className="text-navy-600 leading-relaxed text-[0.95rem] mb-4 last:mb-0">
                                        {paragraph.trim()}
                                    </p>
                                ))}
                            </div>
                        </div>
                    </ScrollReveal>

                    {/* Stats */}
                    <div className="lg:col-span-2 grid grid-cols-2 gap-4">
                        {aboutText.highlights.map((stat, i) => (
                            <StatCard
                                key={stat.label}
                                label={stat.label}
                                value={stat.value}
                                delay={i * 0.08}
                            />
                        ))}
                    </div>
                </div>

                {/* Skills Grid */}
                <div className="mt-16">
                    <ScrollReveal>
                        <h3 className="text-lg font-semibold text-navy-700 mb-8 text-center">
                            Skills & Technologies
                        </h3>
                    </ScrollReveal>

                    <div className="space-y-6">
                        {skillCategories.map((category) => (
                            <div key={category.label}>
                                <ScrollReveal>
                                    <span className="text-xs font-semibold uppercase tracking-[0.15em] text-navy-300 mb-3 block">
                                        {category.label}
                                    </span>
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
            </div>
        </section>
    );
}
