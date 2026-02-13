import { skills } from "../data/portfolio";
import SectionHeading from "../components/SectionHeading";
import ScrollReveal from "../components/ScrollReveal";

/**
 * Tech stack visual badges organized by category
 * Uses a clean, modern badge style reminiscent of Vercel/Linear
 */

const techCategories = [
    {
        title: "Languages",
        items: skills.languages,
        gradient: "from-blue-500 to-indigo-600",
    },
    {
        title: "Frameworks",
        items: skills.frameworks,
        gradient: "from-violet-500 to-purple-600",
    },
    {
        title: "AI / Machine Learning",
        items: skills.aiml,
        gradient: "from-emerald-500 to-teal-600",
    },
    {
        title: "Backend & Databases",
        items: skills.backend,
        gradient: "from-amber-500 to-orange-600",
    },
    {
        title: "DevOps & Cloud",
        items: skills.devops,
        gradient: "from-rose-500 to-pink-600",
    },
];

function TechCategory({ category, index }) {
    return (
        <ScrollReveal delay={index * 0.08}>
            <div className="glass rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-shadow duration-300 h-full">
                {/* Category header with gradient dot */}
                <div className="flex items-center gap-3 mb-4">
                    <div className={`w-2.5 h-2.5 rounded-full bg-linear-to-br ${category.gradient}`} />
                    <h3 className="text-sm font-semibold text-navy-700 uppercase tracking-wider">
                        {category.title}
                    </h3>
                </div>

                {/* Tech badges */}
                <div className="flex flex-wrap gap-2">
                    {category.items.map((tech) => (
                        <div
                            key={tech}
                            className="group relative px-3 py-1.5 text-sm font-medium text-navy-600 bg-surface-50 border border-surface-200/80 rounded-lg hover:border-accent/30 hover:text-accent hover:bg-accent-muted/20 transition-all duration-200 cursor-default"
                        >
                            {tech}
                        </div>
                    ))}
                </div>
            </div>
        </ScrollReveal>
    );
}

export default function TechStack() {
    return (
        <section id="tech" className="section-padding relative">
            <div className="max-w-6xl mx-auto px-6">
                <SectionHeading
                    label="Tech Stack"
                    title="Tools I Work With"
                    subtitle="The technologies and frameworks I use to build production systems."
                />

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
                    {techCategories.map((category, index) => (
                        <TechCategory key={category.title} category={category} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
}
