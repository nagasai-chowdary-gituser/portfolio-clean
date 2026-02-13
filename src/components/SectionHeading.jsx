import ScrollReveal from "./ScrollReveal";

/**
 * Premium section heading with gradient text accent.
 */
export default function SectionHeading({ label, title, subtitle, center = true }) {
    return (
        <ScrollReveal className={`mb-8 md:mb-10 ${center ? "text-center" : ""}`}>
            {label && (
                <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-accent mb-3 px-3 py-1 rounded-full bg-accent-dim border border-accent/10">
                    {label}
                </span>
            )}
            <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-dark-50 leading-tight mt-2">
                {title}
            </h2>
            {subtitle && (
                <p className={`mt-4 text-base md:text-lg text-dark-300 leading-relaxed ${center ? "max-w-2xl mx-auto" : "max-w-2xl"}`}>
                    {subtitle}
                </p>
            )}
        </ScrollReveal>
    );
}
