import { useState, useEffect } from "react";

import { ThemeToggle } from "../components/ThemeToggle";
import { Navbar } from "../components/NavBar";
import { FadeSection } from "../components/FadeSection";
import { Hero } from "../components/Hero";
import { About } from "../components/About";
import { Projects } from "../components/Projects";
import { Experience } from "../components/Experience";
import { Certifications } from "../components/Certifications";
import { Background } from "../components/Background";

export const Home = () => {

    const [activeSection, setActiveSection] = useState("home")

    useEffect(() => {
        const mainElement = document.querySelector("main"); // Select the main element

        const handleScroll = () => {
            const scrollPosition = mainElement.scrollTop;
            const screenHeight = window.innerHeight;


            if (scrollPosition >= 4 * screenHeight - 50) {
                setActiveSection("certifications");
            } else if (scrollPosition >= 3 * screenHeight - 50) {
                setActiveSection("projects");
            } else if (scrollPosition >= 2 * screenHeight - 50) {
                setActiveSection("experience");
            } else if (scrollPosition >= screenHeight - 100) {
                setActiveSection("about");
            } else {
                setActiveSection("home");
            }
        };

        mainElement.addEventListener("scroll", handleScroll);

        return () => {
            mainElement.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div className="min-h-dvh bg-background text-foreground overflow-x-hidden relative">
            {/* Theme Toggle */}
            <ThemeToggle />

            {/* Background */}
            <Background />

            {/* Navbar */}
            <Navbar activeSection={activeSection} />


            {/* Main Content */}
            <main className="h-screen snap-y snap-mandatory overflow-y-scroll scroll-smooth hide-scrollbar">
                <FadeSection id="home">
                    <Hero />
                </FadeSection>

                <FadeSection id="about">
                    <About />
                </FadeSection>

                <FadeSection id="experience">
                    <Experience />
                </FadeSection>

                <FadeSection id="projects">
                    <Projects />
                </FadeSection>

                {/* <FadeSection id="certifications">
                    <Certifications />
                </FadeSection> */}
            </main>
        </div>
    );
};
