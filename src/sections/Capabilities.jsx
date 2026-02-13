import { capabilities } from "../data/portfolio";
import { Icons } from "../components/Icons";
import SectionHeading from "../components/SectionHeading";
import ScrollReveal from "../components/ScrollReveal";
import { motion } from "framer-motion";

/**
 * Capability card with icon and description
 */
function CapabilityCard({ capability, index }) {
    const IconComponent = Icons[capability.icon];

    return (
        <ScrollReveal delay={index * 0.08}>
            <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className="group glass rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300 h-full"
            >
                <div className="w-11 h-11 rounded-xl bg-accent-muted flex items-center justify-center mb-4 group-hover:bg-accent group-hover:text-white text-accent transition-all duration-300">
                    {IconComponent && <IconComponent className="w-5 h-5" />}
                </div>
                <h3 className="text-base font-semibold text-navy-800 mb-2">
                    {capability.title}
                </h3>
                <p className="text-sm text-navy-400 leading-relaxed">
                    {capability.description}
                </p>
            </motion.div>
        </ScrollReveal>
    );
}

export default function Capabilities() {
    return (
        <section id="capabilities" className="section-padding bg-surface-100/50">
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
    );
}
