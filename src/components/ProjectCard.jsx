import { motion } from "framer-motion";
import { Icons } from "./Icons";
import ScrollReveal from "./ScrollReveal";

/**
 * Premium dark-mode project card with glow effects and depth.
 */
export default function ProjectCard({ project, index }) {
    return (
        <ScrollReveal delay={index * 0.1}>
            <motion.article
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="group relative glass rounded-2xl overflow-hidden card-3d h-full"
            >
                {/* Animated gradient border on hover */}
                <div
                    className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{
                        background: `linear-gradient(135deg, ${project.color}20, transparent 40%, ${project.color}10)`,
                    }}
                />

                {/* Color accent bar with gradient */}
                <div
                    className="h-1 w-full"
                    style={{ background: `linear-gradient(90deg, ${project.color}, ${project.color}44, transparent)` }}
                />

                <div className="relative p-6 md:p-8">
                    {/* Header */}
                    <div className="flex items-start justify-between gap-4 mb-5">
                        <div className="flex-1">
                            {/* Project number */}
                            <span className="text-[10px] font-mono text-dark-400 bg-dark-800/50 px-2 py-0.5 rounded-md mb-3 inline-block">
                                PROJECT 0{project.id}
                            </span>
                            <h3 className="text-xl md:text-2xl font-bold text-dark-50 group-hover:text-accent transition-colors duration-300">
                                {project.name}
                            </h3>
                            <p className="text-sm text-dark-300 mt-1.5 font-medium">
                                {project.subtitle}
                            </p>
                        </div>
                        <div className="flex items-center gap-2 shrink-0">
                            {project.github && (
                                <a
                                    href={project.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-2.5 rounded-xl text-dark-400 hover:text-accent glass glass-hover transition-all duration-300"
                                    aria-label={`${project.name} GitHub`}
                                >
                                    <Icons.github className="w-5 h-5" />
                                </a>
                            )}
                            {project.demo && (
                                <a
                                    href={project.demo}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-2.5 rounded-xl text-dark-400 hover:text-accent glass glass-hover transition-all duration-300"
                                    aria-label={`${project.name} Demo`}
                                >
                                    <Icons.externalLink className="w-5 h-5" />
                                </a>
                            )}
                        </div>
                    </div>

                    {/* Problem & Solution */}
                    <div className="grid md:grid-cols-2 gap-4 mb-6">
                        <div className="p-4 rounded-xl bg-dark-900/50 border border-border">
                            <span className="text-[10px] font-semibold uppercase tracking-wider text-neon-pink/80 mb-1.5 block">
                                ⚡ Problem
                            </span>
                            <p className="text-sm text-dark-200 leading-relaxed">
                                {project.problem}
                            </p>
                        </div>
                        <div className="p-4 rounded-xl bg-dark-900/50 border border-border">
                            <span className="text-[10px] font-semibold uppercase tracking-wider text-neon-cyan/80 mb-1.5 block">
                                ✦ Solution
                            </span>
                            <p className="text-sm text-dark-200 leading-relaxed">
                                {project.solution}
                            </p>
                        </div>
                    </div>

                    {/* Results */}
                    {project.results && (
                        <div className="mb-5 p-4 rounded-xl bg-accent-dim border border-accent/10">
                            <div className="flex items-start gap-2.5">
                                <Icons.check className="w-4 h-4 text-accent mt-0.5 shrink-0" />
                                <p className="text-sm text-dark-100 leading-relaxed">
                                    <span className="font-semibold text-accent">Impact: </span>
                                    {project.results}
                                </p>
                            </div>
                        </div>
                    )}

                    {/* Tech Stack Tags */}
                    <div className="flex flex-wrap gap-2">
                        {project.stack.map((tech) => (
                            <span key={tech} className="tech-badge">
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>
            </motion.article>
        </ScrollReveal>
    );
}
