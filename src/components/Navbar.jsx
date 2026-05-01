import { useState, useEffect, useRef } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Icons } from "./Icons";
import { personalInfo } from "../data/portfolio";
import { useTheme } from "../context/ThemeContext";
import resumePDF from "../data/Nagasai's_resume.pdf";

const navLinks = [
    { label: "Home", to: "/" },
    { label: "About", to: "/about" },
    { label: "Projects", to: "/projects" },
    { label: "Tech Stack", to: "/tech" },
    { label: "Contact", to: "/contact" },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const [resumeOpen, setResumeOpen] = useState(false);
    const resumeRef = useRef(null);
    const location = useLocation();
    const { theme, toggleTheme } = useTheme();

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 40);
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        setMobileOpen(false);
    }, [location.pathname]);

    useEffect(() => {
        document.body.style.overflow = mobileOpen ? "hidden" : "";
        return () => { document.body.style.overflow = ""; };
    }, [mobileOpen]);

    // Close resume dropdown on outside click
    useEffect(() => {
        const handleClickOutside = (e) => {
            if (resumeRef.current && !resumeRef.current.contains(e.target)) {
                setResumeOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    // Close resume dropdown on route change
    useEffect(() => {
        setResumeOpen(false);
    }, [location.pathname]);

    return (
        <>
            <motion.header
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${scrolled
                    ? "glass-bright shadow-md shadow-black/5 py-3"
                    : "bg-transparent py-5"
                    }`}
            >
                <nav className="max-w-6xl mx-auto px-6 flex items-center justify-between">
                    {/* Logo */}
                    <Link to="/" className="flex items-center gap-2.5 group" aria-label="Home">
                        <div className="relative">
                            <div className="w-9 h-9 rounded-xl bg-linear-to-br from-neon-cyan to-neon-blue flex items-center justify-center text-dark-950 font-bold text-sm transition-transform duration-300 group-hover:scale-110">
                                {personalInfo.firstName.charAt(0)}
                            </div>
                            <div className="absolute inset-0 rounded-xl bg-linear-to-br from-neon-cyan to-neon-blue opacity-0 group-hover:opacity-40 blur-lg transition-opacity duration-300" />
                        </div>
                        <span className="font-semibold text-dark-50 hidden sm:block tracking-tight">
                            {personalInfo.firstName}
                            <span className="text-dark-400">.</span>
                        </span>
                    </Link>

                    {/* Desktop Nav */}
                    <ul className="hidden md:flex items-center gap-1">
                        {navLinks.map((link) => (
                            <li key={link.to}>
                                <NavLink
                                    to={link.to}
                                    end={link.to === "/"}
                                    className={({ isActive }) =>
                                        `relative px-3.5 py-2 text-sm font-medium rounded-lg transition-all duration-300 ${isActive
                                            ? "text-accent"
                                            : "text-dark-300 hover:text-dark-50"
                                        }`
                                    }
                                >
                                    {({ isActive }) => (
                                        <>
                                            {link.label}
                                            {isActive && (
                                                <motion.div
                                                    layoutId="nav-indicator"
                                                    className="absolute bottom-0 left-2 right-2 h-0.5 bg-linear-to-r from-neon-cyan to-neon-blue rounded-full"
                                                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                                                />
                                            )}
                                        </>
                                    )}
                                </NavLink>
                            </li>
                        ))}
                    </ul>

                    {/* CTA + Resume + Theme Toggle + Mobile Toggle */}
                    <div className="flex items-center gap-2">
                        {/* Resume Dropdown */}
                        <div className="relative hidden md:block" ref={resumeRef}>
                            <motion.button
                                onClick={() => setResumeOpen(!resumeOpen)}
                                whileTap={{ scale: 0.95 }}
                                className="flex items-center gap-1.5 px-3 py-2 text-sm font-medium rounded-xl text-dark-300 hover:text-accent glass glass-hover transition-all duration-300"
                                aria-label="Resume options"
                            >
                                <Icons.fileText className="w-4 h-4" />
                                Resume
                            </motion.button>
                            <AnimatePresence>
                                {resumeOpen && (
                                    <motion.div
                                        initial={{ opacity: 0, y: -8, scale: 0.95 }}
                                        animate={{ opacity: 1, y: 0, scale: 1 }}
                                        exit={{ opacity: 0, y: -8, scale: 0.95 }}
                                        transition={{ duration: 0.15, ease: "easeOut" }}
                                        className="absolute right-0 top-full mt-2 w-48 glass-bright rounded-xl border border-border shadow-glow-md overflow-hidden z-50"
                                    >
                                        <a
                                            href={resumePDF}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-2.5 px-4 py-3 text-sm text-dark-200 hover:text-accent hover:bg-accent-dim transition-all duration-200"
                                            onClick={() => setResumeOpen(false)}
                                        >
                                            <Icons.eye className="w-4 h-4" />
                                            View Resume
                                        </a>
                                        <div className="h-px bg-border" />
                                        <a
                                            href={resumePDF}
                                            download="Nagasai_Resume.pdf"
                                            className="flex items-center gap-2.5 px-4 py-3 text-sm text-dark-200 hover:text-accent hover:bg-accent-dim transition-all duration-200"
                                            onClick={() => setResumeOpen(false)}
                                        >
                                            <Icons.download className="w-4 h-4" />
                                            Download Resume
                                        </a>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>

                        {/* Theme Toggle */}
                        <motion.button
                            onClick={toggleTheme}
                            whileTap={{ scale: 0.9 }}
                            className="p-2 rounded-xl text-dark-400 hover:text-accent glass glass-hover transition-all duration-300"
                            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
                        >
                            <AnimatePresence mode="wait" initial={false}>
                                {theme === "dark" ? (
                                    <motion.div key="sun" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
                                        <Icons.sun className="w-4.5 h-4.5" />
                                    </motion.div>
                                ) : (
                                    <motion.div key="moon" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}>
                                        <Icons.moon className="w-4.5 h-4.5" />
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.button>

                        <Link
                            to="/contact"
                            className="hidden md:inline-flex btn-neon text-xs py-2 px-4"
                        >
                            <span className="relative z-10">Get in Touch</span>
                        </Link>
                        <button
                            onClick={() => setMobileOpen(!mobileOpen)}
                            className="md:hidden p-2 rounded-lg hover:bg-dark-700 text-dark-200 hover:text-dark-50 transition-colors"
                            aria-label="Toggle menu"
                            aria-expanded={mobileOpen}
                        >
                            {mobileOpen ? (
                                <Icons.close className="w-5 h-5" />
                            ) : (
                                <Icons.menu className="w-5 h-5" />
                            )}
                        </button>
                    </div>
                </nav>
            </motion.header>

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm md:hidden"
                        onClick={() => setMobileOpen(false)}
                    >
                        <motion.div
                            initial={{ x: "100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "100%" }}
                            transition={{ type: "tween", duration: 0.3, ease: "easeOut" }}
                            className="absolute right-0 top-0 h-full w-72 glass-bright p-6 pt-20"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <ul className="flex flex-col gap-1">
                                {navLinks.map((link) => (
                                    <li key={link.to}>
                                        <NavLink
                                            to={link.to}
                                            end={link.to === "/"}
                                            className={({ isActive }) =>
                                                `block px-4 py-3 text-base font-medium rounded-xl transition-all ${isActive
                                                    ? "text-accent bg-accent-dim"
                                                    : "text-dark-200 hover:text-dark-50 hover:bg-dark-700"
                                                }`
                                            }
                                        >
                                            {link.label}
                                        </NavLink>
                                    </li>
                                ))}
                                {/* Resume options in mobile */}
                                <li className="mt-4 pt-4 border-t border-border">
                                    <p className="px-4 pb-2 text-xs font-semibold uppercase tracking-wider text-dark-400">Resume</p>
                                    <a
                                        href={resumePDF}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2.5 px-4 py-3 text-base font-medium rounded-xl text-dark-200 hover:text-accent hover:bg-accent-dim transition-all"
                                    >
                                        <Icons.eye className="w-4 h-4" />
                                        View Resume
                                    </a>
                                    <a
                                        href={resumePDF}
                                        download="Nagasai_Resume.pdf"
                                        className="flex items-center gap-2.5 px-4 py-3 text-base font-medium rounded-xl text-dark-200 hover:text-accent hover:bg-accent-dim transition-all"
                                    >
                                        <Icons.download className="w-4 h-4" />
                                        Download Resume
                                    </a>
                                </li>
                                <li className="mt-2 pt-4 border-t border-border">
                                    <Link
                                        to="/contact"
                                        className="block text-center btn-neon text-sm"
                                    >
                                        <span className="relative z-10">Get in Touch</span>
                                    </Link>
                                </li>
                            </ul>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
