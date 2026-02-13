import { Link } from "react-router-dom";
import { projects } from "../data/portfolio";
import { Icons } from "../components/Icons";
import SectionHeading from "../components/SectionHeading";
import ScrollReveal from "../components/ScrollReveal";
import ProjectCard from "../components/ProjectCard";

/* ═══════════════ PROJECTS LIST PAGE ═══════════════ */
export default function ProjectsPage() {
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
                        label="Projects"
                        title="Shipped & Battle-Tested"
                        subtitle="Production systems solving real problems — not toy demos. Each project is a case study in engineering excellence."
                        center={false}
                    />
                </div>
            </section>

            {/* Projects Grid */}
            <section className="section-padding pt-2 relative">
                <div className="absolute inset-0 dot-pattern opacity-20 pointer-events-none" aria-hidden="true" />
                <div className="relative max-w-6xl mx-auto px-6">
                    <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
                        {projects.map((project, index) => (
                            <ProjectCard key={project.id} project={project} index={index} />
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
                            Like what you <span className="gradient-text-static">see</span>?
                        </h2>
                        <p className="mt-3 text-dark-300 text-sm md:text-base">
                            Let's discuss how I can bring this level of engineering to your next project.
                        </p>
                        <div className="mt-8 flex items-center justify-center gap-4">
                            <Link to="/contact" className="btn-neon">
                                <span className="relative z-10 flex items-center gap-2">
                                    <Icons.send className="w-4 h-4" />
                                    Start a Conversation
                                </span>
                            </Link>
                            <Link to="/tech" className="btn-outline">
                                View Tech Stack
                            </Link>
                        </div>
                    </ScrollReveal>
                </div>
            </section>
        </div>
    );
}
