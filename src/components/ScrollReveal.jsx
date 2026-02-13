import { motion } from "framer-motion";

/**
 * Animated section wrapper — fades in + slides up on scroll.
 * Uses Framer Motion's whileInView for optimal performance.
 */
export default function ScrollReveal({
    children,
    className = "",
    delay = 0,
    direction = "up",
}) {
    const offsets = {
        up: { y: 40, x: 0 },
        down: { y: -40, x: 0 },
        left: { y: 0, x: -40 },
        right: { y: 0, x: 40 },
    };

    const offset = offsets[direction] || offsets.up;

    return (
        <motion.div
            initial={{ opacity: 0, ...offset }}
            whileInView={{ opacity: 1, y: 0, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{
                duration: 0.6,
                delay,
                ease: [0.25, 0.1, 0.25, 1],
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
}
