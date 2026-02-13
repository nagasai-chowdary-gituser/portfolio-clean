import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../sections/Footer";
import StarfieldCanvas from "../components/StarfieldCanvas";

/**
 * Shared layout wrapper — Navbar + StarfieldCanvas + page content + Footer.
 * The starfield is a fixed canvas behind everything.
 */
export default function Layout() {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "instant" });
    }, [pathname]);

    return (
        <>
            {/* Animated gradient mesh — deepest layer */}
            <div className="mesh-gradient-bg" aria-hidden="true">
                <div className="gradient-orb gradient-orb-1" />
                <div className="gradient-orb gradient-orb-2" />
                <div className="gradient-orb gradient-orb-3" />
                <div className="gradient-orb gradient-orb-4" />
                <div className="gradient-orb gradient-orb-5" />
            </div>

            {/* Interactive starfield background — fixed behind everything */}
            <StarfieldCanvas />

            {/* Animated grid overlay */}
            <div className="grid-bg" aria-hidden="true" />

            {/* Navigation */}
            <Navbar />

            {/* Page Content */}
            <main className="relative z-10 min-h-screen">
                <Outlet />
            </main>

            {/* Footer */}
            <Footer />
        </>
    );
}
