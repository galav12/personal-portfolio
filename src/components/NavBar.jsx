import { useEffect, useState } from "react";
import { cn } from "../lib/utils";
import { Award, BriefcaseBusiness, Code, Download, Home, Menu, UserCircle2, X } from "lucide-react";
import { FaLinkedin, FaGithubSquare } from "react-icons/fa"

const navItems = [
    { icon: <Home className="size-5" />, name: "Home", href: "#home" },
    { icon: <UserCircle2 className="size-5" />, name: "About", href: "#about" },
    { icon: <BriefcaseBusiness className="size-5" />, name: "Experience", href: "#experience" },
    { icon: <Code className="size-5" />, name: "Projects", href: "#projects" },
    // { icon: <Award className="size-5" />, name: "Certifications", href: "#certifications" },
];

export const Navbar = ({ activeSection }) => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };

        window.addEventListener("scroll", handleScroll);
        return window.removeEventListener("scroll", handleScroll);
    }, [])

    return (
        <nav className={cn(
            "fixed w-full z-40 transition-all duration-300",
            isScrolled ? "py-3 bg-background/80 backdrop-blur-md shadow-xs" : "py-5"
        )}>

            <div className="container flex items-center justify-between md:justify-center">
                <a href="#home" className="md:hidden text-xl font-bold flex items-center">
                    <div>
                        <span className="relative z-50 text-glow text-primary">Galav</span>
                        <span className="relative z-50 text-glow text-muted-foreground"> Sharma</span>
                    </div>
                </a>

                {/* Desktop */}
                <div className="hidden md:flex space-x-8 items-center border-2 border-foreground/50 rounded-full pl-7 py-2">
                    {navItems.map((item, key) => (
                        <a
                            key={key}
                            href={item.href}
                            className={cn(
                                "text-foreground/80 hover:text-primary transition-colors duration-300",
                                activeSection === item.href.substring(1) && "text-primary border-2 border-foreground/50 rounded-full px-2 py-1 font-semibold"
                            )}
                        >
                            <div className="flex items-center space-x-2">
                                {item.icon}
                                <span>{item.name}</span>
                            </div>
                        </a>
                    ))}
                    {/* Footer Desktop */}
                    <footer className="fixed hidden md:flex flex-row w-full z-40 transition-all duration-300 py-2 bottom-0 left-0 gap-x-10 px-15 items-center" >
                        <a href="https://www.linkedin.com/in/galav-sharma-372156233" className="hover:scale-120">
                            <FaLinkedin className="scale-200" />
                        </a>
                        <a href="https://github.com/galav12" className="hover:scale-120">
                            <FaGithubSquare className="scale-200" />
                        </a>
                        <a href="Resume.pdf" download className="bg-background border-2 border-foreground/50 py-1 px-4 rounded-full hover:scale-110" >
                            <div className="flex flex-row gap-x-4">
                                <Download className="scale-100" />
                                <span>Download Resume</span>
                            </div>
                        </a>
                    </footer>
                </div>

                {/* Mobile */}
                <button
                    onClick={() => setIsMenuOpen((prev) => !prev)}
                    className="md:hidden p-2 text-foreground z-50"
                    aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
                >
                    {isMenuOpen ? <X size={24} /> : <Menu size={24} />}{" "}
                </button>
                <div
                    className={cn(
                        "fixed inset-0 bg-background/95 backdroup-blur-md z-40 flex flex-col items-center justify-center",
                        "transition-all duration-300 md:hidden",
                        isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
                    )}
                >
                    <div className="flex flex-col space-y-8 text-xl">
                        {navItems.map((item, key) => (
                            <a
                                key={key}
                                href={item.href}
                                className="text-foreground/80 hover:text-primary transition-colors duration-300"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {item.name}
                            </a>
                        ))}
                    </div>
                    {/* Footer Mobile */}
                    <footer className="fixed flex md:hidden flex-row justify-center w-full z-50 transition-all duration-300 py-2 bottom-0 gap-x-10 px-15 items-center" >
                        <a href="https://www.linkedin.com/in/galav-sharma-372156233">
                            <FaLinkedin className="scale-200" />
                        </a>
                        <a href="https://github.com/galav12">
                            <FaGithubSquare className="scale-200" />
                        </a>
                        <a href="Resume.pdf" download className="bg-background border-2 border-foreground/50 py-2 px-4 rounded-full" >
                            <div className="flex flex-row gap-x-4">
                                <Download className="scale-100" />
                                <span>Resume</span>
                            </div>
                        </a>
                    </footer>
                </div>

            </div>
        </nav>
    )
}
