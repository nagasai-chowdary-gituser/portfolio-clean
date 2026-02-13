import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Icons } from "../components/Icons";

export default function NotFoundPage() {
    return (
        <div className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden">
            {/* Background glows */}
            <div className="absolute top-1/3 left-1/3 w-100 h-100 rounded-full bg-neon-cyan/6 blur-[100px]" />
            <div className="absolute bottom-1/3 right-1/3 w-75 h-75 rounded-full bg-neon-purple/6 blur-[80px]" />

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center max-w-md relative"
            >
                <div className="text-8xl font-extrabold gradient-text mb-4">404</div>
                <h1 className="text-2xl font-bold text-dark-50 mb-3">Page Not Found</h1>
                <p className="text-dark-400 text-sm mb-8 leading-relaxed">
                    The page you're looking for doesn't exist or has been moved.
                </p>
                <Link to="/" className="btn-neon">
                    <span className="relative z-10 flex items-center gap-2">
                        <Icons.arrowDown className="w-4 h-4 rotate-90" />
                        Back to Home
                    </span>
                </Link>
            </motion.div>
        </div>
    );
}
