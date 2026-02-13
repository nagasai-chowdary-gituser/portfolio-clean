import { useEffect, useRef, useState } from "react";

/**
 * Custom hook for detecting when an element enters the viewport.
 * Uses IntersectionObserver for performance (no scroll listeners).
 */
export function useInView(options = {}) {
    const ref = useRef(null);
    const [isInView, setIsInView] = useState(false);

    useEffect(() => {
        const element = ref.current;
        if (!element) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsInView(true);
                    // Once visible, stop observing (animate once)
                    observer.unobserve(element);
                }
            },
            {
                threshold: options.threshold || 0.15,
                rootMargin: options.rootMargin || "0px 0px -60px 0px",
            }
        );

        observer.observe(element);
        return () => observer.disconnect();
    }, [options.threshold, options.rootMargin]);

    return [ref, isInView];
}
