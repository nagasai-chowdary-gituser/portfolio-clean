import { personalInfo, socialLinks } from "../data/portfolio";
import { Icons } from "../components/Icons";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="relative border-t border-border">
            {/* Gradient line at top */}
            <div className="section-divider" />

            <div className="max-w-6xl mx-auto px-6 py-14">
                <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                    {/* Brand */}
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-linear-to-br from-neon-cyan to-neon-blue flex items-center justify-center text-dark-950 font-bold text-base">
                            {personalInfo.firstName.charAt(0)}
                        </div>
                        <div>
                            <div className="font-semibold text-dark-50 text-sm">{personalInfo.name}</div>
                            <div className="text-xs text-dark-400">{personalInfo.title}</div>
                        </div>
                    </div>

                    {/* Social */}
                    <div className="flex items-center gap-2">
                        {socialLinks.map((link) => {
                            const IconComponent = Icons[link.icon];
                            return (
                                <a
                                    key={link.name}
                                    href={link.url}
                                    target={link.icon !== "email" ? "_blank" : undefined}
                                    rel={link.icon !== "email" ? "noopener noreferrer" : undefined}
                                    className="p-2.5 rounded-xl text-dark-400 hover:text-accent glass glass-hover transition-all duration-300"
                                    aria-label={link.name}
                                >
                                    {IconComponent && <IconComponent className="w-4 h-4" />}
                                </a>
                            );
                        })}
                    </div>
                </div>

                {/* Divider */}
                <div className="mt-8 pt-6 border-t border-border">
                    <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
                        <p className="text-xs text-dark-400">
                            © {currentYear} {personalInfo.name}. All rights reserved.
                        </p>
                        <p className="text-xs text-dark-500">
                            Designed and built by{" "}
                            <a
                                href="https://rudexai.tech"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="font-semibold gradient-text-static hover:opacity-80 transition-opacity"
                            >
                                Rudrxai
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
