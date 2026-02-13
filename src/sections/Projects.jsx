import { projects } from "../data/portfolio";
import SectionHeading from "../components/SectionHeading";
import ProjectCard from "../components/ProjectCard";

export default function Projects() {
    return (
        <section id="projects" className="section-padding relative">
            {/* Subtle dot pattern behind projects */}
            <div className="absolute inset-0 dot-pattern opacity-40 pointer-events-none" aria-hidden="true" />

            <div className="relative max-w-6xl mx-auto px-6">
                <SectionHeading
                    label="Projects"
                    title="Shipped & Battle-Tested"
                    subtitle="Production systems solving real problems — not toy demos."
                />

                {/* Projects Grid — CSS Grid with equal heights */}
                <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
                    {projects.map((project, index) => (
                        <ProjectCard key={project.id} project={project} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
}
