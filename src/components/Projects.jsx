import { motion } from "framer-motion";

const projects = [
    {
        title: "Proxy Variable Exploration Tool - SAS",
        description:
            [
                "Built a web-based tool to detect proxy variables for sensitive data attributes like age, gender, or race, that may introduce bias into AI models.",
                "Integrated Correlation Analysis, FACET, and Association Rule Mining to analyze user-uploaded datasets.",
                "Designed full-stack architecture using ReactJS frontend, Python + Flask backend, and REST APIs for seamless communication.",
            ],
        image: "proj1.png",
        github: "https://github.com/galav12/proxy-wars",
    },
    {
        title: "ANAC Negotiation Agent",
        description:
            [
                "Developed a negotiation agent with a dynamic strategy that balanced self-interest and social welfare, optimizing offers using time-based utility thresholds and opponent modeling.",
                "Achieved highest average utility (0.82) and highest overall social welfare (1.33) out of 15 agents in a simulated tournament using the ANL 2023 testbed (e.g., DreamTeam109, Agent007).",
                "Designed a custom bidding algorithm with a tunable alpha parameter to prioritize mutually beneficial agreements, leading to a 92.8% agreement rate.",
            ],
        image: "proj2.png",
        github: "https://github.com/galav12/ANAC-negotiation",
    },
    {
        title: "Agricultural Analysis and Prediction using Crop Yield Data",
        description:
            [
                "Analyzed crop yield data to identify key agronomic factors affecting agricultural productivity.",
                "Implemented predictive models (Linear Regression, Random Forest, Support Vector Regression) achieving over 95% accuracy in forecasting crop yields.",
                "Utilized data visualization and feature selection to explore relationships between crop yield, crop type, climate conditions, and location."
            ],
        image: "proj3.png",
        github: "https://github.com/galav12/crop-yield-analysis",
    },
    {
        title: "IoT Plant Monitor",
        description:
            [
                "Developed an IoT-based smart monitoring system using Arduino Uno R4, moisture and light sensors to track soil moisture and light levels in real-time.",
                "Implemented MQTT protocol with EMQX broker for reliable wireless data communication and remote monitoring via Wi-Fi.",
                "Conducted extensive testing confirming accurate sensor readings and timely reporting, enabling automated plant care and potential scalability for larger applications.",
            ],
        image: "proj4.png",
        github: "https://github.com/galav12/iot-plant-monitor",
    },
    {
        title: "Personal Portfolio",
        description:
            [
                "Developed a responsive personal portfolio using React, Tailwind CSS, and Framer Motion, ensuring a seamless user experience across devices.",
                "Implemented engaging animations and clean, modern UI with a mobile-first design, effectively showcasing project highlights and technical skills.",
                "Emphasized component-based architecture and accessibility best practices, demonstrating strong frontend development expertise.",
            ],
        image: "proj5.png",
        github: "https://github.com/galav12/personal-portfolio",
    },
];

export const Projects = () => {

    return (
        <section className="container pt-25 pb-10 overflow-y-hidden flex flex-col">
            <h2 className="text-4xl font-bold text-center">Projects</h2>

            <div className="hidden lg:flex flex-col overflow-y-auto hide-scrollbar mt-15 gap-15 px-20">
                {projects.map((project, idx) => (
                    <div key={project.title} className="bg-card border-2 border-foreground/20 rounded-3xl p-8 lg:sticky" style={{
                        top: `calc(${idx * 40}px`
                    }}>
                        <div className="lg:grid lg:grid-cols-[55%_40%] lg:gap-[5%] px-5">
                            <div>
                                <h3 className="text-2xl font-semibold mb-1 text-primary">
                                    {project.title}
                                </h3>
                                <hr className="mb-6" />
                                <ul className="md:text-lg text-muted-foreground mb-8 flex-grow text-left list-disc pl-5 space-y-2">
                                    {project.description.map((item, idx) => (
                                        <li key={idx}><span>{item}</span></li>
                                    ))}
                                </ul>
                                <a
                                    href={project.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="cosmic-button inline-block mt-auto self-start mb-4"
                                >
                                    <span className="text-glow">View on GitHub</span>
                                </a>
                            </div>
                            <div>
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="rounded-md mt-4 mb-4 object-contain w-full my-auto mx-auto lg:mt-10"
                                    loading="lazy"
                                />
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="lg:hidden flex flex-col overflow-y-auto hide-scrollbar mt-15 gap-5 md:px-10">
                {projects.map((project) => (
                    <motion.div
                        key={project.title}
                        className="bg-card border-2 border-white/10 rounded-3xl p-8"
                        initial={{ opacity: 0.3, scale: 0.85 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        viewport={{ once: false, amount: 0.5 }} // 60% visible triggers animation
                    >
                        <h3 className="text-2xl font-semibold mb-4 text-primary">
                            {project.title}
                        </h3>
                        <ul className="text-muted-foreground list-disc pl-5 space-y-2 mb-6">
                            {project.description.map((item, idx) => (
                                <li key={idx}>{item}</li>
                            ))}
                        </ul>
                        <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="cosmic-button inline-block"
                        >
                            <span className="text-glow">View on GitHub</span>
                        </a>
                        <div>
                            <img
                                src={project.image}
                                alt={project.title}
                                className="rounded-md mt-4 mb-4 object-contain w-full my-auto mx-auto lg:mt-10"
                                loading="lazy"
                            />
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};
